import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/home/hero";
import { IntelligenceFlow } from "@/components/sections/home/intelligence-flow";
import { Ticker } from "@/components/shared/ticker";
import { ExplainerVideo } from "@/components/sections/home/explainer-video";
import { Gaps } from "@/components/sections/home/gaps";
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
      <main className="flex-1">
        <Hero />
        <IntelligenceFlow />
        <Ticker items={ticker} />
        <ExplainerVideo />
        <Trusted />
        <Gaps />
        <EnvironmentStrip />
        <Statement />
        <Comparison />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
