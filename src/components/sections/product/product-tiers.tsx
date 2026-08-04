import { Check, Zap, Target } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { tiers, journeyLine } from "@/content/products";

export function ProductTiers() {
  return (
    <Section id="tiers">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="One journey, four products"
          subtitle="Each product has a specific role in the maturity story — start where you are and scale as you grow."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 90} className="h-full">
            <Spotlight
              as="article"
              id={tier.id}
              className="card-lift group flex h-full scroll-mt-24 flex-col rounded-3xl border border-border/60 bg-card p-6"
              style={{ borderTop: `3px solid ${tier.accent}` }}
            >
              <div>
                <h3 className="text-xl font-bold" style={{ color: tier.accent }}>
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {tier.descriptor}
                </p>
                <p className="mt-4 text-lg font-bold">{tier.pricing}</p>
                <span
                  className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${tier.accent} 12%, transparent)`,
                    color: tier.accent,
                  }}
                >
                  {tier.role}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {tier.summary}
              </p>

              <div className="mt-5 space-y-3 border-t border-border/60 pt-5 text-sm">
                <div className="flex gap-2.5">
                  <Zap className="mt-0.5 size-4 shrink-0 text-genii-orange" />
                  <p className="text-muted-foreground">{tier.efficiency}</p>
                </div>
                <div className="flex gap-2.5">
                  <Target className="mt-0.5 size-4 shrink-0 text-genii-red" />
                  <p className="font-medium">{tier.outcome}</p>
                </div>
              </div>

              <div className="mt-5 flex-1 border-t border-border/60 pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="mt-3 space-y-2">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-3.5 shrink-0"
                        style={{ color: tier.accent }}
                      />
                      <span className="text-foreground/85">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <CtaButton
                  href="/#lead-form"
                  variant="outline"
                  className="w-full"
                >
                  Talk to an Expert
                </CtaButton>
              </div>
            </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* Product journey line */}
        <Reveal className="mx-auto mt-10 max-w-4xl rounded-2xl bg-muted/50 px-6 py-5 text-center">
          <p className="text-sm leading-relaxed text-foreground/80">
            {journeyLine}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
