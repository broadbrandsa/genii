import {
  ArrowDownToLine,
  ClipboardCheck,
  Link2,
  Network,
  Workflow,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { howItWorks } from "@/content/products";

const icons: LucideIcon[] = [
  ArrowDownToLine,
  ClipboardCheck,
  Link2,
  Network,
  Workflow,
  BarChart3,
];

export function ProductHowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="How Genii Works"
          title="Ingest → Assess → Evidence → Diagnose → Act → Report"
        />

        <ol className="relative mx-auto mt-14 max-w-3xl">
          {/* connecting rail */}
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-genii-red via-genii-orange to-genii-gold"
          />
          {howItWorks.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={step.step} className="relative pb-10 last:pb-0">
                <Reveal delay={(i % 3) * 80}>
                  <div className="flex items-start gap-5">
                    <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl genii-gradient text-white shadow-lg shadow-genii-orange/25">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <div className="card-lift flex-1 rounded-2xl border border-border/60 bg-background p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-bold">{step.step}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
