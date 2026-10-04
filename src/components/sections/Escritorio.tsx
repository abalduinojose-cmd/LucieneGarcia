import { Icone, type NomeIcone } from "@/components/ui/Icone";
import { MapaEscritorio } from "@/components/ui/MapaEscritorio";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOTOS } from "@/lib/midia";
import { CONTATO, ESCRITORIO } from "@/lib/site-config";

const TITULO_ID = "titulo-escritorio";

/** A "localização" do Cabana: o mapa na identidade do site e o cartão de como é o atendimento. */
export function Escritorio() {
  return (
    <Section labelledBy={TITULO_ID}>
      <SectionHeading id={TITULO_ID} rotulo={ESCRITORIO.rotulo} titulo={ESCRITORIO.titulo} lead={ESCRITORIO.lead} className="max-w-3xl" />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <figure className="revelar">
          <div className="cartao relative aspect-4/3 overflow-hidden !rounded-[1.5rem]">
            <MapaEscritorio
              mapa={FOTOS.mapaEscritorio}
              alt={ESCRITORIO.mapaTitulo}
              nome={ESCRITORIO.mapaPino}
              bairro={ESCRITORIO.mapaBairro}
              href={CONTATO.mapa}
              rotuloAbrir={ESCRITORIO.mapaAbrir}
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-champagne">
            {ESCRITORIO.mapaLegenda}
            <a
              href={CONTATO.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1.5 font-medium text-gold-light"
            >
              {ESCRITORIO.mapaAbrir}
              <Icone nome="seta" className="size-3.5" traco={1.5} />
            </a>
          </figcaption>
        </figure>

        <div className="revelar">
          <div className="cartao p-8">
            <h3 className="text-[1.75rem]">{ESCRITORIO.cartaoTitulo}</h3>
            <ul className="mt-7 space-y-5">
              {ESCRITORIO.itens.map((item) => (
                <li key={item.texto} className="flex items-start gap-4 border-b border-gold-light/8 pb-5 last:border-0 last:pb-0">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Icone nome={item.icone as NomeIcone} className="size-[1.125rem]" traco={1.4} />
                  </span>
                  <span className="pt-1.5 text-[1rem] leading-relaxed text-gold-light/90">{item.texto}</span>
                </li>
              ))}
            </ul>
            <p className="poetico mt-8 text-xl text-gold-light">{ESCRITORIO.nota}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
