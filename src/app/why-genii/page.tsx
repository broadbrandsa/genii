import type { Metadata } from "next";
import {
  Workflow,
  Users,
  Network,
  Settings2,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { SectionImage } from "@/components/shared/section-image";
import { whyGeniiPage as data } from "@/content/company";
import { ctas } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  Workflow,
  Users,
  Network,
  Settings2,
};

export const metadata: Metadata = {
  title: "Why Genii — Our Story & Approach",
  description:
    "Genii turns every conversation into intelligence, and every decision into advantage. Our story, what we believe and the impact we deliver.",
};

export default function WhyGeniiPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <Section className="relative overflow-hidden !pb-10 pt-14 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 0%, rgba(243,112,53,0.09), transparent 65%)",
            }}
          />
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
                {data.heading}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {data.intro}
              </p>
            </div>
          </Container>
        </Section>

        {/* Belief + image */}
        <Section className="!pt-6">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              <Reveal>
                <p className="text-xl font-semibold leading-relaxed sm:text-2xl">
                  {data.belief}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <SectionImage
                  src="/images/microsoft-copilot-txZv4HQJRpE-unsplash.jpg"
                  alt="A contact-centre team reviewing interaction insights together."
                  aspect="aspect-[4/3]"
                />
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* Principles */}
        <Section className="bg-muted/40">
          <Container>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              {data.principlesHeading}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {data.principles.map((p, i) => {
                const Icon = icons[p.icon];
                return (
                  <Reveal key={p.title} delay={(i % 2) * 80}>
                    <Spotlight className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-background p-6">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-genii-red/10 transition-colors duration-150 group-hover:bg-genii-red/15">
                        {Icon && (
                          <Icon
                            aria-hidden
                            className="size-5.5 text-genii-red transition-transform duration-150 group-hover:scale-110"
                          />
                        )}
                      </span>
                      <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.copy}
                      </p>
                    </Spotlight>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Impact */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {data.impactHeading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {data.impactIntro}
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
              {data.impact.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 60}>
                  <div className="card-lift flex h-full items-start gap-2.5 rounded-2xl border border-border/60 bg-card px-4 py-3.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-genii-orange"
                    />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold">
              {data.impactNote}
            </p>
          </Container>
        </Section>

        {/* Closing */}
        <Section className="!pb-20">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] genii-gradient px-8 py-14 text-center text-white sm:px-12">
              <div
                aria-hidden
                className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
              />
              <div className="relative mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {data.closingHeading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/90">
                  {data.closing}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <CtaButton
                    href={ctas.talkToExpert.href}
                    size="lg"
                    variant="ghost"
                    className="bg-white !text-genii-red hover:bg-white/90"
                  >
                    {ctas.talkToExpert.label}
                  </CtaButton>
                  <CtaButton
                    href="/interaction-intelligence"
                    size="lg"
                    variant="ghost"
                    className="border border-white/60 text-white hover:bg-white/10"
                  >
                    What is Interaction Intelligence?
                  </CtaButton>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
