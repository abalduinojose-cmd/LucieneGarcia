import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icone } from "@/components/ui/Icone";
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
          {/* cartão de visita: foto, nome e a especialidade numa pílula de vidro */}
          <p className="rise inline-flex max-w-full items-center gap-3 rounded-full border border-gold/30 bg-gold-light/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-md">
            <Image
              src={FOTOS.lucieneAvatar}
              alt=""
              width={32}
              height={32}
              sizes="32px"
              className="size-8 shrink-0 rounded-full object-cover ring-1 ring-gold/60"
            />
            <span className="whitespace-nowrap text-[0.875rem] font-semibold tracking-[-0.01em] text-gold-light">
              {HERO.chipNome}
            </span>
            <span aria-hidden className="h-4 w-px shrink-0 bg-gold/40" />
            <span className="truncate text-[0.8125rem] text-champagne">
              {HERO.chipDetalhe}
              <span className="hidden sm:inline">{` · ${HERO.chipArea}`}</span>
            </span>
          </p>

          <h1 id="titulo-hero" className="mt-6 text-[clamp(2.6rem,6vw,4.8rem)]">
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
