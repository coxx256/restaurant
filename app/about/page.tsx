import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Flame,
  HeartHandshake,
  Leaf,
  Quote,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import PageCTA from "@/components/page-cta";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { press, timeline, values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Bella Vista Restaurant in Kololo, Kampala — founders Amara Nakato and Daniel Ssemakula, our kitchen philosophy, and ten years of long evenings.",
};

const valueIcons = {
  leaf: Leaf,
  flame: Flame,
  heart: HeartHandshake,
} as const;

export default function AboutPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Our story"
        title={
          <>
            A restaurant built around{" "}
            <span className="italic text-gold">a view.</span>
          </>
        }
        description="Bella Vista is a family-run dining room in Kololo, where Ugandan ingredients, charcoal fire and unhurried hospitality meet."
        image="/images/terrace.jpg"
        imageAlt="The leafy Bella Vista terrace in Kololo, Kampala"
        breadcrumb="About Us"
        meta="Est. 2016 · Kololo, Kampala · Family-run"
      />

      {/* Story */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The beginning"
                title={
                  <>
                    Thirty-two seats and a{" "}
                    <span className="italic text-ember">stubborn idea.</span>
                  </>
                }
              />
              <div className="mt-7 space-y-5 text-[14.5px] leading-[1.85] text-ink/60">
                <p>
                  In 2016, Amara Nakato and Daniel Ssemakula found an old house
                  on Acacia Avenue with a garden full of frangipani and a view
                  that stopped them both in their tracks. They signed the lease
                  that week.
                </p>
                <p>
                  The idea was simple: a restaurant that felt like the best
                  dinner party in Kampala, every night. Thirty-two seats. A
                  charcoal grill in the garden. A menu written around what the
                  market gave them that morning.
                </p>
                <p>
                  Ten years later, the room has grown, but the idea has not. Our
                  produce comes from smallholders in Wakiso and Mbale, our fish
                  from Lake Victoria, our coffee from the slopes of Mount Elgon.
                  Everything is cooked with fire, patience and a deep respect for
                  the ingredient.
                </p>
              </div>

              <blockquote className="mt-8 border-l border-ember/30 pl-5">
                <Quote className="size-6 text-ember/30" />
                <p className="mt-2 font-display text-[1.35rem] italic leading-[1.45] text-ink/75">
                  We never wanted to be the loudest restaurant in Kampala. Just
                  the one you think of when the evening matters.
                </p>
                <footer className="mt-3 text-[8.5px] uppercase tracking-[0.2em] text-ink/35">
                  Amara Nakato · Co-founder &amp; host
                </footer>
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/menu" variant="primary" size="md">
                  Explore the menu
                </ButtonLink>
                <ButtonLink href="/reservations" variant="outline" size="md">
                  Join us for dinner
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-5 hidden size-36 rounded-full border border-gold/30 sm:block"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-300">
                  <Image
                    src="/images/dining-room.jpg"
                    alt="The Bella Vista dining room with warm lighting and wooden tables"
                    fill
                    sizes="(max-width: 1024px) 92vw, 44vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[8px] uppercase tracking-[0.24em] text-cream/50">
                      The dining room
                    </p>
                    <p className="mt-1 font-display text-xl italic text-cream/90">
                      A house on Acacia Avenue
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-7 -left-4 hidden w-40 overflow-hidden rounded-2xl border-[6px] border-cream shadow-2xl sm:block lg:-left-8">
                  <Image
                    src="/images/bread.jpg"
                    alt="Freshly baked bread cooling at Bella Vista"
                    width={400}
                    height={400}
                    sizes="160px"
                    className="aspect-square object-cover"
                  />
                </div>

                <div className="absolute -right-3 bottom-20 rounded-2xl border border-ink/5 bg-cream/95 px-4 py-3 shadow-[0_20px_40px_-24px_rgba(23,19,15,0.55)] backdrop-blur sm:-right-6">
                  <p className="text-[8px] uppercase tracking-[0.22em] text-ink/40">
                    Family-run
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-medium text-ink">
                    since 2016
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-ink/10 pt-9 sm:mt-20 sm:grid-cols-4">
              {[
                { value: "10", label: "Years on Acacia Avenue" },
                { value: "32", label: "Seats in the main room" },
                { value: "3", label: "Farms we buy from weekly" },
                { value: "22", label: "Seats in the Acacia room" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-[2.2rem] font-medium leading-none tracking-tight text-ink sm:text-[2.6rem]">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 max-w-[10rem] text-[8.5px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Philosophy image band */}
      <section className="grain relative isolate flex min-h-[58vh] items-center overflow-hidden bg-ink py-20 text-cream">
        <Image
          src="/images/garden.jpg"
          alt="Bella Vista's garden dining room under leafy trees"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/62" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-ink/60"
        />
        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow tone="gold" align="center">
            Our philosophy
          </Eyebrow>
          <blockquote className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.13] tracking-[-0.015em] text-cream">
            &ldquo;Cook what the season gives you. Set a table people{" "}
            <span className="italic text-gold">don&apos;t want to leave.</span>
            &rdquo;
          </blockquote>
          <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-cream/40">
            Amara Nakato &amp; Daniel Ssemakula · Founders
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-cream/15 sm:inset-6 sm:rounded-[2rem]"
        />
      </section>

      {/* Values */}
      <section className="paper py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="What we believe"
              title={
                <>
                  Three things we{" "}
                  <span className="italic text-ember">hold close.</span>
                </>
              }
              description="They guide every market run, every plate that leaves the pass, and every evening we open the doors."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = valueIcons[value.icon];

              return (
                <Reveal
                  key={value.title}
                  delay={index * 80}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-cream p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember/25 hover:shadow-[0_28px_60px_-42px_rgba(23,19,15,0.3)]">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-ink text-cream transition-colors duration-500 group-hover:bg-ember">
                        <Icon className="size-5" strokeWidth={1.4} />
                      </span>
                      <span className="font-display text-lg italic text-ink/20">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-[1.6rem] font-medium tracking-[-0.01em] text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-[12.5px] leading-[1.8] text-ink/55">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="grain relative overflow-hidden bg-ink py-20 text-cream sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 size-[30rem] rounded-full bg-ember/[0.08] blur-3xl"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-4 size-full rounded-[2rem] border border-gold/25"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-300">
                <Image
                  src="/images/chef-portrait.jpg"
                  alt="Daniel Ssemakula, executive chef and co-founder of Bella Vista"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-gold">
                    Executive chef &amp; co-founder
                  </p>
                  <p className="mt-1 font-display text-2xl italic text-cream/90">
                    Daniel Ssemakula
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="gold">The kitchen</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.3rem,4.8vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream">
              Precision, warmth{" "}
              <span className="italic text-gold">and fire.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-[1.85] text-cream/55">
              <p>
                Daniel grew up in Fort Portal, trained in Nairobi and
                Copenhagen, and came home with a simple ambition: to cook
                Ugandan ingredients with the precision they deserve, without
                polishing away what makes them ours.
              </p>
              <p>
                He leads a kitchen of fourteen, starting each day at the market
                and ending it at the pass. His favourite thing to cook is
                whatever arrived that morning — and his least favourite question
                is what he would order.
              </p>
            </div>

            <blockquote className="mt-7 border-l border-gold/30 pl-5">
              <p className="font-display text-[1.35rem] italic leading-[1.5] text-cream/80">
                &ldquo;A great plate should tell you where it comes from without
                saying a word.&rdquo;
              </p>
              <footer className="mt-3 text-[8.5px] uppercase tracking-[0.2em] text-cream/35">
                Daniel Ssemakula
              </footer>
            </blockquote>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/12 bg-cream/[0.035] p-4">
                <p className="text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  Trained in
                </p>
                <p className="mt-1.5 text-[12px] text-cream/70">
                  Nairobi · Copenhagen · Kampala
                </p>
              </div>
              <div className="rounded-2xl border border-cream/12 bg-cream/[0.035] p-4">
                <p className="text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  At Bella Vista since
                </p>
                <p className="mt-1.5 text-[12px] text-cream/70">2016</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="A decade in six moments"
              title={
                <>
                  The story so{" "}
                  <span className="italic text-ember">far.</span>
                </>
              }
              description="From a 32-seat room with one grill to a Kampala institution — and still the same view."
            />
          </Reveal>

          <div className="mt-12">
            {timeline.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 50}>
                <article className="grid gap-3 border-t border-ink/10 py-7 sm:grid-cols-[110px_1fr] sm:gap-6 lg:grid-cols-[150px_0.8fr_1.2fr] lg:items-start">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[1.9rem] italic leading-none text-ember">
                      {entry.year}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-ember/30 lg:hidden"
                    />
                  </div>
                  <h3 className="font-display text-[1.35rem] font-medium leading-snug text-ink">
                    {entry.title}
                  </h3>
                  <p className="max-w-xl text-[12.5px] leading-[1.8] text-ink/50">
                    {entry.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-ink/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.18em] text-ink/35">
                The next chapter is still being written.
              </p>
              <ButtonLink href="/contact" variant="outline" size="sm">
                Say hello
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-y border-ink/10 bg-cream-200/70 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.24em] text-ember">
                  <Award className="size-3.5" />
                  Selected recognition
                </p>
                <p className="mt-2 font-display text-[1.8rem] leading-tight text-ink">
                  Best Fine Dining, Kampala Restaurant Week{" "}
                  <span className="text-ink/35">2024</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
                {press.map((name) => (
                  <span
                    key={name}
                    className="font-display text-[15px] tracking-wide text-ink/30"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="Come and see us"
        title={
          <>
            There is always{" "}
            <span className="italic text-gold">a seat for you.</span>
          </>
        }
        description="Whether it is a first visit or a hundredth, we will set the table, light the candles and keep the kitchen open a little longer."
        image="/images/room-evening.jpg"
        imageAlt="The Bella Vista dining room glowing in the evening"
        primaryLabel="Reserve a table"
        secondaryHref="/gallery"
        secondaryLabel="See the room"
      />

      <div className="bg-cream py-6">
        <p className="mx-auto max-w-7xl px-5 text-center text-[9px] uppercase tracking-[0.2em] text-ink/25 sm:px-8 lg:px-12">
          {site.address.line1} · {site.address.line2} · {site.address.country}
        </p>
      </div>
    </main>
  );
}
