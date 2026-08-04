// Product page content — from Genii Product Page Positioning Document (16 June 2026).

export const productHero = {
  headline: "From Simple Automated QA to Deep Root-Cause Intelligence",
  supporting:
    "Genii helps contact centres move from simple automated QA into performance segmentation, human exception management and deep root-cause intelligence — so teams can reduce QA overhead, improve performance and understand what truly drives customer, operational and business outcomes.",
  note: "Start with what you need today. Scale as your operation matures.",
  journey: [
    "Digitise QA",
    "Launch Pre-Configured AI QA",
    "Segment Performance Drivers",
    "Analyse Root Cause Several Layers Deep",
  ],
} as const;

export const environment = {
  heading: "Built to Work Across Your Environment",
  copy: "Genii fits into your current operating environment, regardless of channel, vertical, language or source platform.",
  items: [
    "Any channel: voice, transcripts, chat, email, WhatsApp and more.",
    "Any vertical: sales, collections, retentions, service, back office, complaints and more.",
    "Any language: multilingual and regional operating environments.",
    "Independent of platform / source data: works with existing interaction data, metadata, assessments, scorecards and analytics outputs.",
    "Governance, security and audit trails: role-based access, calibration, disputes, exception management and controlled workflows.",
    "Custom coverage up to 100%: choose the coverage model that fits maturity, risk, budget and objectives.",
  ],
} as const;

export type ProductTier = {
  id: string;
  name: string;
  descriptor: string;
  pricing: string;
  role: string;
  summary: string;
  efficiency: string;
  outcome: string;
  includes: string[];
  accent: string; // brand accent for the card
};

