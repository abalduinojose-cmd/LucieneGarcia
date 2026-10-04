"""
Retrato do hero com o fundo de estúdio estendido para a ESQUERDA.

No hero a foto fica à direita e se dissolve para a esquerda, no texto. Na
foto original a cliente ocupa de 12% a 73% da largura, então o degradê
cairia no cotovelo dela. Aqui o fundo marrom liso ganha 420px à esquerda,
feitos com a faixa limpa da borda (x 0-110) espelhada em ladrilhos: o
ladrilho colado na foto é o espelho, então a emenda é contínua. A extensão
é desfocada e recebe grão para casar com a textura do pano. A pessoa e a
cadeira não são tocadas: só existe pano novo, que no site fica quase todo
dentro do degradê.

    python scripts/retrato-largo.py
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / "src" / "assets" / "fotos" / "luciene-estudio.jpg"
DESTINO = RAIZ / "src" / "assets" / "fotos" / "luciene-estudio-larga.jpg"
EXTRA, FAIXA = 420, 110

foto = Image.open(ORIGEM).convert("RGB")
W, H = foto.size
faixa = foto.crop((0, 0, FAIXA, H))
espelho = faixa.transpose(Image.FLIP_LEFT_RIGHT)

# da direita para a esquerda: espelho (colado na foto), faixa, espelho, ...
ladrilhos = []
largura = 0
i = 0
while largura < EXTRA:
    ladrilhos.append(espelho if i % 2 == 0 else faixa)
    largura += FAIXA
    i += 1
extensao = Image.new("RGB", (largura, H))
x = largura
for ladrilho in ladrilhos:
    x -= FAIXA
    extensao.paste(ladrilho, (x, 0))
extensao = extensao.crop((largura - EXTRA, 0, largura, H))

# desfoque para apagar a simetria dos ladrilhos, mais forte longe da emenda
suave = np.asarray(extensao.filter(ImageFilter.GaussianBlur(18))).astype(float)
leve = np.asarray(extensao.filter(ImageFilter.GaussianBlur(3))).astype(float)
peso = np.clip(np.linspace(1, 0, EXTRA) * 1.6, 0, 1)[None, :, None]  # 1 na ponta, 0 na emenda
ext = suave * peso + leve * (1 - peso)

# o pano escurece um pouco para a borda, como a vinheta do estúdio
ext *= (0.82 + 0.18 * np.linspace(0, 1, EXTRA))[None, :, None]

# grão parecido com o do pano
rng = np.random.default_rng(7)
ext += rng.normal(0, 2.2, ext.shape)

saida = Image.new("RGB", (W + EXTRA, H))
saida.paste(Image.fromarray(np.clip(ext, 0, 255).astype("uint8")), (0, 0))
saida.paste(foto, (EXTRA, 0))
saida.save(DESTINO, quality=88, optimize=True, progressive=True)
print("salvo", DESTINO.name, saida.size)
