import { cx } from "@/lib/cx";
import type { Tom } from "@/components/ui/Section";

const PREENCHIMENTO: Record<Tom, string> = {
  ink: "text-ink",
  soft: "text-ink-soft",
};

type SilhuetaProps = {
  /** Cor da folha que a crista coroa. */
  readonly cor: Tom;
};

const CRISTA = "M0 92c300-30 560-36 820-14s420 22 620-10";

/**
 * Crista da folha (o lugar da serra com a cabana no Cabana Afrodite): a
 * curva do topo do quadro da logo vira um relevo suave, com um fio dourado
 * acompanhando a crista. Fica acima da folha (bottom-full), sem fundo: o que
 * aparece acima da curva é a folha anterior. No fluxo normal isso cai sobre
 * o respiro de baixo da seção anterior; com as folhas empilhando, é a borda
 * em onda da folha que chega.
 *
 * Três camadas para a rolagem (globals.css): a curva de trás sobe por trás
 * da da frente e o fio dourado se desenha da esquerda para a direita.
 */
export function Silhueta({ cor }: SilhuetaProps) {
  return (
    <div aria-hidden className="silhueta pointer-events-none absolute inset-x-0 bottom-full -mb-px h-14 overflow-hidden md:h-24">
      {/* curva de trás, mais suave */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        focusable="false"
        className={cx("silhueta-fundo absolute inset-0 size-full", PREENCHIMENTO[cor])}
      >
        <path d="M0 110V78C260 46 520 50 760 70s470 22 680-14v54Z" fill="currentColor" opacity="0.4" />
      </svg>
      {/* curva da frente: a mesma do topo do quadro da logo */}
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        focusable="false"
        className={cx("silhueta-frente absolute inset-0 size-full", PREENCHIMENTO[cor])}
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
