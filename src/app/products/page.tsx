import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductHero } from "@/components/sections/product/product-hero";
import { ProductEnvironment } from "@/components/sections/product/product-environment";
import { ProductTiers } from "@/components/sections/product/product-tiers";
import { ProductStatsBand } from "@/components/sections/product/product-stats-band";
import { ProductServicesRouter } from "@/components/sections/product/product-services-router";
import { ProductUseCases } from "@/components/sections/product/product-use-cases";
import { ProductFinalCta } from "@/components/sections/product/product-final-cta";

export const metadata: Metadata = {
  title: "Products — From Automated QA to Root-Cause Intelligence",
  description:
    "Explore the Genii product journey: Core, Gen-AI Indicate, Gen-AI Connect and Gen-AI Ultra — plus Genii Discover, Managed Services and Enable.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        <ProductHero />
        <ProductEnvironment />
        <ProductTiers />
        <ProductStatsBand />
        <ProductServicesRouter />
        <ProductUseCases />
        <ProductFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
