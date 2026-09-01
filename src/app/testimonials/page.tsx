"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "VP of Product",
      company: "Voxel Systems",
      quote: "NIXTIO is unlike any agency we've worked with. Their design execution, attention to micro-interactions, and technical precision are world-class. They didn't just build a site; they crafted a brand experience.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Marcus Thorne",
      role: "CTO & Founder",
      company: "Luminal Protocol",
      quote: "Their team built a highly complex blockchain visualizer in record time, keeping the design beautiful and performance flawless. They are absolute software craftsmen.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Elena Rostova",
      role: "Chief Executive Officer",
      company: "Aether Labs",
      quote: "NIXTIO transformed our spatial operating interface concepts into a fluid web app. The results speak for themselves: user engagement tripled and we closed our Series A ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Clara Winters",
      role: "CEO & Co-Founder",
      company: "Nebula Technologies",
      quote: "Working with NIXTIO was a breath of fresh air. They operate with a level of design and engineering discipline that is extremely rare in this industry. Our AI discovery canvas is a testament to their high craft.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Julian Mercer",
      role: "Founder",
      company: "Chronos Timepieces",
      quote: "NIXTIO transformed our brand presence. The mechanical watch disassembly sequence they designed was a massive success: sold out our limited timepiece release in 4 minutes and established our brand in the luxury sector.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Sophia Alvi",
      role: "Lead Interface Engineer",
      company: "Synthetix",
      quote: "Their Next.js implementation is incredibly fast. They helped us clean up our layout structures, bundle sizes, and asset loading pipelines to hit straight 100s on Lighthouse performance audits.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Kenneth Cole",
      role: "VP of Product Development",
      company: "Verdant Group",
      quote: "NIXTIO brought our architectural 3D catalog to the mobile web. The performance of their low-poly Three.js viewport exceeded all our expectations, generating over $42M in direct real estate leads.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Nina Patel",
      role: "Director of UX Research",
      company: "Hyperion Inc.",
      quote: "The micro-animations NIXTIO designed for our dashboard charts are delightful. Subtle hover cues, smooth panel slide-ins, and clear telemetry cards have significantly increased our platform adoption.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Eric Vance",
      role: "Senior Product Manager",
      company: "Orbit Space Systems",
      quote: "NIXTIO delivered our internal database tracking dashboard within a tight 8-week timeline. The codebase is clean, modular, and fully typed. We couldn't be happier with our collaboration.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      stars: 5,
    },
  ];

  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <ScrollReveal className="space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Wall of Love
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            REVIEWS & STORY
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[45ch] leading-relaxed">
            Read comments from founders, product leaders, and design directors who have partnered with our team.
          </p>
        </ScrollReveal>
      </div>

      {/* Masonry Columns Layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance]">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-xl bg-raised border border-hairline p-8 flex flex-col justify-between hover:border-accent transition-all duration-300 relative group"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-sm md:text-base text-muted leading-relaxed before:content-['“'] after:content-['”']">
                  {r.quote}
                </blockquote>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 mt-8 border-t border-hairline/40 pt-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-hairline">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic text-xs font-semibold text-primary block">
                    {r.name}
                  </cite>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mt-1">
                    {r.role}, {r.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
