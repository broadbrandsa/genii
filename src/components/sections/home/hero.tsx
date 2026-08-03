import { Container, Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { IntelligenceLayer } from "@/components/shared/intelligence-layer";
import { Reveal } from "@/components/shared/reveal";
import { hero } from "@/content/home";
import { ctas } from "@/content/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-14 pb-10 sm:pt-20">
      {/* soft warm background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, rgba(237,27,47,0.06), transparent 60%), radial-gradient(60% 50% at 90% 10%, rgba(251,169,57,0.08), transparent 65%)",
        }}
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-genii-orange/25 bg-genii-orange/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-genii-red">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-genii-orange" />
                  <span className="relative inline-flex size-2 rounded-full genii-gradient" />
                </span>
                {hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {hero.headline}
                <br />
                <span className="relative mt-2 inline-block genii-gradient-text-anim">
                  {hero.statement}
                  <span
                    aria-hidden
                    className="mt-2 block h-1 w-2/3 rounded-full genii-gradient"
                  />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {hero.supporting}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaButton href={ctas.talkToExpert.href} size="lg">
                  {ctas.talkToExpert.label}
                </CtaButton>
                <CtaButton href={ctas.bookDemo.href} variant="outline" size="lg">
                  {ctas.bookDemo.label}
                </CtaButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-4">
            <div className="animate-float">
              <IntelligenceLayer />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
