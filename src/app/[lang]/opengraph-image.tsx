import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { profile } from "@/data/profile";
import { resolveText } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";

export const alt = "Ranjan Yadav — Matrimonial Profile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const portraitData = await readFile(
  join(process.cwd(), "public", "images", "portrait.png"),
  "base64",
);
const portraitSrc = `data:image/jpeg;base64,${portraitData}`;

/** Warm, shareable card: burgundy panel with the name and the portrait. */
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : profile.defaultLocale;

  const name = resolveText(profile.personal.fullName, locale);
  const role = resolveText(profile.career.currentRole, locale);
  const organisation = profile.career.organisation;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #6b1f32 0%, #4e1624 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 60px",
            color: "#f8f2e8",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 12,
              textTransform: "uppercase",
              color: "#d4b16a",
            }}
          >
            Matrimonial Profile
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              color: "#e8d3a3",
              maxWidth: 560,
            }}
          >
            {organisation ? `${role} · ${organisation}` : role}
          </div>
        </div>

        <div
          style={{
            width: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <img
            alt={name}
            src={portraitSrc}
            width={360}
            height={480}
            style={{
              objectFit: "cover",
              borderRadius: 18,
              border: "6px solid #d4b16a",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
