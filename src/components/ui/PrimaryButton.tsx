import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { buttonSizes, primaryButtonStyles, type ButtonSize } from "@/lib/styles";

export interface PrimaryButtonProps {
  children: ReactNode;
  /** Renders an anchor when provided, otherwise a button. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  size = "md",
  className,
  ariaLabel,
}: PrimaryButtonProps) {
  const classes = cn(primaryButtonStyles, buttonSizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}