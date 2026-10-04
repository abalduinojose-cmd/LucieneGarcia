/**
 * Quadros da página em posições de rolagem escolhidas, para ver os efeitos
 * de scroll no meio do caminho (com movimento reduzido ligado, como na
 * máquina do usuário).
 *   node material/rolagem.mjs <url> <pasta> <largura>x<altura> <y|seletor@deslocamento> [...]
 * Ex.: node material/rolagem.mjs http://localhost:5242/ out 1440x900 0 300 "#videos@-500"
 */
import puppeteer from "puppeteer-core";

const [URL, SAIDA, tela, ...pontos] = process.argv.slice(2);
const [largura, altura] = tela.split("x").map(Number);
const navegador = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const pagina = await navegador.newPage();
await pagina.setViewport({ width: largura, height: altura, deviceScaleFactor: 1 });
await pagina.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await pagina.goto(URL, { waitUntil: "networkidle0", timeout: 180000 });

for (const [i, ponto] of pontos.entries()) {
  const y = await pagina.evaluate((p) => {
    if (/^-?\d+$/.test(p)) return Number(p);
    const [seletor, desloc = "0"] = p.split("@");
    const el = document.querySelector(seletor);
    return el ? el.getBoundingClientRect().top + window.scrollY + Number(desloc) : 0;
  }, ponto);
  await pagina.evaluate((v) => window.scrollTo(0, v), y);
  await new Promise((r) => setTimeout(r, 500));
  await pagina.screenshot({ path: `${SAIDA}/${largura}-${String(i).padStart(2, "0")}.png` });
  console.log(i, ponto, "→ y", Math.round(y));
}
await navegador.close();
