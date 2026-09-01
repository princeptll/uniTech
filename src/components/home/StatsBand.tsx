"use client";

import CountUp from "../ui/CountUp";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function StatsBand() {
  const stats = [
    { value: 120, suffix: "+", label: "Projects Delivered" },
    { value: 40, suffix: "+", label: "Clients Served" },
    { value: 92, suffix: "%", label: "Repeat Clients" },
    { value: 8, suffix: "", label: "Years In Business" },
  ];

  return (
    <section className="bg-background border-b border-hairline py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-y md:divide-y-0 md:divide-x divide-hairline">
          {stats.map((stat, idx) => (
            <RevealItem
              key={idx}
              className={`flex flex-col items-start ${
                idx % 2 === 0 ? "pr-4" : "pl-4 sm:pl-8"
              } md:px-8 first:pl-0 last:pr-0`}
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-primary mb-2">
                <CountUp end={stat.value} duration={1.5} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase font-mono tracking-widest text-muted">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
