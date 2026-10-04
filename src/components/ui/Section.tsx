import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";

/** Os dois tons do ritmo das seções: o creme e o champagne claro da marca. */
export type Tom = "ink" | "soft";

export const FUNDO: Record<Tom, string> = {
  ink: "bg-ink",
  soft: "bg-ink-soft",
};

/** O id de âncora fica na Folha que envolve a seção, fora do elemento sticky. */
type SectionProps = {
  readonly children: ReactNode;
  readonly tom?: Tom;
  readonly labelledBy: string;
  readonly className?: string;
  readonly containerClassName?: string;
  /** Conteúdo sangrando até as bordas: dispensa o container interno. */
  readonly bleed?: boolean;
};

export function Section({
  children,
  tom = "ink",
  labelledBy,
  className,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cx("relative py-20 md:py-28", FUNDO[tom], className)}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
