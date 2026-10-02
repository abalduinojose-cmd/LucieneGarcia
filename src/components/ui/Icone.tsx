import type { ReactNode } from "react";

import { cx } from "@/lib/cx";
import type { IconeArea } from "@/lib/site-config";

export type NomeIcone =
  | IconeArea
  | "instagram"
  | "facebook"
  | "google"
  | "local"
  | "online"
  | "seta"
  | "mais"
  | "menu"
  | "fechar"
  | "anterior"
  | "proximo"
  | "linkedin"
  | "relogio"
  | "conversa"
  | "estrela";

/** Traços em grade de 24px, sempre com stroke de 1px e sem preenchimento. */
const TRACOS: Record<NomeIcone, ReactNode> = {
  inventario: (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4M9 11h6M9 14h6M9 17h3.5" />
    </>
  ),
  familia: (
    <>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="7" r="2.5" />
      <circle cx="12" cy="13.5" r="1.8" />
      <path d="M3.5 19v-2.5A4.5 4.5 0 0 1 8 12M20.5 19v-2.5A4.5 4.5 0 0 0 16 12M9 21v-1a3 3 0 0 1 6 0v1" />
    </>
  ),
  civil: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="m5 7-2.5 6a2.5 2.5 0 0 0 5 0Zm14 0-2.5 6a2.5 2.5 0 0 0 5 0Z" />
    </>
  ),
  consumidor: (
    <>
      <path d="M5 8h14l-1.2 13H6.2Z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </>
  ),
  medico: (
    <>
      <path d="M5 3H4v6a5 5 0 0 0 10 0V3h-1" />
      <path d="M9 14v1.5a5.5 5.5 0 0 0 11 0V13" />
      <circle cx="20" cy="11" r="2" />
    </>
  ),
  cidadania: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <circle cx="12" cy="11" r="3.5" />
      <path d="M8.5 11h7M12 7.5c1.4 1.2 1.4 5.8 0 7M12 7.5c-1.4 1.2-1.4 5.8 0 7M9 17.5h6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" />
    </>
  ),
  facebook: (
    <path d="M14 8.5h2.5V5H14a4 4 0 0 0-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9.2a.7.7 0 0 1 .5-.7Z" />
  ),
  google: <path d="M20 12.2h-8v3.2h4.6a4.8 4.8 0 1 1-1.4-5.1l2.3-2.3A8 8 0 1 0 20 12.2Z" />,
  local: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  online: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="1" />
      <path d="M8 20h8M12 17v3" />
    </>
  ),
  seta: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  mais: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 9h16M4 15h16" />,
  fechar: <path d="m6 6 12 12M18 6 6 18" />,
  anterior: <path d="m14.5 6-6 6 6 6" />,
  proximo: <path d="m9.5 6 6 6-6 6" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5V16M8 7.8v.2M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3" />
    </>
  ),
  conversa: <path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" />,
  estrela: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" />,
  relogio: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

type IconeProps = {
  readonly nome: NomeIcone;
  readonly className?: string;
  /** Espessura do traço; 1px é o padrão da marca. */
  readonly traco?: number;
};

export function Icone({ nome, className, traco = 1 }: IconeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={traco}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={cx("size-6 shrink-0", className)}
    >
      {TRACOS[nome]}
    </svg>
  );
}
