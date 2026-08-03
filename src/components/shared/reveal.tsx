"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper. Fades + slides its children in when they enter the
 * viewport. Motion is fully disabled under prefers-reduced-motion via the
 * `.reveal` styles in globals.css (content stays visible).
 *
 * `delay` staggers grouped items; `as` lets it render semantic wrappers.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal immediately (next frame) if IO is unavailable, or if the element
    // is already within the viewport on mount — so above-the-fold content
    // never waits on, or depends on, an observer.
    const rect = el.getBoundingClientRect();
    const showNow =
      typeof IntersectionObserver === "undefined" ||
      (rect.top < window.innerHeight && rect.bottom > 0);
    if (showNow) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
