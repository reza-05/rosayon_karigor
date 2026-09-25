import React, { useState } from 'react';
import { ArrowRight, Check, X, FlaskConical, Sparkles } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';
import { LabApparatusPipeline, type LabStage } from './LabApparatusPipeline';

export const KarigorMethod: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: LabStage[] = [
    {
      id: 'understand',
      num: '01',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      equipmentName: 'Conical Flask (Erlenmeyer)',
      equipmentBangla: 'কনিক্যাল ফ্লাস্ক',
      actionTag: 'Conceptual Foundation',
      chemicalFormula: 'Reactants [A + B] → Activated Complex',
      shortDesc: 'Build a strong conceptual foundation.',
      shortDescBangla: 'অন্ধ মুখস্থের বিপরীতে বৈজ্ঞানিক যুক্তি ও কনসেপ্টের মূল ভিত্তি তৈরি।',
      details:
        'Instead of forcing reactions into memory, we explore why atoms react, why bonds form, and how thermodynamic tendencies drive reactions. রসায়ন অন্ধ মুখস্থ নয় — পরমাণুর ভেতরের মৌলিক আচরণ, ইলেকট্রন ক্লাউডের আকর্ষণ ও বিক্রিয়ার কারণ স্পষ্টভাবে বুঝে নেওয়া।',
      color: '#0284c7', // Sky Blue
      glowColor: '#38BDF8',
      liquidColor: '#0284c7',
    },
    {
      id: 'visualize',
      num: '02',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      equipmentName: 'Boiling Round Bottom Flask',
      equipmentBangla: 'গোলতলী ফ্লাস্ক ও বাষ্প',
      actionTag: '3D Spatial Modeling',
      chemicalFormula: 'ΔH_vap • sp³ Hybridization Shapes',
      shortDesc: 'Turn abstract ideas into clear mental models.',
      shortDescBangla: 'অরবিটাল ও অণুর ত্রিমাত্রিক আকার মনের পর্দায় স্পষ্ট দেখা।',
      details:
        '3D molecular animations, electron cloud projections, and visual maps transform abstract formulas into tangible intuitive pictures. সংকরায়ন ও জ্যামিতিক কাঠামো বাষ্পের মতো মনের পর্দায় স্পষ্ট ভেসে ওঠে — অণুর আকার আর মুখস্থ করতে হয় না।',
      color: '#8b5cf6', // Royal Violet
      glowColor: '#C084FC',
      liquidColor: '#8b5cf6',
    },
    {
      id: 'connect',
      num: '03',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      equipmentName: 'Liebig Condenser & Spiral',
      equipmentBangla: 'লিবিগ কন্ডেন্সার ও সেতুবন্ধন',
      actionTag: 'Holistic Synthesis',
      chemicalFormula: 'Organic ⇌ Inorganic ⇌ Physical',
      shortDesc: 'See the big picture across topics.',
      shortDescBangla: 'ভৌত, জৈব ও অজৈব রসায়নের ভেতর সেতুবন্ধন তৈরি করা।',
      details:
        'Periodic trends connect directly to organic acidity, electrochemistry explains reaction feasibility, and gas laws tie to thermodynamics. আলাদা আলাদা না পড়ে রসায়নের সব শাখাকে একটি সাধারণ সুতোয় গাঁথা, ঠিক যেভাবে কন্ডেন্সার বাষ্পকে ঘনীভূত করে তরলে রূপ দেয়।',
      color: '#0d9488', // Electric Teal
      glowColor: '#2DD4BF',
      liquidColor: '#0d9488',
    },
    {
      id: 'practice',
      num: '04',
      title: 'Practice',
      titleBangla: 'প্রয়োগ',
      equipmentName: 'Burette & Titration Beaker',
      equipmentBangla: 'ব্যুরেট ও টাইট্রেশন ড্রপার',
      actionTag: 'Precision Problem Solving',
      chemicalFormula: 'V₁S₁ = V₂S₂ • Titration Precision',
      shortDesc: 'Apply concepts through structured problem solving.',
      shortDescBangla: 'বোর্ড ও এডমিশন লেভেলের নতুন নতুন সৃজনশীল সমস্যা সমাধান।',
      details:
        'Tiered problem sets from foundational board questions to tricky BUET/Medical admissions, teaching step-by-step deconstruction. ব্যুরেট থেকে প্রতিটি নিখুঁত ফোঁটার মতো কঠিন ও ঘুরিয়ে আসা প্রশ্ন নির্ভুল সমাধানের মানসিকতা গড়ে তোলা।',
      color: '#f59e0b', // Amber Gold
      glowColor: '#FBBF24',
      liquidColor: '#f59e0b',
    },
    {
      id: 'analyze',
      num: '05',
      title: 'Analyze',
      titleBangla: 'বিশ্লেষণ',
      equipmentName: 'Separating Funnel & Filter',
      equipmentBangla: 'সেপারেটিং ফানেল ও ফিল্টারিং',
      actionTag: 'Weakness Filtration & Debugging',
      chemicalFormula: 'Extraction → Filtration → Zero Error',
      shortDesc: 'Filter out doubts, silly mistakes, and conceptual gaps.',
      shortDescBangla: 'ভুলভ্রান্তি ও কনফিউশন দূর করে নিখুঁত প্রস্তুতি নিশ্চিত করা।',
      details:
        'Separating funnel divides unwanted impurities from the pure compound. একইভাবে প্রতিটি মক টেস্ট ও প্র্যাকটিসে চিহ্নিত ভুলগুলো আলাদা করে ফিল্টার করা হয়, যাতে পরীক্ষার হলে কোনো সন্দেহ বা ভুলের অবকাশ না থাকে।',
      color: '#10b981', // Emerald Green
      glowColor: '#34D399',
      liquidColor: '#10b981',
    },
    {
      id: 'master',
      num: '06',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      equipmentName: 'Volumetric Flask & Crystals',
      equipmentBangla: 'ভলিউমেট্রিক ফ্লাস্ক ও স্ফটিক',
      actionTag: 'Peak Exam Performance & Octet',
      chemicalFormula: 'Pure Product [Top 1% Merit]',
      shortDesc: 'Gain confidence and perform better in exams.',
      shortDescBangla: 'পরীক্ষার হলে যেকোনো জটিল উদ্দীপকে সর্বোচ্চ আত্মবিশ্বাস।',
      details:
        'With speed hacks, dimensional cross-checks, and crystal-clear memory anchors, exam pressure converts into peak performance. পাত্রের খাঁটি স্ফটিকের মতো অর্জিত আত্মবিশ্বাস নিয়ে বোর্ড ও শীর্ষ এডমিশনে নিশ্চিত সেরা সাফল্য।',
      color: '#eab308', // Luminous Gold
      glowColor: '#FEF08A',
      liquidColor: '#eab308',
    },
  ];

  const active = stages[activeStage];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Soft Chemistry Grid & Ambient Laboratory Glows */}
      <div className="absolute inset-0 bg-chem-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-brand-ocean animate-pulse" />
            <span>LABORATORY SYNTHESIS • কারিগর মেথডলজি</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight">
            The <span className="text-brand-ocean font-bangla">কারিগর</span> Method™
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন অন্ধ মুখস্থের কোনো বিষয় নয় — ল্যাবরেটরির স্বয়ংক্রিয় রিঅ্যাকশন পাইপলাইনের মতো এটি একটি নিখুঁত সমন্বিত রূপান্তর। ৬টি ধারাবাহিক ধাপে গড়ে ওঠে রসায়নের স্থায়ী বুৎপত্তি ও পরীক্ষার সেরা সাফল্য।
          </p>
        </div>

        {/* 1. INTERACTIVE CHEMISTRY LAB REACTION PIPELINE (Animated SVG & Dripping Physics) */}
        <div className="relative w-full max-w-6xl mx-auto mb-10">
          <LabApparatusPipeline
            stages={stages}
            activeStage={activeStage}
            onSelectStage={setActiveStage}
          />
        </div>

        {/* 2. SELECTED STAGE DEEP DIVE INSPECTION CHAMBER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-14 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden transition-all duration-300">
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: `${active.color}15` }}
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="w-3 h-3 rounded-full animate-ping"
                  style={{ backgroundColor: active.color }}
                />
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                  style={{
                    backgroundColor: `${active.color}18`,
                    color: active.color,
                  }}
                >
                  Stage {active.num} • {active.equipmentName} ({active.equipmentBangla})
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {active.chemicalFormula}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-brand-navy flex items-center gap-2 flex-wrap">
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
