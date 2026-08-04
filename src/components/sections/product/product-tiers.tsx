import Link from "next/link";
import { ArrowRight, Check, Target } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { tiers, journeyLine } from "@/content/products";

/** How many "what's included" items to tease on the overview card. */
const TEASER_COUNT = 4;

export function ProductTiers() {
  return (
    <Section id="tiers">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="One journey, four products"
          subtitle="Each product has a specific role in the maturity story — start where you are and scale as you grow. Open a product for the full detail."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, i) => {
            const teaser = tier.includes.slice(0, TEASER_COUNT);
            const remaining = tier.includes.length - teaser.length;
            return (
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

                  <div className="mt-5 flex gap-2.5 border-t border-border/60 pt-5 text-sm">
                    <Target className="mt-0.5 size-4 shrink-0 text-genii-red" />
                    <p className="font-medium">{tier.outcome}</p>
                  </div>

                  <div className="mt-5 flex-1 border-t border-border/60 pt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Includes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {teaser.map((inc) => (
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
                    {remaining > 0 && (
                      <p className="mt-2.5 text-xs font-medium text-muted-foreground">
                        + {remaining} more
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/products/${tier.id}`}
                      className="group/link inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:border-genii-orange/60 hover:text-genii-red"
                    >
                      Learn more about {tier.name}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
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
