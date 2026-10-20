import type { LocalizedText } from "@/types/profile";

/**
 * Static, non-profile UI strings (navigation landmarks, buttons, screen-reader
 * labels). Personal content lives in `src/data/profile.ts`; section headings
 * live in `src/data/sectionCopy.ts`. Both are typed `LocalizedText`, so a
 * missing translation is a type error rather than an English fallback.
 */
export const uiCopy = {
  skipToContent: {
    en: "Skip to main content",
    hi: "मुख्य सामग्री पर जाएँ",
  },
  mainLandmarkLabel: {
    en: "Main profile content",
    hi: "परिचय की मुख्य सामग्री",
  },

  primaryNavLabel: {
    en: "Main navigation",
    hi: "मुख्य नेविगेशन",
  },
  mobileNavLabel: {
    en: "Mobile navigation",
    hi: "मोबाइल नेविगेशन",
  },
  openMenu: {
    en: "Open navigation menu",
    hi: "नेविगेशन मेन्यू खोलें",
  },
  closeMenu: {
    en: "Close navigation menu",
    hi: "नेविगेशन मेन्यू बंद करें",
  },

  languageSwitcherLabel: {
    en: "Choose your language",
    hi: "अपनी पसंद की भाषा चुनें",
  },
  currentLanguage: {
    en: "Current language",
    hi: "वर्तमान भाषा",
  },

  profileTagline: {
    en: "Matrimonial Profile",
    hi: "वैवाहिक परिचय",
  },
  footerDisclaimer: {
    en: "Shared with prospective families for matrimonial purposes",
    hi: "विवाह संबंधी बातचीत के लिए इच्छुक परिवारों के साथ साझा किया गया",
  },

  openImage: {
    en: "View image",
    hi: "तस्वीर देखें",
  },
  openImageViewer: {
    en: "Open image viewer",
    hi: "तस्वीर देखने के लिए खोलें",
  },
  closeImageViewer: {
    en: "Close image viewer",
    hi: "तस्वीर देखने वाला व्यू बंद करें",
  },
  previousImage: {
    en: "Previous image",
    hi: "पिछली तस्वीर",
  },
  nextImage: {
    en: "Next image",
    hi: "अगली तस्वीर",
  },
  imagePosition: {
    en: "Image",
    hi: "तस्वीर",
  },
  imageLoading: {
    en: "Loading image…",
    hi: "तस्वीर लोड हो रही है…",
  },
  downloadImage: {
    en: "Download image",
    hi: "तस्वीर डाउनलोड करें",
  },
} as const satisfies Record<string, LocalizedText>;

export type UiCopyKey = keyof typeof uiCopy;