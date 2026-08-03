import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { useCaseGroups } from "@/content/products";

export function ProductUseCases() {
  return (
    <Section id="use-cases" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Example Use Cases"
          title="Turn the product story into commercial value"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {useCaseGroups.map((group) => (
            <div
              key={group.title}
              className="card-lift rounded-3xl border border-border/60 bg-background p-6"
            >
              <h3 className="text-base font-bold leading-snug">{group.title}</h3>
              <span className="mt-3 block h-1 w-10 rounded-full genii-gradient" />
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="mt-1 size-3.5 shrink-0 text-genii-orange" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
