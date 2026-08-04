// Site-wide content: brand constants, navigation, footer.
// Single source of truth — edit copy here, not inside section components.

export const site = {
  name: "Genii",
  tagline: "AI-Powered Quality & Root-Cause Intelligence for Contact Centres",
  positioning:
    "Genii takes businesses from guessing to knowing what truly drives performance — from the customer interactions they already have.",
  url: "https://www.geniianalytics.com",
} as const;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  /** Optional column heading the item is grouped under in the dropdown. */
  group?: string;
};
export type NavItem = { label: string; href: string; children?: NavChild[] };

// Navigation principle: every item must lead somewhere real and distinct.
// Solutions is a single link (not a dropdown) until dedicated solution pages
// exist — a dropdown whose items all share one target only confuses people.
export const primaryNav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        group: "Platform",
        label: "Platform Overview",
        href: "/products",
        description: "The full Genii intelligence journey.",
      },
      {
        group: "Platform",
        label: "Core",
        href: "/products/core",
        description: "Digitise QA & manage quality outputs.",
      },
      {
        group: "Platform",
        label: "Gen-AI Indicate",
        href: "/products/indicate",
        description: "Pre-configured AI QA.",
      },
      {
        group: "Platform",
        label: "Gen-AI Connect",
        href: "/products/connect",
        description: "Performance segmentation & action.",
      },
      {
        group: "Platform",
        label: "Gen-AI Ultra",
        href: "/products/ultra",
        description: "Multi-layer root-cause intelligence.",
      },
      {
        group: "Services & Insights",
        label: "Genii Discover",
        href: "/products/discover",
        description: "Know where to start before deploying.",
      },
      {
        group: "Services & Insights",
        label: "Managed Services",
        href: "/products/managed-services",
        description: "Human QA support & AI exception management.",
      },
      {
        group: "Services & Insights",
        label: "Genii Enable",
        href: "/products/enable",
        description: "Implementation & adoption support.",
      },
    ],
  },
  { label: "Solutions", href: "/#real-results" },
  { label: "Pricing", href: "/products#tiers" },
  { label: "Why Genii", href: "/#why-genii" },
];

// Quick links shown along the bottom of the Products dropdown panel.
export const productQuickLinks = [
  { label: "Compare features", href: "/products/compare" },
  { label: "How Genii works", href: "/products/compare#how-it-works" },
  { label: "FAQ", href: "/products/compare#faq" },
] as const;

export const ctas = {
  bookDemo: { label: "Book a Demo", href: "/#lead-form" },
  talkToExpert: { label: "Talk to an Expert", href: "/#lead-form" },
  platformDemo: { label: "Platform Demo", href: "/#lead-form" },
  requestDemo: { label: "Request a Demo / Free POV", href: "/#lead-form" },
  startDiscover: { label: "Start with Discover", href: "/products/discover" },
  findStartingPoint: { label: "Find Your Starting Point", href: "/#lead-form" },
} as const;

export const footer = {
  blurb:
    "Genii turns the interactions you already have into agent, operational, customer and business intelligence — with evidence, workflow and measurable outcomes.",
  columns: [
    {
      title: "Products",
      links: [
        { label: "Platform Overview", href: "/products" },
        { label: "Core", href: "/products/core" },
        { label: "Gen-AI Indicate", href: "/products/indicate" },
        { label: "Gen-AI Connect", href: "/products/connect" },
        { label: "Gen-AI Ultra", href: "/products/ultra" },
        { label: "Genii Discover", href: "/products/discover" },
        { label: "Managed Services", href: "/products/managed-services" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Real Results", href: "/#real-results" },
        { label: "Pricing", href: "/products#tiers" },
        { label: "Feature Comparison", href: "/products/compare" },
        { label: "How Genii Works", href: "/products/compare#how-it-works" },
        { label: "FAQ", href: "/products/compare#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why Genii?", href: "/#why-genii" },
        { label: "Trusted Globally", href: "/#trusted" },
        { label: "Book a Demo", href: "/#lead-form" },
        { label: "Talk to an Expert", href: "/#lead-form" },
      ],
    },
  ],
} as const;
