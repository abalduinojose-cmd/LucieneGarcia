import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESSO, whatsapp } from "@/lib/site-config";

const TITULO_ID = "titulo-processo";

/**
 * O caminho do inventário. No desktop (com suporte a scroll-driven
 * animations) vira uma faixa horizontal: o palco (título + etapas) fica
 * preso na tela e as quatro etapas passam da direita para a esquerda
 * enquanto a pessoa rola, com um fio dourado medindo o avanço
 * (globals.css, bloco "desktop: o caminho do inventário"). No
 * celular, no tablet ou sem suporte, é a grade de cartões de sempre.
 */
export function Processo() {
  return (
    <Section tom="soft" labelledBy={TITULO_ID}>
      <div className="processo-trilho">
        {/* no desktop o título fica preso junto com a faixa, em cima dela */}
        <div className="processo-palco">
          <SectionHeading
            id={TITULO_ID}
            rotulo={PROCESSO.rotulo}
            titulo={PROCESSO.titulo}
            lead={PROCESSO.lead}
            alinhamento="centro"
            className="mx-auto max-w-3xl"
          />

          <ol className="processo-faixa escalonar relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESSO.passos.map((passo, indice) => (
              <li key={passo.titulo} className="processo-passo revelar cartao relative flex flex-col p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d3b06b] via-gold to-[#977535] font-display text-2xl text-preto">
                    {indice + 1}
                  </span>
                  <span aria-hidden className="processo-numero font-display font-medium leading-none tracking-[-0.05em] text-gold/25">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.6rem] leading-tight">{passo.titulo}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-champagne">{passo.descricao}</p>
              </li>
            ))}
          </ol>
          {/* avanço da faixa: só aparece no modo horizontal */}
          <div aria-hidden className="processo-avanco">
            <span />
          </div>
        </div>
      </div>

      <p className="revelar mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-champagne">{PROCESSO.nota}</p>

      <div className="revelar mt-8 flex justify-center">
        <Button href={whatsapp("inventario")} tamanho="lg" seta>
          {PROCESSO.cta}
        </Button>
      </div>
    </Section>
  );
}
