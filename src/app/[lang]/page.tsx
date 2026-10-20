import { notFound } from "next/navigation";

import { Portfolio } from "@/components/portfolio/Portfolio";
import { isLocale } from "@/lib/locales";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return <Portfolio locale={lang} />;
}