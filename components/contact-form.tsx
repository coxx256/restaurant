"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import {
  fieldClass,
  labelClass,
  selectClass,
  textareaClass,
} from "@/lib/form-styles";

const SUBJECTS = [
  "General enquiry",
  "Reservations",
  "Private dining",
  "Press & partnerships",
  "Feedback",
];

type Enquiry = {
  name: string;
  email: string;
  subject: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState<Enquiry | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSent({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "General enquiry"),
    });
  }

  if (sent) {
    return (
      <div
        className="flex h-full min-h-[420px] animate-rise flex-col items-center justify-center px-2 py-12 text-center"
        aria-live="polite"
      >
        <span className="grid size-16 place-items-center rounded-full bg-olive/10 text-olive">
          <Check className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Message received
        </h3>
        <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-ink/60">
          Thank you, {sent.name.split(" ")[0] || "friend"}. We&apos;ve passed
          your note about &ldquo;{sent.subject.toLowerCase()}&rdquo; to the right
          person and will reply to {sent.email} within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-7 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:border-ember hover:text-ember"
        >
          Send another message
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone{" "}
            <span className="normal-case tracking-normal text-ink/30">
              (optional)
            </span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+256 772 000 000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Subject
          </label>
          <div className="relative">
            <select
              id="contact-subject"
              name="subject"
              defaultValue="General enquiry"
              className={selectClass}
            >
              {SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1.5 size-4 text-ink/40"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help…"
            className={textareaClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[10.5px] font-medium uppercase tracking-[0.21em] text-cream transition-colors duration-300 hover:bg-ember"
      >
        Send message
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="text-center text-[10.5px] leading-relaxed text-ink/40">
        We reply within one working day. For reservations, please use the{" "}
        <a
          href="/reservations"
          className="border-b border-ink/20 text-ink/65 transition-colors hover:border-ember hover:text-ember"
        >
          booking form
        </a>
        .
      </p>
    </form>
  );
}
