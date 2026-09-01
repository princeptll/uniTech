export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  projectUrl?: string;
  quote: string;
  avatar: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Viraj Patel",
    role: "Founder & Managing Director",
    company: "VBOTT",
    projectUrl: "https://vbott.in/",
    quote: "We needed our hydration bottle catalog to feel as premium as the physical products themselves. UniTech re-architected our storefront with sub-second page loads, seamless checkout transitions, and custom product color variants. Our mobile conversion rate jumped by 42% in the first month after launch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 2,
    name: "Aniket Shah",
    role: "Co-Founder & Community Lead",
    company: "Startup Vapi",
    projectUrl: "https://startupvapi.com/",
    quote: "UniTech helped us build a community hub where local founders, investors, and mentors can connect and register for meetups without any friction. The profile dashboard and event feeds run smoothly even during high traffic when we announce new offline workshops.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 3,
    name: "Capt. Faizal Bassam",
    role: "Director of Operations",
    company: "Bassam Shipping",
    projectUrl: "https://bassamshippingsa.com/",
    quote: "Managing shipping schedules, port calls, and container tracking across multiple ports used to involve endless manual updates. UniTech built a tracking platform that our client dispatchers and port partners rely on daily. Real-time updates and vessel schedules are clear and reliable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 4,
    name: "Rohan Mehta",
    role: "Head of Athlete & Brand Partnerships",
    company: "HUA Sports India",
    projectUrl: "https://huaindia.com/sports/",
    quote: "Representing top Indian athletes requires a web presence that communicates credibility to corporate sponsors instantly. UniTech designed a sleek, dynamic portfolio layout showcasing athlete profiles and campaign stats. It made a noticeable difference in sponsor pitching calls.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 5,
    name: "Siddharth Joshi",
    role: "Technical & Commercial Director",
    company: "Skycraft LED",
    projectUrl: "https://skycraftindia.com/",
    quote: "Architects and lighting consultants needed a fast way to browse specs, downloadable spec sheets, and high-res fixture installations. UniTech delivered a clean digital catalog that cut down RFQ response times and improved our inbound commercial project leads.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 6,
    name: "Pooja Deshmukh",
    role: "Product Lead",
    company: "Krystal Retail Automation",
    quote: "They don't just write code; they understand real business workflows. UniTech refactored our payment gateway routing and order status sync, reducing failed transactions during peak festival sale periods.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 7,
    name: "Vikas Sharma",
    role: "VP of Engineering",
    company: "Omnix Logistics",
    quote: "Our team had tight timelines for launching an inventory audit dashboard for our distribution hubs in Gujarat. UniTech worked side-by-side with our internal dev team, standardizing our API structures and fixing rendering bottlenecks ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 8,
    name: "Devendra Verma",
    role: "Managing Director",
    company: "Craftworks India",
    quote: "From wireframes to final deployment, working with UniTech was refreshingly straightforward. Clear communication over WhatsApp and weekly sprint demos meant zero surprises.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop",
    stars: 5,
  },
];
