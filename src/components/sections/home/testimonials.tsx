"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { testimonials as data } from "@/content/home";
import { cn } from "@/lib/utils";

const AUTO_PLAY_INTERVAL = 8000;

/**
 * Minimal editorial testimonial carousel: one large serif pull-quote at a time
 * with a right-aligned attribution rule, arrows and dot indicators.
 * Auto-advances, pauses on hover/focus, and holds still under reduced motion.
 */
export function Testimonials() {
  const reduce = useReducedMotion();
  const items = data.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex(((next % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => go(index + 1, 1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [go, index, paused, reduce]);

  const active = items[index];

  return (
    <Section id="testimonials">
      <Container>
        {/* Full container width, matching the comparison table above. This was
            max-w-3xl for a tighter reading measure, but sitting narrower than the
            neighbouring section read as a misalignment. */}
        <div
          className="w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Quote */}
          <div className="relative min-h-[15rem] sm:min-h-[13rem]">
            {/* Keyed remount rather than AnimatePresence: the new quote mounts
                immediately, so content never waits on an exit animation to
                finish (which can stall in throttled/background tabs). */}
              <motion.figure
                key={active.name}
                initial={reduce ? false : { opacity: 0, x: dir * 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="text-2xl font-medium leading-[1.35] tracking-tight text-foreground sm:text-3xl sm:leading-[1.3]">
                  <span
                    aria-hidden
                    className="mr-0.5 align-top text-xl text-muted-foreground/60 sm:text-2xl"
                  >
                    &ldquo;
                  </span>
                  {active.quote}
                  <span
                    aria-hidden
                    className="ml-0.5 align-top text-xl text-muted-foreground/60 sm:text-2xl"
                  >
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-end gap-4 text-sm">
                  <span
                    aria-hidden
                    className="h-px w-12 shrink-0 bg-border sm:w-16"
                  />
                  <span>
                    <span className="font-semibold text-foreground">
                      {active.name}
                    </span>
                    <span className="text-muted-foreground">
                      , {active.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between border-t border-border/60 pt-6">
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Testimonials">
              {items.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}: ${t.name}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 genii-gradient"
                      : "w-1.5 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-genii-orange/60 hover:text-genii-red"
              >
                <ArrowLeft aria-hidden className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-genii-orange/60 hover:text-genii-red"
              >
                <ArrowRight aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
