import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { FooterCta } from "@/components/layout/footer-cta";
import { iconMap } from "@/components/shared/icon-map";
import { footer, site } from "@/content/site";
import { whyGenii } from "@/content/home";

// Credibility strip shown above the closing CTA. The "1B Interactions
// Analysed" stat is excluded — it headlines the Real Results section.
const credibility = whyGenii.cards.filter(
  (c) => c.title !== "1B Interactions Analysed",
);

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/40">
      {/* Credibility strip */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background px-4 py-3.5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-genii-red/10">
                  {Icon && (
                    <Icon
                      aria-hidden
                      className="size-4 text-genii-red transition-transform duration-150 group-hover:scale-110"
                    />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-tight">
                    {card.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {card.copy}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing CTA band — click a button to reveal the inline form */}
      <FooterCta
        heading="From guessing to knowing what truly drives performance."
        copy="See how Genii turns the interactions you already have into measurable business outcomes."
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {footer.blurb}
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-genii-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            From guessing to knowing what truly drives performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