export const tiers: ProductTier[] = [
  {
    id: "core",
    name: "Core",
    descriptor: "Digital Quality Management System",
    pricing: "R150 / agent / month",
    role: "Digitise QA & manage quality outputs",
    summary:
      "For teams that need to digitise, govern and manage the full QA process in one controlled application. Core replaces spreadsheets, poorly built QA modules and disconnected processes with structured scorecards, assessment workflows, calibration, disputes, coaching actions, dashboards, reporting and audit trails. It can also operationalise existing analytics or AI outputs by giving teams a governed place to view, validate, assess, coach, dispute and report.",
    efficiency:
      "Reduce QA effort by up to 60% by digitising and streamlining the quality management process.",
    outcome:
      "Digitise QA, reduce effort and manage quality outputs in one governed environment.",
    includes: [
      "End-to-end QA oversight and management in one application",
      "Multi-tenant / group structure",
      "Role-based access and personnel management",
      "Flexible scorecard logic, weightings, thresholds and control types",
      "Calibration workflows",
      "Agent-led and QA-led disputes",
      "Automated sample plan allocation",
      "Coaching actions and workflows",
      "Dashboards, reporting and audit trails",
      "View existing transcripts / interaction outputs where available",
      "Operationalise existing analytics or AI outputs through Genii workflows",
    ],
    accent: "var(--genii-red)",
  },
  {
    id: "indicate",
    name: "Gen-AI Indicate",
    descriptor: "Pre-Configured AI QA",
    pricing: "Custom pricing",
    role: "Launch pre-configured AI QA faster",
    summary:
      "The magic of Indicate. It is not simply AI scoring added to Core. Indicate gives clients ready-to-use AI QA indicators and pre-configured scorecard logic for key contact centre outcomes such as FCR, repeat contact, dissatisfaction, transfers, compliance, contact reasons and customer experience signals. It automates scoring, summaries and evidence across more interactions without forcing clients to design every metric from scratch.",
    efficiency:
      "Reduce manual QA scoring overhead by automating key indicators and shifting humans into review, validation and coaching.",
    outcome:
      "Launch AI QA faster with ready-to-use indicators, automated scoring and evidence-backed performance visibility.",
    includes: [
      "Everything in Core",
      "Pre-configured AI QA indicators and scorecard logic",
      "AI auto-scoring up to 100% of interactions",
      "Automated contact reasons and outcomes",
      "Individual AI interaction summaries",
      "AI observability and evidence",
      "Transcriptions and translations by interaction",
      "Use existing or Genii-supplied transcription for AI scoring",
      "Human exception management where AI cannot see, infer or validate",
    ],
    accent: "var(--genii-orange)",
  },
  {
    id: "connect",
    name: "Gen-AI Connect",
    descriptor: "Performance Segmentation & Action",
    pricing: "Custom pricing",
    role: "Segment performance drivers and trigger action",
    summary:
      "Connect introduces performance segmentation. It goes beyond scoring and indicators by segmenting outcomes into meaningful drivers: agent-controlled, non-agent-controlled, operational, business and customer drivers. This is where Genii helps teams understand what happened, why it happened, who or what can influence it, and what action should follow.",
    efficiency:
      "Move toward minimal QA overhead by shifting people from manual scoring into exception management, calibration, coaching and operational improvement.",
    outcome:
      "Segment performance into controllable drivers and root causes so teams know what action to take next.",
    includes: [
      "Everything in Gen-AI Indicate",
      "Performance segmentation by driver and responsibility",
      "Agent-controlled vs non-agent-controlled outcome visibility",
      "Deep scorecard customisation with conditional logic",
      "Configurable root-cause trees",
      "Upstream and downstream performance segmentation",
      "Workflow triggers, coaching actions and escalations",
      "Action-linked reporting and operational dashboards",
    ],
    accent: "var(--genii-pink)",
  },
  {
    id: "ultra",
    name: "Gen-AI Ultra",
    descriptor: "Multi-Layer Root-Cause Intelligence",
    pricing: "Custom pricing",
    role: "Analyse root cause several layers deep",
    summary:
      "Ultra is the deepest intelligence layer. It extends root-cause intelligence several layers deep and connects those insights to measurable business impact. Ultra helps leaders quantify, compare and understand what truly drives performance, cost, CX, risk, revenue and strategic outcomes.",
    efficiency:
      "Replace traditional QA overhead with AI-governed intelligence, human validation and executive-level decision support.",
    outcome:
      "Analyse root cause several layers deep and connect interaction intelligence to business impact.",
    includes: [
      "Everything in Gen-AI Connect",
      "Root-cause intelligence several layers deep",
      "Full strategic intelligence layer",
      "Custom executive reporting",
      "Business impact analysis",
      "Comparative performance views",
      "Trend and driver analysis",
      "Strategic insight modelling",
      "Board and Exco-ready insight packs",
      "Prioritisation of revenue, risk, cost and CX opportunities",
    ],
    accent: "var(--genii-purple)",
  },
];

export const journeyLine =
  "Core structures quality. Indicate automates with pre-configured indicators. Connect segments performance into meaningful drivers. Ultra goes several root-cause layers deep to quantify business impact.";

export const enable = {
  heading: "Genii Enable — Professional Services Roll-Out",
  subheading: "Structured implementation, enablement and adoption support.",
  copy: "Every Genii solution is supported by a Professional Services roll-out to help clients move from product selection to operational adoption with clarity and control. We don't simply deploy technology — we support the configuration, alignment, testing, governance and enablement required for quality, operations and leadership teams to adopt the solution with confidence.",
  supports: [
    "Implementation planning and stakeholder alignment",
    "Product configuration and operating model set-up",
    "Scorecard, indicator and workflow configuration",
    "Data, metadata and integration readiness",
    "AI outcome alignment and validation",
    "Calibration and governance set-up",
    "User access, roles and permissions",
    "Reporting and dashboard configuration",
    "Training and enablement for key users",
    "Adoption support and transition planning",
    "Go-live readiness and early-life support",
  ],
  outcome:
    "A structured roll-out that helps clients implement Genii properly, adopt it confidently and start turning interaction intelligence into operational action.",
} as const;

