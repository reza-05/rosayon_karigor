import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Eye, Network, Edit3, Award, ArrowRight, Check, X, Atom } from 'lucide-react';
import { beforeAfterComparison } from '../data/testimonialsData';

export const KarigorMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Atomic Orbital Canvas Logic with Mouse Drag & Rotation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // 3D Rotation State
    let rotX = 0.25;
    let rotY = 0.45;
    let velX = 0;
    let velY = 0.003;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velX = 0;
      velY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      rotY += dx * 0.006;
      rotX -= dy * 0.006;
      velY = dx * 0.006;
      velX = -dy * 0.006;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }

    // 3D Math Helper
    const rotatePoint = (x: number, y: number, z: number, rx: number, ry: number) => {
      // Rotate around X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      return { x: x2, y: y1, z: z2 };
    };

    // 4 Quantum Orbital Ring Definitions
    const rings = [
      { radiusX: 280, radiusY: 130, tiltX: 0.55, tiltY: 0.2, speed: 0.018, color: 'rgba(2, 132, 199, 0.4)' },
      { radiusX: 330, radiusY: 140, tiltX: -0.65, tiltY: 0.8, speed: 0.014, color: 'rgba(139, 92, 246, 0.35)' },
      { radiusX: 380, radiusY: 150, tiltX: 0.3, tiltY: -0.9, speed: 0.011, color: 'rgba(13, 148, 136, 0.35)' },
      { radiusX: 420, radiusY: 160, tiltX: 1.1, tiltY: 0.35, speed: 0.009, color: 'rgba(245, 158, 11, 0.35)' },
    ];

    let electronAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.35; // Positioned behind the cards

      // Idle Rotation & Inertia Damping
      if (!isDragging) {
        rotY += velY;
        rotX += velX;
        velY = velY * 0.96 + 0.002 * 0.04; // Smooth decay toward idle drift
        velX *= 0.94;
      }

      electronAngle += 0.015;

      // 1. Draw 3D Nucleus Particles (Protons & Neutrons Cluster)
      const nucleusParticles = [
        { x: 0, y: 0, z: 0, r: 18, color: 'rgba(10, 37, 64, 0.9)' },
        { x: -10, y: -8, z: 5, r: 8, color: '#F59E0B' },
        { x: 12, y: 7, z: -4, r: 9, color: '#0EA5E9' },
        { x: -6, y: 12, z: -8, r: 7, color: '#10B981' },
        { x: 8, y: -10, z: 6, r: 8.5, color: '#8B5CF6' },
      ];

      // Draw Nucleus Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 90);
      glowGrad.addColorStop(0, 'rgba(14, 165, 233, 0.22)');
      glowGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)');
      glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.fill();

      // Sort and draw nucleus particles by Z depth
      const rotatedNucleus = nucleusParticles
        .map((p) => {
          const rot = rotatePoint(p.x, p.y, p.z, rotX, rotY);
          return { ...p, rx: rot.x + cx, ry: rot.y + cy, rz: rot.z };
        })
        .sort((a, b) => a.rz - b.rz);

      rotatedNucleus.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.rx, p.ry, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw 3D Orbital Rings with Perspective & Orbiting Electrons
      const fov = 750;

      rings.forEach((ring, rIdx) => {
        const segments = 90;
        ctx.beginPath();
        let firstPoint: { x: number; y: number } | null = null;

        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          // Point on ring plane
          const px = ring.radiusX * Math.cos(theta);
          const py = ring.radiusY * Math.sin(theta);
          const pz = 0;

          // Rotate by ring's initial tilt
          const tilted = rotatePoint(px, py, pz, ring.tiltX, ring.tiltY);
          // Rotate by global user interactive rotation
          const world = rotatePoint(tilted.x, tilted.y, tilted.z, rotX, rotY);

          // Perspective projection
          const scale = fov / (fov + world.z);
          const screenX = cx + world.x * scale;
          const screenY = cy + world.y * scale;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
            firstPoint = { x: screenX, y: screenY };
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }

        if (firstPoint) ctx.lineTo(firstPoint.x, firstPoint.y);

        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.3;
        ctx.setLineDash([6, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        // 3. Draw Valence Electron on this Ring
        const eTheta = electronAngle * (rIdx % 2 === 0 ? 1 : -1) * (1 + rIdx * 0.2);
        const ePx = ring.radiusX * Math.cos(eTheta);
        const ePy = ring.radiusY * Math.sin(eTheta);
        const eTilted = rotatePoint(ePx, ePy, 0, ring.tiltX, ring.tiltY);
        const eWorld = rotatePoint(eTilted.x, eTilted.y, eTilted.z, rotX, rotY);

        const eScale = fov / (fov + eWorld.z);
        const eScreenX = cx + eWorld.x * eScale;
        const eScreenY = cy + eWorld.y * eScale;
        const eRadius = Math.max(2.5, 4.5 * eScale);

        // Electron halo
        const eGlow = ctx.createRadialGradient(eScreenX, eScreenY, 1, eScreenX, eScreenY, eRadius * 3);
        eGlow.addColorStop(0, ring.color.replace('0.35', '0.9').replace('0.4', '0.9'));
        eGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = eGlow;
        ctx.beginPath();
        ctx.arc(eScreenX, eScreenY, eRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Electron core
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(eScreenX, eScreenY, eRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
      color: '#0284c7',
      gradient: 'from-sky-500 to-blue-600',
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
      color: '#8b5cf6',
      gradient: 'from-violet-500 to-indigo-600',
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
      color: '#0d9488',
      gradient: 'from-teal-500 to-emerald-600',
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
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-600',
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
      color: '#10b981',
      gradient: 'from-emerald-500 to-cyan-600',
    },
  ];

  const active = steps[activeStep];

  return (
    <section id="method" className="pt-8 pb-20 relative overflow-hidden bg-[#FAFBFC]">
      {/* 1. Background Interactive 3D Atomic Canvas (Draggable / Rotatable with Mouse) */}
      <div className="absolute inset-0 pointer-events-auto cursor-grab active:cursor-grabbing select-none overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 pointer-events-auto">
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

        {/* 2. Responsive 5-Step Atomic Station Cards (Mobile Swipeable, Tablet 2/3-Col, Desktop/Laptop 5-Col) */}
        <div className="relative mb-12 pointer-events-auto">
          {/* Desktop Covalent Bond Connecting Pipeline */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-400 -translate-y-8 z-0 opacity-40" />

          {/* Cards Track: Mobile Snap Scroll, Desktop Grid */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-4 sm:gap-5 pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-none relative z-10 px-1">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden flex-shrink-0 w-[82vw] sm:w-[320px] lg:w-auto snap-center ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-ocean/50 shadow-xl ring-2 ring-brand-ocean/30 -translate-y-1.5'
                      : 'bg-white/92 backdrop-blur-md hover:bg-white text-brand-navy border-slate-200/85 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Subtle Atomic Orbit Ring in Card Corner */}
                  <div
                    className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full border border-dashed transition-all pointer-events-none ${
                      isSelected
                        ? 'border-brand-ocean/30 animate-[spin_18s_linear_infinite]'
                        : 'border-slate-200 group-hover:border-slate-300'
                    }`}
                  />

                  <div>
                    {/* Header: Chemical Element Badge & Orbital Icon */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Element Symbol Pill */}
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

                      {/* Icon with orbital halo */}
                      <div className="relative">
                        <div
                          className={`absolute -inset-1 rounded-full border border-dashed pointer-events-none ${
                            isSelected
                              ? 'border-brand-orange animate-[spin_8s_linear_infinite]'
                              : 'border-slate-200'
                          }`}
                        />
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-brand-ocean text-white shadow-md' : 'bg-brand-ocean/10 text-brand-ocean'
                          }`}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Bangla Name */}
                    <h3 className="text-lg sm:text-xl font-bold font-sans mb-1 flex items-baseline gap-1.5 flex-wrap">
                      <span>{step.title}</span>
                      <span
                        className={`text-xs sm:text-sm font-bangla font-normal ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        ({step.titleBangla})
                      </span>
                    </h3>

                    {/* Quantum Subshell Notation */}
                    <div
                      className={`text-[11px] font-mono mb-2 ${
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
                    className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
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

          {/* Mobile Snap Indicator Dots (Only visible on mobile/tablet) */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 mt-3">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeStep ? 'w-6 bg-brand-ocean' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3. Deep Dive Inspection Chamber */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-14 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden pointer-events-auto">
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

        {/* 4. Before vs After Transformation Table */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 overflow-hidden shadow-card pointer-events-auto">
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
