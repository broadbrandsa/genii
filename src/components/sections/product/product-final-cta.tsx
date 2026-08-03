import { Container, Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { productFinalCta as data, finalPositioning } from "@/content/products";

export function ProductFinalCta() {
  return (
    <Section id="final-cta">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] genii-gradient px-8 py-14 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 20%, rgba(255,255,255,0.35), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{data.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              {data.copy}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton
                href="/#lead-form"
                variant="dark"
                size="lg"
                className="bg-white !text-genii-red hover:bg-white/90"
              >
                Enquire about a free POV
              </CtaButton>
              <CtaButton
                href="/#lead-form"
                size="lg"
                className="border border-white/60 bg-transparent text-white hover:bg-white/10"
                variant="ghost"
              >
                Talk to an Expert
              </CtaButton>
            </div>
            <p className="mx-auto mt-10 max-w-2xl border-t border-white/20 pt-8 text-sm leading-relaxed text-white/85">
              {finalPositioning}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
