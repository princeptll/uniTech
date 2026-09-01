"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Cpu } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    vw: 1200,
    vh: 800,
    wInner: 800,
    endScale: 3.4,
  });

  // Monitor screen size for responsive endScale and dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isMobileDevice = vw < 768;
      const border = isMobileDevice ? 10 : 14;
      
      let wLaptop = isMobileDevice ? vw * 0.9 : vw * 0.7;
      if (!isMobileDevice && wLaptop > 850) {
        wLaptop = 850;
      }
      
      const hLaptop = wLaptop * 10 / 16;
      const wInner = wLaptop - 2 * border;
      const hInner = hLaptop * 0.94 - border;
      
      const scaleX = vw / wInner;
      const scaleY = vh / hInner;
      
      // Max scale factor to keep layout readable on mobile:
      const maxScale = isMobileDevice ? 1.8 : 2.5;
      const endScale = Math.min(Math.max(scaleX, scaleY), maxScale);

      setDimensions({
        vw,
        vh,
        wInner,
        endScale,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Zoom into the laptop screen (from 0% to 50% scroll)
  // Beyond 50%, we scale very slowly to 1.08x of endScale to maintain a parallax/depth effect
  const scale = useTransform(scrollYProgress, (value) => {
    const endScale = dimensions.endScale;
    if (value <= 0.5) {
      const p = value / 0.5; // 0 to 1
      return 1 + (endScale - 1) * p;
    } else {
      const p = (value - 0.5) / 0.5; // 0 to 1
      return endScale + (endScale * 0.08) * p;
    }
  });

  // Calculate layout width of content to ensure it transitions perfectly to fit viewport width
  const contentWidth = useTransform(scrollYProgress, (value) => {
    const { vw, wInner, endScale } = dimensions;
    if (value <= 0.5) {
      const p = value / 0.5; // 0 to 1
      const currentScale = 1 + (endScale - 1) * p;
      const targetVisualWidth = wInner + (vw - wInner) * p;
      return targetVisualWidth / currentScale;
    } else {
      const p = (value - 0.5) / 0.5; // 0 to 1
      const currentScale = endScale + (endScale * 0.08) * p;
      return vw / currentScale;
    }
  });

  // 2. Base pushes down and fades out (from 0% to 45% scroll)
  const baseY = useTransform(scrollYProgress, [0, 0.45], [0, 250]);
  const baseOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 0.5, 0]);

  // 3. Scroll inner content (from 48% to 100% scroll)
  const innerY = useTransform(scrollYProgress, [0.48, 1], ["0%", "0%"]);

  // 4. Scroll indicator fade out
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background w-full">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20">
        
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 select-none"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-accent"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

        {/* Laptop Container */}
        <motion.div
          style={{ scale }}
          className="relative w-[90vw] md:w-[70vw] max-w-[850px] aspect-[16/10] flex flex-col items-center justify-center transform-gpu"
        >
          
          {/* Laptop Screen Frame (Bezel) */}
          <div className="relative w-full h-[94%] bg-black border-[10px] md:border-[14px] border-[#18191D] rounded-t-2xl shadow-[0_0_80px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-20">
            
            {/* Webcam / Notch detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#18191D] rounded-b-md z-30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] opacity-75 shadow-[0_0_4px_#10B981]" />
            </div>

            {/* Inner Screen Display (Overflow-hidden bounds the content scroll) */}
            <div className="flex-1 w-full h-full relative overflow-hidden bg-background flex flex-col">
              
              {/* Scanline CRT glass reflection */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] z-30 opacity-20" />
              
              {/* Dynamic Mock Website Content (Translates upward on scroll) */}
              <motion.div
                style={{ y: innerY, width: contentWidth }}
                className="flex flex-col bg-background text-left transform-gpu mx-auto min-h-full"
              >
                
                {/* 1. Mock Header */}
                <div className="w-full h-12 bg-background/95 backdrop-blur-md border-b border-hairline px-6 flex items-center justify-between sticky top-0 z-20">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 32 32" className="w-4 h-4 text-accent" fill="currentColor">
                      <path d="M6 6H13V18L19 6H26V26H19V14L13 26H6V6Z" />
                    </svg>
                    <span className="text-[10px] font-mono tracking-widest font-bold text-primary">UNITECH</span>
                  </div>
                  <div className="flex gap-4 text-[9px] font-mono text-muted">
                    <span>Products</span>
                    <span>Studio</span>
                    <span>Testimonials</span>
                  </div>
                </div>

                {/* 2. Mock Hero Area */}
                <div className="w-full min-h-[360px] flex flex-col justify-center px-8 md:px-12 py-16 relative border-b border-hairline bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.02),transparent_60%)]">
                  <div className="space-y-4 max-w-[450px]">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-[8px] font-mono uppercase tracking-widest text-accent">SYSTEMS ONLINE</span>
                    </div>
                    <p className="font-mono text-[10px] md:text-[12px] font-bold tracking-[0.25em] text-primary uppercase">
                      INNOVATE. BUILD. DELIVER.
                    </p>
                    <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter text-primary leading-none">
                      We Build High-Craft Custom Software
                    </h2>
                    <p className="text-muted text-[10px] md:text-xs leading-relaxed">
                      Engineering web platforms, cloud networks, and mobile products for businesses ready to scale with absolute confidence.
                    </p>
                    <div className="pt-2">
                      <span className="px-4 py-2 bg-primary text-background text-[9px] uppercase font-mono tracking-widest rounded-full font-bold">
                        Start a Project
                      </span>
                    </div>
                  </div>
                  {/* Decorative graphics */}
                  <div className="absolute right-8 bottom-8 opacity-25">
                    <Cpu size={80} className="text-neutral-300" />
                  </div>
                </div>
 
 


              </motion.div>
            </div>
          </div>

          {/* Laptop Base (Keyboard area) */}
          <motion.div
            style={{ y: baseY, opacity: baseOpacity }}
            className="relative w-[114%] h-[6%] bg-[#121316] border-t border-[#2A2D35] rounded-b-2xl shadow-[0_15px_30px_rgba(0,0,0,0.85)] flex justify-center z-10 transform-gpu"
          >
            {/* Keyboard indentation representation */}
            <div className="w-[85%] h-[20%] bg-[#0B0C0E] border border-[#1E2025] rounded-t-sm mt-0.5" />
            {/* Trackpad notch */}
            <div className="absolute bottom-0 w-24 h-2 bg-[#08090A] border-t border-[#1E2025] rounded-t-sm" />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
