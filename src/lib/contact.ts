import { existsSync } from "node:fs";
import { join, normalize } from "node:path";

/**
 * Contact-link helpers. Everything here is pure string work so it can run in
 * both server and client components, plus one filesystem probe used at build
 * time to decide whether an optional download really exists.
 */

const E164 = /^\+?[1-9]\d{7,14}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Normalises a phone number to international form (`+919000000000`).
 * Returns `null` for anything that is not a plausible number, so a typo can
 * never turn into a broken or wrong link.
 */
export function normalizePhone(raw: string | undefined): string | null {
  if (!raw) return null;

  const trimmed = raw.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");

  if (digits.startsWith("00")) {
    return `+${digits.slice(2)}`;
  }

  const candidate = hasPlus ? `+${digits}` : digits;

  return E164.test(candidate) ? candidate : null;
}

/**
 * Official WhatsApp link format: `https://wa.me/<number>?text=<message>`.
 * The number is digits only, without the `+`, as wa.me requires. Nothing is
 * sent — the message is only pre-filled in WhatsApp when the family opens it.
 */
export function whatsappUrl(
  rawPhone: string | undefined,
  prefilledMessage?: string,
): string | null {
  const normalized = normalizePhone(rawPhone);
  if (!normalized) return null;

  const digits = normalized.replace("+", "");
  const query = prefilledMessage
    ? `?text=${encodeURIComponent(prefilledMessage)}`
    : "";

  return `https://wa.me/${digits}${query}`;
}

/** `tel:` link, or `null` when the number is not usable. */
export function telUrl(rawPhone: string | undefined): string | null {
  const normalized = normalizePhone(rawPhone);
  return normalized ? `tel:${normalized}` : null;
}

export function isValidEmail(raw: string | undefined): boolean {
  return Boolean(raw && EMAIL.test(raw.trim()));
}

/** `mailto:` link with an optional subject, or `null` for an invalid address. */
export function mailtoUrl(
  rawEmail: string | undefined,
  subject?: string,
): string | null {
  if (!isValidEmail(rawEmail)) return null;

  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${rawEmail!.trim()}${query}`;
}

/**
 * True when a file really exists inside `public/`.
 *
 * Used at build time so an optional download link is omitted rather than
 * pointing at a 404. Server-only: call it from a Server Component.
 */
export function publicFileExists(path: string): boolean {
  if (!path.startsWith("/") || path.includes("..")) return false;

  return existsSync(join(process.cwd(), "public", normalize(path)));
}