import { Quote } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { testimonials as data } from "@/content/home";

/** Initials for the avatar chip, e.g. "William Wyngaardt" → "WW". */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Client stories"
          title={data.heading}
          subtitle={data.subheading}
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {data.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 90}>
              <Spotlight
                as="figure"
                className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-background p-6 sm:p-7"
              >
                <Quote
                  aria-hidden
                  className="size-7 shrink-0 fill-genii-red/10 text-genii-red/40 transition-colors duration-150 group-hover:text-genii-red/60"
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full genii-gradient text-xs font-bold text-white"
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
