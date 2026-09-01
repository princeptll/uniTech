export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string;
  tags: string[];
  services: string[];
  thumbnail: string;
  coverImage: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: { value: string; label: string }[];
  liveUrl: string;
}

export const projects: CaseStudy[] = [
  {
    slug: "vbott",
    title: "VBOTT",
    client: "VBOTT",
    year: 2024,
    category: "E-commerce",
    tags: ["E-commerce", "React", "Premium Design"],
    services: ["E-commerce", "React", "Premium Design"],
    thumbnail: "/projects/vbott.png",
    coverImage: "/projects/vbott.png",
    overview: "A premium e-commerce platform for high-end personal hydration and sustainable water bottles.",
    challenge: "Designing a high-converting, luxury digital storefront that highlights product craftsmanship and sustainable materials while delivering flawless page load speeds.",
    approach: "Built a responsive, ultra-fast React interface with custom product customization features, smooth animations, and optimized checkout flow.",
    outcome: "Elevated brand presence in the personal hydration market, boosting online conversion rates and customer engagement.",
    stats: [
      { value: "100%", label: "Sustainable Focus" },
      { value: "< 1.5s", label: "Page Load Speed" },
      { value: "+40%", label: "Conversion Lift" },
    ],
    liveUrl: "https://vbott.in/",
  },
  {
    slug: "startup-vapi",
    title: "Startup Vapi",
    client: "Startup Vapi",
    year: 2024,
    category: "Community",
    tags: ["Community", "Networking", "Platform"],
    services: ["Community", "Networking", "Platform"],
    thumbnail: "/projects/startupvapi.png",
    coverImage: "/projects/startupvapi.png",
    overview: "A dynamic community platform connecting entrepreneurs and industry experts to share business journeys.",
    challenge: "Building an intuitive, high-engagement hub where startups can showcase their milestones, discover mentors, and interact in real time.",
    approach: "Architected a full-featured community network with member directories, interactive discussion hubs, and event management features.",
    outcome: "Unified the regional startup ecosystem into an active online community with hundreds of registered founders and mentors.",
    stats: [
      { value: "500+", label: "Active Founders" },
      { value: "50+", label: "Mentorship Hours" },
      { value: "95%", label: "Member Engagement" },
    ],
    liveUrl: "https://startupvapi.com/",
  },
  {
    slug: "bassam-shipping",
    title: "Bassam Shipping",
    client: "Bassam Shipping Agency",
    year: 2024,
    category: "Logistics",
    tags: ["Logistics", "Maritime", "Enterprise"],
    services: ["Logistics", "Maritime", "Enterprise"],
    thumbnail: "/projects/bassam.png",
    coverImage: "/projects/bassam.png",
    overview: "Robust global logistics and shipping agency management system with real-time vessel tracking.",
    challenge: "Streamlining complex maritime operations, cargo documentation, and real-time vessel status updates for global shipping agents.",
    approach: "Developed a comprehensive enterprise platform with interactive tracking dashboards, automated shipping schedules, and client communication portals.",
    outcome: "Dramatically reduced manual reporting times and gave cargo owners full visibility into shipment statuses.",
    stats: [
      { value: "Real-time", label: "Vessel Tracking" },
      { value: "60%", label: "Admin Time Saved" },
      { value: "24/7", label: "Fleet Visibility" },
    ],
    liveUrl: "https://bassamshippingsa.com/",
  },
  {
    slug: "hua-sports-india",
    title: "HUA Sports India",
    client: "HUA Sports India",
    year: 2024,
    category: "Sports Marketing",
    tags: ["Sports Marketing", "Branding", "Talent"],
    services: ["Sports Marketing", "Branding", "Talent"],
    thumbnail: "/projects/huasports.png",
    coverImage: "/projects/huasports.png",
    overview: "Professional sports marketing and athlete endorsement platform for premier talent in India.",
    challenge: "Creating a high-impact digital presence that represents elite Indian athletes and manages corporate brand sponsorship portfolios.",
    approach: "Designed a bold, vibrant web portal featuring immersive media galleries, athlete portfolios, and campaign inquiry flows.",
    outcome: "Successfully positioned HUA Sports as a top-tier sports marketing agency, connecting premier athletes with major brand partners.",
    stats: [
      { value: "30+", label: "Premier Athletes" },
      { value: "2x", label: "Sponsorship Leads" },
      { value: "100%", label: "Brand Alignment" },
    ],
    liveUrl: "https://huaindia.com/sports/",
  },
  {
    slug: "skycraft-led",
    title: "Skycraft LED",
    client: "Skycraft India",
    year: 2024,
    category: "Manufacturing",
    tags: ["Manufacturing", "IoT Ready", "Showcase"],
    services: ["Manufacturing", "IoT Ready", "Showcase"],
    thumbnail: "/projects/skycraft.png",
    coverImage: "/projects/skycraft.png",
    overview: "Elegant product showcase and catalog for high-quality architectural LED lighting solutions.",
    challenge: "Organizing an extensive catalog of commercial and residential LED fixtures into a sleek, searchable interactive showcase.",
    approach: "Implemented a dynamic product filtering matrix, rich lighting spec sheets, and architect consultation request tools.",
    outcome: "Increased B2B client inquiries and simplified catalog exploration for interior designers and architects.",
    stats: [
      { value: "200+", label: "Lighting Products" },
      { value: "3x", label: "Architect Leads" },
      { value: "IoT Ready", label: "Smart Specs" },
    ],
    liveUrl: "https://skycraftindia.com/",
  },
];
