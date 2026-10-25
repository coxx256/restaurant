import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuPreview } from "@/lib/menu";

export default function MenuPreview() {
  return (
    <div className="mt-12 grid gap-x-14 gap-y-12 sm:grid-cols-2">
      {menuPreview.map((category, index) => (
        <div key={category.id}>
          <div className="flex items-baseline justify-between gap-4 border-b border-cream/15 pb-3">
            <h3 className="font-display text-[1.6rem] font-medium tracking-tight text-cream">
              {category.label}
            </h3>
            <span className="font-display text-sm italic text-gold/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-cream/30">
            {category.note}
          </p>

          <ul className="mt-5 space-y-4">
            {category.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline gap-3">
                  <span className="text-[14px] font-medium leading-snug text-cream/90 transition-colors hover:text-gold">
                    {item.name}
                  </span>
                  <span className="leader text-cream/30" aria-hidden="true" />
                  <span className="shrink-0 font-display text-[15px] text-gold/90">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 max-w-md text-[11.5px] leading-relaxed text-cream/40">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href={`/menu#${category.id}`}
            className="group mt-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-cream/45 transition-colors hover:text-gold"
          >
            Explore {category.shortLabel.toLowerCase()}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  );
}
