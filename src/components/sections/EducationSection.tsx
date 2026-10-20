import { GraduationCap } from "lucide-react";

import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { fieldLabels, sectionCopy } from "@/data/sectionCopy";
import { cn } from "@/lib/cn";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

export function EducationSection({ locale }: { locale: Locale }) {
  const copy = sectionCopy.education;
  const about = profile.education.about && resolveText(profile.education.about, locale);

  return (
    <SectionWrapper
      id="education"
      tone="surface"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={resolveText(copy.subtitle, locale)}
    >
      {about ? (
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-ink-soft">
          {about}
        </p>
      ) : null}

      {profile.education.items.length ? (
        <ol className="relative mx-auto border-l border-gold/50 pl-8 sm:pl-12">
          {profile.education.items.map((item, index) => {
            const specialization =
              item.specialization && resolveText(item.specialization, locale);
            const note = item.note && resolveText(item.note, locale);

            return (
              <li
                key={item.degree.en}
                className="animate-fade-up relative pb-12 last:pb-0"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/*
                  Timeline node. `left` mirrors the list padding exactly and
                  `-translate-x-1/2` puts its centre on the gold rule; the top
                  offset centres it on the first line of text (the year when
                  present, otherwise the qualification title).
                */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute flex -translate-x-1/2 items-center justify-center rounded-pill border border-gold bg-surface",
                    "left-[-2rem] size-3.5 sm:left-[-3rem] sm:size-4",
                    item.year
                      ? "top-[0.2rem] sm:top-[0.25rem]"
                      : "top-[1.9375rem] sm:top-[2.3125rem]",
                  )}
                >
                  <GraduationCap className="size-2 text-burgundy sm:size-2.5" />
                </span>

                {item.year ? (
                  <p className="eyebrow">{item.year}</p>
                ) : null}

                <article className="frame-double mt-3 rounded-card bg-ivory p-6 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-7">
                  <h3 className="text-xl text-burgundy sm:text-2xl">
                    {resolveText(item.degree, locale)}
                  </h3>
                  {item.institution ? (
                    <p className="mt-2 text-[0.95rem] text-ink-soft">
                      {item.institution}
                    </p>
                  ) : null}

                  {specialization ? (
                    <>
                      <DecorativeDivider
                        className="my-5 w-full"
                        tone="muted"
                      />
                      <dl className="space-y-3">
                        {specialization ? (
                          <div>
                            <dt className="text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
                              {resolveText(fieldLabels.specialization, locale)}
                            </dt>
                            <dd className="mt-1 text-[0.95rem] text-ink">
                              {specialization}
                            </dd>
                          </div>
                        ) : null}
                      </dl>
                    </>
                  ) : null}

                  {note ? (
                    <p className="mt-5 text-[0.95rem] text-muted italic">
                      {note}
                    </p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      ) : null}
    </SectionWrapper>
  );
}