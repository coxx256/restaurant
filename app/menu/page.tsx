import type { Metadata } from "next";
import Image from "next/image";
import { ChefHat, Leaf, Sparkles, Wine } from "lucide-react";
import PageHero from "@/components/page-hero";
import MenuCategoryNav from "@/components/menu-category-nav";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading, Tag } from "@/components/ui";
import PageCTA from "@/components/page-cta";
import {
  dietaryKey,
  menuCategories,
  tastingMenu,
} from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the seasonal menu at Bella Vista Restaurant in Kampala — East African starters, soups and salads, mains, seafood, charcoal-grilled specialties, desserts and drinks.",
};

const notes = [
  {
    icon: Leaf,
    title: "Market-led",
    copy: "The menu is written each morning around what arrives from Wakiso, Mbale and the lake.",
  },
  {
    icon: ChefHat,
    title: "Cooked over fire",
    copy: "Charcoal, banana leaf and time. Our grill is the heart of the kitchen.",
  },
  {
    icon: Sparkles,
    title: "Happy to adapt",
    copy: "Tell us about allergies or dietary needs when you book and we will make a plan.",
  },
];

export default function MenuPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Food & drink"
        title={
          <>
            A menu shaped by{" "}
            <span className="italic text-gold">the market.</span>
          </>
        }
        description="East African ingredients, cooked with fire and a light touch. The list changes with the season — these are the dishes our guests ask for most."
        image="/images/pasta-2.jpg"
        imageAlt="Fresh pasta being finished with herbs and parmesan"
        breadcrumb="Menu"
        meta="Tuesday – Sunday · Lunch on Sunday · Dinner nightly"
      />

      <MenuCategoryNav categories={menuCategories} />

      <section className="paper py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The menu"
                title={
                  <>
                    A menu in{" "}
                    <span className="italic text-ember">motion.</span>
                  </>
                }
                description="We cook what is good right now. Some plates stay all year; others appear for a few weeks when the tomatoes are sweet or the mushrooms are plentiful."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6">
                <p className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.24em] text-ember">
                  <ChefHat className="size-3.5" />
                  Chef&apos;s note
                </p>
                <p className="mt-3 font-display text-[1.4rem] italic leading-snug text-ink/80">
                  &ldquo;The best dish on the menu is usually the one the market
                  gave us that morning.&rdquo;
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-ink/35">
                  Daniel Ssemakula · Executive chef
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 border-t border-ink/10 pt-7 sm:grid-cols-3">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <div key={note.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-ink text-cream">
                    <Icon className="size-3.5" strokeWidth={1.4} />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium text-ink/75">
                      {note.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-ink/45">
                      {note.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.15em] text-ink/40">
            <span className="text-[8.5px] font-semibold tracking-[0.2em] text-ink/30">
              Dietary key
            </span>
            {Object.entries(dietaryKey).map(([tag, label]) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="rounded-full border border-ink/15 px-1.5 py-0.5 text-[8px] text-ink/55">
                  {tag}
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div>
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-title`}
            className="scroll-mt-36 border-b border-ink/10 py-14 sm:py-16 lg:py-20"
          >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
                <Reveal>
                  <div className="lg:sticky lg:top-40">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm italic text-ember">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-ember/35"
                      />
                      <span className="text-[8.5px] uppercase tracking-[0.22em] text-ink/35">
                        {category.note}
                      </span>
                    </div>

                    <h2
                      id={`${category.id}-title`}
                      className="mt-4 font-display text-[clamp(2.1rem,3.6vw,3rem)] font-medium leading-none tracking-[-0.02em] text-ink"
                    >
                      {category.label}
                    </h2>
                    <p className="mt-4 max-w-sm text-[12.5px] leading-[1.8] text-ink/50">
                      {category.description}
                    </p>

                    <div className="relative mt-7 hidden aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-cream-300 sm:block">
                      <Image
                        src={category.image}
                        alt={category.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 24vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                      />
                    </div>
                  </div>
                </Reveal>

                <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2">
                  {category.items.map((item, itemIndex) => (
                    <Reveal
                      key={item.name}
                      delay={itemIndex * 60}
                      className="h-full"
                    >
                      <article className="group flex h-full flex-col">
                        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] bg-cream-300">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                          />
                          {item.signature && (
                            <span className="absolute left-3 top-3 rounded-full bg-cream/92 px-2.5 py-1 text-[7.5px] font-semibold uppercase tracking-[0.16em] text-ember shadow-sm backdrop-blur">
                              Signature
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="max-w-[75%] font-display text-[1.35rem] font-medium leading-[1.18] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-ember">
                              {item.name}
                            </h3>
                            <span className="mt-1 shrink-0 text-[10.5px] font-medium tabular-nums text-ember">
                              {item.price}
                            </span>
                          </div>

                          <p className="mt-2 flex-1 text-[11.5px] leading-[1.7] text-ink/50">
                            {item.description}
                          </p>

                          {item.tags && item.tags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        id="tasting"
        className="grain relative scroll-mt-24 overflow-hidden bg-ink py-20 text-cream sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-12 size-[28rem] rounded-full border border-cream/[0.06]"
        />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:px-12">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-cream-300 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/chef.jpg"
                alt="Chef Daniel Ssemakula finishing a tasting-menu course"
                fill
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[8px] uppercase tracking-[0.24em] text-gold">
                  The chef&apos;s table
                </p>
                <p className="mt-1 font-display text-xl italic text-cream/90">
                  Seven courses, one evening.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="gold">Chef&apos;s tasting menu</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.3rem,4.8vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-cream">
              Let the kitchen{" "}
              <span className="italic text-gold">decide.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[14px] leading-[1.85] text-cream/55">
              {tastingMenu.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/12 bg-cream/[0.035] p-5">
                <p className="text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  Menu only
                </p>
                <p className="mt-2 font-display text-2xl text-gold">
                  {tastingMenu.price}
                </p>
                <p className="mt-1 text-[10px] text-cream/35">per person</p>
              </div>
              <div className="rounded-2xl border border-cream/12 bg-cream/[0.035] p-5">
                <p className="flex items-center gap-1.5 text-[8px] uppercase tracking-[0.22em] text-cream/35">
                  <Wine className="size-3" />
                  With wine pairing
                </p>
                <p className="mt-2 font-display text-2xl text-gold">
                  +{tastingMenu.pairing}
                </p>
                <p className="mt-1 text-[10px] text-cream/35">per person</p>
              </div>
            </div>

            <ul className="mt-7 grid gap-2.5 text-[11.5px] text-cream/45 sm:grid-cols-2">
              {[
                "Seven courses, chosen daily",
                "Vegetarian menu available",
                "Whole table only",
                "Please allow 2.5 hours",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-gold/70" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/reservations" variant="primary" size="md">
                Reserve the tasting menu
              </ButtonLink>
              <ButtonLink href="/contact" variant="light" size="md">
                Ask us a question
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="A seat at the table"
        title={
          <>
            Come hungry.{" "}
            <span className="italic text-gold">Stay late.</span>
          </>
        }
        description="The dining room is open Tuesday to Sunday, with lunch on Sundays. We would love to cook for you."
        image="/images/dining-detail.jpg"
        imageAlt="An intimate corner table at Bella Vista"
        primaryLabel="Reserve a table"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </main>
  );
}
