"use client";

import ContactSection from "../../components/home/ContactSection";
import ScrollReveal, { RevealItem } from "../../components/ui/ScrollReveal";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      city: "Udwada",
      region: "Gujarat, India",
      address: "Udwada, Gujarat, India",
      hours: "09:00 – 19:00 IST",
      phone: "+91 9601846689",
      email: "uniitechstudio@gmail.com",
      whatsapp: "https://wa.me/+919601846689",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Headings */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12">
        <ScrollReveal className="space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-accent">
            Contact Us
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none text-primary">
            LET'S PARTNER
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[45ch] leading-relaxed">
            Fill out the form below to get in touch with our team, or reach out directly via Phone, Email, or WhatsApp.
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
              Our Office & Direct Reach
            </h2>
          </RevealItem>
          <RevealItem className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {offices.map((office, idx) => (
              <div key={idx} className="space-y-6 rounded-xl bg-raised/30 border border-hairline p-8">
                <div className="font-mono text-xs text-accent uppercase">HEADQUARTERS / {office.region}</div>
                <h3 className="font-display text-2xl font-bold text-primary">{office.city}, {office.region}</h3>
                
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-accent shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-primary hover:text-accent transition-colors font-medium">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-primary hover:text-accent transition-colors font-mono font-medium">
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={office.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </RevealItem>
        </ScrollReveal>
      </div>
    </main>
  );
}
