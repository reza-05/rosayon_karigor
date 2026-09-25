import React, { useState } from 'react';
import { ArrowRight, Check, X, Atom, Sparkles } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';
import { AtomicMethod3DCanvas, type MethodStep } from './AtomicMethod3DCanvas';

export const KarigorMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: MethodStep[] = [
    {
      num: '01',
      symbol: 'Ud',
      orbital: '1s² Ground State',
      energyState: 'Conceptual Foundation',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      color: '#0284c7', // Sky / Ocean
      shortDesc: 'Build a strong conceptual foundation.',
      shortDescBangla: 'অন্ধ মুখস্থের বিপরীতে বৈজ্ঞানিক যুক্তি ও কনসেপ্টের মূল ভিত্তি তৈরি।',
      details:
        'Instead of forcing reactions into memory, we explore why atoms react, why bonds form, and how thermodynamic tendencies drive reactions. রসায়ন অন্ধ মুখস্থ নয় — পরমাণুর ভেতরের মৌলিক আচরণ বুঝে নেওয়া।',
    },
    {
      num: '02',
      symbol: 'Vz',
      orbital: '2s² 2p¹ Spatial Shell',
      energyState: '3D Mental Projection',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      color: '#8b5cf6', // Violet
      shortDesc: 'Turn abstract ideas into clear mental models.',
      shortDescBangla: 'অরবিটাল ও অণুর ত্রিমাত্রিক আকার মনের পর্দায় স্পষ্ট দেখা।',
      details:
        '3D molecular animations, electron cloud projections, and visual maps transform abstract formulas into tangible intuitive pictures. সংকরায়ন ও জ্যামিতিক কাঠামো মনের পর্দায় স্পষ্ট ভেসে ওঠে।',
    },
    {
      num: '03',
      symbol: 'Cn',
      orbital: '3s² 3p³ Resonance Bridge',
      energyState: 'Holistic Synthesis',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      color: '#0d9488', // Teal / Emerald
      shortDesc: 'See the big picture across topics.',
      shortDescBangla: 'ভৌত, জৈব ও অজৈব রসায়নের ভেতর সেতুবন্ধন তৈরি করা।',
      details:
        'Periodic trends connect directly to organic acidity, electrochemistry explains reaction feasibility, and gas laws tie to thermodynamics. আলাদা আলাদা না পড়ে রসায়নের সব শাখাকে একটি সাধারণ সুতোয় গাঁথা।',
    },
    {
      num: '04',
      symbol: 'Pr',
      orbital: '4s² 3d² Kinetic Solving',
      energyState: 'Structured Application',
      title: 'Practice',
      titleBangla: 'প্রয়োগ',
      color: '#f59e0b', // Amber / Orange
      shortDesc: 'Apply concepts through structured problem solving.',
      shortDescBangla: 'বোর্ড ও এডমিশন লেভেলের নতুন নতুন সৃজনশীল সমস্যা সমাধান।',
      details:
        'Tiered problem sets from foundational board questions to tricky BUET/Medical admissions, teaching step-by-step deconstruction. কঠিন ও ঘুরিয়ে আসা প্রশ্ন সহজে ভেঙে সমাধান করার মানসিকতা গড়ে তোলা।',
    },
    {
      num: '05',
      symbol: 'Ms',
      orbital: '5s² 5p⁶ Noble Mastery',
      energyState: 'Exam Mastery & Peak Octet',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      color: '#10b981', // Emerald
      shortDesc: 'Gain confidence and perform better in exams.',
      shortDescBangla: 'পরীক্ষার হলে যেকোনো জটিল উদ্দীপকে সর্বোচ্চ আত্মবিশ্বাস।',
      details:
        'With speed hacks, dimensional cross-checks, and crystal-clear memory anchors, exam pressure converts into peak performance. যেকোনো জটিল উদ্দীপকেও নির্ভুল ও দ্রুততম সমাধান।',
    },
  ];

  const active = steps[activeStep];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Soft Chemistry Grid & Light Glows */}
      <div className="absolute inset-0 bg-chem-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Atom className="w-3.5 h-3.5 text-brand-ocean animate-spin-slow" />
            <span>ATOMIC PEDAGOGY • কারিগর মেথডলজি</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight">
            The <span className="text-brand-ocean font-bangla">কারিগর</span> Method™
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন অন্ধ মুখস্থের কোনো বিষয় নয় — পরমাণুর গঠনের মতো এটি একটি সমন্বিত, লজিক্যাল কাঠামো। ৫টি কোয়ান্টাম ধাপে গড়ে ওঠে রসায়নের স্থায়ী বুৎপত্তি।
          </p>
        </div>

        {/* 1. TRUE 3D BOHR ATOMIC FLOWCHART CANVAS */}
        <div className="relative w-full max-w-5xl mx-auto mb-6">
          <AtomicMethod3DCanvas
            steps={steps}
            activeStep={activeStep}
            onSelectStep={setActiveStep}
          />
        </div>

        {/* Quick Station Navigation Strip (Desktop & Mobile) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isCurrent
                    ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-ocean/40 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                  style={{ backgroundColor: step.color }}
                />
                <span className="font-mono">{step.num}</span>
                <span>{step.title}</span>
                <span className="text-xs opacity-75 font-bangla">({step.titleBangla})</span>
              </button>
            );
          })}
        </div>

        {/* 2. SELECTED STEP DEEP DIVE INSPECTION CHAMBER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-14 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="w-3 h-3 rounded-full animate-ping"
                  style={{ backgroundColor: active.color }}
                />
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase"
                  style={{
                    backgroundColor: `${active.color}15`,
                    color: active.color,
                  }}
                >
                  Stage {active.num} • {active.symbol} ({active.orbital})
                </span>
                <span className="text-xs font-bold text-slate-500 font-sans">
                  {active.energyState}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-brand-navy flex items-center gap-2">
                <span>
                  {active.title} ({active.titleBangla})
                </span>
                <span className="text-slate-400 font-normal">—</span>
                <span className="text-brand-ocean text-base sm:text-lg font-normal">
                  {active.shortDesc}
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-bangla leading-relaxed max-w-3xl">
                {active.details}
              </p>
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-ocean transition-all shadow-sm active:scale-95 flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>See It In Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3. BEFORE VS AFTER TRANSFORMATION TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card">
          <div className="bg-brand-navy text-white px-5 sm:px-6 py-4 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-sans font-bold flex items-center gap-2">
              <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
              <span>The Transformation: Before vs. After কারিগর</span>
            </h3>
            <span className="text-xs text-brand-orange font-mono font-semibold">
              Real Impact
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {beforeAfterComparison.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 p-5 sm:p-6 gap-5 sm:gap-6 hover:bg-slate-50/70 transition-colors"
              >
                {/* Before */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase block mb-1">
                      Traditional Way (মুখস্থ ভিত্তিক)
                    </span>
                    <p className="text-xs sm:text-sm font-bangla text-slate-600 leading-relaxed">
                      {item.beforeBangla}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 italic">
                      "{item.before}"
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="flex items-start gap-3 sm:gap-3.5 md:border-l md:border-slate-100 md:pl-6">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block mb-1">
                      The কারিগর Way (লজিক্যাল ও দৃশ্যমান)
                    </span>
                    <p className="text-xs sm:text-sm font-bangla text-brand-navy font-semibold leading-relaxed">
                      {item.afterBangla}
                    </p>
                    <p className="text-xs text-brand-ocean mt-1 italic">
                      "{item.after}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
