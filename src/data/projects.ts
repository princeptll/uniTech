export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string;
  services: string[];
  thumbnail: string;
  coverImage: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: { value: string; label: string }[];
}

export const projects: CaseStudy[] = [
  {
    slug: "aether-ledger",
    title: "Aether Ledger: High-performance Fintech settlement engine",
    client: "Aether Capital",
    year: 2024,
    category: "Custom Software",
    services: ["Custom Software", "Cloud Architecture", "Database Design"],
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    overview: "A custom financial transaction settlement portal processing millions of balances daily with zero margin of error.",
    challenge: "The client's legacy settlement process ran on monolithic databases, taking more than 8 hours each evening to settle balances and creating reporting bottlenecks.",
    approach: "We architected Node.js event streams, optimized core PostgreSQL indexing matrices, and deployed containerized processing instances inside AWS ECS with horizontal scaling.",
    outcome: "Reduced daily balance settlement processing duration from 8 hours down to 12 minutes, saving AWS infrastructure costs by 45% and eliminating settlement errors.",
    stats: [
      { value: "12m", label: "Settlement speed" },
      { value: "45%", label: "Cloud savings" },
      { value: "0", label: "Settlement errors" },
    ],
  },
  {
    slug: "nova-care",
    title: "Nova Care: HIPAA-compliant EHR patient portal",
    client: "Nova Health Alliance",
    year: 2024,
    category: "Web Development",
    services: ["Web Development", "UI/UX Design", "Security Hardening"],
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    overview: "A secure, HIPAA-compliant patient communication portal offering scheduling, video consultations, and encrypted record access.",
    challenge: "Nova Care's legacy portal was slow, had poor usability, and struggled to meet the audits required by strict HIPAA guidelines.",
    approach: "We redesigned the interface with clean layouts and engineered it on Next.js 15, utilizing AWS KMS encryption, secure HttpOnly sessions, and Cognito authentication.",
    outcome: "A HIPAA-audited system loading in under 1.8 seconds, boosting patient scheduling rates by 38% and lowering administrative check-in overhead.",
    stats: [
      { value: "1.8s", label: "LCP Load speed" },
      { value: "38%", label: "Scheduling Lift" },
      { value: "100%", label: "HIPAA Audited" },
    ],
  },
  {
    slug: "zenith-cargo",
    title: "Zenith Cargo: Offline-first delivery routing mobile app",
    client: "Zenith Global Logistics",
    year: 2023,
    category: "Mobile App Development",
    services: ["Mobile App Development", "API Integration", "Support & Maintenance"],
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    overview: "A cross-platform mobile application optimized for offline package checking, navigation routing, and digital signature logs.",
    challenge: "Drivers routinely lost cell coverage in deep warehouses and remote routes, leading to data synchronization gaps and lost signatures.",
    approach: "We engineered an offline-first SQLite database synchronization system inside a React Native wrapper, syncing batch payloads once connection is found.",
    outcome: "Achieved zero data losses across 14,000+ weekly shipments, saving drivers average delivery times of 22 minutes per shift.",
    stats: [
      { value: "14k+", label: "Weekly deliveries" },
      { value: "0", label: "Lost signatures" },
      { value: "22m", label: "Saved per shift" },
    ],
  },
  {
    slug: "apex-cart",
    title: "Apex Cart: Headless Hydrogen eCommerce platform",
    client: "Apex Retail Group",
    year: 2023,
    category: "Web Development",
    services: ["Web Development", "UI/UX Design", "Cloud Infrastructure"],
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    overview: "A custom headless commerce build using Shopify Hydrogen and Next.js, optimizing product catalogs and rendering speeds.",
    challenge: "Apex's legacy monolithic eCommerce store loaded slowly (5.4s LCP), causing high checkout bounces and low conversion indices.",
    approach: "We separated their layout into a Next.js 15 frontend, querying Shopify GraphQL APIs, and cached payloads using Vercel edge networks.",
    outcome: "Lighthouse speed scores rose to 98/100, page loads dropped to 1.1s, and checkout conversions grew by 24%.",
    stats: [
      { value: "1.1s", label: "Page load speed" },
      { value: "24%", label: "Conversion rise" },
      { value: "98", label: "Lighthouse rating" },
    ],
  },
  {
    slug: "hyperion-analytics",
    title: "Hyperion Analytics: Real-time telemetry SaaS panel",
    client: "Hyperion SaaS",
    year: 2024,
    category: "Custom Software",
    services: ["Custom Software", "UI/UX Design", "Cloud & DevOps"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    overview: "A telemetry dashboard visualizing high-volume events, container workloads, and API request logs.",
    challenge: "Visualizing billions of events in real-time caused heavy memory load, resulting in browser page freezes.",
    approach: "We designed a canvas rendering structure utilizing Web Workers to handle JSON data crunching off the browser's main threat.",
    outcome: "Enabled smooth 60fps dashboard rendering under workloads of 50,000 active events per second with 35% less client memory usage.",
    stats: [
      { value: "50k", label: "Events / second" },
      { value: "60fps", label: "Dashboard rendering" },
      { value: "-35%", label: "Client memory usage" },
    ],
  },
  {
    slug: "voxel-room",
    title: "Voxel Room: WebGL 3D property virtual tour canvas",
    client: "Voxel Estates",
    year: 2023,
    category: "3D & Creative Motion",
    services: ["UI/UX Design", "Web Development", "Cloud Infrastructure"],
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    overview: "An immersive WebGL virtual tour portal allowing users to walk through high-end estate properties inside the browser.",
    challenge: "RAW 3D CAD assets were massive (120MB+), crashing mobile web browsers and rendering pages unusable on mobile connections.",
    approach: "We optimized meshes using low-poly retopology, configured progressive loader slices, and coded GLSL shaders in Three.js.",
    outcome: "Reduced asset file size to 4.2MB, ensuring smooth 60fps mobile exploration and increasing property inquiries by 150%.",
    stats: [
      { value: "4.2MB", label: "Mesh file size" },
      { value: "60fps", label: "Mobile speed" },
      { value: "+150%", label: "Inquiry boost" },
    ],
  },
];
