"use client";

import { Users, Eye, Code, Shield } from "lucide-react";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function WhyChooseUs() {
  const valueBlocks = [
    {
      icon: <Users className="text-accent" size={24} />,
      title: "Senior Engineers Only",
      desc: "Every engineer on your team has 5+ years of production experience. We do not hand off work to juniors or interns.",
      borders: "border-b md:border-b-0 md:border-r border-hairline",
    },
    {
      icon: <Eye className="text-accent" size={24} />,
      title: "Radical Transparency",
      desc: "We work directly in your Slack channels and shared Git repositories, holding weekly visual demos so you always know progress.",
      borders: "border-b border-hairline",
    },
    {
      icon: <Code className="text-accent" size={24} />,
      title: "Complete Code Ownership",
      desc: "You own every single line of code we write. Delivered clean, thoroughly documented, and packed with comprehensive test suites.",
      borders: "border-b md:border-b-0 md:border-r border-hairline",
    },
    {
      icon: <Shield className="text-accent" size={24} />,
      title: "SLA-Backed Post-Launch Support",
      desc: "Our job doesn't end at deployment. We offer continuous SLA-backed maintenance, server optimization, and rapid bug mitigation.",
      borders: "",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="why-us">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <ScrollReveal className="space-y-6 mb-16 max-w-3xl">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Why UniTech
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-primary">
              Engineering with absolute accountability.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We separate ourselves from generic software agencies by anchoring every contract in transparent progress updates, senior engineering depth, and high-performance metrics.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* 2x2 Quadrant Grid */}
        <ScrollReveal>
          <RevealItem>
            <div className="grid grid-cols-1 md:grid-cols-2 border border-hairline rounded-xl overflow-hidden bg-raised">
              {valueBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className={`p-8 md:p-12 flex flex-col justify-between min-h-[220px] transition-colors duration-500 hover:bg-background/25 ${block.borders}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-background border border-hairline flex items-center justify-center">
                      {block.icon}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-primary">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted leading-relaxed mt-4 max-w-[42ch]">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>

      </div>
    </section>
  );
}
