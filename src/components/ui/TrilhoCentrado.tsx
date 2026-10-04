"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cx } from "@/lib/cx";

type TrilhoCentradoProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

/**
 * Lista em trilho horizontal que, no celular, já abre com o item do MEIO
 * centralizado: os vizinhos aparecem dos dois lados por igual (o primeiro
 * item no centro deixava um vazio à esquerda e parecia torto). Do tablet
 * para cima a lista é grade e nada acontece.
 */
export function TrilhoCentrado({ children, className }: TrilhoCentradoProps) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const trilho = ref.current;
    if (!trilho || !window.matchMedia("(max-width: 47.99rem)").matches) return;
    const meio = trilho.children[Math.floor(trilho.children.length / 2)] as HTMLElement | undefined;
    if (!meio) return;
    trilho.scrollTo({ left: meio.offsetLeft + meio.offsetWidth / 2 - trilho.clientWidth / 2, behavior: "instant" });
  }, []);

  return (
    <ul ref={ref} className={cx(className)}>
      {children}
    </ul>
  );
}
