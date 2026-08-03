import { ShieldCheck, Check } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { governance as data } from "@/content/products";

export function ProductGovernance() {
  return (
    <Section id="governance">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-genii-red/10">
              <ShieldCheck aria-hidden className="size-6 text-genii-red" />
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{data.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {data.copy}
            </p>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {data.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-border/60 bg-card px-4 py-3.5 text-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-genii-orange" />
                <span className="text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
