import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/home/hero";
import { EnvironmentStrip } from "@/components/sections/home/environment-strip";
import { WhyGenii } from "@/components/sections/home/why-genii";
import { RealResults } from "@/components/sections/home/real-results";
import { DiscoverCta } from "@/components/sections/home/discover-cta";
import { Comparison } from "@/components/sections/home/comparison";
import { Trusted } from "@/components/sections/home/trusted";
import { LeadForm } from "@/components/sections/home/lead-form";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <EnvironmentStrip />
        <WhyGenii />
        <RealResults />
        <DiscoverCta />
        <Comparison />
        <Trusted />
        <LeadForm />
      </main>
      <SiteFooter />
    </>
  );
}
