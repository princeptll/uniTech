"use client";

import HeroSection from "../components/home/HeroSection";
import BrandTagline from "../components/home/BrandTagline";
import ClientMarquee from "../components/home/ClientMarquee";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TestimonialsSection from "../components/home/TestimonialsSection";
import StatsBand from "../components/home/StatsBand";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "UniTech",
      "alternateName": "UniTech Software Engineering",
      "url": "https://unitech.dev",
      "logo": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop",
      "foundingDate": "2018",
      "knowsAbout": [
        "Custom Software Development",
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Cloud Infrastructure",
        "DevOps"
      ],
      "sameAs": [
        "https://linkedin.com",
        "https://github.com",
        "https://x.com"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@unitech.dev",
        "telephone": "+44-20-7482-9110",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "UniTech",
      "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      "telephone": "+44-20-7482-9110",
      "url": "https://unitech.dev",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Gutter Lane",
        "addressLocality": "London",
        "postalCode": "EC2V 8AS",
        "addressCountry": "GB"
      },
      "priceRange": "£££"
    }
  ];

  return (
    <main className="w-full bg-background relative">
      {/* Search Engine Organization & Service Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Showreel */}
      <HeroSection />

      {/* Brand Tagline */}
      <BrandTagline />

      {/* 2. Tech Logo Marquee */}
      <ClientMarquee />

      {/* 3. Services Accordions */}
      <ServicesSection />

      {/* 4. Featured Projects Grid */}
      <FeaturedProjects />

      {/* 10. Client Testimonials Carousel */}
      <TestimonialsSection />

      {/* 11. Four Stats Band */}
      <StatsBand />

      {/* 14. Contact Form */}
      <ContactSection />
    </main>
  );
}
