import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  title: string;
  /** Small gold label above the title. */
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
  tone?: "ink" | "burgundy";
  /** Use on burgundy / dark backgrounds. */
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = "center",
  id,
  tone = "burgundy",
  onDark = false,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={onDark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-3xl sm:text-4xl",
          onDark ? "text-surface" : tone === "burgundy" ? "text-burgundy" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base",
            onDark ? "text-ivory/90" : "text-muted",
            isCentered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}