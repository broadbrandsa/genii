"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated metric reveal. Counts the final number in a metric string up from
 * zero when it scrolls into view, preserving any prefix/suffix (e.g. "<5%",
 * "30%+", "40–70%"). Honors prefers-reduced-motion by showing the value at once.
 */
export function CountUp({
  value,
  className,
  duration = 1300,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  const numbers = value.match(/\d+/g);
  const target = numbers ? parseInt(numbers[numbers.length - 1], 10) : null;
  const targetStr = numbers ? numbers[numbers.length - 1] : "";
  const idx = value.lastIndexOf(targetStr);
  const prefix = target !== null ? value.slice(0, idx) : "";
  const suffix = target !== null ? value.slice(idx + targetStr.length) : "";

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Initial display state is already `value`, so under reduced motion there
    // is nothing to animate — leave it as-is.
    if (reduce) return;

    let raf = 0;
    let started = false;
    const run = (start: number) => (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(run(start));
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            raf = requestAnimationFrame((now) => run(now)(now));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
