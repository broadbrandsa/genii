"use client";

import type { ComponentType, ReactNode, RefObject } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** A labelled icon node. Hoverable, focusable, named to screen readers. */
export interface OrbitIcon {
  Icon: ComponentType<{ className?: string }>;
  /** Accessible name for the node. Exposed to screen readers. */
  name: string;
}

/**
 * A photo node. Purely decorative — no label, hidden from screen readers and
 * not focusable, because a stock portrait has no name or role to state.
 */
export interface OrbitPhoto {
  src: string;
  /** Key only; never rendered or announced. */
  id: string;
}

export type OrbitNode = OrbitIcon | OrbitPhoto;

function isPhoto(node: OrbitNode): node is OrbitPhoto {
  return "src" in node;
}

interface OrbitRotationProps {
  icons: OrbitNode[];
  /** How many concentric rings to spread the icons across. */
  orbitCount?: number;
  /** Diameter of the innermost ring, in rem. */
  innerOrbit?: number;
  /** Extra diameter added per ring, in rem. */
  orbitGap?: number;
  /** Whatever sits in the middle — for Genii, the Intelligence Layer hub. */
  center: ReactNode;
  /** Forwarded to the hub element so a parent can anchor a beam to it. */
  centerRef?: RefObject<HTMLDivElement | null>;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const iconSizeClasses = {
  sm: "size-5",
  md: "size-6",
  lg: "size-7",
} as const;

/**
 * Concentric rings of icons rotating around a centre node.
 *
 * Two deviations from the usual pattern, both deliberate:
 * - Each icon counter-rotates at its ring's speed, so the glyphs stay upright
 *   instead of tumbling as the ring turns.
 * - Rings alternate direction, which reads as depth rather than one rigid dial.
 *
 * Motion is dropped entirely under `prefers-reduced-motion`; the rings and
 * icons still render, they just hold still.
 */
export function OrbitRotation({
  icons,
  orbitCount = 2,
  innerOrbit = 15,
  orbitGap = 7,
  center,
  centerRef,
  className,
  size = "md",
}: OrbitRotationProps) {
  const reduceMotion = useReducedMotion();
  const perOrbit = Math.ceil(icons.length / orbitCount);

  return (
    <div
      className={cn("orbit relative flex items-center justify-center", className)}
    >
      <div className="relative flex items-center justify-center">
        {/* Centre */}
        <div ref={centerRef} className="relative z-10">
          {center}
        </div>

        {Array.from({ length: orbitCount }).map((_, orbitIdx) => {
          const ringIcons = icons.slice(
            orbitIdx * perOrbit,
            orbitIdx * perOrbit + perOrbit,
          );
          if (ringIcons.length === 0) return null;

          const diameter = `${innerOrbit + orbitGap * orbitIdx}rem`;
          const duration = 34 + orbitIdx * 14;
          // Alternate direction per ring; the icons counter-rotate to match.
          const direction = orbitIdx % 2 === 0 ? "normal" : "reverse";
          const counter = direction === "normal" ? "reverse" : "normal";
          const angleStep = (2 * Math.PI) / ringIcons.length;
          // Offset each ring so icons don't stack up on one radius.
          const offset = (orbitIdx * angleStep) / 2 - Math.PI / 2;

          return (
            <div
              key={orbitIdx}
              /* pointer-events-none matters: each ring is a full square box, so
                 the outer ring would otherwise sit on top of the inner ring's
                 icons and swallow their hover. Only the nodes take the pointer. */
              className="orbit-anim pointer-events-none absolute rounded-full border border-dashed border-genii-orange/25"
              style={{
                width: diameter,
                height: diameter,
                animation: reduceMotion
                  ? undefined
                  : `orbit-spin ${duration}s linear infinite`,
                animationDirection: reduceMotion ? undefined : direction,
              }}
            >
              {ringIcons.map((node, iconIdx) => {
                const angle = iconIdx * angleStep + offset;
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);
                const photo = isPhoto(node);

                return (
                  <div
                    key={photo ? node.id : node.name}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Counter-rotation keeps the glyph — and its label —
                        upright as the ring turns. */}
                    <div
                      className="orbit-anim"
                      style={{
                        animation: reduceMotion
                          ? undefined
                          : `orbit-spin ${duration}s linear infinite`,
                        animationDirection: reduceMotion ? undefined : counter,
                      }}
                    >
                      {photo ? (
                        // Decorative: a stock portrait has no name or role to
                        // announce, so it gets no label and no tab stop. Same
                        // 56px circle as the icon nodes.
                        <div
                          aria-hidden
                          className="relative size-14 overflow-hidden rounded-full border border-border/70 bg-background shadow-sm"
                        >
                          <Image
                            src={node.src}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="orbit-node group pointer-events-auto relative cursor-default"
                          role="img"
                          aria-label={node.name}
                          tabIndex={0}
                        >
                          <div className="flex size-14 items-center justify-center rounded-full border border-border/70 bg-background shadow-sm transition-all duration-150 group-hover:border-genii-orange/60 group-hover:shadow-md group-focus-visible:border-genii-orange/60">
                            <node.Icon
                              aria-hidden
                              className={cn(
                                iconSizeClasses[size],
                                "text-genii-orange",
                              )}
                            />
                          </div>
                          {/* Label on hover/focus. The ring pauses while a node
                              is hovered (see .orbit rules in globals.css), so the
                              label doesn't drift out from under the cursor. */}
                          <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 scale-95 whitespace-nowrap rounded-full bg-genii-charcoal px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-md transition duration-150 ease-linear group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                            {node.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrbitRotation;
