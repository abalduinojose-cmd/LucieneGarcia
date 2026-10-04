import type { Metadata, Viewport } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { grafo } from "@/lib/schema";
import { SITE } from "@/lib/site-config";
import "./globals.css";

/**
 * Uma dupla da mesma família (out/2026, pedido por fontes "mais marcantes e
 * clean ao mesmo tempo"): Funnel Display nos títulos, em peso 500 com
 * tracking fechado, que tem desenho próprio (o "a" e o "t") sem perder a
 * limpeza; Funnel Sans no texto corrido e nos rótulos. Acentos conferidos
 * em amostra (á, í, ú, ç, õ, ê). As duas são variáveis (300 a 800).
 */
const display = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-display",
});
const texto = Funnel_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-sans",
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
  themeColor: "#fbf8f2",
  colorScheme: "light",
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    // As variáveis das fontes ficam no <html>: é ali que o font-family resolve.
    <html lang="pt-BR" className={`${display.variable} ${texto.variable}`}>
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