export const discover = {
  heading: "Genii Discover",
  kicker: "Insight Product",
  positioning: "Discover gives you the intelligence to know where to start.",
  lead: "Discover what your interactions are really telling you — before you decide what to fix.",
  body: "Genii Discover is designed for organisations that know there is value hidden in their customer interactions, but do not yet know exactly where the biggest problem, opportunity or business case sits. It is a focussed engagement — analysing a defined number of interactions and delivering a comprehensive insight report across agent performance, operations, customer experience, business drivers and strategic impact. It is a decision tool.",
  surfaces: [
    {
      title: "Agent Intelligence & QA",
      copy: "Behaviour patterns, QA performance, coaching opportunities, compliance signals and agent-controlled outcomes.",
    },
    {
      title: "Operational Intelligence",
      copy: "FCR / nFCR, repeat contacts, AHT drivers, process breakdowns, operational friction and performance drivers.",
    },
    {
      title: "Business Intelligence",
      copy: "Contact reasons, product issues, pricing issues, service failures, revenue leakage, cost drivers and customer-impacting problems.",
    },
    {
      title: "Customer Intelligence",
      copy: "Frustration, sentiment, dissatisfaction, churn risk, brand conflict points and experience breakdowns.",
    },
    {
      title: "Strategic Intelligence",
      copy: "High-impact opportunities, executive themes, prioritised actions and the areas most likely to influence cost, risk, CX, revenue and performance.",
    },
  ],
  bestFor: [
    "Proving value before a full rollout",
    "Building a business case",
    "Understanding contact reasons and drivers",
    "Identifying QA, CX, cost or revenue leakage",
    "Prioritising where AI automation should start",
    "Giving executives fast, evidence-based insight",
  ],
  outcome:
    "Know where the biggest opportunity sits before deciding what to automate, operationalise or scale.",
} as const;

export const managedServices = {
  heading: "Managed Services",
  webName: "Human QA Support & AI Exception Management",
  positioning:
    "Managed Services helps clients reduce QA overhead while keeping human judgement where it is required by design, risk or AI confidence. It is not generic outsourcing.",
  intro:
    "For organisations that need expert human review alongside the Genii platform. Managed Services can support two distinct needs — they do not have to be connected. A client may use it for AI exception review, for human-in-the-loop QA, or for both.",
  useCases: [
    {
      title: "AI Exception Management",
      meaning:
        "Expert human review where AI cannot confidently see, infer, validate or score the interaction.",
      when: "For Indicate, Connect or Ultra clients where AI handles repeatable scoring but certain interactions require human judgement, missing context, assurance or validation.",
    },
    {
      title: "Human-in-the-Loop QA",
      meaning:
        "Human QA support where the client still requires manual review as part of their quality model.",
      when: "For clients who want human assessment for assurance, compliance, calibration, high-risk interactions, disputes, quality control or operational trust.",
    },
  ],
  outcome:
    "Flexible human quality support without carrying all QA capacity internally.",
} as const;

export type LayerRow = {
  layer: string;
  surfaces: string;
  // Concentration 0-5 per tier: [core, indicate, connect, ultra]
  concentration: [number, number, number, number];
};

export const intelligenceLayers: LayerRow[] = [
  {
    layer: "Agent Intelligence & QA",
    surfaces:
      "Auto QA, behaviours, performance, effectiveness, compliance, coaching opportunities and agent-controlled outcomes.",
    concentration: [5, 5, 5, 5],
  },
  {
    layer: "Operational Intelligence",
    surfaces:
      "Operational performance, FCR / nFCR, repeat contacts, AHT, compliance trends, process breakdowns and operational friction.",
    concentration: [3, 3, 4, 5],
  },
  {
    layer: "Business Intelligence",
    surfaces:
      "Contact reasons, product issues, pricing issues, supply-chain issues, service failures, revenue-leakage indicators and cost drivers.",
    concentration: [2, 3, 4, 5],
  },
  {
    layer: "Customer Intelligence",
    surfaces:
      "Churn risk, brand conflict points, frustration, sentiment, dissatisfaction signals, customer effort and experience breakdowns.",
    concentration: [2, 2, 3, 5],
  },
  {
    layer: "Strategic Intelligence",
    surfaces:
      "Executive reporting, business-impact modelling, trend analysis, benchmarking, strategic prioritisation and board-ready insight. Ultra is the only full Strategic Intelligence layer.",
    concentration: [1, 1, 2, 5],
  },
];

