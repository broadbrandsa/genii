import Image from "next/image";
import { Container, Section } from "@/components/shared/section";
import { trusted as data } from "@/content/home";

export function Trusted() {
  // Only clients with a real licensed asset appear in the strip — the brief
  // forbids approximating logos, and a text wordmark beside real logos reads as
  // a gap rather than a brand.
  const clients = data.logos.filter((c) => c.logo);
  const outstanding = data.logos.filter((c) => !c.logo).map((c) => c.name);
  // Duplicate the set so the marquee track can loop seamlessly.
  const track = [...clients, ...clients];

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
          {track.map((client, i) => {
            const hidden = i >= clients.length;
            return (
              // Rendered at its own pre-normalised size — both axes scale together,
              // so no logo is ever stretched or distorted.
              <Image
                key={`${client.name}-${i}`}
                src={client.logo as string}
                alt={hidden ? "" : client.name}
                aria-hidden={hidden}
                width={client.w ?? 160}
                height={client.h ?? 40}
                priority={false}
                className="shrink-0 opacity-70 transition-opacity duration-150 hover:opacity-100"
              />
            );
          })}
        </div>
      </div>

      {outstanding.length > 0 && (
        <Container>
          {/* Internal reminder for the build team — remove before go-live once the
              outstanding brand assets land. See public/images/clients/README.md. */}
          <p className="mt-8 text-center text-xs text-muted-foreground/70">
            Awaiting brand assets: {outstanding.join(", ")}.
          </p>
        </Container>
      )}
    </Section>
  );
}
