"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { CtaButton } from "@/components/shared/cta-button";
import { primaryNav, ctas } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          {primaryNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-genii-red"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="size-3.5 text-muted-foreground transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-popover p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label + child.href}
                        href={child.href}
                        className="flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
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
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={ctas.platformDemo.href}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-genii-red"
          >
            {ctas.platformDemo.label}
          </Link>
          <CtaButton href={ctas.talkToExpert.href} size="md">
            {ctas.talkToExpert.label}
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {primaryNav.map((item) => (
            <div key={item.label} className="py-1">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-semibold"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label + child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-sm text-muted-foreground hover:text-genii-red"
                    >
                      {child.label}
                    </Link>
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
