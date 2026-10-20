"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/data/navigation";
import { uiCopy } from "@/data/uiCopy";
import { biodataPdfDownloadName, biodataPdfHref } from "@/lib/biodataPdf";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

export interface MobileNavProps {
  items: readonly NavItem[];
  locale: Locale;
  onNavigate?: (id: string) => void;
}

export function MobileNav({ items, locale, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="inline-flex size-10 items-center justify-center rounded-pill border border-gold/60 bg-surface/70 text-burgundy transition-colors hover:border-burgundy hover:text-burgundy-deep"
      >
        <span className="sr-only">
          {isOpen
            ? resolveText(uiCopy.closeMenu, locale)
            : resolveText(uiCopy.openMenu, locale)}
        </span>
        {isOpen ? (
          <X className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu className="size-5" strokeWidth={1.75} />
        )}
      </button>

      {isOpen ? (
        <div
          id={menuId}
          className="fixed inset-x-0 top-16 z-40 animate-fade-in border-b border-gold/40 bg-ivory shadow-elevated"
        >
          <Container>
            <nav aria-label={resolveText(uiCopy.mobileNavLabel, locale)}>
              <ul className="flex flex-col py-3">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate?.(item.id);
                      }}
                      className="block border-b border-gold/15 py-3.5 text-center font-display text-xl text-burgundy transition-colors last:border-b-0 hover:text-burgundy-deep"
                    >
                      {resolveText(item.label, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gold/20 py-4">
              <a
                href={biodataPdfHref(locale)}
                download={biodataPdfDownloadName(locale)}
                onClick={() => setIsOpen(false)}
                title={resolveText(uiCopy.downloadBiodata, locale)}
                aria-label={resolveText(uiCopy.downloadBiodata, locale)}
                className="mx-auto flex size-11 items-center justify-center rounded-pill border border-gold text-burgundy transition-colors hover:border-burgundy hover:bg-burgundy hover:text-surface"
              >
                <Download className="size-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
            <div className="flex justify-center border-t border-gold/20 py-4">
              <LanguageSwitcher locale={locale} />
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}