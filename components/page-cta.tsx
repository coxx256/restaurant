import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow, ButtonLink } from "./ui";
import { site } from "@/lib/site";

type PageCTAProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function PageCTA({
  eyebrow = "Reservations",
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/reservations",
  primaryLabel = "Reserve a table",
  secondaryHref,
  secondaryLabel,
}: PageCTAProps) {
  return (
    <section className="grain relative isolate flex min-h-[56vh] items-center overflow-hidden bg-ink py-20 text-cream sm:py-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/68"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/55"
      />

      <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <Eyebrow tone="gold" align="center">
          {eyebrow}
        </Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.5rem,5.8vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.025em] text-cream">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[14px] leading-[1.8] text-cream/60 sm:text-[15px]">
          {description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel && (
            <ButtonLink href={secondaryHref} variant="light" size="lg">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>

        <p className="mt-7 text-[9px] uppercase tracking-[0.2em] text-cream/35">
          Or call {site.reservationsPhone} · Tuesday to Sunday
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-cream/15 sm:inset-6 sm:rounded-[2rem]"
      />
    </section>
  );
}
