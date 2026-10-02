import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site-config";

export const dynamic = "force-static";
export const alt = SITE.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Monograma LG original (dourado) centralizado sobre o preto, com fio de 1px. */
export default async function OpengraphImage() {
  const marca = await readFile(join(process.cwd(), "src/assets/logo/luciene-garcia.png"));
  const src = `data:image/png;base64,${marca.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "1px solid rgba(164, 129, 61, 0.55)",
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={820} height={230} alt="" />
      </div>
    ),
    size,
  );
}
