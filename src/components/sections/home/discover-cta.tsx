import { Sparkles } from "lucide-react";
import { Container } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { discoverCta as data } from "@/content/home";

export function DiscoverCta() {
  return (
    <div className="py-6">
      <Container>
        <Reveal className="group relative overflow-hidden rounded-3xl border border-genii-purple/15 bg-gradient-to-br from-[#faf6fb] to-[#fff6f1] px-6 py-8 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(167,40,143,0.5)] sm:px-10 sm:py-10 dark:from-[#241f26] dark:to-[#2a2321]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-genii-purple/10 blur-3xl transition-transform duration-500 group-hover:scale-125"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-genii-purple/10 transition-transform duration-300 group-hover:scale-110 sm:flex">
                <Sparkles aria-hidden className="size-6 text-genii-purple" />
              </span>
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold sm:text-2xl">{data.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {data.copy}
                </p>
              </div>
            </div>
            <CtaButton
              href={data.cta.href}
              size="lg"
              className="shrink-0"
            >
              {data.cta.label}
            </CtaButton>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
