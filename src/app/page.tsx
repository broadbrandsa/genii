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
        {/* This block used to carry a background → muted fade at its top, to
            soften the join with a light hero. The hero now grades to black, so
            that fade would read as a white glow under a black edge; the join is
            a deliberate dark-to-light break instead. */}
        <div className="bg-muted/40">
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
