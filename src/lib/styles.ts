/** Shared, variant-first style maps so buttons stay consistent and DRY. */

export const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border font-body text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonSizes = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-3.5 text-base",
} as const;

export type ButtonSize = keyof typeof buttonSizes;

export const primaryButtonStyles = `${buttonBase} border-burgundy bg-burgundy text-surface hover:border-burgundy-deep hover:bg-burgundy-deep`;

export const outlineButtonStyles = `${buttonBase} border-gold bg-transparent text-burgundy hover:border-burgundy hover:bg-burgundy hover:text-surface`;

/** Section background tones used by `SectionWrapper`. */
export const sectionTones = {
  ivory: "bg-ivory text-ink",
  ivoryDeep: "bg-ivory-deep text-ink",
  surface: "bg-surface text-ink",
  burgundy: "bg-burgundy text-surface",
} as const;

export type SectionTone = keyof typeof sectionTones;