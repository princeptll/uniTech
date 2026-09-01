"use client";

import Image from "next/image";
import PillButton from "../ui/PillButton";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function TeamSection() {
  const team = [
    {
      name: "Arthur Pendelton",
      role: "CEO & Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Sarah Jenkins",
      role: "Principal Product Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Marcus Thorne",
      role: "Lead Systems Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Elena Rostova",
      role: "Cloud & Security Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="team">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Block */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
          <div className="md:col-span-8 space-y-4">
            <RevealItem>
              <p className="text-xs uppercase font-mono tracking-widest text-accent">
                Our Team
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight uppercase leading-none">
                THE PEOPLE BEHIND <br />
                <span className="pl-[8vw] text-accent">THE CODE.</span>
              </h2>
            </RevealItem>
          </div>
          <div className="md:col-span-4">
            <RevealItem>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-[32ch] pt-6 md:pt-12">
                We are a distributed collective of senior builders, developers, and designers who value clean documentation, performant codebases, and production uptime.
              </p>
            </RevealItem>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Join Our Mission Card */}
          <div className="md:col-span-4 rounded-xl bg-raised border border-hairline p-8 flex flex-col justify-between items-start min-h-[300px]">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-accent/15 text-accent border border-accent/25">
                WE ARE HIRING
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-primary mt-4">
                Join our mission.
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-[25ch]">
                We are always seeking passionate engineers, system architects, and UI design specialists.
              </p>
            </div>
            <PillButton label="Explore Careers" href="/careers" variant="outline" />
          </div>

          {/* Members List */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col">
                {/* Photo frame */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-hairline bg-raised transition-all duration-500 ease-custom-ease group-hover:-translate-y-1.5 group-hover:border-accent">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-custom-ease scale-102 group-hover:scale-105"
                  />
                </div>
                {/* Details */}
                <div className="mt-4">
                  <h4 className="font-display text-sm font-semibold text-primary">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
