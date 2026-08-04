import type { Metadata } from "next";
import { Check, Phone, Mail, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section, Eyebrow } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact/contact-form";
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

            <div className="mx-auto mt-12 grid max-w-5xl items-start gap-5 lg:grid-cols-[1fr_1.15fr]">
              {/* Left column — contact details + what happens on the call */}
              <div className="flex flex-col gap-5">
                <Reveal>
                  <div className="genii-gradient relative overflow-hidden rounded-3xl p-6 text-white sm:p-7">
                    <div
                      aria-hidden
                      className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
                    />
                    <h2 className="relative text-lg font-bold">
                      Let&apos;s get in touch
                    </h2>
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

                <Reveal delay={80}>
                  <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-7">
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
              </div>

              {/* Right column — the form */}
              <Reveal delay={140}>
                <ContactForm />
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
