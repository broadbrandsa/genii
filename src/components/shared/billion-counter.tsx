"use client";

import { useEffect, useRef, useState } from "react";

function format(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

/**
 * Counts up to one billion (shown as the full number, e.g. 1,000,000,000) when
 * it scrolls into view. Only this number animates — surrounding copy is static.
 * Honors prefers-reduced-motion.
 */
export function BillionCounter({
  target = 1_000_000_000,
  duration = 1800,
}: {
  target?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: skip the count, show the final value (next frame).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDisplay(format(target)));
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    let started = false;
    const run = (start: number) => (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(eased * target));
      if (t < 1) raf = requestAnimationFrame(run(start));
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            raf = requestAnimationFrame((now) => run(now)(now));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return <span ref={ref}>{display}</span>;
}
