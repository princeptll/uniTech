"use client";

import Link from "next/link";
import { ArrowRight, Code, Globe, Smartphone, Palette, Cloud, Settings } from "lucide-react";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="text-accent" size={32} />,
      slug: "custom-software",
      title: "Custom Software Development",
      description: "We build reliable backend architectures, operational platforms, and integrations designed to replace legacy systems.",
      tags: ["Web Applications", "Internal Tools", "API Integration", "Legacy Modernization", "MVP Builds"],
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      slug: "web-development",
      title: "Web Development",
      description: "We engineer high-performance marketing sites, fast eCommerce layers, headless CMS structures, and custom static configurations.",
      tags: ["Next.js & React", "Headless CMS", "eCommerce", "Static Site Gen", "SEO Foundations"],
    },
    {
      icon: <Smartphone className="text-accent" size={32} />,
      slug: "mobile-apps",
      title: "Mobile App Development",
      description: "We design and develop native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      tags: ["iOS Apps", "Android Apps", "React Native", "Flutter", "App Store Pipelines"],
    },
    {
      icon: <Palette className="text-accent" size={32} />,
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description: "We design premium interfaces, robust Figma components, and detailed prototypes focused on user retention.",
      tags: ["Product Design", "Figma Design Systems", "Prototyping", "User Journey Maps", "Usability Audits"],
    },
    {
      icon: <Cloud className="text-accent" size={32} />,
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      description: "We provision secure cloud workloads, configure docker container pipelines, and set up automated telemetry alerts.",
      tags: ["AWS Setup", "GCP Deployment", "Docker & K8s", "CI/CD Pipelines", "Telemetry Alerts"],
    },
    {
      icon: <Settings className="text-accent" size={32} />,
      slug: "support-maintenance",
      title: "Support & Maintenance",
      description: "We provide SLA-backed support, fast patch deployments, server health checks, and dependencies upgrades.",
      tags: ["SLA Agreements", "Bug Mitigation", "Dependency Updates", "Server Tracking", "Version Upgrades"],
    },
  ];

  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <ScrollReveal className="space-y-6 max-w-3xl">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Our Capabilities
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
              SERVICES
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-muted text-base md:text-lg leading-relaxed pt-2">
              We design, build, and support critical software infrastructure for growing brands. Discover how we partner with engineering budgets.
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Services Cards Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} className="flex flex-col justify-between border border-hairline rounded-xl p-8 bg-raised hover:border-accent/40 transition-colors duration-300 min-h-[380px]">
              <div className="space-y-6">
                <RevealItem>
                  <div className="w-16 h-16 rounded-xl bg-background border border-hairline flex items-center justify-center">
                    {service.icon}
                  </div>
                </RevealItem>
                <RevealItem>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-primary">
                    {service.title}
                  </h3>
                </RevealItem>
                <RevealItem>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </RevealItem>
                <RevealItem>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-background border border-hairline text-[10px] font-mono text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </RevealItem>
              </div>

              <RevealItem>
                <div className="pt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 focus:outline-none"
                  >
                    View details <ArrowRight size={14} />
                  </Link>
                </div>
              </RevealItem>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
