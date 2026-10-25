"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu as MenuIcon, Phone, X } from "lucide-react";
import Brand from "./brand";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
          solid
            ? "border-b border-ink/10 bg-cream/90 shadow-[0_18px_40px_-32px_rgba(23,19,15,0.55)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-12",
            solid ? "py-3" : "py-4 sm:py-5",
          )}
        >
          <Brand tone={solid ? "dark" : "light"} />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {site.nav.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-[11px] font-medium uppercase tracking-[0.17em] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300",
                    solid
                      ? "text-ink/60 hover:text-ink"
                      : "text-cream/65 hover:text-cream",
                    active &&
                      (solid
                        ? "text-ember after:w-full"
                        : "text-gold after:w-full"),
                    !active && "after:w-0 hover:after:w-full",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className={cn(
                "hidden items-center gap-2 text-[12.5px] font-medium transition-colors xl:flex",
                solid
                  ? "text-ink/60 hover:text-ink"
                  : "text-cream/70 hover:text-cream",
              )}
            >
              <Phone className="size-3.5" />
              {site.phone}
            </a>

            <Link
              href="/reservations"
              className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-cream shadow-[0_14px_28px_-18px_rgba(173,79,43,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-600 min-[390px]:inline-flex"
            >
              Reserve
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                solid
                  ? "border-ink/15 text-ink hover:border-ink/40 hover:bg-ink hover:text-cream"
                  : "border-cream/30 text-cream hover:bg-cream hover:text-ink",
              )}
            >
              {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 animate-fade-in overflow-y-auto bg-cream lg:hidden"
        >
          <div className="flex min-h-full flex-col px-6 pb-10 pt-28 sm:px-8 sm:pt-32">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {site.nav.map((link, index) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 sm:py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "font-sans text-[10px] tracking-[0.2em]",
                          active ? "text-ember" : "text-ink/35",
                        )}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[2.1rem] font-medium leading-none tracking-tight transition-colors group-hover:text-ember sm:text-5xl",
                          active ? "text-ember" : "text-ink",
                        )}
                      >
                        {link.label}
                      </span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 -rotate-45 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ember" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-10">
              <Link
                href="/reservations"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ember py-4 text-[11.5px] font-medium uppercase tracking-[0.2em] text-cream"
              >
                Reserve a table
                <ArrowRight className="size-4" />
              </Link>

              <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-ink/60">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.26em] text-ink/35">
                    Find us
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.country}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.26em] text-ink/35">
                    Reservations
                  </p>
                  <a
                    href={`tel:${site.reservationsPhoneHref}`}
                    className="mt-2 block leading-relaxed transition-colors hover:text-ember"
                  >
                    {site.reservationsPhone}
                  </a>
                  <a
                    href={`mailto:${site.reservationsEmail}`}
                    className="block break-all leading-relaxed transition-colors hover:text-ember"
                  >
                    {site.reservationsEmail}
                  </a>
                </div>
              </div>

              <p className="mt-6 border-t border-ink/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-ink/40">
                Tuesday – Sunday · dinner from 5pm · Monday closed
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
