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
      {/* Photographic backdrop, graded to black. An earlier pass veiled it in
          white so the default dark copy stayed readable; that fought the black
          overlay and flattened the photo to grey. Grading down instead keeps the
          shot's contrast — the copy is recoloured for a dark ground below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <Image
          src="/images/pexels_99-6a71d77b86a1742672ffebc3@2x.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Flat black for overall depth and text contrast. */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Vertical grade — the fade at the bottom now lands on black rather
            than dissolving into the white page. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black" />
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
            {/* Light-on-dark: the hero ground is now graded to black. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-genii-orange" />
                <span className="relative inline-flex size-2 rounded-full genii-gradient" />
              </span>
              {hero.eyebrow}
            </span>
          </Reveal>
          <HeroHeadline />
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">
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
