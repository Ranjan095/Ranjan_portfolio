"use client";

import { cn } from "@/lib/cn";
import { resolveText } from "@/lib/i18n";
import {
  localeHref,
  localeNames,
  localeNamesLocalized,
  localeStorageKey,
  locales,
} from "@/lib/locales";
import { uiCopy } from "@/data/uiCopy";
import type { Locale } from "@/types/profile";

export interface LanguageSwitcherProps {
  locale: Locale;
}

/**
 * Language switcher.
 *
 * These are plain anchors rather than `next/link` on purpose: the language is
 * owned by the root layout (`<html lang>`), and layouts are cached across
 * client-side navigations, so only a document navigation re-renders it with the
 * right language. The click handler records the choice — localStorage for the
 * client, a cookie so `proxy.ts` can send `/` to the right language.
 */
export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={resolveText(uiCopy.languageSwitcherLabel, locale)}
      className="flex items-center gap-1 rounded-pill border border-gold/50 bg-gold/10 p-1"
    >
      {locales.map((option) => {
        const isCurrent = option === locale;

        return (
          <a
            key={option}
            href={localeHref(option)}
            hrefLang={option}
            lang={option}
            aria-current={isCurrent ? "true" : undefined}
            onClick={() => {
              try {
                window.localStorage.setItem(localeStorageKey, option);
              } catch {
                // Storage unavailable — the language still switches, it just
                // will not be remembered.
              }
              document.cookie = `${localeStorageKey}=${option};path=/;max-age=31536000;samesite=lax`;
            }}
            className={cn(
              "inline-flex min-h-9 items-center rounded-pill px-3.5 text-xs font-semibold tracking-[0.1em] transition-colors",
              isCurrent
                ? "bg-burgundy text-surface"
                : "text-gold-deep hover:bg-gold/20 hover:text-burgundy",
            )}
          >
            {localeNames[option]}
            <span className="sr-only">
              {" — "}
              {resolveText(localeNamesLocalized[option], locale)}
              {isCurrent
                ? ` (${resolveText(uiCopy.currentLanguage, locale)})`
                : ""}
            </span>
          </a>
        );
      })}
    </div>
  );
}