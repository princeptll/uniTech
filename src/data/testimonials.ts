export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Voxel Health",
    quote: "UniTech is unlike any engineering firm we've worked with. Their technical discipline, code hygiene, and commitment to project timelines are world-class. They didn't just build a portal; they engineered a core asset for our business.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "CTO & Founder",
    company: "Aether Capital",
    quote: "Their team built a highly complex balance reconciliation engine in record time, keeping the platform fast and transaction matching flawless. They are absolute software architects.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "CEO & Founder",
    company: "Voxel Estates",
    quote: "UniTech turned our CAD drafts into a fluid, WebGL real estate browser. The performance of their meshes exceeded all our target benchmarks, generating millions in direct inquiries.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
];
