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
export type NavQuickLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** Shortcut links shown along the bottom of the dropdown panel. */
  quickLinks?: NavQuickLink[];
};

// Navigation principle: every item must lead somewhere real and distinct.
// Solution names and summaries mirror the current live site so the IA matches.
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
        href: "/products#discover",
        description: "Know where to start before deploying.",
      },
      {
        group: "Services & Insights",
        label: "Managed Services",
        href: "/products#managed-services",
        description: "Human QA support & AI exception management.",
      },
      {
        group: "Services & Insights",
        label: "Genii Enable",
        href: "/products#enable",
        description: "Implementation & adoption support.",
      },
    ],
    quickLinks: [
      { label: "Compare features", href: "/products#comparison" },
      { label: "How Genii works", href: "/products#how-it-works" },
      { label: "FAQ", href: "/products#faq" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        group: "By outcome",
        label: "All Solutions",
        href: "/solutions",
        description: "Intelligence for the outcomes you own.",
      },
      {
        group: "By outcome",
        label: "Sales Performance",
        href: "/solutions#sales-performance",
        description:
          "Turn sales conversations into more conversion and revenue.",
      },
      {
        group: "By outcome",
        label: "Customer Experience",
        href: "/solutions#customer-experience",
        description: "See what drives great CX — and what undermines it.",
      },
      {
        group: "By outcome",
        label: "Client Retentions",
        href: "/solutions#client-retentions",
        description: "Prevent churn and build long-term loyalty.",
      },
      {
        group: "By outcome",
        label: "Collections",
        href: "/solutions#collections",
        description: "The drivers behind successful, compliant recovery.",
      },
      {
        group: "By outcome",
        label: "Performance Management",
        href: "/solutions#performance-management",
        description: "Connect QA scores to behaviour and outcomes.",
      },
    ],
  },
  { label: "Pricing", href: "/products#tiers" },
  {
    label: "Company",
    href: "/why-genii",
    children: [
      {
        group: "Company",
        label: "Why Genii",
        href: "/why-genii",
        description: "Our story, what we believe and the impact we deliver.",
      },
      {
        group: "Company",
        label: "Interaction Intelligence",
        href: "/interaction-intelligence",
        description: "The layer between your interactions and your decisions.",
      },
      {
        group: "Company",
        label: "Contact Us",
        href: "/contact",
        description: "Book a no-obligation 30-minute introduction call.",
      },
    ],
  },
];

export const ctas = {
  bookDemo: { label: "Book a Demo", href: "/#lead-form" },
  talkToExpert: { label: "Talk to an Expert", href: "/#lead-form" },
  platformDemo: { label: "Platform Demo", href: "/#lead-form" },
  requestDemo: { label: "Request a Demo / Free POV", href: "/#lead-form" },
  startDiscover: { label: "Start with Discover", href: "/products#discover" },
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
        { label: "Genii Discover", href: "/products#discover" },
        { label: "Managed Services", href: "/products#managed-services" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "All Solutions", href: "/solutions" },
        { label: "Sales Performance", href: "/solutions#sales-performance" },
        { label: "Customer Experience", href: "/solutions#customer-experience" },
        { label: "Client Retentions", href: "/solutions#client-retentions" },
        { label: "Collections", href: "/solutions#collections" },
        {
          label: "Performance Management",
          href: "/solutions#performance-management",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Real Results", href: "/#real-results" },
        { label: "Pricing", href: "/products#tiers" },
        { label: "Feature Comparison", href: "/products#comparison" },
        { label: "How Genii Works", href: "/products#how-it-works" },
        { label: "FAQ", href: "/products#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why Genii", href: "/why-genii" },
        { label: "Interaction Intelligence", href: "/interaction-intelligence" },
        { label: "Contact Us", href: "/contact" },
        { label: "Trusted Globally", href: "/#trusted" },
        { label: "Book a Demo", href: "/#lead-form" },
      ],
    },
  ],
} as const;
