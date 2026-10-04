import type { ReactNode } from "react";

import { Silhueta } from "@/components/ui/Silhueta";
import type { Tom } from "@/components/ui/Section";
import { cx } from "@/lib/cx";

type FolhaProps = {
  readonly children: ReactNode;
  /** Âncora do menu. Fica FORA da folha: dentro de um elemento sticky, o
   *  link levaria para onde a folha está presa, não para onde ela começa. */
  readonly ancora?: string;
  /** Cor do topo da folha: desenha a crista em onda acima dela. */
  readonly crista?: Tom;
  /** Sem crista: cantos de cima arredondados e sombra, para a borda da folha
   *  aparecer quando ela desliza sobre a anterior. */
  readonly borda?: boolean;
  readonly className?: string;
};

/**
 * Uma "folha" da página. Ao rolar, cada folha para quando o pé dela chega
 * ao pé da tela e a seguinte desliza por cima, com a crista em onda na
 * frente; a de baixo recua e escurece um pouco (ver Folhas.tsx e
 * globals.css). Sem JavaScript, as folhas ficam no fluxo normal.
 */
export function Folha({ children, ancora, crista, borda = false, className }: FolhaProps) {
  return (
    <>
      {ancora ? <span id={ancora} className="block" /> : null}
      <div className={cx("folha", borda && "folha-borda", className)}>
        {crista ? <Silhueta cor={crista} /> : null}
        {children}
      </div>
    </>
  );
}
