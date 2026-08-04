import { Container, Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { iconMap } from "@/components/shared/icon-map";
import { whyGenii as data } from "@/content/home";

// The four credibility blocks (the "1B Interactions Analysed" stat now lives in
// the Real Results section, so it's excluded here).
const cards = data.cards.filter((c) => c.title !== "1B Interactions Analysed");

export function WhyGenii() {
  return (
    <Section id="why-genii">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.title} delay={i * 70}>
                <Spotlight className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-genii-red/10 transition-colors duration-150 group-hover:bg-genii-red/15">
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="size-5.5 text-genii-red transition-transform duration-150 group-hover:scale-110"
                      />
                    )}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.copy}
                  </p>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
