import {
  ChefHat,
  HeartHandshake,
  Leaf,
  Sparkles,
} from "lucide-react";
import { features } from "@/lib/content";

const icons = {
  leaf: Leaf,
  chef: ChefHat,
  sparkles: Sparkles,
  heart: HeartHandshake,
} as const;

export default function FeaturesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {features.map((feature) => {
        const Icon = icons[feature.icon];

        return (
          <article
            key={feature.title}
            className="group relative flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember/25 hover:shadow-[0_28px_60px_-42px_rgba(23,19,15,0.35)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-ink text-cream transition-colors duration-500 group-hover:bg-ember">
                <Icon className="size-5" strokeWidth={1.4} />
              </span>
              <span className="font-display text-lg italic text-ink/20">
                {feature.number}
              </span>
            </div>
            <h3 className="mt-7 font-display text-[1.45rem] font-medium leading-tight tracking-[-0.01em] text-ink">
              {feature.title}
            </h3>
            <p className="mt-3 text-[12.5px] leading-[1.75] text-ink/55">
              {feature.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
