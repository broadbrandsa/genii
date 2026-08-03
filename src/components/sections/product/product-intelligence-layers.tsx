import { Container, Section, SectionHeading } from "@/components/shared/section";
import { intelligenceLayers } from "@/content/products";

const tierLabels = ["Core", "Indicate", "Connect", "Ultra"];

function Concentration({ level }: { level: number }) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${level} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="size-2 rounded-full"
          style={{
            backgroundColor:
              i < level
                ? "var(--genii-red)"
                : "color-mix(in srgb, var(--genii-charcoal) 15%, transparent)",
            opacity: i < level ? 0.4 + (level / 5) * 0.6 : 1,
          }}
        />
      ))}
    </div>
  );
}

export function ProductIntelligenceLayers() {
  return (
    <Section id="intelligence-layers">
      <Container>
        <SectionHeading
          eyebrow="Intelligence Layers"
          title="Intelligence deepens through the stack"
          subtitle="Genii turns interactions into intelligence across agents, operations, business, customers and strategic decision-making. Intelligence deepens through the product stack rather than switching on and off."
        />

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[720px] overflow-hidden rounded-3xl border border-border/60">
            {/* header */}
            <div className="grid grid-cols-[1.8fr_repeat(4,0.7fr)] bg-muted/60">
              <div className="px-5 py-4 text-sm font-bold">Layer</div>
              {tierLabels.map((t) => (
                <div
                  key={t}
                  className="px-2 py-4 text-center text-sm font-bold"
                >
                  {t}
                </div>
              ))}
            </div>
            {/* rows */}
            {intelligenceLayers.map((row) => (
              <div
                key={row.layer}
                className="grid grid-cols-[1.8fr_repeat(4,0.7fr)] border-t border-border/60"
              >
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold">{row.layer}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {row.surfaces}
                  </p>
                </div>
                {row.concentration.map((lvl, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-2 py-4"
                  >
                    <Concentration level={lvl} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Ultra is the only full Strategic Intelligence layer. Earlier tiers may
          surface strategic signals; Ultra quantifies, compares and packages them
          for executive-level decision-making.
        </p>
      </Container>
    </Section>
  );
}
