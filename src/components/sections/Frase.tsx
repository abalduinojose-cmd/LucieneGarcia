import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { FOTOS } from "@/lib/midia";
import { FRASE } from "@/lib/site-config";

/**
 * Full-bleed poético (o "mar de nuvens" do Cabana): a frase em serifa
 * itálica sobre a foto, e embaixo trechos reais das avaliações do Google.
 */
export function Frase() {
  return (
    <section
      aria-label={FRASE.poetico}
      className="relative isolate flex min-h-[72svh] items-end overflow-hidden py-16 md:min-h-[80svh]"
    >
      <Image
        src={FOTOS.justica}
        alt={FRASE.fotoAlt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="deriva-foto -z-20 object-cover object-[68%_center]"
      />
      <div aria-hidden className="veu-foto absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-ink/85 via-ink/45 to-transparent md:w-3/4" />
      {/* pontes: as seções vizinhas vazam na foto e o corte some */}
      <div aria-hidden className="ponte-topo-ink absolute inset-x-0 top-0 -z-10 h-28 md:h-36" />
      <div aria-hidden className="ponte-base-ink absolute inset-x-0 bottom-0 -z-10 h-24 md:h-32" />

      <Container>
        <div className="revelar max-w-3xl">
          <p className="poetico text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.1] text-gold-light">{FRASE.poetico}</p>
          <p className="poetico mt-3 text-[clamp(1.4rem,3vw,2.2rem)] leading-snug">
            <span className="marca-texto">{FRASE.apoio}</span>
          </p>
        </div>

        <div className="revelar">
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-gold-light/20 pt-6">
            {FRASE.citacoes.map((citacao) => (
              <li key={citacao.autor} className="flex flex-col">
                <q className="font-display text-[1.35rem] italic text-gold-light">{citacao.texto}</q>
                <span className="mt-1 text-sm text-champagne">{citacao.autor}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-champagne">{FRASE.nota}</p>
        </div>
      </Container>
    </section>
  );
}
