import type { Metadata } from "next";
import {
  TrendingUp,
  Heart,
  HeartHandshake,
  Coins,
  Gauge,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { solutions, solutionsPage } from "@/content/solutions";
import { ctas } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  HeartHandshake,
  Coins,
  Gauge,
};

export const metadata: Metadata = {
  title: "Solutions — Intelligence for the Outcomes You Own",
  description:
    "Genii applied to your outcome: sales performance, customer experience, client retentions, collections and performance management.",
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <Section className="relative overflow-hidden !pb-10 pt-14 sm:pt-16">
          <div
            aria-hidden
            className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              maskImage:
                "radial-gradient(60% 55% at 50% 20%, #000 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(60% 55% at 50% 20%, #000 0%, transparent 75%)",
            }}
          />
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <Eyebrow>{solutionsPage.eyebrow}</Eyebrow>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {solutionsPage.heading}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {solutionsPage.subheading}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaButton href={ctas.talkToExpert.href} size="lg">
                  {ctas.talkToExpert.label}
                </CtaButton>
                <CtaButton href="/products" variant="outline" size="lg">
                  Explore the platform
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        {/* Solution blocks */}
        <Section className="!pt-6">
          <Container>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                  <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                    <Spotlight
                      as="article"
                      id={s.slug}
                      className="card-lift group flex h-full scroll-mt-28 flex-col rounded-3xl border border-border/60 bg-card p-6"
                      style={{ borderTop: `3px solid ${s.accent}` }}
                    >
                      <span
                        className="flex size-11 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${s.accent} 12%, transparent)`,
                        }}
                      >
                        {Icon && (
                          <Icon
                            aria-hidden
                            className="size-5.5 transition-transform duration-150 group-hover:scale-110"
                            style={{ color: s.accent }}
                          />
                        )}
                      </span>
                      <h2 className="mt-5 text-xl font-bold">{s.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.summary}
                      </p>
                      <div className="mt-5 flex-1 border-t border-border/60 pt-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          What Genii surfaces
                        </p>
                        <ul className="mt-3 space-y-2">
                          {s.surfaces.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check
                                aria-hidden
                                className="mt-0.5 size-3.5 shrink-0"
                                style={{ color: s.accent }}
                              />
                              <span className="text-foreground/85">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Spotlight>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Closing CTA */}
        <Section className="bg-muted/40 !py-16">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Not sure which outcome to start with?
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Genii Discover shows you where the biggest opportunity sits before
                you commit to anything.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <CtaButton href="/products#discover" size="lg">
                  Start with Discover
                </CtaButton>
                <CtaButton
                  href={ctas.talkToExpert.href}
                  variant="outline"
                  size="lg"
                >
                  {ctas.talkToExpert.label}
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
