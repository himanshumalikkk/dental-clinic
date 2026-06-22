/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BeforeAfterCase } from "../types";
import { MoveRight } from "lucide-react";

interface BeforeAfterSliderProps {
  cases: BeforeAfterCase[];
}

export default function BeforeAfterSlider({ cases }: BeforeAfterSliderProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const currentCase = cases[activeCaseIndex];

  useEffect(() => {
    if (!containerRef.current) return;
    
    setContainerWidth(containerRef.current.clientWidth || 500);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [activeCaseIndex]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Set initial beautiful default slide animation loop or let the user explore
  return (
    <div id="before-after-section" className="w-full bg-stone-950 text-stone-100 pt-12 pb-16 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Magazine Heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 sm:mb-16 items-end">
          <div className="md:col-span-8">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase block mb-4">
              [ 02 / ARTISTRY TRANSFORMATION GALLERY ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-white max-w-2xl leading-[1.1]">
              Symmetry & Smile Design
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-stone-400 text-sm font-sans tracking-wide leading-relaxed">
              Slide to reveal the interplay of natural mineral layering, surface anatomy, and light refraction designed to mimic healthy cellular enamel.
            </p>
          </div>
        </div>

        {/* Dynamic Image Wrapper */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-sm overflow-hidden border border-stone-800 bg-stone-900 group select-none">
          <div
            ref={containerRef}
            className="relative w-full h-full cursor-ew-resize overflow-hidden touch-none"
            onPointerMove={handlePointerMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Image (Full background) */}
            <img
              src={currentCase.afterImage}
              alt="Bespoke porcelain after restoration"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-6 top-6 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-gold-400 border border-gold-400/20 z-10">
              Atelier Crafted
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentCase.beforeImage}
                alt="Patient smile before restoration"
                className="absolute inset-0 h-full object-cover max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%", height: "100%" }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute left-6 top-6 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-stone-400 border border-stone-800 z-10">
              Original Profile
            </div>

            {/* Drag Divider Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gold-400 z-20 pointer-events-none cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900 border-2 border-gold-400 flex items-center justify-center shadow-[0_0_20px_rgba(185,157,99,0.3)] pointer-events-auto">
                <div className="flex gap-1 items-center justify-center">
                  <div className="w-1 h-3 bg-gold-400 rounded-full"></div>
                  <div className="w-1 h-3 bg-gold-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Info / Mini Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-stone-900 pt-8">
          <div>
            <h4 className="font-serif text-xl text-white tracking-wide">{currentCase.title}</h4>
            <p className="text-stone-400 text-xs mt-1 font-sans tracking-wide">{currentCase.description}</p>
          </div>
          <div className="flex gap-4">
            {cases.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`text-xs font-mono uppercase tracking-widest pb-1 border-b transition-all duration-300 ${
                  activeCaseIndex === idx
                    ? "text-gold-400 border-gold-400"
                    : "text-stone-600 border-transparent hover:text-stone-300"
                }`}
              >
                Case study 0{idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
