/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Info, X, Calendar, ArrowRight } from "lucide-react";
import { CustomImages } from "../data";

interface GalleryItem {
  id: string;
  title: string;
  category: "Space" | "Artistry" | "Technology" | "Science";
  image: string;
  aspectRatio: string;
  tip: string;
  detailedInsight: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Sanctuary Lounge",
    category: "Space",
    image: CustomImages.clinicSpace,
    aspectRatio: "aspect-[16/11]",
    tip: "A calming environment with natural daylight and organic white tea scents is proven to lower patient cortisol levels by up to 25%, drastically reducing dental anxiety.",
    detailedInsight: "Our waiting sanctuary replaces clinical starkness with soft natural linen, soundproof solid oak partitions, and low-stimulus lighting to soothe the sympathetic nervous system before any aesthetic procedure begins."
  },
  {
    id: "gal-2",
    title: "Precision Micro-Sculpting",
    category: "Artistry",
    image: CustomImages.precisionVeneer,
    aspectRatio: "aspect-[3/4]",
    tip: "Micro-fine ceramic sculpting preserves up to 95% of healthy, natural enamel during veneer preparation, creating biologically stable restorations that last for decades.",
    detailedInsight: "Using ultra-high magnification, our master ceramists and clinicians craft ultra-thin porcelain layers that chemically fuse seamlessly with natural enamel prisms to guarantee maximum clinical durability."
  },
  {
    id: "gal-3",
    title: "Digital Smile Design Consultation",
    category: "Science",
    image: CustomImages.consultSuite,
    aspectRatio: "aspect-[16/10]",
    tip: "Digital Smile Design relies on the natural alignment of your pupillary line, bipupillary vector, and facial midline to achieve ideal lip-frame and phonetic symmetry.",
    detailedInsight: "At Celtic Smile Clinic, we don't believe in generic templates. Every restoration is calculated against your individual skeletal balance, lip path vectors, and facial dynamics."
  },
  {
    id: "gal-4",
    title: "Spectral 3D Scanning",
    category: "Technology",
    image: CustomImages.technology,
    aspectRatio: "aspect-[4/3]",
    tip: "Optical spectral scans capture mouth morphology down to an 8-micrometric accuracy, completely replacing uncomfortable putty moldings.",
    detailedInsight: "This high-frequency digital capture maps the teeth in dynamic motion. The resulting CAD models allow our lab partners to produce restoration margins with clinical near-perfection to prevent future margin decay."
  },
  {
    id: "gal-5",
    title: "Crystalline Whitening",
    category: "Science",
    image: CustomImages.whiteningPatient,
    aspectRatio: "aspect-[3/4]",
    tip: "Enamel-safe micro-oxygenation lifts organic stains located deep inside the crystalline enamel prisms without dehydrating or altering underlying dentin.",
    detailedInsight: "Our customized Chroma plans combine mineral-rich desensitizing agents with targeted medical-grade light frequencies to lift intrinsic stains gently while actively reinforcing the protective mineral barrier of your teeth."
  },
  {
    id: "gal-6",
    title: "Orthodontic Design Model",
    category: "Technology",
    image: CustomImages.orthoAlignerTray,
    aspectRatio: "aspect-square",
    tip: "Clear aligners rely on highly calculated constant micro-forces to guide roots safely through deep bone remodeling, minimizing root resorption risks.",
    detailedInsight: "Through advanced mechanical planning, we simulate teeth shifts down to fractions of a millimeter per aligner stage, ensuring minimal discomfort and high periodontal biomechanical safety."
  },
  {
    id: "gal-7",
    title: "Aesthetic Edge Calibration",
    category: "Artistry",
    image: CustomImages.veneersOnModel,
    aspectRatio: "aspect-[4/3]",
    tip: "Porcelain character models are hand-crafted to mimic the exact natural translucency, marginal details, and light fluorescence of real mineralized human dentin.",
    detailedInsight: "Every veneer is custom-saturated in laboratory conditions to reflect light identically to natural structures, preventing the flat or opaque white visual cues common in lower-grade cosmetic treatments."
  },
  {
    id: "gal-8",
    title: "The Atelier Clinical Suite",
    category: "Space",
    image: CustomImages.dentistTreatment,
    aspectRatio: "aspect-[16/10]",
    tip: "Dynamic position ergonomics of our lounge recliners support spinal relaxation, lowering heart rate and promoting state-dependent relaxation during care.",
    detailedInsight: "We have fully substituted sterile dental chairs for bespoke natural Italian-linen upholstered couches. Integrating soft-focus overhead screens allows patients to rest their visual attention during treatment."
  },
  {
    id: "gal-9",
    title: "Incisal Character Calibration",
    category: "Artistry",
    image: CustomImages.perfectSmileDetail,
    aspectRatio: "aspect-[3/4]",
    tip: "Optimal aesthetics are achieved when the incisal edge of the maxillary teeth mirrors the relative upward curvature of the lower lip line during a warm smile.",
    detailedInsight: "Our ceramists introduce microscopic textures to each veneer's surface so that light reflects off the teeth dynamically, preventing the artificial look of flat crowns and preserving authentic clinical realism."
  },
  {
    id: "gal-10",
    title: "Anatomical Biomimicry Outcomes",
    category: "Science",
    image: CustomImages.silverPatient,
    aspectRatio: "aspect-[3/4]",
    tip: "Advanced glass ceramics chemically behave like biological bone, demonstrating identical thermal expansion and wear properties to natural tooth material.",
    detailedInsight: "By custom-blending values, chroma, and hues, we design restorations that blend seamlessly into our patient's lifestyle. Our material choices guarantee stain-resistance from acidic food or beverages for decades."
  },
  {
    id: "gal-11",
    title: "Microscope Sterile Trays",
    category: "Technology",
    image: CustomImages.dentistTools,
    aspectRatio: "aspect-[4/3]",
    tip: "Using pressurized steam autoclaves and specialized double-distilled water delivery lines keeps dental instruments 100% free of biofilm and aerosol build-up.",
    detailedInsight: "Every surgical tool tray is individual-sealed, tracked, and vacuum-sealed until the microsecond treatment begins. We follow strict European healthcare directives to maintain an entirely sterile restorative theater."
  },
  {
    id: "gal-12",
    title: "Clinical Musculature Mapping",
    category: "Artistry",
    image: CustomImages.drSinead,
    aspectRatio: "aspect-[3/4]",
    tip: "A comprehensive facial assessment analyzes the dynamic movement of the lower third of the face, avoiding stiff smiles or excessive gum display.",
    detailedInsight: "Led by Dr. Sinéad O'Connor, our diagnostic approach marries dental medicine with soft-tissue facial dynamics, ensuring that your final smile profile naturally supports your facial anatomy at rest and in expression."
  }
];

