import { BookOpen, Briefcase, Compass, HeartHandshake, Sparkles } from "lucide-react";

import { ChipList } from "@/components/ui/Chip";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { DetailCard } from "@/components/ui/DetailCard";
import { PendingPanel } from "@/components/ui/PendingPanel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { pendingCopy, sectionCopy } from "@/data/sectionCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

const preferenceMeta = [
  {
    key: "education",
    icon: BookOpen,
    label: "educationLabel",
  },
  {
    key: "career",
    icon: Briefcase,
    label: "careerLabel",
  },
  {
    key: "lifestyle",
    icon: Sparkles,
    label: "lifestyleLabel",
  },
  {
    key: "location",
    icon: Compass,
    label: "locationLabel",
  },
] as const satisfies readonly {
  key: "education" | "career" | "lifestyle" | "location";
  icon: typeof BookOpen;
  label: "educationLabel" | "careerLabel" | "lifestyleLabel" | "locationLabel";
}[];

export function PartnerPreferencesSection({ locale }: { locale: Locale }) {
  const preferences = profile.partnerPreferences;
  const copy = sectionCopy.partner;

  const about = preferences.about && resolveText(preferences.about, locale);
  const expectations =
    preferences.expectations && resolveText(preferences.expectations, locale);
  const note = preferences.note && resolveText(preferences.note, locale);
  const values = preferences.values?.map((value) => resolveText(value, locale)) ?? [];

  // Each preference is rendered only when it has been shared.
  const cards = preferenceMeta
    .map((meta) => {
      const value = preferences[meta.key];
      return {
        ...meta,
        title: resolveText(copy[meta.label], locale),
        text: value ? resolveText(value, locale) : "",
      };
    })
    .filter((card) => card.text);

  const ageRange = preferences.ageRange;
  const hasContent = Boolean(
    about || cards.length || values.length || ageRange || expectations,
  );

  return (
    <SectionWrapper
      id="partner"
      tone="burgundy"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={hasContent ? resolveText(copy.subtitle) : undefined}
    >
      {hasContent ? null : (
        <PendingPanel message={pendingCopy.partner} locale={locale} tone="dark" />
      )}

      {about ? (
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-ivory/90">
          {about}
        </p>
      ) : null}

      {ageRange ? (
        <p className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-pill border border-gold/45 bg-burgundy-deep/40 px-5 py-2.5">
          <HeartHandshake
            className="size-4 text-gold-soft"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className="text-sm text-ivory/90">
            <span className="mr-1.5 text-xs font-semibold tracking-[0.14em] text-gold-soft uppercase">
              {resolveText(copy.ageLabel, locale)}
            </span>
            {ageRange}
          </span>
        </p>
      ) : null}

      {cards.length ? (
        <>
          <h3 className="text-center font-display text-2xl text-surface">
            {resolveText(copy.detailsTitle, locale)}
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <DetailCard
                    tone="burgundy"
                    icon={Icon}
                    title={card.title}
                    description={card.text}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {expectations ? (
        <figure className="mx-auto mt-14 max-w-3xl text-center">
          <DecorativeDivider
            label={resolveText(copy.expectationsTitle, locale)}
            tone="onBurgundy"
            className="mb-8"
          />
          <blockquote className="font-display text-xl leading-relaxed text-ivory sm:text-2xl">
            {expectations}
          </blockquote>
        </figure>
      ) : null}

      {values.length ? (
        <div className="mt-14">
          <h3 className="text-center font-display text-2xl text-surface">
            {resolveText(copy.valuesTitle, locale)}
          </h3>
          <ChipList
            items={values}
            label={resolveText(copy.valuesTitle, locale)}
            className="mt-6"
            tone="dark"
          />
        </div>
      ) : null}

      {note ? (
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-gold-soft/90 italic">
          {note}
        </p>
      ) : null}
    </SectionWrapper>
  );
}