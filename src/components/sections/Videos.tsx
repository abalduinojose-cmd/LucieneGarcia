import Image from "next/image";

import { Icone } from "@/components/ui/Icone";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { POSTERS } from "@/lib/midia";
import { CONTATO, VIDEOS } from "@/lib/site-config";

const TITULO_ID = "titulo-videos";

/** Os reels do Cabana: três vídeos (trilho no toque, grade no desktop) e o cartão do Instagram. */
export function Videos() {
  return (
    <Section id={VIDEOS.id} labelledBy={TITULO_ID}>
      <SectionHeading id={TITULO_ID} rotulo={VIDEOS.rotulo} titulo={VIDEOS.titulo} lead={VIDEOS.lead} className="max-w-2xl" />

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <ul className="escalonar scrollbar-none relative -mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 sm:gap-5 lg:col-span-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {VIDEOS.itens.map((video) => (
            <li key={video.slug} className="revelar w-[62vw] max-w-[15rem] shrink-0 snap-start sm:w-[15rem] lg:w-auto lg:max-w-none">
              <VideoCard
                slug={video.slug}
                titulo={video.titulo}
                duracao={video.duracao}
                poster={POSTERS[video.slug]}
                rotuloPlay={VIDEOS.play}
              />
            </li>
          ))}
        </ul>

        {/* Cartão de perfil: um pedaço do feed no topo, o ícone sobre a emenda
            e o @ logo abaixo, como no Instagram. */}
        <article className="revelar group/perfil relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-soft lg:col-span-4">
          <div className="relative grid grid-cols-3 gap-px bg-gold-light/10">
            {VIDEOS.itens.map((video) => (
              <figure key={video.slug} className="relative aspect-square overflow-hidden bg-ink">
                <Image
                  src={POSTERS[video.slug]}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="8rem"
                  className="object-cover transition-[scale] duration-700 ease-serra group-hover/perfil:scale-105"
                />
              </figure>
            ))}
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-soft via-ink-soft/55 to-transparent" />
          </div>

          <div className="relative -mt-9 px-7 pb-7">
            <span className="inline-flex size-[3.25rem] items-center justify-center rounded-2xl border border-gold-light/20 bg-ink-soft text-gold-light">
              <Icone nome="instagram" className="size-[1.35rem]" traco={1.5} />
            </span>
            <p className="mt-4 text-[1.05rem] font-semibold text-gold-light">{CONTATO.instagramUsuario}</p>
            <h3 className="mt-3 text-[1.6rem] leading-snug">{VIDEOS.instagramTitulo}</h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-champagne">{VIDEOS.instagramTexto}</p>
            <a
              href={CONTATO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-contorno mt-6 h-12 w-full px-6 text-[0.875rem]"
            >
              <Icone nome="instagram" className="size-[1.15rem]" traco={1.75} />
              {VIDEOS.instagramCta}
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
