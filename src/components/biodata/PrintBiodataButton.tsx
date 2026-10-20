"use client";

import { Printer } from "lucide-react";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { uiCopy } from "@/data/uiCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

/**
 * Opens the browser print dialog, where "Save as PDF" produces the downloadable
 * one-page biodata. Printing the page itself keeps the Devanagari and Latin
 * typefaces rendered exactly as they appear on screen.
 */
export function PrintBiodataButton({ locale }: { locale: Locale }) {
  return (
    <PrimaryButton
      size="lg"
      onClick={() => window.print()}
      ariaLabel={resolveText(uiCopy.printBiodata, locale)}
    >
      <Printer className="size-4" strokeWidth={1.75} aria-hidden="true" />
      {resolveText(uiCopy.printBiodata, locale)}
    </PrimaryButton>
  );
}
