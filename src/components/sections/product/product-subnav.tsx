"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Products", id: "tiers" },
  { label: "Discover", id: "discover" },
  { label: "Managed Services", id: "managed-services" },
  { label: "Compare", id: "comparison" },
  { label: "How it works", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
];

export function ProductSubnav() {
  const [active, setActive] = useState<string>("tiers");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Trigger when a section is near the top third of the viewport.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-40 border-y border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2.5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150",
              active === item.id
                ? "bg-genii-red/10 text-genii-red"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={active === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
