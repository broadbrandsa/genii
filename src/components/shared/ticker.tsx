import { cn } from "@/lib/utils";

/**
 * Auto-scrolling phrase band. Duplicates the item list so the marquee loops
 * seamlessly; pauses on hover and goes static under prefers-reduced-motion
 * (via .animate-marquee in globals.css). Decorative — hidden from a11y tree.
 */
export function Ticker({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const track = [...items, ...items];
  return (
    <div
      aria-hidden
      className={cn(
        "group relative overflow-hidden border-y border-border/60 bg-genii-charcoal py-4 text-white",
        className,
      )}
    >
      {/* edge-fade only the moving content, keep the band background solid */}
      <div
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-x-8 group-hover:[animation-play-state:paused] sm:gap-x-12">
          {track.map((label, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-x-8 sm:gap-x-12"
            >
              <span className="text-sm font-semibold tracking-wide text-white/90 sm:text-base">
                {label}
              </span>
              <span
                className="size-1.5 shrink-0 rounded-full genii-gradient"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
