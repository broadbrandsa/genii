import type { Metadata } from "next";
import {
  EyeOff,
  Boxes,
  TrendingDown,
  HelpCircle,
  Search,
  Heart,
  Compass,
  ShieldCheck,
  TrendingUp,
  Zap,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { interactionIntelligence as data } from "@/content/company";
import { ctas } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  EyeOff,
  Boxes,
  TrendingDown,
  HelpCircle,
  Search,
  Heart,
  Compass,
  ShieldCheck,
  TrendingUp,
  Zap,
  GraduationCap,
};

export const metadata: Metadata = {
  title: "Interaction Intelligence — Beyond Dashboards to Root Cause",
  description:
    "Your dashboards show the symptoms. Interaction Intelligence reveals the causes — the layer between raw customer interactions and the decisions you make every day.",
};

export default function InteractionIntelligencePage() {
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
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
                Your dashboards show the symptoms.{" "}
                <span className="genii-gradient-text">
                  Interaction Intelligence reveals the causes.
                </span>
              </h1>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaButton href={ctas.bookDemo.href} size="lg">
                  {ctas.bookDemo.label}
                </CtaButton>
                <CtaButton href="/products" variant="outline" size="lg">
                  Explore the platform
                </CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        {/* Problems */}
        <Section className="bg-muted/40">
          <Container>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold sm:text-4xl">
              {data.problemsHeading}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.problems.map((p, i) => {
                const Icon = icons[p.icon];
                return (
                  <Reveal key={p.title} delay={(i % 3) * 70}>
                    <div className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-background p-6">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-muted">
                        {Icon && (
                          <Icon
                            aria-hidden
                            className="size-5 text-muted-foreground transition-colors duration-150 group-hover:text-genii-red"
                          />
                        )}
                      </span>
                      <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.copy}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
              <Reveal delay={140}>
                <div className="genii-gradient flex h-full items-center rounded-3xl p-6 text-white">
                  <p className="text-lg font-bold leading-snug">
                    Interaction Intelligence eliminates these blind spots.
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Definition */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {data.definitionHeading}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {data.definition.map((para) => (
                  <p
                    key={para}
                    className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border/60 bg-card p-7 sm:p-9">
              <p className="text-sm font-semibold text-muted-foreground">
                {data.questionsIntro}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {data.questions.map((q) => (
                  <li key={q} className="flex items-center gap-3">
                    <ArrowRight
                      aria-hidden
                      className="size-4 shrink-0 text-genii-red"
                    />
                    <span className="text-lg font-bold genii-gradient-text sm:text-xl">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </Section>

        {/* Business impact */}
        <Section className="bg-muted/40">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {data.impactHeading}
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {data.impactIntro}
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.impact.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <Reveal key={item.title} delay={(i % 3) * 70}>
                    <Spotlight className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-background p-6">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-genii-orange/10 transition-colors duration-150 group-hover:bg-genii-orange/15">
                        {Icon && (
                          <Icon
                            aria-hidden
                            className="size-5.5 text-genii-orange transition-transform duration-150 group-hover:scale-110"
                          />
                        )}
                      </span>
                      <h3 className="mt-5 text-base font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.copy}
                      </p>
                    </Spotlight>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4">
              <CtaButton href={ctas.bookDemo.href} size="lg">
                {ctas.bookDemo.label}
              </CtaButton>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
