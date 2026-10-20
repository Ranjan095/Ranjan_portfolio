import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentShell } from "@/components/layout/DocumentShell";
import { profile } from "@/data/profile";
import { resolveText } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/locales";
import "../globals.css";

/** Both languages are prerendered at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : profile.defaultLocale;

  return {
    title: {
      default: resolveText(profile.meta.title, locale),
      template: "%s · Matrimonial Profile",
    },
    description: resolveText(profile.meta.description, locale),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", hi: "/hi" },
    },
    openGraph: {
      title: resolveText(profile.meta.title, locale),
      description: resolveText(profile.meta.description, locale),
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      type: "profile",
    },
    // This profile is shared by link, never meant to appear in search results.
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, nocache: true },
    },
  };
}

export const viewport = {
  themeColor: "#F8F2E8",
  colorScheme: "light",
} as const;

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <DocumentShell locale={lang}>{children}</DocumentShell>;
}