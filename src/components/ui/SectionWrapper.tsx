import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { sectionTones, type SectionTone } from "@/lib/styles";

export interface SectionWrapperProps {
  id?: string;
  children?: ReactNode;
  /** Renders a `SectionHeading` above the children. */
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  width?: "default" | "narrow" | "wide";
  className?: string;
  contentClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  title,
  eyebrow,
  subtitle,
  align = "center",
  tone = "ivory",
  width = "default",
  className,
  contentClassName,
}: SectionWrapperProps) {
  const isBurgundy = tone === "burgundy";

  return (
    <section
      id={id}
      aria-labelledby={title && id ? `${id}-title` : undefined}
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        sectionTones[tone],
        isBurgundy && "paper-grain",
        className,
      )}
    >
      <Container width={width}>
        {title ? (
          <SectionHeading
            title={title}
            eyebrow={eyebrow}
            subtitle={subtitle}
            align={align}
            id={id ? `${id}-title` : undefined}
            onDark={isBurgundy}
            className="mb-10 sm:mb-12"
          />
        ) : null}
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  );
}