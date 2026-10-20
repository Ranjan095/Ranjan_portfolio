"use client";

import { useSyncExternalStore } from "react";

import { ageFromDate } from "@/lib/format";

export interface AgeValueProps {
  dateOfBirth: string;
  className?: string;
}

const subscribe = () => () => {};

/**
 * Age derived from the date of birth.
 *
 * The current date is only known at runtime, and computing it while
 * prerendering would produce a value that changes between renders. Reading it
 * through `useSyncExternalStore` keeps the page statically prerendered while
 * showing the age as soon as it hydrates.
 */
export function AgeValue({ dateOfBirth, className }: AgeValueProps) {
  const age = useSyncExternalStore(
    subscribe,
    () => ageFromDate(dateOfBirth) ?? null,
    () => null,
  );

  if (age === null) return null;

  return <span className={className}>{age}</span>;
}