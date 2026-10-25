import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Brand from "./brand";
import NewsletterForm from "./newsletter-form";
import { FacebookIcon, InstagramIcon, XIcon } from "./social-icons";
import { site } from "@/lib/site";

async function copyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const socials = [
  {
    href: site.socials.instagram,
    label: "Bella Vista on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: site.socials.facebook,
    label: "Bella Vista on Facebook",
    Icon: FacebookIcon,
  },
  {
    href: site.socials.x,
    label: "Bella Vista on X",
    Icon: XIcon,
  },
];

export default async function SiteFooter() {
  const year = await copyrightYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 size-[34rem] rounded-full border border-cream/[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-24 size-[28rem] rounded-full bg-ember/[0.08] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-cream/10 py-16 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_0.9fr_1fr] lg:gap-10 lg:py-20">
          <div>
            <Brand tone="light" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-[1.8] text-cream/50">
              {site.shortDescription}
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.24em] text-cream/25">
              Est. 2016 · Kololo, Kampala
            </p>
          </div>

          <div>
            <h2 className="text-[9.5px] font-semibold uppercase tracking-[0.26em] text-cream/35">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-[13.5px] text-cream/60">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[9.5px] font-semibold uppercase tracking-[0.26em] text-cream/35">
              Visit
            </h2>
            <div className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-cream/60">
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-gold"
              >
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold/80" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.country}
                </span>
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Phone className="size-3.5 shrink-0 text-gold/80" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block break-all transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </div>

            <Link
              href="/reservations"
              className="mt-6 inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              Book a table
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div>
            <h2 className="text-[9.5px] font-semibold uppercase tracking-[0.26em] text-cream/35">
              Opening hours
            </h2>
            <dl className="mt-5 space-y-0 text-[13px]">
              {site.hours.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-baseline justify-between gap-3 border-b border-cream/10 py-2.5"
                >
                  <dt className="text-cream/50">{entry.day}</dt>
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

            <div className="mt-7 rounded-2xl border border-cream/12 bg-cream/[0.035] p-4">
              <p className="text-[9px] uppercase tracking-[0.22em] text-gold/75">
                The Acacia room
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-cream/50">
                Private dining for up to 22 guests. Call{" "}
                <a
                  href={`tel:${site.reservationsPhoneHref}`}
                  className="text-cream/80 transition-colors hover:text-gold"
                >
                  {site.reservationsPhone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-b border-cream/10 py-10 sm:grid-cols-[1fr_0.9fr] sm:items-end sm:gap-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold/80">
              The Sunday letter
            </p>
            <p className="mt-3 max-w-md font-display text-2xl font-medium italic leading-snug text-cream/85 sm:text-[1.75rem]">
              New dishes, wine dinners and the odd recipe — once a month.
            </p>
          </div>
          <div className="sm:justify-self-end sm:w-full sm:max-w-sm">
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 py-7 text-[10.5px] text-cream/30 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
            <Link
              href="/reservations"
              className="transition-colors hover:text-gold"
            >
              Reservations
            </Link>
            <span className="flex items-center gap-1.5">
              Made with care in Kampala
              <span className="size-1 rounded-full bg-gold/60" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden text-center font-display text-[clamp(4rem,14vw,12rem)] font-medium leading-[0.7] tracking-[-0.04em] text-cream/[0.035]"
      >
        Bella Vista
      </p>
    </footer>
  );
}
