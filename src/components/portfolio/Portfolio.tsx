import { AboutSection } from "@/components/sections/AboutSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { FamilySection } from "@/components/sections/FamilySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerPreferencesSection } from "@/components/sections/PartnerPreferencesSection";
import type { Locale } from "@/types/profile";

/**
 * The whole profile, rendered for one locale. Every route reuses this single
 * composition — adding a language never duplicates the page.
 */
export function Portfolio({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <EducationSection locale={locale} />
      <CareerSection locale={locale} />
      <FamilySection locale={locale} />
      <PartnerPreferencesSection locale={locale} />
      <GallerySection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}