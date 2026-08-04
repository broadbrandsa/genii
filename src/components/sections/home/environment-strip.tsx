import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { iconMap } from "@/components/shared/icon-map";
import { DiscoverCta } from "@/components/sections/home/discover-cta";
import { environmentStrip as data } from "@/content/home";

export function EnvironmentStrip() {
  return (
    <Section className="relative !py-16">
      <Container>
        <SectionHeading title={data.heading} subtitle={data.subheading} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="card-lift group flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-background px-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-genii-orange/10 transition-colors duration-150 group-hover:bg-genii-orange/15">
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="size-4.5 text-genii-orange transition-transform duration-150 group-hover:scale-110"
                      />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Discover routing banner, nested into this section */}
        <div className="mt-6">
          <DiscoverCta />
        </div>
      </Container>
    </Section>
  );
}
