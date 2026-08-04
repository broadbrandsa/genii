import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { FooterCta } from "@/components/layout/footer-cta";
import { footer, site } from "@/content/site";
import { leadForm } from "@/content/home";
import { contactPage } from "@/content/company";

/**
 * @param showCta  Set false on pages that already carry their own lead form,
 *                 so the closing band isn't a second CTA.
 */
export function SiteFooter({ showCta = true }: { showCta?: boolean } = {}) {
  const year = 2026;
  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/40">
      {/* Closing CTA band — click a button to reveal the inline form.
          Heading and copy are the Homepage Design Brief's section 10 wording,
          held in content/home.ts so this band and the copy stay in sync. */}
      {showCta && (
        <FooterCta heading={leadForm.heading} copy={leadForm.copy} />
      )}

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {footer.blurb}
            </p>
            {/* Contact details */}
            <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Let&apos;s get in touch
            </h3>
            <ul className="mt-3 space-y-1.5">
              {contactPage.details.map((d) => (
                <li key={d.value} className="text-sm">
                  <span className="text-muted-foreground">{d.label}: </span>
                  <a
                    href={d.href}
                    className="font-medium text-foreground/85 transition-colors hover:text-genii-red"
                  >
                    {d.value}
                  </a>
                </li>
              ))}
            </ul>
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
