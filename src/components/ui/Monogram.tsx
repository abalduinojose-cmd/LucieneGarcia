import { cx } from "@/lib/cx";

type MonogramProps = {
  readonly className?: string;
  /** Com rótulo vira imagem acessível; sem ele é decorativo. */
  readonly rotulo?: string;
};

/**
 * Monograma LG em traço de 1px, redesenhado a partir da marca: o quadro com
 * o topo em curva e as duas letras, sem depender de fonte carregada.
 */
export function Monogram({ className, rotulo }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={rotulo ? "img" : undefined}
      aria-hidden={rotulo ? undefined : true}
      aria-label={rotulo}
      focusable="false"
      className={cx("shrink-0", className)}
    >
      {/* quadro com o topo em curva, como na logo */}
      <path d="M4 10c8 6 22 7 40-4v44H4Z" vectorEffect="non-scaling-stroke" />
      {/* L: haste e base */}
      <path d="M16 18v24h13" vectorEffect="non-scaling-stroke" />
      {/* G em arco aberto, cruzando o L */}
      <path d="M35 23a10 10 0 1 0 0 13v-6h-6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
