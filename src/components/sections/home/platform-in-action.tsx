import { type RefObject } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { showcase as data } from "@/content/home";

// Branded placeholder visual — a faux product surface until real imagery lands.
function PlaceholderVisual({
  label,
  innerRef,
}: {
  label: string;
  innerRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={innerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/60 bg-card genii-glow"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(70% 70% at 25% 15%, rgba(243,112,53,0.18), transparent 60%), radial-gradient(70% 70% at 90% 90%, rgba(167,40,143,0.16), transparent 60%)",
        }}
      />
      <div aria-hidden className="bg-dot-grid absolute inset-0 opacity-40" />
      {/* faux window chrome */}
      <div className="absolute inset-4 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-genii-red/70" />
          <span className="size-2.5 rounded-full bg-genii-gold/70" />
          <span className="size-2.5 rounded-full bg-genii-orange/70" />
        </div>
        <div className="flex flex-col gap-2.5 p-4">
          <div className="h-2.5 w-1/3 rounded-full genii-gradient" />
          <div className="h-2 w-4/5 rounded-full bg-muted" />
          <div className="h-2 w-3/5 rounded-full bg-muted" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-genii-orange/10" />
            <div className="h-12 rounded-lg bg-genii-pink/10" />
            <div className="h-12 rounded-lg bg-genii-purple/10" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
        {label} · placeholder
      </span>
    </div>
  );
}

/**
 * "Platform in action" — three alternating image/text rows, shown directly
 * below the Genii Intelligence Layer diagram (no section heading). The
 * connecting beam that threads behind the placeholders is drawn by the parent
 * <IntelligenceFlow>, which supplies `phRefs`.
 */
export function PlatformInAction({
  phRefs,
}: {
  phRefs: RefObject<HTMLDivElement | null>[];
}) {
  return (
    <Container className="pt-4">
      <div className="flex flex-col gap-16 sm:gap-24">
        {data.rows.map((row, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={row.title}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={flipped ? "lg:order-2" : undefined}>
                  <span className="inline-block rounded-full bg-genii-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-genii-red">
                    {row.kicker}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {row.copy}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {row.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-sm font-medium"
                      >
                        <span className="flex size-5 items-center justify-center rounded-full bg-genii-red/10">
                          <Check className="size-3 text-genii-red" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={flipped ? "lg:order-1" : undefined}>
                  <PlaceholderVisual label={row.placeholder} innerRef={phRefs[i]} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
