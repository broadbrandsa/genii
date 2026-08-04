"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { CtaButton } from "@/components/shared/cta-button";
import {
  primaryNav,
  productQuickLinks,
  ctas,
  type NavChild,
} from "@/content/site";
import { cn } from "@/lib/utils";

/** Group dropdown children by their `group` label, preserving order. */
function groupChildren(children: readonly NavChild[]) {
  const groups: { title: string; items: NavChild[] }[] = [];
  for (const child of children) {
    const title = child.group ?? "";
    const last = groups[groups.length - 1];
    if (last && last.title === title) last.items.push(child);
    else groups.push({ title, items: [child] });
  }
  return groups;
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the dropdown on Escape. (Menu links close it on click themselves.)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-border/70 bg-background/90 shadow-[0_4px_24px_-16px_rgba(45,45,45,0.35)]"
          : "border-transparent bg-background/70",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16 py-2" : "h-18 py-3",
        )}
      >
        <Logo priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.label)}
                onMouseLeave={() =>
                  setMenu((m) => (m === item.label ? null : m))
                }
              >
                {/* Hover/focus opens the panel; clicking navigates to the
                    Products page itself (standard mega-menu behaviour). */}
                <Link
                  href={item.href}
                  aria-expanded={menu === item.label}
                  aria-haspopup="true"
                  onFocus={() => setMenu(item.label)}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    menu === item.label
                      ? "text-genii-red"
                      : "text-foreground/80 hover:text-genii-red",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-3.5 text-muted-foreground transition-transform duration-150",
                      menu === item.label && "rotate-180",
                    )}
                  />
                </Link>

                {menu === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-2xl border border-border/70 bg-popover shadow-xl">
                      <div className="grid grid-cols-2 gap-x-2 p-3">
                        {groupChildren(item.children).map((group) => (
                          <div key={group.title}>
                            {group.title && (
                              <p className="px-3 pb-1.5 pt-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                                {group.title}
                              </p>
                            )}
                            {group.items.map((child) => (
                              <Link
                                key={child.label + child.href}
                                href={child.href}
                                onClick={() => setMenu(null)}
                                className="flex flex-col rounded-xl px-3 py-2 transition-colors hover:bg-muted"
                              >
                                <span className="text-sm font-semibold">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 border-t border-border/60 bg-muted/40 px-6 py-3.5">
                        {productQuickLinks.map((q) => (
                          <Link
                            key={q.label}
                            href={q.href}
                            onClick={() => setMenu(null)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-genii-red hover:underline"
                          >
                            {q.label}
                            <ArrowRight aria-hidden className="size-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-genii-red"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={ctas.bookDemo.href}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-genii-red"
          >
            {ctas.bookDemo.label}
          </Link>
          <CtaButton href={ctas.talkToExpert.href} size="md">
            {ctas.talkToExpert.label}
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background lg:hidden",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-t-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-base font-semibold"
          >
            Home
          </Link>
          {primaryNav.map((item) => (
            <div key={item.label} className="py-1">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-semibold"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col border-l border-border pl-3">
                  {groupChildren(item.children).map((group) => (
                    <div key={group.title} className="pb-1">
                      {group.title && (
                        <p className="pb-0.5 pt-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                          {group.title}
                        </p>
                      )}
                      {group.items.map((child) => (
                        <Link
                          key={child.label + child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-genii-red"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <CtaButton href={ctas.talkToExpert.href} className="w-full">
              {ctas.talkToExpert.label}
            </CtaButton>
            <CtaButton
              href={ctas.bookDemo.href}
              variant="outline"
              className="w-full"
            >
              {ctas.bookDemo.label}
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
