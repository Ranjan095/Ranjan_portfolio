import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PrintBiodataButton } from "@/components/biodata/PrintBiodataButton";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { uiCopy } from "@/data/uiCopy";
import { biodataPdfDownloadName, biodataPdfHref } from "@/lib/biodataPdf";
import { formatHeight } from "@/lib/format";
import { resolveText } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";
import type { Locale } from "@/types/profile";

/** A clean document title keeps the browser's printed header uncluttered. */
export async function generateMetadata({
  params,
}: PageProps<"/[lang]/biodata">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : profile.defaultLocale;

  return {
    title: {
      absolute: `${resolveText(profile.personal.fullName, locale)} — ${resolveText(uiCopy.biodataTitle, locale)}`,
    },
    robots: { index: false, follow: false },
  };
}

/**
 * A two-page marriage biodata, laid out to fit A4 and printed to PDF straight
 * from the browser. It reuses the site's palette and typefaces so the download
 * matches the profile exactly.
 *
 * Page 1 — identity: portrait, personal details, education and career.
 * Page 2 — background: about, family, life partner and contact.
 */
export default async function BiodataPage({ params }: PageProps<"/[lang]/biodata">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const locale = lang;

  const contactNote =
    profile.contact.familyContact?.note ?? profile.contact.note;

  const familyContact = profile.contact.familyContact;
  const contactPhones =
    familyContact?.showOnPage === false
      ? []
      : (familyContact?.phones ?? (familyContact?.phone ? [familyContact.phone] : []));
  const contactPhoneLabel = resolveText(uiCopy.contactMobile, locale);

  return (
    <div className="biodata-document bg-ivory py-10 print:py-0">
      <Container className="max-w-4xl">
        {/* Screen-only toolbar */}
        <div className="biodata-toolbar mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-burgundy transition-colors hover:text-burgundy-deep"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden="true" />
            {resolveText(uiCopy.backToProfile, locale)}
          </Link>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={biodataPdfHref(locale)}
              download={biodataPdfDownloadName(locale)}
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-burgundy bg-burgundy px-5 py-2.5 text-sm font-semibold tracking-wide text-surface transition-colors hover:bg-burgundy-deep"
            >
              <Download className="size-4" strokeWidth={2} aria-hidden="true" />
              {resolveText(uiCopy.downloadBiodataPdf, locale)}
            </a>
            <PrintBiodataButton locale={locale} />
          </div>
        </div>
        <p className="biodata-toolbar mb-8 text-center text-sm text-muted print:hidden">
          {resolveText(uiCopy.printHint, locale)}
        </p>

        {/* Page 1 */}
        <article className="biodata-sheet frame-double rounded-card bg-surface p-6 shadow-soft sm:p-10 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <p className="mb-4 text-center font-display text-lg tracking-[0.2em] text-burgundy">
            {resolveText(uiCopy.biodataInvocation, locale)}
          </p>
          <BiodataHeader locale={locale} page={1} />

          <div className="mt-6">
            <BiodataSection
              title={resolveText(uiCopy.biodataCareer, locale)}
              accent
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <p className="font-display text-2xl text-burgundy">
                    {resolveText(profile.career.currentRole, locale)}
                  </p>
                  {profile.career.organisation ? (
                    <p className="mt-0.5 text-sm text-muted">
                      {profile.career.organisation}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {careerBadges(locale).map((badge) => (
                    <span
                      key={badge}
                      className="rounded-pill border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-[0.1em] text-gold-deep uppercase"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </BiodataSection>
          </div>

          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <BiodataSection title={resolveText(uiCopy.biodataPersonal, locale)}>
              <DetailRows rows={personalRows(locale)} />
            </BiodataSection>

            <BiodataSection title={resolveText(uiCopy.biodataEducation, locale)}>
              <ul className="space-y-3">
                {profile.education.items.map((item) => (
                  <li key={item.institution ?? resolveText(item.degree, locale)}>
                    <p className="font-medium text-ink">
                      {resolveText(item.degree, locale)}
                    </p>
                    {item.institution ? (
                      <p className="text-sm text-muted">{item.institution}</p>
                    ) : null}
                    {item.note ? (
                      <p className="text-sm text-muted">
                        {resolveText(item.note, locale)}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </BiodataSection>
          </div>

          {interestItems(locale).length ? (
            <div className="mt-8">
              <BiodataSection
                title={resolveText(uiCopy.biodataInterests, locale)}
              >
                <ul className="flex flex-wrap gap-2">
                  {interestItems(locale).map((item) => (
                    <li
                      key={item}
                      className="rounded-pill border border-gold/50 bg-gold/10 px-3 py-1 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </BiodataSection>
            </div>
          ) : null}

          <BiodataPageMark locale={locale} page={1} total={2} />
        </article>

        {/* Page 2 */}
        <article className="biodata-sheet frame-double mt-8 rounded-card bg-surface p-6 shadow-soft sm:p-10 print:mt-0 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <BiodataContinuation locale={locale} />

          {profile.personal.about ? (
            <div className="mt-6">
              <BiodataSection title={resolveText(uiCopy.biodataAbout, locale)}>
                <p className="leading-relaxed text-ink-soft">
                  {resolveText(profile.personal.about, locale)}
                </p>
              </BiodataSection>
            </div>
          ) : null}

          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <BiodataSection title={resolveText(uiCopy.biodataFamily, locale)}>
              {profile.family.about ? (
                <p className="leading-relaxed text-ink-soft">
                  {resolveText(profile.family.about, locale)}
                </p>
              ) : null}
              <DetailRows rows={familyRows(locale)} className="mt-3" />
            </BiodataSection>

            <BiodataSection title={resolveText(uiCopy.biodataPartner, locale)}>
              {profile.partnerPreferences.about ? (
                <p className="leading-relaxed text-ink-soft">
                  {resolveText(profile.partnerPreferences.about, locale)}
                </p>
              ) : null}
              <DetailRows rows={partnerRows(locale)} className="mt-3" />
            </BiodataSection>

            <BiodataSection
              title={resolveText(uiCopy.biodataContact, locale)}
              className="sm:col-span-2"
            >
              {contactNote ? (
                <p className="leading-relaxed text-ink-soft">
                  {resolveText(contactNote, locale)}
                </p>
              ) : null}
              {contactPhones.length ? (
                <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-gold/20 pt-2">
                  <span className="shrink-0 text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
                    {contactPhoneLabel}
                  </span>
                  <span className="text-right text-[0.95rem] text-ink">
                    {contactPhones.map((phone, index) => (
                      <span key={phone}>
                        {index > 0 ? ", " : ""}
                        <a href={`tel:${phone}`} className="text-ink">
                          {phone}
                        </a>
                      </span>
                    ))}
                  </span>
                </div>
              ) : null}
            </BiodataSection>
          </div>

          <BiodataPageMark locale={locale} page={2} total={2} />
        </article>
      </Container>
    </div>
  );
}

function BiodataHeader({ locale, page }: { locale: Locale; page: number }) {
  const portrait = profile.photos[0];

  return (
    <header className="flex flex-col items-center gap-5 border-b border-gold/40 pb-6 text-center sm:flex-row sm:text-left">
      {portrait ? (
        <Image
          src={portrait.src}
          alt={resolveText(portrait.alt, locale)}
          width={portrait.width}
          height={portrait.height}
          priority
          unoptimized
          className="h-28 w-auto rounded-card border border-gold/50 object-cover"
        />
      ) : null}
      <div>
        <p className="eyebrow">{resolveText(uiCopy.biodataTitle, locale)}</p>
        <h1 className="mt-2 font-display text-3xl text-burgundy sm:text-4xl">
          {resolveText(profile.personal.fullName, locale)}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {resolveText(uiCopy.biodataSubtitle, locale)}
        </p>
      </div>
      <span className="eyebrow ml-auto hidden sm:block">
        {page} / 2
      </span>
    </header>
  );
}

/** Compact running head at the top of page 2. */
function BiodataContinuation({ locale }: { locale: Locale }) {
  return (
    <header className="flex items-baseline justify-between gap-4 border-b border-gold/40 pb-4">
      <div>
        <p className="eyebrow">{resolveText(uiCopy.biodataTitle, locale)}</p>
        <p className="mt-1 font-display text-2xl text-burgundy">
          {resolveText(profile.personal.fullName, locale)}
        </p>
      </div>
      <span className="eyebrow">2 / 2</span>
    </header>
  );
}

/** Screen-only page marker; the printed sheet relies on real page breaks. */
function BiodataPageMark({
  locale,
  page,
  total,
}: {
  locale: Locale;
  page: number;
  total: number;
}) {
  return (
    <p className="mt-10 border-t border-gold/30 pt-5 text-center text-xs tracking-[0.14em] text-muted uppercase print:hidden">
      {page} / {total} · {resolveText(uiCopy.footerDisclaimer, locale)}
    </p>
  );
}

function BiodataSection({
  title,
  children,
  className,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Adds a highlighted panel with a gold accent (used for Career). */
  accent?: boolean;
}) {
  return (
    <section
      className={`${className ?? ""} group rounded-card transition-all duration-300 ${
        accent
          ? "-mx-2 border border-gold/40 bg-gold/5 px-4 py-4 shadow-soft hover:border-gold hover:shadow-card"
          : "hover:-translate-y-0.5"
      }`}
    >
      <h2 className="flex items-center gap-3 font-display text-xl text-burgundy">
        <span
          aria-hidden="true"
          className="inline-block h-px w-6 bg-gold transition-all duration-300 group-hover:w-10"
        />
        {title}
      </h2>
      <div className={accent ? "mt-3" : "mt-3 border-t border-gold/30 pt-3"}>
        {children}
      </div>
    </section>
  );
}

interface DetailRow {
  label: string;
  value: string;
}

function DetailRows({
  rows,
  className,
}: {
  rows: readonly DetailRow[];
  className?: string;
}) {
  if (!rows.length) return null;

  return (
    <dl className={className}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-4 py-1.5"
        >
          <dt className="shrink-0 text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
            {row.label}
          </dt>
          <dd className="text-right text-[0.95rem] text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function personalRows(locale: Locale): DetailRow[] {
  const { personal } = profile;
  const rows: DetailRow[] = [];

  const height = formatHeight(personal.heightCm);
  if (height) rows.push({ label: label("Height", "ऊँचाई", locale), value: height });
  if (personal.motherTongue)
    rows.push({ label: label("Mother Tongue", "मातृभाषा", locale), value: resolveText(personal.motherTongue, locale) });
  if (personal.religion)
    rows.push({ label: label("Religion", "धर्म", locale), value: resolveText(personal.religion, locale) });
  if (personal.maritalStatus)
    rows.push({ label: label("Marital Status", "वैवाहिक स्थिति", locale), value: resolveText(personal.maritalStatus, locale) });
  if (personal.diet)
    rows.push({ label: label("Diet", "आहार", locale), value: resolveText(personal.diet, locale) });
  if (personal.currentCity)
    rows.push({ label: label("Current City", "वर्तमान निवास", locale), value: resolveText(personal.currentCity, locale) });
  if (personal.hometown)
    rows.push({ label: label("Hometown", "गृहनगर", locale), value: resolveText(personal.hometown, locale) });
  if (personal.languages?.length)
    rows.push({ label: label("Languages", "भाषाएँ", locale), value: personal.languages.join(", ") });

  return rows;
}

/** Short highlight chips shown beside the role on page 1. */
function careerBadges(locale: Locale): string[] {
  const { career } = profile;
  const badges: string[] = [];

  if (career.industry) badges.push(resolveText(career.industry, locale));
  if (career.experienceYears) {
    badges.push(
      locale === "hi"
        ? `${career.experienceYears}+ वर्ष अनुभव`
        : `${career.experienceYears}+ years experience`,
    );
  }

  return badges;
}

/** Hobbies and interests, resolved for the current locale. */
function interestItems(locale: Locale): string[] {
  return profile.interests.items.map((item) => resolveText(item, locale));
}

function familyRows(locale: Locale): DetailRow[] {
  const { family } = profile;
  const rows: DetailRow[] = [];

  if (family.father)
    rows.push({ label: resolveText(family.father.relation, locale), value: family.father.occupation ? resolveText(family.father.occupation, locale) : "" });
  if (family.mother)
    rows.push({ label: resolveText(family.mother.relation, locale), value: family.mother.occupation ? resolveText(family.mother.occupation, locale) : "" });
  if (family.hometown)
    rows.push({ label: label("Family Hometown", "परिवार का गृहनगर", locale), value: resolveText(family.hometown, locale) });

  return rows.filter((row) => row.value);
}

function partnerRows(locale: Locale): DetailRow[] {
  const { partnerPreferences: partner } = profile;
  const rows: DetailRow[] = [];

  if (partner.ageRange)
    rows.push({ label: label("Age", "आयु", locale), value: partner.ageRange });
  if (partner.education)
    rows.push({ label: label("Education", "शिक्षा", locale), value: resolveText(partner.education, locale) });
  if (partner.career)
    rows.push({ label: label("Profession", "व्यवसाय", locale), value: resolveText(partner.career, locale) });
  if (partner.lifestyle)
    rows.push({ label: label("Lifestyle", "जीवनशैली", locale), value: resolveText(partner.lifestyle, locale) });
  if (partner.location)
    rows.push({ label: label("Location", "स्थान", locale), value: resolveText(partner.location, locale) });

  return rows;
}

/** Chooses the locale's label. Labels are presentation-only, so they live here. */
function label(en: string, hi: string, locale: Locale): string {
  return locale === "hi" ? hi : en;
}
