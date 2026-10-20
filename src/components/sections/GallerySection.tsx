import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { sectionCopy } from "@/data/sectionCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale } from "@/types/profile";

export function GallerySection({ locale }: { locale: Locale }) {
  const copy = sectionCopy.gallery;

  return (
    <SectionWrapper
      id="gallery"
      tone="ivoryDeep"
      eyebrow={resolveText(copy.eyebrow, locale)}
      title={resolveText(copy.title, locale)}
      subtitle={resolveText(copy.subtitle, locale)}
    >
      <DecorativeDivider className="mb-12 w-full justify-center" tone="muted" />

      <PhotoGallery photos={profile.photos} locale={locale} />

      <p className="mt-12 text-center text-sm text-muted italic">
        {resolveText(copy.note, locale)}
      </p>
    </SectionWrapper>
  );
}