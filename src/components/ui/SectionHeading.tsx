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
 * Eyebrow com traço dourado, título grande e leve e um parágrafo de apoio.
 * Ao rolar, cada parte entra no seu tempo: o traço se estende, o título sai
 * do desfoque e o parágrafo sobe por último (globals.css).
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

  return (
    <div className={cx(centro && "flex flex-col items-center text-center", className)}>
      <p className="revelar rotulo-caps flex items-center gap-3 text-champagne">
        <span aria-hidden className="traco-rola h-px w-9 bg-gold" />
        {rotulo}
      </p>

      <h2 id={id} className="revelar-titulo mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)]">
        {titulo}
      </h2>

      {lead ? <p className="revelar-tarde leitura mt-5 text-[1.0625rem] leading-relaxed text-champagne">{lead}</p> : null}
    </div>
  );
}
