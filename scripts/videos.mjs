/**
 * Prepara os vídeos do Instagram para o site.
 *
 * Entrada: midia/videos/*.mp4 (reels baixados, 720p com áudio de fala).
 * Saída:
 *   public/videos/<slug>.mp4         H.264 crf 28 + AAC 96k, faststart
 *   src/assets/videos/<slug>.jpg     pôster (importado pelo next/image)
 *   src/assets/fotos/<nome>.jpg      quadros sem legenda usados como retrato
 *                                    provisório até chegarem as fotos profissionais
 *
 * Os vídeos têm fala, então o áudio fica. No site eles só carregam no clique.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const ORIGEM = join(RAIZ, "midia", "videos");
const SAIDA_VIDEO = join(RAIZ, "public", "videos");
const SAIDA_POSTER = join(RAIZ, "src", "assets", "videos");
const SAIDA_FOTO = join(RAIZ, "src", "assets", "fotos");

const VIDEOS = [
  { arquivo: "lucienegarciaadvogada_1777402482_3885454776179895504_17082968740.mp4", slug: "perda", poster: 1.2 },
  { arquivo: "lucienegarciaadvogada_1788289329_3976781268329360308_17082968740.mp4", slug: "cafe-juridico", poster: 1.5 },
  { arquivo: "lucienegarciaadvogada_1789751065_3989041689102832271_17082968740.mp4", slug: "uniao-estavel", poster: 3.5 },
];

/** Quadros escolhidos na folha de contato: sem legenda queimada na imagem. */
const FOTOS = [
  { arquivo: VIDEOS[0].arquivo, nome: "retrato-hero", tempo: 53.67, filtro: "crop=720:1100:0:40" },
  { arquivo: VIDEOS[0].arquivo, nome: "retrato-sobre", tempo: 20.6, filtro: "crop=720:900:0:120" },
  { arquivo: VIDEOS[0].arquivo, nome: "frase", tempo: 30.4, filtro: "crop=720:1100:0:60" },
  // Café Jurídico: só a faixa acima das legendas queimadas
  { arquivo: VIDEOS[1].arquivo, nome: "cafe-juridico", tempo: 35.5, filtro: "crop=576:600:0:0" },
];

function rodar(args) {
  execFileSync(ffmpeg, ["-y", "-loglevel", "error", ...args], { stdio: "inherit" });
}

for (const pasta of [SAIDA_VIDEO, SAIDA_POSTER, SAIDA_FOTO]) mkdirSync(pasta, { recursive: true });

for (const { arquivo, slug, poster } of VIDEOS) {
  const entrada = join(ORIGEM, arquivo);
  const destino = join(SAIDA_VIDEO, `${slug}.mp4`);
  rodar([
    "-i", entrada,
    "-vf", "scale=-2:min(1280\\,ih)",
    "-c:v", "libx264", "-preset", "slow", "-crf", "28", "-profile:v", "high", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "96k",
    "-movflags", "+faststart",
    destino,
  ]);
  rodar(["-ss", String(poster), "-i", entrada, "-frames:v", "1", "-q:v", "3", join(SAIDA_POSTER, `${slug}.jpg`)]);
  console.log(`${slug}.mp4`, `${(statSync(destino).size / 1048576).toFixed(1)} MB`);
}

for (const { arquivo, nome, tempo, filtro } of FOTOS) {
  rodar(["-ss", String(tempo), "-i", join(ORIGEM, arquivo), "-frames:v", "1", "-vf", filtro, "-q:v", "2", join(SAIDA_FOTO, `${nome}.jpg`)]);
  console.log(`${nome}.jpg`);
}
