import type { Metadata } from "next";
import {
  ArrowUpRight,
  Car,
  Clock,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import PageCTA from "@/components/page-cta";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bella Vista Restaurant on Acacia Avenue, Kololo, Kampala. Call, email, find directions, or send a message to our team.",
};

const socials = [
  {
    href: site.socials.instagram,
    label: "Instagram",
    handle: "@bellavistakampala",
    Icon: InstagramIcon,
  },
  {
    href: site.socials.facebook,
    label: "Facebook",
    handle: "Bella Vista Kampala",
    Icon: FacebookIcon,
  },
  {
    href: site.socials.x,
    label: "X",
    handle: "@bellavista_ug",
    Icon: XIcon,
  },
];

const contactCards = [
  {
    icon: Phone,
    label: "Reservations",
    value: site.reservationsPhone,
    note: "Tuesday to Sunday · 10am – 9pm",
    href: `tel:${site.reservationsPhoneHref}`,
    external: false,
  },
  {
    icon: Phone,
    label: "The restaurant",
    value: site.phone,
    note: "During service hours",
    href: `tel:${site.phoneHref}`,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    note: "We reply within one working day",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Find us",
    value: site.address.line1,
    note: `${site.address.line2}, ${site.address.country}`,
    href: site.mapUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Come up the hill.{" "}
            <span className="italic text-gold">Stay a while.</span>
          </>
        }
        description="Questions about a table, a celebration or a bottle from the cellar? Call us, write to us, or simply tell us what you have in mind."
        image="/images/garden.jpg"
        imageAlt="The leafy garden setting at Bella Vista in Kololo, Kampala"
        breadcrumb="Contact"
        meta="Plot 8, Acacia Avenue · Kololo · Kampala"
      />

      {/* Contact cards */}
      <section className="border-b border-ink/10 bg-cream-200/60 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 60}>
                <a
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-[1.4rem] border border-ink/10 bg-cream p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ember/25 hover:shadow-[0_26px_55px_-42px_rgba(23,19,15,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-full bg-ink text-cream transition-colors duration-500 group-hover:bg-ember">
                      <card.icon className="size-4" strokeWidth={1.4} />
                    </span>
                    <ArrowUpRight className="size-3.5 text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                  </div>
                  <p className="mt-5 text-[8.5px] uppercase tracking-[0.22em] text-ink/35">
                    {card.label}
                  </p>
                  <p className="mt-1.5 break-words text-[13.5px] font-medium text-ink/80 transition-colors group-hover:text-ember">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-ink/40">
                    {card.note}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="paper py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-12">
          <Reveal>
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-[0_40px_90px_-70px_rgba(23,19,15,0.55)] sm:p-8 lg:p-10">
              <Eyebrow>Write to us</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink">
                Tell us what you{" "}
                <span className="italic text-ember">have in mind.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-ink/50">
                For table bookings, the reservation form is the quickest route.
                For everything else — events, press, feedback or a note for the
                kitchen — this is the place.
              </p>

              <div className="mt-8">
                <ContactForm />
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
                    <Car className="size-4" strokeWidth={1.4} />
                  </span>
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Getting here
                  </p>
                </div>
                <p className="mt-4 border-t border-ink/10 pt-4 text-[12px] leading-[1.8] text-ink/55">
                  We are on Acacia Avenue in Kololo, a few doors above the
                  junction with Elizabeth Avenue. Secure, complimentary parking
                  is on site with attendants throughout service.
                </p>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 border-b border-ink/20 pb-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-ink/55 transition-colors hover:border-ember hover:text-ember"
                >
                  Open in Google Maps
                  <ArrowUpRight className="size-3" />
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-ink/10 bg-cream/80 p-5 sm:p-6">
                <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                  Follow along
                </p>
                <div className="mt-4 space-y-1.5 border-t border-ink/10 pt-3">
                  {socials.map(({ href, label, handle, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl px-1 py-2 transition-colors hover:bg-ink/[0.03]"
                    >
                      <span className="grid size-8 place-items-center rounded-full border border-ink/10 text-ink/45 transition-colors group-hover:border-ember/25 group-hover:text-ember">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11.5px] font-medium text-ink/70">
                          {label}
                        </span>
                        <span className="block truncate text-[10px] text-ink/35">
                          {handle}
                        </span>
                      </span>
                      <ArrowUpRight className="size-3 text-ink/20 transition-colors group-hover:text-ember" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto rounded-[1.5rem] border border-ink/10 bg-ink p-5 text-cream sm:p-6">
                <p className="flex items-center gap-2 text-[8.5px] uppercase tracking-[0.22em] text-gold">
                  <Users className="size-3.5" />
                  Private dining
                </p>
                <p className="mt-2 font-display text-xl font-medium leading-tight">
                  Planning something larger?
                </p>
                <p className="mt-2 text-[11.5px] leading-relaxed text-cream/50">
                  The Acacia room seats up to 22, with its own terrace and a
                  dedicated team.
                </p>
                <a
                  href={`mailto:${site.reservationsEmail}`}
                  className="mt-4 inline-flex items-center gap-1.5 border-b border-cream/25 pb-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {site.reservationsEmail}
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-ink/10 bg-cream-200/60 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Find us"
                title={
                  <>
                    On the green side{" "}
                    <span className="italic text-ember">of Kololo.</span>
                  </>
                }
                description="Tucked off Acacia Avenue, with the city glowing below and frangipani overhead. You will know the gate when you see it."
                className="max-w-xl"
              />
              <ButtonLink href={site.mapUrl} variant="outline" size="sm">
                Get directions
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-10 min-h-[400px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream shadow-[0_30px_70px_-55px_rgba(23,19,15,0.45)] sm:min-h-[480px]">
              <iframe
                title="Map showing Bella Vista Restaurant on Acacia Avenue, Kololo, Kampala"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.22] contrast-[0.96]"
              />

              <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:left-5 sm:right-auto sm:max-w-sm">
                <div className="pointer-events-auto rounded-2xl border border-ink/10 bg-cream/95 p-5 shadow-[0_18px_45px_-25px_rgba(23,19,15,0.6)] backdrop-blur">
                  <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-ember">
                    <MapPin className="size-3.5" />
                    Bella Vista Restaurant
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                    {site.address.line1}
                    <br />
                    {site.address.line2}, {site.address.country}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-3 text-[9px] uppercase tracking-[0.15em]">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-ink/50 transition-colors hover:text-ember"
                    >
                      {site.phone}
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink/50 transition-colors hover:text-ember"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow="One more thing"
        title={
          <>
            The best evenings start{" "}
            <span className="italic text-gold">with a table.</span>
          </>
        }
        description="If you would rather speak to a person, our reservations team is on the line Tuesday to Sunday, from ten in the morning."
        image="/images/terrace.jpg"
        imageAlt="The Bella Vista terrace in the evening light"
        primaryLabel="Reserve a table"
        secondaryHref={`tel:${site.reservationsPhoneHref}`}
        secondaryLabel="Call reservations"
      />
    </main>
  );
}
