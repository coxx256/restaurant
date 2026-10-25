import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "./ui";
import { site } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
  meta?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
  meta,
}: PageHeroProps) {
  return (
    <section className="grain relative isolate flex min-h-[58vh] items-end overflow-hidden bg-ink text-cream sm:min-h-[64vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/30"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-18 lg:px-12 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] text-cream/45">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-gold"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3" />
            </li>
            <li aria-current="page" className="text-cream/75">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <Eyebrow tone="gold" className="mt-7">
          {eyebrow}
        </Eyebrow>

        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.9rem,7.2vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.025em] text-cream">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-[14.5px] leading-[1.8] text-cream/60 sm:text-[15px]">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.2em] text-cream/35">
          <span>{meta ?? `${site.address.line2} · ${site.address.country}`}</span>
          <span className="size-1 rounded-full bg-gold/60" aria-hidden="true" />
          <span>{site.phone}</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent"
      />
    </section>
  );
}
