/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "SERVICES", href: "#service-section" },
    { label: "GALLERY", href: "#gallery-section" },
    { label: "CONTACT", href: "#contact-section" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          scrollActive
            ? "bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/50 py-4"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-sans">
          
          {/* LUXURY EMBLEM / BRAND LOGO */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#header-root")}
            className="flex items-center gap-3 text-left group select-none"
          >
            {/* Elegant Continuous Shamrock Loop SVG */}
            <svg
              className={`w-8 h-8 transition-transform duration-500 group-hover:rotate-12 ${
                scrollActive ? "text-[#0C3A2B]" : "text-[#b99d63]"
              }`}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Left Leaf/Heart loop */}
              <path d="M 50 50 C 15 50, 15 15, 50 15 C 85 15, 85 50, 50 50 Z" />
              {/* Right Leaf/Heart loop */}
              <path d="M 50 50 C 50 15, 85 15, 85 50 C 85 85, 50 85, 50 50 Z" strokeWidth="4.5" />
              {/* Bottom Stem/Loop or Leaf */}
              <path d="M 50 50 C 15 50, 15 85, 50 85 C 50 85, 50 50, 50 50 Z" strokeWidth="4.5" />
              {/* Subtle Stem element */}
              <path d="M 50 85 Q 56 94 65 95" strokeWidth="4" />
            </svg>
            <div className="flex flex-col">
              <span className={`font-serif text-base sm:text-lg font-bold tracking-[0.1em] uppercase leading-tight transition-colors duration-300 ${
                scrollActive ? "text-[#0C3A2B]" : "text-white"
              }`}>
                Celtic
              </span>
              <span className={`font-sans text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5 leading-none transition-colors duration-300 ${
                scrollActive ? "text-[#0C3A2B]" : "text-[#b99d63]"
              }`}>
                Smile Clinic
              </span>
            </div>
          </a>

          {/* DESKTOP MINIMALIST LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-[10px] font-mono uppercase tracking-[0.15em] transition-colors duration-300 relative py-1 group ${
                  scrollActive 
                    ? "text-[#0C3A2B]/80 hover:text-[#0C3A2B]" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  scrollActive ? "bg-[#0C3A2B]" : "bg-[#b99d63]"
                }`}></span>
              </a>
            ))}
          </nav>

          {/* DESKTOP BOOKING TRIGGERS / DUBLIN METADATA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className={`font-mono text-[9px] uppercase tracking-widest hidden xl:inline-flex items-center gap-1.5 border-r pr-5 transition-colors duration-300 ${
              scrollActive ? "text-stone-400 border-stone-200" : "text-white/50 border-white/10"
            }`}>
              <Compass className={`w-3.5 h-3.5 animate-spin-slow transition-colors duration-300 ${scrollActive ? "text-gold-500" : "text-[#b99d63]"}`} />
              Fitzwilliam Sq, D2
            </span>
            
            <a
              href="#contact-section"
              onClick={(e) => handleScrollTo(e, "#contact-section")}
              className={`px-5 py-2.5 text-[10px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
                scrollActive
                  ? "bg-[#0C3A2B] hover:bg-gold-500 text-white hover:text-stone-950"
                  : "bg-white/5 hover:bg-white/15 border border-[#b99d63]/70 text-white"
              }`}
            >
              Private Request
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MOBILE BURGER LINK */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="#contact-section"
              onClick={(e) => handleScrollTo(e, "#contact-section")}
              className={`px-3.5 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                scrollActive
                  ? "bg-[#0C3A2B] hover:bg-gold-400 text-white"
                  : "bg-white/5 hover:bg-white/15 border border-[#b99d63]/70 text-white"
              }`}
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none p-1 cursor-pointer transition-colors ${
                scrollActive ? "text-stone-900" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN MODAL TRANSITION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#faf9f6] z-30 lg:hidden flex flex-col justify-between pt-32 pb-12 px-8"
          >
            {/* Background design accents similar to luxury magazines */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-stone-200"></div>

            <div className="flex flex-col gap-8 text-left">
              <span className="font-mono text-[10px] tracking-[0.25em] text-gold-600 uppercase block mb-3 border-b border-stone-200 pb-2">
                [ NAVIGATION RETREAT ]
              </span>
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="font-serif text-3xl text-stone-950 tracking-tight hover:text-gold-600 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom context block */}
            <div className="border-t border-stone-200 pt-8 flex flex-col gap-4">
              <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest block">
                [ Celtic Smile Clinic — Dublin ]
              </span>
              <span className="text-stone-600 text-xs font-sans tracking-wide">
                42 Fitzwilliam Square South, Dublin 2, D02 HE94
              </span>
              <div className="flex gap-6 mt-2">
                <a
                  href="#contact-section"
                  onClick={(e) => handleScrollTo(e, "#contact-section")}
                  className="px-6 py-3 bg-stone-950 hover:bg-gold-500 hover:text-stone-950 text-white text-xs font-mono uppercase tracking-widest text-center rounded-sm w-full"
                >
                  Request Private Invitation →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
