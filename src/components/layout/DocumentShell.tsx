import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Serif_Devanagari,
} from "next/font/google";

import { LocalePreference } from "@/components/layout/LocalePreference";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import { uiCopy } from "@/data/uiCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const displayDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

const bodyDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

export interface DocumentShellProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * Root document for a locale. Renders `<html lang>` on the server so the
 * language is correct before hydration and for assistive technology.
 */
export function DocumentShell({ locale, children }: DocumentShellProps) {
  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${displayDevanagari.variable} ${bodyDevanagari.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-card focus:bg-burgundy focus:px-5 focus:py-3 focus:text-surface"
        >
          {resolveText(uiCopy.skipToContent, locale)}
        </a>
        <SiteHeader locale={locale} />
        <main
          id="main"
          aria-label={resolveText(uiCopy.skipToContent, locale)}
          className="flex-1"
        >
          {children}
        </main>
        <SiteFooter locale={locale} />
        <LocalePreference locale={locale} />
      </body>
    </html>
  );
}