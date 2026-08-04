"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { label: "Overview", href: "/products" },
  { label: "Core", href: "/products/core" },
  { label: "Indicate", href: "/products/indicate" },
  { label: "Connect", href: "/products/connect" },
  { label: "Ultra", href: "/products/ultra" },
  { label: "Discover", href: "/products/discover" },
  { label: "Managed Services", href: "/products/managed-services" },
  { label: "Enable", href: "/products/enable" },
  { label: "Compare", href: "/products/compare" },
];

/**
 * Sticky secondary nav shown across all product pages. Highlights the current
 * page and lets buyers move through the product family without returning to
 * the main menu.
 */
export function ProductsNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 border-y border-border/60 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Product pages"
        className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2.5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150",
                active
                  ? "bg-genii-red/10 text-genii-red"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
