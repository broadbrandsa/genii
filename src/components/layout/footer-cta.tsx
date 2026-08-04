"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { leadForm } from "@/content/home";

type Mode = "cta" | "step1" | "step2" | "done";

const fieldClass =
  "h-11 w-full rounded-full bg-white px-4 text-sm text-genii-charcoal outline-none placeholder:text-muted-foreground focus:ring-3 focus:ring-white/40";

const slide = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
};

/**
 * Closing CTA band. Clicking "Book a Demo" or "Talk to an Expert" slides the
 * buttons out and the lead form in.
 *
 * The form is two-stage so the band stays compact while still capturing every
 * field the Homepage Design Brief asks for (section 10):
 *   step 1 — Full Name, Work Email
 *   step 2 — Company, Job Title, Select Use Case
 * Asking for name and email first means a drop-off after step 1 still leaves a
 * contactable lead.
 *
 * Submitting is a placeholder. Nicola asked (26 June) for enquiries to route
 * into the Zoho CRM via an address Tyler provides — still outstanding, so
 * nothing is sent yet. See docs/TRACKING_PLAN.md.
 */
export function FooterCta({
  heading,
  copy,
}: {
  heading: string;
  copy: string;
}) {
  const [mode, setMode] = useState<Mode>("cta");
  const [intent, setIntent] = useState("Book a Demo");

  function open(which: string) {
    setIntent(which);
    setMode("step1");
  }

  return (
    <div
      id="lead-form"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pt-14 sm:px-8"
    >
      <div className="relative overflow-hidden rounded-[2rem] genii-gradient px-6 py-10 sm:px-12 sm:py-12">
        <div
          aria-hidden
          className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-lg text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">{copy}</p>
          </div>

          {/* Swappable action area */}
          <div className="w-full shrink-0 md:w-[24rem]">
            <AnimatePresence mode="wait" initial={false}>
              {mode === "cta" && (
                <motion.div
                  key="cta"
                  {...slide}
                  className="flex flex-col gap-3 sm:flex-row md:justify-end"
                >
                  <button
                    type="button"
                    onClick={() => open("Book a Demo")}
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-genii-red transition hover:bg-white/90"
                  >
                    Book a Demo
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => open("Talk to an Expert")}
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/60 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Talk to an Expert
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.div>
              )}

              {/* Step 1 — who they are */}
              {mode === "step1" && (
                <motion.form
                  key="step1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMode("step2");
                  }}
                  {...slide}
                  className="flex flex-col gap-3"
                >
                  <StepHeader
                    step={1}
                    intent={intent}
                    onBack={() => setMode("cta")}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="sr-only" htmlFor="cta-name">
                      Full name
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      required
                      placeholder="Full name"
                      className={fieldClass}
                    />
                    <label className="sr-only" htmlFor="cta-email">
                      Work email
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Work email"
                      className={fieldClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-genii-red transition hover:bg-white/90"
                  >
                    Continue
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.form>
              )}

              {/* Step 2 — context, so the right expert follows up */}
              {mode === "step2" && (
                <motion.form
                  key="step2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMode("done");
                  }}
                  {...slide}
                  className="flex flex-col gap-3"
                >
                  <StepHeader
                    step={2}
                    intent={intent}
                    onBack={() => setMode("step1")}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="sr-only" htmlFor="cta-company">
                      Company
                    </label>
                    <input
                      id="cta-company"
                      name="company"
                      placeholder="Company"
                      className={fieldClass}
                    />
                    <label className="sr-only" htmlFor="cta-jobtitle">
                      Job title
                    </label>
                    <input
                      id="cta-jobtitle"
                      name="jobTitle"
                      placeholder="Job title"
                      className={fieldClass}
                    />
                  </div>
                  <label className="sr-only" htmlFor="cta-usecase">
                    Select use case
                  </label>
                  <select
                    id="cta-usecase"
                    name="usecase"
                    defaultValue=""
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select use case
                    </option>
                    {leadForm.useCases.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-genii-red transition hover:bg-white/90"
                  >
                    Request Demo
                  </button>
                  <p className="flex items-center gap-1.5 text-xs text-white/80">
                    <ShieldCheck aria-hidden className="size-3.5 shrink-0" />
                    {leadForm.privacy}
                  </p>
                </motion.form>
              )}

              {mode === "done" && (
                <motion.div
                  key="done"
                  {...slide}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 className="size-8 shrink-0" />
                  <div>
                    <p className="text-sm font-bold">Thank you</p>
                    <p className="text-sm text-white/90">
                      A Genii expert will be in touch shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Back link, step counter and the button the visitor originally clicked. */
function StepHeader({
  step,
  intent,
  onBack,
}: {
  step: 1 | 2;
  intent: string;
  onBack: () => void;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-white/80 transition hover:text-white"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </button>
      <span className="text-white/60">·</span>
      <span>{intent}</span>
      <span className="text-white/60">·</span>
      <span className="text-white/80">Step {step} of 2</span>
    </div>
  );
}
