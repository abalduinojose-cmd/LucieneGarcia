import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { LogoMarca } from "@/components/ui/Logo";
import { FOTOS } from "@/lib/midia";
import { HERO, whatsapp } from "@/lib/site-config";

/**
 * Hero claro e limpo: o texto à esquerda sobre o creme e o retrato à direita,
 * num cartão com moldura dourada deslocada (a foto é escura e, em tela
 * cheia esmaecendo para o creme, ficaria turva). No celular o retrato vem
 * primeiro, enquadrado no rosto, e o texto embaixo. Os números (nota,
 * avaliações, anos) ficam só na faixa logo abaixo, sem repetir aqui.
 *
 * Tudo é Server Component. O h1 não anima: é o candidato a LCP.
 */
export function Hero() {
  return (
    <section id="topo" aria-labelledby="titulo-hero" className="relative isolate overflow-hidden bg-ink">
      {/* painel champagne atrás do retrato, abaixo do menu, para dar profundidade */}
      <div aria-hidden className="absolute bottom-0 right-0 top-24 -z-10 hidden w-[36%] rounded-tl-[3rem] bg-ink-soft lg:block" />

      <div className="container-page grid items-center gap-10 pb-16 pt-24 md:pt-28 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
        <figure className="rise relative mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none">
          {/* moldura dourada deslocada atrás do retrato */}
          <span aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-gold/60 lg:translate-x-5 lg:translate-y-5" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-preto shadow-[0_30px_60px_-34px_rgb(20_17_12/0.55)] lg:aspect-[4/5]">
            <Image
              src={FOTOS.lucieneEstudio}
              alt={HERO.retratoAlt}
              fill
              priority
              fetchPriority="high"
              placeholder="blur"
              quality={75}
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 384px, 92vw"
              className="object-cover object-[50%_12%] lg:object-[50%_18%]"
            />
          </div>
        </figure>

        <div className="lg:order-1 lg:col-span-7">
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
            className="rise rotulo-caps mt-6 flex items-start gap-3 text-[0.6875rem] leading-relaxed text-gold-dark sm:items-center sm:text-[0.75rem]"
            style={{ animationDelay: "60ms" }}
          >
            <span aria-hidden className="traco-desenha mt-[0.55em] h-px w-8 shrink-0 bg-gold sm:mt-0" />
            {HERO.especialidade}
          </p>

          <h1 id="titulo-hero" className="mt-4 text-[clamp(2.6rem,5.6vw,4.6rem)]">
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
    </section>
  );
}
