import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  localeStorageKey,
  matchLocale,
} from "@/lib/locales";

/**
 * Sends locale-less URLs to the right language: the visitor's saved choice
 * first, then their browser preference, then the default language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  // Already localised (or a real route such as /_next).
  if (isLocale(segment)) return;

  const saved = request.cookies.get(localeStorageKey)?.value;
  const locale =
    saved && isLocale(saved)
      ? saved
      : matchLocale(request.headers.get("accept-language")) ?? defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Every path without a file extension is a page that needs a language.
  matcher: ["/((?!_next|api|.*\\.[a-zA-Z0-9]+$).*)"],
};