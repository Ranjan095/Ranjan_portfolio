import { notFoundCopy } from "@/data/sectionCopy";
import { localeHref } from "@/lib/locales";
import type { Locale } from "@/types/profile";

/**
 * Rendered for URLs that match no route at all (for example `/about`). It
 * bypasses the app layout, so it brings its own minimal styling and links back
 * to both published languages.
 */
export default function GlobalNotFound() {
  const copy = notFoundCopy;

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F2E8",
          color: "#352B28",
          fontFamily: "Georgia, 'Noto Serif Devanagari', serif",
          textAlign: "center",
          padding: "3rem 1.5rem",
        }}
      >
        <main>
          <p style={{ letterSpacing: "0.18em", fontSize: "0.75rem", color: "#7d6526" }}>
            404
          </p>
          <h1 style={{ color: "#6B1F32", margin: "1rem 0 0", fontWeight: 500 }}>
            {copy.title.en}
          </h1>
          <p style={{ color: "#6f655f", margin: "1rem auto 0", maxWidth: "28rem" }}>
            {copy.description.en}
          </p>
          <nav
            style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}
            aria-label="Languages"
          >
            {(["en", "hi"] as const satisfies readonly Locale[]).map((locale) => (
              <a
                key={locale}
                href={localeHref(locale)}
                style={{
                  border: "1px solid #D4B16A",
                  borderRadius: "999px",
                  padding: "0.6rem 1.5rem",
                  color: "#6B1F32",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {locale === "hi" ? "हिन्दी" : "English"}
              </a>
            ))}
          </nav>
        </main>
      </body>
    </html>
  );
}
