"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number; // in seconds
  suffix?: string;
}

export default function CountUp({ end, duration = 1.5, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger when 20% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Ultra smooth cubic-bezier(0.16, 1, 0.3, 1) equivalent easing curve
      // f(t) = 1 - (1 - t)^4 (quartic ease out)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * (end - startValue) + startValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
