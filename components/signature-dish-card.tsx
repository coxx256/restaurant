import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SignatureDish } from "@/lib/menu";
import { Tag } from "./ui";

export default function SignatureDishCard({
  dish,
  index,
}: {
  dish: SignatureDish;
  index: number;
}) {
  return (
    <Link
      href={dish.href}
      className="group block focus-visible:rounded-[1.5rem]"
      aria-label={`${dish.name}, ${dish.price} — view on the menu`}
    >
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-cream-300">
          <Image
            src={dish.image}
            alt={`${dish.name} at Bella Vista`}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
            className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.055]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-ink/10"
          />

          <span className="absolute left-4 top-4 rounded-full border border-cream/20 bg-ink/45 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.17em] text-cream/85 backdrop-blur-md">
            {dish.category}
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-ink shadow-sm">
            {dish.price}
          </span>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
            <div>
              <p className="text-[8px] uppercase tracking-[0.26em] text-cream/45">
                Signature plate
              </p>
              <p className="mt-1 font-display text-lg italic text-cream/85">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <span className="grid size-10 translate-y-2 place-items-center rounded-full border border-cream/30 bg-cream/10 text-cream opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:bg-cream group-hover:text-ink group-hover:opacity-100">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-[80%] font-display text-[1.45rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-ember">
              {dish.name}
            </h3>
            <span className="mt-1 text-[8.5px] uppercase tracking-[0.18em] text-ink/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-2 max-w-sm text-[12.5px] leading-[1.7] text-ink/55">
            {dish.description}
          </p>
          {dish.tags && dish.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {dish.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
