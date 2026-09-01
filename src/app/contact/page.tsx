"use client";

import ContactSection from "../../components/home/ContactSection";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";

export default function ContactPage() {
  const offices = [
    {
      city: "London",
      address: "12 Gutter Lane, EC2V 8AS, London, UK",
      hours: "09:00 – 18:00 GMT",
      phone: "+44 (0) 20 7482 9110",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Headings */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12">
        <ScrollReveal className="space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            LET'S PARTNER
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[45ch] leading-relaxed">
            Fill out the project brief form below to trigger our client workflow, or call our London engineering office.
          </p>
        </ScrollReveal>
      </div>

      {/* Renders the form section */}
      <ContactSection />

      {/* Global Offices Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-24">
        <ScrollReveal className="border-t border-hairline pt-16">
          <RevealItem className="mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-primary">
              Our Offices
            </h2>
          </RevealItem>
          <RevealItem className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {offices.map((office, idx) => (
              <div key={idx} className="space-y-4 rounded-xl bg-raised/30 border border-hairline p-8">
                <div className="font-mono text-xs text-accent">WORKSPACE / {office.city.toUpperCase()}</div>
                <h3 className="font-display text-xl font-bold text-primary">{office.city}</h3>
                <div className="space-y-2 text-sm text-muted">
                  <p>{office.address}</p>
                  <p>{office.hours}</p>
                  <p className="text-primary hover:text-accent transition-colors font-mono mt-2 block">
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </RevealItem>
        </ScrollReveal>
      </div>
    </main>
  );
}
