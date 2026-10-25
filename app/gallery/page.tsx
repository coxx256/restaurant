import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import PageCTA from "@/components/page-cta";
import GalleryMasonry from "@/components/gallery-masonry";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { InstagramIcon } from "@/components/social-icons";
import { galleryImages } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Step inside Bella Vista — the dining room, the terrace, the kitchen at seven o'clock, and the plates that leave the pass. A photographic look at long evenings in Kololo, Kampala.",
};

const chapters = [
  { label: "The room", note: "Low light, linen, frangipani" },
  { label: "The kitchen", note: "Fire, patience, precision" },
  { label: "The evenings", note: "Tables that run late" },
];

export default function GalleryPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A room best understood{" "}
            <span className="italic text-gold">in person.</span>
          </>
        }
        description="Candlelight on the terrace, the quiet theatre of the pass, and the last table still laughing at half past ten. A few of our favourite moments."
        image="/images/room-evening.jpg"
        imageAlt="The Bella Vista dining room glowing with candlelight in the evening"
        breadcrumb="Gallery"
        meta={`${galleryImages.length} moments · Kololo, Kampala`}
      />

      {/* Intro + grid */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <SectionHeading
                eyebrow="Inside Bella Vista"
                title={
                  <>
                    Photographs from{" "}
                    <span className="italic text-ember">the evening.</span>
                  </>
                }
                description="Nothing staged, nothing borrowed. Every image here was made in the restaurant, between service and the small hours."
              />
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-5 lg:gap-9">
                {chapters.map((chapter) => (
                  <div key={chapter.label}>
                    <dt className="font-display text-[1.15rem] font-medium text-ink">
                      {chapter.label}
                    </dt>
                    <dd className="mt-1 max-w-[8.5rem] text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink/35">
                      {chapter.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="mt-12 sm:mt-14">
              <GalleryMasonry images={galleryImages} />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-ink/10 pt-7 sm:flex-row sm:items-center">
              <p className="max-w-md text-[12.5px] leading-relaxed text-ink/45">
                Tag us in your evening —{" "}
                <span className="text-ink/70">@bellavistakampala</span> — and we
                may set a place for your photograph here.
              </p>
              <ButtonLink
                href={site.socials.instagram}
                variant="outline"
                size="sm"
                icon={<InstagramIcon className="size-3.5" />}
              >
                Follow on Instagram
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Press quote band */}
      <section className="grain relative isolate overflow-hidden bg-ink py-16 text-cream sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 size-[26rem] -translate-y-1/2 rounded-full bg-ember/[0.09] blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <Eyebrow tone="gold" align="center">
            The room, described
          </Eyebrow>
          <blockquote className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.16] tracking-[-0.015em] text-cream">
            &ldquo;Low light, a garden full of frangipani, and the feeling that
            the evening has{" "}
            <span className="italic text-gold">nowhere else to be.</span>&rdquo;
          </blockquote>
          <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-cream/35">
            The EastAfrican · Dining Guide
          </p>
        </div>
      </section>

      <PageCTA
        eyebrow="See it for yourself"
        title={
          <>
            The photographs stop{" "}
            <span className="italic text-gold">at the door.</span>
          </>
        }
        description="Book a table on the terrace, arrive as the light goes gold, and stay until the kitchen finally turns the music down."
        image="/images/terrace.jpg"
        imageAlt="The Bella Vista terrace surrounded by greenery at golden hour"
        primaryLabel="Reserve a table"
        secondaryHref="/menu"
        secondaryLabel="View the menu"
      />
    </main>
  );
}
