import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <main className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6 space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} /> Return Home
        </Link>

        {/* Title */}
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-accent">LEGAL BLUEPRINT</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-primary">
            COOKIE POLICY
          </h1>
          <p className="text-xs font-mono text-muted">Last Updated: August 15, 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none text-muted space-y-8 text-sm md:text-base leading-relaxed">
          <p>
            This is the Cookie Policy for NIXTIO, accessible from nixtio.studio. As is common practice with almost all professional websites, this site uses cookies, which are tiny files downloaded to your computer to improve your experience.
          </p>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">1. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">2. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">3. The Cookies We Set</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Form related cookies:</strong> When you submit data through a form such as those found on contact pages or brief forms, cookies may be set to remember your user details for future correspondence.
              </li>
              <li>
                <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page.
              </li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">4. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
