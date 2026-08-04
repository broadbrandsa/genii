import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { gaps as data } from "@/content/products";

export function ProductGaps() {
  return (
    <Section id="gaps">
      <Container>
        <SectionHeading title={data.heading} subtitle={data.subheading} />
        <Reveal className="mt-12">
          <FeatureCarousel items={data.items} />
        </Reveal>
      </Container>
    </Section>
  );
}
