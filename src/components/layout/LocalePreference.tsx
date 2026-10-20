"use client";

import { useEffect } from "react";

import { isLocale, localeStorageKey } from "@/lib/locales";
import type { Locale } from "@/types/profile";

export interface LocalePreferenceProps {
  locale: Locale;
}

/**
 * Restores a previously chosen language.
 *
 * Runs after hydration so the server-rendered markup never mismatches, and only
 * acts on the locale's entry route so an explicitly opened URL is never
 * hijacked.
 */
export function LocalePreference({ locale }: LocalePreferenceProps) {
  useEffect(() => {
    const cookie = `${localeStorageKey}=${locale};path=/;max-age=31536000;samesite=lax`;

    try {
      const stored = window.localStorage.getItem(localeStorageKey);

      if (stored === locale || !isLocale(stored ?? "")) {
        document.cookie = cookie;
        return;
      }

      document.cookie = cookie;

      const alreadyRestored = window.sessionStorage.getItem(
        `${localeStorageKey}-restored`,
      );

      if (alreadyRestored) return;
      if (window.location.pathname !== `/${locale}`) return;

      window.sessionStorage.setItem(`${localeStorageKey}-restored`, "1");
      window.location.replace(`/${stored}`);
    } catch {
      // Storage unavailable (private mode) — the site still works, the choice
      // simply does not persist.
    }
  }, [locale]);

  return null;
}