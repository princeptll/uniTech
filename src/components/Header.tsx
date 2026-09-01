"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "./ui/LogoIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Projects", href: "/work" },
    { label: "Studio", href: "/about" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-custom-ease py-6 ${
          isScrolled ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between relative min-h-[50px]">
          
          {/* Logo Section (Fades and slides out on scroll) */}
          <div
            className={`transition-all duration-500 ease-custom-ease transform ${
              isScrolled
                ? "md:opacity-0 md:-translate-x-10 md:pointer-events-none"
                : "opacity-100 translate-x-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none select-none"
              aria-label="UniTech Home"
            >
              <LogoIcon className="w-8 h-8 text-primary" />
              <span className="font-display text-lg font-bold uppercase tracking-widest text-primary hidden sm:inline-block">
                UniTech
              </span>
            </Link>
          </div>

          {/* Center Navigation Pill (Dead-centered and transitions to White Pill on scroll) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <nav
              className={`transition-all duration-500 ease-custom-ease rounded-full px-8 py-3.5 border ${
                isScrolled
                  ? "bg-black text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] border-white/10"
                  : "bg-transparent text-primary border-transparent"
              }`}
            >
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/#testimonials" && pathname.startsWith(link.href + "/"));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-semibold tracking-tight transition-colors duration-200 focus:outline-none ${
                        isScrolled
                          ? isActive
                            ? "text-white"
                            : "text-neutral-400 hover:text-white"
                          : isActive
                          ? "text-primary"
                          : "text-neutral-600 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Right Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Start a Project Pill (Fades and slides out on scroll) */}
            <div
              className={`hidden md:block transition-all duration-500 ease-custom-ease transform ${
                isScrolled
                  ? "md:opacity-0 md:translate-x-10 md:pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <Link
                href="/start"
                className="inline-flex items-center justify-center bg-black text-white hover:bg-neutral-900 font-semibold text-sm rounded-full px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-black/10 transition-all duration-300 active:scale-98 focus:outline-none"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Hamburger Button (Always visible on mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden p-2 text-primary hover:text-accent transition-colors select-none focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-between p-8 pt-28"
          >
            {/* Background decorative mesh gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03),transparent_40%)] pointer-events-none" />

            <nav className="flex flex-col gap-6 md:gap-8 mt-12 pl-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-4xl font-semibold tracking-tighter uppercase focus:outline-none ${
                      pathname === link.href ? "text-accent" : "text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center bg-black text-white hover:bg-neutral-900 font-semibold text-base rounded-full py-4 px-8 w-full max-w-xs transition-colors duration-300 text-center"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>

            {/* Footer section of mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="border-t border-hairline pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted pl-4"
            >
              <div>
                <p>REACH OUT</p>
                <a href="mailto:hello@unitech.dev" className="text-primary hover:text-accent mt-1 block">
                  hello@unitech.dev
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://linkedin.com" className="hover:text-primary" target="_blank" rel="noreferrer">LN</a>
                <a href="https://github.com" className="hover:text-primary" target="_blank" rel="noreferrer">GH</a>
                <a href="https://x.com" className="hover:text-primary" target="_blank" rel="noreferrer">X</a>
                <a href="https://instagram.com" className="hover:text-primary" target="_blank" rel="noreferrer">IG</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
