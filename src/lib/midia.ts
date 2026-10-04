/**
 * Imports estáticos das imagens. O next/image tira daqui largura, altura e
 * o blur de carregamento, então nenhuma foto causa layout shift.
 *
 * Hero: foto de estúdio da cliente (Instagram) com o fundo estendido à
 * esquerda (npm run retrato). Sobre: quadro sem legenda de
 * um reel (npm run videos). Mapa: npm run mapa. Avatares: npm run avatares.
 */
import type { StaticImageData } from "next/image";

import retratoSobre from "@/assets/fotos/retrato-sobre.jpg";
import justica from "@/assets/fotos/justica.jpg";
import lucieneEstudio from "@/assets/fotos/luciene-estudio-larga.jpg";
import mapaEscritorio from "@/assets/mapa/escritorio.jpg";
import cafeJuridico from "@/assets/fotos/cafe-juridico.jpg";
import posterPerda from "@/assets/videos/perda.jpg";
import posterCafe from "@/assets/videos/cafe-juridico.jpg";
import posterUniao from "@/assets/videos/uniao-estavel.jpg";
import aliceQuirino from "@/assets/avaliacoes/alice-quirino.jpg";
import andreaCorrea from "@/assets/avaliacoes/andrea-correa.jpg";
import barbaraCarneiro from "@/assets/avaliacoes/barbara-carneiro.jpg";
import ciromAlves from "@/assets/avaliacoes/cirom-alves.jpg";
import dudaCosta from "@/assets/avaliacoes/duda-costa.jpg";
import kleberWiller from "@/assets/avaliacoes/kleber-willer.jpg";
import lilianeMacedo from "@/assets/avaliacoes/liliane-macedo.jpg";
import luisaCosta from "@/assets/avaliacoes/luisa-costa.jpg";
import pimentaBruno from "@/assets/avaliacoes/pimenta-bruno.jpg";
import raphaelFelixDeCicco from "@/assets/avaliacoes/raphael-felix-de-cicco.jpg";
import ritaRitton from "@/assets/avaliacoes/rita-ritton.jpg";
import robsonGarske from "@/assets/avaliacoes/robson-garske.jpg";
import sabrinaMiraglia from "@/assets/avaliacoes/sabrina-miraglia.jpg";
import sandraBotelho from "@/assets/avaliacoes/sandra-botelho.jpg";
import tatianeRibeiro from "@/assets/avaliacoes/tatiane-ribeiro.jpg";
import wilclanLeal from "@/assets/avaliacoes/wilclan-leal.jpg";
import type { Video } from "@/lib/site-config";

export const FOTOS = { retratoSobre, justica, lucieneEstudio, mapaEscritorio, cafeJuridico } as const;

export const POSTERS: Record<Video["slug"], StaticImageData> = {
  perda: posterPerda,
  "cafe-juridico": posterCafe,
  "uniao-estavel": posterUniao,
};

export const AVATARES: Record<string, StaticImageData> = {
  "alice-quirino": aliceQuirino,
  "andrea-correa": andreaCorrea,
  "barbara-carneiro": barbaraCarneiro,
  "cirom-alves": ciromAlves,
  "duda-costa": dudaCosta,
  "kleber-willer": kleberWiller,
  "liliane-macedo": lilianeMacedo,
  "luisa-costa": luisaCosta,
  "pimenta-bruno": pimentaBruno,
  "raphael-felix-de-cicco": raphaelFelixDeCicco,
  "rita-ritton": ritaRitton,
  "robson-garske": robsonGarske,
  "sabrina-miraglia": sabrinaMiraglia,
  "sandra-botelho": sandraBotelho,
  "tatiane-ribeiro": tatianeRibeiro,
  "wilclan-leal": wilclanLeal,
};
