import { Areas } from "@/components/sections/Areas";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Contato } from "@/components/sections/Contato";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Escritorio } from "@/components/sections/Escritorio";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Frase } from "@/components/sections/Frase";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PreAgendamento } from "@/components/sections/PreAgendamento";
import { Processo } from "@/components/sections/Processo";
import { Prova } from "@/components/sections/Prova";
import { Sobre } from "@/components/sections/Sobre";
import { Videos } from "@/components/sections/Videos";
import { WhatsAppFlutuante } from "@/components/sections/WhatsAppFlutuante";
import { Folha } from "@/components/ui/Folha";
import { Folhas } from "@/components/ui/Folhas";
import { AGENDAR, AREAS, AVALIACOES, ESCRITORIO, PERGUNTAS, PROCESSO, SOBRE, VIDEOS } from "@/lib/site-config";

/**
 * Mesma sequência do Cabana Afrodite, com o conteúdo da advocacia, montada
 * em folhas que se empilham ao rolar: cada uma para no pé da tela e a
 * seguinte desliza por cima, com a crista em onda na frente.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Folha ancora="topo">
          <Hero />
        </Folha>
        <Folha borda>
          <Prova />
        </Folha>

        <Folha ancora={SOBRE.id} crista="ink">
          <Sobre />
          <Diferenciais />
        </Folha>

        <Folha>
          <Frase />
        </Folha>

        <Folha ancora={AREAS.id} crista="soft">
          <Areas />
        </Folha>
        <Folha ancora={VIDEOS.id} crista="ink">
          <Videos />
        </Folha>
        <Folha ancora={AVALIACOES.id} crista="soft">
          <Avaliacoes />
        </Folha>
        <Folha ancora={ESCRITORIO.id} crista="ink">
          <Escritorio />
        </Folha>
        <Folha ancora={PROCESSO.id} crista="soft">
          <Processo />
        </Folha>
        <Folha ancora={AGENDAR.id} crista="ink">
          <PreAgendamento />
        </Folha>
        <Folha ancora={PERGUNTAS.id} crista="soft">
          <Faq />
        </Folha>

        {/* fundo champagne: o do FAQ continua dos lados enquanto o fechamento se abre */}
        <Folha className="bg-ink-soft">
          <Contato />
        </Folha>
      </main>
      <Footer />
      <WhatsAppFlutuante />
      <Folhas />
    </>
  );
}
