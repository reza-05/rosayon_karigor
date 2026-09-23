import React, { useState } from 'react';
import { BookOpen, Eye, Network, Edit3, Award, ArrowRight, Check, X, Atom, Orbit, Zap } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';

export const KarigorMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [flowView, setFlowView] = useState<'orbital' | 'chain'>('orbital');

  const steps = [
    {
      num: '01',
      symbol: 'Ud',
      orbital: '1s² Ground State',
      energyState: 'Foundation',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      icon: BookOpen,
      tag: 'No Rote Learning',
      shortDesc: 'Build a strong conceptual foundation.',
      shortDescBangla: 'অন্ধ মুখস্থের বিপরীতে বৈজ্ঞানিক যুক্তি ও কনসেপ্টের মূল ভিত্তি তৈরি।',
      details: 'Instead of forcing reactions into memory, we explore why atoms react, why bonds form, and how thermodynamic tendencies drive reactions.',
      color: '#0284c7', // Sky / Ocean
      gradient: 'from-sky-500 to-blue-600',
      x: 150,
      y: 200,
    },
    {
      num: '02',
      symbol: 'Vz',
      orbital: '2s² 2p¹ Spatial Shell',
      energyState: 'Visualization',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      icon: Eye,
      tag: 'Mental Models',
      shortDesc: 'Turn abstract ideas into clear mental models.',
      shortDescBangla: 'অরবিটাল ও অণুর ত্রিমাত্রিক আকার মনের পর্দায় স্পষ্ট দেখা।',
      details: '3D molecular animations, electron cloud projections, and visual maps transform abstract formulas into tangible intuitive pictures.',
      color: '#8b5cf6', // Violet
      gradient: 'from-violet-500 to-indigo-600',
      x: 310,
      y: 95,
    },
    {
      num: '03',
      symbol: 'Cn',
      orbital: '3s² 3p³ Resonance Bridge',
      energyState: 'Integration',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      icon: Network,
      tag: 'Big Picture',
      shortDesc: 'See the big picture across topics.',
      shortDescBangla: 'ভৌত, জৈব ও অজৈব রসায়নের ভেতর সেতুবন্ধন তৈরি করা।',
      details: 'Periodic trends connect directly to organic acidity, electrochemistry explains reaction feasibility, and gas laws tie to thermodynamics.',
      color: '#0d9488', // Teal / Emerald
      gradient: 'from-teal-500 to-emerald-600',
      x: 590,
      y: 95,
    },
    {
      num: '04',
      symbol: 'Pr',
      orbital: '4s² 3d² Kinetic Solving',
      energyState: 'Kinetics',
      title: 'Practice',
      titleBangla: 'প্রয়োগ',
      icon: Edit3,
      tag: 'Structured Solving',
      shortDesc: 'Apply concepts through structured problem solving.',
      shortDescBangla: 'বোর্ড ও এডমিশন লেভেলের নতুন নতুন সৃজনশীল সমস্যা সমাধান।',
      details: 'Tiered problem sets from foundational board questions to tricky BUET/Medical admissions, teaching step-by-step deconstruction.',
      color: '#f59e0b', // Amber / Orange
      gradient: 'from-amber-500 to-orange-600',
      x: 750,
      y: 200,
    },
    {
      num: '05',
      symbol: 'Ms',
      orbital: '5s² 5p⁶ Noble Mastery',
      energyState: 'Stable Octet',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      icon: Award,
      tag: 'Lasting Confidence',
      shortDesc: 'Gain confidence and perform better in exams.',
      shortDescBangla: 'পরীক্ষার হলে যেকোনো জটিল উদ্দীপকে সর্বোচ্চ আত্মবিশ্বাস।',
      details: 'With speed hacks, dimensional cross-checks, and crystal-clear memory anchors, exam pressure converts into peak performance.',
      color: '#10b981', // Emerald
      gradient: 'from-emerald-500 to-cyan-600',
      x: 450,
      y: 410,
    },
  ];

  const active = steps[activeStep];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Soft Atoms & Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Atom className="w-3.5 h-3.5 text-brand-ocean animate-spin-slow" />
            <span>ATOMIC PEDAGOGY • কারিগর মেথডলজি</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight">
            The <span className="text-brand-ocean font-bangla">কারিগর</span> Method™
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন অন্ধ মুখস্থের কোনো বিষয় নয় — পরমাণুর গঠনের মতো এটি একটি সমন্বিত, লজিক্যাল কাঠামো। ৫টি কোয়ান্টাম ধাপে গড়ে ওঠে রসায়নের স্থায়ী বুৎপত্তি।
          </p>

          {/* View Switcher: Orbital vs Chain */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-medium">
              <button
                type="button"
                onClick={() => setFlowView('orbital')}
                className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                  flowView === 'orbital'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>অরবিটাল অ্যাটম স্ট্রাকচার (Orbital View)</span>
              </button>
              <button
                type="button"
                onClick={() => setFlowView('chain')}
                className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                  flowView === 'chain'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <Network className="w-3.5 h-3.5" />
                <span>মলিকিউলার বন্ড ফ্লো (Chain View)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. ATOMIC ORBITAL FLOWCHART (SVG 3D Model) */}
        {flowView === 'orbital' && (
          <div className="relative mb-12 bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-[0_10px_35px_-8px_rgba(15,23,42,0.06)] overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-chem-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto">
              <svg
                viewBox="0 0 900 520"
                className="w-full h-auto select-none overflow-visible"
              >
                <defs>
                  {/* Gradients */}
                  <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.25" />
                    <stop offset="70%" stopColor="#0EA5E9" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id="bondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.7" />
                  </linearGradient>

                  {/* Filter for glow */}
                  <filter id="atomGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* --- 1. QUANTUM ORBITAL SHELLS (Bohr Ellipses) --- */}
                {/* Orbit 1: -28deg tilt */}
                <ellipse
                  cx="450"
                  cy="260"
                  rx="390"
                  ry="145"
                  transform="rotate(-28 450 260)"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  strokeOpacity="0.3"
                  className="animate-pulse"
                />

                {/* Orbit 2: +28deg tilt */}
                <ellipse
                  cx="450"
                  cy="260"
                  rx="390"
                  ry="145"
                  transform="rotate(28 450 260)"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  strokeOpacity="0.3"
                />

                {/* Orbit 3: Vertical 90deg tilt */}
                <ellipse
                  cx="450"
                  cy="260"
                  rx="340"
                  ry="120"
                  transform="rotate(90 450 260)"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  strokeOpacity="0.25"
                />

                {/* --- 2. COVALENT BOND PATHS CONNECTING STEPS 1->2->3->4->5 --- */}
                {/* Pathway 1 -> 2 */}
                <path
                  d="M 150 200 Q 220 130 310 95"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                {/* Pathway 2 -> 3 */}
                <path
                  d="M 310 95 Q 450 50 590 95"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                {/* Pathway 3 -> 4 */}
                <path
                  d="M 590 95 Q 680 130 750 200"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                {/* Pathway 4 -> 5 */}
                <path
                  d="M 750 200 Q 640 330 450 410"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />
                {/* Pathway 5 -> 1 */}
                <path
                  d="M 450 410 Q 260 330 150 200"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                />

                {/* --- 3. ACTIVE RESONANCE BEAM (Nucleus -> Active Node) --- */}
                <line
                  x1="450"
                  y1="260"
                  x2={active.x}
                  y2={active.y}
                  stroke={active.color}
                  strokeWidth="3"
                  strokeDasharray="5 5"
                  className="animate-pulse"
                  opacity="0.8"
                />

                {/* --- 4. CENTRAL ATOMIC NUCLEUS (কারিগর কোর) --- */}
                <g className="cursor-pointer" onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}>
                  {/* Outer Pulsing Wave */}
                  <circle cx="450" cy="260" r="85" fill="url(#nucleusGlow)" />
                  <circle
                    cx="450"
                    cy="260"
                    r="58"
                    fill="#0A2540"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    className="shadow-lg"
                  />
                  <circle
                    cx="450"
                    cy="260"
                    r="64"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                    className="animate-spin-slow"
                  />

                  {/* Core Proton & Neutron Simulation dots */}
                  <circle cx="440" cy="252" r="5" fill="#F59E0B" opacity="0.9" />
                  <circle cx="458" cy="250" r="5.5" fill="#38BDF8" opacity="0.9" />
                  <circle cx="450" cy="265" r="4.5" fill="#10B981" opacity="0.9" />

                  {/* Core Text Label */}
                  <text
                    x="450"
                    y="288"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontFamily="inherit"
                    fontWeight="700"
                    letterSpacing="0.05em"
                  >
                    কারিগর CORE
                  </text>
                  <text
                    x="450"
                    y="299"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="8.5"
                    fontFamily="monospace"
                  >
                    Z=5 • PEDAGOGY
                  </text>
                </g>

                {/* --- 5. THE 5 ATOMIC STATIONS (VALENCE NODES) --- */}
                {steps.map((st, i) => {
                  const isSelected = activeStep === i;
                  return (
                    <g
                      key={st.num}
                      onClick={() => setActiveStep(i)}
                      className="cursor-pointer transition-transform duration-300 group"
                      transform={`translate(${st.x}, ${st.y})`}
                    >
                      {/* Orbital Ring Around Station */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 44 : 36}
                        fill="none"
                        stroke={st.color}
                        strokeWidth={isSelected ? '2' : '1.2'}
                        strokeDasharray="3 4"
                        opacity={isSelected ? '0.9' : '0.4'}
                      />

                      {/* Orbiting Sub-Electron Dot */}
                      <circle
                        cx={isSelected ? 44 : 36}
                        cy="0"
                        r={isSelected ? 4 : 3}
                        fill={st.color}
                        className={isSelected ? 'animate-ping' : ''}
                      />

                      {/* Main Node Shell Circle */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 34 : 28}
                        fill={isSelected ? '#0A2540' : '#FFFFFF'}
                        stroke={st.color}
                        strokeWidth={isSelected ? '3' : '2'}
                        filter={isSelected ? 'url(#atomGlow)' : undefined}
                      />

                      {/* Chemical Element Symbol (e.g. Ud, Vz, Cn, Pr, Ms) */}
                      <text
                        x="0"
                        y="-4"
                        textAnchor="middle"
                        fill={isSelected ? '#F8FAFC' : '#0F172A'}
                        fontSize="14"
                        fontWeight="800"
                        fontFamily="monospace"
                      >
                        {st.symbol}
                      </text>

                      {/* Atomic Number Subscript */}
                      <text
                        x="14"
                        y="-8"
                        textAnchor="start"
                        fill={st.color}
                        fontSize="9"
                        fontWeight="700"
                        fontFamily="monospace"
                      >
                        {st.num}
                      </text>

                      {/* Bengali Title below node */}
                      <text
                        x="0"
                        y="12"
                        textAnchor="middle"
                        fill={isSelected ? '#38BDF8' : '#64748B'}
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="inherit"
                      >
                        {st.titleBangla}
                      </text>

                      {/* Outer Card Label Plaque */}
                      <g transform="translate(0, 48)">
                        <rect
                          x="-65"
                          y="0"
                          width="130"
                          height="24"
                          rx="12"
                          fill={isSelected ? st.color : '#FFFFFF'}
                          stroke={isSelected ? st.color : '#E2E8F0'}
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y="15"
                          textAnchor="middle"
                          fill={isSelected ? '#FFFFFF' : '#1E293B'}
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="inherit"
                        >
                          {st.title}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Instruction Cue */}
            <div className="mt-2 text-center text-xs text-slate-500 font-bangla flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>পরমাণুর প্রতিটি অরবিটাল বা ধাপে ক্লিক করে বিস্তারিত দেখুন</span>
            </div>
          </div>
        )}

        {/* 2. MOLECULAR BOND REACTION CHAIN (Atomic Node Cards) */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-ocean/40 shadow-xl ring-2 ring-brand-ocean/30 -translate-y-2'
                      : 'bg-white hover:bg-slate-50/80 text-brand-navy border-slate-200/85 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Subtle Atomic Orbit Ring in Card Background */}
                  <div
                    className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full border border-dashed transition-all pointer-events-none ${
                      isSelected
                        ? 'border-brand-ocean/30 animate-[spin_20s_linear_infinite]'
                        : 'border-slate-200 group-hover:border-slate-300'
                    }`}
                  />

                  <div>
                    {/* Header: Atomic Element Tile & Orbital Icon */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Chemical Element Symbol Tile */}
                      <div
                        className={`px-2.5 py-1 rounded-xl font-mono text-xs font-bold border transition-colors ${
                          isSelected
                            ? 'bg-white/10 text-cyan-300 border-white/20'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span className="text-[10px] text-slate-400 mr-1">{step.num}</span>
                        <span>{step.symbol}</span>
                      </div>

                      {/* Circular Orbital Icon Badge */}
                      <div className="relative">
                        {/* Orbiting dot around icon */}
                        <div
                          className={`absolute -inset-1 rounded-full border border-dashed pointer-events-none ${
                            isSelected
                              ? 'border-brand-orange animate-[spin_8s_linear_infinite]'
                              : 'border-slate-200'
                          }`}
                        />
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-brand-ocean text-white shadow-md' : 'bg-brand-ocean/10 text-brand-ocean'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Bangla Name */}
                    <h3 className="text-xl font-bold font-sans mb-1 flex items-baseline gap-2">
                      <span>{step.title}</span>
                      <span
                        className={`text-sm font-bangla font-normal ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        ({step.titleBangla})
                      </span>
                    </h3>

                    {/* Quantum Subshell Tag */}
                    <div
                      className={`text-[11px] font-mono mb-2.5 ${
                        isSelected ? 'text-cyan-300' : 'text-brand-ocean font-medium'
                      }`}
                    >
                      {step.orbital}
                    </div>

                    {/* Short Description */}
                    <p
                      className={`text-xs font-bangla leading-relaxed ${
                        isSelected ? 'text-slate-200' : 'text-slate-600'
                      }`}
                    >
                      {step.shortDescBangla}
                    </p>
                  </div>

                  {/* Active Indicator & Action */}
                  <div
                    className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs font-semibold ${
                      isSelected ? 'border-white/15 text-brand-orange' : 'border-slate-100 text-brand-ocean'
                    }`}
                  >
                    <span>{step.tag}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. SELECTED STEP DEEP DIVE INSPECTION CHAMBER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-16 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-ocean animate-ping" />
                <span className="px-2.5 py-0.5 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-mono font-bold tracking-wider uppercase">
                  Stage {active.num} • {active.symbol} ({active.orbital})
                </span>
                <span className="text-xs font-bold text-slate-500 font-sans">
                  {active.energyState}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-brand-navy">
                {active.title} ({active.titleBangla}) — {active.shortDesc}
              </h3>

              <p className="text-sm text-slate-600 font-bangla leading-relaxed max-w-3xl">
                {active.details}
              </p>
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-ocean transition-all shadow-sm active:scale-95 flex-shrink-0"
            >
              <span>See It In Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4. BEFORE VS AFTER TRANSFORMATION TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card">
          <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-sans font-bold flex items-center gap-2">
              <Atom className="w-5 h-5 text-brand-orange" />
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
                className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6 hover:bg-slate-50/70 transition-colors"
              >
                {/* Before */}
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase block mb-1">
                      Traditional Way (মুখস্থ ভিত্তিক)
                    </span>
                    <p className="text-sm font-bangla text-slate-600">
                      {item.beforeBangla}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 italic">
                      "{item.before}"
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="flex items-start gap-3.5 md:border-l md:border-slate-100 md:pl-6">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block mb-1">
                      The কারিগর Way (লজিক্যাল ও দৃশ্যমান)
                    </span>
                    <p className="text-sm font-bangla text-brand-navy font-semibold">
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
