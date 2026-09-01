"use client";

import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

export default function TechStackSection() {
  const categories = [
    {
      name: "Frontend",
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vue.js", "Three.js", "WebGL"],
    },
    {
      name: "Backend",
      tags: ["Node.js", "Python", "Go Lang", "NestJS", "GraphQL", "REST APIs", "gRPC"],
    },
    {
      name: "Mobile Development",
      tags: ["React Native", "Flutter", "Swift", "Kotlin", "Fastlane", "App Store Connect"],
    },
    {
      name: "Cloud & DevOps",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Google Cloud", "Vercel"],
    },
    {
      name: "Databases & Cache",
      tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Prisma ORM"],
    },
    {
      name: "AI & Data Science",
      tags: ["PyTorch", "OpenAI API", "TensorFlow", "Pandas", "LangChain", "Vector DBs"],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="tech-stack">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="space-y-6 mb-20 max-w-3xl">
          <RevealItem>
            <p className="text-xs uppercase font-mono tracking-widest text-accent">
              Our Toolkit
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-primary">
              Core Tech Stack
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We leverage production-grade frameworks, robust cloud providers, and advanced data models to build reliable, high-uptime digital platforms.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} className="space-y-6 border border-hairline rounded-xl p-8 bg-raised hover:border-accent/40 transition-colors duration-300">
              <RevealItem>
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {cat.name}
                </h3>
              </RevealItem>
              <RevealItem>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-md text-xs font-mono bg-background border border-hairline text-primary transition-all duration-300 hover:text-accent hover:border-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </RevealItem>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
