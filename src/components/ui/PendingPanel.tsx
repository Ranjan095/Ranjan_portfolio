import { DecorativeDivider } from "@/components/ui/DecorativeDivider";
import { pendingCopy } from "@/data/sectionCopy";
import { resolveText } from "@/lib/i18n";
import type { Locale, LocalizedText } from "@/types/profile";

export interface PendingPanelProps {
  message: LocalizedText;
  locale: Locale;
  tone?: "light" | "dark";
}

/**
 * Honest empty state: the section exists and stays reachable, but its details
 * have not been added yet. Nothing is invented — as soon as real content is
 * added to `src/data/profile.ts` this panel stops rendering automatically.
 */
export function PendingPanel({
  message,
  locale,
  tone = "light",
}: PendingPanelProps) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto max-w-2xl text-center">
      <DecorativeDivider
        className="mb-7 w-full justify-center"
        tone={isDark ? "onBurgundy" : "muted"}
      />
      <p
        className={
          isDark
            ? "text-lg leading-relaxed text-ivory/90"
            : "text-lg leading-relaxed text-muted"
        }
      >
        <span className={isDark ? "eyebrow-light mr-3" : "eyebrow mr-3"}>
          {resolveText(pendingCopy.label, locale)}
        </span>
        {resolveText(message, locale)}
      </p>
    </div>
  );
}
