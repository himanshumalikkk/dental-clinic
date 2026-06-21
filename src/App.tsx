/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  Compass, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  Quote, 
  CheckCircle,
  Award,
  ChevronRight
} from "lucide-react";

import Header from "./components/Header";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import PortfolioGallery from "./components/PortfolioGallery";
import BookingForm from "./components/BookingForm";

import { 
  BEFORE_AFTER_CASES, 
  GALLERY_ITEMS, 
  TEAM_MEMBERS, 
  TREATMENTS, 
  TECH_FEATURES, 
  TESTIMONIALS, 
  CustomImages 
} from "./data";

export default function App() {
  const [activeTreatmentTab, setActiveTreatmentTab] = useState(TREATMENTS[0].id);
  const selectedTreatment = TREATMENTS.find(t => t.id === activeTreatmentTab) || TREATMENTS[0];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="header-root" className="min-h-screen bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-200 selection:text-stone-900 overflow-x-hidden antialiased">
      
      {/* Luxury Float Header */}
      <Header />

      {/* ----------------- 1. HERO SECTION (MOCKUP ACCURATE LAYOUT) ----------------- */}
      <section className="relative min-h-screen flex flex-col justify-between bg-[#F5F2EA] lg:bg-[#F5F2EA] overflow-hidden pt-28 pb-10">
        
        {/* Curved backdrop layout behind the scene */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-14 justify-center py-8 z-10">
          
          {/* Left Block: Logo, Headings and customized thin gold bordered pills */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center text-left self-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {/* Custom continuous Celtic Shamrock Logo */}
              <div className="flex items-center gap-3 text-left mb-12">
                <svg
                  className="w-11 h-11 text-[#0C3A2B]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 50 50 C 15 50, 15 15, 50 15 C 85 15, 85 50, 50 50 Z" />
                  <path d="M 50 50 C 50 15, 85 15, 85 50 C 85 85, 50 85, 50 50 Z" strokeWidth="4.5" />
                  <path d="M 50 50 C 15 50, 15 85, 50 85 C 50 85, 50 50, 50 50 Z" strokeWidth="4.5" />
                  <path d="M 50 85 Q 56 94 65 95" strokeWidth="4" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-[#0C3A2B] tracking-[0.1em] uppercase leading-tight">
                    CELTIC
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.35em] text-[#0C3A2B] uppercase mt-0.5 leading-none">
                    SMILE CLINIC
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-[#0C3A2B] leading-[1.1] mb-6">
                Artistry in <br />
                Every Smile.
              </h1>

              {/* Subheadline */}
              <p className="text-stone-700 text-sm sm:text-base tracking-wide font-sans leading-relaxed max-w-md mb-10">
                Unmatched precision. Dublin's premier dental experience.
              </p>

              {/* Minimal pills with thin olive-gold border */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => handleScrollTo("#gallery-portfolio-section")}
                  className="px-7 py-3.5 border border-[#a28752] hover:bg-[#a28752]/10 text-[#0C3A2B] text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full cursor-pointer shadow-sm bg-[#faf8f5]/50 hover:scale-[1.02]"
                >
                  EXPLORE OUR GALLERY
                </button>
                <button
                  onClick={() => handleScrollTo("#concierge-booking-section")}
                  className="px-7 py-3.5 border border-[#a28752] hover:bg-[#a28752]/10 text-[#0C3A2B] text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full cursor-pointer shadow-sm bg-[#faf8f5]/50 hover:scale-[1.02]"
                >
                  REQUEST CONSULTATION
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Complex Nested Curved Imagery Collage */}
          <div className="w-full lg:w-[56%] relative flex items-center justify-center p-2 min-h-[360px] lg:min-h-[480px]">
            {/* Absolute green leaf sweeps behind the imagery matching the layout illustration exactly */}
            <div className="absolute inset-x-0 inset-y-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute top-2 right-4 w-[92%] h-[92%] border-[12px] border-[#D9EBE1] opacity-70 transform rotate-3" 
                style={{ borderRadius: "48% 52% 45% 55% / 55% 45% 55% 45%" }}
              />
              <div 
                className="absolute bottom-6 left-2 w-[72%] h-[72%] bg-[#D9EBE1]/40 filter blur-[2px] opacity-60 rounded-full" 
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
            </div>

            {/* Structured responsive graphic overlapping block */}
            <div className="relative w-full max-w-[545px] aspect-[1.14] flex items-center justify-center">
              
              {/* 1. Mother Shape: Large custom-leaf organic frame (Portrait of silver-haired woman) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[70%] h-[92%] border-[3px] border-[#0C3A2B] bg-[#f9f8f4] overflow-hidden shadow-xl z-10 transform-gpu"
                style={{ borderRadius: "5% 95% 5% 95% / 5% 95% 5% 95%" }}
              >
                <img
                  src={CustomImages.silverPatient}
                  alt="Beautiful Silver Patient Smile, Celtic Smile Clinic"
                  className="w-full h-full object-cover object-[center_12%]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* 2. Overlapping Child Circle Left: Dentist instruments tray */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute left-[3%] bottom-[6%] w-[33%] aspect-square rounded-full border-2 border-[#0C3A2B] bg-white overflow-hidden shadow-md z-20 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={CustomImages.dentistTools}
                  alt="Dental tools sterile tray, Celtic Smile Clinic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* 3. Overlapping Child Circle Right: Porcelain crown lab models */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute right-[11%] bottom-[12%] w-[32%] aspect-square rounded-full border-2 border-[#0C3A2B] bg-[#0c311e] overflow-hidden shadow-md z-20 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={CustomImages.veneersOnModel}
                  alt="Ceramic crowns modeling, Celtic Smile Clinic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* 4. Elegant Vertical fence panels on the extreme far right */}
              <div className="absolute right-0 top-0 h-full w-[12%] flex flex-col gap-3 justify-center z-0">
                {/* Visual Slat 1: Cozy limestone consult suite */}
                <div className="h-[46%] w-full rounded-full border border-[#0C3A2B]/25 overflow-hidden bg-[#faf8f5] shadow-xs">
                  <img
                    src={CustomImages.consultSuite}
                    alt="Clinic consultation suites"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Visual Slat 2: Modern 3D spectra technology device */}
                <div className="h-[46%] w-full rounded-full border border-[#0C3A2B]/25 overflow-hidden bg-[#faf8f5] shadow-xs">
                  <img
                    src={CustomImages.technology}
                    alt="Prismatic dental scan tech"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic centered bottom footer subhead with classic refined typography */}
        <div className="w-full text-center mt-6 lg:mt-0 px-6 z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[#0C3A2B] font-medium font-sans text-xs sm:text-sm tracking-wide"
          >
            A decade of precision. Thousands of smiling patients across Ireland.
          </motion.p>
        </div>

      </section>


      {/* ----------------- 2. VISUAL SHOWCASE SECTION (Clinic Environment Gallery) ----------------- */}
      <section id="sanctuary-section" className="w-full py-24 sm:py-32 px-6 bg-[#FAF8F5] border-t border-[#0C3A2B]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left editorial descriptor */}
            <div className="lg:col-span-4">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 01 / THE SANCTUARY ENVIRONMENT ]
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#0C3A2B] leading-[1.1] mb-6">
                Where clinical sterile science gives way to quiet luxury.
              </h2>
              <p className="text-stone-700 text-xs sm:text-sm tracking-wide leading-relaxed mb-8">
                Every material in the Celtic Smile Clinic is chosen for tactile warmth and visual calm. We have substituted traditional dental seating for bespoke wellness recliners upholstered in soft natural Italian linen.
              </p>
              
              <div className="border-t border-[#0C3A2B]/10 pt-6">
                <span className="font-mono text-[10px] text-[#0C3A2B]/60 uppercase tracking-widest block mb-2 font-semibold">
                  Key Ambient Attributes
                </span>
                <ul className="space-y-2 text-xs text-stone-700 font-sans tracking-wide">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C3A2B]"></span>
                    Soundproof solid oak acoustic dividers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C3A2B]"></span>
                    Organic white tea botanical scents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C3A2B]"></span>
                    Curated natural skylights and art portfolio
                  </li>
                </ul>
              </div>
            </div>

            {/* Right large visual edge-to-edge frame */}
            <div className="lg:col-span-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden aspect-[16/10] rounded-sm bg-stone-100 border border-[#0C3A2B]/20 shadow-md"
              >
                <img
                  src={CustomImages.dentistTreatment}
                  alt="Active bespoke clinical treatment procedure"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0C3A2B]/5"></div>
              </motion.div>
              
              <div className="mt-4 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#0C3A2B]/60 px-1 font-semibold">
                <span>[ FIG. 1.2 — COUTURE CLINICAL ARTISTRY IN ACTION ]</span>
                <span>INTEGRATED CLINICAL EXCELLENCE</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ----------------- 3. AFTER & BEFORE SLIDER SECTION (Highly Interactive) ----------------- */}
      <BeforeAfterSlider cases={BEFORE_AFTER_CASES} />


      {/* ----------------- 4. PATIENT EXPERIENCE / JOURNAL JOURNEY (Coastal Imagery) ----------------- */}
      <section id="philosophy-section" className="relative h-[80vh] flex items-center justify-center bg-[#0c311e] overflow-hidden text-center">
        
        {/* Full-width soothing sea backdrop representing serene branding */}
        <div className="absolute inset-0 w-full h-[120%] opacity-40">
          <img
            src={CustomImages.irelandCoastal}
            alt="Cinematic Irish Coastal Cliff Morning"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061f12] via-transparent to-[#061f12]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 z-10 flex flex-col items-center">
          <span className="font-mono text-xs tracking-[0.3em] text-[#b99d63] uppercase block mb-6 font-semibold">
            [ 02 / THE PATIENT JOURNEY PHILOSOPHY ]
          </span>
          
          <h3 className="font-serif text-3xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.25] mb-8 font-normal max-w-3xl">
            "Symmetry is not the absolute absence of flaw. It is the perfect integration of light and natural variation."
          </h3>
          
          <p className="font-serif text-[#b99d63] tracking-widest text-[11px] sm:text-xs uppercase font-medium">
            — DR. SINEAD O'CONNOR, PRINCIPAL CLINICIAN
          </p>
          
          <div className="w-10 h-[1.5px] bg-[#b99d63] mt-6 mb-4"></div>
          
          <span className="font-mono text-[9px] text-stone-300 uppercase tracking-widest">
            Aesthetic Realism & Clinical Integrity
          </span>
        </div>
      </section>

      
      {/* ----------------- 5. CLINICAL SERVICES SUITE & DETAIL DRAWER ----------------- */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] border-y border-[#0C3A2B]/10 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Introduction */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-[#0C3A2B]/15 pb-12">
            <div className="max-w-xl">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 04 / RESTORATIVE OPTIONS ]
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl tracking-tight leading-[1.1] text-[#0C3A2B]">
                Atelier Procedures
              </h2>
            </div>
            <p className="text-stone-700 text-xs sm:text-sm tracking-wide max-w-sm font-sans leading-relaxed">
              We focus purely on custom-layered reconstructive work, clear aligning systems, and deep mineral whitening frameworks representing modern biological chemistry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* List selector */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {TREATMENTS.map((treatment) => {
                const isActive = activeTreatmentTab === treatment.id;
                return (
                  <button
                    key={treatment.id}
                    onClick={() => setActiveTreatmentTab(treatment.id)}
                    className={`w-full text-left p-6 sm:p-8 rounded-sm transition-all duration-500 flex flex-col border ${
                      isActive
                        ? "bg-[#0C3A2B] border-[#0C3A2B] shadow-xl text-white translate-x-1"
                        : "bg-white border-[#0C3A2B]/10 text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full mb-3">
                      <span className={`font-mono text-[10px] uppercase tracking-widest ${isActive ? "text-[#b99d63]" : "text-stone-400"}`}>
                        0{TREATMENTS.indexOf(treatment) + 1} // {treatment.category}
                      </span>
                      {isActive && <span className="w-2, h-2 rounded-full bg-[#b99d63]"></span>}
                    </div>
                    
                    <h3 className="font-serif text-2xl sm:text-2xl tracking-tight mb-2">
                      {treatment.title}
                    </h3>
                    
                    <div className={`flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest ${isActive ? "text-[#b99d63]" : "text-[#0C3A2B]"} mt-2 group`}>
                      <span>Explore details</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Visual Detail Window (80% Image / 20% Text) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-[#0C3A2B]/15 shadow-sm relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-[#f4f7f5] mb-8 border border-stone-100">
                <img
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dynamic details description */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#0C3A2B]/60 uppercase block mb-1 font-semibold">
                    {selectedTreatment.meta}
                  </span>
                  <p className="text-stone-700 text-xs sm:text-sm max-w-lg leading-relaxed font-sans">
                    {selectedTreatment.description}
                  </p>
                </div>
                <div className="bg-[#f4f7f5] border border-[#0C3A2B]/10 px-4 py-2 text-right rounded-xs shrink-0">
                  <span className="font-mono text-[8px] text-[#0C3A2B]/50 uppercase block">CLINICAL SEATING</span>
                  <span className="font-serif text-sm font-semibold text-[#0C3A2B]">{selectedTreatment.duration}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ----------------- 6. TECHNOLOGY SHOWCASE SECTION ----------------- */}
      <section className="py-24 sm:py-32 bg-[#061f12] text-white overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Big Image (80% Visual) */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-stone-900 bg-stone-900">
                <img
                  src={CustomImages.technology}
                  alt="Minimalist modern spectral scanner instrument"
                  className="w-full h-full object-cover grayscale brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Right detail layout (20% Text) */}
            <div className="lg:col-span-5 text-left">
              <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase block mb-4">
                [ 06 / MICROMETRIC DENTISTRY ]
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight leading-[1.1] text-white mb-6">
                Spectral 3D Anatomical Calibration
              </h2>
              <p className="text-stone-400 text-xs leading-relaxed mb-8 font-sans">
                We have eliminated physical molds. Utilizing spectral light sensors calibrating alignment down to 8 micrometers, we design clear-aligning pathways and porcelain character models directly on physical, dynamic 3D screen simulations.
              </p>

              <div className="space-y-4 border-t border-stone-900 pt-6">
                {TECH_FEATURES.map((tech) => (
                  <div key={tech.id} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white font-normal">{tech.title}</h4>
                      <p className="text-stone-400 text-xs mt-1 leading-relaxed">{tech.description}</p>
                      <span className="font-mono text-[10px] text-gold-400 uppercase block mt-1.5 font-semibold">
                        Benefit: {tech.benefit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ----------------- 7. PORTFOLIO MASONRY GALLERY WITH LIGHTBOX (Detailed Spaces) ----------------- */}
      <PortfolioGallery items={GALLERY_ITEMS} />


      {/* ----------------- 8. THE SCULPTORS / CLINICAL TEAM SECTION ----------------- */}
      <section id="sculptors-section" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#0C3A2B]/10 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
            <div className="md:col-span-8">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 07 / MASTER PRACTITIONERS ]
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-[#0C3A2B] leading-none">
                Our Dentofacial Sculptors
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-stone-700 text-xs sm:text-sm font-sans tracking-wide leading-relaxed">
                A discrete alliance of researchers and cosmetic clinical teachers trained globally, bringing meticulous Royal College precision directly to Dublin.
              </p>
            </div>
          </div>

          {/* Luxury Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group relative">
                
                {/* Visual Anchor (Large, gorgeous portrait) */}
                <div className="relative overflow-hidden aspect-[4/5] rounded-sm bg-[#faf8f5] mb-6 border border-[#0C3A2B]/10 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0C3A2B]/10"></div>
                  
                  {/* Absolute positioning detail similar to modern museum labels */}
                  <div className="absolute left-6 bottom-6 bg-[#061f12]/90 backdrop-blur-md px-3 py-1.5 rounded-xs border border-[#0C3A2B]/20">
                    <span className="font-mono text-[9px] text-[#b99d63] uppercase tracking-widest block font-semibold">
                      Licensed Practitioner
                    </span>
                    <span className="text-white text-xs block font-serif mt-0.5">{member.specialty}</span>
                  </div>
                </div>

                {/* Minimalist name label */}
                <div className="flex justify-between items-start border-b border-[#0C3A2B]/15 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide text-[#0C3A2B]">{member.name}</h3>
                    <p className="text-stone-500 text-xs font-mono uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                  
                  <span className="text-[#0C3A2B]/50 text-xs font-mono">IE // RCSI</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ----------------- 9. PATIENT TESTIMONIALS (Cinematic Layout) ----------------- */}
      <section className="bg-[#0c311e] py-24 sm:py-32 text-white relative px-6 overflow-hidden border-t border-[#0C3A2B]/20">
        <div className="absolute inset-0 w-80 h-80 bg-[#b99d63]/5 rounded-full blur-3xl -top-24 -left-24"></div>
        
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-[#b99d63] uppercase block mb-3 font-semibold">
              [ 08 / ACCREDITED REVIEWS ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white leading-normal">
              Direct Patient Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id} 
                className="bg-[#0e3a24] border border-[#0C3A2B]/20 p-8 sm:p-12 rounded-sm relative flex flex-col justify-between shadow-lg"
              >
                <div className="absolute -top-4 left-8 w-10 h-10 bg-[#b99d63] rounded-full flex items-center justify-center opacity-95 shadow-md">
                  <Quote className="w-4.5 h-4.5 text-white" />
                </div>

                <div>
                  <h4 className="text-[#b99d63] text-xs font-mono uppercase tracking-widest mb-6 font-semibold">
                    Procedure Focus: {test.treatment}
                  </h4>
                  <p className="font-serif text-lg sm:text-xl text-stone-100 italic leading-relaxed tracking-wide">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#0C3A2B]/30 flex items-center gap-4">
                  {/* Small Profile Image */}
                  <img
                    src={test.image}
                    alt={test.patientName}
                    className="w-12 h-12 rounded-full object-cover grayscale border border-[#0C3A2B]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-serif text-sm font-semibold tracking-wide text-white">
                      {test.patientName}
                    </h5>
                    <span className="font-mono text-[9px] text-[#b99d63] uppercase tracking-widest block mt-0.5">
                      Verified Patient — {test.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ----------------- 10. CONTACT / APPOINTMENT CONCIERGE SECTION ----------------- */}
      <section id="contact-concierge-section" className="py-24 sm:py-32 bg-[#FAF8F5] px-6 border-b border-[#0C3A2B]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-[5] text-left lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 09 / INAUGURAL RESERVATION ]
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#0C3A2B] leading-[1.1] mb-6">
                Commence Your Smile Journey Today
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed mb-8 font-sans">
                Admission is held strictly by reservation to secure total private comfort. Selected case studies are individually overseen from pre-consult simulation to master lab layering.
              </p>

              {/* Direct Details */}
              <div className="space-y-6 border-t border-[#0C3A2B]/15 pt-8 text-xs font-mono text-stone-705">
                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#f4f7f5] flex items-center justify-center border border-[#0C3A2B]/20">
                    <MapPin className="w-4 h-4 text-[#0C3A2B]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0C3A2B]/60 block tracking-widest font-semibold">ATELIER SITE</span>
                    <span className="text-stone-900 tracking-wide">42 Fitzwilliam Square South, Dublin 2</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#f4f7f5] flex items-center justify-center border border-[#0C3A2B]/20">
                    <Mail className="w-4 h-4 text-[#0C3A2B]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0C3A2B]/60 block tracking-widest font-semibold">SECURE EMAIL</span>
                    <a href="mailto:relations@celticsmileclinic.ie" className="text-stone-900 hover:text-[#0C3A2B] transition-colors tracking-wide">
                      relations@celticsmileclinic.ie
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#f4f7f5] flex items-center justify-center border border-[#0C3A2B]/20">
                    <Phone className="w-4 h-4 text-[#0C3A2B]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0C3A2B]/60 block tracking-widest font-semibold">PRIVATE TELEPHONE</span>
                    <span className="text-stone-900 tracking-wide">+353 (0)1 694 2200</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#f4f7f5] flex items-center justify-center border border-[#0C3A2B]/20">
                    <Clock className="w-4 h-4 text-[#0C3A2B]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#0C3A2B]/60 block tracking-widest font-semibold">CLINICAL INTERVALS</span>
                    <span className="text-stone-900 tracking-wide">Mon - Fri: 08:30 - 19:30</span>
                  </div>
                </div>
              </div>

              {/* Award Accolades badge */}
              <div className="mt-8 p-4 bg-white border border-[#0C3A2B]/15 rounded-sm flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 bg-[#f4f7f5] flex items-center justify-center rounded-sm text-[#0C3A2B] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#0C3A2B]/60 block tracking-widest uppercase">Dental Excellence Awards</span>
                  <span className="font-serif text-xs font-semibold text-[#0C3A2B]">Aesthetic Clinic of the Year — Ireland 2024</span>
                </div>
              </div>
            </div>

            {/* Right Column Concierge scheduler block */}
            <div className="lg:col-span-12 xl:col-span-7 w-full lg:col-span-7">
              <BookingForm />
            </div>

          </div>

        </div>
      </section>


      {/* ----------------- 11. LUXURY FOOTER ----------------- */}
      <footer className="bg-[#061f12] text-[#d4ebe1]/85 py-16 px-6 border-t border-[#0C3A2B]/30 font-sans">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-16 text-left">
            
            {/* Branding Column */}
            <div className="md:col-span-1">
              <span className="font-serif text-xl text-white font-semibold tracking-[0.2em] uppercase">
                CELTIC SMILE
              </span>
              <span className="font-mono text-[8.5px] tracking-[0.4em] text-[#b99d63] block mt-1 uppercase">
                CLINIC — EST. 2012
              </span>
              <p className="text-xs text-[#d4ebe1]/60 mt-4 leading-relaxed font-sans max-w-xs">
                Exquisite Irish medical artistry. Reconstructing elegant, lifetime smiles tailored to your natural skeletal anatomy, overlooking Fitzwilliam Square.
              </p>
            </div>

            {/* Procedures Links Column */}
            <div>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 font-semibold">
                [ CLINIC OFFERINGS ]
              </h4>
              <ul className="space-y-2.5 text-xs text-[#d4ebe1]/80">
                <li>
                  <a href="#philosophy-section" className="hover:text-[#b99d63] transition-colors">
                    Atelier Porcelain Veneers
                  </a>
                </li>
                <li>
                  <a href="#philosophy-section" className="hover:text-[#b99d63] transition-colors">
                    Dentofacial Alignment Frame
                  </a>
                </li>
                <li>
                  <a href="#philosophy-section" className="hover:text-[#b99d63] transition-colors">
                    Chroma Micro-Oxygenation
                  </a>
                </li>
                <li>
                  <a href="#philosophy-section" className="hover:text-[#b99d63] transition-colors">
                    Private Aesthetic Consults
                  </a>
                </li>
              </ul>
            </div>

            {/* Places Links Column */}
            <div>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 font-semibold">
                [ ATELIER SANCTUARIES ]
              </h4>
              <ul className="space-y-2.5 text-xs text-[#d4ebe1]/80">
                <li>
                  <span className="text-[#d4ebe1] block font-medium">Dublin Fitzwilliam Atelier</span>
                  <span className="block text-[10px] text-[#d4ebe1]/60">42 Fitzwilliam Square S, D2</span>
                </li>
                <li>
                  <span className="text-[#d4ebe1] block font-medium">Coastal Retreat (Malahide)</span>
                  <span className="block text-[10px] text-[#d4ebe1]/60">Malahide Strand, Dublin Co.</span>
                </li>
                <li>
                  <span className="text-[#d4ebe1] block font-medium">The Kildare Suite</span>
                  <span className="block text-[10px] text-[#d4ebe1]/60">Spa Sanctuary Lodge, Kildare</span>
                </li>
              </ul>
            </div>

            {/* Corporate/Regulatory Details Irish dental board code */}
            <div>
              <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 font-semibold">
                [ REGULATORY STANDARDS ]
              </h4>
              <p className="text-[10px] text-[#d4ebe1]/60 leading-relaxed font-mono">
                All practitioners are fully registered with the Dental Council of Ireland (An Chomhairle Fiaclóireachta) & Royal College of Surgeons Ireland (RCSI). Fully certified with ISO 9001:2015 luxury clinical workspace standards.
              </p>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="border-t border-[#0C3A2B]/25 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest uppercase text-[#d4ebe1]/50">
            <span>
              © {new Date().getFullYear()} CELTIC SMILE CLINIC LTD. ALL RIGHTS SECURED.
            </span>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">PRIVACY TERMS</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">CONCIERGE ACCESS</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
