import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/home/hero";
import { IntelligenceFlow } from "@/components/sections/home/intelligence-flow";
import { Ticker } from "@/components/shared/ticker";
import { ExplainerVideo } from "@/components/sections/home/explainer-video";
import { EnvironmentStrip } from "@/components/sections/home/environment-strip";
import { WhyGenii } from "@/components/sections/home/why-genii";
import { Statement } from "@/components/sections/home/statement";
import { IntelligenceAction } from "@/components/sections/home/intelligence-action";
import { Comparison } from "@/components/sections/home/comparison";
import { Trusted } from "@/components/sections/home/trusted";
import { ticker } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IntelligenceFlow />
        <Ticker items={ticker} />
        <ExplainerVideo />
        <EnvironmentStrip />
        <WhyGenii />
        <Statement />
        <IntelligenceAction />
        <Comparison />
        <Trusted />
      </main>
      <SiteFooter />
    </>
  );
}
