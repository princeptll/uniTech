"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function CasesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => [p.category, ...p.tags]))),
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return (
      project.category === activeCategory ||
      project.tags.includes(activeCategory)
    );
  });

  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <ScrollReveal className="space-y-6">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Portfolio
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
              SELECTED CASES
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-muted text-base md:text-lg max-w-[45ch] leading-relaxed">
              Explore our real client work across high-conversion e-commerce, community platforms, logistics engines, and IoT showcases.
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-12 border-b border-hairline pb-6">
        <ScrollReveal className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => (
            <RevealItem key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-background border-primary font-semibold"
                    : "bg-raised text-muted border-hairline hover:border-muted hover:text-primary"
                }`}
              >
                {cat}
              </button>
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>

      {/* Project Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isAnyCardHovered = hoveredIdx !== null;
              const isSelfHovered = hoveredIdx === idx;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.slug}
                  className="relative group flex flex-col justify-between"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div>
                    {/* Thumbnail Frame */}
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
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 ease-custom-ease group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                      {/* Top Live Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-accent hover:text-black backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider rounded-full transition-all duration-300 border border-white/10"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>

                      {/* Hover Overlay Buttons */}
                      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-custom-ease">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 bg-accent text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-lg hover:bg-white transition-colors"
                        >
                          Live <ExternalLink size={13} />
                        </a>
                        <Link
                          href={`/cases/${project.slug}`}
                          className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-lg hover:bg-accent transition-colors"
                        >
                          Details <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Metadata & Content */}
                    <div className="mt-6">
                      <div className="flex justify-between items-baseline gap-2">
                        <Link href={`/cases/${project.slug}`}>
                          <h3 className="font-display text-xl font-medium tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                            {project.title}
                          </h3>
                        </Link>
                        <span className="font-mono text-xs text-muted shrink-0">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-2">
                        {project.overview}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-raised border border-hairline rounded text-[10px] font-mono text-muted uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* External Live Link Bottom CTA */}
                  <div className="mt-5 pt-3 border-t border-hairline/40 flex justify-between items-center text-xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-accent hover:underline uppercase tracking-wider text-[11px]"
                    >
                      {project.liveUrl.replace("https://", "")} <ExternalLink size={12} />
                    </a>
                    <Link
                      href={`/cases/${project.slug}`}
                      className="font-mono text-muted hover:text-primary transition-colors uppercase tracking-wider text-[11px]"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-hairline rounded-xl bg-raised/20">
            <p className="text-muted text-sm font-mono">
              NO PROJECTS FOUND IN THIS CATEGORY.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
