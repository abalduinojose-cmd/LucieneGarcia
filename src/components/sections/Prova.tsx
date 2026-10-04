import { Container } from "@/components/ui/Container";
import { Icone, type NomeIcone } from "@/components/ui/Icone";
import { PROVA } from "@/lib/site-config";

function Estrelas() {
  return (
    <span role="img" aria-label="5 de 5 estrelas" className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }, (_, indice) => (
        <svg key={indice} viewBox="0 0 24 24" className="size-3" fill="currentColor" aria-hidden focusable="false">
          <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Faixa de números logo abaixo do hero, em cartões brancos: ícone, número
 * grande e leve, rótulo em caixa alta. No celular, 2x2 com espaço entre os
 * cartões (sem os fios verticais que ficavam desalinhados na segunda linha).
 */
export function Prova() {
  return (
    <section aria-label="Números do escritório" className="bg-ink-soft pb-20 pt-14 md:pb-28 md:pt-20">
      <Container>
        <dl className="escalonar grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {PROVA.numeros.map((numero) => (
            <div
              key={numero.rotulo}
              className="revelar group relative flex flex-col-reverse overflow-hidden rounded-2xl border border-gold/20 bg-ink-card p-5 shadow-[var(--sombra-cartao)] transition duration-500 ease-serra hover:-translate-y-1 hover:border-gold/45 md:p-7"
            >
              {/* brilho que acende no hover, no canto do ícone */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <dt className="rotulo-caps mt-2 text-[0.625rem] text-champagne md:text-[0.6875rem]">{numero.rotulo}</dt>
              <dd className="flex flex-col gap-4">
                <span
                  aria-hidden
                  className="inline-flex size-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold-light"
                >
                  <Icone nome={numero.icone as NomeIcone} className="size-[1.1rem]" traco={1.5} />
                </span>
                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[clamp(2.2rem,4vw,3.2rem)] font-display font-medium leading-none tracking-[-0.04em] text-gold-light">
                    {numero.valor}
                  </span>
                  {numero.sufixo ? (
                    <span className="text-[1rem] font-medium text-champagne md:text-[1.125rem]">{numero.sufixo}</span>
                  ) : null}
                  {numero.icone === "estrela" ? <Estrelas /> : null}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="revelar mx-auto mt-10 flex max-w-3xl items-center justify-center gap-5 text-center text-sm leading-relaxed text-champagne">
          <span aria-hidden className="hidden h-px flex-1 bg-gold-light/15 sm:block" />
          {PROVA.selo}
          <span aria-hidden className="hidden h-px flex-1 bg-gold-light/15 sm:block" />
        </p>
      </Container>
    </section>
  );
}
