"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div
        className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.04] px-4 py-3.5"
        aria-live="polite"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
          <Check className="size-4" />
        </span>
        <p className="text-[12.5px] leading-relaxed text-cream/75">
          You&apos;re on the list. Look out for the next letter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label
        htmlFor="footer-email"
        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/40"
      >
        Email address
      </label>
      <div className="flex items-center gap-2 border-b border-cream/25 pb-2 transition-colors focus-within:border-gold">
        <input
          id="footer-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className="w-full bg-transparent text-sm text-cream placeholder:text-cream/30 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe to the Bella Vista letter"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-cream text-ink transition-colors hover:bg-gold"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p className="mt-2.5 text-[10px] leading-relaxed text-cream/30">
        A short monthly letter. No noise, unsubscribe any time.
      </p>
    </form>
  );
}
