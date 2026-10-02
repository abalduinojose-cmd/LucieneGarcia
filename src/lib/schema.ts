/**
 * Geradores de JSON-LD tipados. Tudo sai de site-config.ts, então dado de
 * contato muda em um lugar só e o Google vê o mesmo que o visitante.
 */
import { ADVOGADA, AREAS, AVALIACOES, CONTATO, NAV, PERGUNTAS, SITE } from "@/lib/site-config";

type JsonLd = Record<string, unknown>;

const ID_ESCRITORIO = `${SITE.url}/#escritorio`;
const ID_ADVOGADA = `${SITE.url}/#advogada`;

const ENDERECO = {
  "@type": "PostalAddress",
  streetAddress: CONTATO.endereco.rua,
  addressLocality: CONTATO.cidade,
  addressRegion: CONTATO.estado,
  postalCode: CONTATO.endereco.cep,
  addressCountry: CONTATO.pais,
} as const;

const REDES = [CONTATO.instagram, CONTATO.facebook, CONTATO.linkedin, CONTATO.google];

export function legalService(): JsonLd {
  return {
    "@type": "LegalService",
    "@id": ID_ESCRITORIO,
    name: SITE.nome,
    description: SITE.descricao,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    telephone: CONTATO.telefone,
    address: ENDERECO,
    geo: { "@type": "GeoCoordinates", ...CONTATO.geo },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: [
      { "@type": "City", name: "Resende" },
      { "@type": "State", name: "Rio de Janeiro" },
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: AREAS.itens.map((area) => area.titulo),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: AVALIACOES.total,
      bestRating: 5,
    },
    founder: { "@id": ID_ADVOGADA },
    sameAs: REDES,
  };
}

export function attorney(): JsonLd {
  return {
    "@type": ["Person", "Attorney"],
    "@id": ID_ADVOGADA,
    name: ADVOGADA.nome,
    jobTitle: ADVOGADA.titulo,
    worksFor: { "@id": ID_ESCRITORIO },
    address: ENDERECO,
    sameAs: [CONTATO.instagram, CONTATO.linkedin],
  };
}

export function faqPage(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#perguntas`,
    mainEntity: PERGUNTAS.itens.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    })),
  };
}

export function breadcrumbList(): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
      ...NAV.map((link, indice) => ({
        "@type": "ListItem",
        position: indice + 2,
        name: link.rotulo,
        item: `${SITE.url}/${link.href}`,
      })),
    ],
  };
}

/** Um único bloco com @graph: as entidades se referenciam pelos @id. */
export function grafo(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [legalService(), attorney(), faqPage(), breadcrumbList()],
  };
}
