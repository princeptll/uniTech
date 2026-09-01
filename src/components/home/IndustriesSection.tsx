"use client";

import { CreditCard, Activity, Truck, ShoppingBag, BookOpen, Cpu } from "lucide-react";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function IndustriesSection() {
  const industries = [
    {
      icon: <CreditCard className="text-accent" size={24} />,
      name: "Fintech",
      line: "High-security payment gateways, ledger synchronization, and reporting engines.",
    },
    {
      icon: <Activity className="text-accent" size={24} />,
      name: "Healthcare",
      line: "HIPAA-compliant patient portals, doctor scheduling channels, and encryption tools.",
    },
    {
      icon: <Truck className="text-accent" size={24} />,
      name: "Logistics",
      line: "Offline-first delivery synchronization, route tracking, and supply chain modules.",
    },
    {
      icon: <ShoppingBag className="text-accent" size={24} />,
      name: "eCommerce",
      line: "Headless commerce interfaces, custom checkouts, and catalog performance tuning.",
    },
    {
      icon: <BookOpen className="text-accent" size={24} />,
      name: "Education",
      line: "Interactive e-learning platforms, cohort dashboards, and student analytics panels.",
    },
    {
      icon: <Cpu className="text-accent" size={24} />,
      name: "SaaS",
      line: "Event telemetry visualization, subscription workflows, and security frameworks.",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="industries">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="space-y-6 mb-20 max-w-3xl">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Sectors We Serve
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-primary">
              Target Industries
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We translate complex sector challenges into robust, reliable digital infrastructure, aligning design patterns with industry regulations and metrics.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Industry Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <ScrollReveal key={idx} className="space-y-4 border border-hairline rounded-xl p-8 bg-raised hover:border-accent/40 transition-colors duration-300">
              <RevealItem>
                <div className="w-12 h-12 rounded-lg bg-background border border-hairline flex items-center justify-center">
                  {item.icon}
                </div>
              </RevealItem>
              <RevealItem>
                <h3 className="font-display text-xl font-semibold tracking-tight text-primary">
                  {item.name}
                </h3>
              </RevealItem>
              <RevealItem>
                <p className="text-sm text-muted leading-relaxed">
                  {item.line}
                </p>
              </RevealItem>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
