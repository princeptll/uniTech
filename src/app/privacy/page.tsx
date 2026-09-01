import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-xs font-mono text-muted">Last Updated: August 15, 2026</p>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none text-muted space-y-8 text-sm md:text-base leading-relaxed">
          <p>
            At UniTech, accessible from unitech.dev, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UniTech and how we use it.
          </p>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">1. Information We Collect</h2>
            <p>
              If you contact us directly or submit a project brief, we may receive additional information about you such as your name, email address, company name, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website performance.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you directly for customer support, product delivery, and response to briefs.</li>
              <li>Send you emails or respond to briefs.</li>
              <li>Find and prevent fraud.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">3. Log Files</h2>
            <p>
              UniTech follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">4. Data Protection Rights (GDPR & CCPA)</h2>
            <p>
              We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability. If you make a request, we have one month to respond to you.
            </p>
          </div>

          <div className="space-y-4 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-primary">5. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
