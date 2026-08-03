import { Container, Section } from "@/components/shared/section";
import { trusted as data } from "@/content/home";

export function Trusted() {
  // Duplicate the set so the marquee track can loop seamlessly.
  const track = [...data.logos, ...data.logos];

  return (
    <Section id="trusted" className="!py-20">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {data.heading}
        </p>
      </Container>

      <div
        className="group relative mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-x-16 group-hover:[animation-play-state:paused] sm:gap-x-24">
          {track.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              aria-hidden={i >= data.logos.length}
              className="shrink-0 text-xl font-bold tracking-tight text-foreground/35 transition-colors duration-150 hover:text-genii-red sm:text-2xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          Client logos shown as placeholders pending final, licensed brand assets.
        </p>
      </Container>
    </Section>
  );
}
