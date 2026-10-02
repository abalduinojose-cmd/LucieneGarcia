import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { FOTOS } from "@/lib/midia";
import { HERO, whatsapp } from "@/lib/site-config";

/**
 * Hero do Cabana: foto em tela cheia, véu, texto embaixo à esquerda e a
 * faixa de selos no pé. O retrato é vertical, então no desktop ele ocupa a
 * metade direita e o véu lateral funde a borda no preto; no celular a caixa
 * tem a proporção do retrato e a base se dissolve no breu.
 *
 * Tudo é Server Component. O h1 não anima: é o candidato a LCP.
 */
export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="titulo-hero"
      className="luz relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ink"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-20 h-[64svh] overflow-hidden md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[58%] lg:w-[52%]"
      >
        <div className="hero-zoom absolute inset-0">
          <Image
            src={FOTOS.lucieneEstudio}
            alt={HERO.retratoAlt}
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            quality={70}
            sizes="(min-width: 1024px) 52vw, (min-width: 768px) 58vw, 100vw"
            className="object-cover object-[50%_18%]"
          />
        </div>
        {/* dissolve a base (celular) e a borda esquerda (desktop) no breu,
            para a foto não virar um recorte */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-ink md:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-ink to-transparent md:block" />
      </div>

      <div aria-hidden className="veu-hero absolute inset-0 -z-10" />
      {/* escurinho a mais que clareia na chegada */}
      <div aria-hidden className="hero-clarear absolute inset-0 -z-10 bg-ink" />

      <div className="container-page flex flex-1 items-end pb-12 pt-[46svh] md:pb-16 md:pt-32">
        <div className="max-w-2xl">
          <p className="rise rotulo-caps flex items-center gap-3 text-[0.625rem] text-gold-light sm:text-[0.7rem]">
            <span aria-hidden className="traco-desenha h-px w-9 bg-gold" />
            {HERO.rotulo}
          </p>

          <h1 id="titulo-hero" className="mt-6 text-[clamp(2.6rem,6vw,4.8rem)]">
            {`${HERO.titulo} `}
            <span className="marca-texto">{HERO.tituloDestaque}</span>
          </h1>

          <p
            className="rise mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-gold-light/90 md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {HERO.subtitulo}
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
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

      <div className="rise border-t border-gold-light/15 bg-ink/40 backdrop-blur-sm" style={{ animationDelay: "360ms" }}>
        <ul className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-center md:gap-x-12 md:py-5">
          {HERO.selos.map((selo) => (
            <li key={selo} className="rotulo-caps flex items-center gap-2.5 text-[0.625rem] text-gold-light/90 sm:text-[0.7rem]">
              <span aria-hidden className="size-1 rounded-full bg-gold" />
              {selo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
