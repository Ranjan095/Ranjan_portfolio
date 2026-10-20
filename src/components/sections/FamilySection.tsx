import { Heart, MapPin, Users } from "lucide-react";
import Image from "next/image";

import { ChipList } from "@/components/ui/Chip";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { DetailCard, type DetailCardItem } from "@/components/ui/DetailCard";
import { PendingPanel } from "@/components/ui/PendingPanel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { pendingCopy, sectionCopy } from "@/data/sectionCopy";
import { cn } from "@/lib/cn";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";
import type { FamilyMember } from "@/types/profile";

/** Only rows with an actual value are returned, so nothing empty is shown. */
function memberItems(
  member: FamilyMember,
  labels: { age: string; occupation: string },
  locale: Locale,
): DetailCardItem[] {
  const items: DetailCardItem[] = [];

  if (member.age !== undefined) {
    items.push({ label: labels.age, value: `${member.age}` });
  }

  const occupation = member.occupation && resolveText(member.occupation, locale);
  if (occupation) {
    items.push({ label: labels.occupation, value: occupation });
  }

  return items;
}

function MemberCard({
  member,
  index,
  className,
  locale,
}: {
  member: FamilyMember;
  index: number;
  className?: string;
  locale: Locale;
}) {
  const copy = sectionCopy.family;
  const note = member.note && resolveText(member.note, locale);
  const items = memberItems(
    member,
    {
      age: resolveText(copy.ageLabel, locale),
      occupation: resolveText(copy.occupationLabel, locale),
    },
    locale,
  );
  const name = member.name && resolveText(member.name, locale);

  return (
    <div
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <DetailCard
        icon={Users}
        title={resolveText(member.relation, locale)}
        description={name}
        items={items}
      >
        {note ? (
          <p className="mt-5 border-t border-gold/30 pt-5 text-[0.95rem] leading-relaxed text-muted italic">
            {note}
          </p>
        ) : null}
      </DetailCard>
    </div>
  );
}

export function FamilySection({ locale }: { locale: Locale }) {
  const family = profile.family;
  const copy = sectionCopy.family;

  const about = family.about && resolveText(family.about, locale);
  const hometown = family.hometown && resolveText(family.hometown, locale);
  const values = family.values?.map((value) => resolveText(value, locale)) ?? [];
  const parents = [family.father, family.mother].filter(
    (member): member is FamilyMember => Boolean(member),
  );
  const siblings = family.siblings ?? [];

  const hasPhoto = Boolean(family.photo);

  const hasContent = Boolean(
    about || hometown || values.length || parents.length || siblings.length || hasPhoto,
  );

  return (
    <SectionWrapper
      id="family"
      tone="surface"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={hasContent ? resolveText(copy.subtitle) : undefined}
    >
      {hasContent ? null : (
        <PendingPanel message={pendingCopy.family} locale={locale} />
      )}

      {/*
        Introduction and photograph. With no photograph the two-column grid
        would leave the right half empty, so the introduction is centred as a
        single column instead — keeping the section balanced on wide screens.
      */}
      <div
        className={cn(
          "grid gap-10",
          hasPhoto && "lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14",
        )}
      >
        <div
          className={cn(
            "animate-fade-up",
            hasPhoto ? "text-left" : "mx-auto max-w-3xl text-center",
          )}
        >
          {about ? (
            <p className="text-lg leading-relaxed text-ink-soft">{about}</p>
          ) : null}

          {hometown ? (
            <div
              className={cn(
                "mt-7 flex items-center gap-2.5 rounded-pill border border-gold/50 bg-gold/10 px-4 py-2",
                hasPhoto ? "inline-flex" : "mx-auto w-fit justify-center",
              )}
            >
              <MapPin
                className="size-4 text-gold-deep"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-sm text-ink">
                <span className="mr-1.5 text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
                  {resolveText(copy.hometownTitle, locale)}
                </span>
                {hometown}
              </span>
            </div>
          ) : null}
        </div>

        {family.photo ? (
          <figure className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 rounded-card border border-gold/45 sm:-inset-3"
              />
              {/* A fixed frame keeps the layout balanced whether the family
                  photograph is portrait or landscape. */}
              <div className="frame-double relative aspect-3/4 overflow-hidden rounded-card bg-ivory-deep shadow-soft">
                <Image
                  src={family.photo.src}
                  alt={resolveText(family.photo.alt, locale)}
                  width={family.photo.width}
                  height={family.photo.height}
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="size-full object-cover object-top"
                />
              </div>
            </div>
            {family.photo.caption ? (
              <figcaption className="mt-4 text-center text-xs tracking-[0.18em] text-gold-deep uppercase">
                {resolveText(family.photo.caption, locale)}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>

      {parents.length || siblings.length || values.length ? (
        <DecorativeDivider
          className="my-12 w-full justify-center sm:my-14"
          tone="muted"
        />
      ) : null}

      {/* Parents */}
      {parents.length ? (
        <section aria-labelledby="family-parents-title">
          <h3
            id="family-parents-title"
            className="text-center font-display text-2xl text-burgundy"
          >
            {resolveText(copy.parentsTitle, locale)}
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {parents.map((member, index) => (
              <MemberCard
                key={member.relation.en}
                member={member}
                index={index}
                className="w-full sm:w-80"
                locale={locale}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Siblings */}
      {siblings.length ? (
        <section
          aria-labelledby="family-siblings-title"
          className={parents.length ? "mt-12" : undefined}
        >
          <h3
            id="family-siblings-title"
            className="text-center font-display text-2xl text-burgundy"
          >
            {resolveText(copy.siblingsTitle, locale)}
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {siblings.map((member, index) => (
              <MemberCard
                key={member.relation.en}
                member={member}
                index={index}
                className="w-full sm:w-80"
                locale={locale}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Values */}
      {values.length ? (
        <section
          aria-labelledby="family-values-title"
          className={parents.length || siblings.length ? "mt-12" : undefined}
        >
          <h3
            id="family-values-title"
            className="flex items-center justify-center gap-2 text-center font-display text-2xl text-burgundy"
          >
            <Heart
              className="size-5 text-gold"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            {resolveText(copy.valuesTitle, locale)}
          </h3>
          <ChipList
            items={values}
            label={resolveText(copy.valuesTitle, locale)}
            className="mt-5"
          />
        </section>
      ) : null}
    </SectionWrapper>
  );
}
