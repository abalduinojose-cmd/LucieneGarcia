import { cx } from "@/lib/cx";
import { FUNDO, type Tom } from "@/components/ui/Section";

const PREENCHIMENTO: Record<Tom, string> = {
  ink: "text-ink",
  soft: "text-ink-soft",
};

type SilhuetaProps = {
  readonly de: Tom;
  readonly para: Tom;
};

const CRISTA = "M0 92c300-30 560-36 820-14s420 22 620-10";

/**
 * Divisor de seção (o lugar da serra com a cabana no Cabana Afrodite): a
 * curva do topo do quadro da logo vira um relevo suave, com um fio dourado
 * acompanhando a crista.
 *
 * São três camadas para a transição ao rolar (globals.css): a curva de trás
 * sobe por trás da da frente e o fio dourado se desenha da esquerda para a
 * direita. Sem suporte a scroll-driven animations, tudo já nasce pronto.
 */
export function Silhueta({ de, para }: SilhuetaProps) {
  return (
    <div aria-hidden className={cx("relative -mb-px h-14 overflow-hidden md:h-24", FUNDO[de])}>
      {/* curva de trás, mais suave */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        focusable="false"
        className={cx("silhueta-fundo absolute inset-0 size-full", PREENCHIMENTO[para])}
      >
        <path d="M0 110V78C260 46 520 50 760 70s470 22 680-14v54Z" fill="currentColor" opacity="0.4" />
      </svg>
      {/* curva da frente: a mesma do topo do quadro da logo */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        focusable="false"
        className={cx("absolute inset-0 size-full", PREENCHIMENTO[para])}
      >
        <path d={`${CRISTA}v42H0Z`} fill="currentColor" />
      </svg>
      {/* fio dourado sobre a crista */}
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none" focusable="false" className="silhueta-fio absolute inset-0 size-full">
        <path
          d={CRISTA}
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.55"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
