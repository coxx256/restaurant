"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavCategory = {
  id: string;
  label: string;
  shortLabel: string;
};

export default function MenuCategoryNav({
  categories,
}: {
  categories: NavCategory[];
}) {
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="sticky top-[67px] z-30 border-y border-ink/10 bg-cream/92 backdrop-blur-xl lg:top-[71px]">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 sm:px-8 lg:px-12">
        <div className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto py-2.5">
          {categories.map((category) => {
            const selected = active === category.id;

            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={() => setActive(category.id)}
                aria-current={selected ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-2 text-[9.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 sm:px-4",
                  selected
                    ? "bg-ink text-cream"
                    : "text-ink/50 hover:bg-ink/[0.055] hover:text-ink",
                )}
              >
                {category.shortLabel}
              </a>
            );
          })}
        </div>

        <Link
          href="/reservations"
          className="hidden shrink-0 items-center gap-2 border-l border-ink/10 py-2 pl-6 text-[9.5px] font-medium uppercase tracking-[0.17em] text-ember transition-colors hover:text-ember-600 lg:flex"
        >
          Book a table
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
