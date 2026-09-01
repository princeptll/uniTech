import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { servicesData } from "../../../data/services";
import PillButton from "../../../components/ui/PillButton";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen pb-24">
      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to Services
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="space-y-6 max-w-3xl">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Service details
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-primary">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed pt-2">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Narrative & Details Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 space-y-24">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/60 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">01 / Overview</h3>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-muted max-w-[45ch]">
              {service.overview}
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">02 / What You Get</h3>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-raised border border-hairline">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-semibold text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Process */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">03 / The Process</h3>
          </div>
          <div className="md:col-span-8 space-y-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start border-b border-hairline/40 pb-6 last:border-b-0">
                <span className="font-mono text-xs uppercase tracking-widest text-accent bg-raised border border-hairline px-2 py-1 rounded">
                  Step {step.step}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-primary mb-2">
                    {step.name}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed max-w-[50ch]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">04 / Tools We Use</h3>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded bg-raised border border-hairline text-xs font-mono text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="border-t border-hairline pt-16 flex flex-col items-center text-center space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
            Ready to partner on this service?
          </h3>
          <p className="text-sm text-muted max-w-[40ch] leading-relaxed">
            Fill out our multi-step brief to receive a customized implementation plan and resource budget.
          </p>
          <PillButton label="Start a Project Brief" href="/start" variant="primary" />
        </div>

      </div>
    </main>
  );
}
