export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  deliverables: string[];
  process: { step: string; name: string; desc: string }[];
  technologies: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Bespoke systems and web architectures engineered for reliability.",
    overview: "We engineer bespoke software systems that automate manual operation processes, consolidate redundant software costs, and integrate third-party web APIs. Our senior engineers build clean, test-covered platforms ready for scaling.",
    deliverables: [
      "Custom Internal Web Applications",
      "API Integrations & Custom Webhooks",
      "Monolith Migration & Database Redesign",
      "Automated Scripting & System Schedulers",
    ],
    process: [
      { step: "01", name: "Requirements Mapping", desc: "Detailed scoping calls resulting in technical requirements documents." },
      { step: "02", name: "Database Schema Draft", desc: "Mapping tables, query optimizations, and API architectures." },
      { step: "03", name: "Clean Iterative Coding", desc: "Developing systems under a transparent Git workflow with weekly demos." },
    ],
    technologies: ["Node.js", "Python", "Go Lang", "TypeScript", "PostgreSQL", "GraphQL"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Fast Next.js websites built with technical SEO and clean components.",
    overview: "We engineer marketing and eCommerce platforms that load in under 2 seconds. By separating layouts via headless CMS frameworks and Next.js, we eliminate heavy theme bundle bloat and elevate Lighthouse rankings.",
    deliverables: [
      "Headless CMS channels (Sanity, Contentful)",
      "Next.js Marketing Pages & Visual Elements",
      "Fast headless commerce (Shopify Hydrogen)",
      "Technical Core Web Vitals optimization",
    ],
    process: [
      { step: "01", name: "Figma Component Audit", desc: "Reviewing design structures and planning pixel-perfect Tailwind variables." },
      { step: "02", name: "Headless Schema Setup", desc: "Structuring content models in the CMS to enable marketing freedom." },
      { step: "03", name: "Vercel Edge Deployment", desc: "Writing semantic Next.js code and caching server routes globally." },
    ],
    technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Shopify Hydrogen", "Sanity CMS", "Vercel"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortDesc: "High-performance React Native and Flutter mobile applications.",
    overview: "We design and develop cross-platform mobile apps for iOS and Android using React Native and Flutter. We set up automated testing and App Store / Google Play release pipelines to accelerate development.",
    deliverables: [
      "Cross-Platform iOS & Android Mobile Apps",
      "Offline-first Sync & Database Storage",
      "Push Notifications & Telemetry Logs",
      "App Store Connect & Play Console Release",
    ],
    process: [
      { step: "01", name: "Interactive Mobile Prototyping", desc: "Simulating finger sweeps, inputs, and device notification prompts in Figma." },
      { step: "02", name: "SQLite Sync Integration", desc: "Building resilient cache layers that allow drivers or customers offline actions." },
      { step: "03", name: "Fastlane App Delivery", desc: "Deploying automated beta builds directly to TestFlight and Google Play Console." },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Fastlane", "SQLite"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Bespoke digital design layouts focused on retention and usability.",
    overview: "We create clean user interfaces, Figma design systems, and prototype layouts. We conduct thorough user audits to make sure interactions are obvious and help users complete tasks quickly.",
    deliverables: [
      "Figma UI Component Design Systems",
      "Wireframes & Mobile User Journey Paths",
      "High-Fidelity Interactive Prototypes",
      "Developer Handoff Blueprints",
    ],
    process: [
      { step: "01", name: "User Journey Audits", desc: "Analyzing click paths, search behavior, and navigation friction." },
      { step: "02", name: "Design Token Architecture", desc: "Setting up colors, typography scales, and structural grids." },
      { step: "03", name: "Handoff Layout Review", desc: "Annotating spacing, easing curves, and animations for engineering." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Prototyping", "Design Tokens", "Wireframing"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc: "AWS/GCP infrastructure setup and CI/CD pipelines.",
    overview: "We build secure, auto-scaling cloud systems. By managing environments using Terraform and containerizing workloads via Docker/Kubernetes, we guarantee high-uptime servers and rapid developer feedback cycles.",
    deliverables: [
      "Terraform Infrastructure as Code (IaC)",
      "Dockerization & Kubernetes Cluster Setup",
      "GitHub Actions & Gitlab CI Pipelines",
      "Datadog/Sentry Telemetry Monitoring",
    ],
    process: [
      { step: "01", name: "Cloud Audit & Mapping", desc: "Reviewing active billing accounts, security groups, and bottlenecks." },
      { step: "02", name: "Infrastructure Scripting", desc: "Writing modular Terraform scripts to enable repeatable server setups." },
      { step: "03", name: "Load Testing & Logging", desc: "Simulating high user volume and routing alerts to Slack for errors." },
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    shortDesc: "SLA-backed maintenance, bug mitigation, and performance audits.",
    overview: "We offer ongoing support retainers to manage package dependency updates, database backups, security patches, and minor feature iterations. Our SLA contracts guarantee dedicated developer reaction hours.",
    deliverables: [
      "Dedicated SLA Support Agreements",
      "Dependency Upgrades & Security Patches",
      "Automated DB Backup Configuration",
      "Continuous Minor Feature Sprints",
    ],
    process: [
      { step: "01", name: "Telemetry Review", desc: "Connecting system check scripts to catch crashes or memory issues early." },
      { step: "02", name: "Monthly Maintenance Run", desc: "Upgrading npm and package dependencies while verifying test suites build." },
      { step: "03", name: "Sprint Delivery", desc: "Executing planned bug patches or minor features in bi-weekly slots." },
    ],
    technologies: ["Sentry", "New Relic", "GitHub", "SLA Agreements", "Bug Mitigation"],
  },
];
