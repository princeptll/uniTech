"use client";

import React from "react";

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "w-8 h-8 text-primary" }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-500 group-hover:scale-105`}
      aria-hidden="true"
    >
      {/* Left / Upper Interlocking Loop */}
      <path
        d="M 22 46 V 28 C 22 16.5 31.5 7 43 7 C 54.5 7 64 16.5 64 28 V 52"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right / Lower Interlocking Loop */}
      <path
        d="M 36 28 V 52 C 36 63.5 45.5 73 57 73 C 68.5 73 78 63.5 78 52 V 34"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
