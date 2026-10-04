import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { LogoMarca } from "@/components/ui/Logo";
import { FOTOS } from "@/lib/midia";
import { HERO, whatsapp } from "@/lib/site-config";

/**
 * Hero claro: do tablet para cima, o texto fica à esquerda e o retrato ocupa
 * a metade direita, dissolvendo no creme para a esquerda num degradê leve
 * (máscara, não véu: a foto some no fundo em vez de ganhar uma camada
 * leitosa). A foto tem o fundo de estúdio estendido à esquerda
 * (scripts/retrato-largo.py) para o degradê cair no pano, não na cliente.
 * No celular o retrato vem em cima e se dissolve para baixo, no texto.
 *
 * O retrato começa abaixo do menu: o cabeçalho é transparente no topo.
 * Ao rolar, a foto desce mais devagar que a página e o texto sobe e esmaece
 * (na chegada da folha seguinte, ver globals.css). O h1 não anima na entrada: é o LCP.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="titulo-hero"
      className="relative isolate overflow-hidden bg-ink md:flex md:min-h-[min(100svh,62rem)] md:items-center"
    >
      <div className="hero-foto relative mt-[4.5rem] aspect-[4/5] w-full max-md:max-h-[34rem] md:absolute md:bottom-0 md:right-0 md:top-[4.5rem] md:-z-10 md:mt-0 md:aspect-auto md:w-[46%] lg:w-[48%]">
        <Image
          src={FOTOS.lucieneEstudio}
          alt={HERO.retratoAlt}
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          quality={75}
          sizes="(min-width: 1024px) 48vw, (min-width: 768px) 46vw, 100vw"
          className="object-cover object-[84%_top] md:object-[58%_top] lg:object-[25%_top]"
        />
      </div>

      <div className="container-page relative -mt-20 pb-16 md:mt-0 md:grid md:w-full md:grid-cols-12 md:gap-8 md:pb-20 md:pt-32 lg:pt-36">
        <div className="hero-texto md:col-span-6 md:col-start-1">
          {/* cartão de visita: o monograma LG dourado, o nome e a OAB */}
          <p className="rise inline-flex max-w-full items-center gap-3 rounded-full border border-gold/35 bg-ink-card py-1.5 pl-1.5 pr-5 shadow-[0_10px_30px_-20px_rgb(164_129_61/0.6)]">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-preto">
              <LogoMarca className="h-6" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.01em] text-gold-light">
                {HERO.chipNome}
              </span>
              <span className="truncate text-[0.75rem] text-champagne">{HERO.chipDetalhe}</span>
            </span>
          </p>

          <p
            className="rise rotulo-caps mt-6 flex items-start gap-3 text-[0.6875rem] leading-relaxed text-gold-dark sm:text-[0.75rem]"
            style={{ animationDelay: "60ms" }}
          >
            <span aria-hidden className="traco-desenha mt-[0.55em] h-px w-8 shrink-0 bg-gold" />
            {HERO.especialidade}
          </p>

          <h1 id="titulo-hero" className="mt-4 text-[clamp(2.5rem,4.6vw,4.4rem)]">
            {`${HERO.titulo} `}
            <span className="marca-texto">{HERO.tituloDestaque}</span>
          </h1>

          <p
            className="rise mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-champagne md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            <span className="font-semibold text-gold-light">{HERO.subtituloDestaque}</span>{" "}
            {HERO.subtitulo}
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button href={whatsapp("hero")} tamanho="lg" seta>
              {HERO.cta}
            </Button>
            <Button href="#inventario" variante="contorno" tamanho="lg">
              {HERO.ctaSecundario}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
