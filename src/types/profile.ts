/**
 * Content model for the matrimonial profile.
 *
 * Every user-visible string is a `LocalizedText`, so all copy is authored in
 * `src/data/profile.ts` and never inside UI components.
 *
 * Almost every personal field is optional: sections must render cleanly when
 * a value is absent, so families only share what they are comfortable with.
 */

export type Locale = "en" | "hi";

/** A single string available in every supported locale. */
export type LocalizedText = Readonly<Record<Locale, string>>;

export interface PersonalDetails {
  readonly fullName: LocalizedText;
  readonly shortName: LocalizedText;
  /** ISO date (YYYY-MM-DD). Age is derived from it. */
  readonly dateOfBirth?: string;
  /** Shown instead of the date of birth when provided. */
  readonly age?: number;
  readonly heightCm?: number;
  readonly motherTongue?: LocalizedText;
  readonly currentCity?: LocalizedText;
  readonly hometown?: LocalizedText;
  readonly languages?: readonly string[];
  readonly religion?: LocalizedText;
  readonly community?: LocalizedText;
  readonly maritalStatus?: LocalizedText;
  readonly diet?: LocalizedText;
  /** Long-form personal introduction. */
  readonly about?: LocalizedText;
  /** Day-to-day lifestyle in a sentence or two. */
  readonly lifestyle?: LocalizedText;
  /** Personal values, rendered as short chips. */
  readonly values?: readonly LocalizedText[];
}

export interface CareerMilestone {
  readonly year: string;
  readonly title: LocalizedText;
  readonly note?: LocalizedText;
}

/** Financial details are never shown unless explicitly enabled. */
export interface Compensation {
  readonly showOnPage: boolean;
  readonly yearlyRange?: string;
  readonly note?: LocalizedText;
}

export interface Career {
  readonly profession: LocalizedText;
  readonly currentRole: LocalizedText;
  readonly industry?: LocalizedText;
  readonly organisation?: string;
  readonly experienceYears?: number;
  /** Plain-language career introduction, free of technical jargon. */
  readonly introduction: LocalizedText;
  readonly highlights?: readonly LocalizedText[];
  readonly milestones?: readonly CareerMilestone[];
  readonly compensation?: Compensation;
}

export interface EducationItem {
  readonly degree: LocalizedText;
  /** Optional — some qualifications are shared without naming the college. */
  readonly institution?: string;
  readonly specialization?: LocalizedText;
  readonly year?: string;
  readonly note?: LocalizedText;
}

export interface Education {
  readonly about?: LocalizedText;
  readonly items: readonly EducationItem[];
}

export interface FamilyMember {
  readonly relation: LocalizedText;
  readonly name?: LocalizedText;
  readonly age?: number;
  readonly occupation?: LocalizedText;
  readonly note?: LocalizedText;
}

/**
 * Every family field is optional. A family may share only what they are
 * comfortable publishing, and the section simply omits the rest — no empty
 * labels, no placeholder rows.
 */
export interface Family {
  readonly about?: LocalizedText;
  readonly father?: FamilyMember;
  readonly mother?: FamilyMember;
  readonly siblings?: readonly FamilyMember[];
  readonly hometown?: LocalizedText;
  readonly values?: readonly LocalizedText[];
  /** Optional family photograph. */
  readonly photo?: Photo;
}

export interface Interests {
  readonly items: readonly LocalizedText[];
  readonly note?: LocalizedText;
}

/** All preferences are optional and phrased as hopes, never demands. */
export interface PartnerPreferences {
  readonly about?: LocalizedText;
  readonly ageRange?: string;
  readonly education?: LocalizedText;
  readonly career?: LocalizedText;
  readonly lifestyle?: LocalizedText;
  readonly location?: LocalizedText;
  readonly values?: readonly LocalizedText[];
  /** What a shared life together would look like. */
  readonly expectations?: LocalizedText;
  readonly note?: LocalizedText;
}

export interface Photo {
  /** Path in `public/` (e.g. `/images/portrait.jpg`). */
  readonly src: string;
  /** Describes the photograph; read aloud by screen readers. */
  readonly alt: LocalizedText;
  readonly caption?: LocalizedText;
  /** Intrinsic size, required by `next/image` to reserve space (no shift). */
  readonly width: number;
  readonly height: number;
}

/** A phone-based channel. Nothing is rendered unless `showOnPage` is true. */
export interface PhoneContact {
  /** Any reasonable format; normalised to international form when rendered. */
  readonly phone: string;
  /** Opt-in per channel: numbers are private until a family chooses to share. */
  readonly showOnPage: boolean;
  readonly label?: LocalizedText;
  readonly note?: LocalizedText;
}

/** Optional second point of contact, e.g. a parent or sibling. */
export interface FamilyContact {
  readonly relation: LocalizedText;
  readonly name?: LocalizedText;
  readonly phone?: string;
  /** Additional numbers, in the order they should appear. */
  readonly phones?: readonly string[];
  readonly email?: string;
  readonly showOnPage: boolean;
  readonly note?: LocalizedText;
}

/** Optional downloadable biodata kept in `public/`. */
export interface BiodataDownload {
  /** Path under `public/`, e.g. `/biodata/biodata.pdf`. */
  readonly path: string;
  readonly label?: LocalizedText;
  readonly fileName?: string;
}

export interface ContactPreference {
  readonly email?: string;
  readonly whatsapp?: PhoneContact;
  readonly familyContact?: FamilyContact;
  /** Prefilled WhatsApp message; never sent automatically, only prepared. */
  readonly whatsappMessage?: LocalizedText;
  readonly emailSubject?: LocalizedText;
  readonly responseWindow?: LocalizedText;
  readonly note?: LocalizedText;
  readonly biodata?: BiodataDownload;
}

export interface ProfileMeta {
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface HeroContent {
  readonly eyebrow: LocalizedText;
  readonly headline: LocalizedText;
  /** Short, warm introduction shown under the headline. */
  readonly intro: LocalizedText;
  readonly primaryAction: LocalizedText;
  readonly secondaryAction: LocalizedText;
  /** `id` of the section each hero CTA points at. */
  readonly primaryActionHref: string;
  readonly secondaryActionHref: string;
}

export interface Profile {
  readonly meta: ProfileMeta;
  readonly hero: HeroContent;
  readonly personal: PersonalDetails;
  readonly career: Career;
  readonly education: Education;
  readonly family: Family;
  readonly interests: Interests;
  readonly partnerPreferences: PartnerPreferences;
  readonly photos: readonly Photo[];
  readonly contact: ContactPreference;
  readonly availableLocales: readonly Locale[];
  readonly defaultLocale: Locale;
}