"""Gera os derivados do logo a partir da arte do cliente.

A arte já vem com fundo transparente (webp RGBA), então basta recortar.
A sombra suave que acompanha o relevo dourado tem alfa muito baixo; abaixo de
LIMIAR ela é descartada, senão vira uma névoa cinza em volta das letras no
fundo preto do site.

Saídas em src/assets/logo/ (importadas pelo next/image):
  luciene-garcia.png   logo completo (marca + nome + ADVOCACIA)
  marca.png            só o quadrado com o monograma, para o cabeçalho
"""

from pathlib import Path

import numpy as np
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / "midia" / "logo" / "logo-original.webp"
DESTINO = RAIZ / "src" / "assets" / "logo"
LIMIAR = 60


def limpar(img: Image.Image) -> Image.Image:
    a = np.asarray(img).copy()
    alfa = a[..., 3].astype(np.float64)
    # rampa curta: some a sombra, a borda do ouro continua suave
    a[..., 3] = np.clip((alfa - LIMIAR) / (200 - LIMIAR) * 255, 0, 255).astype(np.uint8)
    return Image.fromarray(a, "RGBA")


def recortar(img: Image.Image, margem: int = 4) -> Image.Image:
    caixa = img.getchannel("A").point(lambda v: 255 if v > 0 else 0).getbbox()
    assert caixa, "logo vazio"
    x0, y0, x1, y1 = caixa
    return img.crop((max(x0 - margem, 0), max(y0 - margem, 0), x1 + margem, y1 + margem))


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    rgba = limpar(Image.open(ORIGEM).convert("RGBA"))

    completo = recortar(rgba)
    completo.thumbnail((1200, 1200), Image.LANCZOS)
    completo.save(DESTINO / "luciene-garcia.png", optimize=True)

    # A marca ocupa o primeiro quarto da arte; o nome começa depois de x=500.
    marca = recortar(rgba.crop((0, 0, 500, rgba.height)))
    marca.thumbnail((240, 240), Image.LANCZOS)
    marca.save(DESTINO / "marca.png", optimize=True)

    for nome in ("luciene-garcia.png", "marca.png"):
        img = Image.open(DESTINO / nome)
        print(nome, img.size, f"{(DESTINO / nome).stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
