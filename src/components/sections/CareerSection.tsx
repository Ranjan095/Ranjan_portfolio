import { Briefcase, Sparkles } from "lucide-react";

import { ChipList } from "@/components/ui/Chip";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { DetailCard, type DetailCardItem } from "@/components/ui/DetailCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { fieldLabels, sectionCopy } from "@/data/sectionCopy";
import { formatTemplate, resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

function buildRoleDetails(locale: Locale): DetailCardItem[] {
  const career = profile.career;
  const details: DetailCardItem[] = [
    {
      label: resolveText(fieldLabels.profession, locale),
      value: resolveText(career.profession, locale),
    },
    {
      label: resolveText(fieldLabels.currentRole, locale),
      value: resolveText(career.currentRole, locale),
    },
  ];

  const industry = career.industry && resolveText(career.industry, locale);
  if (industry) {
    details.push({ label: resolveText(fieldLabels.industry, locale), value: industry });
  }

  if (career.organisation) {
    details.push({
      label: resolveText(fieldLabels.organisation, locale),
      value: career.organisation,
    });
  }

  if (career.experienceYears) {
    details.push({
      label: resolveText(fieldLabels.experience, locale),
      value: formatTemplate(resolveText(fieldLabels.years, locale), {
        n: career.experienceYears,
      }),
    });
  }

  // Financial details are opt-in; hidden unless explicitly enabled.
  const compensation = career.compensation;
  if (compensation?.showOnPage && compensation.yearlyRange) {
    details.push({
      label: resolveText(fieldLabels.compensation, locale),
      value: compensation.yearlyRange,
    });
  }

  return details;
}

export function CareerSection({ locale }: { locale: Locale }) {
  const career = profile.career;
  const copy = sectionCopy.career;

  const highlights = career.highlights?.map((item) => resolveText(item, locale)) ?? [];
  const milestones = career.milestones ?? [];
  const compensationNote =
    career.compensation?.showOnPage && career.compensation.note
      ? resolveText(career.compensation.note, locale)
      : undefined;

  return (
    <SectionWrapper
      id="career"
      tone="ivoryDeep"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={resolveText(copy.subtitle, locale)}
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Plain-language introduction */}
        <div className="animate-fade-up text-left">
          <h3 className="font-display text-2xl text-burgundy sm:text-3xl">
            {resolveText(career.currentRole, locale)}
          </h3>
          <DecorativeDivider className="my-6 w-40" tone="muted" />
          <p className="leading-relaxed text-ink-soft">
            {resolveText(career.introduction, locale)}
          </p>

          {highlights.length ? (
            <div className="mt-9">
              <h4 className="font-display text-xl text-burgundy">
                {resolveText(copy.highlightsTitle, locale)}
              </h4>
              <ChipList
                items={highlights}
                label={resolveText(copy.highlightsTitle, locale)}
                className="mt-4 justify-start"
              />
            </div>
          ) : null}

          {milestones.length ? (
            <div className="mt-9">
              <h4 className="font-display text-xl text-burgundy">
                {resolveText(copy.milestonesTitle, locale)}
              </h4>
              <ol className="mt-5 space-y-5 border-l border-gold/50 pl-6">
                {milestones.map((milestone) => (
                  <li key={milestone.year} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 -left-[1.65rem] size-2.5 rounded-pill bg-gold"
                    />
                    <p className="eyebrow">{milestone.year}</p>
                    <p className="mt-1 font-medium text-burgundy">
                      {resolveText(milestone.title, locale)}
                    </p>
                    {milestone.note ? (
                      <p className="mt-1 text-[0.95rem] text-muted">
                        {resolveText(milestone.note, locale)}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>

        {/* Role summary card */}
        <div className="animate-fade-up lg:pt-2" style={{ animationDelay: "120ms" }}>
          <DetailCard
            icon={career.highlights?.length ? Sparkles : Briefcase}
            title={resolveText(career.profession, locale)}
            items={buildRoleDetails(locale)}
          >
            {compensationNote ? (
              <p className="mt-5 text-sm text-muted italic">{compensationNote}</p>
            ) : null}
          </DetailCard>
        </div>
      </div>
    </SectionWrapper>
  );
}