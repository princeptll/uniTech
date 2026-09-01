"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function EngagementModelsSection() {
  const models = [
    {
      title: "Fixed Scope",
      desc: "Perfect for well-defined project briefs, MVPs, or standalone system integrations. We scope deliverables beforehand and guarantee price and launch parameters.",
      bullets: [
        "Pre-defined scope and deliverables",
        "Fixed timeline and pricing schedules",
        "Guaranteed launch benchmark checks",
      ],
      link: "/start",
    },
    {
      title: "Dedicated Team",
      desc: "Designed for scaling products needing long-term development velocity. We provide a tailored engineering team operating directly under your backlog.",
      bullets: [
        "100% dedicated senior engineers",
        "Direct integration in Slack & Git channels",
        "Flexible monthly resource adjustments",
      ],
      link: "/start",
    },
    {
      title: "Staff Augmentation",
      desc: "Quickly reinforce your in-house engineering team. We plug experienced developers directly into your workflows to accelerate critical sprints.",
      bullets: [
        "Rapid developer placement in days",
        "Experienced senior engineering talent",
        "No long-term contracts or hiring fees",
      ],
      link: "/contact",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="engagement-models">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="space-y-6 mb-20 max-w-3xl">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              How We Partner
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-primary">
              Engagement Models
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We align our services with your delivery requirements and budgetary structure, offering transparent, predictable pathways to partnership.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <ScrollReveal key={idx} className="flex flex-col justify-between border border-hairline rounded-xl p-8 bg-raised hover:border-accent/40 transition-colors duration-300 min-h-[420px]">
              <div className="space-y-6">
                <RevealItem>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-primary">
                    {model.title}
                  </h3>
                </RevealItem>
                <RevealItem>
                  <p className="text-sm text-muted leading-relaxed">
                    {model.desc}
                  </p>
                </RevealItem>
                <RevealItem>
                  <ul className="space-y-3 pt-2">
                    {model.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-muted font-mono uppercase tracking-wide">
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              </div>

              <RevealItem>
                <div className="pt-8">
                  <Link
                    href={model.link}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 focus:outline-none"
                  >
                    Talk to us <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealItem>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
