// Site-wide content: brand constants, navigation, footer.
// Single source of truth — edit copy here, not inside section components.

export const site = {
  name: "Genii",
  tagline: "AI-Powered Quality & Root-Cause Intelligence for Contact Centres",
  positioning:
    "Genii takes businesses from guessing to knowing what truly drives performance — from the customer interactions they already have.",
  url: "https://www.geniianalytics.com",
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Platform Overview",
        href: "/products",
        description: "The full Genii intelligence journey.",
      },
      {
        label: "Core",
        href: "/products#core",
        description: "Digitise QA & manage quality outputs.",
      },
      {
        label: "Gen-AI Indicate",
        href: "/products#indicate",
        description: "Pre-configured AI QA.",
      },
      {
        label: "Gen-AI Connect",
        href: "/products#connect",
        description: "Performance segmentation & action.",
      },
      {
        label: "Gen-AI Ultra",
        href: "/products#ultra",
        description: "Multi-layer root-cause intelligence.",
      },
      {
        label: "Genii Discover",
        href: "/products#discover",
        description: "Know where to start before deploying.",
      },
      {
        label: "Managed Services",
        href: "/products#managed-services",
        description: "Human QA support & AI exception management.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/#real-results",
    children: [
      { label: "Customer Experience", href: "/#real-results" },
      { label: "Client Retentions", href: "/#real-results" },
      { label: "Sales Performance", href: "/#real-results" },
      { label: "Collections", href: "/#real-results" },
      { label: "Performance Management", href: "/#real-results" },
    ],
  },
  { label: "Company", href: "/#why-genii" },
  { label: "Resources", href: "/#trusted" },
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
        { label: "Core", href: "/products#core" },
        { label: "Gen-AI Indicate", href: "/products#indicate" },
        { label: "Gen-AI Connect", href: "/products#connect" },
        { label: "Gen-AI Ultra", href: "/products#ultra" },
        { label: "Genii Discover", href: "/products#discover" },
        { label: "Managed Services", href: "/products#managed-services" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Customer Experience", href: "/#real-results" },
        { label: "Client Retentions", href: "/#real-results" },
        { label: "Sales Performance", href: "/#real-results" },
        { label: "Collections", href: "/#real-results" },
        { label: "Performance Management", href: "/#real-results" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why Genii?", href: "/#why-genii" },
        { label: "Real Results", href: "/#real-results" },
        { label: "Trusted Globally", href: "/#trusted" },
        { label: "Talk to an Expert", href: "/#lead-form" },
      ],
    },
  ],
} as const;
