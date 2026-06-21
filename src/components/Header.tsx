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
    { label: "The Sanctuary", href: "#sanctuary-section" },
    { label: "Our Philosophy", href: "#philosophy-section" },
    { label: "Artistry Gallery & Restorations", href: "#gallery-portfolio-section" },
    { label: "Symmetry Transformation", href: "#before-after-section" },
    { label: "Meet the Sculptors", href: "#sculptors-section" },
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
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrollActive
            ? "bg-[#faf9f6]/90 backdrop-blur-md border-b border-stone-200/50 py-4"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LUXURY EMBLEM / BRAND LOGO */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#header-root")}
            className="flex items-center gap-3 text-left group select-none"
          >
            {/* Elegant Continuous Shamrock Loop SVG */}
            <svg
              className="w-8 h-8 text-[#0C3A2B] transition-transform duration-500 group-hover:rotate-12"
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
              <span className="font-serif text-base sm:text-lg font-bold text-[#0C3A2B] tracking-[0.1em] uppercase leading-tight">
                Celtic
              </span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.2em] text-[#0C3A2B] uppercase mt-0.5 leading-none">
                Smile Clinic
              </span>
            </div>
          </a>

          {/* DESKTOP MINIMALIST LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "The Sanctuary", href: "#sanctuary-section" },
              { label: "Our Philosophy", href: "#philosophy-section" },
              { label: "Artistry Gallery & Restorations", href: "#gallery-portfolio-section" },
              { label: "Symmetry Transformation", href: "#before-after-section" },
              { label: "Meet the Sculptors", href: "#sculptors-section" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#0C3A2B]/80 hover:text-[#0C3A2B] transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0C3A2B] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* DESKTOP BOOKING TRIGGERS / DUBLIN METADATA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest hidden xl:inline-flex items-center gap-1.5 border-r border-stone-200 pr-5">
              <Compass className="w-3 h-3 text-gold-500 animate-spin-slow" />
              Fitzwilliam Sq, D2
            </span>
            
            <a
              href="#concierge-booking-section"
              onClick={(e) => handleScrollTo(e, "#concierge-booking-section")}
              className="px-5 py-2.5 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 text-[10px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-1 shadow-sm"
            >
              Private Request
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MOBILE BURGER LINK */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="#concierge-booking-section"
              onClick={(e) => handleScrollTo(e, "#concierge-booking-section")}
              className="px-3.5 py-1.5 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 text-[9px] font-mono uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-900 focus:outline-none p-1 cursor-pointer"
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
                  href="#concierge-booking-section"
                  onClick={(e) => handleScrollTo(e, "#concierge-booking-section")}
                  className="px-6 py-3 bg-stone-950 hover:bg-gold-500 hover:text-sh-950 text-white text-xs font-mono uppercase tracking-widest text-center rounded-sm w-full"
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
