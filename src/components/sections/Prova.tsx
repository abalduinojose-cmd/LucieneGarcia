import { Container } from "@/components/ui/Container";
import { PROVA } from "@/lib/site-config";

/** Faixa de números logo abaixo do hero (a "prova social" do Cabana). */
export function Prova() {
  return (
    <section aria-label="Números do escritório" className="bg-ink-soft py-14 md:py-16">
      <Container>
        <dl className="revelar grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {PROVA.numeros.map((numero, indice) => (
            <div
              key={numero.rotulo}
              className={
                indice === 0
                  ? "flex flex-col-reverse gap-3 px-2 text-center md:px-6"
                  : "flex flex-col-reverse gap-3 border-l border-gold-light/12 px-2 text-center md:px-6"
              }
            >
              <dt className="rotulo-caps text-[0.625rem] text-champagne">{numero.rotulo}</dt>
              <dd className="font-display text-[clamp(2.1rem,3.6vw,3.1rem)] font-light leading-none text-gold-light">
                {numero.valor}
              </dd>
            </div>
          ))}
        </dl>

        <p className="revelar mx-auto mt-11 flex max-w-3xl items-center justify-center gap-5 text-center text-sm leading-relaxed text-champagne">
          <span aria-hidden className="hidden h-px flex-1 bg-gold-light/15 sm:block" />
          {PROVA.selo}
          <span aria-hidden className="hidden h-px flex-1 bg-gold-light/15 sm:block" />
        </p>
      </Container>
    </section>
  );
}
