import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductsNav } from "@/components/sections/product/products-nav";
import { ProductDiscover } from "@/components/sections/product/product-discover";
import { Container, Eyebrow } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Genii Discover — Know Where to Start",
  description:
    "A standalone insight product: Genii analyses a defined set of interactions and delivers a comprehensive intelligence report — before you deploy the platform or decide what to fix.",
};

export default function DiscoverPage() {
  return (
    <>
      <SiteHeader />
      <ProductsNav />
      <main className="flex-1">
        <Container className="pt-14 text-center sm:pt-16">
          <Eyebrow>Standalone Insight Product</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Discover gives you the intelligence to{" "}
            <span className="genii-gradient-text">know where to start</span>
          </h1>
        </Container>
        <ProductDiscover />
      </main>
      <SiteFooter />
    </>
  );
}
