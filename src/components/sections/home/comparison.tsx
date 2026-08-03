import { Check, X } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { YouTubeEmbed } from "@/components/shared/youtube-embed";
import { Reveal } from "@/components/shared/reveal";
import { comparison as data } from "@/content/home";

export function Comparison() {
  return (
    <Section id="comparison">
      <Container>
        <SectionHeading
          eyebrow="The Genii difference"
          title={data.heading}
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
          {/* Comparison table */}
          <Reveal className="overflow-hidden rounded-3xl border border-border/60">
            <div className="grid grid-cols-[1.6fr_1fr] bg-muted/60 text-sm font-bold">
              <div className="px-5 py-4 genii-gradient-text">Genii</div>
              <div className="border-l border-border/60 px-5 py-4 text-muted-foreground">
                Most providers
              </div>
            </div>
            {data.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.6fr_1fr] border-t border-border/60 text-sm transition-colors duration-150 hover:bg-muted/40"
              >
                <div className="flex items-start gap-2.5 px-5 py-4">
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-genii-red"
                  />
                  <span className="font-medium">{row.genii}</span>
                </div>
                <div className="flex items-start gap-2.5 border-l border-border/60 px-5 py-4 text-muted-foreground">
                  <X aria-hidden className="mt-0.5 size-4 shrink-0 opacity-60" />
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Explainer video */}
          <Reveal delay={120}>
            <YouTubeEmbed id={data.video.youtubeId} title={data.video.caption} />
            <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
              {data.video.caption}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
