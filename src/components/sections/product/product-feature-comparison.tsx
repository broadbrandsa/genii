import { Check, Minus } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { featureMatrix } from "@/content/products";

const tiers = [
  { key: "core", label: "Core" },
  { key: "indicate", label: "Indicate" },
  { key: "connect", label: "Connect" },
  { key: "ultra", label: "Ultra" },
] as const;

export function ProductFeatureComparison() {
  return (
    <Section id="comparison">
      <Container>
        <SectionHeading
          eyebrow="Detailed Feature Comparison"
          title="Full capability matrix"
          subtitle="For buyers who want operational or procurement detail. Capabilities accumulate as you move up the journey."
        />

        <div className="mt-12 overflow-x-auto rounded-3xl border border-border/60">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="sticky left-0 z-10 bg-muted/60 px-5 py-4 text-left font-bold">
                  Capability
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.key}
                    className="w-28 px-2 py-4 text-center font-bold"
                  >
                    {t.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((row) => (
                <tr
                  key={row.capability}
                  className="group/row border-t border-border/50 transition-colors hover:bg-genii-orange/[0.06]"
                >
                  <td className="sticky left-0 z-10 max-w-md bg-background px-5 py-3.5 font-medium text-foreground/90 transition-colors group-hover/row:bg-genii-orange/[0.06]">
                    {row.capability}
                  </td>
                  {tiers.map((t) => {
                    const on = row[t.key];
                    return (
                      <td key={t.key} className="px-2 py-3.5 text-center">
                        {on ? (
                          <Check
                            aria-label="Included"
                            className="mx-auto size-4.5 text-genii-red"
                          />
                        ) : (
                          <Minus
                            aria-label="Not included"
                            className="mx-auto size-4 text-muted-foreground/40"
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
