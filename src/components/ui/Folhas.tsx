"use client";

import { useEffect } from "react";

/**
 * Liga o empilhamento das folhas (componente sem marcação).
 *
 * Folha mais alta que a tela vira `position: sticky` com `top = altura da
 * tela - altura da folha`: rola normalmente até o pé dela encostar no pé da
 * tela e só então para, enquanto a próxima desliza por cima. Folha mais
 * baixa que a tela não para (ficaria pendurada no meio, com a anterior
 * aparecendo acima dela). Só CSS não dá: o `top` depende da altura de cada
 * folha. A altura da tela vem de uma sonda de 100svh (a menor, com a barra
 * do navegador à mostra), que não muda quando a barra do celular some.
 *
 * O recuo da folha presa é medido pela CHEGADA da folha seguinte: cada folha
 * ganha uma view-timeline com nome (--folha-N) e a anterior anima nela. A
 * timeline da própria folha presa não serve, porque o Chrome mede a posição
 * já com o deslocamento do sticky, e uma folha parada não "sai" da tela.
 */
export function Folhas() {
  useEffect(() => {
    const folhas = [...document.querySelectorAll<HTMLElement>(".folha")];
    const pai = folhas[0]?.parentElement;
    if (!pai) return;

    const nomes = folhas.map((_, indice) => `--folha-${indice}`);
    pai.style.setProperty("timeline-scope", nomes.join(", "));
    folhas.forEach((folha, indice) => {
      folha.style.setProperty("view-timeline", `${nomes[indice]} block`);
      const seguinte = nomes[indice + 1];
      if (seguinte) folha.style.setProperty("--cobertura", seguinte);
    });

    const sonda = document.createElement("div");
    sonda.style.cssText = "position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none";
    document.body.append(sonda);

    let quadro = 0;
    const ajustar = (): void => {
      quadro = 0;
      const tela = sonda.offsetHeight;
      for (const folha of folhas) {
        const top = tela - folha.offsetHeight;
        const presa = top <= 0;
        folha.classList.toggle("folha-presa", presa);
        if (presa) folha.style.top = `${top}px`;
        else folha.style.removeProperty("top");
      }
    };
    const agendar = (): void => {
      if (quadro === 0) quadro = requestAnimationFrame(ajustar);
    };

    ajustar();
    const raiz = document.documentElement;
    raiz.classList.add("folhas-ativas");

    const observador = new ResizeObserver(agendar);
    folhas.forEach((folha) => observador.observe(folha));
    window.addEventListener("resize", agendar);

    return () => {
      observador.disconnect();
      window.removeEventListener("resize", agendar);
      cancelAnimationFrame(quadro);
      raiz.classList.remove("folhas-ativas");
      pai.style.removeProperty("timeline-scope");
      folhas.forEach((folha) => {
        folha.classList.remove("folha-presa");
        for (const prop of ["top", "view-timeline", "--cobertura"]) folha.style.removeProperty(prop);
      });
      sonda.remove();
    };
  }, []);

  return null;
}
