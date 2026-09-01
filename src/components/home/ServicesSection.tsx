"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AccordionItem from "../ui/Accordion";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";
import PillButton from "../ui/PillButton";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      number: "001",
      slug: "custom-software",
      title: "Custom Software Development",
      description:
        "We build high-performance web applications, internal operations tools, APIs, and custom integrations tailored to automate operations and replace outdated legacy systems.",
      tags: ["Web Applications", "Internal Tools", "API Integration", "Legacy Modernization", "MVP Builds", "System Integration"],
    },
    {
      number: "002",
      slug: "web-development",
      title: "Web Development",
      description:
        "We engineer high-speed marketing websites, performance-optimized eCommerce platforms, headless CMS channels, and clean static codebases ready for SEO indexing.",
      tags: ["Personal, Business and company websites", "Online stores", "Easy-to-update websites", "Customer and partner login portals", "Websites that work like apps", "Making slow websites fast"],
    },
    {
      number: "003",
      slug: "mobile-apps",
      title: "Mobile App Development",
      description:
        "We design and develop native and cross-platform mobile apps for iOS and Android using React Native and Flutter, complete with store deployment pipelines.",
      tags: ["iPhone and Android apps", "One app that works on both", "Publishing to the App Store and Play Store", "Getting found in app stores", "Keeping apps updated and running"],
    },
    {
      number: "004",
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "We create clean user interfaces, component-based Figma design systems, patient user journey maps, and high-fidelity interactive prototypes ready for coding.",
      tags: ["Designing how your product works", "Designing how it looks", "Keeping every screen consistent", "Rough layouts before we build", "Clickable demos you can try", "Learning what your users need", "Testing with real people", "Reviewing what's not working in your current product", "Logo and brand design"],
    },
    {
      number: "005",
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      description:
        "We provision automated cloud infrastructures on AWS, GCP, and Azure, orchestrate Docker containers, build CI/CD pipelines, and monitor cluster vulnerabilities.",
      tags: ["Moving your systems to the cloud", "Setting up on AWS, Azure or Google Cloud", "Planning how it's all built", "Automatic updates and releases", "Packaging apps so they run anywhere", "Tracking whether everything is healthy", "Cutting your cloud bill", "Managing your servers and hosting"],
    },
    {
      number: "006",
      slug: "support-maintenance",
      title: "Support & Maintenance",
      description:
        "We provide SLA-backed support, fast patch deployments, server health checks, regular dependencies upgrades, and continuous feature sprints.",
      tags: ["SLA Agreements", "Bug Mitigation", "Dependency Updates", "Server Tracking", "Ongoing Sprints", "Version Upgrades"],
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background pt-12 pb-24 md:pt-16 md:pb-32 border-b border-hairline" id="services">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="space-y-6 mb-20">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              What We Do
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-none text-primary">
              Our Services
            </h2>
          </RevealItem>
        </ScrollReveal>

        {/* Services Accordion list */}
        <div className="border-t border-hairline mb-16">
          {services.map((service, idx) => (
            <AccordionItem
              key={service.number}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
              title={service.title}
              number={service.number}
              variant="services"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 pb-8">
                {/* Description left */}
                <div className="md:col-span-7 flex flex-col justify-between items-start">
                  <p className="text-base md:text-lg text-muted leading-relaxed max-w-[50ch] mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors duration-300"
                  >
                    Explore Service <ArrowUpRight size={14} />
                  </Link>
                </div>
                {/* Capabilities right */}
                <div className="md:col-span-5 flex flex-col items-start md:items-end">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-accent mb-4 md:text-right">
                    Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-raised border border-hairline text-muted hover:border-accent hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex justify-start">
          <ScrollReveal>
            <RevealItem>
              <PillButton label="Start a Project" href="/start" variant="primary" />
            </RevealItem>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
