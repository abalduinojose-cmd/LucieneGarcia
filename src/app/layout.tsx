import type { Metadata, Viewport } from "next";
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { grafo } from "@/lib/schema";
import { SITE } from "@/lib/site-config";
import "./globals.css";

/**
 * Títulos em Crimson Pro, não em Cormorant Garamond (pedido original): a
 * Cormorant desenha o acento solto e deslocado em "Você", "Dúvidas" e
 * "inventário" (conferido nesta página). A Crimson Pro tem a mesma garalda
 * delicada, peso 300 e acentos corretos.
 */
const crimson = Crimson_Pro({
  // variável: um arquivo cobre 300 e 400 (eram dois por estilo)
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
});

/**
 * Inter saiu (é a fonte que o guia de estética da Anthropic cita como o
 * primeiro sinal de site genérico). O par agora é serifa garalda contra a
 * família IBM Plex: Sans no texto corrido, Mono nos rótulos, números e
 * datas, com o ar de autos e de protocolo que combina com advocacia.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

/** Só rótulos pequenos: não vale preload disputando banda com o hero. */
const plexMono = IBM_Plex_Mono({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-plex-mono",
});

/** Só a origem: com subpasta o Next repetiria o basePath no og:image. */
const ORIGEM = new URL(SITE.url).origin;

export const metadata: Metadata = {
  metadataBase: new URL(ORIGEM),
  title: { default: SITE.titulo, template: `%s | ${SITE.nome}` },
  description: SITE.descricao,
  keywords: [...SITE.palavrasChave],
  applicationName: SITE.nome,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.nome,
    title: SITE.titulo,
    description: SITE.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.titulo,
    description: SITE.descricao,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    // As variáveis das fontes ficam no <html>: é ali que o font-family resolve.
    <html lang="pt-BR" className={`${crimson.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Conteúdo estático gerado de site-config.ts, sem entrada do usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo()) }}
        />
      </body>
    </html>
  );
}
