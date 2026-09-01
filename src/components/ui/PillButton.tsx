"use client";

import Link from "next/link";
import React from "react";

interface PillButtonProps {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit";
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function PillButton({
  label,
  href,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}: PillButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const variants = {
    primary: "bg-accent text-white hover:bg-opacity-90 border border-transparent",
    secondary: "bg-raised text-primary border border-hairline hover:border-muted",
    outline: "bg-transparent text-primary border border-hairline hover:border-primary",
  };

  const content = (
    <span className="relative block h-5 overflow-hidden">
      {/* Primary Label */}
      <span className="block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full">
        {label}
      </span>
      {/* Hover Label (positioned absolutely below the first one) */}
      <span className="absolute top-full left-0 block transition-transform duration-500 ease-custom-ease group-hover:-translate-y-full text-white">
        {label}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
