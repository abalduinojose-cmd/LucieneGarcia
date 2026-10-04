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
import { Silhueta } from "@/components/ui/Silhueta";

/** Mesma sequência do Cabana Afrodite, com o conteúdo da advocacia. */
export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Prova />

        <Silhueta de="soft" para="ink" />
        <Sobre />
        <Diferenciais />

        <Frase />

        <Silhueta de="ink" para="soft" />
        <Areas />

        <Silhueta de="soft" para="ink" />
        <Videos />

        <Silhueta de="ink" para="soft" />
        <Avaliacoes />

        <Silhueta de="soft" para="ink" />
        <Escritorio />

        <Silhueta de="ink" para="soft" />
        <Processo />

        <Silhueta de="soft" para="ink" />
        <PreAgendamento />

        <Silhueta de="ink" para="soft" />
        <Faq />

        {/* o fundo champagne do FAQ continua dos lados enquanto o fechamento se abre */}
        <div className="bg-ink-soft">
          <Contato />
        </div>
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
