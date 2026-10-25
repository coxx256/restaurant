import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowTone = "ember" | "gold" | "ink" | "cream";

type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  align?: "left" | "center";
  className?: string;
};

const eyebrowTone: Record<EyebrowTone, string> = {
  ember: "text-ember",
  gold: "text-gold",
  ink: "text-ink/50",
  cream: "text-cream/55",
};

const eyebrowLine: Record<EyebrowTone, string> = {
  ember: "bg-ember/50",
  gold: "bg-gold/55",
  ink: "bg-ink/25",
  cream: "bg-cream/30",
};

export function Eyebrow({
  children,
  tone = "ember",
  align = "left",
  className,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em]",
        eyebrowTone[tone],
        align === "center" && "justify-center",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-8", eyebrowLine[tone])}
      />
      {children}
      {align === "center" && (
        <span
          aria-hidden="true"
          className={cn("h-px w-8", eyebrowLine[tone])}
        />
      )}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  eyebrowTone?: EyebrowTone;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  eyebrowTone,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow
          tone={eyebrowTone ?? (isDark ? "gold" : "ember")}
          align={align}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-5 font-display text-[clamp(2.25rem,4.8vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em]",
          isDark ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-[14.5px] leading-[1.8]",
            align === "center" && "mx-auto",
            isDark ? "text-cream/55" : "text-ink/55",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

type ButtonVariant =
  | "primary"
  | "dark"
  | "outline"
  | "light"
  | "gold"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-ember text-cream shadow-[0_18px_34px_-20px_rgba(173,79,43,0.9)] hover:-translate-y-0.5 hover:bg-ember-600",
  dark: "bg-ink text-cream hover:-translate-y-0.5 hover:bg-ink-700",
  outline:
    "border border-ink/20 text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-cream",
  light:
    "border border-cream/30 text-cream hover:-translate-y-0.5 hover:border-cream hover:bg-cream hover:text-ink",
  gold: "bg-gold text-ink shadow-[0_18px_34px_-22px_rgba(201,167,107,0.9)] hover:-translate-y-0.5 hover:bg-[#d6b77d]",
  ghost: "text-ink hover:text-ember",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[9.5px] tracking-[0.18em]",
  md: "px-6 py-3.5 text-[10.5px] tracking-[0.19em]",
  lg: "px-7 py-4 text-[11px] tracking-[0.2em]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  icon,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium uppercase transition-all duration-300",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {icon ?? (
        withArrow ? (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        ) : null
      )}
    </>
  );

  const isExternal = href.startsWith("http");
  const isProtocolLink = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (isProtocolLink) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "light" | "gold";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[8.5px] font-medium uppercase tracking-[0.14em]",
        tone === "light" && "border-cream/20 text-cream/55",
        tone === "gold" && "border-gold/30 bg-gold/10 text-gold",
        tone === "default" && "border-ink/15 text-ink/50",
      )}
    >
      {children}
    </span>
  );
}
