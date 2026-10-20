"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";
import { cn } from "@/lib/cn";
import { uiCopy } from "@/data/uiCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale, Photo } from "@/types/profile";

export interface PhotoGalleryProps {
  photos: readonly Photo[];
  locale: Locale;
}

/**
 * Responsive photo grid with a lightbox.
 *
 * Photographs that fail to load are dropped from the grid instead of leaving a
 * broken image behind, so a missing file never reaches the page.
 */
export function PhotoGallery({ photos, locale }: PhotoGalleryProps) {
  const [missing, setMissing] = useState<readonly string[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [returnFocusTo, setReturnFocusTo] = useState<HTMLButtonElement | null>(
    null,
  );

  const visible = photos.filter((photo) => !missing.includes(photo.src));

  // Opening the lightbox must not scroll the page behind it.
  useEffect(() => {
    if (openIndex === null) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [openIndex]);

  if (!visible.length) return null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {visible.map((photo, index) => {
          const caption = photo.caption && resolveText(photo.caption, locale);

          return (
            <li
              key={photo.src}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
            >
              <button
                type="button"
                onClick={(event) => {
                  setReturnFocusTo(event.currentTarget);
                  setOpenIndex(index);
                }}
                aria-haspopup="dialog"
                className={cn(
                  "group relative block w-full overflow-hidden rounded-card border border-gold/40 bg-ivory-deep shadow-soft transition-all duration-300",
                  "aspect-4/5 hover:-translate-y-1 hover:border-gold hover:shadow-card",
                )}
              >
                <Image
                  src={photo.src}
                  alt={resolveText(photo.alt, locale)}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  onError={() =>
                    setMissing((current) =>
                      current.includes(photo.src)
                        ? current
                        : [...current, photo.src],
                    )
                  }
                  decoding="async"
                  sizes="(min-width: 768px) 32vw, 48vw"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-burgundy-deep/0 transition-colors duration-300 group-hover:bg-burgundy-deep/15"
                />
                <span className="sr-only">
                  {resolveText(uiCopy.openImage, locale)}
                </span>
              </button>
              {caption ? (
                <p className="mt-2.5 text-center text-xs tracking-[0.14em] text-gold-deep uppercase">
                  {caption}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>

      {openIndex !== null ? (
        <PhotoLightbox
          photos={visible}
          index={openIndex}
          locale={locale}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          returnFocusTo={returnFocusTo}
        />
      ) : null}
    </>
  );
}