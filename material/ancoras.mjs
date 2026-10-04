/**
 * Confere os links do menu com as folhas presas: do fim da página, clica em
 * cada item e mede onde a âncora parou (deve ficar logo abaixo do menu) e
 * qual item ficou marcado.
 *   node material/ancoras.mjs [url]
 */
import puppeteer from "puppeteer-core";

const URL = process.argv[2] ?? "http://localhost:5242/";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p.goto(URL, { waitUntil: "networkidle0", timeout: 180000 });
const ids = await p.$$eval("header nav a[href^='#']", (as) => as.map((a) => a.getAttribute("href")));
for (const href of ids) {
  await p.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await new Promise((r) => setTimeout(r, 300));
  await p.click(`header nav a[href='${href}']`);
  await new Promise((r) => setTimeout(r, 1500));
  const r = await p.evaluate((h) => {
    const alvo = document.querySelector(h);
    const marcado = document.querySelector("header nav a[aria-current='true'], header nav a[aria-current='location']")?.getAttribute("href");
    return { topo: Math.round(alvo.getBoundingClientRect().top), marcado: marcado ?? "?" };
  }, href);
  console.log(href.padEnd(12), "âncora em", r.topo, "px | marcado:", r.marcado);
}
await b.close();
