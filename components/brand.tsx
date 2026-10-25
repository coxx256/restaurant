import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandProps = {
  tone?: "light" | "dark";
  className?: string;
  href?: string;
  compact?: boolean;
};

export default function Brand({
  tone = "dark",
  className,
  href = "/",
  compact = false,
}: BrandProps) {
  const light = tone === "light";

  return (
    <Link
      href={href}
      aria-label="Bella Vista Restaurant — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid shrink-0 place-items-center rounded-full border transition-colors duration-300",
          compact ? "size-9" : "size-10 sm:size-11",
          light
            ? "border-cream/25 text-cream group-hover:border-gold/70"
            : "border-ink/15 text-ink group-hover:border-ember/60",
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className={compact ? "size-5" : "size-6"}
        >
          <path
            d="M10 29V19.5a10 10 0 0 1 20 0V29"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <circle
            cx="20"
            cy="18.5"
            r="3.6"
            className={light ? "fill-gold/90" : "fill-ember"}
          />
          <path
            d="M6.5 29.5c3.3-4.2 5.6-4.2 8.5 0 2.6-3.1 4.7-3.1 7 0 2.2-2.9 4.2-2.9 6.4 0 1.6-2.2 3.1-2.4 4.6-.6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
          <path
            d="M7 32.5h26"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </span>

      <span className="leading-none">
        <span
          className={cn(
            "block font-display font-semibold tracking-[-0.01em]",
            compact ? "text-[21px]" : "text-[23px] sm:text-[25px]",
            light ? "text-cream" : "text-ink",
          )}
        >
          Bella{" "}
          <span
            className={cn(
              "italic",
              light ? "text-gold" : "text-ember",
            )}
          >
            Vista
          </span>
        </span>
        <span
          className={cn(
            "mt-[5px] block text-[8px] font-medium uppercase tracking-[0.32em]",
            light ? "text-cream/50" : "text-ink/45",
          )}
        >
          Kampala · Fine Dining
        </span>
      </span>
    </Link>
  );
}
