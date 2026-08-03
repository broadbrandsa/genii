import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import { realResults as data } from "@/content/home";

export function RealResults() {
  return (
    <Section id="real-results" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Outcomes, not dashboards"
          title={data.heading}
          subtitle={data.subheading}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <Reveal key={item.area} delay={(i % 3) * 80}>
              <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background p-6">
                <div className="flex items-baseline gap-2">
                  <CountUp
                    value={item.metric}
                    className="text-4xl font-extrabold genii-gradient-text tabular-nums"
                  />
                  <span className="text-sm font-semibold text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.area}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span
                  aria-hidden
                  className="mt-5 block h-1 w-8 rounded-full genii-gradient transition-all duration-300 group-hover:w-16"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
