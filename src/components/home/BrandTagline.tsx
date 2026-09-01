"use client";

import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function BrandTagline() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-hairline overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal>
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-muted mb-4">
              OUR CORE PROMISE
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] md:tracking-[0.32em] text-primary uppercase leading-tight">
              INNOVATE. BUILD. DELIVER.
            </h2>
          </RevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
