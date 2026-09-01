"use client";

import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function CareersPage() {
  const benefits = [
    { title: "100% Remote Flexibility", desc: "Work from anywhere in the world. We focus entirely on sprint output and code quality, not clocked desk hours." },
    { title: "Latest Hardware Stipend", desc: "Get a MacBook Pro and any necessary screen or peripheral setups to make your environment comfortable." },
    { title: "Continuous Learning Budget", desc: "We cover books, online courses, and registration passes to major software engineering conferences yearly." },
  ];

  const roles = [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full-Time / Remote",
      department: "Engineering",
      description: "We are seeking a developer with 5+ years of experience in React/Next.js and Node.js backend streams to own product feature sprints.",
    },
    {
      title: "Cloud & DevOps Architect",
      type: "Full-Time / Remote",
      department: "Infrastructure",
      description: "Looking for an expert in AWS services, Terraform scripts, and Docker workloads to provision secure scaling clusters.",
    },
    {
      title: "Lead UI/UX Product Designer",
      type: "Full-Time / London or Hybrid",
      department: "Design",
      description: "Seeking a designer to own Figma component files, map out complex user journeys, and establish detailed developer handoffs.",
    },
  ];

  return (
    <main className="bg-background min-h-screen pt-12 pb-24">
      {/* Page Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <ScrollReveal className="space-y-6 max-w-3xl">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Careers
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            JOIN UNITECH
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed pt-2">
            We are a team of senior engineers and product designers shipping serious code. If you care about details, performance, and scalability, let's build together.
          </p>
        </ScrollReveal>
      </div>

      {/* Cultural Benefits Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-32 border-t border-hairline pt-16">
        <ScrollReveal className="mb-16">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-primary">
              Why work with us
            </h2>
          </RevealItem>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 rounded-xl bg-raised border border-hairline space-y-4">
              <h3 className="font-display text-xl font-semibold text-primary">{b.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Roles List */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <ScrollReveal className="mb-16">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-primary">
              Open Positions
            </h2>
          </RevealItem>
        </ScrollReveal>

        <div className="space-y-6">
          {roles.map((role, idx) => (
            <ScrollReveal key={idx} className="border border-hairline rounded-xl p-8 bg-raised hover:border-accent/40 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest bg-background border border-hairline px-2 py-0.5 rounded">
                    {role.department}
                  </span>
                  <span className="font-mono text-xs text-muted">{role.type}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                  {role.title}
                </h3>
                <p className="text-sm text-muted max-w-[55ch] leading-relaxed">
                  {role.description}
                </p>
              </div>
              <div className="shrink-0 pt-4 md:pt-0">
                <a
                  href={`mailto:hello@unitech.dev?subject=Application for ${role.title}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest bg-primary text-background hover:bg-accent hover:text-white transition-all duration-300 font-semibold"
                >
                  Apply Now
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Spontaneous Applications */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center border-t border-hairline pt-16">
        <p className="text-sm text-muted max-w-[45ch] mx-auto leading-relaxed mb-6">
          Don't see your specific role but believe you fit our engineering mindset? Send your CV and GitHub links to us directly.
        </p>
        <a
          href="mailto:hello@unitech.dev?subject=Spontaneous Application"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors duration-300"
        >
          Spontaneous Application hello@unitech.dev
        </a>
      </div>
    </main>
  );
}
