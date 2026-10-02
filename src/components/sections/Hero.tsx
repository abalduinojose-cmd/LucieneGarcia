import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icone } from "@/components/ui/Icone";
import { LogoMarca } from "@/components/ui/Logo";
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
          {/* cartão de visita: o monograma LG dourado num círculo preto, o nome e a cidade, numa
              pílula de vidro com fio dourado e um brilho de luz no topo */}
          <p className="rise inline-flex max-w-full items-center gap-3 rounded-full border border-gold/35 bg-[linear-gradient(110deg,rgb(234_216_175/0.10),rgb(234_216_175/0.02))] py-1.5 pl-1.5 pr-5 shadow-[inset_0_1px_0_rgb(234_216_175/0.14),0_10px_30px_-18px_rgb(164_129_61/0.6)] backdrop-blur-md">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ink shadow-[0_0_0_3px_rgb(164_129_61/0.12)]">
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
            className="rise rotulo-caps mt-6 flex items-start gap-3 text-[0.6875rem] leading-relaxed text-gold-light sm:items-center sm:text-[0.75rem]"
            style={{ animationDelay: "60ms" }}
          >
            <span aria-hidden className="traco-desenha mt-[0.55em] h-px w-8 shrink-0 bg-gold sm:mt-0" />
            {HERO.especialidade}
          </p>

          <h1 id="titulo-hero" className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)]">
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

      {/* faixa de selos: ícone + dado forte + complemento, em vidro */}
      <div className="rise border-t border-gold-light/12 bg-ink/50 backdrop-blur-md" style={{ animationDelay: "360ms" }}>
        <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-4 py-5 md:grid-cols-4 md:gap-x-0 md:py-6">
          {HERO.selos.map((selo, indice) => (
            <li
              key={selo.valor}
              className={`flex items-center gap-3 md:justify-center md:px-4 ${indice > 0 ? "md:border-l md:border-gold-light/10" : ""}`}
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold-light">
                {selo.icone === "estrela" ? (
                  <svg viewBox="0 0 24 24" className="size-[1.1rem] text-gold" fill="currentColor" aria-hidden focusable="false">
                    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
                  </svg>
                ) : (
                  <Icone nome={selo.icone} className="size-[1.1rem]" traco={1.5} />
                )}
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-[0.9375rem] font-semibold tracking-[-0.01em] text-gold-light">{selo.valor}</span>
                <span className="mt-0.5 block text-[0.75rem] text-champagne">{selo.detalhe}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
