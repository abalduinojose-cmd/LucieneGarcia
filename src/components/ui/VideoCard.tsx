"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import { asset } from "@/lib/asset";
import { cx } from "@/lib/cx";

type VideoCardProps = {
  readonly slug: string;
  readonly titulo: string;
  readonly duracao: string;
  readonly poster: StaticImageData;
  readonly rotuloPlay: string;
};

/**
 * Reel do Cabana: nada roda sozinho. Antes do clique só existe o pôster
 * (imagem otimizada); o <video> nasce no clique, já com som e controles,
 * porque são vídeos falados. Nenhum byte de vídeo é baixado antes disso.
 */
export function VideoCard({ slug, titulo, duracao, poster, rotuloPlay }: VideoCardProps) {
  const [tocando, setTocando] = useState(false);

  return (
    <figure className="tema-escuro cartao cartao-vivo group relative overflow-hidden !rounded-[1.5rem]">
      <div className="relative aspect-9/16 bg-ink">
        {tocando ? (
          <video
            // o clique no pôster já é o gesto do usuário: o som pode tocar
            autoPlay
            src={asset(`/videos/${slug}.mp4`)}
            controls
            playsInline
            className="absolute inset-0 size-full object-cover"
            aria-label={titulo}
          />
        ) : (
          <>
            <Image
              src={poster}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 15rem, 62vw"
              className="object-cover"
            />
            <span aria-hidden className="veu-foto absolute inset-0" />
            <button
              type="button"
              onClick={() => setTocando(true)}
              aria-label={`${rotuloPlay}: ${titulo} (${duracao})`}
              className="absolute inset-0 flex cursor-pointer items-center justify-center"
            >
              <span
                className={cx(
                  "inline-flex size-16 items-center justify-center rounded-full border border-gold-light/40 bg-gold-light/15 text-gold-light backdrop-blur-md transition duration-300 ease-serra",
                  "group-hover:scale-110 group-hover:border-transparent group-hover:bg-gold group-hover:text-preto",
                )}
              >
                <svg viewBox="0 0 24 24" className="ml-0.5 size-6" fill="currentColor" aria-hidden focusable="false">
                  <path d="M7 4.5v15l12-7.5Z" />
                </svg>
              </span>
            </button>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-5">
              <span className="rotulo-caps block text-[0.55rem] text-gold-light">{duracao}</span>
              <span className="mt-1 block font-display text-[1.15rem] leading-snug text-gold-light">{titulo}</span>
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
}
