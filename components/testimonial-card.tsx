import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-500 sm:p-7",
        featured
          ? "border-ink bg-ink text-cream"
          : "border-ink/10 bg-cream text-ink hover:-translate-y-1 hover:border-ember/25 hover:shadow-[0_28px_60px_-40px_rgba(23,19,15,0.35)]",
      )}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-cream/10"
        />
      )}

      <div className="flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-0.5"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(
                "size-3.5",
                index < testimonial.rating
                  ? featured
                    ? "fill-gold text-gold"
                    : "fill-ember text-ember"
                  : featured
                    ? "text-cream/15"
                    : "text-ink/15",
              )}
            />
          ))}
        </div>
        <Quote
          className={cn(
            "size-7 shrink-0",
            featured ? "text-gold/45" : "text-ember/20",
          )}
        />
      </div>

      <blockquote
        className={cn(
          "mt-5 flex-1 font-display text-[1.35rem] font-medium leading-[1.38] tracking-[-0.005em]",
          featured ? "text-cream/90" : "text-ink/85",
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div
        className={cn(
          "mt-6 flex items-center gap-3 border-t pt-5",
          featured ? "border-cream/12" : "border-ink/10",
        )}
      >
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full font-display text-sm font-semibold",
            featured
              ? "bg-gold/15 text-gold"
              : "bg-ink/[0.055] text-ink/70",
          )}
        >
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-[12px] font-medium",
              featured ? "text-cream" : "text-ink",
            )}
          >
            {testimonial.name}
          </p>
          <p
            className={cn(
              "mt-0.5 truncate text-[8.5px] uppercase tracking-[0.16em]",
              featured ? "text-cream/40" : "text-ink/40",
            )}
          >
            {testimonial.location}
          </p>
        </div>
        <span
          className={cn(
            "ml-auto hidden text-[8.5px] uppercase tracking-[0.15em] sm:block",
            featured ? "text-cream/30" : "text-ink/30",
          )}
        >
          Verified
        </span>
      </div>
    </article>
  );
}
