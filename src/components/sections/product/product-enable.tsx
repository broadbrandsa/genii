import { Check } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { enable as data } from "@/content/products";

export function ProductEnable() {
  return (
    <Section id="enable" className="bg-muted/40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] genii-gradient-text">
              Genii Enable
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              {data.heading}
            </h2>
            <p className="mt-3 text-lg font-semibold text-foreground/80">
              {data.subheading}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {data.copy}
            </p>
            <div className="mt-6 rounded-2xl border border-genii-orange/20 bg-genii-orange/5 p-5">
              <p className="text-sm font-medium">{data.outcome}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-background p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Professional Services supports
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {data.supports.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-genii-orange" />
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
