"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { cn } from "@/lib/utils";

const FILTERS = [
  "All",
  "Food",
  "The Room",
  "The Team",
  "Evenings",
  "Drinks",
] as const;

type Filter = (typeof FILTERS)[number];

const ratioClass: Record<GalleryImage["ratio"], string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export default function GalleryMasonry({
  images,
}: {
  images: GalleryImage[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered =
    filter === "All"
      ? images
      : images.filter((image) => image.category === filter);

  const active = lightbox !== null ? filtered[lightbox] : null;

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (direction: number) => {
      setLightbox((current) => {
        if (current === null) return current;
        return (current + direction + filtered.length) % filtered.length;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, go]);

  function chooseFilter(next: Filter) {
    setFilter(next);
    setLightbox(null);
  }

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
          {FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => chooseFilter(option)}
              aria-pressed={filter === option}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-[9.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                filter === option
                  ? "bg-ink text-cream"
                  : "text-ink/50 hover:bg-ink/[0.055] hover:text-ink",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <p className="text-[9.5px] uppercase tracking-[0.18em] text-ink/35">
          {filtered.length} {filtered.length === 1 ? "moment" : "moments"}
        </p>
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setLightbox(index)}
            aria-label={`View larger: ${image.caption}`}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-cream-300 text-left"
          >
            <span
              className={cn(
                "relative block w-full overflow-hidden",
                ratioClass[image.ratio],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[8.5px] uppercase tracking-[0.22em] text-gold">
                  {image.category}
                </span>
                <span className="mt-1 block font-display text-lg italic text-cream">
                  {image.caption}
                </span>
              </span>
              <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-cream/90 text-ink opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                <Expand className="size-3.5" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${active.caption}`}
          className="fixed inset-0 z-[70] flex animate-fade-in flex-col bg-ink/97 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 text-cream sm:px-6">
            <div>
              <p className="text-[8.5px] uppercase tracking-[0.24em] text-gold">
                {active.category}
              </p>
              <p className="mt-1 font-display text-lg italic text-cream/85 sm:text-xl">
                {active.caption}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden text-[10px] tabular-nums text-cream/35 sm:block">
                {String((lightbox ?? 0) + 1).padStart(2, "0")} /{" "}
                {String(filtered.length).padStart(2, "0")}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative min-h-0 flex-1 px-4 pb-2 sm:px-16">
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="animate-fade-in object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-8 px-5 py-5 sm:justify-between sm:px-8">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronLeft className="size-5" />
            </button>

            <p
              className="max-w-md text-center text-[10.5px] leading-relaxed text-cream/40"
              aria-live="polite"
            >
              Bella Vista · Kololo, Kampala
            </p>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
