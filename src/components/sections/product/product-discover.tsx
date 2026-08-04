import { Check, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { discover as data } from "@/content/products";

export function ProductDiscover() {
  return (
    <Section id="discover">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-genii-purple/20 bg-gradient-to-br from-[#fbf6fb] via-background to-[#fff6f1] p-8 sm:p-12 dark:from-[#241f26] dark:via-card dark:to-[#2a2321]">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-genii-purple/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-genii-purple">
              <Sparkles className="size-3.5" />
              {data.kicker}
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {data.heading} — {data.positioning}
            </h2>
            <p className="max-w-3xl text-lg font-semibold text-foreground/80">
              {data.lead}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              {data.body}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                What Discover surfaces
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {data.surfaces.map((s) => (
                  <div
                    key={s.title}
                    className="card-lift rounded-2xl border border-border/60 bg-background/70 p-4"
                  >
                    <p className="text-sm font-bold text-genii-purple">
                      {s.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {s.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Best for
              </p>
              <ul className="mt-4 space-y-2.5">
                {data.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-genii-purple" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border/60 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-base font-semibold">{data.outcome}</p>
            <CtaButton href="/#lead-form" size="lg" className="shrink-0">
              Start with Discover
            </CtaButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
