import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";
import {
  buttonSizes,
  outlineButtonStyles,
  type ButtonSize,
} from "@/lib/styles";

export interface OutlineButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
}

export function OutlineButton({
  children,
  href,
  onClick,
  type = "button",
  size = "md",
  className,
  ariaLabel,
}: OutlineButtonProps) {
  const classes = cn(outlineButtonStyles, buttonSizes[size], className);

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