export const useCaseGroups = [
  {
    title: "QA & Performance Efficiency",
    items: [
      "Reduce QA overhead",
      "Move toward no traditional QA overhead",
      "Auto-score performance",
      "Elevate performance visibility",
      "Faster improvement cycles",
      "Higher KPI performance",
    ],
  },
  {
    title: "Compliance & Governance",
    items: [
      "Compliance reassurance",
      "Govern AI and human scoring",
      "Manage exceptions where AI cannot see",
      "Maintain audit trails and evidence",
    ],
  },
  {
    title: "CX, Cost & Operational Drivers",
    items: [
      "Know key CX and cost drivers",
      "Lower cost per contact",
      "Optimise cost-to-serve",
      "Identify repeat demand and FCR drivers",
      "Understand contact reasons",
    ],
  },
  {
    title: "Business Impact & ROI",
    items: [
      "Quantify what drives success",
      "Link behaviour to outcome",
      "Prioritise high-impact actions",
      "Elevate performance ROI",
      "Identify revenue, risk, cost and CX opportunities",
    ],
  },
];

export type FeatureRow = {
  capability: string;
  core: boolean;
  indicate: boolean;
  connect: boolean;
  ultra: boolean;
};

export const featureMatrix: FeatureRow[] = [
  { capability: "End-to-end QA oversight and management in one application", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Single instance supports multi-tenant / groups", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Role-based access and personnel management", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Flexible scorecard logic, weightings, thresholds and control types", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Calibration workflows for consistent QA / AI scoring", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Agent-led and QA-led dispute processes", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Assign assessments automatically based on sample plan rules", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Route coaching actions automatically and complete online", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Custom assignments and workflows", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Bring in and work with any data source; export all data", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Instant triggers when performance thresholds are missed", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Interactive reporting and multi-dimensional filters", core: true, indicate: true, connect: true, ultra: true },
  { capability: "On-demand performance summaries for individual agents", core: true, indicate: true, connect: true, ultra: true },
  { capability: "AI-generated reporting summaries for rapid review", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Score human agents and AI chatbots in the same workflow", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Integration APIs to visualise, act and coach on your own AI / speech analytics outcomes", core: true, indicate: false, connect: false, ultra: false },
  { capability: "View existing transcripts / interaction outputs where available", core: true, indicate: true, connect: true, ultra: true },
  { capability: "Use own or Genii-supplied transcription for AI scoring", core: false, indicate: true, connect: true, ultra: true },
  { capability: "AI auto-scoring up to 100% of interactions", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Pre-configured AI scorecard indicators (FCR, repeats, DSAT, transfers…)", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Automated contact reasons / outcomes with performance summaries", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Transcriptions and translations by interaction", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Individual AI interaction summaries", core: false, indicate: true, connect: true, ultra: true },
  { capability: "AI observability / evidence", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Human exception management where AI cannot see / validate", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Human-in-the-loop AI review workflows", core: false, indicate: true, connect: true, ultra: true },
  { capability: "Deep scorecard customisation with conditional logic", core: false, indicate: false, connect: true, ultra: true },
  { capability: "Performance segmentation by driver and responsibility", core: false, indicate: false, connect: true, ultra: true },
  { capability: "Auto-populated root-cause tree: upstream / downstream", core: false, indicate: false, connect: true, ultra: true },
  { capability: "Auto-populated root-cause tree: multiple layers deep", core: false, indicate: false, connect: false, ultra: true },
  { capability: "Custom executive reporting", core: false, indicate: false, connect: false, ultra: true },
  { capability: "Full strategic intelligence layer", core: false, indicate: false, connect: false, ultra: true },
];

export const howItWorks = [
  { step: "Ingest", copy: "Bring in interactions, metadata, scorecards, transcripts, existing AI outputs, speech analytics results or chatbot conversations." },
  { step: "Assess", copy: "Use human QA, AI scoring or a combination of both to evaluate interactions against structured scorecards, indicators and business rules." },
  { step: "Evidence", copy: "Link outcomes to reasons, evidence, summaries, transcripts, translations and observable interaction data." },
  { step: "Diagnose", copy: "Segment performance across agent, operational, business and customer drivers using configurable logic and root-cause trees." },
  { step: "Act", copy: "Route coaching, trigger alerts, manage disputes, assign exceptions, escalate issues and close the loop through workflows." },
  { step: "Report", copy: "Deliver dashboards, performance summaries, executive reports and business-impact intelligence." },
];

export const governance = {
  heading: "AI Governance & Exception Management",
  copy: "Genii does not force AI decisions where the evidence is incomplete. When AI cannot see enough context, cannot validate an outcome, or confidence is too low, the interaction is routed into human exception management.",
  items: [
    "Human-in-the-loop review",
    "AI observability and evidence",
    "Exception routing where AI cannot see",
    "Calibration workflows",
    "Dispute management",
    "Audit trails",
    "Role-based access",
    "Configurable thresholds",
    "Controlled AI adoption",
    "Governance across human and AI scoring",
  ],
} as const;

export const stats = {
  heading: "The numbers behind the platform",
  items: [
    { value: "13+", label: "Years of interaction intelligence expertise" },
    { value: "1B+", label: "Interactions analysed across industries" },
    { value: "100+", label: "Brands supported" },
    { value: "100%", label: "Custom coverage available" },
  ],
} as const;

export const proof = {
  heading: "Trusted to turn interaction data into measurable operational intelligence",
  items: [
    "100+ brands supported",
    "Over a decade of contact centre intelligence experience",
    "Works across voice, transcripts, chat, email, WhatsApp and more",
    "Human + AI governance model",
    "Built for complex contact centre environments",
  ],
} as const;

export const faqs = [
  {
    q: "Which Genii product should I start with?",
    a: "Start with what you need today. Core digitises and governs QA; Indicate adds pre-configured AI QA; Connect segments performance into drivers; Ultra goes several root-cause layers deep and links insight to business impact. If you're not sure, Discover shows you where the biggest opportunity sits before you commit.",
  },
  {
    q: "Do I need to deploy the platform to use Discover?",
    a: "No. Discover is a standalone insight product. It analyses a defined set of interactions and delivers a comprehensive intelligence report before any platform deployment or before you decide what to fix.",
  },
  {
    q: "Can Genii use our existing transcripts?",
    a: "Yes. You can bring your own transcription or use Genii-supplied transcription for AI scoring. Using existing transcripts primarily helps reduce AI automation costs.",
  },
  {
    q: "What happens where AI cannot see or validate an answer?",
    a: "The interaction is routed into human exception management. Genii does not force AI decisions where evidence is incomplete or confidence is too low — humans review, validate and calibrate where judgement is required.",
  },
  {
    q: "Can we choose less than 100% AI coverage?",
    a: "Yes. Coverage is custom up to 100%. You choose the coverage model that fits your maturity, risk, budget and business objectives.",
  },
  {
    q: "How does Managed Services support human-in-the-loop QA?",
    a: "Managed Services provides expert human review for AI exceptions and human-in-the-loop QA — for assurance, compliance, calibration, high-risk interactions, disputes and quality control. It is human QA support, not generic outsourcing.",
  },
  {
    q: "How long does implementation take?",
    a: "Every Genii solution is supported by a Professional Services roll-out (Genii Enable) covering planning, configuration, data readiness, calibration, training and go-live. Timelines are scoped to your operating model and environment.",
  },
  {
    q: "Is Ultra the only full Strategic Intelligence layer?",
    a: "Yes. Earlier tiers may surface strategic signals, but Ultra is designed to quantify, compare and package those insights for executive-level decision-making.",
  },
];

export const productFinalCta = {
  heading: "Not sure where to start? We'll help you choose the right Genii layer.",
  copy: "Whether you need to digitise QA, launch pre-configured AI QA, segment performance drivers, manage AI exceptions or analyse root cause several layers deep, Genii can help you choose the right starting point.",
} as const;

export const finalPositioning =
  "Genii helps contact centres move from simple automated QA into performance segmentation and deep root-cause intelligence — giving teams the ability to reduce QA overhead, manage what AI cannot see, understand what drives performance and link interaction intelligence to measurable business impact.";

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
