import {
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Coins,
  HeartHandshake,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { type RefObject } from "react";
import { Container, Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import { BillionCounter } from "@/components/shared/billion-counter";
import { realResults as data } from "@/content/home";

// Outcome icons, ordered to match the content items.
const icons: LucideIcon[] = [
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Coins,
  HeartHandshake,
  Zap,
];

export function RealResults({
  statRef,
}: {
  statRef?: RefObject<HTMLDivElement | null>;
} = {}) {
  return (
    <Section id="real-results" className="relative bg-muted/40">
      <Container>
        {/* Standalone hero stat — only the number animates. The threading beam
            terminates here (at the 1B figure). */}
        <Reveal className="mb-16 text-center">
          <div ref={statRef} className="inline-block">
            <p className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className="genii-gradient-text-anim tabular-nums">
                <BillionCounter />
              </span>{" "}
              Interactions Analysed
            </p>
          </div>
        </Reveal>

        <Reveal className="mb-12 text-center">
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            {data.subheading}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.area} delay={(i % 3) * 80}>
                <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background p-6">
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-2xl bg-genii-orange/10 text-genii-orange transition-all duration-200 group-hover:bg-genii-orange/15 group-hover:scale-110"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="flex items-baseline gap-2 pr-12">
                    <CountUp
                      value={item.metric}
                      className="text-4xl font-extrabold genii-gradient-text tabular-nums"
                    />
                    <span className="text-sm font-semibold text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.area}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 block h-1 w-8 rounded-full genii-gradient transition-all duration-300 group-hover:w-16"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
