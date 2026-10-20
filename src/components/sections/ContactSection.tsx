import { Download, Mail, MessageCircle, Phone } from "lucide-react";

import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { DetailCard } from "@/components/ui/DetailCard";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { sectionCopy } from "@/data/sectionCopy";
import {
  mailtoUrl,
  publicFileExists,
  telUrl,
  whatsappUrl,
} from "@/lib/contact";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

export function ContactSection({ locale }: { locale: Locale }) {
  const contact = profile.contact;
  const copy = sectionCopy.contact;

  const whatsapp = contact.whatsapp;
  const prefilledMessage = contact.whatsappMessage
    ? resolveText(contact.whatsappMessage, locale)
    : undefined;
  const whatsappLink = whatsapp?.showOnPage
    ? whatsappUrl(whatsapp.phone, prefilledMessage)
    : null;

  const emailLink = mailtoUrl(
    contact.email,
    contact.emailSubject && resolveText(contact.emailSubject, locale),
  );

  const family = contact.familyContact;
  const familyPhones =
    family?.showOnPage
      ? (family.phones ?? (family.phone ? [family.phone] : []))
      : [];
  const familyPhoneLink =
    family?.showOnPage && family.phone ? telUrl(family.phone) : null;
  const familyWhatsAppLink =
    family?.showOnPage && family.phone
      ? whatsappUrl(family.phone, prefilledMessage)
      : null;
  const familyEmailLink =
    family?.showOnPage && family.email
      ? mailtoUrl(
          family.email,
          contact.emailSubject && resolveText(contact.emailSubject, locale),
        )
      : null;

  // The download is shown only when the file is really there in `public/`.
  const biodata =
    contact.biodata && publicFileExists(contact.biodata.path)
      ? contact.biodata
      : undefined;

  // A family card may be text-only: it appears whenever a family contact is
  // published, even if it has no phone number or email to link to.
  const showFamilyCard = Boolean(family?.showOnPage);
  const hasFamilyLinks = Boolean(
    familyPhones.length ||
      familyPhoneLink ||
      familyWhatsAppLink ||
      familyEmailLink,
  );
  const hasActions = Boolean(
    whatsappLink || emailLink || biodata || showFamilyCard,
  );

  if (!hasActions) return null;

  return (
    <SectionWrapper
      id="contact"
      tone="ivory"
      eyebrow={resolveText(copy.eyebrow)}
      title={resolveText(copy.title)}
      subtitle={undefined}
    >
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
        {resolveText(copy.message)}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {whatsapp && whatsappLink ? (
          <PrimaryButton
            href={whatsappLink}
            ariaLabel={resolveText(copy.whatsappFallback, locale)}
          >
            <MessageCircle
              className="size-4"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            {whatsapp.label
              ? resolveText(whatsapp.label, locale)
              : resolveText(copy.whatsappFallback, locale)}
          </PrimaryButton>
        ) : null}

        {emailLink ? (
          <OutlineButton
            href={emailLink}
            ariaLabel={resolveText(copy.emailFallback, locale)}
          >
            <Mail className="size-4" strokeWidth={1.75} aria-hidden="true" />
            {resolveText(copy.emailFallback, locale)}
          </OutlineButton>
        ) : null}

        {biodata ? (
          <OutlineButton
            href={biodata.path}
            className="[&_a]:underline-offset-4"
            ariaLabel={biodata.label && resolveText(biodata.label, locale)}
          >
            <Download
              className="size-4"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            {biodata.label ? resolveText(biodata.label, locale) : "PDF"}
          </OutlineButton>
        ) : null}
      </div>

      {biodata ? (
        <p className="mt-3 text-center text-sm text-muted">
          {resolveText(copy.pdfNote, locale)}
        </p>
      ) : null}

      {whatsapp?.note && whatsappLink ? (
        <p className="mt-4 text-center text-sm text-muted">
          {resolveText(whatsapp.note, locale)}
        </p>
      ) : null}

      {showFamilyCard ? (
        <>
          <DecorativeDivider
            className="my-12 w-full justify-center"
            tone="muted"
          />

          <div className="mx-auto max-w-xl">
            <DetailCard
              icon={MessageCircle}
              title={resolveText(copy.familyTitle, locale)}
              description={
                family && family.relation
                  ? resolveText(family.relation, locale)
                  : family?.name
                    ? resolveText(family.name, locale)
                    : undefined
              }
            >
              {familyPhones.length ? (
                <div className="mt-6 flex flex-col items-center gap-2">
                  <span className="text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
                    {resolveText(copy.familyPhonesLabel, locale)}
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {familyPhones.map((phone) => (
                      <a
                        key={phone}
                        href={telUrl(phone) ?? undefined}
                        className="inline-flex items-center gap-2 rounded-pill border border-gold/50 bg-gold/10 px-4 py-1.5 font-normal text-base font-normal tabular-nums tracking-wide text-burgundy transition-colors hover:border-burgundy hover:bg-burgundy hover:text-surface"
                      >
                        <Phone className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              {hasFamilyLinks ? (
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {familyWhatsAppLink ? (
                    <OutlineButton href={familyWhatsAppLink} size="sm">
                      <MessageCircle
                        className="size-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {resolveText(copy.whatsappFallback, locale)}
                    </OutlineButton>
                  ) : null}
                  {familyPhoneLink ? (
                    <OutlineButton href={familyPhoneLink} size="sm">
                      <Phone
                        className="size-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {resolveText(copy.callLabel, locale)}
                    </OutlineButton>
                  ) : null}
                  {familyEmailLink ? (
                    <OutlineButton href={familyEmailLink} size="sm">
                      <Mail
                        className="size-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {resolveText(copy.emailFallback, locale)}
                    </OutlineButton>
                  ) : null}
                </div>
              ) : null}

              {family?.note ? (
                <p className="mt-5 border-t border-gold/30 pt-5 text-center text-[0.95rem] text-muted italic">
                  {resolveText(family.note, locale)}
                </p>
              ) : null}
            </DetailCard>
          </div>
        </>
      ) : null}

      {contact.responseWindow ? (
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-display text-xl text-burgundy">
            {resolveText(copy.responseTitle, locale)}
          </h3>
          <p className="mt-3 text-ink-soft">
            {resolveText(contact.responseWindow, locale)}
          </p>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
