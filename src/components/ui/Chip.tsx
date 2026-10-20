import { cn } from "@/lib/cn";

export interface ChipProps {
  children: string;
  className?: string;
  /** `dark` is for burgundy / dark surfaces. */
  tone?: "light" | "dark";
}

const chipTones = {
  light: "border-gold/45 bg-gold/10 text-ink",
  dark: "border-gold/40 bg-burgundy-deep/50 text-ivory",
} as const;

/** Small pill used for interests, values and highlights. */
export function Chip({ children, className, tone = "light" }: ChipProps) {
  return (
    <li
      className={cn(
        "rounded-pill border px-4 py-1.5 text-sm",
        chipTones[tone],
        className,
      )}
    >
      {children}
    </li>
  );
}

export interface ChipListProps {
  items: readonly string[];
  className?: string;
  /** Accessible name for the list, e.g. "Hobbies and interests". */
  label?: string;
  tone?: "light" | "dark";
}

export function ChipList({ items, className, label, tone = "light" }: ChipListProps) {
  if (!items.length) return null;

  return (
    <ul
      aria-label={label}
      className={cn("flex flex-wrap justify-center gap-2.5", className)}
    >
      {items.map((item) => (
        <Chip key={item} tone={tone}>
          {item}
        </Chip>
      ))}
    </ul>
  );
}