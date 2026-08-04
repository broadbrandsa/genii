"use client";

import { createRef, useMemo, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { IntelligenceLayer } from "@/components/shared/intelligence-layer";
import { PlatformInAction } from "@/components/sections/home/platform-in-action";
import { RealResults } from "@/components/sections/home/real-results";
import { showcase } from "@/content/home";

/**
 * Every beam runs `orientation="vertical"`: the highlight sweeps down the shared
 * container rather than across each beam, so one wave travels down the whole
 * chain, lighting each segment as it passes.
 *
 * Wraps the Genii Intelligence Layer diagram, the "platform in action" rows and
 * the Real Results section in one relative container so a single animated beam
 * can flow from the hub circle, behind each placeholder, and into the Real
 * Results heading. Beams render behind the content (md+).
 */
export function IntelligenceFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const phRefs = useMemo(
    () => showcase.rows.map(() => createRef<HTMLDivElement>()),
    [],
  );

  return (
    <div ref={containerRef} className="relative">
      {/* hub → first placeholder */}
      <AnimatedBeam
        className="hidden md:block"
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={phRefs[0]}
        orientation="vertical"
        duration={5}
      />
      {/* placeholder → next placeholder */}
      {phRefs.slice(1).map((ref, i) => (
        <AnimatedBeam
          key={i}
          className="hidden md:block"
          containerRef={containerRef}
          fromRef={phRefs[i]}
          toRef={ref}
          orientation="vertical"
          duration={5}
        />
      ))}
      {/* last placeholder → the 1B Interactions Analysed figure */}
      <AnimatedBeam
        className="hidden md:block"
        containerRef={containerRef}
        fromRef={phRefs[phRefs.length - 1]}
        toRef={statRef}
        orientation="vertical"
        duration={5}
      />

      <div className="relative z-10">
        <IntelligenceLayer centerRef={centerRef} />
        <PlatformInAction phRefs={phRefs} />
        <RealResults statRef={statRef} />
      </div>
    </div>
  );
}
