"use client";

import { useEffect, useState } from "react";

import { Icone } from "@/components/ui/Icone";
import { cx } from "@/lib/cx";
import { FIXO, whatsapp } from "@/lib/site-config";

/**
 * A pílula fixa do Cabana: selo da nota, chamada e a seta em círculo.
 * Só aparece depois que o hero sai de cena, para não cobrir os botões dele.
 * Ilha mínima: um listener de scroll passivo e uma classe.
 */
export function CtaFixo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = (): void => setVisivel(window.scrollY > window.innerHeight * 0.75);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <a
      href={whatsapp("fixo")}
      target="_blank"
      rel="noopener noreferrer"
      inert={!visivel}
      className={cx("cta-fixo", !visivel && "cta-oculto")}
    >
      <span className="flex flex-col gap-0.5 leading-tight">
        <span className="rotulo-caps text-[0.55rem] tracking-[0.12em] text-champagne">{FIXO.selo}</span>
        <span className="text-[0.92rem] font-semibold">{FIXO.rotulo}</span>
      </span>
      <span aria-hidden className="cta-seta">
        <Icone nome="seta" className="size-[1.15rem]" traco={1.75} />
      </span>
    </a>
  );
}
