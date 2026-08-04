"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven word-by-word highlight (Apple/Linear style). The section is
 * taller than the viewport; the text sticks to centre while it scrolls past,
 * and each word brightens in sequence based on scroll progress (0 → 1).
 * Respects prefers-reduced-motion by rendering fully lit with no scroll driver.
 */
export function ScrollRevealText({
  text,
  eyebrow,
  className,
  children,
  aside,
}: {
  text: string;
  eyebrow?: string;
  className?: string;
  /** Rendered inside the sticky viewport, beneath the animating text. */
  children?: ReactNode;
  /** Rendered in a right-hand column beside the text (lg+). */
  aside?: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total <= 0 ? (r.top <= 0 ? 1 : 0) : -r.top / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const effective = reduced ? 1 : progress;

  return (
    <div ref={sectionRef} className={cn("relative h-[200vh]", className)}>
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center py-16">
        <div
          className={cn(
            "mx-auto w-full px-5 sm:px-8",
            aside
              ? "max-w-6xl lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12"
              : "max-w-5xl",
          )}
        >
          <div>
          {eyebrow && (
            <p
              className={cn(
                "mb-6 text-xs font-bold uppercase tracking-[0.2em] genii-gradient-text",
                aside ? "text-center lg:text-left" : "text-center",
              )}
            >
              {eyebrow}
            </p>
          )}
          <p
            className={cn(
              "text-2xl font-bold leading-snug tracking-tight sm:text-4xl md:leading-[1.12]",
              aside ? "text-center md:text-4xl lg:text-left" : "text-center md:text-5xl",
            )}
          >
            {words.map((word, i) => {
              // Each word lights within a small moving window of progress.
              const start = i / words.length;
              const end = (i + 1) / words.length;
              const wordP =
                effective <= start
                  ? 0
                  : effective >= end
                    ? 1
                    : (effective - start) / (end - start);
              return (
                <span
                  key={i}
                  style={{ opacity: 0.18 + 0.82 * wordP }}
                  className="transition-opacity duration-150"
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
          {children && <div className="mt-10 sm:mt-12">{children}</div>}
          </div>
          {aside && <div className="mt-10 lg:mt-0">{aside}</div>}
        </div>
      </div>
    </div>
  );
}
