import { UserCheck } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { managedServices as data } from "@/content/products";

export function ProductManagedServices() {
  return (
    <Section id="managed-services" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Value-Added Service"
          title={data.webName}
          subtitle={data.positioning}
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          {data.intro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {data.useCases.map((uc) => (
            <div
              key={uc.title}
              className="card-lift group rounded-3xl border border-border/60 bg-background p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-genii-red/10 transition-transform duration-150 group-hover:scale-110">
                <UserCheck aria-hidden className="size-5 text-genii-red" />
              </span>
              <h3 className="mt-4 text-xl font-bold">{uc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {uc.meaning}
              </p>
              <div className="mt-4 rounded-xl bg-muted/60 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  When to use it
                </p>
                <p className="mt-1.5 text-sm text-foreground/85">{uc.when}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-base font-semibold">{data.outcome}</p>
          <CtaButton href="/#lead-form" variant="outline" size="lg">
            Ask About Managed Services
          </CtaButton>
        </div>
      </Container>
    </Section>
  );
}
