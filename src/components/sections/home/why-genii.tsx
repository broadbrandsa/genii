import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { iconMap } from "@/components/shared/icon-map";
import { whyGenii as data } from "@/content/home";

export function WhyGenii() {
  const normal = data.cards.filter((_, i) => i !== 4);
  const featured = data.cards[4]; // "1B Interactions Analysed"
  const FeaturedIcon = iconMap[featured.icon];

  return (
    <Section id="why-genii">
      <Container>
        <SectionHeading
          eyebrow="Why Genii?"
          title="Built to be trusted at scale"
          subtitle="Five reasons contact-centre leaders choose Genii to turn interactions into intelligence."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {normal.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.title} delay={i * 70}>
                <div className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6">
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
                </div>
              </Reveal>
            );
          })}

          {/* Flagship stat — tall feature tile */}
          <Reveal
            delay={120}
            className="sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2"
          >
            <div className="genii-gradient card-lift group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl transition-transform duration-300 group-hover:scale-125"
              />
              <span className="relative flex size-12 items-center justify-center rounded-2xl bg-white/15">
                {FeaturedIcon && (
                  <FeaturedIcon aria-hidden className="size-6 text-white" />
                )}
              </span>
              <div className="relative mt-8">
                <h3 className="text-4xl font-extrabold leading-none sm:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">
                  {featured.copy}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
