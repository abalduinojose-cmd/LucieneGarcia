import { Icone } from "@/components/ui/Icone";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { POSTERS } from "@/lib/midia";
import { CONTATO, VIDEOS } from "@/lib/site-config";

const TITULO_ID = "titulo-videos";

/**
 * Os reels do Cabana, centralizados: título no eixo, os três vídeos lado a
 * lado no meio da página (trilho no toque) e, embaixo, o cartão do Instagram
 * também centrado. O cartão não repete as capas dos vídeos que estão logo
 * acima: só o perfil, a frase e o botão.
 */
export function Videos() {
  return (
    <Section labelledBy={TITULO_ID}>
      <SectionHeading
        id={TITULO_ID}
        rotulo={VIDEOS.rotulo}
        titulo={VIDEOS.titulo}
        lead={VIDEOS.lead}
        alinhamento="centro"
        className="mx-auto max-w-2xl"
      />

      {/* No celular, trilho de borda a borda com o vídeo do meio da tela em
          foco (o recuo lateral centraliza o primeiro e o último). Do tablet
          para cima, os três lado a lado no centro da página. */}
      <ul className="escalonar scrollbar-none relative mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 max-md:ml-[calc(50%-50vw)] max-md:w-screen max-md:px-[calc(50vw-min(31vw,7.5rem))] md:mx-auto md:grid md:max-w-[54rem] md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-2">
        {VIDEOS.itens.map((video) => (
          <li key={video.slug} className="revelar w-[62vw] max-w-[15rem] shrink-0 snap-center md:w-auto md:max-w-none">
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

      <article className="revelar cartao mx-auto mt-4 flex max-w-xl flex-col items-center px-7 py-9 text-center md:mt-12 md:px-12">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d3b06b] via-gold to-[#977535] text-preto shadow-[0_12px_26px_-14px_rgb(164_129_61/0.8)]">
          <Icone nome="instagram" className="size-6" traco={1.5} />
        </span>
        <p className="mt-4 text-[1.05rem] font-semibold text-gold-light">{CONTATO.instagramUsuario}</p>
        <h3 className="mt-2 text-[1.6rem] leading-snug">{VIDEOS.instagramTitulo}</h3>
        <p className="mt-2.5 max-w-[40ch] text-[0.9375rem] leading-relaxed text-champagne">{VIDEOS.instagramTexto}</p>
        <a
          href={CONTATO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-contorno mt-7 h-12 px-7 text-[0.875rem]"
        >
          <Icone nome="instagram" className="size-[1.15rem]" traco={1.75} />
          {VIDEOS.instagramCta}
        </a>
      </article>
    </Section>
  );
}
