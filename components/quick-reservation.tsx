"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fieldClass, labelClass, selectClass } from "@/lib/form-styles";

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

function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export default function QuickReservation({ idPrefix = "quick" }: { idPrefix?: string }) {
  const router = useRouter();
  const dateRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState("7:00 PM");
  const [guests, setGuests] = useState("2 guests");

  useEffect(() => {
    const input = dateRef.current;
    if (!input) return;

    const today = todayISO();
    input.min = today;
    if (!input.value) input.value = today;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams({
      date: String(data.get("date") ?? ""),
      time,
      guests,
    });
    router.push(`/reservations?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor={`${idPrefix}-date`} className={labelClass}>
            Date
          </label>
          <input
            ref={dateRef}
            id={`${idPrefix}-date`}
            name="date"
            type="date"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-time`} className={labelClass}>
            Time
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-time`}
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
          <label htmlFor={`${idPrefix}-guests`} className={labelClass}>
            Guests
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-guests`}
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
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[10.5px] font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-ember"
      >
        Find a table
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
