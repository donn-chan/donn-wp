// Placeholder content layer, shaped the way a WPGraphQL query would return it
// (id / title / fields), so swapping in a live headless WordPress source
// later is a data-fetching change, not a template rewrite.

export type ScenarioCard = {
  id: string;
  tag: string;
  title: string;
  description: string;
  approach: string[];
};

export const scenarios: ScenarioCard[] = [
  {
    id: "decouple",
    tag: "01 — Slow WordPress",
    title: "Your WordPress site is slow, dated, and getting harder to maintain",
    description:
      "Plugins have piled up, page speed is tanking your SEO, and every redesign means fighting the theme. We keep WordPress as the CMS your editors already know, and put a fast Next.js frontend in front of it.",
    approach: [
      "Headless it behind Next.js with SSR/SSG",
      "No retraining — editors keep the WP dashboard",
      "Ship a measurable Core Web Vitals improvement",
    ],
  },
  {
    id: "greenfield",
    tag: "02 — New Build",
    title: "You're launching something new and want WP's content tools, not its frontend",
    description:
      "You want non-technical people to manage content, but you don't want a theme-and-plugin frontend. We build the API layer and the React frontend together, end to end, from day one.",
    approach: [
      "WPGraphQL or REST API layer",
      "Custom React/Next.js frontend, built for the brand",
      "Preview, drafts, and content modeling planned upfront",
    ],
  },
  {
    id: "infra",
    tag: "03 — Infra & Deploys",
    title: "You need the pipeline and infrastructure around the stack sorted out",
    description:
      "The code is only part of it — you also need it deployed, repeatable, and not held together by manual FTP uploads. We set up the CI/CD and hosting so shipping changes is routine, not risky.",
    approach: [
      "GitHub Actions for build, test, and deploy",
      "Containerized with Docker where it earns its keep",
      "AWS basics — Lambda, API Gateway, S3 — wired correctly",
    ],
  },
];

export type StackItem = {
  name: string;
  category: string;
};

export const stack: StackItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "WordPress", category: "CMS" },
  { name: "Docker", category: "Infra" },
  { name: "GitHub Actions", category: "Infra" },
  { name: "AWS", category: "Infra" },
];

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  problem: string;
  approach: string;
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "regional-retailer",
    client: "Regional Retail Group",
    industry: "E-commerce / Retail",
    problem:
      "A WordPress + WooCommerce storefront was loading in 6+ seconds on mobile, and every marketing campaign landing page needed a developer to build from scratch.",
    approach:
      "Decoupled the storefront behind a Next.js frontend using WPGraphQL for content and product data, with ISR for catalog pages and a reusable landing-page block system editors could assemble themselves.",
    results: [
      { label: "Load time", value: "6.1s → 1.4s" },
      { label: "Lighthouse", value: "38 → 96" },
      { label: "Editor-built pages", value: "0 → 40+" },
    ],
  },
  {
    id: "b2b-saas",
    client: "B2B SaaS Startup",
    industry: "SaaS / Marketing site",
    problem:
      "Pre-launch team wanted a marketing site the content/growth team could fully own, without engineering becoming a bottleneck for every headline change.",
    approach:
      "Built the API layer and Next.js frontend together from scratch — WordPress as a pure content backend, custom blocks matching the design system, and preview links for drafts before publish.",
    results: [
      { label: "Time to ship a new page", value: "~2 days → 1 hour" },
      { label: "Engineering tickets / mo", value: "-70%" },
      { label: "Core Web Vitals", value: "All green" },
    ],
  },
  {
    id: "agency-partner",
    client: "Design Agency Partner",
    industry: "Agency / Client delivery",
    problem:
      "An agency needed a repeatable way to hand clients a fast, modern site while keeping WordPress as the thing client teams already knew how to use.",
    approach:
      "Set up a headless WP starter template with GitHub Actions CI/CD and containerized environments, so new client projects could be spun up in days instead of weeks.",
    results: [
      { label: "Project setup time", value: "2 weeks → 3 days" },
      { label: "Deploys", value: "Manual → CI/CD" },
      { label: "Client projects shipped", value: "5" },
    ],
  },
];

export const projectTypes = [
  "Headless WordPress migration",
  "New site build (WP + Next.js)",
  "CI/CD & infrastructure",
  "Something else",
] as const;
