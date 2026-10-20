import type { Locale, LocalizedText } from "@/types/profile";

export function resolveText(
  value: LocalizedText,
  locale: Locale = "en",
): string {
  return value[locale] || value.en;
}

/** Fills `{placeholders}` in a template, e.g. "{n} years". */
export function formatTemplate(
  template: string,
  values: Readonly<Record<string, string | number>>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

