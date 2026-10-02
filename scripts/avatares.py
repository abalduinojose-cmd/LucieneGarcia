"""Baixa a foto de perfil de cada avaliação escolhida (Google, via Apify).

As URLs vêm do Reviews-Scraper com personalData: true. Baixar em vez de
apontar para lh3.googleusercontent.com deixa o site independente do Google.
"""
from io import BytesIO
from pathlib import Path
from urllib.request import Request, urlopen

from PIL import Image

DESTINO = Path(__file__).resolve().parent.parent / "src" / "assets" / "avaliacoes"

FOTOS = {
    "robson-garske": "a-/ALV-UjVq0YsjSN_MpknES-PNVUu-cerdNbTZsX5tprjZ4_qJy90RQbp6bw",
    "sabrina-miraglia": "a-/ALV-UjVbnGJ7kJaytAgcI8U2TJ8w3EPOkA5PAKgMSL8RLATiXwe1xcia",
    "duda-costa": "a-/ALV-UjWi9nQVNK01EF8eqqoNB0OvaFLuV5DluMroHVemwbbzo9GrxBfg",
    "pimenta-bruno": "a-/ALV-UjXuyHH6zH0WKNoNNg0flEmywYjEHs4UKPmEtwrZkwvHbBgli3x1nQ",
    "raphael-felix-de-cicco": "a-/ALV-UjWzuIhCrh-rqMq6W8OJP1HU5PzCijaeX7n3UqWml5nr2R_9IilZsg",
    "barbara-carneiro": "a-/ALV-UjVxHuMQQcZu0Ry1ueG1hHo0_nErgut0rNMt4sDXDSYAcxW6SM8",
    "tatiane-ribeiro": "a-/ALV-UjVvgFteS29rOElMx_rUD6XUOM-KeXBL9ZsE0-nwCvAy_qbSBVaC",
    "luisa-costa": "a-/ALV-UjUQw9v7Up4UZMUBOGwDPfxCLQPbWngYkGLjiDjQ8V5KD91U9eyE",
    "andrea-correa": "a-/ALV-UjV3ATtyQ-6LqZj7YqsscL-eXXg661di_x4NqbQRKKfdla-fN1Y",
    "rita-ritton": "a-/ALV-UjWHVTmnpi1x6ZoIAkI3e2fLElUYcKTa8TT_BzNQt5SbmsuaWEc",
    "alice-quirino": "a-/ALV-UjVfDdm7xwiLC7evKUBoxYvQ4fnThXyXCrrjOVLdKiyN6eB683cg",
    "cirom-alves": "a-/ALV-UjUo7maFTsSiwlQChL4ST2BSByj9vQoArYD9mrcp7FbVnci8hIvY",
    "wilclan-leal": "a-/ALV-UjVkmrk6DDk5-T4fn1919aIAQIIzNcFwuu8jx4ioqmGXombHShA",
    "sandra-botelho": "a-/ALV-UjVD0e1CQsCER-jRE2TBUjTiAaJsFUwiImX3tTbMHJSMowNac-cbig",
    "kleber-willer": "a-/ALV-UjXQNZL8Eymi4J-b5UupDru06ofD2UgpFmZZzlaI1UXKQlaoo8c",
    "liliane-macedo": "a-/ALV-UjXM5y3VS9L2ftNT7H132neuDHIFJm-B3PL_2B1tFe82tx19aeNY",
}


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for nome, caminho in FOTOS.items():
        url = f"https://lh3.googleusercontent.com/{caminho}=s160-c-rp-mo-br100"
        dados = urlopen(Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30).read()
        Image.open(BytesIO(dados)).convert("RGB").resize((96, 96), Image.LANCZOS).save(
            DESTINO / f"{nome}.jpg", quality=86
        )
        print(nome)


if __name__ == "__main__":
    main()
