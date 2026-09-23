import { useState } from 'react';
import { Sparkles, Atom, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ElementInfo {
  symbol: string;
  name: string;
  nameBangla: string;
  atomicNum: number;
  mass: string;
  group: number;
  period: number;
  category: string;
  electronConfig: string;
  electronegativity: number;
  valency: string;
  boardInsight: string;
  color: string;
}

const elementsList: ElementInfo[] = [
  {
    symbol: 'C',
    name: 'Carbon',
    nameBangla: 'কার্বন',
    atomicNum: 6,
    mass: '12.011',
    group: 14,
    period: 2,
    category: 'Nonmetal (Organic Backbone)',
    electronConfig: '1s² 2s² 2p²',
    electronegativity: 2.55,
    valency: '4 (Tetravalent)',
    boardInsight: 'ক্যাটেনেশন ধর্ম ও sp, sp², sp³ সংকরণের কারণে লক্ষ লক্ষ জৈব যৌগ গঠন করতে পারে।',
    color: 'from-blue-600 to-indigo-900',
  },
  {
    symbol: 'O',
    name: 'Oxygen',
    nameBangla: 'অক্সিজেন',
    atomicNum: 8,
    mass: '15.999',
    group: 16,
    period: 2,
    category: 'Chalcogen',
    electronConfig: '1s² 2s² 2p⁴',
    electronegativity: 3.44,
    valency: '2',
    boardInsight: 'উচ্চ তড়িৎ ঋণাত্মকতার কারণে পানিতে তীব্র হাইড্রোজেন বন্ধন তৈরি হয়, ফলে পানির স্ফুটনাঙ্ক ১০০°C।',
    color: 'from-amber-500 to-orange-700',
  },
  {
    symbol: 'N',
    name: 'Nitrogen',
    nameBangla: 'নাইট্রোজেন',
    atomicNum: 7,
    mass: '14.007',
    group: 15,
    period: 2,
    category: 'Pnictogen',
    electronConfig: '1s² 2s² 2p³',
    electronegativity: 3.04,
    valency: '3, 5',
    boardInsight: 'N₂ অণুতে ত্রি-বন্ধন (N≡N) থাকায় বন্ধন শক্তি ৯৪৫ kJ/mol, তাই সাধারণ তাপমাত্রায় এটি নিষ্ক্রিয় গ্যাসের মতো আচরণ করে।',
    color: 'from-cyan-600 to-blue-800',
  },
  {
    symbol: 'H',
    name: 'Hydrogen',
    nameBangla: 'হাইড্রোজেন',
    atomicNum: 1,
    mass: '1.008',
    group: 1,
    period: 1,
    category: 'Reactive Nonmetal',
    electronConfig: '1s¹',
    electronegativity: 2.20,
    valency: '1',
    boardInsight: 'পর্যায় সারণিতে ক্ষার ধাতু নাকি হ্যালোজেনের সাথে বসবে—এই দ্বৈত চরিত্র বোর্ড পরীক্ষার সবচেয়ে জনপ্রিয় সিকিউ প্রশ্ন।',
    color: 'from-teal-500 to-emerald-800',
  },
  {
    symbol: 'Cu',
    name: 'Copper',
    nameBangla: 'কপার',
    atomicNum: 29,
    mass: '63.546',
    group: 11,
    period: 4,
    category: 'Transition Metal (অবস্থান্তর ধাতু)',
    electronConfig: '[Ar] 3d¹⁰ 4s¹',
    electronegativity: 1.90,
    valency: '1, 2',
    boardInsight: 'আউফবাউ নিয়মের ব্যতিক্রম! পূর্ণ d¹⁰ অরবিটালের অধিক স্থিতিশীলতার জন্য 4s² 3d⁹ না হয়ে 3d¹⁰ 4s¹ হয়।',
    color: 'from-amber-600 to-yellow-900',
  },
  {
    symbol: 'Fe',
    name: 'Iron',
    nameBangla: 'আয়রন',
    atomicNum: 26,
    mass: '55.845',
    group: 8,
    period: 4,
    category: 'Transition Metal',
    electronConfig: '[Ar] 3d⁶ 4s²',
    electronegativity: 1.83,
    valency: '2, 3',
    boardInsight: 'Fe²⁺ (3d⁶) এর তুলনায় Fe³⁺ (3d⁵) অর্ধপূর্ণ অরবিটালের জন্য অধিক স্থায়ী। এটি জটিল আয়ন ও রঙিন যৌগ তৈরি করে।',
    color: 'from-slate-600 to-slate-900',
  },
  {
    symbol: 'Cl',
    name: 'Chlorine',
    nameBangla: 'ক্লোরিন',
    atomicNum: 17,
    mass: '35.45',
    group: 17,
    period: 3,
    category: 'Halogen',
    electronConfig: '[Ne] 3s² 3p⁵',
    electronegativity: 3.16,
    valency: '1',
    boardInsight: 'ফ্লোরিনের তড়িৎ ঋণাত্মকতা বেশি হলেও ক্লোরিনের ইলেকট্রন আসক্তি বেশি—বোর্ড ও এডমিশনের মাস্ট-নো কনসেপ্ট!',
    color: 'from-emerald-600 to-green-900',
  },
];

export const ElementInspector = () => {
  const [selectedElement, setSelectedElement] = useState<ElementInfo>(elementsList[0]);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-navy/10 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>INTERACTIVE CHEMISTRY PLAYGROUND</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-brand-navy">
              Element Quantum Inspector
            </h3>
            <p className="text-xs sm:text-sm font-bangla text-brand-muted">
              পর্যায় সারণির গুরুত্বপূর্ণ মৌলগুলোর ইলেকট্রন বিন্যাস, ধর্ম ও বোর্ড পরীক্ষার স্পেশাল হ্যাকস জানুন:
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-brand-ocean bg-white px-3 py-1.5 rounded-xl border border-brand-navy/10 shadow-sm self-start sm:self-auto">
            <Atom className="w-4 h-4 text-brand-orange" />
            <span>NCTB & Admission High-Yield</span>
          </div>
        </div>

        {/* Element Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {elementsList.map((el) => (
            <button
              type="button"
              key={el.symbol}
              onClick={() => setSelectedElement(el)}
              className={`px-4 py-2.5 rounded-2xl flex items-center gap-2.5 transition-all text-left flex-shrink-0 ${
                selectedElement.symbol === el.symbol
                  ? 'bg-brand-navy text-white shadow-card-hover scale-105'
                  : 'bg-white hover:bg-brand-navy/5 text-brand-navy border border-brand-navy/10'
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-brand-orange/20 text-brand-orange font-bold font-serif flex items-center justify-center text-sm">
                {el.symbol}
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">{el.name}</div>
                <div className="text-[10px] font-bangla opacity-70 leading-tight">{el.nameBangla}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Element Detailed Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-navy/8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Big Element Tile */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-ocean to-[#06182E] text-white text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 text-[11px] font-mono text-brand-orange font-bold">
              Z = {selectedElement.atomicNum}
            </div>
            <div className="absolute top-3 right-3 text-[11px] font-mono text-slate-300">
              {selectedElement.mass} u
            </div>

            <div className="text-6xl sm:text-7xl font-serif font-bold my-4 text-brand-orange drop-shadow-md">
              {selectedElement.symbol}
            </div>

            <div className="text-xl font-serif font-bold text-white">
              {selectedElement.name}
            </div>
            <div className="text-xs font-bangla text-slate-300 mb-3">
              {selectedElement.nameBangla}
            </div>

            <div className="text-[11px] px-3 py-1 rounded-full bg-white/10 text-brand-orange font-mono">
              Group {selectedElement.group} • Period {selectedElement.period}
            </div>
          </div>

          {/* Properties & Exam Hacks */}
          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] uppercase font-mono text-brand-muted tracking-wider block">
                  Configuration
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-brand-navy">
                  {selectedElement.electronConfig}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] uppercase font-mono text-brand-muted tracking-wider block">
                  Electronegativity
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-brand-ocean">
                  {selectedElement.electronegativity} (Pauling)
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-mono text-brand-muted tracking-wider block">
                  Valency (যোজ্যতা)
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-brand-orange">
                  {selectedElement.valency}
                </span>
              </div>
            </div>

            {/* Board / Admission Exam Insight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 font-mono uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-brand-orange" />
                <span>Board & Admission High-Yield Hack</span>
              </div>
              <p className="text-xs sm:text-sm font-bangla text-brand-navy leading-relaxed">
                {selectedElement.boardInsight}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-brand-muted pt-2 border-t border-brand-navy/5">
              <div className="flex items-center gap-1.5 font-bangla">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>কারিগর স্পেশাল কনসেপ্ট মেমোরি কার্ড</span>
              </div>
              <span className="font-mono text-[11px] text-brand-ocean font-semibold">
                Class 9 - Admission Masterclass
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
