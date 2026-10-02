import { Icone } from "@/components/ui/Icone";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/lib/cx";
import { AREAS, whatsapp, type Area } from "@/lib/site-config";

const TITULO_ID = "titulo-areas";

/**
 * Cartões escuros (as "comodidades" do Cabana). Na grade de 3 colunas o
 * inventário ocupa 2x2 e os outros cinco fecham o retângulo.
 */
function CardArea({ area, destaque }: { readonly area: Area; readonly destaque: boolean }) {
  return (
    <li
      className={cx(
        "revelar cartao cartao-vivo group relative flex flex-col p-7 md:p-8",
        destaque ? "md:col-span-2 lg:row-span-2 lg:p-11" : "md:last:col-span-2 lg:last:col-span-1",
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          className={cx(
            "inline-flex items-center justify-center rounded-2xl",
            destaque
              ? "size-14 bg-gradient-to-br from-[#d3b06b] via-gold to-[#977535] text-ink"
              : "size-12 border border-gold/35 text-gold",
          )}
        >
          <Icone nome={area.icone} className={destaque ? "size-7" : "size-6"} traco={destaque ? 1.25 : 1} />
        </span>
        {destaque ? (
          <span className="rotulo-caps rounded-full border border-gold/40 px-3 py-1.5 text-[0.6rem] text-gold-light">
            {AREAS.destaqueRotulo}
          </span>
        ) : null}
      </div>

      <h3 className={cx("mt-7", destaque ? "text-[clamp(2rem,3.2vw,2.8rem)] font-light" : "text-[1.55rem]")}>
        {area.titulo}
      </h3>
      <p className={cx("mt-3 leading-relaxed text-champagne", destaque ? "leitura text-[1.0625rem]" : "text-[0.9375rem]")}>
        {area.descricao}
      </p>

      {area.topicos ? (
        <ul className="mt-8 grid gap-x-8 gap-y-3.5 border-t border-gold-light/10 pt-7 sm:grid-cols-2">
          {area.topicos.map((topico) => (
            <li key={topico} className="flex items-center gap-3 text-[0.9375rem] text-gold-light">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-gold" />
              {topico}
            </li>
          ))}
        </ul>
      ) : null}

      <a
        href={whatsapp("areas", area.assunto)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${AREAS.saibaMais}: ${area.titulo}`}
        className="rotulo-caps mt-auto inline-flex items-center gap-2 self-start pt-8 text-[0.625rem] text-gold-light after:absolute after:inset-0 after:rounded-[1.25rem] after:content-['']"
      >
        <span className="link-draw">{AREAS.saibaMais}</span>
        <Icone
          nome="seta"
          className="size-3.5 text-gold transition-[translate] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          traco={1.5}
        />
      </a>
    </li>
  );
}

export function Areas() {
  return (
    <Section id={AREAS.id} tom="soft" labelledBy={TITULO_ID}>
      <SectionHeading id={TITULO_ID} numero="02" rotulo={AREAS.rotulo} titulo={AREAS.titulo} lead={AREAS.lead} className="max-w-3xl" />

      <ul className="escalonar mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {AREAS.itens.map((area, indice) => (
          <CardArea key={area.id} area={area} destaque={indice === 0} />
        ))}
      </ul>
    </Section>
  );
}
