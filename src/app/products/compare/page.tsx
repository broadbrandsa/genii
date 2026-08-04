import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductFeatureComparison } from "@/components/sections/product/product-feature-comparison";
import { ProductIntelligenceLayers } from "@/components/sections/product/product-intelligence-layers";
import { ProductHowItWorks } from "@/components/sections/product/product-how-it-works";
import { ProductGovernance } from "@/components/sections/product/product-governance";
import { ProductProof } from "@/components/sections/product/product-proof";
import { ProductFaq } from "@/components/sections/product/product-faq";

export const metadata: Metadata = {
  title: "Compare Genii Products — Features, Layers & FAQ",
  description:
    "The detailed capability matrix across Core, Gen-AI Indicate, Gen-AI Connect and Gen-AI Ultra — plus how Genii works, AI governance and buyer FAQs.",
};

export default function ComparePage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        <ProductFeatureComparison />
        <ProductIntelligenceLayers />
        <ProductHowItWorks />
        <ProductGovernance />
        <ProductProof />
        <ProductFaq />
      </main>
      <SiteFooter />
    </>
  );
}
