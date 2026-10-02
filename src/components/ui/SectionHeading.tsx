import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  readonly id: string;
  /** Número da seção, escrito como parágrafo de lei: "§ 01". */
  readonly numero?: string;
  readonly rotulo: string;
  readonly titulo: string;
  readonly lead?: string;
  readonly alinhamento?: "esquerda" | "centro";
  readonly className?: string;
};

/**
 * Eyebrow numerado como parágrafo de lei (§ 01), traço dourado, título em
 * serifa finíssima e um parágrafo de apoio.
 */
export function SectionHeading({
  id,
  numero,
  rotulo,
  titulo,
  lead,
  alinhamento = "esquerda",
  className,
}: SectionHeadingProps) {
  const centro = alinhamento === "centro";

  return (
    <div className={cx("revelar", centro && "flex flex-col items-center text-center", className)}>
      <p className="rotulo-caps flex items-center gap-3 text-champagne">
        {numero ? (
          <span aria-hidden className="font-display text-[1.05rem] normal-case tracking-normal text-gold-light">
            {`§ ${numero}`}
          </span>
        ) : null}
        <span aria-hidden className="h-px w-9 bg-gold" />
        {rotulo}
      </p>

      <h2 id={id} className="mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)]">
        {titulo}
      </h2>

      {lead ? <p className="leitura mt-5 text-[1.0625rem] leading-relaxed text-champagne">{lead}</p> : null}
    </div>
  );
}
