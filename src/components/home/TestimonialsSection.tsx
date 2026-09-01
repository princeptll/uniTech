"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const totalScroll = el.scrollWidth - el.clientWidth;
    if (totalScroll <= 0) {
      setScrollProgress(0);
      return;
    }

    const currentScroll = el.scrollLeft;
    setScrollProgress(Math.min(currentScroll / totalScroll, 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline overflow-hidden" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="space-y-6 mb-20">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Client Feedback
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-none text-primary">
              Client Reviews
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-muted text-base max-w-[40ch]">
              We help growing businesses build serious software. Here is what our clients say.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Draggable/Swipable Snap Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            
            {/* Card A (Review Aggregate) */}
            <div className="min-w-[280px] sm:min-w-[360px] md:min-w-[400px] snap-start shrink-0 rounded-xl bg-raised border border-hairline p-8 flex flex-col justify-between">
              <div>
                {/* Star Ratings */}
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium leading-snug text-primary">
                  Over 40+ growing businesses trust UniTech for custom software & web engineering.
                </h3>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex -space-x-3 overflow-hidden">
                  {avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="relative w-10 h-10 rounded-full border-2 border-raised overflow-hidden"
                    >
                      <Image
                        src={avatar}
                        alt="Reviewer avatar"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-raised bg-accent text-xs font-mono font-bold text-white">
                    40+
                  </div>
                </div>
                
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors duration-300"
                >
                  Read all reviews <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Cards B-D (Quotes) */}
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-[280px] sm:min-w-[380px] md:min-w-[480px] snap-start shrink-0 rounded-xl bg-raised border border-hairline p-8 flex flex-col justify-between"
              >
                {/* Quote Text */}
                <blockquote className="font-display text-lg md:text-xl font-normal leading-relaxed text-muted before:content-['“'] after:content-['”']">
                  {t.quote}
                </blockquote>

                {/* Profile Meta */}
                <div className="flex items-center gap-4 mt-12 border-t border-hairline/50 pt-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-hairline bg-background">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-primary block">
                      {t.name}
                    </cite>
                    <span className="text-xs font-mono text-muted uppercase tracking-wider block mt-1">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Progress Bar Underneath */}
          <div className="mt-8 max-w-md mx-auto h-[2px] bg-hairline rounded-full overflow-hidden relative">
            <div
              className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${scrollProgress * 100}%`,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
