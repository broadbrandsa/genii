import { Users, Settings2, Heart, Building2, type LucideIcon } from "lucide-react";
import { ScrollRevealText } from "@/components/shared/scroll-reveal-text";
import { Spotlight } from "@/components/shared/spotlight";
import { SectionImage } from "@/components/shared/section-image";
import { iconMap } from "@/components/shared/icon-map";
import { statement, intelligenceTypes, whyGenii } from "@/content/home";

// The four intelligence-layer blocks shown beneath the statement.
const blocks = intelligenceTypes.items;
const blockIcons: Record<string, LucideIcon> = {
  Users,
  Settings2,
  Heart,
  Building2,
};

// Credibility blocks shown as a compact strip above the statement (the "1B
// Interactions Analysed" stat is excluded — it headlines Real Results).
const credibility = whyGenii.cards.filter(
  (c) => c.title !== "1B Interactions Analysed",
);

export function Statement() {
  return (
    <section id="statement" className="relative bg-muted/40">
      <div aria-hidden className="bg-dot-grid absolute inset-0 opacity-40" />
      <div className="relative">
        <ScrollRevealText
          eyebrow={statement.eyebrow}
          text={statement.text}
          above={
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {credibility.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <div
                    key={card.title}
                    className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/70 px-3 py-2.5"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-genii-red/10">
                      {Icon && (
                        <Icon
                          aria-hidden
                          className="size-3.5 text-genii-red transition-transform duration-150 group-hover:scale-110"
                        />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold leading-tight">
                        {card.title}
                      </span>
                      <span className="block text-[11px] leading-snug text-muted-foreground">
                        {card.copy}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          }
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
