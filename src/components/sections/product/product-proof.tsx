import { Container, Section } from "@/components/shared/section";
import { proof as data } from "@/content/products";

export function ProductProof() {
  return (
    <Section id="proof" className="bg-muted/40 !py-16">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold sm:text-3xl">
          {data.heading}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {data.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-foreground/85"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
