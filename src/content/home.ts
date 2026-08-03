// Homepage content — from Genii Homepage Design Brief (17 June 2026).

export const hero = {
  eyebrow: "BEYOND AUTOMATED QA",
  headline: "We don't just score conversations.",
  statement:
    "We turn QA into agent, operational, customer and business intelligence.",
  supporting:
    "Genii combines AI automation with human insight to reveal root cause, business impact and the right actions to drive measurable improvement across your contact centre.",
} as const;

// Genii Intelligence Layer visual: Inputs -> Layer -> Intelligence + Action
export const intelligenceVisual = {
  inputs: ["Calls", "Chats", "Emails", "WhatsApp", "Transcripts", "AI Outcomes"],
  center: {
    title: "Genii Intelligence Layer",
    subtitle: "Governed QA, reporting and workflow in one platform.",
  },
  intelligence: [
    "Agent Intelligence",
    "Operational Intelligence",
    "Customer Intelligence",
    "Business Intelligence",
  ],
  badges: [
    "Flexible Coverage",
    "Flexible Design",
    "Any Language",
    "QA Operational Management",
  ],
  actions: [
    {
      title: "AI QA Analysis & Root Cause",
      copy: "Explain what happened, why it happened and what to do next.",
    },
    {
      title: "Evidence-Linked Insights",
      copy: "Explainable insights backed by interaction evidence.",
    },
    {
      title: "Link Insight to Action",
      copy: "Turn insight into alerts, coaching and action.",
    },
  ],
} as const;

export const environmentStrip = {
  heading: "Built to Work Across Your Environment",
  subheading:
    "Genii fits your current contact-centre environment — no heavy re-platforming required.",
  items: [
    {
      title: "Any channel",
      copy: "Voice, transcripts, chat, email, WhatsApp and more.",
      icon: "MessagesSquare",
    },
    {
      title: "Any vertical",
      copy: "Sales, collections, retentions, service, complaints and more.",
      icon: "Layers",
    },
    {
      title: "Any language",
      copy: "Support for multilingual and regional operations.",
      icon: "Languages",
    },
    {
      title: "Independent of platform / source",
      copy: "Works with existing data and operating environments.",
      icon: "Plug",
    },
    {
      title: "Governance, security & audit",
      copy: "Role-based access, calibration, disputes and exception management.",
      icon: "ShieldCheck",
    },
    {
      title: "Custom coverage up to 100%",
      copy: "Choose the coverage model that fits your needs.",
      icon: "Gauge",
    },
  ],
} as const;

export const whyGenii = {
  heading: "Why Genii?",
  cards: [
    {
      title: "Scalable Performance",
      copy: "From team-level QA to enterprise-wide transformation.",
      icon: "TrendingUp",
    },
    {
      title: "13+ Years",
      copy: "Of contact centre and interaction intelligence expertise.",
      icon: "Award",
    },
    {
      title: "Expert Support",
      copy: "Backed by contact centre, SaaS and interaction intelligence experts.",
      icon: "Users",
    },
    {
      title: "AI with Governance",
      copy: "Powerful AI with seamless human-in-the-loop validation for trusted outcomes and where AI can't see.",
      icon: "ShieldCheck",
    },
    {
      title: "1B Interactions Analysed",
      copy: "Across industries and verticals.",
      icon: "Database",
    },
  ],
} as const;

export const realResults = {
  heading: "Real Results.",
  subheading:
    "Outcome-led proof points across sales, revenue protection, recovery, collections, retention and efficiency.",
  items: [
    {
      area: "Sales Acceleration",
      description:
        "Drive growth by unlocking more conversion and upsell opportunities.",
      metric: "30%+",
      label: "Conversion Increase",
    },
    {
      area: "Revenue Protection",
      description: "Prevent leakage, reduce risk and protect customer value.",
      metric: "<5%",
      label: "Risk Exposure",
    },
    {
      area: "Recovery",
      description: "Resolve issues faster and rebuild trust effectively.",
      metric: "20%+",
      label: "FCR Increase",
    },
    {
      area: "Collection Optimisation",
      description: "Improve recovery outcomes with the right conversations.",
      metric: "28%+",
      label: "Recovery Improvement",
    },
    {
      area: "Customer Retention",
      description: "Reduce churn by addressing what matters most.",
      metric: "15%+",
      label: "Churn Reduction",
    },
    {
      area: "Operational Efficiency",
      description: "Automate more. Reduce effort. Improve team productivity.",
      metric: "40–70%",
      label: "Efficiency Gain",
    },
  ],
} as const;

export const discoverCta = {
  heading:
    "Not sure where to start? Discover what's really happening in your contact centre.",
  copy: "Genii Discover delivers a fast, low-effort insight assessment so you can see key issues, root causes and opportunities before you commit.",
  cta: { label: "Explore Discover", href: "/products#discover" },
} as const;

export const comparison = {
  heading: "Where Other Providers Stop. We Continue.",
  video: {
    caption: "Watch the Genii explainer",
    youtubeId: "LQtBvp841b4",
  },
  rows: [
    {
      genii: "Explains why outcomes happened",
      others: "Score agents based on what happened",
    },
    { genii: "Reveals root cause", others: "Focus on detection" },
    {
      genii: "Turns insight into action, automation and workflow",
      others: "Produce dashboards and reports",
    },
    {
      genii: "Connects agent, operational, customer and business intelligence",
      others: "Focus mainly on agent performance",
    },
    {
      genii: "Works at scale and drives real value",
      others: "Use rule-based and rigid models",
    },
    {
      genii: "Analyses interactions at scale",
      others: "Rely on manual QA sampling",
    },
  ],
} as const;

export const trusted = {
  heading: "Trusted Globally",
  logos: ["MTN", "Wave Mobile Inc.", "Old Mutual", "TIH", "Foodhub"],
} as const;

export const leadForm = {
  heading: "See What's Possible for Your Contact Centre",
  copy: "Book a personalised demo or request a free POV to see how Genii can reveal what matters, take the right actions and drive measurable results.",
  useCases: [
    "Customer Experience",
    "Client Retentions",
    "Sales Performance",
    "Collections",
    "Performance Management",
    "Compliance & Governance",
    "Other",
  ],
  privacy: "We respect your privacy. Your information is safe with us.",
} as const;
