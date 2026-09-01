"use client";

import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function TestimonialsPage() {
  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <ScrollReveal className="space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Wall of Love & Stories
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            REVIEWS & STORY
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[50ch] leading-relaxed">
            Real stories and feedback from founders, business leaders, and product directors who partnered with UniTech to build their software platforms.
          </p>
        </ScrollReveal>
      </div>

      {/* Grid Layout (Uniform Equal Height Cards) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((r) => (
            <div
              key={r.id}
              className="h-full rounded-xl bg-raised border border-hairline p-8 flex flex-col justify-between hover:border-accent transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                {/* Stars & Live link / Verified Badge (Fixed Min Height for Alignment) */}
                <div className="flex items-center justify-between gap-4 min-h-[28px]">
                  <div className="flex gap-1 text-accent">
                    {[...Array(r.stars || 5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {r.projectUrl ? (
                    <a
                      href={r.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full hover:bg-accent hover:text-white transition-all duration-200"
                    >
                      <span>Live Project</span>
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider text-muted/60 bg-background border border-hairline px-2.5 py-1 rounded-full">
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-sm md:text-base text-muted leading-relaxed before:content-['“'] after:content-['”']">
                  {r.quote}
                </blockquote>
              </div>

              {/* Profile details (Pinned to Bottom) */}
              <div className="flex items-center gap-4 mt-8 border-t border-hairline/40 pt-6">
                <div className="w-10 h-10 rounded-full border border-hairline bg-background flex items-center justify-center text-xs font-mono font-bold text-accent shrink-0 uppercase">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-primary block">
                    {r.name}
                  </cite>
                  <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mt-0.5">
                    {r.role}, <strong className="text-primary font-medium">{r.company}</strong>
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
