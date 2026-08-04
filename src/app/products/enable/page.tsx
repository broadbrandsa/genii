import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductEnable } from "@/components/sections/product/product-enable";

export const metadata: Metadata = {
  title: "Genii Enable — Implementation & Adoption Support",
  description:
    "Every Genii solution is supported by a structured Professional Services roll-out: configuration, calibration, training, governance set-up and go-live support.",
};

export default function EnablePage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        <ProductEnable />
      </main>
      <SiteFooter />
    </>
  );
}
