import type { Metadata } from "next";
import { Check, Phone, Mail, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { contactPage as data } from "@/content/company";

const detailIcons = [Phone, Mail, Briefcase];

export const metadata: Metadata = {
  title: "Contact Genii — Book a 30-Minute Introduction Call",
  description:
    "Let's connect for a no-obligation, 30-minute introduction call to explore how Genii can support your contact centre.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Section className="relative overflow-hidden pt-14 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 0%, rgba(243,112,53,0.09), transparent 65%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {data.heading}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {data.intro}
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
              {/* What happens on the call */}
              <Reveal>
                <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 sm:p-7">
                  <h2 className="text-lg font-bold">{data.callHeading}</h2>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {data.callPoints.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-genii-red/10">
                          <Check aria-hidden className="size-3 text-genii-red" />
                        </span>
                        <span className="text-foreground/90">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Contact details */}
              <Reveal delay={100}>
                <div className="genii-gradient relative flex h-full flex-col overflow-hidden rounded-3xl p-6 text-white sm:p-7">
                  <div
                    aria-hidden
                    className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
                  />
                  <h2 className="relative text-lg font-bold">Get in touch</h2>
                  <ul className="relative mt-5 flex flex-col gap-4">
                    {data.details.map((d, i) => {
                      const Icon = detailIcons[i % detailIcons.length];
                      return (
                        <li key={d.value} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/15">
                            <Icon aria-hidden className="size-4" />
                          </span>
                          <span>
                            <span className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                              {d.label}
                            </span>
                            <a
                              href={d.href}
                              className="block text-sm font-bold underline-offset-4 hover:underline"
                            >
                              {d.value}
                            </a>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Reuse the site-wide interactive CTA form below */}
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
              Prefer to send your details? Use the form at the bottom of this page
              and a Genii expert will be in touch.
            </p>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
