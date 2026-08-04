"use client";

import {
  type CSSProperties,
  type ElementType,
  type PointerEvent,
  type ReactNode,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps content in a container that paints a soft radial brand glow that
 * follows the cursor (via CSS vars --spot-x / --spot-y, styled in globals.css).
 * Pointer-only enhancement — no effect on touch/keyboard, safe under reduced
 * motion. Give it a rounded/bordered surface; the glow inherits the radius and
 * sits behind the content.
 */
export function Spotlight({
  children,
  className,
  as,
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  style?: CSSProperties;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      id={id}
      style={style}
      onPointerMove={onPointerMove}
      className={cn("spotlight", className)}
    >
      {children}
    </Tag>
  );
}
