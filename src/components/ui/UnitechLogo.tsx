"use client";

import React from "react";

interface UnitechLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light" | "auto";
}

export default function UnitechLogo({
  className = "",
  iconOnly = false,
  size = "md",
  variant = "auto",
}: UnitechLogoProps) {
  // Dimensions based on size preset
  const sizeMap = {
    sm: { icon: "w-6 h-6", text: "text-sm tracking-[0.28em]", gap: "gap-2.5" },
    md: { icon: "w-8 h-8", text: "text-lg tracking-[0.3em]", gap: "gap-3" },
    lg: { icon: "w-12 h-12", text: "text-2xl tracking-[0.32em]", gap: "gap-4" },
    xl: { icon: "w-20 h-20", text: "text-4xl tracking-[0.35em]", gap: "gap-6" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const colorClass =
    variant === "dark"
      ? "text-black"
      : variant === "light"
      ? "text-white"
      : "text-primary";

  return (
    <div
      className={`inline-flex items-center ${currentSize.gap} font-display ${colorClass} ${className}`}
    >
      {/* Precision Vector Logo Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.icon} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        {/* Polygon 1: Top-Left Pillar */}
        <polygon points="20,8 47.5,8 47.5,54.5 20,60.5" />

        {/* Polygon 2: Bottom-Left Wedge */}
        <polygon points="20,62.5 47.5,56.5 48.8,64 48.8,93 20,62.5" />

        {/* Polygon 3: Bottom-Right Wedge */}
        <polygon points="80,62.5 52.5,56.5 51.2,64 51.2,93 80,62.5" />

        {/* Polygon 4: Upper-Right Arm (Lower Segment) */}
        <polygon points="52.5,29.5 80,19.5 80,60.5 52.5,54.5" />

        {/* Polygon 5: Upper-Right Arm (Top Segment) */}
        <polygon points="52.5,8 80,8 80,17 52.5,27" />
      </svg>

      {/* Styled Brand Wordmark: UNITECH */}
      {!iconOnly && (
        <div
          className={`font-bold uppercase ${currentSize.text} flex items-center leading-none select-none`}
        >
          <span>UNIT</span>
          {/* Custom Geometric 'E' featuring 3 horizontal parallel bars */}
          <span className="inline-flex flex-col justify-between h-[0.62em] w-[0.52em] mx-[0.08em] self-center">
            <span className="h-[0.12em] w-full bg-current rounded-[0.5px]" />
            <span className="h-[0.12em] w-full bg-current rounded-[0.5px]" />
            <span className="h-[0.12em] w-full bg-current rounded-[0.5px]" />
          </span>
          <span>CH</span>
        </div>
      )}
    </div>
  );
}
