import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/home/hero";
import { IntelligenceFlow } from "@/components/sections/home/intelligence-flow";
import { Ticker } from "@/components/shared/ticker";
import { ExplainerVideo } from "@/components/sections/home/explainer-video";
import { EnvironmentStrip } from "@/components/sections/home/environment-strip";
import { Statement } from "@/components/sections/home/statement";
import { Comparison } from "@/components/sections/home/comparison";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Trusted } from "@/components/sections/home/trusted";
import { ticker } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      {/* Every content section shares one background. The two deliberate
          exceptions are the hero (its own layered treatment) and the rotating
          ticker band (dark contrast strip). */}
      <main className="flex-1">
        <Hero />
        {/* The hero sits on bg-background and this block on bg-muted/40, which
            left a hard line at the join. The overlay fades background → muted
            across the top of this block so the two sections meet softly. */}
        <div className="relative bg-muted/40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
          />
          <IntelligenceFlow />
        </div>
        <Ticker items={ticker} />
        <div className="bg-muted/40">
          <ExplainerVideo />
          <Trusted />
          <EnvironmentStrip />
          <Statement />
          <Comparison />
          <Testimonials />
        </div>
      </main>
      {/* Lead capture (brief section 10) is the two-stage form inside the
          closing CTA band in the footer. */}
      <SiteFooter />
    </>
  );
}
