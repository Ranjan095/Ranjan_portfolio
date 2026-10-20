import type { Locale } from "@/types/profile";

/** BCP-47 tags used for dates and numbers in each supported locale. */
const intlLocales: Record<Locale, string> = {
  en: "en-IN",
  hi: "hi-IN",
};

export function formatDate(
  isoDate: string | undefined,
  locale: Locale = "en",
): string {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(intlLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Whole years between today and an ISO date of birth. */
export function ageFromDate(isoDate: string | undefined): number | undefined {
  if (!isoDate) return undefined;

  const birth = new Date(isoDate);
  if (Number.isNaN(birth.getTime())) return undefined;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDelta = today.getMonth() - birth.getMonth();

  if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }

  return age >= 0 ? age : undefined;
}

/** `178` → `5'10"`. Returns `undefined` for implausible values. */
export function formatHeight(
  heightCm: number | undefined,
): string | undefined {
  if (!heightCm || heightCm < 90 || heightCm > 250) return undefined;

  const totalInches = Math.round((heightCm / 2.54) * 10) / 10;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return `${feet}'${inches}"`;
}