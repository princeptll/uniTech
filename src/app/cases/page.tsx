"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function CasesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Design", "Branding", "Development", "3D Motion"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
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
              Explore our record of high-fidelity platforms, custom branding guidelines, and WebGL creative motion sites.
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-12 border-b border-hairline pb-6">
        <ScrollReveal className="flex flex-wrap gap-2 md:gap-4">
          {categories.map((cat, idx) => (
            <RevealItem key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={project.slug}
                  className="relative group"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link href={`/cases/${project.slug}`} className="block focus:outline-none">
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
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover transition-transform duration-700 ease-custom-ease group-hover:scale-105"
                      />
                      {/* Hover Arrow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-custom-ease">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs uppercase font-mono tracking-widest rounded-full font-bold shadow-lg">
                          Explore <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="mt-6 flex justify-between items-baseline border-b border-hairline/40 pb-4 transition-colors duration-300 group-hover:border-accent">
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-medium tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1.5">
                          {project.services.join(" / ")}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted">{project.year}</span>
                    </div>
                  </Link>
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
