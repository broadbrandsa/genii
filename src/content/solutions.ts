// Solutions content. Names and summaries mirror the current live site
// (geniianalytics.com) so the IA and positioning stay consistent.
//
// NOTE: the live site also carries deeper per-solution detail ("What Genii
// Uncovered", "The Result", case-study numbers). That copy has not been
// supplied for this build, so each solution here carries its approved summary
// plus the outcomes Genii already evidences. See docs/ASSUMPTIONS.md.

export type Solution = {
  slug: string;
  name: string;
  summary: string;
  /** What Genii surfaces for this audience. */
  surfaces: string[];
  icon: string;
  accent: string;
};

export const solutions: Solution[] = [
  {
    slug: "sales-performance",
    name: "Sales Performance",
    summary:
      "Transform sales conversations into actionable intelligence that increases conversions and revenue.",
    surfaces: [
      "Conversion and upsell drivers",
      "Objection handling and cross-sell behaviour",
      "Script adherence linked to outcomes",
    ],
    icon: "TrendingUp",
    accent: "var(--genii-red)",
  },
  {
    slug: "customer-experience",
    name: "Customer Experience",
    summary:
      "See what drives great CX and what undermines it by connecting every interaction to its outcome.",
    surfaces: [
      "Sentiment, frustration and customer effort",
      "Experience breakdowns and brand conflict points",
      "Dissatisfaction root causes",
    ],
    icon: "Heart",
    accent: "var(--genii-orange)",
  },
  {
    slug: "client-retentions",
    name: "Client Retentions",
    summary:
      "Turn customer interactions into insight that helps prevent churn and build long-term loyalty.",
    surfaces: [
      "Churn-risk signals and save-rate drivers",
      "Retention conversation effectiveness",
      "Repeat contact and unresolved-issue patterns",
    ],
    icon: "HeartHandshake",
    accent: "var(--genii-pink)",
  },
  {
    slug: "collections",
    name: "Collections",
    summary:
      "Reveal the conversational and process drivers behind successful debt recovery while ensuring compliance.",
    surfaces: [
      "Recovery and promise-to-pay drivers",
      "Compliance and regulatory adherence",
      "Negotiation and treatment effectiveness",
    ],
    icon: "Coins",
    accent: "var(--genii-purple)",
  },
  {
    slug: "performance-management",
    name: "Performance Management",
    summary:
      "Understand what truly drives QA performance by connecting scores to behaviour and outcomes.",
    surfaces: [
      "Agent-controlled vs non-agent-controlled outcomes",
      "Coaching priorities backed by evidence",
      "Calibration, disputes and QA governance",
    ],
    icon: "Gauge",
    accent: "var(--genii-gold)",
  },
];

export const solutionsPage = {
  eyebrow: "Solutions",
  heading: "Intelligence for the outcomes you own",
  subheading:
    "Genii delivers Interaction Intelligence built for real contact-centre complexity — applied to the outcome your team is measured on.",
} as const;
