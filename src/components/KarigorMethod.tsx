import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Eye, Network, Edit3, Award, ArrowRight, Check, X, Atom } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';

export const KarigorMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Interactive 3D Gyroscopic Mouse Tilt & Drag Rotation State
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const tiltY = ((e.clientX - cx) / (rect.width / 2)) * 12; // tilt around Y axis
    const tiltX = -((e.clientY - cy) / (rect.height / 2)) * 10; // tilt around X axis
    setRotation({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotation({ x: 0, y: 0 });
    }
  };

  // Pointer drag to spin the 3D atom
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag if not clicking directly on a button/node
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: rotation.x,
      rotY: rotation.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setRotation({
      x: dragStartRef.current.rotX - dy * 0.25,
      y: dragStartRef.current.rotY + dx * 0.25,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Ambient gentle breathing rotation when idle
  useEffect(() => {
    let animId: number;
    let t = 0;
    const loop = () => {
      t += 0.015;
      if (!isDragging && rotation.x === 0 && rotation.y === 0) {
        // subtle ambient sway
        const swayX = Math.sin(t * 0.5) * 2.5;
        const swayY = Math.cos(t * 0.4) * 3.5;
        setRotation({ x: swayX, y: swayY });
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, rotation]);

  const steps = [
    {
      num: '01',
      symbol: 'Ud',
      orbital: '1s² Ground State',
      energyState: 'Conceptual Foundation',
      title: 'Understand',
      titleBangla: 'অনুধাবন',
      icon: BookOpen,
      tag: 'No Rote Learning',
      shortDesc: 'Build a strong conceptual foundation.',
      shortDescBangla: 'অন্ধ মুখস্থের বিপরীতে বৈজ্ঞানিক যুক্তি ও কনসেপ্টের মূল ভিত্তি তৈরি।',
      details: 'Instead of forcing reactions into memory, we explore why atoms react, why bonds form, and how thermodynamic tendencies drive reactions. রসায়ন অন্ধ মুখস্থ নয় — পরমাণুর ভেতরের মৌলিক আচরণ বুঝে নেওয়া।',
      color: '#0284c7', // Sky / Ocean
      gradient: 'from-sky-500 to-blue-600',
      x: 160,
      y: 205,
    },
    {
      num: '02',
      symbol: 'Vz',
      orbital: '2s² 2p¹ Spatial Shell',
      energyState: '3D Mental Projection',
      title: 'Visualize',
      titleBangla: 'ভিজ্যুয়ালাইজ',
      icon: Eye,
      tag: 'Mental Models',
      shortDesc: 'Turn abstract ideas into clear mental models.',
      shortDescBangla: 'অরবিটাল ও অণুর ত্রিমাত্রিক আকার মনের পর্দায় স্পষ্ট দেখা।',
      details: '3D molecular animations, electron cloud projections, and visual maps transform abstract formulas into tangible intuitive pictures. সংকরায়ন ও জ্যামিতিক কাঠামো মনের পর্দায় স্পষ্ট ভেসে ওঠে।',
      color: '#8b5cf6', // Violet
      gradient: 'from-violet-500 to-indigo-600',
      x: 320,
      y: 100,
    },
    {
      num: '03',
      symbol: 'Cn',
      orbital: '3s² 3p³ Resonance Bridge',
      energyState: 'Holistic Synthesis',
      title: 'Connect',
      titleBangla: 'সংযোগ',
      icon: Network,
      tag: 'Big Picture',
      shortDesc: 'See the big picture across topics.',
      shortDescBangla: 'ভৌত, জৈব ও অজৈব রসায়নের ভেতর সেতুবন্ধন তৈরি করা।',
      details: 'Periodic trends connect directly to organic acidity, electrochemistry explains reaction feasibility, and gas laws tie to thermodynamics. আলাদা আলাদা না পড়ে রসায়নের সব শাখাকে একটি সাধারণ সুতোয় গাঁথা।',
      color: '#0d9488', // Teal / Emerald
      gradient: 'from-teal-500 to-emerald-600',
      x: 620,
      y: 100,
    },
    {
      num: '04',
      symbol: 'Pr',
      orbital: '4s² 3d² Kinetic Solving',
      energyState: 'Structured Application',
      title: 'Practice',
      titleBangla: 'প্রয়োগ',
      icon: Edit3,
      tag: 'Structured Solving',
      shortDesc: 'Apply concepts through structured problem solving.',
      shortDescBangla: 'বোর্ড ও এডমিশন লেভেলের নতুন নতুন সৃজনশীল সমস্যা সমাধান।',
      details: 'Tiered problem sets from foundational board questions to tricky BUET/Medical admissions, teaching step-by-step deconstruction. কঠিন ও ঘুরিয়ে আসা প্রশ্ন সহজে ভেঙে সমাধান করার মানসিকতা গড়ে তোলা।',
      color: '#f59e0b', // Amber / Orange
      gradient: 'from-amber-500 to-orange-600',
      x: 780,
      y: 205,
    },
    {
      num: '05',
      symbol: 'Ms',
      orbital: '5s² 5p⁶ Noble Mastery',
      energyState: 'Exam Mastery & Peak Octet',
      title: 'Master',
      titleBangla: 'পারদর্শিতা',
      icon: Award,
      tag: 'Lasting Confidence',
      shortDesc: 'Gain confidence and perform better in exams.',
      shortDescBangla: 'পরীক্ষার হলে যেকোনো জটিল উদ্দীপকে সর্বোচ্চ আত্মবিশ্বাস।',
      details: 'With speed hacks, dimensional cross-checks, and crystal-clear memory anchors, exam pressure converts into peak performance. যেকোনো জটিল উদ্দীপকেও নির্ভুল ও দ্রুততম সমাধান।',
      color: '#10b981', // Emerald
      gradient: 'from-emerald-500 to-cyan-600',
      x: 470,
      y: 430,
    },
  ];

  const active = steps[activeStep];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* Background Soft Atoms & Chemistry Grid Matrix */}
      <div className="absolute inset-0 bg-chem-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Atom className="w-3.5 h-3.5 text-brand-ocean animate-spin-slow" />
            <span>ATOMIC PEDAGOGY • কারিগর মেথডলজি</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight">
            The <span className="text-brand-ocean font-bangla">কারিগর</span> Method™
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন অন্ধ মুখস্থের কোনো বিষয় নয় — পরমাণুর গঠনের মতো এটি একটি সমন্বিত, লজিক্যাল কাঠামো। ৫টি কোয়ান্টাম ধাপে গড়ে ওঠে রসায়নের স্থায়ী বুৎপত্তি।
          </p>
        </div>

        {/* 1. THE ATOMIC ORBITAL FLOWCHART (Interactive 3D Rotatable Structure) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative w-full max-w-5xl mx-auto mb-12 select-none cursor-grab active:cursor-grabbing transition-transform duration-300"
          style={{
            perspective: '1200px',
          }}
        >
          <div
            className="w-full transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <svg
              viewBox="0 0 940 540"
              className="w-full h-auto overflow-visible select-none drop-shadow-sm"
            >
              <defs>
                {/* Nucleus Gradients */}
                <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#0EA5E9" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="bondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                </linearGradient>

                {/* Soft Filter Glow */}
                <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* --- 1. QUANTUM BOHR ORBITAL ELLIPSES --- */}
              {/* Orbital Ellipse 1: -28deg tilt */}
              <ellipse
                cx="470"
                cy="270"
                rx="410"
                ry="155"
                transform="rotate(-28 470 270)"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.6"
                strokeDasharray="6 8"
                strokeOpacity="0.35"
                className="animate-pulse"
              />

              {/* Orbital Ellipse 2: +28deg tilt */}
              <ellipse
                cx="470"
                cy="270"
                rx="410"
                ry="155"
                transform="rotate(28 470 270)"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.6"
                strokeDasharray="6 8"
                strokeOpacity="0.35"
              />

              {/* Orbital Ellipse 3: Vertical 90deg tilt */}
              <ellipse
                cx="470"
                cy="270"
                rx="350"
                ry="125"
                transform="rotate(90 470 270)"
                fill="none"
                stroke="#0d9488"
                strokeWidth="1.6"
                strokeDasharray="5 7"
                strokeOpacity="0.3"
              />

              {/* --- 2. COVALENT REACTION BONDS CONNECTING STEPS 1->2->3->4->5 --- */}
              {/* Path 1 -> 2 */}
              <path
                d="M 160 205 Q 230 135 320 100"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
              />
              {/* Path 2 -> 3 */}
              <path
                d="M 320 100 Q 470 55 620 100"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
              />
              {/* Path 3 -> 4 */}
              <path
                d="M 620 100 Q 710 135 780 205"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
              />
              {/* Path 4 -> 5 */}
              <path
                d="M 780 205 Q 670 345 470 430"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
              />
              {/* Path 5 -> 1 */}
              <path
                d="M 470 430 Q 275 345 160 205"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeOpacity="0.55"
              />

              {/* --- 3. ACTIVE RESONANCE LASER BEAM (Nucleus -> Active Station) --- */}
              <line
                x1="470"
                y1="270"
                x2={active.x}
                y2={active.y}
                stroke={active.color}
                strokeWidth="3.5"
                strokeDasharray="6 6"
                className="animate-pulse"
                opacity="0.85"
              />

              {/* --- 4. CENTRAL ATOMIC NUCLEUS (কারিগর কোর) --- */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              >
                {/* Outer Wave Aura */}
                <circle cx="470" cy="270" r="90" fill="url(#nucleusGlow)" />
                <circle
                  cx="470"
                  cy="270"
                  r="60"
                  fill="#0A2540"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  className="shadow-xl"
                />
                <circle
                  cx="470"
                  cy="270"
                  r="68"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.7"
                  className="animate-spin-slow"
                />

                {/* Proton & Neutron Simulation Particles */}
                <circle cx="458" cy="260" r="5.5" fill="#F59E0B" opacity="0.95" />
                <circle cx="478" cy="258" r="6" fill="#38BDF8" opacity="0.95" />
                <circle cx="470" cy="275" r="5" fill="#10B981" opacity="0.95" />
                <circle cx="482" cy="274" r="4.5" fill="#8B5CF6" opacity="0.95" />

                {/* Nucleus Core Typography */}
                <text
                  x="470"
                  y="298"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="800"
                  fontFamily="inherit"
                  letterSpacing="0.06em"
                >
                  কারিগর CORE
                </text>
                <text
                  x="470"
                  y="310"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="600"
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStep(i);
                    }}
                    className="cursor-pointer transition-all duration-300"
                    transform={`translate(${st.x}, ${st.y})`}
                  >
                    {/* Concentric Orbital Rings */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 48 : 38}
                      fill="none"
                      stroke={st.color}
                      strokeWidth={isSelected ? '2.2' : '1.3'}
                      strokeDasharray="4 4"
                      opacity={isSelected ? '0.95' : '0.45'}
                    />

                    {/* Orbiting Sub-Electron Particle */}
                    <circle
                      cx={isSelected ? 48 : 38}
                      cy="0"
                      r={isSelected ? 4.5 : 3.5}
                      fill={st.color}
                      className={isSelected ? 'animate-ping' : ''}
                    />

                    {/* Main Node Core Circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 36 : 30}
                      fill={isSelected ? '#0A2540' : '#FFFFFF'}
                      stroke={st.color}
                      strokeWidth={isSelected ? '3.5' : '2'}
                      filter={isSelected ? 'url(#nodeGlow)' : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Chemical Element Symbol (Ud, Vz, Cn, Pr, Ms) */}
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill={isSelected ? '#F8FAFC' : '#0F172A'}
                      fontSize="15"
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
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="monospace"
                    >
                      {st.num}
                    </text>

                    {/* Bengali Step Name */}
                    <text
                      x="0"
                      y="14"
                      textAnchor="middle"
                      fill={isSelected ? '#38BDF8' : '#64748B'}
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="inherit"
                    >
                      {st.titleBangla}
                    </text>

                    {/* Outer Step Name Pill Plaque */}
                    <g transform="translate(0, 52)">
                      <rect
                        x="-70"
                        y="0"
                        width="140"
                        height="26"
                        rx="13"
                        fill={isSelected ? st.color : '#FFFFFF'}
                        stroke={isSelected ? st.color : '#E2E8F0'}
                        strokeWidth="1.5"
                        className="shadow-sm"
                      />
                      <text
                        x="0"
                        y="17"
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#1E293B'}
                        fontSize="12"
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
        </div>

        {/* Mobile/Tablet Touch Station Strip (Quick Step Tapping on Small Screens) */}
        <div className="flex lg:hidden items-center justify-center gap-2 flex-wrap mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono transition-all ${
                activeStep === idx
                  ? 'bg-brand-navy text-white shadow-sm ring-2 ring-brand-ocean/40'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{step.num}</span> {step.title}
            </button>
          ))}
        </div>

        {/* 2. SELECTED STEP DEEP DIVE INSPECTION CHAMBER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-14 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-ocean animate-ping" />
                <span className="px-3 py-1 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-mono font-bold tracking-wider uppercase">
                  Stage {active.num} • {active.symbol} ({active.orbital})
                </span>
                <span className="text-xs font-bold text-slate-500 font-sans">
                  {active.energyState}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-brand-navy">
                {active.title} ({active.titleBangla}) — {active.shortDesc}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-bangla leading-relaxed max-w-3xl">
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
