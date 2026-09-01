"use client";

import Image from "next/image";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Obsession with Detail",
      description:
        "We care about robust system design, clean type systems, and database query tuning. We believe that clean execution separates standard templates from serious software.",
    },
    {
      number: "02",
      title: "Radical Transparency",
      description:
        "No middle layers or filters. You work directly with the senior engineers and product designers building your project, synced inside shared Slack channels and Git repositories.",
    },
    {
      number: "03",
      title: "Performance First",
      description:
        "A platform that loads slowly is a liability. We optimize container workloads, build fast CDN caches, and write clean, semantic code to keep Lighthouse ratings high.",
    },
  ];

  const fullTeam = [
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
    {
      name: "David Vance",
      role: "Senior Backend Developer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Liam Mercer",
      role: "Mobile App Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const processSteps = [
    {
      step: "01",
      name: "Discovery & Architecture",
      desc: "We scope requirements, outline product blueprints, and map backend software schemas.",
    },
    {
      step: "02",
      name: "Design & Systems",
      desc: "We construct custom Figma UI screens, components, layout grids, and interactive prototypes.",
    },
    {
      step: "03",
      name: "Iterative Development",
      desc: "We write clean TypeScript, assemble modular Docker containers, and build robust database indexes.",
    },
    {
      step: "04",
      name: "Hardening & Support",
      desc: "We complete vulnerability audits, load test cloud clusters, and provide SLA support.",
    },
  ];

  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <ScrollReveal className="space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Company Profile
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            ABOUT UNITECH
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[45ch] leading-relaxed">
            We are a digital software house, merging engineering depth with design excellence to launch reliable systems.
          </p>
        </ScrollReveal>
      </div>

      {/* Narrative block / Studio Story */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">
              Our Origin Story
            </h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-muted max-w-[40ch]">
              Founded in 2018, UniTech was created to deliver production-grade software engineered for scale.
            </p>
            <p className="text-sm md:text-base text-muted max-w-[50ch] leading-relaxed">
              We recognized that growing businesses need more than just standard templates; they require high-uptime, robust digital systems that automate operational tasks and lower administrative overhead. By staffing every project with senior developers, we guarantee accountability and clean code delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-raised/20 border-y border-hairline py-24 md:py-32 mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal className="mb-16">
            <RevealItem>
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-primary">
                Our Core Values
              </h2>
            </RevealItem>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="font-mono text-xs text-accent border-b border-hairline pb-4 flex justify-between">
                  <span>VALUE LAYER</span>
                  <span>{v.number}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Team Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <ScrollReveal className="mb-16">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-primary">
              Meet the Engineers
            </h2>
          </RevealItem>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {fullTeam.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-hairline bg-raised transition-all duration-500 ease-custom-ease group-hover:-translate-y-1.5 group-hover:border-accent">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="180px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-custom-ease scale-102 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-display text-sm font-semibold text-primary">{member.name}</h4>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal className="mb-20">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-primary">
              How We Work
            </h2>
          </RevealItem>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-hairline pt-12">
          {processSteps.map((p, idx) => (
            <div key={idx} className="space-y-4">
              <div className="font-mono text-sm text-accent">{p.step} / PHASE</div>
              <h4 className="font-display text-lg font-semibold text-primary">{p.name}</h4>
              <p className="text-xs md:text-sm text-muted leading-relaxed max-w-[22ch]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
