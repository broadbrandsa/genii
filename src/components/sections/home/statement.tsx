import { Users, Settings2, Heart, Building2, type LucideIcon } from "lucide-react";
import { ScrollRevealText } from "@/components/shared/scroll-reveal-text";
import { Spotlight } from "@/components/shared/spotlight";
import { SectionImage } from "@/components/shared/section-image";
import { statement, intelligenceTypes } from "@/content/home";

// The four intelligence-layer blocks shown beneath the statement.
const blocks = intelligenceTypes.items;
const blockIcons: Record<string, LucideIcon> = {
  Users,
  Settings2,
  Heart,
  Building2,
};

export function Statement() {
  return (
    <section id="statement" className="relative">
      <div aria-hidden className="bg-dot-grid absolute inset-0 opacity-40" />
      <div className="relative">
        <ScrollRevealText
          eyebrow={statement.eyebrow}
          text={statement.text}
          aside={
            <SectionImage
              src="/images/microsoft-copilot-txZv4HQJRpE-unsplash.jpg"
              alt="A contact-centre team reviewing customer interaction insights together."
              aspect="aspect-[4/5]"
            />
          }
        >
          {/* Rendered inside the sticky viewport, beneath the animating text,
              so the blocks stay on screen while the copy reveals. */}
          <div className="grid gap-3 sm:grid-cols-2">
            {blocks.map((card) => {
              const Icon = blockIcons[card.icon];
              return (
                <Spotlight
                  key={card.title}
                  className="card-lift group flex h-full flex-col rounded-2xl border border-border/60 bg-background p-4"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-genii-red/10 transition-colors duration-150 group-hover:bg-genii-red/15">
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="size-4.5 text-genii-red transition-transform duration-150 group-hover:scale-110"
                      />
                    )}
                  </span>
                  <h3 className="mt-3 text-sm font-bold">{card.title}</h3>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {card.copy}
                  </p>
                </Spotlight>
              );
            })}
          </div>
        </ScrollRevealText>
      </div>
    </section>
  );
}
