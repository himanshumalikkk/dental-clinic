/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "../types";
import { X, ArrowRight, Sparkles } from "lucide-react";

interface PortfolioGalleryProps {
  items: GalleryItem[];
}

export default function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | "Space" | "Experience" | "Artistry">("All");

  const categories: ("All" | "Space" | "Experience" | "Artistry")[] = ["All", "Space", "Experience", "Artistry"];

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div id="gallery-portfolio-section" className="w-full bg-[#faf9f6] text-stone-900 py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Intro (Magazine Header Style) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-stone-200 pb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-600 uppercase block mb-3">
              [ 05 / ARCHITECTURAL SANCTUARY ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl tracking-tight leading-[1.1] text-stone-950">
              The Atelier Space & Living Art
            </h2>
          </div>
          
          {/* Subtle Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-stone-950 text-white shadow-sm"
                    : "bg-white hover:bg-stone-100 text-stone-600 border border-stone-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Uneven Multi-Column Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer bg-stone-100 rounded-sm"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Minimalist Overlay Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="font-mono text-[9px] tracking-widest text-gold-300 uppercase block mb-1">
                      {item.category} — Atelier Dublin
                    </span>
                    <h3 className="font-serif text-lg text-white tracking-wide">{item.title}</h3>
                    <div className="flex items-center gap-1.5 mt-2 text-white/50 text-[10px] font-mono uppercase tracking-[0.2em]">
                      <span>Experience Frame</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox / Cinematic Enlarged View Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-950/98 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-4 sm:p-10 cursor-zoom-out"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close Button Trigger */}
              <button
                className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
              >
                <X className="w-8 h-8 stroke-[1.5]" />
              </button>

              {/* Lightbox Layout */}
              <div 
                className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Screen-Filling Boxed Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 120 }}
                  className="w-full lg:w-2/3 max-h-[75vh] flex justify-center items-center overflow-hidden rounded-xs bg-stone-900 border border-stone-800/60"
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[75vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Captions and Editorial description */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full lg:w-1/3 text-left flex flex-col justify-center"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-gold-400 uppercase mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                    Dublin Sanctuary — {selectedItem.category}
                  </span>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight mb-4 leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <div className="w-12 h-[1px] bg-gold-500/50 mb-6"></div>
                  
                  <p className="text-stone-400 text-sm leading-relaxed mb-8">
                    Every frame in our luxury clinic reflects our adherence to the principles of fine art, high-end wellness, and pristine light curation. Built specifically for quiet relaxation, we provide space for meditation away from active clinical work.
                  </p>
                  
                  <div className="border-t border-stone-850 pt-6">
                    <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block">
                      Patient Comfort Guideline
                    </span>
                    <span className="text-stone-300 text-xs font-sans tracking-wide mt-1 block">
                      Individual private consultations with custom acoustic dampening.
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
