"use client";

import Marquee from "../ui/Marquee";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function ClientMarquee() {
  const items = [
    "Corporate and business websites",
    "eCommerce development",
    "CMS development",
    "Web portals",
    "Progressive Web Apps",
    "Performance optimisation & Core Web Vitals",
    "Native iOS and Android",
    "Cross-platform",
    "App Store / Play Store deployment and ASO",
    "App maintenance and version upgrades",
    "Product design",
    "UX design",
    "UI design",
    "Design Systems",
    "Wireframing",
    "Interactive prototyping",
    "User research",
    "Usability testing",
    "UX audits",
    "Branding",
    "Logo design",
    "Identity systems",
    "Cloud migration",
    "AWS",
    "Azure",
    "GCP",
    "Cloud architecture",
    "CI/CD pipelines",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Infrastructure as code",
    "Monitoring",
    "Logging",
    "Observability",
    "Cloud cost optimisation",
    "Server management",
    "Managed hosting",
  ];

  return (
    <section className="bg-background pt-24 pb-0 md:pt-32 md:pb-0 border-b border-hairline overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <ScrollReveal className="space-y-6 flex flex-col items-center text-center">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Our Capabilities
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-[32ch] mx-auto">
              From idea to execution, we build digital solutions that scale with ambition.
            </h2>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Marquee Track */}
      <Marquee direction="left" pauseOnHover={true} speed={80}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-muted hover:text-primary transition-colors duration-300 select-none cursor-pointer px-8"
          >
            {/* Simple Elegant Bullet/Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
            <div className="text-lg md:text-2xl transition-all duration-300 font-serif italic">
              {item}
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
