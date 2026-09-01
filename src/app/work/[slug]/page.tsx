import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../../../data/projects";
import PillButton from "../../../components/ui/PillButton";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  // Find next project
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="bg-background min-h-screen pb-24">
      {/* Back Button & Top Action */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-12 flex justify-between items-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black text-xs font-mono uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors shadow-lg"
        >
          Visit Live Site <ExternalLink size={14} />
        </a>
      </div>

      {/* Hero Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase font-mono tracking-widest text-accent">
              Case Study &bull; {project.category}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary max-w-[20ch]">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-raised border border-hairline rounded-full text-xs font-mono text-muted uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed Hero Cover Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-raised border-y border-hairline mb-20">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Project Meta Column Row */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y border-hairline/60 items-center">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">CLIENT</h4>
            <p className="text-sm font-semibold text-primary">{project.client}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">YEAR</h4>
            <p className="text-sm font-semibold text-primary">{project.year}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">CATEGORY</h4>
            <p className="text-sm font-semibold text-primary">{project.category}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">SERVICES</h4>
            <p className="text-sm font-semibold text-primary">{project.services.join(", ")}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">LIVE DEMO</h4>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              Visit Site <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Narrative Section (Overview -> Challenge -> Approach -> Outcome) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 space-y-24">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">01 / Overview</h3>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-xl md:text-3xl font-light leading-relaxed text-muted max-w-[45ch]">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Challenge & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">02 / The Challenge</h3>
          </div>
          <div className="md:col-span-5">
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-[40ch]">
              {project.challenge}
            </p>
          </div>
          <div className="md:col-span-3 space-y-8 border-l border-hairline/60 pl-8">
            {project.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">03 / The Approach</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-[50ch]">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-hairline/40 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent">04 / The Outcome</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-[50ch] mb-12">
              {project.outcome}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors shadow-xl"
              >
                Launch Live Website <ExternalLink size={16} />
              </a>
              <PillButton label="Start a Similar Project" href="/start" variant="outline" />
            </div>
          </div>
        </div>
      </div>

      {/* Next Project CTA Link */}
      <div className="border-t border-hairline mt-32 pt-24 bg-raised/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
            NEXT CASE STUDY
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-block focus:outline-none"
            data-cursor="pointer"
          >
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary group-hover:text-accent transition-colors duration-500">
              {nextProject.title}
            </h2>
            <span className="inline-flex items-center gap-2 mt-8 text-sm font-mono uppercase tracking-widest text-accent group-hover:text-primary transition-colors duration-300">
              Next Project <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
