/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TREATMENTS } from "../data";
import { Calendar, User, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState(TREATMENTS[0].id);
  const [selectedLocation, setSelectedLocation] = useState("Dublin Atelier (Fitzwilliam Square)");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (08:30 - 12:00)");

  const locations = [
    "Dublin Atelier (Fitzwilliam Square)",
    "Coastal Sanctuary Retreat (Malahide)",
    "Boutique Suite (Kildare)"
  ];

  const timeSlots = [
    "Morning (08:30 - 12:00)",
    "Afternoon (12:30 - 16:30)",
    "Late Afternoon Sunset (17:00 - 19:30)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setFormSubmitted(true);
  };

  const getTreatmentTitle = (id: string) => {
    const t = TREATMENTS.find((item) => item.id === id);
    return t ? t.title : "Inaugural Private Consultation";
  };

  return (
    <div id="concierge-booking-section" className="bg-[#0c311e] border border-[#0C3A2B]/20 p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden">
      
      {/* Decorative ambient background shimmer */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#b99d63]/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!formSubmitted ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-10 text-left border-b border-[#0C3A2B]/40 pb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#b99d63] uppercase block mb-2 font-semibold">
                [ CLINIC ADMISSION CONCIERGE ]
              </span>
              <h3 className="font-serif text-3xl text-white tracking-tight leading-tight">
                Request Private Invitation
              </h3>
              <p className="text-[#d4ebe1]/75 text-xs mt-2 font-sans tracking-wide">
                To maintain standard clinical space relaxation, we curate admissions by appointment. Please submit your preferences for review.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name field */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                  Full Name / Portrait
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4ebe1]/50" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sinéad Mulcahy"
                    className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm pl-11 pr-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-sans tracking-wide placeholder:text-[#d4ebe1]/30"
                  />
                </div>
              </div>

              {/* Email & Phone splits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                    Secure Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sinead@domain.ie"
                    className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm px-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-sans tracking-wide placeholder:text-[#d4ebe1]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+353 (087) 123 4567"
                    className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm px-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-sans tracking-wide placeholder:text-[#d4ebe1]/30"
                  />
                </div>
              </div>

              {/* Treatment Selection Select style */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                  Aesthetic Treatment Line
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm px-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-sans tracking-wide"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id} className="bg-[#061f12] text-stone-300">
                      {t.title}
                    </option>
                  ))}
                  <option value="custom-consult" className="bg-[#061f12] text-stone-300">
                    Private Aesthetic Consult & Ortho Profile
                  </option>
                </select>
              </div>

              {/* Location Select block */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                  Select Sanctuary Site
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {locations.map((loc) => {
                    const isSelected = selectedLocation === loc;
                    return (
                      <button
                        type="button"
                        key={loc}
                        onClick={() => setSelectedLocation(loc)}
                        className={`p-3 text-left border rounded-xs text-[11px] font-mono tracking-wide transition-all ${
                          isSelected
                            ? "bg-[#FAF8F5] border-[#b99d63] text-[#0C3A2B]"
                            : "bg-[#061f12]/40 border-[#0c311e] text-[#d4ebe1]/60 hover:border-emerald-900"
                        }`}
                      >
                        <MapPin className={`w-3.5 h-3.5 mb-1.5 ${isSelected ? "text-[#b99d63]" : "text-[#d4ebe1]/30"}`} />
                        {loc.split(" (")[0]}
                        <span className={`block text-[9px] ${isSelected ? "text-[#0C3A2B]/60" : "text-[#d4ebe1]/40"} font-sans mt-0.5`}>
                          {loc.includes("(") ? loc.slice(loc.indexOf("(")) : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4ebe1]/50" />
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm pl-11 pr-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-sans tracking-wide"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#d4ebe1]/70 font-semibold">
                    Preferred Interval
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4ebe1]/50" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#061f12]/80 border border-[#0c311e] text-white text-sm pl-11 pr-4 py-3.5 rounded-xs focus:border-[#b99d63] focus:outline-none focus:ring-1 focus:ring-[#b99d63] transition-all font-mono tracking-wide"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#061f12] text-stone-300">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Request Button */}
              <button
                type="submit"
                className="w-full mt-6 py-4 bg-[#b99d63] hover:bg-[#a28752] active:bg-[#8c7444] text-white text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-xs shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Request Private Invitation
              </button>

              <p className="text-[10px] text-[#d4ebe1]/50 font-sans tracking-wide text-center mt-4">
                Discretion Guaranteed. Standard Response: Within 2 Premium Hours of Clinical Time.
              </p>
            </form>
          </motion.div>
        ) : (
          /* SUCCESS STATE - Luxury Invitation Envelope style */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center py-12 px-4"
          >
            <div className="w-16 h-16 bg-[#b99d63]/10 border border-[#b99d63]/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-8 h-8 text-[#b99d63]" />
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-[#b99d63] uppercase block mb-3 animate-pulse font-semibold">
              [ ADMISSION RESERVATION ADMITTED ]
            </span>

            <h3 className="font-serif text-3xl text-white tracking-wide max-w-lg mx-auto leading-normal">
              Receipt of Invitation Request Registered
            </h3>

            <div className="my-8 max-w-sm mx-auto p-6 bg-[#061f12]/90 border border-[#0C3A2B]/30 rounded-xs text-left relative">
              <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border-l border-b border-[#0C3A2B]/30 bg-[#0c311e] font-mono text-[9px] text-[#b99d63] font-bold">
                IE
              </div>
              
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[#d4ebe1]/50 block text-[9px] uppercase tracking-widest">PATIENT GUEST</span>
                  <span className="text-stone-150">{name}</span>
                </div>
                <div>
                  <span className="text-[#d4ebe1]/50 block text-[9px] uppercase tracking-widest">TREATMENT ARCHITECTURE</span>
                  <span className="text-stone-150">{getTreatmentTitle(selectedTreatment)}</span>
                </div>
                <div>
                  <span className="text-[#d4ebe1]/50 block text-[9px] uppercase tracking-widest">STUDIO RETREAT</span>
                  <span className="text-stone-150">{selectedLocation}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#d4ebe1]/50 block text-[9px] uppercase tracking-widest">PROPOSED DATE</span>
                    <span className="text-stone-150">{preferredDate || "Selected Online"}</span>
                  </div>
                  <div>
                    <span className="text-[#d4ebe1]/50 block text-[9px] uppercase tracking-widest">PROPOSED TIME</span>
                    <span className="text-stone-150 text-[10px]">{preferredTime.split(" (")[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#d4ebe1]/75 leading-relaxed max-w-md mx-auto">
              Our clinical relations manager, Sinéad, will contact you securely at <strong className="text-[#b99d63] font-normal">{email}</strong> within 120 minutes to finalize your direct diagnostic seating on.
            </p>

            <button
              onClick={() => {
                setFormSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setPreferredDate("");
              }}
              className="mt-10 px-8 py-3.5 bg-transparent border border-[#0C3A2B]/40 hover:border-[#b99d63]/60 text-[#d4ebe1]/70 hover:text-white text-xs font-mono uppercase tracking-widest rounded-xs transition-colors cursor-pointer"
            >
              Request Another Session
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
