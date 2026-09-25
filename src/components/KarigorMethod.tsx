import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';
import { LabApparatusPipeline, type LabStage } from './LabApparatusPipeline';

export const KarigorMethod: React.FC = () => {
  const stages: LabStage[] = [
    {
      id: 'understand',
      num: '01',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      equipmentName: 'Separatory Funnel & Lower Flask',
      equipmentBangla: 'সেপারেটরি ফানেল ও গ্র্যাভিটি ড্রিপ',
      actionTag: 'Gravity Separation & Foundations',
      chemicalFormula: 'Phase Separation • ρ₁ ≠ ρ₂',
      shortDesc: 'Drip fundamental concepts systematically through gravity.',
      shortDescBangla: 'মহাকর্ষের নিয়মের মতো প্রতিটি ধারণার মূল স্তর আলাদা করে স্পষ্ট ভিত্তি গড়া।',
      details:
        'Separatory funnel uses density differences to separate phases cleanly under gravity. একইভাবে রসায়নের জটিল বিষয়গুলোকে অযথা মুখস্থ না করে মৌলিক কনসেপ্টগুলো সুশৃঙ্খলভাবে আলাদা করে আত্মস্থ করা হয়।',
      color: '#0284c7', // Sky Blue
      glowColor: '#38BDF8',
      liquidColor: '#0284c7',
    },
    {
      id: 'visualize',
      num: '02',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      equipmentName: 'Round Bottom Flask & Bunsen Burner',
      equipmentBangla: 'বয়েলিং ফ্লাস্ক, বুনসেন বার্নার ও বাষ্প',
      actionTag: 'Thermal Activation & Vapor Pressure',
      chemicalFormula: 'ΔH_vap • P_vap ↑ • sp³ Orbitals',
      shortDesc: 'Ignite curiosity and watch abstract ideas turn into visible vapor.',
      shortDescBangla: 'বুনসেন বার্নারের উত্তাপে বাষ্পের মতো প্রতিটি বিক্রিয়া ও অরবিটাল চোখের সামনে জীবন্ত দেখা।',
      details:
        'A glowing Bunsen burner supplies activation energy, sending purple vapor rising through the vertical tube due to heat and vapor pressure. ৩D ভিজ্যুয়ালাইজেশন ও অরবিটাল সিমুলেশনের মাধ্যমে পরমাণুর ভেতর ইলেকট্রনের নাচ ও জটিল জ্যামিতি মনের পর্দায় স্পষ্ট হয়ে ওঠে।',
      color: '#8b5cf6', // Royal Violet
      glowColor: '#C084FC',
      liquidColor: '#8b5cf6',
    },
    {
      id: 'connect',
      num: '03',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      equipmentName: 'Slanted Liebig Condenser & Jacket',
      equipmentBangla: 'লিবিগ কন্ডেন্সার ও ওয়াটার জ্যাকেট',
      actionTag: 'Phase Condensation & Inter-topic Bridge',
      chemicalFormula: 'Vapor → Liquid Drops • Organic ⇌ Physical',
      shortDesc: 'Cool abstract thoughts into structured knowledge through condensation.',
      shortDescBangla: 'কন্ডেন্সারের শীতল পানিতে বাষ্প ঘনীভূত হওয়ার মতো রসায়নের সব অধ্যায়ের মেলবন্ধন।',
      details:
        'The vapor travels down through a slanted Liebig condenser with a visible water cooling jacket, condensing into clear liquid drops. আলাদা আলাদা না পড়ে রসায়নের সব শাখাকে একটি সাধারণ সুতোয় গাঁথা, ঠিক যেভাবে কন্ডেন্সার বাষ্পকে ঘনীভূত করে তরলে রূপ দেয়।',
      color: '#0d9488', // Electric Teal
      glowColor: '#2DD4BF',
      liquidColor: '#0d9488',
    },
    {
      id: 'practice',
      num: '04',
      title: 'Practice',
      titleBangla: 'অনুশীলন',
      equipmentName: 'Open Glass Beaker & Falling Drops',
      equipmentBangla: 'খোলা বিকার ও ড্রপওয়াইজ সংগ্রহ',
      actionTag: 'Precision Collection & Ripple Effect',
      chemicalFormula: 'Continuous Collection • Zero Error',
      shortDesc: 'Every single drop counts towards mastering real problem solving.',
      shortDescBangla: 'বিকারে জমা হওয়া প্রতিটি নিখুঁত ফোঁটার মতো বোর্ড ও এডমিশন প্রশ্নের নির্ভুল সমাধান।',
      details:
        'The condensed liquid drops naturally fall downwards into an open glass beaker placed on the base surface, creating ripples with every drop. নিয়মিত প্র্যাকটিসে প্রতিটি ড্রপের মতো ছোট ছোট সমস্যা সমাধানের দক্ষতা পরীক্ষার হলে বড় সাফল্যের ঢেউ তৈরি করে।',
      color: '#f59e0b', // Amber Gold
      glowColor: '#FBBF24',
      liquidColor: '#f59e0b',
    },
    {
      id: 'master',
      num: '05',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      equipmentName: 'Volumetric Flask & Mechanical Vacuum Pump',
      equipmentBangla: 'ভলিউমেট্রিক ফ্লাস্ক ও ভ্যাকুয়াম পাম্প',
      actionTag: 'Vacuum Suction & Pure Crystallization',
      chemicalFormula: 'ΔP Suction → Pure Product [Top 1% Merit]',
      shortDesc: 'Vacuum suction extracts the purest understanding for top performance.',
      shortDescBangla: 'ভ্যাকুয়াম সাকশনে খাঁটি স্ফটিক ও দ্রবণ সংগ্রহের মতো বোর্ড ও এডমিশনে নিশ্চিত সেরা রেজাল্ট।',
      details:
        'A glass tube connects the liquid in the beaker upwards into a volumetric flask sealed with a 2-hole stopper and connected to a small mechanical vacuum pump. ভ্যাকুয়াম সাকশনের মাধ্যমে খাঁটি স্ফটিক ও সর্বোত্তম প্রস্তুতি অর্জন করে বোর্ড ও শীর্ষ এডমিশনে সর্বোচ্চ সাফল্য নিশ্চিত করা।',
      color: '#eab308', // Luminous Gold
      glowColor: '#FEF08A',
      liquidColor: '#eab308',
    },
  ];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Soft Chemistry Grid & Ambient Laboratory Glows */}
      <div className="absolute inset-0 bg-chem-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight">
            The <span className="text-brand-ocean font-bangla">কারিগর</span> Method
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-bangla max-w-3xl mx-auto leading-relaxed font-medium">
            তোমার রসায়ন পড়ার ধরণটা হওয়া উচিত ল্যাবরেটরির এমন একটি ধারাবাহিক রাসায়নিক বিক্রিয়ার মতো — যেখানে প্রতিটি ধাপই অত্যন্ত গুরুত্বপূর্ণ এবং প্রতিটি পদক্ষেপের সফল সমন্বয়েই অর্জিত হয় কাঙ্ক্ষিত পারদর্শিতা।
          </p>
        </div>

        {/* 1. CONTINUOUS CHEMISTRY LAB REACTION PIPELINE (2D Vector Flat Illustration - Prominent Hero) */}
        <div className="relative w-full max-w-6xl mx-auto mb-6 sm:mb-8">
          <LabApparatusPipeline />
        </div>

        {/* 2. THE 5-STEP METHOD FLOW (SPACIOUS & ELEGANT, ZERO SLIDEBAR) */}
        <div className="w-full max-w-5xl mx-auto mb-16">
          {/* Desktop & Tablet: 5 connected spacious cards with ample breathing room */}
          <div className="hidden sm:flex items-center justify-between gap-1.5 md:gap-2.5 lg:gap-3.5">
            {stages.map((st, idx) => (
              <React.Fragment key={st.id}>
                <div className="flex-1 bg-white border border-slate-200/90 rounded-2xl py-3.5 px-2 sm:px-3 lg:px-4 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:shadow-sm transition-all text-center flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: st.color }}
                    />
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {st.num}
                    </span>
                  </div>
                  <span className="font-sans font-bold text-brand-navy text-sm lg:text-base leading-tight">
                    {st.title}
                  </span>
                  <span className="font-bangla font-semibold text-xs lg:text-sm text-brand-ocean mt-0.5">
                    {st.titleBangla}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile: Clean, natural wrapped pills without cramming or scrollbar */}
          <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 max-w-sm mx-auto">
            {stages.map((st, idx) => (
              <React.Fragment key={st.id}>
                <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl px-3 py-2 shadow-xs">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: st.color }}
                  />
                  <span className="font-mono text-[11px] font-bold text-slate-400">
                    {st.num}
                  </span>
                  <span className="font-sans font-bold text-brand-navy text-xs">
                    {st.title}
                  </span>
                  <span className="font-bangla font-semibold text-xs text-brand-ocean">
                    ({st.titleBangla})
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. THE TRANSFORMATION: BEFORE VS AFTER CARDS */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-brand-navy tracking-tight">
              Before vs. After <span className="text-brand-ocean font-bangla">কারিগর</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-bangla mt-2 font-medium">
              অন্ধ মুখস্থের ভীতি কাটিয়ে প্রতিটি অধ্যায়ে গভীর আত্মবিশ্বাস ও স্থায়ী উপলব্ধি গড়ার রূপান্তর।
            </p>
          </div>

          {/* Luxury 3 Comparative Cards */}
          <div className="space-y-4 sm:space-y-5">
            {beforeAfterComparison.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] p-4 sm:p-6 hover:shadow-card-hover hover:border-slate-300 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-3.5 sm:gap-6">
                  {/* Before (Traditional) */}
                  <div className="bg-rose-50/50 border border-rose-100/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          Traditional Way
                        </span>
                        <span className="text-[10px] font-bangla text-rose-500 font-medium">
                          মুখস্থ ভিত্তিক
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-bangla text-slate-700 leading-relaxed font-medium">
                        {item.beforeBangla}
                      </p>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 italic mt-3 pt-2.5 border-t border-rose-100/80 font-serif">
                      "{item.before}"
                    </p>
                  </div>

                  {/* VS Bridge */}
                  <div className="flex lg:flex-col items-center justify-center my-[-2px] lg:my-0">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/90 shadow-xs flex items-center justify-center text-[11px] font-mono font-extrabold text-slate-500 shrink-0">
                      VS
                    </div>
                  </div>

                  {/* After (The কারিগর Way) */}
                  <div className="bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/40 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_12px_-3px_rgba(16,185,129,0.06)] flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-bl-full pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          The কারিগর Way
                        </span>
                        <span className="text-[10px] font-bangla text-emerald-700 font-semibold bg-emerald-100/80 px-2 py-0.5 rounded-md">
                          লজিক্যাল ও দৃশ্যমান
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-bangla text-brand-navy font-bold leading-relaxed">
                        {item.afterBangla}
                      </p>
                    </div>
                    <p className="text-[11px] sm:text-xs text-brand-ocean font-medium italic mt-3 pt-2.5 border-t border-emerald-100/80 font-serif">
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
