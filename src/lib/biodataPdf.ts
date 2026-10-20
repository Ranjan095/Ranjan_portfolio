import type { Locale } from "@/types/profile";
import { profile } from "@/data/profile";
import { uiCopy } from "@/data/uiCopy";

/**
 * Version stamp for the pre-generated biodata PDF.
 *
 * The PDFs are produced at build time by `scripts/generate-biodata-pdf.mjs`
 * and served from `public/biodata/`. Appending the stamp as a query string
 * means every content change produces a fresh URL, so neither the browser nor
 * a stale `next start` process can serve an out-of-date file.
 *
 * The stamp only needs to be stable within a single build, so a lightweight
 * hash of the source content is enough.
 */
function hashString(input: string): string {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) + hash) ^ input.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
}

export const BIODATA_PDF_STAMP = hashString(
  JSON.stringify([profile, uiCopy]),
);

export const BIODATA_PDF_BASENAME = "ranjan-yadav-biodata";

export function biodataPdfFileName(locale: Locale): string {
  return `${BIODATA_PDF_BASENAME}-${locale}.pdf`;
}

export function biodataPdfHref(locale: Locale): string {
  return `/biodata/${biodataPdfFileName(locale)}?v=${BIODATA_PDF_STAMP}`;
}

export function biodataPdfDownloadName(locale: Locale): string {
  return biodataPdfFileName(locale);
}
