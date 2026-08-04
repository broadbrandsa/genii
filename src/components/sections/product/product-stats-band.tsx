import { Container } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import { stats as data } from "@/content/products";

export function ProductStatsBand() {
  return (
    <section className="relative overflow-hidden bg-genii-charcoal py-16 text-white sm:py-20">
      <div aria-hidden className="bg-dot-grid absolute inset-0 opacity-[0.12]" />
      <div
        aria-hidden
        className="genii-orb left-1/4 top-0 size-72 bg-genii-orange/30"
      />
      <div
        aria-hidden
        className="genii-orb right-1/4 bottom-0 size-72 bg-genii-purple/25"
      />
      <Container className="relative">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {data.heading}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {data.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} className="text-center">
              <CountUp
                value={item.value}
                className="block text-4xl font-extrabold genii-gradient-text-anim tabular-nums sm:text-5xl"
              />
              <p className="mx-auto mt-3 max-w-[14rem] text-sm text-white/70">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
