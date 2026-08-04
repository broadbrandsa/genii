"use client";

import { createRef, useMemo, useRef, type RefObject } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  FileText,
  AudioLines,
  Sparkles,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { intelligenceVisual as data } from "@/content/home";

const inputIcons = [
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  FileText,
  AudioLines,
  Sparkles,
];

/**
 * Genii Intelligence Layer visual.
 * Flow: Inputs (top) → Genii Intelligence Layer (centre), connected by animated
 * brand beams (Magic UI AnimatedBeam) that flow toward the hub. Beams show on
 * md+; the layout stacks cleanly on smaller screens.
 */
export function IntelligenceLayer({
  centerRef: externalCenterRef,
}: {
  /** Optional external ref for the hub circle, so a parent can draw a beam
   *  from it into content that lives outside this component. */
  centerRef?: RefObject<HTMLDivElement | null>;
} = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const internalCenterRef = useRef<HTMLDivElement>(null);
  const centerRef = externalCenterRef ?? internalCenterRef;
  const inputRefs = useMemo(
    () => data.inputs.map(() => createRef<HTMLDivElement>()),
    [],
  );

  return (
    <div ref={containerRef} className="relative px-2 py-4 sm:px-4">
      {/* soft ambient wash behind the hub */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(40% 35% at 50% 45%, rgba(243,112,53,0.10), transparent 70%)",
        }}
      />

      {/* Animated beams (md+ only) — behind the nodes. `reverse` on the
          right-half inputs so every line's light travels toward the hub. */}
      {inputRefs.map((ref, i) => (
        <AnimatedBeam
          key={`in-${i}`}
          className="hidden md:block"
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          reverse={i > (inputRefs.length - 1) / 2}
          duration={4 + (i % 3)}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Inputs — top (circular icon nodes) */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 sm:gap-x-7">
            {data.inputs.map((label, i) => {
              const Icon = inputIcons[i % inputIcons.length];
              return (
                <div
                  key={label}
                  className="flex w-20 flex-col items-center gap-2 sm:w-24"
                >
                  <div
                    ref={inputRefs[i]}
                    className="z-10 flex size-14 items-center justify-center rounded-full border border-border/70 bg-background shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-genii-orange/60 hover:shadow-md"
                  >
                    <Icon aria-hidden className="size-6 text-genii-orange" />
                  </div>
                  <span className="text-center text-[11px] font-medium leading-tight text-foreground/80">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hub — centre */}
        <div className="flex flex-col items-center">
          <div
            ref={centerRef}
            className="relative flex aspect-square w-44 items-center justify-center sm:w-52"
          >
            {/* Glowing shadow halo behind the hub */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full genii-gradient-spectrum blur-2xl animate-halo-pulse"
            />
            {/* Animated gradient border ring */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full animate-spin-slow shadow-[0_0_18px_-8px_rgba(237,27,47,0.35)]"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--genii-red), var(--genii-orange), var(--genii-gold), var(--genii-pink), var(--genii-purple), var(--genii-red))",
              }}
            />
            <div className="absolute inset-[6px] rounded-full bg-card" />
            <div className="absolute inset-[6px] rounded-full genii-gradient opacity-[0.06]" />
            <div className="relative z-10 px-5 text-center">
              <p className="text-base font-bold leading-tight genii-gradient-text sm:text-lg">
                {data.center.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
