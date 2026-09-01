"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  amount?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.08,
  amount = 0.15,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // Respect prefers-reduced-motion
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MaskedTextReveal({ text, className = "" }: { text: string; className?: string }) {
  // Animates headlines per-line using masked line-split
  const lines = text.split("<br>");

  return (
    <div className={`flex flex-col ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden mask-text py-1">
          <motion.span
            custom={idx}
            variants={{
              hidden: { y: "100%" },
              visible: {
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="block origin-top-left"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        </div>
      ))}
    </div>
  );
}
