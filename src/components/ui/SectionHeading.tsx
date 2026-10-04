import type { CSSProperties } from "react";

import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  readonly id: string;
  readonly rotulo: string;
  readonly titulo: string;
  readonly lead?: string;
  readonly alinhamento?: "esquerda" | "centro";
  readonly className?: string;
};

/**
 * Eyebrow com traço dourado, título grande e firme e um parágrafo de apoio.
 * Ao rolar, o traço se estende, as palavras do título sobem uma a uma de
 * trás de uma linha (cada palavra numa máscara, com --i para o atraso) e o
 * parágrafo vem por último (globals.css). O texto do h2 continua inteiro
 * para leitores de tela: as palavras são só spans com espaço entre elas.
 */
export function SectionHeading({
  id,
  rotulo,
  titulo,
  lead,
  alinhamento = "esquerda",
  className,
}: SectionHeadingProps) {
  const centro = alinhamento === "centro";
  const palavras = titulo.split(" ");

  return (
    <div className={cx(centro && "flex flex-col items-center text-center", className)}>
      <p className="revelar rotulo-caps flex items-center gap-3 text-champagne">
        <span aria-hidden className="traco-rola h-px w-9 bg-gold" />
        {rotulo}
      </p>

      <h2 id={id} className="titulo-palavras mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)]">
        {palavras.map((palavra, indice) => (
          <span key={`${palavra}-${indice}`}>
            <span className="palavra">
              <span style={{ "--i": indice } as CSSProperties}>{palavra}</span>
            </span>
            {indice < palavras.length - 1 ? " " : null}
          </span>
        ))}
      </h2>

      {lead ? <p className="revelar-tarde leitura mt-5 text-[1.0625rem] leading-relaxed text-champagne">{lead}</p> : null}
    </div>
  );
}
