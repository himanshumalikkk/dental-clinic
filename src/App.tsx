/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Award,
  ChevronRight,
  Sparkles
} from "lucide-react";

import Header from "./components/Header";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import BookingForm from "./components/BookingForm";
import MasonryGallery from "./components/MasonryGallery";

import { 
  BEFORE_AFTER_CASES, 
  TREATMENTS, 
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

      {/* ----------------- HERO SECTION (REDESIGNED LUXURY EDITORIAL STYLE) ----------------- */}
      <section className="relative min-h-screen flex flex-col justify-between bg-[#061f12] overflow-hidden pt-24 pb-8 select-none">
        
        {/* Background Layer 1: Left portrait of silver-haired smiling patient (beautifully positioned and responsive) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] h-[55%] sm:h-[60%] lg:h-full z-0 overflow-hidden pointer-events-none">
          <img
            src={CustomImages.silverPatient}
            alt="Silver Patient Smile, Celtic Smile Clinic"
            className="w-full h-full object-cover scale-x-100 lg:-scale-x-100 object-[50%_22%] lg:object-[28%_center] brightness-[1.03] contrast-[1.01]"
            referrerPolicy="no-referrer"
          />
          {/* Soft overlay gradient fading to right (desktop) and down (mobile) with superb smoothness */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#061f12]/35 to-[#061f12] hidden lg:block z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061f12]/60 to-[#061f12] lg:hidden z-10" />
        </div>

        {/* Background Layer 2: Right clinical luxury space subtly blurred */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0 overflow-hidden pointer-events-none opacity-20 hidden lg:block">
          <img
            src={CustomImages.clinicSpace}
            alt="Clinic interior design cozy spaces"
            className="w-full h-full object-cover filter blur-[3px]"
            referrerPolicy="no-referrer"
          />
          {/* Secondary fade from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061f12] via-transparent to-[#061f12]/50" />
        </div>

        {/* Ambient Radial Lighting over the hero */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061f12]/15 to-[#061f12] pointer-events-none z-[1]" />

        {/* Center content container alignment */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex-1 flex flex-col justify-center relative z-10 py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Empty/Spacious Left Column to clear the portrait image on desktop */}
            <div className="hidden lg:block lg:col-span-5 h-[200px]" />

            {/* Right Column containing the gorgeous typography and brand assets */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center items-center lg:pl-12 mt-[35vh] lg:mt-0">
              
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                
                {/* 1. Luxurious Badge resembling the reference image */}
                <div className="relative inline-flex items-center justify-center bg-[#FAF8F5]/95 border border-[#b99d63] rounded-[4px] px-5 py-2.5 shadow-lg mb-8">
                  {/* Subtle golden shamrock outline crest perched on the top border */}
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-[#061f12] px-1 text-[#b99d63]">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6.5"
                    >
                      <path d="M 50 50 C 20 50, 20 20, 50 20 C 80 20, 80 50, 50 50 Z" />
                      <path d="M 50 50 C 50 20, 80 20, 80 50 C 80 80, 50 80, 50 50 Z" />
                      <path d="M 50 50 C 20 50, 20 80, 50 80 C 50 80, 50 50, 50 50 Z" />
                    </svg>
                  </div>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-stone-900 uppercase">
                    Ireland's Leading Dental Studio
                  </span>
                </div>

                {/* 2. Headline - Confidence Starts With Your Smile */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-normal tracking-tight text-[#FAF8F5] leading-[1.1] mb-6 text-center">
                  Confidence Starts <br />
                  With Your Smile
                </h1>

                {/* 3. Subheadline */}
                <p className="text-stone-300 text-sm sm:text-[15px] tracking-wide font-sans max-w-md mb-10 leading-relaxed font-light text-center">
                  Modern dentistry designed around people.
                </p>

                {/* 4. Luxury Buttons with literal square brackets as shown in the screenshot */}
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  <button
                    onClick={() => handleScrollTo("#contact-section")}
                    className="px-6 py-2.5 border border-[#b99d63] hover:bg-[#b99d63]/10 text-white font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    [Book Appointment]
                  </button>
                  <button
                    onClick={() => handleScrollTo("#service-section")}
                    className="px-6 py-2.5 border border-[#b99d63]/60 hover:bg-[#b99d63]/15 text-white/90 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    [Explore Experience]
                  </button>
                </div>

              </motion.div>
            </div>

          </div>

        </div>

        {/* 5. Center-aligned bottom tagline matching the exact textual banner at the bottom of the reference */}
        <div className="w-full text-center py-4 z-10 font-sans border-t border-white/5 mt-8 lg:mt-0">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/70 font-light text-[9px] sm:text-[11px] tracking-[0.16em] uppercase px-4"
          >
            Transformative experiences for discerning clients across Ireland.
          </motion.p>
        </div>

      </section>

      
      {/* ----------------- SECTION 1 - SERVICE ATELIER ----------------- */}
      <section id="service-section" className="py-24 sm:py-32 bg-[#FAF8F5] border-y border-[#0C3A2B]/10 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-[#0C3A2B]/15 pb-12"
          >
            <div className="max-w-xl text-left">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 01 / SERVICE ATELIER ]
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl tracking-tight leading-[1.1] text-[#0C3A2B]">
                Precision Clinical Services
              </h2>
            </div>
            <p className="text-stone-700 text-xs sm:text-sm tracking-wide max-w-sm font-sans leading-relaxed text-left">
              We focus purely on custom-layered reconstructive work, clear aligning systems, and deep mineral whitening frameworks representing modern biological chemistry.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
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
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#b99d63]"></span>}
                    </div>
                    
                    <h3 className="font-serif text-2xl sm:text-2xl tracking-tight mb-2">
                      {treatment.title}
                    </h3>
                    
                    <div className={`flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.15em] ${isActive ? "text-[#b99d63]" : "text-[#0C3A2B]"} mt-2 group`}>
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-left">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#0C3A2B]/60 uppercase block mb-1 font-semibold">
                    {selectedTreatment.meta}
                  </span>
                  <p className="text-stone-700 text-xs sm:text-sm max-w-lg leading-relaxed font-sans">
                    {selectedTreatment.description}
                  </p>
                </div>
                <div className="bg-[#f4f7f5] border border-[#0C3A2B]/10 px-4 py-2 text-right rounded-xs shrink-0 font-sans">
                  <span className="font-mono text-[8px] text-[#0C3A2B]/50 uppercase block font-semibold">CLINICAL INTERVAL</span>
                  <span className="font-serif text-sm font-semibold text-[#0C3A2B]">{selectedTreatment.duration}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* ----------------- SECTION 2 - GALLERY & TRANSFORMATIONS ----------------- */}
      <div className="scroll-mt-20">
        <BeforeAfterSlider cases={BEFORE_AFTER_CASES} />
        <MasonryGallery />
      </div>


      {/* ----------------- SECTION 3 - CONTACT & SCHEDULING ----------------- */}
      <section id="contact-section" className="py-24 sm:py-32 bg-[#FAF8F5] px-6 border-b border-[#0C3A2B]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start"
          >
            
            {/* Left Column Description */}
            <div className="lg:col-span-[5] text-left lg:sticky lg:top-24">
              <span className="font-mono text-xs tracking-[0.25em] text-[#0C3A2B] uppercase block mb-4 font-semibold">
                [ 03 / PRIVATE RESERVATION ]
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#0C3A2B] leading-[1.1] mb-6">
                Commence Your Smile Journey Today
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed mb-8 font-sans">
                Admission is held strictly by reservation to secure total private comfort. Selected case studies are individually overseen from pre-consult simulation to master lab layering.
              </p>

              {/* Direct Details */}
              <div className="space-y-6 border-t border-[#0C3A2B]/15 pt-8 text-xs font-mono text-stone-700">
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

          </motion.div>

        </div>
      </section>


      {/* ----------------- LUXURY FOOTER ----------------- */}
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
                [ ATELIER EXPLORATION ]
              </h4>
              <ul className="space-y-2.5 text-xs text-[#d4ebe1]/80">
                <li>
                  <a href="#service-section" className="hover:text-[#b99d63] transition-colors">
                    Atelier Porcelain Veneers
                  </a>
                </li>
                <li>
                  <a href="#service-section" className="hover:text-[#b99d63] transition-colors">
                    Dentofacial Alignment Frame
                  </a>
                </li>
                <li>
                  <a href="#service-section" className="hover:text-[#b99d63] transition-colors">
                    Chroma Micro-Oxygenation
                  </a>
                </li>
                <li>
                  <a href="#service-section" className="hover:text-[#b99d63] transition-colors">
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
                  <span className="text-[#d4ebe1] block font-medium font-semibold">The Kildare Suite</span>
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
              <a href="#contact-section" className="hover:text-white transition-colors">CONCIERGE ACCESS</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
