import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

const widths = {
  default: "max-w-5xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export type ContainerWidth = keyof typeof widths;

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  width?: ContainerWidth;
  as?: ElementType;
}

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-5 sm:px-8", widths[width], className)}
    >
      {children}
    </Tag>
  );
}