"use client";

import Link from "next/link";
import PillButton from "./ui/PillButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "Support & Maintenance", href: "/services/support-maintenance" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    // { label: "Careers", href: "/careers" },
    { label: "Selected Work", href: "/work" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter / X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Clutch", href: "https://clutch.co" },
  ];

  return (
    <footer className="relative border-t border-hairline bg-background pt-24 pb-12 overflow-hidden">
      {/* Decorative Grid Lines / Accents */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-hairline/30 pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-hairline/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Top footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 pb-16">

          {/* Big CTA Area */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-accent mb-4">
                READY TO BUILD?
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-none mb-8">
                Let's build <br />
                something serious.
              </h2>
              <PillButton label="Start a Project" href="/start" variant="primary" />
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2.5 sm:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2.5 sm:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-1.5 sm:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-1.5 sm:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-muted">
              <a href="mailto:uniitechstudio@gmail.com" className="block hover:text-primary transition-colors">
                uniitechstudio@gmail.com
              </a>
              <a href="tel:+919601846689" className="block hover:text-primary font-mono transition-colors">
                +919601846689
              </a>
              {/* <a
                href="https://wa.me/+919601846689"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#25D366] hover:underline font-medium transition-colors"
              >
                WhatsApp Chat →
              </a> */}
              <address className="not-italic leading-relaxed text-xs">
                Udwada, Gujarat, <br />
                India
              </address>
            </div>
          </div>

        </div>

        {/* Massive Wordmark */}
        <div className="select-none pointer-events-none border-t border-hairline pt-12 md:pt-16">
          <h1 className="font-display font-extrabold text-[12vw] tracking-tighter leading-none text-center bg-gradient-to-b from-neutral-200 to-neutral-100 bg-clip-text text-transparent uppercase">
            UNITECH
          </h1>
        </div>

        {/* Footer Bottom Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-hairline pt-8 mt-12 text-xs font-mono text-muted">
          <div>
            <p>© 2018–{currentYear} UniTech. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
