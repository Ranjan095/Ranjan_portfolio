import { cn } from "@/lib/cn";

export interface DecorativeDividerProps {
  className?: string;
  /** Optional text placed between the two gold rules. */
  label?: string;
  tone?: "gold" | "muted" | "onBurgundy";
}

const tones = {
  gold: "bg-gold",
  muted: "bg-gold/45",
  onBurgundy: "bg-gold-soft",
} as const;

function Lozenge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-2.5 shrink-0", className)}
    >
      <path
        d="M12 0 24 12 12 24 0 12Z"
        fill="currentColor"
        className="text-gold"
      />
      <path
        d="M12 5 19 12 12 19 5 12Z"
        fill="currentColor"
        className="text-surface"
        opacity="0.9"
      />
    </svg>
  );
}

export function DecorativeDivider({
  className,
  label,
  tone = "gold",
}: DecorativeDividerProps) {
  const rule = cn("h-px flex-1", tones[tone]);

  if (label) {
    return (
      <div
        className={cn("flex items-center gap-4", className)}
        role="presentation"
      >
        <span className={rule} />
        <span className="eyebrow whitespace-nowrap">{label}</span>
        <span className={rule} />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-3", className)}
      role="presentation"
    >
      <span className={cn(rule, "max-w-24")} />
      <Lozenge />
      <span className={cn(rule, "max-w-24")} />
    </div>
  );
}