import { ArrowDown, Download, Images } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { profile } from "@/data/profile";
import { uiCopy } from "@/data/uiCopy";
import { biodataPdfDownloadName, biodataPdfHref } from "@/lib/biodataPdf";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

/** The first entry in `profile.photos` is treated as the hero portrait. */
const portrait = profile.photos[0];
const location =
  profile.personal.currentCity ?? profile.personal.hometown ?? null;

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section
      id="top"
      aria-labelledby="top-title"
      className="paper-grain relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-28"
    >
      {/* Soft gold halo behind the portrait column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] size-[34rem] rounded-pill bg-gold/10 blur-3xl sm:size-[42rem]"
      />

      <Container>
        <div className="grid items-center gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          {/* Introduction */}
          <div className="text-center xl:text-left">
            <p className="eyebrow animate-fade-in">
              {resolveText(profile.hero.eyebrow, locale)}
            </p>

            <h1
              id="top-title"
              className="mt-5 animate-fade-up text-4xl leading-[1.1] text-burgundy sm:text-5xl xl:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              {resolveText(profile.hero.headline, locale)}
            </h1>

            <DecorativeDivider
              className="my-7 animate-fade-up xl:w-56"
              tone="muted"
            />

            <p
              className="animate-fade-up text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              {resolveText(profile.hero.intro, locale)}
            </p>

            <p
              className="mt-6 animate-fade-up font-display text-2xl text-ink sm:text-3xl"
              style={{ animationDelay: "220ms" }}
            >
              {resolveText(profile.personal.fullName, locale)}
            </p>
            {location ? (
              <p
                className="animate-fade-up text-sm tracking-[0.2em] text-gold-deep uppercase"
                style={{ animationDelay: "260ms" }}
              >
                {resolveText(location, locale)}
              </p>
            ) : null}

            <div
              className="mt-9 flex animate-fade-up flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center xl:justify-start"
              style={{ animationDelay: "320ms" }}
            >
              <PrimaryButton href={profile.hero.primaryActionHref} size="lg">
                {resolveText(profile.hero.primaryAction, locale)}
                <ArrowDown className="size-4" strokeWidth={2} />
              </PrimaryButton>
              <OutlineButton
                href={profile.hero.secondaryActionHref}
                size="lg"
              >
                <Images className="size-4" strokeWidth={1.75} />
                {resolveText(profile.hero.secondaryAction, locale)}
              </OutlineButton>
              <a
                href={biodataPdfHref(locale)}
                download={biodataPdfDownloadName(locale)}
                title={resolveText(uiCopy.downloadBiodata, locale)}
                aria-label={resolveText(uiCopy.downloadBiodata, locale)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border border-gold px-8 py-3.5 text-base font-semibold tracking-wide text-burgundy transition-colors duration-200 hover:border-burgundy hover:bg-burgundy hover:text-surface"
              >
                <Download className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                {resolveText(uiCopy.downloadBiodata, locale)}
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-first flex justify-center xl:order-last">
            <div
              className="animate-reveal-portrait relative w-full max-w-[19rem] sm:max-w-sm lg:max-w-md xl:max-w-none"
              style={{ animationDelay: "120ms" }}
            >
              {/* Offset gold outline behind the frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 -right-3 -bottom-3 rounded-card border border-gold/50 sm:-inset-4 sm:-right-4 sm:-bottom-4"
              />
              <div className="frame-double relative overflow-hidden rounded-card bg-surface shadow-elevated">
                <Image
                  src={portrait.src}
                  alt={resolveText(portrait.alt, locale)}
                  width={portrait.width}
                  height={portrait.height}
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 85vw"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              {portrait.caption ? (
                <p
                  aria-hidden="true"
                  className="mt-4 text-center text-xs tracking-[0.18em] text-gold-deep uppercase"
                >
                  {resolveText(portrait.caption, locale)}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}