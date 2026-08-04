import { Container, Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";
import { productFinalCta as data, finalPositioning } from "@/content/products";
import { ctas } from "@/content/site";

/**
 * Product page section 15 — final CTA. Copy and the "Find Your Starting Point"
 * CTA are as specified in the Product Page Positioning Document, which also
 * gives the closing positioning line used beneath the buttons.
 */
export function ProductFinalCta() {
  return (
    <Section id="final-cta" className="!py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:leading-[1.12]">
            {data.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {data.copy}
          </p>
          {/* Scrolls to the lead form in the closing band on this page rather
              than bouncing the buyer to the homepage. */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="#lead-form" size="lg">
              {ctas.findStartingPoint.label}
            </CtaButton>
            <CtaButton href="/contact" variant="outline" size="lg">
              {ctas.talkToExpert.label}
            </CtaButton>
          </div>
          <p className="mx-auto mt-10 max-w-2xl border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground">
            {finalPositioning}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
