import type { LocalizedText } from "@/types/profile";

export interface NavItem {
  /** Matches the `id` of the rendered section. */
  readonly id: string;
  readonly label: LocalizedText;
  /**
   * `false` hides the item from the header so the site never links to a
   * section that does not exist yet. Flip to `true` when the matching
   * section is implemented and rendered.
   */
  readonly available: boolean;
}

/**
 * Single source of truth for header navigation.
 * Labels are bilingual and editable alongside the profile data.
 */
export const navigation: readonly NavItem[] = [
  { id: "top", label: { en: "Home", hi: "होम" }, available: true },
  { id: "about", label: { en: "About Me", hi: "मेरे बारे में" }, available: true },
  {
    id: "education",
    label: { en: "Education", hi: "शिक्षा" },
    available: true,
  },
  { id: "career", label: { en: "Career", hi: "करियर" }, available: true },
  { id: "family", label: { en: "Family", hi: "परिवार" }, available: true },
  {
    id: "partner",
    label: { en: "Life Partner", hi: "जीवनसाथी" },
    available: true,
  },
  {
    id: "gallery",
    label: { en: "Photos", hi: "तस्वीरें" },
    available: true,
  },
  { id: "contact", label: { en: "Contact", hi: "संपर्क" }, available: true },
] as const;

/** Only items whose corresponding sections are available are rendered. */
export const availableNavigation = navigation.filter((item) => item.available);