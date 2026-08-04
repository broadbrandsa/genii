import Link from "next/link";
import { ArrowRight, Sparkles, UserCheck, Rocket } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

const services = [
  {
    icon: Sparkles,
    title: "Genii Discover",
    copy: "A standalone insight product — know where the biggest opportunity sits before deploying.",
    href: "/products#discover",
    color: "var(--genii-purple)",
  },
  {
    icon: UserCheck,
    title: "Managed Services",
    copy: "Human QA support & AI exception management, where judgement is required.",
    href: "/products#managed-services",
    color: "var(--genii-red)",
  },
  {
    icon: Rocket,
    title: "Genii Enable",
    copy: "Structured implementation, enablement and adoption support for every roll-out.",
    href: "/products#enable",
    color: "var(--genii-orange)",
  },
] as const;

export function ProductServicesRouter() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Beyond the platform"
          title="Services & insights"
          subtitle="Not everything starts with a platform deployment — Genii also helps you find the starting point, keep humans in the loop and land the roll-out."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  href={s.href}
                  className="card-lift group flex h-full flex-col rounded-3xl border border-border/60 bg-background p-6"
                >
                  <span
                    className="flex size-11 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${s.color} 10%, transparent)`,
                    }}
                  >
                    <Icon aria-hidden className="size-5.5" style={{ color: s.color }} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-genii-red">
                    Explore
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
