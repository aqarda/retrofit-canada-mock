import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/data/case-studies';
import { 
  ArrowLeft, 
  Flame, 
  ShieldCheck, 
  Wind, 
  Zap, 
  DollarSign, 
  CheckCircle2, 
  Layers, 
  SunMedium, 
  Users, 
  Lightbulb, 
  Award,
  Calendar,
  Building2,
  MapPin
} from 'lucide-react';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    id: study.slug,
  }));
}

export default function SingleCaseStudyPage({ params }: CaseStudyPageProps) {
  const study = CASE_STUDIES.find((cs) => cs.slug === params.id || cs.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:text-emerald-700 transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-slate-800">{study.title}</span>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="relative h-72 md:h-96 bg-slate-900 overflow-hidden">
            <img
              src={study.imageUrl}
              alt={study.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-700 text-white shadow-sm">
                  {study.buildingType}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-slate-900 shadow-sm">
                  Built {study.vintage}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500 text-slate-950 shadow-sm">
                  {study.performanceLevel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {study.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{study.location} ({study.climateZone})</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>{study.floorAreaSqFt} sq ft ({study.floorAreaM2} m²)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Key Empirical Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-900 text-white border-t border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Annual Energy Consumption</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">{study.afterGj}</span>
                <span className="text-xs text-slate-400">GJ/yr</span>
                <span className="text-xs text-rose-400 line-through ml-1">from {study.beforeGj}</span>
              </div>
              <span className="text-xs font-bold text-amber-400 block">-{study.energyReductionPercent.toFixed(0)}% Overall Reduction</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Air Infiltration Rate</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-teal-400">{study.afterAch50}</span>
                <span className="text-xs text-slate-400">ACH@50</span>
                <span className="text-xs text-slate-400 line-through ml-1">from {study.beforeAch50}</span>
              </div>
              <span className="text-xs text-slate-400 block">Blower Door Verified</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Financial Overview</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-white">${study.financials.netCost.toLocaleString()}</span>
                <span className="text-xs text-slate-400">Net Cost</span>
              </div>
              <span className="text-xs text-emerald-400 block">
                ${study.financials.grantRebatesTotal.toLocaleString()} Grants & Rebates
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Annual Utility Savings</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">${study.financials.annualUtilitySavings.toLocaleString()}</span>
                <span className="text-xs text-slate-400">/year</span>
              </div>
              <span className="text-xs text-slate-400 block">Saved on Bills & Carbon Tax</span>
            </div>
          </div>
        </div>

        {/* Detailed Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story & Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Project Summary & Narrative */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Project Overview</h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {study.story}
              </p>
            </div>

            {/* Technical Specifications Breakdown */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <Layers className="w-6 h-6 text-emerald-700" />
                <span>Technical Specifications</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800">Building Envelope & Airtightness</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-slate-500 block text-xs">Attic Insulation</span>
                      <strong className="text-slate-800">{study.specs.atticRsi}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Above-Grade Walls</span>
                      <strong className="text-slate-800">{study.specs.wallRsi}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Basement & Foundation</span>
                      <strong className="text-slate-800">{study.specs.basementRsi}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Windows & Glazing</span>
                      <strong className="text-slate-800">{study.specs.windows}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800">Mechanical Systems & Renewables</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-slate-500 block text-xs">Primary Space Heating</span>
                      <strong className="text-slate-800">{study.specs.spaceHeating}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Auxiliary / Backup Heating</span>
                      <strong className="text-slate-800">{study.specs.backupHeating}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Domestic Hot Water</span>
                      <strong className="text-slate-800">{study.specs.domesticHotWater}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-xs">Mechanical Ventilation</span>
                      <strong className="text-slate-800">{study.specs.ventilation}</strong>
                    </div>
                    {study.specs.solarPvKwDc && (
                      <div>
                        <span className="text-slate-500 block text-xs">Rooftop Solar PV Array</span>
                        <strong className="text-emerald-700">{study.specs.solarPvKwDc} kW DC Solar Array</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Lessons Learned */}
            <div className="bg-emerald-50/60 p-8 rounded-3xl border border-emerald-200 space-y-4">
              <h2 className="text-xl font-black text-emerald-950 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-700" />
                <span>Lessons Learned & Practitioner Insights</span>
              </h2>
              <ul className="space-y-3">
                {study.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-1" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: Funding, Team & Actions */}
          <div className="lg:col-span-4 space-y-8">
            {/* Funding Programs Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Funding & Grant Sources</span>
              </h3>
              <ul className="space-y-2 text-xs">
                {study.financials.fundingPrograms.map((prog, idx) => (
                  <li key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700">
                    {prog}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Team Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Project Team</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block">General Contractor / Builder</span>
                  <strong className="text-slate-800 text-sm">{study.contractor}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Registered Energy Advisor (HOT2000)</span>
                  <strong className="text-slate-800 text-sm">{study.energyAdvisor}</strong>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="space-y-3">
              <Link
                href="/case-studies"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Case Studies</span>
              </Link>

              <Link
                href="/the-retrofit-roadmap"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md shadow-emerald-900/10"
              >
                <span>Plan Your Retrofit Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
