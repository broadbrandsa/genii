"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Click-to-load YouTube embed. Shows the video thumbnail with a branded play
 * button; the iframe is only injected (and starts playing) once the user clicks,
 * so no third-party player loads on initial page render.
 *
 * `bleed` drops the rounded corners / border / glow for edge-to-edge use.
 */
export function YouTubeEmbed({
  id,
  title,
  bleed = false,
  poster,
}: {
  id: string;
  title: string;
  bleed?: boolean;
  /** Custom poster image; falls back to the YouTube thumbnail. */
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const frame = cn(
    "relative aspect-video w-full overflow-hidden",
    bleed ? "" : "rounded-3xl border border-border/60 genii-glow",
  );

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerated-history; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={title}
      className={cn(
        "group flex items-center justify-center bg-genii-charcoal",
        frame,
      )}
    >
      {/* Real video thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-150 group-hover:opacity-90"
      />
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 70% at 30% 20%, rgba(237,27,47,0.35), transparent 60%), radial-gradient(70% 70% at 90% 90%, rgba(167,40,143,0.30), transparent 60%)",
        }}
      />
      <span className="relative flex size-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-150 group-hover:scale-105">
        <Play aria-hidden className="ml-1 size-6 fill-genii-red text-genii-red" />
      </span>
    </button>
  );
}
