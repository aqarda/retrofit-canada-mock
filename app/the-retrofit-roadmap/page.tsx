'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROADMAP_STEPS } from '@/data/roadmap';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Compass,
  Layers,
  Flame,
  SunMedium,
  Users
} from 'lucide-react';

export default function RetrofitRoadmapPage() {
  const [expandedStep, setExpandedStep] = useState<string>('01');

  const toggleStep = (stepNumber: string) => {
    setExpandedStep(prev => prev === stepNumber ? '' : stepNumber);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
            Strategic Decarbonization Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            The Retrofit Roadmap
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Planning with the end in mind. Piecemeal upgrades often create stranded assets or lock in fossil fuel heating for decades. The Retrofit Roadmap sequences whole-home improvements so every stage moves your building toward net-zero performance.
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <Compass className="w-7 h-7 text-emerald-400" />
            <h2 className="text-xl md:text-2xl font-black text-white">The Phased Retrofit Principle</h2>
          </div>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Not every building owner can undertake a complete deep retrofit in a single season. The Retrofit Roadmap is designed specifically to enable <strong>phased execution</strong> over several years. By following proper sequencing, early envelope measures shrink the required heating capacity so that when you replace your mechanical equipment, you can downsize the heat pump and avoid overpaying for unnecessary capacity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-xs font-bold text-emerald-400 block mb-1">1. Envelope First</span>
              <p className="text-xs text-slate-300">Shrink peak winter heat demand by sealing leaks and topping up attic insulation to R-60.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-xs font-bold text-emerald-400 block mb-1">2. Clean Mechanicals</span>
              <p className="text-xs text-slate-300">Right-size a cold-climate heat pump (-30°C capable) to match the newly reduced envelope load.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-xs font-bold text-emerald-400 block mb-1">3. On-Site Solar</span>
              <p className="text-xs text-slate-300">Install rooftop solar PV to offset the newly electrified, low-energy building footprint.</p>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">The 6 Implementation Steps</h2>
            <span className="text-xs text-slate-500 font-medium">Click each step to expand details</span>
          </div>

          <div className="space-y-4">
            {ROADMAP_STEPS.map((step) => {
              const isExpanded = expandedStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  {/* Step Header */}
                  <button
                    onClick={() => toggleStep(step.stepNumber)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 text-lg font-black flex items-center justify-center flex-shrink-0 border border-emerald-200/70">
                        {step.stepNumber}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{step.title}</h3>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                            {step.subtitle}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-1 sm:line-clamp-none">
                          {step.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-100 text-slate-600 ml-4 flex-shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Step Body */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-slate-100 space-y-6 animate-in fade-in duration-200">
                      <div className="pt-6">
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Action Items Grid */}
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Key Action Items for this Step:</span>
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
                          {step.keyActionItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pro-Tips & Common Pitfalls Side-by-Side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                          <h5 className="font-bold text-emerald-950 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                            <Lightbulb className="w-4 h-4 text-emerald-700" />
                            <span>Tips for Success</span>
                          </h5>
                          <ul className="space-y-1.5 text-slate-700">
                            {step.tipsForSuccess.map((tip, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-700 font-bold">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                          <h5 className="font-bold text-amber-950 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            <span>Common Pitfalls to Avoid</span>
                          </h5>
                          <ul className="space-y-1.5 text-slate-700">
                            {step.commonPitfalls.map((pitfall, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-amber-700 font-bold">⚠</span>
                                <span>{pitfall}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to Case Studies */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-slate-900">See The Roadmap in Practice</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore completed projects across Alberta, British Columbia, and Ontario where homeowners and contractors followed this exact protocol to achieve net-zero performance.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md whitespace-nowrap"
          >
            Explore Matching Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
