/**
 * Confere a prévia publicada (ou servida localmente na subpasta): lista
 * respostas >= 400, imagens quebradas e erros de console.
 *   node material/previa.mjs <url>
 */
import puppeteer from "puppeteer-core";

const URL = process.argv[2] ?? "http://localhost:5249/LucieneGarcia/";
const navegador = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const pagina = await navegador.newPage();
const falhas = [];
const erros = [];
pagina.on("response", (r) => r.status() >= 400 && falhas.push(`${r.status()} ${r.url()}`));
pagina.on("pageerror", (e) => erros.push(String(e)));
pagina.on("console", (m) => m.type() === "error" && erros.push(m.text()));
await pagina.setViewport({ width: 1440, height: 900 });
await pagina.goto(URL, { waitUntil: "networkidle0", timeout: 120000 });
const total = await pagina.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < total; y += 800) {
  await pagina.evaluate((v) => window.scrollTo(0, v), y);
  await new Promise((r) => setTimeout(r, 120));
}
await new Promise((r) => setTimeout(r, 1500));
const quebradas = await pagina.evaluate(() =>
  [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
);
// toca o primeiro vídeo para conferir o caminho do mp4 (a âncora #videos fica
// fora da folha; os vídeos estão na folha logo depois dela). O cartão vem para
// a tela antes do clique e o carregamento tem até 10s.
await pagina.evaluate(() => {
  const botao = document.querySelector("#videos + .folha button");
  botao?.scrollIntoView({ block: "center" });
  botao?.click();
});
await pagina
  .waitForFunction(() => (document.querySelector("#videos + .folha video")?.readyState ?? 0) >= 2, { timeout: 10000 })
  .catch(() => {});
const video = await pagina.evaluate(() => {
  const v = document.querySelector("#videos + .folha video");
  return v ? { src: v.currentSrc, readyState: v.readyState, erro: v.error?.code ?? null } : null;
});
console.log(JSON.stringify({ falhas, quebradas, erros, video, imagens: await pagina.evaluate(() => document.images.length) }, null, 1));
await navegador.close();
