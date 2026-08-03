import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductSubnav } from "@/components/sections/product/product-subnav";
import { ProductEnvironment } from "@/components/sections/product/product-environment";
import { ProductTiers } from "@/components/sections/product/product-tiers";
import { ProductEnable } from "@/components/sections/product/product-enable";
import { ProductDiscover } from "@/components/sections/product/product-discover";
import { ProductManagedServices } from "@/components/sections/product/product-managed-services";
import { ProductIntelligenceLayers } from "@/components/sections/product/product-intelligence-layers";
import { ProductUseCases } from "@/components/sections/product/product-use-cases";
import { ProductFeatureComparison } from "@/components/sections/product/product-feature-comparison";
import { ProductHowItWorks } from "@/components/sections/product/product-how-it-works";
import { ProductGovernance } from "@/components/sections/product/product-governance";
import { ProductProof } from "@/components/sections/product/product-proof";
import { ProductFaq } from "@/components/sections/product/product-faq";
import { ProductFinalCta } from "@/components/sections/product/product-final-cta";

export const metadata: Metadata = {
  title: "Products — From Automated QA to Root-Cause Intelligence",
  description:
    "Explore the Genii product journey: Core, Gen-AI Indicate, Gen-AI Connect and Gen-AI Ultra, plus Genii Discover and Managed Services.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ProductHero />
        <ProductSubnav />
        <ProductEnvironment />
        <ProductTiers />
        <ProductEnable />
        <ProductDiscover />
        <ProductManagedServices />
        <ProductIntelligenceLayers />
        <ProductUseCases />
        <ProductFeatureComparison />
        <ProductHowItWorks />
        <ProductGovernance />
        <ProductProof />
        <ProductFaq />
        <ProductFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
