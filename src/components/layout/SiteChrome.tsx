import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { availableNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { uiCopy } from "@/data/uiCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

/**
 * Page shell: brand, section navigation (progressive — only sections that
 * exist are linked) and the language switcher.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const initial = resolveText(profile.personal.shortName, locale).slice(0, 1);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 text-burgundy transition-colors hover:text-burgundy-deep"
          aria-label={resolveText(profile.personal.fullName, locale)}
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-pill border border-gold bg-gold/15 font-display text-lg leading-none"
          >
            {initial}
          </span>
          <span className="truncate font-display text-xl tracking-wide">
            {resolveText(profile.personal.shortName, locale)}
          </span>
        </a>

        <nav
          aria-label={resolveText(uiCopy.primaryNavLabel, locale)}
          className="hidden lg:flex"
        >
          <ul className="flex items-center gap-4 text-[0.8125rem] xl:gap-5">
            {availableNavigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative block whitespace-nowrap font-medium tracking-wide text-ink-soft transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-burgundy hover:after:w-full focus-visible:after:w-full"
                >
                  {resolveText(item.label, locale)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <MobileNav items={availableNavigation} locale={locale} />
        </div>
      </Container>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-gold/30 bg-ivory-deep py-10">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <DecorativeDivider tone="muted" className="w-full" />
          {profile.contact.note ? (
            <p className="text-center text-sm text-muted">
              {resolveText(profile.contact.note, locale)}
            </p>
          ) : null}
          <p className="text-center text-xs tracking-[0.14em] text-muted uppercase">
            {resolveText(uiCopy.footerDisclaimer, locale)}
          </p>
        </div>
      </Container>
    </footer>
  );
}