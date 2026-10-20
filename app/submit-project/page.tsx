'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, CheckCircle2, ShieldCheck, ArrowRight, Building, Layers, Flame, Award } from 'lucide-react';

export default function SubmitProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    city: '',
    province: 'AB',
    buildingType: 'Single-family bungalow',
    vintage: '',
    floorAreaSqFt: '',
    beforeGj: '',
    afterGj: '',
    beforeAch50: '',
    afterAch50: '',
    spaceHeating: '',
    heatPumpModel: '',
    totalCost: '',
    grantPrograms: '',
    contractor: '',
    energyAdvisor: '',
    summary: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
            Open-Source Contribution
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Submit a Case Study
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have you completed a Canadian deep energy retrofit? By contributing your verified project data, airtightness measurements, and mechanical specifications, you empower thousands of fellow Canadians to decarbonize their homes.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Case Study Submission Received!</h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you for contributing to Canada’s building decarbonization library! Our technical team will review the EnerGuide audit metrics and contact you before publishing the project to the public database.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/case-studies"
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md"
                >
                  Return to Case Study Library
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Property Identification */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-700" />
                  <span>1. Property & Location Baseline</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Brentwood 1968 Bungalow Retrofit"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">City / Municipality *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Calgary, Edmonton, Toronto"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Province *</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="AB">Alberta (AB)</option>
                      <option value="BC">British Columbia (BC)</option>
                      <option value="ON">Ontario (ON)</option>
                      <option value="NS">Nova Scotia (NS)</option>
                      <option value="QC">Quebec (QC)</option>
                      <option value="SK">Saskatchewan (SK)</option>
                      <option value="MB">Manitoba (MB)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Building Style *</label>
                    <select
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Single-family bungalow">Single-family bungalow</option>
                      <option value="Split-level">Split-level</option>
                      <option value="Row house / Townhome">Row house / Townhome</option>
                      <option value="Heritage home">Heritage home</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Year Built *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1968"
                      value={formData.vintage}
                      onChange={(e) => setFormData({ ...formData, vintage: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Heated Floor Area (sq ft) *</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 1650"
                      value={formData.floorAreaSqFt}
                      onChange={(e) => setFormData({ ...formData, floorAreaSqFt: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Energy Audit Metrics */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-700" />
                  <span>2. EnerGuide Energy & Airtightness Metrics</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Pre-Retrofit Energy (GJ/yr) *</label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder="e.g. 165.0"
                      value={formData.beforeGj}
                      onChange={(e) => setFormData({ ...formData, beforeGj: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Post-Retrofit Energy (GJ/yr) *</label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder="e.g. 45.0"
                      value={formData.afterGj}
                      onChange={(e) => setFormData({ ...formData, afterGj: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Pre-Retrofit Blower Door (ACH@50)</label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="e.g. 6.8"
                      value={formData.beforeAch50}
                      onChange={(e) => setFormData({ ...formData, beforeAch50: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Post-Retrofit Blower Door (ACH@50)</label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="e.g. 1.2"
                      value={formData.afterAch50}
                      onChange={(e) => setFormData({ ...formData, afterAch50: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Mechanical & Financials */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>3. Equipment & Financial Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Heat Pump / HVAC Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Mitsubishi Zuba-Central 3-ton"
                      value={formData.heatPumpModel}
                      onChange={(e) => setFormData({ ...formData, heatPumpModel: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Total Project Cost ($CAD)</label>
                    <input
                      type="number"
                      placeholder="e.g. 72000"
                      value={formData.totalCost}
                      onChange={(e) => setFormData({ ...formData, totalCost: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">General Contractor / Builder</label>
                    <input
                      type="text"
                      placeholder="e.g. Habitat Studio"
                      value={formData.contractor}
                      onChange={(e) => setFormData({ ...formData, contractor: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Registered Energy Advisor</label>
                    <input
                      type="text"
                      placeholder="e.g. 4-Elements Energy Advising"
                      value={formData.energyAdvisor}
                      onChange={(e) => setFormData({ ...formData, energyAdvisor: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Narrative & Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the key upgrades performed, primary envelope strategies, and overall results..."
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Data is verified prior to publishing to the national library.
                </span>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md shadow-emerald-900/10"
                >
                  Submit Case Study
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
