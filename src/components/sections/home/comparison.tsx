import { Check, X, CircleCheck } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { SectionImage } from "@/components/shared/section-image";
import { comparison as data } from "@/content/home";

export function Comparison() {
  return (
    <Section id="comparison">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left — photo */}
          <Reveal>
            <SectionImage
              src="/images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
              alt="A contact-centre agent working with a customer on a headset."
              aspect="aspect-[4/5]"
            />
          </Reveal>

          {/* Right — heading, description, benefit bullets */}
          <Reveal delay={120}>
            <Eyebrow>The Genii difference</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
              {data.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {data.description}
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium">
                  <CircleCheck
                    aria-hidden
                    className="size-5 shrink-0 text-genii-red"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Comparison table, full width beneath (Genii column highlighted) */}
        <Reveal delay={80} className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr]">
                {/* header */}
                <div className="border-b border-border/60" />
                <div className="genii-gradient border-b border-border/60 px-2 py-4 text-center text-sm font-bold text-white">
                  Genii
                </div>
                <div className="border-b border-l border-border/60 px-2 py-4 text-center text-sm font-bold text-muted-foreground">
                  Most providers
                </div>

                {/* rows */}
                {data.rows.map((row, i) => (
                  <div key={i} className="contents">
                    <div
                      className={`px-4 py-3.5 text-sm font-medium ${i % 2 === 1 ? "bg-muted/30" : ""}`}
                    >
                      {row.genii}
                    </div>
                    <div
                      className={`flex items-center justify-center bg-genii-red/[0.05] px-2 py-3.5 ${i % 2 === 1 ? "bg-genii-red/[0.09]" : ""}`}
                    >
                      <Check aria-label="Genii" className="size-5 text-genii-red" />
                    </div>
                    <div
                      className={`flex items-center justify-center border-l border-border/60 px-2 py-3.5 ${i % 2 === 1 ? "bg-muted/30" : ""}`}
                    >
                      <X
                        aria-label="Most providers"
                        className="size-4.5 text-muted-foreground/40"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
