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
        {/* The hero grades to solid black, so this block starts on black too and
            lifts to its own background over the first 18rem. Starting on the
            hero's exact end colour is what makes the join disappear — a fade
            toward any other value just moves the hard line down.

            The overlay is first in the DOM and carries no z-index, so the
            diagram paints over it: the fade darkens the ground behind the orbit
            without dimming the nodes themselves. */}
        <div className="relative bg-muted/40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black via-black/45 to-transparent"
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
