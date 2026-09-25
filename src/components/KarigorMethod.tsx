import React from 'react';
import { Check, X, FlaskConical } from 'lucide-react';
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

        {/* 1. CONTINUOUS CHEMISTRY LAB REACTION PIPELINE (2D Vector Flat Illustration) */}
        <div className="relative w-full max-w-6xl mx-auto mb-10">
          <LabApparatusPipeline />
        </div>

        {/* 2. THE 5-STEP METHOD FRAMEWORK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {stages.map((st) => (
            <div
              key={st.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: st.color }}
                  />
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {st.num}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-brand-navy text-base">
                  {st.title}
                </h3>
                <span className="inline-block font-bangla font-semibold text-xs text-brand-ocean mb-2">
                  {st.titleBangla}
                </span>
                <p className="text-xs text-slate-600 font-bangla leading-relaxed">
                  {st.shortDescBangla}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. THE TRANSFORMATION: BEFORE VS AFTER TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card">
          <div className="bg-brand-navy text-white px-5 sm:px-6 py-4 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-sans font-bold flex items-center gap-2">
              <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
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
