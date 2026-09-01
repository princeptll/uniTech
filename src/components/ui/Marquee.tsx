"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  speed?: number;
}

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  speed = 30,
}: MarqueeProps) {
  const durationStyle = { animationDuration: `${speed}s` };
  return (
    <div className="relative flex overflow-x-hidden w-full py-8 border-y border-hairline bg-raised/20">
      {/* Flex container holding the primary and duplicate rows */}
      <div className="flex w-max">
        {/* Row 1 */}
        <div
          style={durationStyle}
          className={`flex shrink-0 gap-20 items-center justify-around px-10 animate-marquee-scroll ${
            direction === "right" ? "[animation-direction:reverse]" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
        
        {/* Row 2 (Duplicate for seamless loop) */}
        <div
          aria-hidden="true"
          style={durationStyle}
          className={`flex shrink-0 gap-20 items-center justify-around px-10 animate-marquee-scroll ${
            direction === "right" ? "[animation-direction:reverse]" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
      </div>

      {/* Glassmorphic border fade overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/40 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/40 to-transparent pointer-events-none" />
    </div>
  );
}
