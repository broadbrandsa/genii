import {
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  FileText,
  AudioLines,
  Sparkles,
  Users,
  Settings2,
  Heart,
  Building2,
} from "lucide-react";
import { intelligenceVisual as data } from "@/content/home";

const inputIcons = [
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  FileText,
  AudioLines,
  Sparkles,
];
const intelIcons = [Users, Settings2, Heart, Building2];

/**
 * Genii Intelligence Layer visual.
 * Structure: Inputs -> Genii Intelligence Layer -> Intelligence + Action.
 * Clean linework, subtle brand glow, lighter accents.
 */
export function IntelligenceLayer() {
  return (
    <div className="relative rounded-3xl border border-border/70 bg-card/80 p-5 backdrop-blur genii-glow sm:p-7">
      {/* soft ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(243,112,53,0.10), transparent 70%)",
        }}
      />

      <div className="relative grid items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Inputs */}
        <div className="flex flex-col gap-2.5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Inputs
          </p>
          {data.inputs.map((label, i) => {
            const Icon = inputIcons[i % inputIcons.length];
            return (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-sm font-medium leading-tight transition-all duration-150 hover:-translate-y-0.5 hover:border-genii-orange/50 hover:shadow-sm"
              >
                <Icon aria-hidden className="size-4 shrink-0 text-genii-orange" />
                {label}
              </div>
            );
          })}
        </div>

        {/* Center: Genii Intelligence Layer */}
        <div className="flex flex-col items-center gap-4">
          <div
            aria-hidden
            className="hidden h-px w-full bg-gradient-to-r from-transparent via-genii-orange/40 to-transparent lg:block"
          />
          <div className="relative flex aspect-square w-52 items-center justify-center sm:w-60">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full animate-spin-slow blur-[1px]"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--genii-red), var(--genii-orange), var(--genii-gold), var(--genii-pink), var(--genii-purple), var(--genii-red))",
              }}
            />
            <div className="absolute inset-[5px] rounded-full bg-card" />
            <div className="absolute inset-[5px] rounded-full genii-gradient opacity-[0.06]" />
            <div className="relative z-10 px-6 text-center">
              <p className="text-lg font-bold leading-tight genii-gradient-text">
                {data.center.title}
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-2">
            {data.intelligence.map((label, i) => {
              const Icon = intelIcons[i % intelIcons.length];
              return (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/70 px-2.5 py-2 text-xs font-semibold"
                >
                  <Icon aria-hidden className="size-3.5 shrink-0 text-genii-red" />
                  <span className="leading-tight">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Intelligence + Action */}
        <div className="flex flex-col gap-2.5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Intelligence + Action
          </p>
          {data.actions.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-border/70 bg-background/70 p-3 transition-all duration-150 hover:translate-x-0.5 hover:border-genii-orange/50 hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-genii-red">{a.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                {a.copy}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom badges */}
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-border/60 pt-5">
        {data.badges.map((b) => (
          <span
            key={b}
            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
