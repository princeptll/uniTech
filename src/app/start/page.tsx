"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

const briefSchema = z.object({
  projectType: z.string({ required_error: "Please select a project type." }),
  budgetRange: z.string({ required_error: "Please select a budget range." }),
  timeline: z.string({ required_error: "Please select a timeline." }),
  details: z.string().min(10, { message: "Tell us a bit more about your project (at least 10 chars)." }),
  name: z.string().min(2, { message: "Please enter your name." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
});

type BriefValues = z.infer<typeof briefSchema>;

export default function StartBriefPage() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<BriefValues>({
    resolver: zodResolver(briefSchema),
    defaultValues: {
      projectType: "",
      budgetRange: "",
      timeline: "",
      details: "",
      name: "",
      email: "",
      company: "",
    },
  });

  // Watch values for selection style active classes
  const selectedType = watch("projectType");
  const selectedBudget = watch("budgetRange");
  const selectedTimeline = watch("timeline");

  const projectTypes = [
    "Custom Software",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud & DevOps",
    "Support & Maintenance",
  ];
  const budgetRanges = ["£10k – £25k", "£25k – £50k", "£50k – £100k", "£100k+"];
  const timelines = ["Under 1 month", "1 – 3 months", "3 – 6 months", "Ongoing support"];

  const progressPercentage = ((step + 1) / 5) * 100;

  const handleNext = async () => {
    // Validate current step fields before progressing
    let fieldsToValidate: (keyof BriefValues)[] = [];
    if (step === 0) fieldsToValidate = ["projectType"];
    else if (step === 1) fieldsToValidate = ["budgetRange"];
    else if (step === 2) fieldsToValidate = ["timeline"];
    else if (step === 3) fieldsToValidate = ["details"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: BriefValues) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Confetti!
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#000000", "#71717A", "#E4E4E7"],
    });

    setIsSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen pt-12 pb-24 flex items-center justify-center">
      <div className="max-w-[700px] w-full mx-auto px-6 relative z-10">
        
        {/* Progress Bar Header */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-muted">
            <span>PROJECT BRIEF</span>
            <span>STEP {step + 1} OF 5</span>
          </div>
          <div className="h-[2px] w-full bg-hairline rounded-full overflow-hidden relative">
            <div
              className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Wizard Panel */}
        <div className="rounded-xl bg-raised border border-hairline p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between">
              
              {/* Question viewport */}
              <div className="flex-1">
                
                {/* Step 1: Project Type */}
                {step === 0 && (
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                      What can we build for you?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <div
                          key={type}
                          onClick={() => setValue("projectType", type, { shouldValidate: true })}
                          className={`p-4 rounded-lg border text-sm font-mono uppercase tracking-wider cursor-pointer text-center transition-all duration-300 ${
                            selectedType === type
                              ? "bg-accent border-accent text-white"
                              : "bg-background border-hairline text-muted hover:border-muted hover:text-primary"
                          }`}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                    {errors.projectType && (
                      <p className="text-xs text-red-400 font-mono">{errors.projectType.message}</p>
                    )}
                  </div>
                )}

                {/* Step 2: Budget */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                      What is your budget index?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <div
                          key={budget}
                          onClick={() => setValue("budgetRange", budget, { shouldValidate: true })}
                          className={`p-4 rounded-lg border text-sm font-mono uppercase tracking-wider cursor-pointer text-center transition-all duration-300 ${
                            selectedBudget === budget
                              ? "bg-accent border-accent text-white"
                              : "bg-background border-hairline text-muted hover:border-muted hover:text-primary"
                          }`}
                        >
                          {budget}
                        </div>
                      ))}
                    </div>
                    {errors.budgetRange && (
                      <p className="text-xs text-red-400 font-mono">{errors.budgetRange.message}</p>
                    )}
                  </div>
                )}

                {/* Step 3: Timeline */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                      What is your timeline?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {timelines.map((time) => (
                        <div
                          key={time}
                          onClick={() => setValue("timeline", time, { shouldValidate: true })}
                          className={`p-4 rounded-lg border text-sm font-mono uppercase tracking-wider cursor-pointer text-center transition-all duration-300 ${
                            selectedTimeline === time
                              ? "bg-accent border-accent text-white"
                              : "bg-background border-hairline text-muted hover:border-muted hover:text-primary"
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                    {errors.timeline && (
                      <p className="text-xs text-red-400 font-mono">{errors.timeline.message}</p>
                    )}
                  </div>
                )}

                {/* Step 4: Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                      Tell us about your product goals
                    </h2>
                    <textarea
                      rows={6}
                      {...register("details")}
                      className={`w-full bg-background border rounded-lg p-4 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors resize-none ${
                        errors.details ? "border-red-500/50" : "border-hairline"
                      }`}
                      placeholder="Describe target features, user stories, backend needs, etc..."
                    />
                    {errors.details && (
                      <p className="text-xs text-red-400 font-mono">{errors.details.message}</p>
                    )}
                  </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                      Tell us how to reach you
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="Your Name *"
                          className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                            errors.name ? "border-red-500/50" : "border-hairline"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 font-mono">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="Your Email *"
                          className={`w-full bg-background border rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors ${
                            errors.email ? "border-red-500/50" : "border-hairline"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 font-mono">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <input
                          type="text"
                          {...register("company")}
                          placeholder="Your Company (Optional)"
                          className="w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-primary placeholder-muted/30 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Navigation Actions Footer */}
              <div className="flex justify-between items-center pt-8 border-t border-hairline/40 mt-8">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors focus:outline-none"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors focus:outline-none"
                  >
                    Next <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold tracking-wide uppercase bg-accent text-white hover:bg-opacity-90 transition-all duration-300 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="relative block h-5 overflow-hidden">
                      <span className="block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full">
                        Submit Brief
                      </span>
                      <span className="absolute top-full left-0 block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full text-white">
                        Submit Brief
                      </span>
                    </span>
                  </button>
                )}
              </div>

            </form>
          ) : (
            // Success view
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
              <div className="text-accent animate-bounce">
                <CheckCircle2 size={64} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                Brief Submitted!
              </h3>
              <p className="text-sm text-muted max-w-[35ch] leading-relaxed">
                Thank you for submitting your project brief. We have received your details and our technical solutions architect will prepare a proposal call in under 24 hours.
              </p>
              <div className="pt-4 flex gap-4">
                <Link
                  href="/"
                  className="text-xs font-mono uppercase tracking-widest text-muted hover:text-primary transition-colors underline"
                >
                  Return Home
                </Link>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(0);
                  }}
                  className="text-xs font-mono uppercase tracking-widest text-accent hover:text-primary transition-colors underline"
                >
                  Restart Brief
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
