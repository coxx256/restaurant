import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  Clock,
  Flame,
  Leaf,
  MapPin,
  Star,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import SignatureDishCard from "@/components/signature-dish-card";
import ExperienceBand from "@/components/experience-band";
import MenuPreview from "@/components/menu-preview";
import FeaturesGrid from "@/components/features-grid";
import GalleryPreview from "@/components/gallery-preview";
import TestimonialCard from "@/components/testimonial-card";
import QuickReservation from "@/components/quick-reservation";
import LocationSection from "@/components/location-section";
import { dietaryKey, signatureDishes } from "@/lib/menu";
import { homeGallery, press, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Bella Vista Restaurant — Fine Dining in Kampala",
  },
  description: site.description,
};

const marqueeWords = [
  "Lake Victoria perch",
  "Charcoal grill",
  "Garden herbs",
  "Mount Elgon coffee",
  "Slow evenings",
  "A view over Kololo",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.legalName,
  description: site.description,
  url: "https://bellavista.ug",
  image: "https://bellavista.ug/images/hero.jpg",
  telephone: site.phone,
  priceRange: site.priceRange,
  servesCuisine: ["East African", "Contemporary fine dining"],
  acceptsReservations: "https://bellavista.ug/reservations",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Kampala",
    addressRegion: "Central Region",
    addressCountry: "UG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0.3371,
    longitude: 32.5943,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:30",
      closes: "21:30",
    },
  ],
  sameAs: [
    site.socials.instagram,
    site.socials.facebook,
    site.socials.x,
  ],
};

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero.jpg"
          alt="A candlelit table set for dinner at Bella Vista in Kampala"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/55 to-ink/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/45"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 size-[30rem] rounded-full bg-ember/10 blur-3xl"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-8 pt-36 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="max-w-3xl">
            <Eyebrow tone="gold">Fine dining · Kololo, Kampala</Eyebrow>

            <h1 className="mt-6 font-display text-[clamp(3.9rem,10.5vw,8.4rem)] font-medium leading-[0.87] tracking-[-0.035em] text-cream">
              Bella{" "}
              <span className="italic text-gold">Vista</span>
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gold/50"
              />
              <p className="font-display text-[1.55rem] font-light italic leading-none tracking-wide text-cream/90 sm:text-[1.9rem]">
                A table with a view.
              </p>
            </div>

            <p className="mt-6 max-w-lg text-[14.5px] leading-[1.85] text-cream/60 sm:text-[15px]">
              Seasonal East African produce, charcoal-fired plates and a wine
              list worth lingering over — high above the green hills of Kololo.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/reservations" variant="primary" size="lg">
                Book a Table
              </ButtonLink>
              <ButtonLink href="/menu" variant="light" size="lg">
                View Menu
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-cream/15 pt-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                <span className="block text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  Find us
                </span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-cream/70 transition-colors group-hover:text-cream">
                  {site.address.line1}, {site.address.line2}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                <span className="block text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  Opening hours
                </span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-cream/70">
                  Tuesday – Sunday · dinner from 5pm
                </span>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Star className="mt-0.5 size-4 shrink-0 fill-gold text-gold" />
              <span>
                <span className="block text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  Guest rating
                </span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-cream/70">
                  4.9 / 5 · 840+ reviews
                </span>
              </span>
            </div>
          </div>

          <a
            href="#story"
            aria-label="Scroll to our story"
            className="absolute bottom-7 right-5 hidden items-center gap-2 text-[8.5px] uppercase tracking-[0.22em] text-cream/35 transition-colors hover:text-gold sm:right-8 sm:flex lg:right-12"
          >
            Scroll
            <ArrowDown className="size-3.5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-ink/10 bg-cream py-3.5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {marqueeWords.map((word) => (
                <span key={word} className="flex items-center gap-8">
                  <span className="whitespace-nowrap font-display text-[16px] italic tracking-wide text-ink/55 sm:text-[18px]">
                    {word}
                  </span>
                  <Flame className="size-3 shrink-0 text-ember/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <section id="story" className="scroll-mt-24 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-5 -top-5 hidden size-28 rounded-full border border-ember/20 sm:block"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-300">
                  <Image
                    src="/images/dining-room.jpg"
                    alt="The warm, softly lit Bella Vista dining room"
                    fill
                    sizes="(max-width: 1024px) 92vw, 43vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[8px] uppercase tracking-[0.26em] text-cream/50">
                      The dining room
                    </p>
                    <p className="mt-1 font-display text-xl italic text-cream/90">
                      Kololo, at dusk
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-7 -right-2 hidden w-40 overflow-hidden rounded-2xl border-[6px] border-cream shadow-2xl sm:block lg:-right-8">
                  <Image
                    src="/images/chef.jpg"
                    alt="Chef Daniel Ssemakula at the pass"
                    width={400}
                    height={480}
                    sizes="160px"
                    className="aspect-[4/5] object-cover"
                  />
                </div>

                <div className="absolute -left-3 bottom-20 hidden rounded-2xl border border-ink/5 bg-cream/95 px-4 py-3 shadow-[0_20px_40px_-24px_rgba(23,19,15,0.55)] backdrop-blur sm:block lg:-left-8">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-ink/40">
                    A decade of
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-medium text-ink">
                    evenings
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    A view worth{" "}
                    <span className="italic text-ember">dressing for.</span>
                  </>
                }
                titleClassName="max-w-xl"
              />

              <div className="mt-7 space-y-5 text-[14.5px] leading-[1.85] text-ink/60">
                <p>
                  Bella Vista began in 2016 with thirty-two seats, a charcoal
                  grill and a stubborn belief that Kampala deserved a table worth
                  dressing for. Founders Amara Nakato and Daniel Ssemakula built
                  the restaurant around the view — green hills, tin roofs, the
                  city switching on below.
                </p>
                <p>
                  A decade later, the kitchen still starts with the market:
                  tilapia from Lake Victoria, herbs from the garden, coffee from
                  the slopes of Mount Elgon. The menu changes with the season.
                  The welcome does not.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-cream-300">
                  <Image
                    src="/images/chef-portrait.jpg"
                    alt="Daniel Ssemakula, executive chef and co-founder"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-lg italic text-ink">
                    Daniel Ssemakula
                  </p>
                  <p className="text-[8.5px] uppercase tracking-[0.22em] text-ink/40">
                    Executive chef &amp; co-founder
                  </p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <ButtonLink
                    href="/about"
                    variant="outline"
                    size="sm"
                    withArrow
                  >
                    Discover Our Story
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-6 sm:hidden">
                <ButtonLink href="/about" variant="outline" size="sm">
                  Discover Our Story
                </ButtonLink>
              </div>

              <dl className="mt-9 grid grid-cols-2 gap-y-7 border-t border-ink/10 pt-7 sm:grid-cols-4">
                {[
                  { value: "2016", label: "Opened in Kololo" },
                  { value: "32", label: "Seats, inside and out" },
                  { value: "7", label: "Courses in the tasting menu" },
                  { value: "4.9", label: "Average guest rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-[2rem] font-medium leading-none tracking-tight text-ink">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 max-w-[9rem] text-[8.5px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="border-y border-ink/10 bg-cream-200/70 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="From the pass"
                title="Our Signature Dishes"
                description="The menu shifts with the season, but these six have earned a permanent place. Ask what is coming off the fire tonight."
                className="max-w-xl"
              />
              <ButtonLink href="/menu" variant="outline" size="sm">
                View Full Menu
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
            {signatureDishes.map((dish, index) => (
              <Reveal key={dish.name} delay={index * 70} className="h-full">
                <SignatureDishCard dish={dish} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ExperienceBand />

      {/* Menu preview */}
      <section
        id="menu-preview"
        className="grain relative scroll-mt-24 overflow-hidden bg-ink py-20 text-cream sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 top-16 size-[32rem] rounded-full border border-cream/[0.055]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 bottom-0 size-[30rem] rounded-full bg-ember/[0.07] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="The menu"
              title="Tonight at Bella Vista."
              description="Written each morning after the market run. Everything is cooked over charcoal, banana leaf or time."
              align="center"
              tone="dark"
            />
          </Reveal>

          <Reveal delay={80}>
            <MenuPreview />
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-cream/12 bg-cream/[0.035] p-6 sm:flex-row sm:items-center sm:p-7">
              <div>
                <p className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.24em] text-gold">
                  <Leaf className="size-3.5" />
                  Chef&apos;s tasting menu
                </p>
                <p className="mt-2 font-display text-2xl italic text-cream/90">
                  Seven courses, chosen for your table.
                </p>
                <p className="mt-2 max-w-lg text-[11.5px] leading-relaxed text-cream/40">
                  Shaped by the morning&apos;s market and served at a relaxed
                  pace. Available for the whole table, Tuesday to Sunday.
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="font-display text-[1.8rem] leading-none text-gold">
                  UGX 185,000
                </p>
                <p className="mt-1.5 text-[8.5px] uppercase tracking-[0.18em] text-cream/35">
                  Per person · wine pairing UGX 95,000
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col items-center gap-7 border-t border-cream/10 pt-8 sm:flex-row sm:justify-between">
            <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.15em] text-cream/35">
              {Object.entries(dietaryKey).map(([tag, label]) => (
                <span key={tag}>
                  {tag} · {label}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/menu" variant="light" size="sm">
                View Full Menu
              </ButtonLink>
              <ButtonLink href="/reservations" variant="gold" size="sm">
                Book a table
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="paper py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Why Bella Vista"
              title={
                <>
                  The details that make{" "}
                  <span className="italic text-ember">an evening.</span>
                </>
              }
              description="Fine dining should feel effortless. Behind the scenes, a great deal of care goes into making it that way."
              align="center"
              descriptionClassName="max-w-2xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">
              <FeaturesGrid />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-24 border-y border-ink/10 bg-cream-200/70 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="The gallery"
                title="Low light, long tables, open fire."
                description="A look inside the room, the kitchen and the evenings that unfold between them."
                className="max-w-xl"
              />
              <ButtonLink href="/gallery" variant="outline" size="sm">
                Open the gallery
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <GalleryPreview images={homeGallery} />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Kind words"
              title={
                <>
                  Loved in Kampala,{" "}
                  <span className="italic text-ember">and beyond.</span>
                </>
              }
              description="The best measure of a restaurant is the people who keep coming back."
              align="center"
            />
          </Reveal>

          <Reveal>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9.5px] uppercase tracking-[0.18em] text-ink/40">
              <span className="flex items-center gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3 fill-ember" />
                ))}
              </span>
              <span>4.9 out of 5</span>
              <span className="size-1 rounded-full bg-ink/20" aria-hidden="true" />
              <span>840+ verified reviews</span>
              <span className="size-1 rounded-full bg-ink/20" aria-hidden="true" />
              <span>Google · TripAdvisor</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 70}
                className="h-full"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  featured={index === 0}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-ink/10 pt-8 sm:gap-x-12">
              {press.map((name) => (
                <span
                  key={name}
                  className="font-display text-[15px] tracking-wide text-ink/30 transition-colors hover:text-ink/60 sm:text-[16px]"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reservation CTA */}
      <section
        id="reserve"
        className="grain relative scroll-mt-24 overflow-hidden bg-ink py-20 text-cream sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-ember/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full border border-cream/[0.07]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Reservations"
              tone="dark"
              title={
                <>
                  Reserve your{" "}
                  <span className="italic text-gold">table.</span>
                </>
              }
              description="Book online up to sixty days ahead. We keep a handful of tables for walk-ins each night — the bar is always a good idea."
            />

            <div className="mt-9 max-w-md">
              <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/35">
                <Clock className="size-3.5" />
                Opening hours
              </div>
              <dl className="mt-4 space-y-0 text-[13px]">
                {site.hours.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex items-baseline justify-between gap-4 border-b border-cream/10 py-2.5"
                  >
                    <dt className="text-cream/45">{entry.day}</dt>
                    <dd
                      className={
                        entry.closed ? "text-cream/30" : "text-cream/80"
                      }
                    >
                      {entry.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 rounded-2xl border border-cream/12 bg-cream/[0.035] p-5">
              <p className="text-[8.5px] uppercase tracking-[0.24em] text-gold/80">
                A note on parties
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-cream/45">
                Tables are held for 15 minutes. For parties of nine or more, or
                for the private Acacia room, call{" "}
                <a
                  href={`tel:${site.reservationsPhoneHref}`}
                  className="text-cream/80 transition-colors hover:text-gold"
                >
                  {site.reservationsPhone}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[1.75rem] bg-cream p-6 text-ink shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)] sm:p-8 lg:p-10">
              <div className="mb-7 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[8.5px] uppercase tracking-[0.24em] text-ember">
                    Find your evening
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.9rem] font-medium tracking-tight sm:text-[2.2rem]">
                    Choose a date
                  </h3>
                </div>
                <span className="text-[8.5px] uppercase tracking-[0.2em] text-ink/35">
                  ~2.5 hours
                </span>
              </div>
              <QuickReservation />
              <p className="mt-5 text-center text-[10px] leading-relaxed text-ink/40">
                You&apos;ll be taken to our reservations page to complete your
                booking.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <LocationSection />
    </main>
  );
}
