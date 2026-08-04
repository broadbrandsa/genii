"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EyeOff, HelpCircle, Radio, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselItem = {
  id: string;
  label: string;
  title: string;
  problem: string;
  need: string;
  image: string;
  icon: string;
};

const icons: Record<string, LucideIcon> = { EyeOff, HelpCircle, Radio };

const AUTO_PLAY_INTERVAL = 6000;
const ITEM_HEIGHT = 68;

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Split carousel: rotating label chips on the left, stacked image cards on the
 * right. Adapted from the Magic-UI-style feature carousel to Genii's brand,
 * using framer-motion and lucide (already in the project) rather than adding
 * motion/react + hugeicons. Auto-advances, pauses on hover, and holds still
 * under prefers-reduced-motion.
 */
export function FeatureCarousel({ items }: { items: readonly CarouselItem[] }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentIndex = ((step % items.length) + items.length) % items.length;

  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [nextStep, paused, reduce]);

  const goTo = (index: number) => {
    const diff = (index - currentIndex + items.length) % items.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  const cardStatus = (index: number) => {
    const len = items.length;
    let d = index - currentIndex;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    return "hidden";
  };

  return (
    <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[2.5rem] border border-border/50 lg:min-h-[540px] lg:flex-row">
      {/* Left — rotating labels on the brand gradient */}
      <div className="genii-gradient relative z-30 flex min-h-[220px] w-full flex-col items-center justify-center overflow-hidden px-6 sm:px-10 lg:h-auto lg:w-[42%] lg:items-start lg:px-12">
        <div
          aria-hidden
          className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-40 h-14 bg-gradient-to-b from-genii-red/90 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-14 bg-gradient-to-t from-genii-gold/70 to-transparent"
        />
        <div className="relative z-20 flex h-[220px] w-full items-center justify-center lg:h-full lg:justify-start">
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const dist = wrap(
              -(items.length / 2),
              items.length / 2,
              index - currentIndex,
            );
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.id}
                style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                animate={{
                  y: dist * ITEM_HEIGHT,
                  opacity: 1 - Math.abs(dist) * 0.4,
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 90, damping: 22 }
                }
                className="absolute flex items-center"
              >
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-full border px-5 py-3 text-left transition-colors duration-500 sm:px-7",
                    isActive
                      ? "z-10 border-white bg-white text-genii-red"
                      : "border-white/25 bg-transparent text-white/70 hover:border-white/50 hover:text-white",
                  )}
                >
                  {Icon && <Icon aria-hidden className="size-4 shrink-0" />}
                  <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide sm:text-sm">
                    {item.label}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right — stacked cards */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden border-t border-border/40 bg-muted/40 px-6 py-14 sm:px-10 lg:border-l lg:border-t-0">
        <div className="relative flex aspect-[4/5] w-full max-w-[420px] items-center justify-center">
          {items.map((item, index) => {
            const status = cardStatus(index);
            const isActive = status === "active";
            const isPrev = status === "prev";
            const isNext = status === "next";
            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: isActive ? 0 : isPrev ? -70 : isNext ? 70 : 0,
                  scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                  opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                  rotate: isPrev ? -3 : isNext ? 3 : 0,
                  zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 25 }
                }
                className="absolute inset-0 origin-center overflow-hidden rounded-[2rem] border-4 border-background bg-background shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className={cn(
                    "object-cover transition-all duration-700",
                    isActive ? "blur-0 grayscale-0" : "blur-[2px] grayscale",
                  )}
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/92 via-black/65 to-transparent p-6 pt-28 sm:p-7"
                    >
                      <h3 className="text-lg font-bold leading-tight text-white drop-shadow sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-snug text-white/80 sm:text-sm">
                        {item.problem}
                      </p>
                      <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-genii-gold">
                          What you actually need
                        </p>
                        <p className="mt-1 text-xs font-medium leading-snug text-white">
                          {item.need}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
