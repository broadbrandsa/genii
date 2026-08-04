import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Target, Zap } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { tiers, intelligenceLayers } from "@/content/products";
import { ctas } from "@/content/site";

export function generateStaticParams() {
  return tiers.map((tier) => ({ slug: tier.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tier = tiers.find((t) => t.id === slug);
  if (!tier) return {};
  return {
    title: `${tier.name} — ${tier.descriptor}`,
    description: tier.outcome,
  };
}

export default async function TierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = tiers.findIndex((t) => t.id === slug);
  if (index === -1) notFound();

  const tier = tiers[index];
  const prev = tiers[index - 1];
  const next = tiers[index + 1];

  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        {/* Hero */}
        <Section className="relative overflow-hidden !pb-10 pt-14 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3"
            style={{
              background: `radial-gradient(55% 55% at 50% 0%, color-mix(in srgb, ${tier.accent} 9%, transparent), transparent 65%)`,
            }}
          />
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <Eyebrow>{`Step ${index + 1} of ${tiers.length} in the Genii journey`}</Eyebrow>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span style={{ color: tier.accent }}>{tier.name}</span>
              </h1>
              <p className="text-xl font-semibold text-foreground/80">
                {tier.descriptor}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span
                  className="rounded-full px-4 py-1.5 text-sm font-bold text-white"
                  style={{ backgroundColor: tier.accent }}
                >
                  {tier.pricing}
                </span>
                <span
                  className="rounded-full px-4 py-1.5 text-sm font-semibold"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${tier.accent} 12%, transparent)`,
                    color: tier.accent,
                  }}
                >
                  {tier.role}
                </span>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {tier.summary}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaButton href={ctas.talkToExpert.href} size="lg">
                  {ctas.talkToExpert.label}
                </CtaButton>
                <CtaButton href={ctas.requestDemo.href} variant="outline" size="lg">
                  Enquire about a free POV
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        {/* Efficiency + outcome */}
        <Section className="!py-10">
          <Container>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              <Reveal>
                <div className="card-lift flex h-full gap-3.5 rounded-3xl border border-border/60 bg-card p-6">
                  <Zap className="mt-0.5 size-5 shrink-0 text-genii-orange" />
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      Efficiency
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed">{tier.efficiency}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="card-lift flex h-full gap-3.5 rounded-3xl border border-border/60 bg-card p-6">
                  <Target className="mt-0.5 size-5 shrink-0 text-genii-red" />
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      Key outcome
                    </h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed">
                      {tier.outcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* What's included */}
        <Section className="bg-muted/40">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold sm:text-3xl">
                What&apos;s included
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {tier.includes.map((inc, i) => (
                  <Reveal key={inc} delay={(i % 2) * 60}>
                    <div className="flex h-full items-start gap-2.5 rounded-2xl border border-border/60 bg-background px-4 py-3.5 text-sm">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0"
                        style={{ color: tier.accent }}
                      />
                      <span className="text-foreground/90">{inc}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Intelligence focus for this tier */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-bold sm:text-3xl">
                Intelligence focus
              </h2>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                How deep {tier.name} goes across the five Genii intelligence layers.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl border border-border/60">
                {intelligenceLayers.map((row, r) => (
                  <div
                    key={row.layer}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${r > 0 ? "border-t border-border/60" : ""}`}
                  >
                    <p className="text-sm font-semibold">{row.layer}</p>
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${row.concentration[index]} out of 5`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="size-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              i < row.concentration[index]
                                ? tier.accent
                                : "color-mix(in srgb, var(--genii-charcoal) 12%, transparent)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Journey navigation */}
        <Section className="bg-muted/40 !py-14">
          <Container>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
              {prev ? (
                <Link
                  href={`/products/${prev.id}`}
                  className="card-lift group flex items-center gap-4 rounded-3xl border border-border/60 bg-background p-6"
                >
                  <ArrowLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Previous
                    </p>
                    <p className="mt-1 font-bold" style={{ color: prev.accent }}>
                      {prev.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{prev.role}</p>
                  </div>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}
              {next ? (
                <Link
                  href={`/products/${next.id}`}
                  className="card-lift group flex items-center justify-end gap-4 rounded-3xl border border-border/60 bg-background p-6 text-right"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Next in the journey
                    </p>
                    <p className="mt-1 font-bold" style={{ color: next.accent }}>
                      {next.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{next.role}</p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link
                  href="/products/compare"
                  className="card-lift group flex items-center justify-end gap-4 rounded-3xl border border-border/60 bg-background p-6 text-right"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Ready to choose?
                    </p>
                    <p className="mt-1 font-bold genii-gradient-text">
                      Compare all products
                    </p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
