"use client";

import { ChevronLeft, ChevronRight, Download, LoaderCircle, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { uiCopy } from "@/data/uiCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale, Photo } from "@/types/profile";

export interface PhotoLightboxProps {
  photos: readonly Photo[];
  index: number;
  locale: Locale;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** Trigger to focus again once the dialog closes. */
  returnFocusTo?: HTMLElement | null;
}

/** Minimum horizontal travel (px) before a drag is treated as a swipe. */
const SWIPE_THRESHOLD = 48;

/**
 * Lightbox built on the native `<dialog>` element: modal focus trapping, Escape
 * to dismiss and focus restoration are handled by the platform, so no
 * dependency is needed. Keyboard, pointer and touch navigation are layered on,
 * and a spinner fills the gap while the next image decodes.
 */
export function PhotoLightbox({
  photos,
  index,
  locale,
  onIndexChange,
  onClose,
  returnFocusTo,
}: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dragStartX = useRef<number | null>(null);
  const photo = photos[index];

  const showPrevious = useCallback(() => {
    onIndexChange((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onIndexChange]);

  const showNext = useCallback(() => {
    onIndexChange((index + 1) % photos.length);
  }, [index, photos.length, onIndexChange]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    dialog.addEventListener("keydown", onKeyDown);
    return () => dialog.removeEventListener("keydown", onKeyDown);
  }, [showNext, showPrevious]);

  // Escape closes the dialog natively; `onClose` syncs React state.
  const handleClose = () => {
    onClose();
    if (returnFocusTo?.isConnected) returnFocusTo.focus();
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    const startX = dragStartX.current;
    dragStartX.current = null;
    if (startX === null || photos.length < 2) return;

    const deltaX = event.clientX - startX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    if (deltaX < 0) showNext();
    else showPrevious();
  };

  const caption = photo.caption && resolveText(photo.caption, locale);

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-label={resolveText(photo.alt, locale)}
      className="animate-fade-in h-full max-h-full w-full max-w-full bg-transparent p-0 backdrop:bg-burgundy-deep/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-pill border border-gold/60 bg-ivory/10 text-ivory transition-colors hover:bg-ivory hover:text-burgundy-deep sm:top-6 sm:right-6"
        >
          <span className="sr-only">{resolveText(uiCopy.closeImageViewer, locale)}</span>
          <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </button>

        {/* Download */}
        <a
          href={photo.src}
          download
          className="absolute top-4 right-[4.25rem] z-10 inline-flex size-11 items-center justify-center rounded-pill border border-gold/60 bg-ivory/10 text-ivory transition-colors hover:bg-ivory hover:text-burgundy-deep sm:top-6 sm:right-[5.5rem]"
        >
          <span className="sr-only">{resolveText(uiCopy.downloadImage, locale)}</span>
          <Download className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </a>

        {/* Image */}
        <figure className="flex max-h-full min-h-0 flex-col items-center">
          <div
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="frame-double relative max-h-[70vh] overflow-hidden rounded-card bg-surface shadow-elevated touch-pan-y select-none"
          >
            <LightboxImage key={photo.src} photo={photo} locale={locale} />
          </div>
          <figcaption className="mt-4 flex items-center gap-3 text-center">
            {caption ? (
              <span className="text-sm tracking-[0.14em] text-ivory uppercase">
                {caption}
              </span>
            ) : null}
            <span className="text-xs tracking-[0.2em] text-gold-soft">
              {resolveText(uiCopy.imagePosition, locale)} {index + 1} /{" "}
              {photos.length}
            </span>
          </figcaption>
        </figure>

        {/* Navigation */}
        {photos.length > 1 ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex size-12 items-center justify-center rounded-pill border border-gold/60 text-ivory transition-colors hover:bg-ivory hover:text-burgundy-deep"
            >
              <span className="sr-only">{resolveText(uiCopy.previousImage, locale)}</span>
              <ChevronLeft className="size-6" strokeWidth={1.75} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex size-12 items-center justify-center rounded-pill border border-gold/60 text-ivory transition-colors hover:bg-ivory hover:text-burgundy-deep"
            >
              <span className="sr-only">{resolveText(uiCopy.nextImage, locale)}</span>
              <ChevronRight className="size-6" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </dialog>
  );
}

/**
 * The displayed photograph plus its loading overlay. Mounted with a `key` of
 * `photo.src`, so switching photographs remounts it and the loading state
 * resets without an effect.
 */
function LightboxImage({ photo, locale }: { photo: Photo; locale: Locale }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={photo.src}
        alt={resolveText(photo.alt, locale)}
        width={photo.width}
        height={photo.height}
        priority
        onLoad={() => setLoaded(true)}
        draggable={false}
        sizes="(min-width: 1024px) 70vw, 92vw"
        className={cn(
          "max-h-[70vh] w-auto object-contain transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Loading overlay — covers the frame until the image has decoded. */}
      <div
        aria-live="polite"
        className={cn(
          "absolute inset-0 flex min-h-[50vh] min-w-[60vw] items-center justify-center gap-3 bg-ivory/70 text-burgundy-deep transition-opacity duration-300",
          loaded ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <LoaderCircle
          className="size-6 animate-spin"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="text-xs tracking-[0.2em] uppercase">
          {resolveText(uiCopy.imageLoading, locale)}
        </span>
      </div>
    </>
  );
}
