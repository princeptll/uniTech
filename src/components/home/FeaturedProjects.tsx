"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";
import PillButton from "../ui/PillButton";

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Six project cards
  const featured = projects.slice(0, 6);

  // Asymmetric column span mapping for 12-column grid
  // Alternating 7/5, 5/7, 7/5 spans
  const colSpans = [
    "md:col-span-7", // Card 1
    "md:col-span-5", // Card 2
    "md:col-span-5", // Card 3
    "md:col-span-7", // Card 4
    "md:col-span-7", // Card 5
    "md:col-span-5", // Card 6
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <RevealItem>
              <p className="text-xs uppercase font-mono tracking-widest text-accent">
                Case Studies
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-none text-primary">
                Featured Projects
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <p className="text-muted text-sm md:text-base max-w-[30ch]">
              A curated selection of our latest design and development work.
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
                <Link
                  href={`/work/${project.slug}`}
                  className="block focus:outline-none"
                  data-cursor="pointer"
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
                      priority={idx < 2} // priority for above-the-fold content if relevant
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Arrow label slide in */}
                    <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-custom-ease">
                      <span className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-xl">
                        View Project <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 flex justify-between items-baseline border-b border-hairline/40 pb-4 transition-colors duration-300 group-hover:border-accent">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-muted uppercase tracking-widest mt-2">
                        {project.services.join(" / ")}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted">{project.year}</span>
                  </div>
                </Link>
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
