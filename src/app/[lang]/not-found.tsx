import { lang } from "next/root-params";

import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { notFoundCopy } from "@/data/sectionCopy";
import { resolveText } from "@/lib/i18n";
import { isLocale, localeHref } from "@/lib/locales";

/** Rendered inside the locale layout, so `html lang` and the fonts still apply. */
export default async function NotFound() {
  const value = await lang();
  const locale = isLocale(value) ? value : "en";
  const copy = notFoundCopy;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl text-burgundy sm:text-5xl">
        {resolveText(copy.title, locale)}
      </h1>
      <DecorativeDivider className="my-7 w-full justify-center" tone="muted" />
      <p className="max-w-md text-muted">{resolveText(copy.description, locale)}</p>
      <div className="mt-8">
        <OutlineButton href={localeHref(locale)}>
          {resolveText(copy.action, locale)}
        </OutlineButton>
      </div>
    </div>
  );
}
