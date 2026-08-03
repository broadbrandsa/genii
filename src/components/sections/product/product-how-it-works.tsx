import { Container, Section, SectionHeading } from "@/components/shared/section";
import { howItWorks } from "@/content/products";

export function ProductHowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="How Genii Works"
          title="Ingest → Assess → Evidence → Diagnose → Act → Report"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step, i) => (
            <div
              key={step.step}
              className="card-lift group relative rounded-3xl border border-border/60 bg-background p-6"
            >
              <span className="text-5xl font-extrabold leading-none text-genii-red/10 transition-colors duration-200 group-hover:text-genii-red/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{step.step}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
