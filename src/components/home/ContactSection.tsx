"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Check, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import ScrollReveal, { RevealItem } from "../ui/ScrollReveal";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Please tell us your name." }),
  email: z.string().email({ message: "Enter an email we can reply to." }),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Select a project type." }),
  budgetRange: z.string().min(1, { message: "Select a budget range." }),
  message: z.string().min(10, { message: "Please describe your project (minimum 10 characters)." }),
  captcha: z.boolean().refine((val) => val === true, {
    message: "Verify you are human to submit.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budgetRange: "",
      message: "",
      captcha: false,
    },
  });

  const captchaValue = watch("captcha");

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Trigger premium confetti celebration (cyan/blue tones)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#71717A", "#E4E4E7"],
    });

    setIsSubmitted(true);
  };

  const projectTypes = [
    "Custom Software Development",
    "Web Development / Headless CMS",
    "Mobile App Development",
    "UI/UX Product Design",
    "Cloud & DevOps Migration",
    "Other / Multi-disciplinary",
  ];

  const budgetRanges = [
    "£10k – £25k",
    "£25k – £50k",
    "£50k – £100k",
    "£100k+",
  ];

  return (
    <section className="bg-background py-24 md:py-32 border-b border-hairline" id="contact">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Info Columns */}
          <div className="lg:col-span-5 space-y-12">
            <ScrollReveal className="space-y-6">
              <RevealItem>
                <p className="text-xs uppercase font-mono tracking-widest text-accent">
                  Let's talk
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-primary">
                  LET'S BUILD <br />
                  <span className="text-accent pl-[6vw]">IT.</span>
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="text-lg md:text-xl leading-relaxed text-muted max-w-[35ch]">
                  <strong className="text-primary font-semibold">Have a serious engineering budget?</strong> Let's partner to construct scalable custom software that delivers results.
                </p>
              </RevealItem>
            </ScrollReveal>

            {/* Office Coordinates */}
            <ScrollReveal className="space-y-6 pt-8 border-t border-hairline">
              <RevealItem className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                    London Office
                  </h4>
                  <address className="not-italic text-sm text-muted leading-relaxed">
                    12 Gutter Lane, EC2V 8AS, London, UK
                  </address>
                </div>
              </RevealItem>

              <RevealItem className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                    General Inquiries
                  </h4>
                  <a href="mailto:hello@unitech.dev" className="text-sm text-muted hover:text-primary transition-colors">
                    hello@unitech.dev
                  </a>
                </div>
              </RevealItem>

              <RevealItem className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                    Direct Call
                  </h4>
                  <a href="tel:+442074829110" className="text-sm text-muted hover:text-primary transition-colors">
                    +44 (0) 20 7482 9110
                  </a>
                </div>
              </RevealItem>
            </ScrollReveal>

            {/* Supporting Blocks */}
            <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-hairline">
              <RevealItem className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-primary">
                  Quick response.
                </h4>
                <p className="text-xs text-muted leading-relaxed max-w-[20ch]">
                  We review requests immediately and reply within 24 hours. Guaranteed.
                </p>
              </RevealItem>
              <RevealItem className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-primary">
                  Clear next steps.
                </h4>
                <p className="text-xs text-muted leading-relaxed max-w-[20ch]">
                  After the call, you get a full scoped brief, layout blueprint, and quote.
                </p>
              </RevealItem>
            </ScrollReveal>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 rounded-xl bg-raised border border-hairline p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                      errors.name ? "border-red-500/50" : "border-hairline"
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                      errors.email ? "border-red-500/50" : "border-hairline"
                    }`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    {...register("projectType")}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                      errors.projectType ? "border-red-500/50" : "border-hairline"
                    }`}
                  >
                    <option value="">Select a service category...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label htmlFor="budgetRange" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    {...register("budgetRange")}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                      errors.budgetRange ? "border-red-500/50" : "border-hairline"
                    }`}
                  >
                    <option value="">Select budget range...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.budgetRange.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors resize-none ${
                      errors.message ? "border-red-500/50" : "border-hairline"
                    }`}
                    placeholder="Describe your project goals, timelines, and technical requirements..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Captcha */}
                <div className="space-y-2">
                  <div
                    onClick={() => setValue("captcha", !captchaValue, { shouldValidate: true })}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-background border cursor-pointer select-none transition-all duration-300 ${
                      errors.captcha ? "border-red-500/30 bg-red-500/5" : "border-hairline"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                        captchaValue
                          ? "bg-accent border-accent text-white"
                          : "border-hairline bg-background"
                      }`}
                    >
                      {captchaValue && <Check size={14} />}
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-xs font-mono text-muted uppercase tracking-wider">
                        I am human verification
                      </span>
                      <span className="text-[10px] font-mono text-muted/50">Turnstile</span>
                    </div>
                  </div>
                  {errors.captcha && (
                    <p className="text-xs text-red-400 font-mono mt-1">{errors.captcha.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold tracking-wide uppercase bg-accent text-white hover:bg-opacity-90 transition-all duration-300 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50"
                  >
                    <span className="relative block h-5 overflow-hidden">
                      <span className="block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full">
                        {isSubmitting ? "Sending Brief..." : "Send Message"}
                      </span>
                      <span className="absolute top-full left-0 block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full text-white">
                        {isSubmitting ? "Sending Brief..." : "Send Message"}
                      </span>
                    </span>
                  </button>
                </div>

                {/* Legal link consent */}
                <p className="text-[10px] font-mono text-muted leading-relaxed mt-4">
                  By clicking submit you consent to our storage and management of details in accordance with our{" "}
                  <Link href="/privacy" className="text-primary hover:text-accent underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-primary hover:text-accent underline">
                    Terms of Service
                  </Link>
                  .
                </p>

              </form>
            ) : (
              // Success state replaces the form
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="text-accent animate-bounce">
                  <CheckCircle2 size={64} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                  Project Brief Received!
                </h3>
                <p className="text-sm text-muted max-w-[35ch] leading-relaxed">
                  Thank you for reaching out to UniTech. We have received your details and our engineering solutions lead will contact you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-widest text-accent hover:text-primary underline transition-colors"
                  >
                    Send another brief
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
