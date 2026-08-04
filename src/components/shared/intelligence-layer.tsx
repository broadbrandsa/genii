"use client";

import { useRef, type RefObject } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  FileText,
  AudioLines,
  Sparkles,
} from "lucide-react";
import { OrbitRotation, type OrbitIcon } from "@/components/ui/orbit-rotation";
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

/** Channel names come from content; icons are paired positionally. */
const orbitIcons: OrbitIcon[] = data.inputs.map((name, i) => ({
  name,
  Icon: inputIcons[i % inputIcons.length],
}));

/**
 * Genii Intelligence Layer visual — every input channel orbiting the hub.
 *
 * This replaced a static fan of inputs joined to the hub by animated beams. The
 * orbit says the same thing (all these channels feed one layer) in less vertical
 * space, and it doesn't depend on measuring node positions, which was fragile
 * whenever the grid reflowed.
 *
 * Channel names can't sit on the orbiting nodes without colliding, so each node
 * reveals its own name on hover or focus. The name is also the node's accessible
 * label, so it's available without hovering.
 */
export function IntelligenceLayer({
  centerRef: externalCenterRef,
}: {
  /** Optional external ref for the hub circle, so a parent can draw a beam
   *  from it into content that lives outside this component. */
  centerRef?: RefObject<HTMLDivElement | null>;
} = {}) {
  const internalCenterRef = useRef<HTMLDivElement>(null);
  const centerRef = externalCenterRef ?? internalCenterRef;

  return (
    <div className="relative px-2 py-4 sm:px-4">
      {/* soft ambient wash behind the hub */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(40% 35% at 50% 45%, rgba(243,112,53,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Orbit. Rings sit well clear of the 13rem hub — 22rem and 31rem — so
            the diagram is scaled down on narrow screens rather than reflowed.
            `overflow-x-clip` stops the rings widening the page while leaving the
            vertical axis visible, so hover labels aren't cut off. */}
        <div className="flex h-[22rem] w-full items-center justify-center overflow-x-clip sm:h-[31rem] lg:h-[35rem]">
          <div className="origin-center scale-[0.62] sm:scale-90 lg:scale-100">
            <OrbitRotation
              icons={orbitIcons}
              orbitCount={2}
              innerOrbit={22}
              orbitGap={9}
              centerRef={centerRef}
              center={
                <div className="relative flex aspect-square w-44 items-center justify-center sm:w-52">
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
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
