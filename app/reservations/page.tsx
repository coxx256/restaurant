import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  Phone,
  Plus,
  Users,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import ReservationForm from "@/components/reservation-form";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { faqs, privateDining } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Bella Vista Restaurant in Kololo, Kampala. Dinner Tuesday to Sunday, private dining for up to 22 guests, and a terrace made for long evenings.",
};

type ReservationsPageProps = {
  searchParams: Promise<{
    date?: string | string[];
    time?: string | string[];
    guests?: string | string[];
  }>;
};

function single(value?: string | string[]) {
  return typeof value === "string" ? value : undefined;
}

const policies = [
  "We hold reserved tables for 15 minutes.",
  "Parties of nine or more are handled by our reservations team.",
  "Please share allergies and dietary needs at least 24 hours ahead.",
  "Smart casual — most guests dress for the occasion.",
];

export default function ReservationsPage({
  searchParams,
}: ReservationsPageProps) {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Reservations"
        title={
          <>
            Your table is{" "}
            <span className="italic text-gold">waiting.</span>
          </>
        }
        description="Dinner Tuesday to Sunday, from five o'clock. Tell us when you are coming and we will take care of the rest — the candles, the corner table, the occasion."
        image="/images/private-dining.jpg"
        imageAlt="A candlelit table set for dinner at Bella Vista"
        breadcrumb="Reservations"
        meta="Tables from 5:00pm · Closed Mondays"
      />

      {/* Booking form + practical details */}
      <section
        id="booking"
        className="paper scroll-mt-24 border-b border-ink/10 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:px-12">
          <Reveal>
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-[0_40px_90px_-70px_rgba(23,19,15,0.55)] sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <Eyebrow>Request a table</Eyebrow>
                  <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink">
                    Tell us about{" "}
                    <span className="italic text-ember">your evening.</span>
                  </h2>
                </div>
                <span className="hidden shrink-0 rounded-full border border-ink/10 px-3 py-1.5 text-[8.5px] uppercase tracking-[0.18em] text-ink/35 sm:block">
                  Confirmed by email
                </span>
              </div>

              <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-ink/50">
                A request is not a confirmation — our team will reply within the
                hour during opening times. For same-day tables, please call us.
              </p>

              <div className="mt-8">
                <Suspense
                  fallback={
                    <div
                      aria-label="Loading reservation form"
                      className="h-[610px] animate-pulse rounded-2xl border border-ink/10 bg-cream-200/50"
                    />
                  }
                >
                  <ReservationWithParams searchParams={searchParams} />
                </Suspense>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-[1.5rem] border border-ink/10 bg-cream/80 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-cream">
                    <Clock className="size-4" strokeWidth={1.4} />
                  </span>
                  <div>
                    <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                      Opening hours
                    </p>
                    <p className="mt-0.5 font-display text-lg italic text-ink/80">
                      Tuesday to Sunday
                    </p>
                  </div>
                </div>
                <dl className="mt-5 space-y-2 border-t border-ink/10 pt-4 text-[12.5px]">
                  {site.hours.map((entry) => (
                    <div
                      key={entry.day}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <dt className="text-ink/45">{entry.day}</dt>
                      <dd
                        className={
                          entry.closed
                            ? "text-ink/30"
                            : "font-medium text-ink/75"
                        }
                      >
                        {entry.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-[1.5rem] border border-ink/10 bg-cream/80 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-cream">
                    <Check className="size-4" strokeWidth={1.4} />
                  </span>
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Good to know
                  </p>
                </div>
                <ul className="mt-5 space-y-3 border-t border-ink/10 pt-4">
                  {policies.map((policy) => (
                    <li
                      key={policy}
                      className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ink/55"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1 shrink-0 rounded-full bg-ember/70"
                      />
                      {policy}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-[9px] uppercase tracking-[0.16em]">
                  <a
                    href={`tel:${site.reservationsPhoneHref}`}
                    className="inline-flex items-center gap-1.5 text-ink/50 transition-colors hover:text-ember"
                  >
                    <Phone className="size-3" />
                    {site.reservationsPhone}
                  </a>
                  <a
                    href={`mailto:${site.reservationsEmail}`}
                    className="inline-flex items-center gap-1.5 break-all text-ink/50 transition-colors hover:text-ember"
                  >
                    <Mail className="size-3" />
                    {site.reservationsEmail}
                  </a>
                </div>
              </div>

              <div className="relative isolate mt-auto overflow-hidden rounded-[1.5rem] bg-ink p-5 text-cream sm:p-6">
                <Image
                  src={privateDining.image}
                  alt={privateDining.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 32vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35"
                />
                <div className="relative">
                  <p className="text-[8.5px] uppercase tracking-[0.22em] text-gold">
                    Private dining
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-tight">
                    {privateDining.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[11.5px] leading-relaxed text-cream/55">
                    Up to 22 guests, a dedicated team and a menu built around
                    your occasion.
                  </p>
                  <ButtonLink
                    href={`tel:${site.reservationsPhoneHref}`}
                    variant="light"
                    size="sm"
                    className="mt-4"
                    icon={<ArrowUpRight className="size-3.5" />}
                  >
                    Enquire by phone
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Private events band */}
      <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full border border-cream/[0.06]"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <Reveal>
            <Eyebrow tone="gold">Celebrations &amp; private events</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.3rem,4.8vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream">
              The whole room,{" "}
              <span className="italic text-gold">just for you.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-[1.8] text-cream/55">
              Birthdays that run long, wedding lunches, company dinners and
              quiet proposals. The Acacia room seats 22; the garden terrace can
              be reserved for larger gatherings.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Users, label: "22 seats", note: "The Acacia room" },
                { icon: CalendarDays, label: "Full buy-out", note: "Up to 60 guests" },
                { icon: Check, label: "Set menus", note: "Four to seven courses" },
                { icon: Clock, label: "Lunch or dinner", note: "Seven days by arrangement" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl border border-cream/12 bg-cream/[0.035] p-4"
                >
                  <item.icon
                    className="mt-0.5 size-4 shrink-0 text-gold/80"
                    strokeWidth={1.4}
                  />
                  <div>
                    <p className="text-[12px] font-medium text-cream/80">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-cream/35">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={`mailto:${site.reservationsEmail}`}
                variant="gold"
                size="md"
                icon={<Mail className="size-4" />}
              >
                Plan an event
              </ButtonLink>
              <a
                href={`tel:${site.reservationsPhoneHref}`}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-cream/45 transition-colors hover:text-gold"
              >
                <Phone className="size-3.5" />
                {site.reservationsPhone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 size-full rounded-[2rem] border border-gold/25"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink-700">
                <Image
                  src="/images/guests.jpg"
                  alt="Guests sharing a long dinner around a candlelit table at Bella Vista"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-gold">
                    Private dining
                  </p>
                  <p className="mt-1 font-display text-xl italic text-cream/90">
                    Eighteen around one table
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Before you arrive"
              title={
                <>
                  A few things{" "}
                  <span className="italic text-ember">worth knowing.</span>
                </>
              }
              description="If your question is not here, our reservations team is always happy to help."
            />
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.17em]">
              <a
                href={`tel:${site.reservationsPhoneHref}`}
                className="inline-flex items-center gap-1.5 border-b border-ink/20 pb-1 text-ink/55 transition-colors hover:border-ember hover:text-ember"
              >
                <Phone className="size-3" />
                Call reservations
              </a>
              <a
                href={`mailto:${site.reservationsEmail}`}
                className="inline-flex items-center gap-1.5 border-b border-ink/20 pb-1 text-ink/55 transition-colors hover:border-ember hover:text-ember"
              >
                <Mail className="size-3" />
                Email us
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-ink/10">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-ink/10 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[1.2rem] font-medium leading-snug text-ink/85 transition-colors group-hover:text-ember sm:text-[1.3rem]">
                      {faq.question}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className="size-4 shrink-0 text-ink/35 transition-transform duration-300 group-open:rotate-45 group-hover:text-ember"
                    />
                  </summary>
                  <p className="mt-3 max-w-xl pr-8 text-[12.5px] leading-[1.8] text-ink/50">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

async function ReservationWithParams({
  searchParams,
}: ReservationsPageProps) {
  const params = await searchParams;
  const rawDate = single(params.date);
  const initialDate =
    rawDate && /^\d{4}-\d{2}-\d{2}$/.test(rawDate) ? rawDate : undefined;

  return (
    <ReservationForm
      initialDate={initialDate}
      initialTime={single(params.time)}
      initialGuests={single(params.guests)}
    />
  );
}
