import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main
      id="main"
      className="grain relative isolate flex min-h-[78vh] flex-1 items-center overflow-hidden bg-ink text-cream"
    >
      <Image
        src="/images/room-evening.jpg"
        alt="The Bella Vista dining room in the evening"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/82" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/70"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <p className="font-display text-[clamp(5rem,16vw,11rem)] font-medium leading-[0.75] tracking-[-0.05em] text-cream/[0.09]">
          404
        </p>
        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
          Page not on the menu
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.025em] text-cream">
          This table seems to have{" "}
          <span className="italic text-gold">moved.</span>
        </h1>
        <p className="mt-5 max-w-md text-[14px] leading-[1.8] text-cream/55">
          The page you were looking for is not here — but the kitchen is still
          open, the candles are lit, and we have kept a seat for you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/" variant="gold" size="lg">
            Back to the beginning
          </ButtonLink>
          <ButtonLink href="/reservations" variant="light" size="lg">
            Reserve a table
          </ButtonLink>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-cream/10 pt-6 text-[9.5px] uppercase tracking-[0.18em] text-cream/40">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              {link.label}
              <ArrowUpRight className="size-3" />
            </Link>
          ))}
        </div>

        <a
          href={`tel:${site.reservationsPhoneHref}`}
          className="mt-6 inline-flex items-center gap-2 text-[9.5px] uppercase tracking-[0.18em] text-cream/35 transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-3" />
          Or call us on {site.reservationsPhone}
        </a>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-cream/12 sm:inset-6 sm:rounded-[2rem]"
      />
    </main>
  );
}
