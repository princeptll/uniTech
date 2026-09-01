import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            TERMS OF SERVICE
          </h1>
          <p className="text-xs font-mono text-muted">Last Updated: August 15, 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none text-muted space-y-8 text-sm md:text-base leading-relaxed">
          <p>
            Welcome to UniTech. These Terms of Service govern your use of our website located at unitech.dev and our custom software services.
          </p>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use UniTech if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">2. Intellectual Property & Code Ownership</h2>
            <p>
              Unless otherwise specified in a signed service agreement, all custom source code, design assets, database structures, and documentation delivered to and paid for by the client are the sole intellectual property (IP) of the client. UniTech retains no residual rights to custom client IP post-delivery and final payment clearance.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">3. Disclaimer & Warranties</h2>
            <p>
              Our services are provided "as is" and "as available". UniTech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">4. Limitations of Liability</h2>
            <p>
              In no event shall UniTech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UniTech's website or custom software builds, even if UniTech has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of England & Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
