import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function GalleryPreview({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:auto-rows-[185px] sm:grid-cols-3 lg:auto-rows-[215px]">
      {images.map((image, index) => (
        <Link
          key={`${image.src}-${index}`}
          href="/gallery"
          aria-label={`${image.caption} — view the gallery`}
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-cream-300",
            index === 0 &&
              "col-span-2 aspect-[16/10] sm:row-span-2 sm:aspect-auto",
            index === images.length - 1 &&
              "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-auto",
            index !== 0 &&
              index !== images.length - 1 &&
              "aspect-square sm:aspect-auto",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              index === 0
                ? "(max-width: 640px) 100vw, 66vw"
                : "(max-width: 640px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.05]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div>
              <p className="text-[7.5px] uppercase tracking-[0.22em] text-gold/90">
                {image.category}
              </p>
              <p className="mt-1 font-display text-base italic leading-tight text-cream/90 sm:text-lg">
                {image.caption}
              </p>
            </div>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-cream/25 text-cream/70 opacity-0 transition-all duration-300 group-hover:bg-cream group-hover:text-ink group-hover:opacity-100">
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
