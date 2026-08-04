import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductGaps } from "@/components/sections/product/product-gaps";
import { ProductEnvironment } from "@/components/sections/product/product-environment";
import { ProductTiers } from "@/components/sections/product/product-tiers";
import { ProductStatsBand } from "@/components/sections/product/product-stats-band";
import { ProductServicesRouter } from "@/components/sections/product/product-services-router";
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
    "The Genii product journey: Core, Gen-AI Indicate, Gen-AI Connect and Gen-AI Ultra — plus Genii Discover, Managed Services and Enable, the full capability matrix and buyer FAQs.",
};

/**
 * The single product page, in the order set out in the Product Page Positioning
 * Document (16 June 2026). This page owns the whole journey; it was briefly
 * split across /compare, /discover, /enable and /managed-services, which broke
 * the one-page flow the document describes. Those routes now redirect to the
 * matching anchor here (see next.config.ts).
 *
 * The per-tier deep dives at /products/[slug] remain as optional detail, linked
 * from the product cards.
 *
 * Two sections are additions rather than brief items: ProductGaps (problem
 * framing, moved off the homepage) and ProductStatsBand (the headline numbers).
 */
export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        {/* 1. Hero */}
        <ProductHero />
        {/* Problem framing before the journey (addition, not a brief section) */}
        <ProductGaps />
        {/* 2. Built to work across your environment */}
        <ProductEnvironment />
        {/* 3. Product cards + 4. product journey line */}
        <ProductTiers />
        {/* Headline numbers (addition, not a brief section) */}
        <ProductStatsBand />
        {/* Router into the three service sections that follow */}
        <ProductServicesRouter />
        {/* 5. Genii Enable — Professional Services roll-out */}
        <ProductEnable />
        {/* 6. Genii Discover — standalone insight product */}
        <ProductDiscover />
        {/* 7. Value-added services — Managed Services */}
        <ProductManagedServices />
        {/* 8. Intelligence layers */}
        <ProductIntelligenceLayers />
        {/* 9. Example use cases */}
        <ProductUseCases />
        {/* 10. Detailed feature comparison */}
        <ProductFeatureComparison />
        {/* 11. How Genii works */}
        <ProductHowItWorks />
        {/* 12. AI governance and exception management */}
        <ProductGovernance />
        {/* 13. Proof / trust */}
        <ProductProof />
        {/* 14. FAQ */}
        <ProductFaq />
        {/* 15. Final CTA — Find Your Starting Point */}
        <ProductFinalCta />
      </main>
      {/* The brief's section-15 CTA above routes into the two-stage form in the
          closing band below, so the form is reachable from every page. */}
      <SiteFooter />
    </>
  );
}
