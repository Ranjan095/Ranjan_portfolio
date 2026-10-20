import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface DetailCardItem {
  label: string;
  value: ReactNode;
}

export interface DetailCardProps {
  title: string;
  /** Optional Lucide icon rendered in a gold medallion. */
  icon?: LucideIcon;
  description?: string;
  /** Label/value pairs rendered as a definition list. */
  items?: readonly DetailCardItem[];
  children?: ReactNode;
  className?: string;
  tone?: "surface" | "ivory" | "burgundy";
}

const tones = {
  surface: "bg-surface",
  ivory: "bg-ivory",
  burgundy: "border-gold/40 bg-burgundy-deep/40 text-ivory",
} as const;

export function DetailCard({
  title,
  icon: Icon,
  description,
  items,
  children,
  className,
  tone = "surface",
}: DetailCardProps) {
  const isDark = tone === "burgundy";

  return (
    <article
      className={cn(
        "frame-double rounded-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-7",
        tones[tone],
        className,
      )}
    >
      {Icon ? (
        <span
          className={cn(
            "mb-5 inline-flex size-11 items-center justify-center rounded-pill border border-gold/50 bg-gold/10",
            isDark ? "text-gold-soft" : "text-burgundy",
          )}
          aria-hidden="true"
        >
          <Icon className="size-5" strokeWidth={1.5} />
        </span>
      ) : null}

      <h3 className={cn("text-xl", isDark ? "text-surface" : "text-burgundy")}>
        {title}
      </h3>

      {description ? (
        <p
          className={cn(
            "mt-3 text-[0.95rem] leading-relaxed",
            isDark ? "text-ivory/90" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}

      {items?.length ? (
        <dl className="mt-5 space-y-3 border-t border-gold/30 pt-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <dt className="text-xs font-semibold tracking-[0.14em] text-gold-deep uppercase">
                {item.label}
              </dt>
              <dd
                className={cn(
                  "text-right text-[0.95rem]",
                  isDark ? "text-ivory" : "text-ink",
                )}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {children}
    </article>
  );
}