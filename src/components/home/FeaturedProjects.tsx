"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";
import PillButton from "../ui/PillButton";

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Featured client projects
  const featured = projects.slice(0, 8);

  // Asymmetric column span mapping for 12-column grid
  const colSpans = [
    "md:col-span-7", // Card 1: VBOTT
    "md:col-span-5", // Card 2: Startup Vapi
    "md:col-span-5", // Card 3: Bassam Shipping
    "md:col-span-7", // Card 4: HUA Sports India
    "md:col-span-6", // Card 5: Skycraft LED
    "md:col-span-6", // Card 6: Sea Rock Inn
    "md:col-span-7", // Card 7: HelperBuddy
    "md:col-span-5", // Card 8: Sakika Kumar
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <RevealItem>
              <p className="text-xs uppercase font-mono tracking-widest text-accent">
                Selected Client Work
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-none text-primary">
                Featured Projects
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <p className="text-muted text-sm md:text-base max-w-[35ch]">
              Explore our real client work across e-commerce, community platforms, logistics, sports marketing, and architectural IoT showcase.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-x-12 md:gap-y-24">
          {featured.map((project, idx) => {
            const isAnyCardHovered = hoveredIndex !== null;
            const isSelfHovered = hoveredIndex === idx;

            return (
              <div
                key={project.slug}
                className={`${colSpans[idx]} relative group`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image/Video Container */}
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-raised border border-hairline transition-all duration-700 ease-custom-ease ${
                    isAnyCardHovered && !isSelfHovered
                      ? "opacity-60 blur-[1px]"
                      : "opacity-100"
                  }`}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-custom-ease group-hover:scale-105"
                    priority={idx < 2}
                  />
                  {/* Shadow overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Live Site Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-accent hover:text-black backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider rounded-full transition-all duration-300 border border-white/10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Hover action overlay */}
                  <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-custom-ease">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-accent text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-xl hover:bg-white transition-colors"
                    >
                      Visit Live <ExternalLink size={14} />
                    </a>
                    <Link
                      href={`/work/${project.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-xl hover:bg-accent transition-colors"
                    >
                      Case Study <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 border-b border-hairline/40 pb-6 transition-colors duration-300 group-hover:border-accent">
                  <div className="flex justify-between items-baseline gap-4">
                    <Link href={`/work/${project.slug}`} className="group/title">
                      <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-primary transition-colors duration-300 group-hover/title:text-accent flex items-center gap-2">
                        {project.title}
                      </h3>
                    </Link>
                    <span className="font-mono text-sm text-muted shrink-0">{project.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted mt-2 leading-relaxed max-w-[55ch]">
                    {project.overview}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-raised border border-hairline rounded-md text-[11px] font-mono text-muted uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA button */}
        <div className="mt-20 flex justify-center">
          <ScrollReveal>
            <RevealItem>
              <PillButton label="See All Projects" href="/work" variant="outline" />
            </RevealItem>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
