"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function NichesScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      step: "01",
      title: "Discovery & Architecture",
      desc: "We scope requirements, outline product blueprints, and map backend software schemas.",
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "High-Fidelity Design",
      desc: "We craft custom Figma components, prototype user flows, and align design systems.",
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Iterative Development",
      desc: "Our senior developers write clean TypeScript, construct CI/CD systems, and run tests.",
      duration: "6-12 weeks",
    },
    {
      step: "04",
      title: "Hardening & Launch",
      desc: "We conduct vulnerability checks, load test servers, and migrate production DNS.",
      duration: "1 week",
    },
    {
      step: "05",
      title: "SLA Support & Scale",
      desc: "We monitor telemetry metrics, maintain regular backups, and release feature additions.",
      duration: "Ongoing",
    },
  ];

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".value-heading-item", { opacity: 1, position: "relative", marginBottom: "3rem" });
      return;
    }

    const trigger = triggerRef.current;
    const container = containerRef.current;
    if (!trigger || !container) return;

    // Timeline for crossfades
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Set first item visible, others hidden
    gsap.set(".value-heading-0", { opacity: 1, y: 0 });
    gsap.set(".value-heading-1", { opacity: 0, y: 40 });
    gsap.set(".value-heading-2", { opacity: 0, y: 40 });
    gsap.set(".value-heading-3", { opacity: 0, y: 40 });
    gsap.set(".value-heading-4", { opacity: 0, y: 40 });

    // Scroll sequence timings
    tl.to(".value-heading-0", { opacity: 0, y: -40, duration: 1 })
      .to(".value-heading-1", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".value-heading-1", { opacity: 0, y: -40, duration: 1 }, "+=0.5")
      .to(".value-heading-2", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".value-heading-2", { opacity: 0, y: -40, duration: 1 }, "+=0.5")
      .to(".value-heading-3", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".value-heading-3", { opacity: 0, y: -40, duration: 1 }, "+=0.5")
      .to(".value-heading-4", { opacity: 1, y: 0, duration: 1 }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Sticky container that remains pinned during scroll */}
      <div
        ref={triggerRef}
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-10"
      >


        {/* Content Container */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Static Info) */}
          <div className="md:col-span-6 space-y-6">
            <ScrollReveal className="space-y-6">
              <RevealItem>
                <p className="text-xs uppercase font-mono tracking-widest text-accent">
                  How We Work
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-primary">
                  Our engineering <br />
                  process.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="text-base md:text-lg text-muted max-w-[42ch] leading-relaxed">
                  We divide project lifecycles into five distinct development phases, ensuring that deliverables are backed by clean architecture and test-driven releases.
                </p>
              </RevealItem>
            </ScrollReveal>
          </div>

          {/* Right Column (Fading Value Stack / Timeline fallback on mobile) */}
          <div className="md:col-span-6 relative h-[300px] md:h-[350px] flex items-center">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className={`value-heading-item value-heading-${idx} md:absolute inset-x-0 md:opacity-0 transition-all duration-300 md:transform md:translate-y-10 flex flex-col items-start`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent px-2 py-1 rounded bg-raised border border-hairline">
                    Step {stage.step}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Duration: {stage.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-primary mb-4">
                  {stage.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-[40ch]">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
