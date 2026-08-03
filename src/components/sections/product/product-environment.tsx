import { Check } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { environment as data } from "@/content/products";

export function ProductEnvironment() {
  return (
    <Section className="bg-muted/40 !py-16">
      <Container>
        <SectionHeading title={data.heading} subtitle={data.copy} />
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {data.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background px-4 py-4 text-sm"
            >
              <Check
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-genii-orange"
              />
              <span className="text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
