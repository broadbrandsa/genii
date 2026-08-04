"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/home";

/**
 * Two-phase hero headline:
 *   1. "We don't just score conversations." animates in, holds, then fades out.
 *   2. "We turn QA into … business intelligence." animates in and stays.
 *
 * Both lines are stacked in the same grid cell so the container is always sized
 * to the (taller) second line — no layout shift during the swap. Under
 * prefers-reduced-motion both lines are shown statically, so no message is lost.
 */
export function HeroHeadline() {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<"first" | "second">("first");

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setStage("second"), 1900);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <h1 className="text-4xl font-extrabold leading-[1.14] tracking-tight text-white sm:text-5xl md:text-6xl">
        {hero.headline}{" "}
        <span className="genii-gradient-text pb-[0.12em]">{hero.statement}</span>
      </h1>
    );
  }

  return (
    <h1 className="grid text-4xl font-extrabold leading-[1.14] tracking-tight sm:text-5xl md:text-6xl">
      <motion.span
        /* text-white: the hero ground is graded to black, and this phase has no
           gradient fill of its own to carry it. */
        className="[grid-area:1/1] pb-[0.12em] text-white"
        initial={{ opacity: 0, y: 16 }}
        animate={
          stage === "first"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -16 }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden={stage !== "first"}
      >
        {hero.headline}
      </motion.span>
      <motion.span
        className="[grid-area:1/1] genii-gradient-text-anim pb-[0.12em]"
        initial={{ opacity: 0, y: 16 }}
        animate={
          stage === "second"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
        }
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: stage === "second" ? 0.15 : 0,
        }}
        aria-hidden={stage !== "second"}
      >
        {hero.statement}
      </motion.span>
    </h1>
  );
}
