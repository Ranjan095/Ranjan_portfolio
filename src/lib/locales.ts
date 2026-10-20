import type { LocalizedText, Locale } from "@/types/profile";

/** Every locale the site is published in, in switcher order. */
export const locales = ["en", "hi"] as const satisfies readonly Locale[];

export const defaultLocale: Locale = "en";

/** Shared by the language switcher and `proxy.ts`. */
export const localeStorageKey = "portfolio-locale";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Endonyms — a language is always named in its own script. */
export const localeNames: Readonly<Record<Locale, string>> = {
  en: "English",
  hi: "हिन्दी",
};

/** Full names for screen readers, in the language being spoken. */
export const localeNamesLocalized: Readonly<Record<Locale, LocalizedText>> = {
  en: { en: "English", hi: "अंग्रेज़ी" },
  hi: { en: "Hindi", hi: "हिन्दी" },
};

/** Canonical URL of a locale: `hi` → `/hi`. */
export function localeHref(locale: Locale): `/${Locale}` {
  return `/${locale}`;
}

/**
 * Best-effort `Accept-Language` match against the supported locales.
 * Deliberately dependency-free and simple: the site publishes two languages.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((param) => Number(param.replace("q=", "").trim()))
        .find((value) => !Number.isNaN(value));

      return { tag: tag.trim().toLowerCase(), quality: q ?? 1 };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}