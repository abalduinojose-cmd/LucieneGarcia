import Image from "next/image";

import completo from "@/assets/logo/luciene-garcia.png";
import marca from "@/assets/logo/marca.png";
import { cx } from "@/lib/cx";

type LogoProps = {
  readonly className?: string;
};

/** Monograma dourado original da cliente, para o cabeçalho (decorativo: o link já tem nome). */
export function LogoMarca({ className }: LogoProps) {
  return <Image src={marca} alt="" sizes="40px" className={cx("h-10 w-auto", className)} />;
}

/** Logo completo (marca + nome + ADVOCACIA), para o contato. */
export function LogoCompleto({ className }: LogoProps) {
  return (
    <Image
      src={completo}
      alt="Luciene Garcia Advocacia"
      sizes="(min-width: 768px) 380px, 80vw"
      className={cx("h-auto w-full", className)}
    />
  );
}
