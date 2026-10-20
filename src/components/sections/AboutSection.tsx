import { UserRound } from "lucide-react";

import { AgeValue } from "@/components/ui/AgeValue";
import { ChipList } from "@/components/ui/Chip";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { DetailCard, type DetailCardItem } from "@/components/ui/DetailCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { fieldLabels, sectionCopy } from "@/data/sectionCopy";
import { formatDate, formatHeight } from "@/lib/format";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

/** Builds label/value pairs, silently dropping values that are not shared. */
function buildDetails(locale: Locale): DetailCardItem[] {
  const p = profile.personal;
  const details: DetailCardItem[] = [];

  // An explicit `age` in the configuration wins; otherwise it is derived from
  // the date of birth on the client (`AgeValue`), because the current date is
  // not known while the page is prerendered.
  if (p.age !== undefined) {
    details.push({ label: resolveText(fieldLabels.age, locale), value: `${p.age}` });
  } else if (p.dateOfBirth) {
    details.push({
      label: resolveText(fieldLabels.age, locale),
      value: <AgeValue dateOfBirth={p.dateOfBirth} />,
    });
  }

  const dob = formatDate(p.dateOfBirth);
  if (dob) {
    details.push({ label: resolveText(fieldLabels.dateOfBirth, locale), value: dob });
  }

  const height = formatHeight(p.heightCm);
  if (height) {
    details.push({ label: resolveText(fieldLabels.height, locale), value: height });
  }

  const motherTongue = p.motherTongue && resolveText(p.motherTongue, locale);
  if (motherTongue) {
    details.push({
      label: resolveText(fieldLabels.motherTongue, locale),
      value: motherTongue,
    });
  }

  const currentCity = p.currentCity && resolveText(p.currentCity, locale);
  if (currentCity) {
    details.push({ label: resolveText(fieldLabels.currentCity, locale), value: currentCity });
  }

  const hometown = p.hometown && resolveText(p.hometown, locale);
  if (hometown) {
    details.push({ label: resolveText(fieldLabels.hometown, locale), value: hometown });
  }

  if (p.languages?.length) {
    details.push({
      label: resolveText(fieldLabels.languages, locale),
      value: p.languages.join(", "),
    });
  }

  const religion = p.religion && resolveText(p.religion, locale);
  if (religion) {
    details.push({ label: resolveText(fieldLabels.religion, locale), value: religion });
  }

  const community = p.community && resolveText(p.community, locale);
  if (community) {
    details.push({
      label: resolveText(fieldLabels.community, locale),
      value: community,
    });
  }

  const maritalStatus = p.maritalStatus && resolveText(p.maritalStatus, locale);
  if (maritalStatus) {
    details.push({
      label: resolveText(fieldLabels.maritalStatus, locale),
      value: maritalStatus,
    });
  }

  const diet = p.diet && resolveText(p.diet, locale);
  if (diet) {
    details.push({ label: resolveText(fieldLabels.diet, locale), value: diet });
  }

  return details;
}

export function AboutSection({ locale }: { locale: Locale }) {
  const p = profile.personal;
  const copy = sectionCopy.about;

  const introduction = p.about && resolveText(p.about, locale);
  const lifestyle = p.lifestyle && resolveText(p.lifestyle, locale);
  const interests = profile.interests.items.map((item) => resolveText(item, locale));
  const values = p.values?.map((value) => resolveText(value, locale)) ?? [];
  const details = buildDetails(locale);

  return (
    <SectionWrapper
      id="about"
      tone="ivory"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={resolveText(copy.subtitle, locale)}
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Narrative */}
        <div className="animate-fade-up text-left">
          <h3 className="font-display text-2xl text-burgundy">
            {resolveText(copy.introductionTitle, locale)}
          </h3>
          {introduction ? (
            <p className="mt-4 leading-relaxed text-ink-soft">{introduction}</p>
          ) : null}

          {lifestyle ? (
            <>
              <DecorativeDivider className="my-7 w-full" tone="muted" />
              <h3 className="font-display text-2xl text-burgundy">
                {resolveText(copy.valuesTitle, locale)}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{lifestyle}</p>
            </>
          ) : null}

          {values.length ? (
            <ChipList
              items={values}
              label={resolveText(copy.valuesTitle, locale)}
              className="mt-6 justify-start"
            />
          ) : null}

          {interests.length ? (
            <div className="mt-9">
              <h3 className="font-display text-2xl text-burgundy">
                {resolveText(copy.interestsTitle, locale)}
              </h3>
              <ChipList
                items={interests}
                label={resolveText(copy.interestsTitle, locale)}
                className="mt-4 justify-start"
              />
            </div>
          ) : null}
        </div>

        {/* Facts */}
        {details.length ? (
          <div className="animate-fade-up lg:pt-2" style={{ animationDelay: "120ms" }}>
            <DetailCard
              icon={UserRound}
              title={resolveText(copy.detailsTitle, locale)}
              description={resolveText(p.fullName, locale)}
              items={details}
            />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
}