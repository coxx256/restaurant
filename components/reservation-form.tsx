"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import {
  fieldClass,
  labelClass,
  selectClass,
  textareaClass,
} from "@/lib/form-styles";

const TIMES = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const GUESTS = [
  "1 guest",
  "2 guests",
  "3 guests",
  "4 guests",
  "5 guests",
  "6 guests",
  "7 guests",
  "8 guests",
  "9+ guests",
];

const OCCASIONS = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
  "Celebration",
];

type Booking = {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

type ReservationFormProps = {
  initialDate?: string;
  initialTime?: string;
  initialGuests?: string;
};

function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function formatDate(value: string) {
  if (!value) return "your chosen evening";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ReservationForm({
  initialDate = "",
  initialTime = "7:00 PM",
  initialGuests = "2 guests",
}: ReservationFormProps) {
  const [booking, setBooking] = useState<Booking | null>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState(
    TIMES.includes(initialTime) ? initialTime : "7:00 PM",
  );
  const [guests, setGuests] = useState(
    GUESTS.includes(initialGuests) ? initialGuests : "2 guests",
  );

  useEffect(() => {
    const input = dateRef.current;
    if (!input) return;

    const today = todayISO();
    input.min = today;
    if (!input.value || input.value < today) input.value = today;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBooking({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      date: String(data.get("date") ?? ""),
      time,
      guests,
      occasion: String(data.get("occasion") ?? "Just dinner"),
      notes: String(data.get("notes") ?? "").trim(),
    });
  }

  if (booking) {
    return (
      <div
        className="flex animate-rise flex-col items-center justify-center px-1 py-8 text-center sm:py-12"
        aria-live="polite"
      >
        <span className="grid size-16 place-items-center rounded-full bg-ember/10 text-ember">
          <Check className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Your table is requested
        </h3>
        <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-ink/60">
          Thank you, {booking.name.split(" ")[0] || "friend"}. Our reservations
          team will confirm by email at{" "}
          <span className="font-medium text-ink/80">{booking.email}</span> within
          the hour.
        </p>

        <dl className="mt-7 w-full max-w-sm space-y-2.5 rounded-2xl border border-ink/10 bg-cream-200/60 px-5 py-4 text-left text-[13px]">
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[9px] uppercase tracking-[0.18em] text-ink/40">
              Date
            </dt>
            <dd className="text-right font-medium text-ink">
              {formatDate(booking.date)}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[9px] uppercase tracking-[0.18em] text-ink/40">
              Time
            </dt>
            <dd className="font-medium text-ink">{booking.time}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[9px] uppercase tracking-[0.18em] text-ink/40">
              Party
            </dt>
            <dd className="font-medium text-ink">{booking.guests}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[9px] uppercase tracking-[0.18em] text-ink/40">
              Occasion
            </dt>
            <dd className="text-right font-medium text-ink">{booking.occasion}</dd>
          </div>
          {booking.notes && (
            <div className="flex items-start justify-between gap-4 border-t border-ink/10 pt-2.5">
              <dt className="text-[9px] uppercase tracking-[0.18em] text-ink/40">
                Note
              </dt>
              <dd className="max-w-[70%] text-right leading-relaxed text-ink/60">
                {booking.notes}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => setBooking(null)}
            className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:border-ember hover:text-ember"
          >
            Make another booking
            <ArrowRight className="size-3.5" />
          </button>
          <a
            href={`tel:${site.reservationsPhoneHref}`}
            className="text-[10px] uppercase tracking-[0.16em] text-ink/40 transition-colors hover:text-ember"
          >
            Or call {site.reservationsPhone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="reservation-name" className={labelClass}>
            Full name
          </label>
          <input
            id="reservation-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Amara Nakato"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="reservation-email" className={labelClass}>
            Email
          </label>
          <input
            id="reservation-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="reservation-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="reservation-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+256 772 000 000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="reservation-date" className={labelClass}>
            Date
          </label>
          <input
            ref={dateRef}
            id="reservation-date"
            name="date"
            type="date"
            required
            defaultValue={initialDate}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="reservation-time" className={labelClass}>
            Time
          </label>
          <div className="relative">
            <select
              id="reservation-time"
              name="time"
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className={selectClass}
            >
              {TIMES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1.5 size-4 text-ink/40"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reservation-guests" className={labelClass}>
            Number of guests
          </label>
          <div className="relative">
            <select
              id="reservation-guests"
              name="guests"
              required
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className={selectClass}
            >
              {GUESTS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1.5 size-4 text-ink/40"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reservation-occasion" className={labelClass}>
            Occasion{" "}
            <span className="normal-case tracking-normal text-ink/30">
              (optional)
            </span>
          </label>
          <div className="relative">
            <select
              id="reservation-occasion"
              name="occasion"
              defaultValue="Just dinner"
              className={selectClass}
            >
              {OCCASIONS.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
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
          <label htmlFor="reservation-notes" className={labelClass}>
            Special requests{" "}
            <span className="normal-case tracking-normal text-ink/30">
              (optional)
            </span>
          </label>
          <textarea
            id="reservation-notes"
            name="notes"
            rows={3}
            placeholder="Allergies, a quiet corner, a candle in the dessert…"
            className={textareaClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ember py-4 text-[10.5px] font-medium uppercase tracking-[0.21em] text-cream shadow-[0_18px_34px_-22px_rgba(173,79,43,0.9)] transition-colors duration-300 hover:bg-ember-600"
      >
        Request reservation
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="text-center text-[10.5px] leading-relaxed text-ink/40">
        We hold tables for 15 minutes. For parties of nine or more, or for the
        Acacia room, call{" "}
        <a
          href={`tel:${site.reservationsPhoneHref}`}
          className="border-b border-ink/20 text-ink/65 transition-colors hover:border-ember hover:text-ember"
        >
          {site.reservationsPhone}
        </a>
        .
      </p>
    </form>
  );
}
