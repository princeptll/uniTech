"use client";

import React from "react";
import { Plus } from "lucide-react";

interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  number?: string;
  children: React.ReactNode;
  variant?: "services" | "faq";
}

export default function AccordionItem({
  isOpen,
  onToggle,
  title,
  number,
  children,
  variant = "services",
}: AccordionItemProps) {
  const isServices = variant === "services";

  return (
    <div className={`border-b border-hairline ${isServices ? "py-8" : "py-6"}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left group focus:outline-none"
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          {isServices && number && (
            <span className="font-mono text-xs md:text-sm text-muted">
              {number}
            </span>
          )}
          <h3
            className={`font-display font-medium tracking-tight text-primary transition-colors duration-300 group-hover:text-accent ${
              isServices
                ? "text-2xl md:text-4xl"
                : "text-lg md:text-2xl"
            }`}
          >
            {title}
          </h3>
        </div>
        
        {/* Toggle Icon (Plus rotatable) */}
        <span
          className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-hairline bg-raised text-primary transition-all duration-500 group-hover:border-muted ${
            isOpen ? "rotate-45 bg-accent/10 border-accent/30 text-accent" : "rotate-0"
          }`}
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
        </span>
      </button>

      {/* Layout-aware CSS Grid height transition */}
      <div
        className={`grid transition-all duration-500 ease-custom-ease ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        <div className="min-h-0">
          <div className={`${isServices ? "pb-4" : "pb-2"}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
