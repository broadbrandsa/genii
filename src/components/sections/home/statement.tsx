import { Users, Settings2, Heart, Building2, type LucideIcon } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { SectionImage } from "@/components/shared/section-image";
import { statement, intelligenceTypes } from "@/content/home";

// The four intelligence-layer blocks shown beneath the statement.
const blocks = intelligenceTypes.items;
const blockIcons: Record<string, LucideIcon> = {
  Users,
  Settings2,
  Heart,
  Building2,
};

/**
 * The statement used to run through ScrollRevealText, which lit the copy
 * word-by-word as you scrolled and needed a 200vh sticky scaffold to drive it.
 * The statement now simply reads as a statement, and the section is its own
 * height. Blocks and image keep the site's standard one-shot Reveal on entry.
 */
export function Statement() {
  return (
    <Section id="statement" className="relative">
      <div aria-hidden className="bg-dot-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
          <div>
            <Reveal>
              <Eyebrow>{statement.eyebrow}</Eyebrow>
              <p className="mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-4xl md:leading-[1.12]">
                {statement.text}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
              {blocks.map((card, i) => {
                const Icon = blockIcons[card.icon];
                return (
                  <Reveal key={card.title} delay={(i % 2) * 80}>
                    <Spotlight className="card-lift group flex h-full flex-col rounded-2xl border border-border/60 bg-background p-4">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-genii-red/10 transition-colors duration-150 group-hover:bg-genii-red/15">
                        {Icon && (
                          <Icon
                            aria-hidden
                            className="size-4.5 text-genii-red transition-transform duration-150 group-hover:scale-110"
                          />
                        )}
                      </span>
                      <h3 className="mt-3 text-sm font-bold">{card.title}</h3>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">
                        {card.copy}
                      </p>
                    </Spotlight>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={120}>
            <SectionImage
              src="/images/microsoft-copilot-txZv4HQJRpE-unsplash.jpg"
              alt="A contact-centre team reviewing customer interaction insights together."
              aspect="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
