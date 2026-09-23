import React, { useState } from 'react';
import { BookOpen, Eye, Network, Edit3, Award, ArrowRight, Check, X, Sparkles } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';

export const KarigorMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      icon: BookOpen,
      tag: 'No Rote Learning',
      shortDesc: 'Build a strong conceptual foundation.',
      shortDescBangla: 'অন্ধ মুখস্থের বিপরীতে বৈজ্ঞানিক যুক্তি ও কনসেপ্টের মূল ভিত্তি তৈরি।',
      details: 'Instead of forcing reactions into memory, we explore why atoms react, why bonds form, and how thermodynamic tendencies drive reactions.',
    },
    {
      num: '02',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      icon: Eye,
      tag: 'Mental Models',
      shortDesc: 'Turn abstract ideas into clear mental models.',
      shortDescBangla: 'অরবিটাল ও অণুর ত্রিমাত্রিক আকার মনের পর্দায় স্পষ্ট দেখা।',
      details: '3D molecular animations, electron cloud projections, and visual maps transform abstract formulas into tangible intuitive pictures.',
    },
    {
      num: '03',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      icon: Network,
      tag: 'Big Picture',
      shortDesc: 'See the big picture across topics.',
      shortDescBangla: 'ভৌত, জৈব ও অজৈব রসায়নের ভেতর সেতুবন্ধন তৈরি করা।',
      details: 'Periodic trends connect directly to organic acidity, electrochemistry explains reaction feasibility, and gas laws tie to thermodynamics.',
    },
    {
      num: '04',
      title: 'Practice',
      titleBangla: 'প্রয়োগ',
      icon: Edit3,
      tag: 'Structured Solving',
      shortDesc: 'Apply concepts through structured problem solving.',
      shortDescBangla: 'বোর্ড ও এডমিশন লেভেলের নতুন নতুন সৃজনশীল সমস্যা সমাধান।',
      details: 'Tiered problem sets from foundational board questions to tricky BUET/Medical admissions, teaching step-by-step deconstruction.',
    },
    {
      num: '05',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      icon: Award,
      tag: 'Lasting Confidence',
      shortDesc: 'Gain confidence and perform better in exams.',
      shortDescBangla: 'পরীক্ষার হলে যেকোনো জটিল উদ্দীপকে সর্বোচ্চ আত্মবিশ্বাস।',
      details: 'With speed hacks, dimensional cross-checks, and crystal-clear memory anchors, exam pressure converts into peak performance.',
    },
  ];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden">
      {/* Background soft gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>OUR PEDAGOGY & METHOD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            The <span className="font-bangla font-bold">কারিগর</span> Method™
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            From memorizing chemistry to understanding it. একটি সুশৃঙ্খল, চিত্রভিত্তিক ও প্রয়োগমুখী শিক্ষাদান পদ্ধতি—যা রসায়নের ভীতি দূর করে এনে দেয় দীর্ঘস্থায়ী উপলব্ধি।
          </p>
        </div>

        {/* 5-Step Process Ribbon */}
        <div className="relative mb-16">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-brand-ocean/20 via-brand-orange/40 to-brand-ocean/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-navy shadow-card-hover -translate-y-2'
                      : 'bg-[#F7F5EF]/70 hover:bg-white text-brand-navy border-brand-navy/10 hover:shadow-card hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-white/20 text-brand-orange' : 'bg-brand-navy/5 text-brand-muted'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-brand-ocean/10 text-brand-ocean'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold font-serif mb-1 flex items-baseline gap-2">
                      <span>{step.title}</span>
                      <span className={`text-sm font-bangla font-normal ${isSelected ? 'text-slate-300' : 'text-brand-muted'}`}>
                        ({step.titleBangla})
                      </span>
                    </h3>

                    {/* Short Description */}
                    <p
                      className={`text-xs font-bangla leading-relaxed mt-2 ${
                        isSelected ? 'text-slate-200' : 'text-brand-muted'
                      }`}
                    >
                      {step.shortDescBangla}
                    </p>
                  </div>

                  {/* Active Indicator Pin */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold">
                    <span className={isSelected ? 'text-brand-orange' : 'text-brand-ocean'}>
                      {step.tag}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-brand-navy/8 mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                <span className="text-xs font-mono font-bold text-brand-ocean uppercase tracking-wider">
                  Phase {steps[activeStep].num}: {steps[activeStep].title} ({steps[activeStep].titleBangla})
                </span>
              </div>
              <p className="text-base sm:text-lg text-brand-navy font-medium">
                {steps[activeStep].shortDesc}
              </p>
              <p className="text-sm text-brand-muted font-bangla leading-relaxed max-w-3xl">
                {steps[activeStep].details}
              </p>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs font-semibold hover:bg-brand-ocean transition-colors flex-shrink-0"
            >
              <span>See It In Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Before vs After Transformation Table */}
        <div className="bg-white rounded-3xl border border-brand-navy/10 overflow-hidden shadow-card">
          <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-serif font-semibold">
              The Transformation: Before vs. After কারিগর
            </h3>
            <span className="text-xs text-brand-orange font-mono font-medium">
              Real Impact
            </span>
          </div>

          <div className="divide-y divide-brand-navy/5">
            {beforeAfterComparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6 hover:bg-[#FAF8F5]/60 transition-colors">
                {/* Before */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase block mb-1">
                      Before
                    </span>
                    <p className="text-sm font-bangla text-brand-muted">
                      {item.beforeBangla}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 italic">
                      "{item.before}"
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="flex items-start gap-3 md:border-l md:border-brand-navy/10 md:pl-6">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block mb-1">
                      The কারিগর Way
                    </span>
                    <p className="text-sm font-bangla text-brand-navy font-medium">
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
