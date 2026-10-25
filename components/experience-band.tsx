import Image from "next/image";
import { ButtonLink, Eyebrow } from "./ui";

const notes = [
  { label: "The terrace", detail: "Sunset, every evening" },
  { label: "The garden", detail: "Dinner under frangipani" },
  { label: "The Acacia room", detail: "Private, up to 22 guests" },
];

export default function ExperienceBand() {
  return (
    <section className="grain relative isolate flex min-h-[76vh] items-center overflow-hidden bg-ink py-24 text-cream sm:min-h-[82vh]">
      <Image
        src="/images/terrace.jpg"
        alt="The candlelit Bella Vista terrace surrounded by greenery"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-ink/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/45"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow tone="gold">The Bella Vista experience</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.025em] text-cream">
            Dinner is only
            <br />
            <span className="italic text-gold">half the view.</span>
          </h2>
          <p className="mt-6 max-w-md text-[14.5px] leading-[1.85] text-cream/60">
            Arrive while the light is still golden. Take a cocktail to the
            terrace, watch the city switch on below, then settle in for a long
            dinner. The evening belongs to you.
          </p>
          <div className="mt-9">
            <ButtonLink href="/reservations" variant="light" size="lg">
              Reserve an evening
            </ButtonLink>
          </div>
        </div>

        <div className="mt-20 grid gap-4 border-t border-cream/20 pt-7 sm:grid-cols-3 sm:gap-8">
          {notes.map((note) => (
            <div key={note.label}>
              <p className="text-[8.5px] uppercase tracking-[0.24em] text-gold/80">
                {note.label}
              </p>
              <p className="mt-1.5 font-display text-lg italic text-cream/75">
                {note.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-cream/15 sm:inset-6 sm:rounded-[2rem]"
      />
    </section>
  );
}
