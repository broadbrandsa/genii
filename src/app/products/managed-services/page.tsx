import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductManagedServices } from "@/components/sections/product/product-managed-services";
import { ProductGovernance } from "@/components/sections/product/product-governance";

export const metadata: Metadata = {
  title: "Managed Services — Human QA Support & AI Exception Management",
  description:
    "Expert human review alongside the Genii platform: AI exception management and human-in-the-loop QA where judgement is required by design, risk or AI confidence.",
};

export default function ManagedServicesPage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        <ProductManagedServices />
        <ProductGovernance />
      </main>
      <SiteFooter />
    </>
  );
}
