"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { leadForm as data } from "@/content/home";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition focus:border-genii-orange focus:ring-3 focus:ring-genii-orange/20";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder only — no back-end yet. Lead routing (email or CRM) is a
    // pending decision (see docs/TRACKING_PLAN.md).
    setSubmitted(true);
  }

  return (
    <Section id="lead-form" className="scroll-mt-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left copy */}
            <div className="relative flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(70% 60% at 0% 0%, rgba(237,27,47,0.06), transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] genii-gradient-text">
                  See what&apos;s possible
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  {data.heading}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {data.copy}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4 text-genii-orange" />
                  {data.privacy}
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="border-t border-border/60 bg-muted/30 p-8 sm:p-10 lg:p-12 md:border-l md:border-t-0">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <CheckCircle2 className="size-12 text-genii-orange" />
                  <h3 className="text-xl font-bold">Thank you</h3>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Your enquiry has been captured. A Genii expert will be in
                    touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input id="name" name="name" required className={fieldClass} />
                    </Field>
                    <Field label="Work email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Company" htmlFor="company">
                      <input id="company" name="company" className={fieldClass} />
                    </Field>
                    <Field label="Job title" htmlFor="title">
                      <input id="title" name="title" className={fieldClass} />
                    </Field>
                  </div>
                  <Field label="Use case" htmlFor="usecase">
                    <select
                      id="usecase"
                      name="usecase"
                      defaultValue=""
                      className={cn(fieldClass, "appearance-none")}
                    >
                      <option value="" disabled>
                        Select use case
                      </option>
                      {data.useCases.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <button
                    type="submit"
                    className="mt-2 inline-flex h-12 items-center justify-center rounded-full genii-gradient font-semibold text-white shadow-lg shadow-genii-orange/25 transition hover:brightness-105"
                  >
                    Request Demo
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Prefer to talk first?{" "}
                    <a href="#lead-form" className="font-semibold text-genii-red">
                      Talk to an Expert
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

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