export default function MasonryGallery() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Space" | "Artistry" | "Technology" | "Science">("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter(
    item => selectedFilter === "All" || item.category === selectedFilter
  );

  return (
    <section id="gallery-section" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#0C3A2B]/10 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Visual Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8 text-left">
            <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
              [ 02 / ARTISTRY & SCIENCE GALLERY ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-[#0C3A2B] leading-none mb-4">
              The Aesthetic Atelier
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans tracking-wide leading-relaxed max-w-2xl">
              Immerse yourself in our clinical environment, digital technological frameworks, and handcrafted cosmetic restorations. Hover over any piece to discover the science and dental health principles behind our custom-designed smiles.
            </p>
          </div>
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 border-b border-[#0C3A2B]/10 max-w-3xl">
          {(["All", "Space", "Artistry", "Technology", "Science"] as const).map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full cursor-pointer relative ${
                  isActive 
                    ? "text-[#FAF8F5] bg-[#0C3A2B]" 
                    : "text-[#0C3A2B] hover:bg-[#0C3A2B]/5 border border-[#0C3A2B]/10"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Responsive CSS columns layout for authentic Masonry aesthetic */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid relative group rounded-sm overflow-hidden border border-[#0C3A2B]/15 bg-white shadow-xs cursor-pointer flex flex-col mb-6 hover:shadow-lg hover:border-[#0C3A2B]/25 transition-all duration-300"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Block */}
                <div className={`relative ${item.aspectRatio} overflow-hidden bg-stone-100`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Bottom Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Standard Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-widest uppercase bg-[#0C3A2B] text-[#FAF8F5] px-3 py-1 rounded-full border border-white/10 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover-Triggered Interactive Overlay - Clean & Minimalist, protecting image visibility */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none group-hover:pointer-events-auto">
                    
                    {/* Bottom CTA bar inside overlay */}
                    <div className="flex items-end justify-between border-t border-white/20 pt-4 select-none">
                      <div className="flex flex-col text-left">
                        <span className="text-white font-serif text-[15px] sm:text-[18px] font-normal tracking-wide leading-tight">
                          {item.title}
                        </span>
                        <span className="text-stone-300 font-mono text-[9px] uppercase tracking-[0.2em] mt-1.5 font-bold">
                          [ {item.category} Study ]
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-[#b99d63]/90 hover:bg-[#b99d63] text-stone-950 px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold shadow-md transition-all duration-300 hover:scale-[1.03] shrink-0">
                        <span>Study details</span>
                        <Info className="w-3 h-3" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mobile Fallback descriptor (Fully visible when not hovered, ensures absolute mobile-friendly accessibility) */}
                <div className="p-5 flex lg:hidden items-start justify-between border-t border-[#0C3A2B]/10 bg-white">
                  <div>
                    <h4 className="font-serif text-[16px] text-[#0C3A2B] font-semibold">{item.title}</h4>
                    <p className="text-stone-500 text-[11px] font-mono uppercase tracking-widest mt-1">
                      {item.category} Focus
                    </p>
                    <div className="mt-3.5 p-3 bg-[#FAF8F5] border border-[#0C3A2B]/10 rounded-sm">
                      <div className="flex items-center gap-1 text-[#b99d63] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">
                        <Sparkles className="w-3 h-3 text-[#b99d63]" />
                        <span>Clinical Insight</span>
                      </div>
                      <p className="text-stone-700 text-xs leading-relaxed font-sans">{item.tip}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Detail Viewer modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#061f12]/95 backdrop-blur-md z-[200] overflow-y-auto flex items-start sm:items-center justify-center p-4 sm:p-6 md:p-8 select-text"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF8F5] max-w-5xl w-full rounded-sm overflow-hidden border border-[#0C3A2B]/25 shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative my-auto"
                onClick={(e) => e.stopPropagation()} // Protect modal clicks
              >
                
                {/* Close absolute button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-50 p-2.5 bg-[#FAF8F5]/90 hover:bg-[#0C3A2B] text-[#0C3A2B] hover:text-[#FAF8F5] rounded-full transition-all duration-300 border border-[#0C3A2B]/15 hover:border-transparent cursor-pointer shadow-md backdrop-blur-sm"
                  aria-label="Close detailed visual view"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Left Side: Large Visual Preview */}
                <div className="lg:col-span-7 bg-stone-900 flex items-center justify-center relative aspect-video lg:aspect-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[480px]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] tracking-widest uppercase bg-[#0C3A2B] text-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-white/10 font-bold">
                      {activeItem.category} // GALLERY
                    </span>
                  </div>
                </div>

                {/* Right Side: Editorial Metadata and Healthcare Tip */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between text-left">
                  
                  <div>
                    {/* Header Label */}
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                      [ ATELIER PROFILE STUDY ]
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#0C3A2B] tracking-tight leading-none mb-6">
                      {activeItem.title}
                    </h3>
                    
                    {/* Clinical Insight Body */}
                    <div className="space-y-5 text-stone-700 text-xs sm:text-sm font-sans tracking-wide leading-relaxed">
                      <p>{activeItem.detailedInsight}</p>
                      
                      {/* Interactive Health Knowledge Callout */}
                      <div className="p-5 bg-[#0C3A2B]/5 border-l-[3px] border-[#b99d63] rounded-xs mt-6">
                        <div className="flex items-center gap-2 text-[#0C3A2B] font-mono text-[9px] uppercase tracking-widest mb-2 font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-[#b99d63]" />
                          <span>Dentofacial Health Guideline</span>
                        </div>
                        <p className="text-stone-800 italic leading-relaxed">
                          {activeItem.tip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Close & Action Footer Bar */}
                  <div className="mt-8 pt-6 border-t border-[#0C3A2B]/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-5 py-3 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0C3A2B] border border-[#0C3A2B]/20 hover:bg-[#0C3A2B]/5 rounded-full transition-all duration-300"
                    >
                      Return to Study
                    </button>
                    
                    <a
                      href="#contact-section"
                      onClick={() => {
                        setActiveItem(null);
                        // Delay scroll slightly to permit modal closure animation
                        setTimeout(() => {
                          const el = document.querySelector("#contact-section");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }, 250);
                      }}
                      className="px-6 py-3 bg-[#0C3A2B] hover:bg-[#b99d63] text-white hover:text-stone-950 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md hover:scale-[1.01]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
