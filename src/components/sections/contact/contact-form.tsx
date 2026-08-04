"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { leadForm } from "@/content/home";

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition focus:border-genii-orange focus:ring-3 focus:ring-genii-orange/20";

// Single source of truth — shared with the homepage lead form so the two
// pickers can't drift apart.
const useCases = leadForm.useCases;

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

/**
 * Contact form. Placeholder submit only — there is no back-end yet, because
 * lead routing (email address vs CRM) is still a pending client decision.
 * See docs/TRACKING_PLAN.md.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center gap-3 rounded-3xl border border-border/60 bg-card p-8 text-center">
        <CheckCircle2 className="size-12 text-genii-orange" />
        <h2 className="text-xl font-bold">Thank you</h2>
        <p className="max-w-xs text-sm text-muted-foreground">
          Your message has been captured. A Genii expert will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3.5 rounded-3xl border border-border/60 bg-card p-6 sm:p-7"
    >
      <h2 className="text-lg font-bold">Leave a message</h2>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="contact-name">
          <input id="contact-name" name="name" required className={fieldClass} />
        </Field>
        <Field label="Work email" htmlFor="contact-email">
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </Field>
        <Field label="Company" htmlFor="contact-company">
          <input id="contact-company" name="company" className={fieldClass} />
        </Field>
        <Field label="Phone (optional)" htmlFor="contact-phone">
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className={fieldClass}
          />
        </Field>
      </div>
      <Field label="What can we help with?" htmlFor="contact-usecase">
        <select
          id="contact-usecase"
          name="usecase"
          defaultValue=""
          className={cn(fieldClass, "appearance-none")}
        >
          <option value="" disabled>
            Select a use case
          </option>
          {useCases.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-genii-orange focus:ring-3 focus:ring-genii-orange/20"
        />
      </Field>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full genii-gradient font-semibold text-white shadow-lg shadow-genii-orange/25 transition hover:brightness-105"
      >
        Send message
      </button>
      <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 text-genii-orange" />
        We respect your privacy. Your information is safe with us.
      </p>
    </form>
  );
}
