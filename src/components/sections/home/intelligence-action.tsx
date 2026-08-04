"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Section, SectionHeading } from "@/components/shared/section";
import { intelligenceVisual } from "@/content/home";

/**
 * Intelligence + Action — the stacked "deck" that used to sit under the hub.
 * Each card shows only its headline; hovering brings it forward and reveals
 * the description. Cards fade up as they scroll into view.
 */
export function IntelligenceAction() {
  const reduce = useReducedMotion();
  const actions = intelligenceVisual.actions;

  return (
    <Section id="intelligence-action" className="!py-16">
      <Container>
        <SectionHeading
          eyebrow="Intelligence + Action"
          title="Turn intelligence into action"
          subtitle="Genii doesn't stop at insight — it links every finding to the workflow, coaching and reporting that moves performance."
        />
        <div className="relative mx-auto mt-12 max-w-md">
          {actions.map((a, j) => (
            <motion.div
              key={a.title}
              style={{ marginTop: j === 0 ? 0 : "-0.75rem" }}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: j * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group/card relative cursor-default rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-sm transition-[box-shadow,border-color] duration-200 hover:z-50 hover:border-genii-orange/60 hover:shadow-xl"
            >
              <p className="text-sm font-semibold text-genii-red">{a.title}</p>
              {/* Description tucked away until hover (grid-rows height animation) */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                <div className="overflow-hidden">
                  <p className="pt-1.5 text-xs leading-snug text-muted-foreground">
                    {a.copy}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
