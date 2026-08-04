"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";

type Mode = "cta" | "form" | "done";

const fieldClass =
  "h-11 w-full rounded-full bg-white px-4 text-sm text-genii-charcoal outline-none placeholder:text-muted-foreground focus:ring-3 focus:ring-white/40 sm:w-44";

/**
 * Closing CTA band. Clicking "Book a Demo" or "Talk to an Expert" slides the
 * buttons out and a compact name + email form in. Submitting is a placeholder
 * (no back-end yet — lead routing is a pending decision, see docs/TRACKING_PLAN).
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
    setMode("form");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMode("done");
  }

  return (
    <div id="lead-form" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pt-14 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] genii-gradient px-6 py-10 sm:px-12 sm:py-12">
        <div
          aria-hidden
          className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">{copy}</p>
          </div>

          {/* Swappable action area */}
          <div className="w-full shrink-0 md:w-auto">
            <AnimatePresence mode="wait" initial={false}>
              {mode === "cta" && (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-3 sm:flex-row"
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

              {mode === "form" && (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <button
                      type="button"
                      onClick={() => setMode("cta")}
                      className="inline-flex items-center gap-1 text-white/80 hover:text-white"
                    >
                      <ArrowLeft className="size-3.5" />
                      Back
                    </button>
                    <span className="text-white/60">·</span>
                    <span>{intent}</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
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
                    <button
                      type="submit"
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-genii-red transition hover:bg-white/90"
                    >
                      Submit
                    </button>
                  </div>
                </motion.form>
              )}

              {mode === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
