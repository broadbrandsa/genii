import Image from "next/image";
import { Container, Section } from "@/components/shared/section";
import { CtaButton } from "@/components/shared/cta-button";
import { HeroHeadline } from "@/components/sections/home/hero-headline";
import { Reveal } from "@/components/shared/reveal";
import { hero } from "@/content/home";
import { ctas } from "@/content/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-14 pb-10 sm:pt-20">
      {/* Photographic backdrop. The mask fades the whole composite — photo and
          scrim together — out toward the bottom, so the hero dissolves into the
          page background instead of ending on an edge. The scrim sits inside the
          mask so the photo is never revealed un-dimmed; the headline is dark
          text, and this shot is busy enough to fight it without one. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 38%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 38%, transparent 92%)",
        }}
      >
        <Image
          src="/images/pexels_99-6a71d77b86a1742672ffebc3@2x.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        {/* Black overlay, directly on the photo — deepens it before the scrim
            lifts it back. */}
        <div className="absolute inset-0 bg-black/40" />
        {/* White veil for legibility, balanced against the black above it. These
            two fight each other: too much of both and the photo flattens to grey
            (a black/30 + white/70 pass did exactly that). This pair lands the
            background around 60% luminance — dark enough to read as a deepened
            photo, light enough for the charcoal body copy to hold contrast.
            No radial pool: it read as a white blob in the middle of the shot. */}
        <div className="absolute inset-0 bg-background/55" />
      </div>

      {/* Layered background: dot texture + soft warm wash + brand orbs */}
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          maskImage:
            "radial-gradient(70% 60% at 50% 30%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 30%, #000 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, rgba(237,27,47,0.06), transparent 60%), radial-gradient(60% 50% at 90% 10%, rgba(251,169,57,0.08), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="genii-orb right-[-6rem] top-6 size-72 bg-genii-orange/25"
      />
      <div
        aria-hidden
        className="genii-orb left-[-8rem] top-40 size-80 bg-genii-pink/15"
      />
      <Container>
        {/* Hero copy — centred, with the Intelligence Layer visual stacked below */}
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-genii-orange/25 bg-genii-orange/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-genii-red">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-genii-orange" />
                <span className="relative inline-flex size-2 rounded-full genii-gradient" />
              </span>
              {hero.eyebrow}
            </span>
          </Reveal>
          <HeroHeadline />
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {hero.supporting}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaButton href={ctas.talkToExpert.href} size="lg">
                {ctas.talkToExpert.label}
              </CtaButton>
              <CtaButton href={ctas.bookDemo.href} variant="outline" size="lg">
                {ctas.bookDemo.label}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
