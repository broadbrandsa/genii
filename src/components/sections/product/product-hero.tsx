import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { productHero as data } from "@/content/products";
import { ctas } from "@/content/site";

export function ProductHero() {
  return (
    <Section className="relative overflow-hidden pt-16 pb-8 sm:pt-20">
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          maskImage:
            "radial-gradient(65% 55% at 50% 20%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(65% 55% at 50% 20%, #000 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(243,112,53,0.09), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="genii-orb left-1/2 top-0 size-96 -translate-x-1/2 bg-genii-orange/15"
      />
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] genii-gradient-text">
            The Genii Product Journey
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]">
            From Simple Automated QA to{" "}
            <span className="genii-gradient-text">Deep Root-Cause Intelligence</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {data.supporting}
          </p>
          <p className="text-base font-semibold text-foreground">{data.note}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton href={ctas.requestDemo.href} size="lg">
              Enquire about a free POV
            </CtaButton>
            <CtaButton href={ctas.talkToExpert.href} variant="outline" size="lg">
              {ctas.talkToExpert.label}
            </CtaButton>
          </div>
        </div>

        {/* Real platform screenshot: Interactive Root Cause Analysis */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-3/4 w-4/5 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(243,112,53,0.18), transparent 70%)",
            }}
          />
          <Image
            src="/images/platform-root-cause.png"
            alt="The Genii platform showing an Interactive Root Cause Analysis, insight distribution and an AI-generated summary report."
            width={1400}
            height={1000}
            priority
            className="h-auto w-full"
          />
        </div>

        {/* Product journey line */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {data.journey.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3.5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full genii-gradient text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold leading-tight">
                    {step}
                  </span>
                </div>
                {i < data.journey.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="hidden size-5 shrink-0 text-genii-orange md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
