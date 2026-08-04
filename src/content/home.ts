// Homepage content — from Genii Homepage Design Brief (17 June 2026).

export const hero = {
  eyebrow: "ROOT CAUSE INTELLIGENCE FOR CONTACT CENTRES",
  headline: "We don't just score conversations.",
  statement:
    "We turn QA into agent, operational, customer and business intelligence.",
  supporting:
    "Genii combines AI automation with human insight to reveal root cause, business impact and the right actions to drive measurable improvement across your contact centre.",
} as const;

// Genii Intelligence Layer visual: Inputs -> Layer -> Intelligence + Action
export const intelligenceVisual = {
  inputs: [
    "Calls",
    "Chats",
    "Emails",
    "WhatsApp",
    "Transcripts",
    "Traditional Speech Analytics Outcomes",
    "AI Outcomes",
  ],
  center: {
    title: "Genii Intelligence Layer",
    stat: "1B Interactions Analysed",
    statSub: "Across industries and verticals.",
  },
  badges: ["Flexible Coverage", "Flexible Design", "Any Language"],
  actions: [
    {
      title: "QA Operational Management",
      copy: "Governed QA, reporting and workflow in one platform.",
    },
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

// Four layers of intelligence — a standalone block on the homepage.
export const intelligenceTypes = {
  heading: "Intelligence across every layer",
  subheading:
    "Genii turns the interactions you already have into intelligence — from the agent on the call to the boardroom.",
  items: [
    {
      title: "Agent Intelligence",
      copy: "Behaviours, performance, effectiveness, compliance and coaching opportunities.",
      icon: "Users",
    },
    {
      title: "Operational Intelligence",
      copy: "FCR, repeat contacts, AHT drivers, process breakdowns and operational friction.",
      icon: "Settings2",
    },
    {
      title: "Customer Intelligence",
      copy: "Sentiment, frustration, churn risk, brand conflict and experience breakdowns.",
      icon: "Heart",
    },
    {
      title: "Business Intelligence",
      copy: "Contact reasons, revenue leakage, product, pricing and service-failure drivers.",
      icon: "Building2",
    },
  ],
} as const;

export const environmentStrip = {
  heading: "Built to Work Across Your Environment",
  subheading:
    "Genii fits your current contact-centre environment, regardless of channel, vertical, language or source platform.",
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
  cta: { label: "Explore Discover", href: "/products/discover" },
} as const;

// "Where QA falls short" carousel — the gaps buyers recognise, each paired
// with what they actually need.
export const gaps = {
  heading: "Where traditional QA falls short",
  subheading:
    "The gaps most contact centres live with — and what it takes to close them.",
  items: [
    {
      id: "coverage",
      label: "QA coverage is too small",
      title: "Your QA Coverage Is Too Small to Protect the Business",
      problem:
        "Manual QA reviews a fraction of interactions. Risk, non-adherence, and poor behaviours go undetected until impact is visible.",
      need: "Scaled visibility across interactions, without sacrificing accuracy, trust, or governance.",
      image: "/images/qa-coverage-too-small.webp",
      icon: "EyeOff",
    },
    {
      id: "why",
      label: "What happened, not why",
      title: "You Can See What Happened, Not Why It Happened",
      problem:
        "Analytics tell you a step was missed or a score dropped. They don't explain what caused it.",
      need: "Behavioural and contextual intelligence that explains decisions, effort, hesitation, and breakdowns inside real conversations.",
      image: "/images/see-what-not-why.webp",
      icon: "HelpCircle",
    },
    {
      id: "signals",
      label: "Signals, not solutions",
      title: "Speech Analytics Generates Signals, Not Solutions",
      problem:
        "Topics and keywords are detected. But teams struggle to turn outputs into improvement.",
      need: "A way to connect speech analytics signals to behaviour, process, and outcomes so intelligence drives change.",
      image: "/images/speech-analytics-signals.webp",
      icon: "Radio",
    },
  ],
} as const;

// Client testimonials. Quotes and attributions as supplied by Genii.
export const testimonials = {
  heading: "What clients say",
  subheading:
    "Contact-centre and business leaders on what changed once they could see what was really driving performance.",
  items: [
    {
      quote:
        "Genii played a critical role in developing my strategy, while supporting the delivery of Insights which enabled us to deliver on KPIs for the financial year. My team was empowered to achieve positive transformation, performance improvement and financial gain.",
      name: "William Wyngaardt",
      role: "Senior Business Improvement Manager",
    },
    {
      quote:
        "Genii Interaction Intelligence is revolutionising the industry through a unique and very different non-traditional QA model. We are now able extract BI and also analyse specific trends on contact centre agent responses to customers and the use of business processes. We have simple dashboard with very useful insights into our business.",
      name: "Jacques Jonker",
      role: "Previous COO",
    },
    {
      quote:
        "Genii has helped improve my operational performance as we all now have a visual representation from our customer conversations that help understand how our actions affects business overall. It has given my operational leaders confidence in their ability to identify a trend and invest in the right initiatives to create positive change.",
      name: "Vaneshree Nadasen",
      role: "Operations Manager",
    },
    {
      quote:
        "I work with a great supplier who does call analysis for me. They have proven to be an invaluable strategic partner in our efforts to be the best in the industry. Two years ago we were rated 4th according to the SA-CSI surveys and recently we claimed top spot.",
      name: "Eloise Boesak",
      role: "Head – Customer Experience",
    },
  ],
} as const;

export const comparison = {
  heading: "Where Other Providers Stop. We Continue.",
  description:
    "Most providers stop at detection and dashboards. Genii keeps going — to root cause, action and measurable business impact.",
  benefits: [
    "Explains the why, not just the what",
    "Reveals root cause at scale",
    "Turns insight into action and workflow",
    "Connects every layer of intelligence",
  ],
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

// Client logo strip per the Homepage Design Brief (section 9).
// Brief rule: "Use accurate client logo files; do not approximate or distort logos."
// To activate a real logo: drop the licensed file into /public/images/clients/
// and set `logo` to its path. Until then the client name renders as a wordmark
// placeholder — never a recreated or approximated logo.
export type Client = {
  name: string;
  logo: string | null;
  /** Display size in CSS px. Assets are stored at 2x for retina. */
  w?: number;
  h?: number;
};

// Assets sourced from the current geniianalytics.com site, then trimmed of dead
// padding and normalised to a constant optical area (so a square mark like MTN
// doesn't overpower a long wordmark like Nedbank). Originals kept in
// public/images/clients/_original/. Never rescale one axis only — it distorts.
export const trusted = {
  heading: "Trusted Globally",
  logos: [
    // Brief-named clients first.
    { name: "MTN", logo: "/images/clients/mtn.png", w: 64, h: 64 },
    { name: "Old Mutual", logo: "/images/clients/old-mutual.png", w: 170, h: 38 },
    // Remaining roster, as carried on the current site.
    { name: "Vodacom", logo: "/images/clients/vodacom.png", w: 151, h: 43 },
    { name: "Absa", logo: "/images/clients/absa.png", w: 64, h: 64 },
    { name: "Nedbank", logo: "/images/clients/nedbank.png", w: 179, h: 36 },
    {
      name: "MultiChoice Africa",
      logo: "/images/clients/multichoice-africa.png",
      w: 103,
      h: 63,
    },
    { name: "Huawei", logo: "/images/clients/huawei.png", w: 164, h: 40 },
    {
      name: "BMW Financial Services",
      logo: "/images/clients/bmw-financial-services.png",
      w: 109,
      h: 60,
    },
    { name: "Santam", logo: "/images/clients/santam.png", w: 132, h: 49 },
    { name: "AIG", logo: "/images/clients/aig.png", w: 136, h: 48 },
    {
      name: "Momentum Health",
      logo: "/images/clients/momentum-health.png",
      w: 158,
      h: 41,
    },
    { name: "GEMS", logo: "/images/clients/gems.png", w: 123, h: 53 },
    {
      name: "Clientèle Life",
      logo: "/images/clients/clientele-life.png",
      w: 150,
      h: 43,
    },
    {
      name: "Affinity Health",
      logo: "/images/clients/affinity-health.png",
      w: 130,
      h: 50,
    },
    { name: "Sasolmed", logo: "/images/clients/sasolmed.png", w: 191, h: 34 },
    {
      name: "African Bank",
      logo: "/images/clients/african-bank.png",
      w: 193,
      h: 34,
    },
    { name: "Land Rover", logo: "/images/clients/land-rover.png", w: 111, h: 58 },
    { name: "KFC", logo: "/images/clients/kfc.png", w: 74, h: 64 },
    { name: "Burger King", logo: "/images/clients/burger-king.png", w: 64, h: 64 },
    { name: "Spur", logo: "/images/clients/spur.png", w: 113, h: 57 },
    { name: "WeWork", logo: "/images/clients/wework.png", w: 174, h: 37 },
    { name: "Afrihost", logo: "/images/clients/afrihost.png", w: 171, h: 38 },
    { name: "Vuma", logo: "/images/clients/vuma.png", w: 197, h: 33 },
    { name: "Tracker", logo: "/images/clients/tracker.png", w: 141, h: 46 },
    { name: "Harambee", logo: "/images/clients/harambee.png", w: 165, h: 39 },
    // Awaiting assets — brief-named, not on the current site.
    { name: "Wave Mobile Inc.", logo: null },
    { name: "TIH", logo: null },
    { name: "Foodhub", logo: null },
  ] as Client[],
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

// Moving phrase band shown under the hero.
export const ticker = [
  "Root cause, not just scores",
  "Evidence-linked insights",
  "Agent intelligence",
  "Operational intelligence",
  "Customer intelligence",
  "Business intelligence",
  "Human + AI governance",
  "Measurable business impact",
  "1B+ interactions analysed",
] as const;

// Scroll-reveal statement (word-by-word).
export const statement = {
  eyebrow: "From guessing to knowing",
  text: "Genii turns the interactions you already have into the intelligence to know what is driving performance — and exactly what to fix next.",
} as const;

// Alternating "platform in action" showcase rows. Visuals are branded
// placeholders until final product imagery is supplied.
export const showcase = {
  heading: "See the intelligence in action",
  subheading:
    "From a single interaction to boardroom-ready insight — Genii connects the dots at every layer.",
  rows: [
    {
      kicker: "Analyse",
      title: "Root cause, several layers deep",
      copy: "Genii doesn't stop at what happened. It segments every interaction into agent, operational, business and customer drivers, then traces the why through configurable root-cause trees.",
      points: [
        "Interactive root-cause analysis",
        "Upstream & downstream drivers",
        "Evidence linked to every finding",
      ],
      placeholder: "Root-Cause Analysis",
    },
    {
      kicker: "Automate",
      title: "AI QA across up to 100% of interactions",
      copy: "Pre-configured indicators score FCR, repeats, dissatisfaction, compliance and more — with AI summaries and evidence, and humans routed in only where judgement is needed.",
      points: [
        "Ready-to-use AI QA indicators",
        "Auto summaries & observability",
        "Human exception management",
      ],
      placeholder: "AI QA & Indicators",
    },
    {
      kicker: "Act",
      title: "Insight linked to action and impact",
      copy: "Turn findings into coaching, alerts and workflow — then quantify how behaviour change moves cost, risk, CX and revenue with board-ready reporting.",
      points: [
        "Coaching & workflow triggers",
        "Executive, board-ready reporting",
        "Business-impact quantification",
      ],
      placeholder: "Impact Dashboard",
    },
  ],
} as const;
