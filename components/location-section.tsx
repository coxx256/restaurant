import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ButtonLink, SectionHeading } from "./ui";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

type LocationSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  id?: string;
};

export default function LocationSection({
  eyebrow = "Visit us",
  title = (
    <>
      Find us on the{" "}
      <span className="italic text-ember">green side</span> of Kololo.
    </>
  ),
  description = "Tucked off Acacia Avenue, with a garden, a terrace and the city glowing below. Secure parking is available on site.",
  id = "visit",
}: LocationSectionProps) {
  return (
    <section
      id={id}
      className="paper scroll-mt-24 border-t border-ink/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-xl"
          />
          <ButtonLink href={site.mapUrl} variant="outline" size="sm">
            Get directions
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream-200 shadow-[0_30px_70px_-55px_rgba(23,19,15,0.45)] sm:min-h-[430px]">
            <iframe
              title="Map showing Bella Vista Restaurant on Acacia Avenue, Kololo, Kampala"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.22] contrast-[0.96]"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:left-5 sm:right-auto sm:max-w-xs">
              <div className="pointer-events-auto rounded-2xl border border-ink/10 bg-cream/95 p-4 shadow-[0_18px_45px_-25px_rgba(23,19,15,0.6)] backdrop-blur">
                <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-ember">
                  <MapPin className="size-3.5" />
                  Bella Vista
                </p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink/70">
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.country}
                </p>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 border-b border-ink/20 pb-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-ink/55 transition-colors hover:border-ember hover:text-ember"
                >
                  Open in Google Maps
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
            <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-5">
              <div className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <MapPin className="size-4" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Address
                  </p>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-[13px] leading-relaxed text-ink/75 transition-colors hover:text-ember"
                  >
                    {site.address.line1}, {site.address.line2},{" "}
                    {site.address.country}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-5">
              <div className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <Phone className="size-4" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Call us
                  </p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1.5 block text-[13px] text-ink/75 transition-colors hover:text-ember"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-0.5 text-[11px] text-ink/40">
                    Reservations: {site.reservationsPhone}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-5">
              <div className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <Mail className="size-4" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Write to us
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1.5 block break-all text-[13px] text-ink/75 transition-colors hover:text-ember"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-ink/10 bg-cream/70 p-5">
              <div className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <Clock className="size-4" strokeWidth={1.4} />
                </span>
                <div className="w-full">
                  <p className="text-[8.5px] uppercase tracking-[0.21em] text-ink/35">
                    Opening hours
                  </p>
                  <dl className="mt-2 space-y-1.5 text-[11.5px]">
                    {site.hours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <dt className="text-ink/45">{entry.day}</dt>
                        <dd
                          className={
                            entry.closed ? "text-ink/30" : "text-ink/70"
                          }
                        >
                          {entry.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
