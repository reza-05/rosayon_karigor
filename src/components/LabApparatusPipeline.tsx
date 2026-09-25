import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export interface LabStage {
  id: string;
  num: string;
  title: string;
  titleBangla: string;
  equipmentName: string;
  equipmentBangla: string;
  actionTag: string;
  shortDesc: string;
  shortDescBangla: string;
  details: string;
  color: string;
  glowColor: string;
  liquidColor: string;
  chemicalFormula: string;
}

interface LabApparatusPipelineProps {
  stages: LabStage[];
  activeStage: number;
  onSelectStage: (index: number) => void;
  className?: string;
}

export const LabApparatusPipeline: React.FC<LabApparatusPipelineProps> = ({
  stages,
  activeStage,
  onSelectStage,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const STAGE_DURATION_MS = 5000;

  // Auto-cycle logic with smooth progress bar
  const advanceStage = useCallback(() => {
    onSelectStage((activeStage + 1) % stages.length);
    startTimeRef.current = Date.now();
    setProgress(0);
  }, [activeStage, onSelectStage, stages.length]);

  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - progress * STAGE_DURATION_MS;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min(1, elapsed / STAGE_DURATION_MS);
      setProgress(currentProgress);

      if (currentProgress >= 1) {
        advanceStage();
      } else {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, activeStage, advanceStage, progress]);

  // Handle stage selection by user
  const handleSelect = (idx: number) => {
    onSelectStage(idx);
    startTimeRef.current = Date.now();
    setProgress(0);

    // Auto-scroll on mobile/tablet to center the active apparatus
    if (scrollContainerRef.current) {
      const stationWidth = 190;
      const scrollTarget = Math.max(0, idx * stationWidth - 60);
      scrollContainerRef.current.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const resetPipeline = () => {
    onSelectStage(0);
    setProgress(0);
    startTimeRef.current = Date.now();
    setIsPlaying(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      {/* 1. Header Toolbar with Play/Pause and Flow Status */}
      <div className="flex items-center justify-between gap-3 mb-4 px-2 sm:px-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isPlaying ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isPlaying ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            {isPlaying ? 'Continuous Synthesis Flow' : 'Manual Inspection Paused'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50 shadow-sm transition-all active:scale-95"
            title={isPlaying ? 'Pause Auto Transition' : 'Resume Auto Transition'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">পজ করুন</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span className="hidden sm:inline">অটো চালু করুন</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={resetPipeline}
            className="p-1.5 rounded-full text-slate-500 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            title="Reset from Stage 01"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. THE SVG LABORATORY PIPELINE BENCH */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent select-none"
      >
        <div className="min-w-[980px] lg:min-w-full relative px-2">
          <svg
            viewBox="0 0 1140 430"
            className="w-full h-auto overflow-visible drop-shadow-sm select-none"
          >
            <defs>
              {/* Bench Table Top Reflection Gradient */}
              <linearGradient id="benchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#CBD5E1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
              </linearGradient>

              {/* Glass Specular Sheen Gradient */}
              <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
              </linearGradient>

              {/* Liquid Tube Glow Filter */}
              <filter id="liquidGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>

              {/* Liquid Wave Pattern */}
              <pattern id="liquidWave" width="40" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 5 Q 10 0 20 5 T 40 5 L 40 10 L 0 10 Z"
                  fill="currentColor"
                  opacity="0.25"
                />
              </pattern>
            </defs>

            {/* --- LABORATORY BENCH SURFACE --- */}
            <rect x="20" y="375" width="1100" height="24" rx="4" fill="url(#benchGrad)" />
            <line x1="20" y1="375" x2="1120" y2="375" stroke="#94A3B8" strokeWidth="1.8" />
            <line x1="30" y1="399" x2="1110" y2="399" stroke="#E2E8F0" strokeWidth="1" />

            {/* Bench Measurements ruler ticks */}
            {Array.from({ length: 23 }).map((_, i) => (
              <line
                key={i}
                x1={50 + i * 46}
                y1="375"
                x2={50 + i * 46}
                y2={i % 5 === 0 ? '385' : '380'}
                stroke="#94A3B8"
                strokeWidth="1"
                opacity="0.6"
              />
            ))}

            {/* --- 3. TRANSPARENT CONNECTING GLASS PIPES (Double-walled with Liquid Flow) --- */}
            {/* Pipe 1: Stage 0 (Conical) -> Stage 1 (Round Bottom) */}
            <g className="transition-opacity duration-300">
              {/* Outer Glass Casing */}
              <path
                d="M 125 180 L 125 130 Q 125 110 145 110 L 255 110 Q 275 110 275 130 L 275 195"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 125 180 L 125 130 Q 125 110 145 110 L 255 110 Q 275 110 275 130 L 275 195"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Inner Pulsing Chemical Liquid Stream */}
              <path
                d="M 125 180 L 125 130 Q 125 110 145 110 L 255 110 Q 275 110 275 130 L 275 195"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-dash"
                opacity={activeStage >= 0 ? '0.9' : '0.3'}
              />
            </g>

            {/* Pipe 2: Stage 1 (Round Bottom) -> Stage 2 (Liebig Condenser) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 295 180 L 295 125 Q 295 105 315 105 L 435 105 Q 450 105 455 120 L 465 145"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 295 180 L 295 125 Q 295 105 315 105 L 435 105 Q 450 105 455 120 L 465 145"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 295 180 L 295 125 Q 295 105 315 105 L 435 105 Q 450 105 455 120 L 465 145"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-dash"
                opacity={activeStage >= 1 ? '0.9' : '0.3'}
              />
            </g>

            {/* Pipe 3: Stage 2 (Liebig Condenser) -> Stage 3 (Burette) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 525 240 L 555 270 Q 570 285 590 280 L 635 245 Q 650 235 650 215 L 650 95"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 525 240 L 555 270 Q 570 285 590 280 L 635 245 Q 650 235 650 215 L 650 95"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 525 240 L 555 270 Q 570 285 590 280 L 635 245 Q 650 235 650 215 L 650 95"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-dash"
                opacity={activeStage >= 2 ? '0.9' : '0.3'}
              />
            </g>

            {/* Pipe 4: Stage 3 (Titration Beaker) -> Stage 4 (Separating Funnel) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 700 350 L 730 350 Q 750 350 750 330 L 750 140 Q 750 110 775 110 L 825 110"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 700 350 L 730 350 Q 750 350 750 330 L 750 140 Q 750 110 775 110 L 825 110"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 700 350 L 730 350 Q 750 350 750 330 L 750 140 Q 750 110 775 110 L 825 110"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-dash"
                opacity={activeStage >= 3 ? '0.9' : '0.3'}
              />
            </g>

            {/* Pipe 5: Stage 4 (Separating Funnel) -> Stage 5 (Volumetric Crystal Flask) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 870 335 L 895 350 Q 920 360 945 345 L 980 320 Q 1000 305 1015 305 L 1025 305"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 870 335 L 895 350 Q 920 360 945 345 L 980 320 Q 1000 305 1015 305 L 1025 305"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 870 335 L 895 350 Q 920 360 945 345 L 980 320 Q 1000 305 1015 305 L 1025 305"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="animate-dash"
                opacity={activeStage >= 4 ? '0.9' : '0.3'}
              />
            </g>

            {/* --- 4. THE 6 LABORATORY APPARATUS STATIONS --- */}

            {/* ========================================================
                STATION 01: CONICAL FLASK (ERLENMEYER) — UNDERSTAND
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Retort Stand Support */}
              <rect x="60" y="365" width="45" height="10" rx="2" fill="#334155" />
              <line x1="82" y1="365" x2="82" y2="120" stroke="#475569" strokeWidth="4" />
              <line x1="82" y1="210" x2="105" y2="210" stroke="#64748B" strokeWidth="3" />
              <circle cx="105" cy="210" r="4" fill="#334155" />

              {/* Heating Plate Underneath with Warm Glow */}
              <rect x="80" y="360" width="70" height="15" rx="3" fill="#1E293B" />
              <line x1="85" y1="360" x2="145" y2="360" stroke="#F59E0B" strokeWidth="2.5" className="animate-pulse" />

              {/* Chemical Aura on Active/Hover */}
              {(activeStage === 0 || hoveredIndex === 0) && (
                <ellipse cx="115" cy="300" rx="55" ry="70" fill="#0284c7" opacity="0.12" filter="url(#liquidGlow)" />
              )}

              {/* Conical Flask Glass Body */}
              <path
                d="M 105 190 L 105 210 L 75 345 Q 70 360 85 360 L 145 360 Q 160 360 155 345 L 125 210 L 125 190 Z"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* Blue Liquid Volume inside Conical Flask */}
              <path
                d="M 87 290 Q 115 285 143 290 L 152 345 Q 158 358 143 358 L 87 358 Q 72 358 78 345 Z"
                fill="#0284c7"
                opacity="0.85"
              />
              {/* Meniscus Highlight Line */}
              <path d="M 87 290 Q 115 285 143 290" fill="none" stroke="#38BDF8" strokeWidth="2.5" />

              {/* Rising Micro-Bubbles (Synthesis in Action) */}
              <circle cx="98" cy="335" r="2.5" fill="#FFFFFF" opacity="0.8" className="animate-ping" />
              <circle cx="125" cy="320" r="3" fill="#FFFFFF" opacity="0.7" />
              <circle cx="112" cy="342" r="2" fill="#FFFFFF" opacity="0.9" />
              <circle cx="132" cy="305" r="2" fill="#FFFFFF" opacity="0.8" />

              {/* Glass Measurement Tick Marks (ml) */}
              <line x1="88" y1="330" x2="98" y2="330" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
              <line x1="93" y1="315" x2="101" y2="315" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
              <line x1="97" y1="300" x2="104" y2="300" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />

              {/* Top Rubber Stopper */}
              <rect x="103" y="180" width="24" height="12" rx="2" fill="#475569" />

              {/* Stage Badge & Label */}
              <g transform="translate(115, 65)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 0 ? 18 : 15}
                  fill={activeStage === 0 ? '#0284c7' : '#FFFFFF'}
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 0 ? '#FFFFFF' : '#0284c7'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  01
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  অনুধাবন
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Conical Flask
                </text>
              </g>
            </g>

            {/* ========================================================
                STATION 02: ROUND BOTTOM FLASK (HEATING & VAPOR) — VISUALIZE
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Stand and Clamping Ring */}
              <rect x="235" y="365" width="45" height="10" rx="2" fill="#334155" />
              <line x1="250" y1="365" x2="250" y2="120" stroke="#475569" strokeWidth="4" />
              <path d="M 250 250 L 275 250" stroke="#64748B" strokeWidth="3" />
              <circle cx="275" cy="250" r="4" fill="#334155" />

              {/* Heating Mantle Basket with Radiant Heat Waves */}
              <path d="M 255 315 Q 285 365 315 315 Z" fill="#334155" />
              <path d="M 260 318 Q 285 358 310 318" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />

              {/* Chemical Aura */}
              {(activeStage === 1 || hoveredIndex === 1) && (
                <circle cx="285" cy="290" r="50" fill="#8b5cf6" opacity="0.12" filter="url(#liquidGlow)" />
              )}

              {/* Spherical Flask Body (Radius 36) */}
              <circle cx="285" cy="295" r="36" fill="none" stroke="#64748B" strokeWidth="2.2" />
              {/* Vertical Glass Neck */}
              <path d="M 276 261 L 276 195 L 294 195 L 294 261" fill="none" stroke="#64748B" strokeWidth="2.2" />

              {/* Violet Solution filled in Round Bottom */}
              <path
                d="M 251 285 A 36 36 0 0 0 319 285 Q 285 280 251 285 Z"
                fill="#8b5cf6"
                opacity="0.85"
              />
              <path d="M 251 285 Q 285 280 319 285" fill="none" stroke="#C084FC" strokeWidth="2.5" />

              {/* Rising Vapor Particles (Visualizing 3D Orbitals) */}
              <circle cx="280" cy="255" r="2.5" fill="#C084FC" opacity="0.9" className="animate-ping" />
              <circle cx="290" cy="235" r="2" fill="#E9D5FF" opacity="0.8" />
              <circle cx="282" cy="215" r="2.2" fill="#FFFFFF" opacity="0.8" />

              {/* Top Adapter Stopper */}
              <rect x="274" y="185" width="22" height="12" rx="2" fill="#475569" />

              {/* Stage Badge & Label */}
              <g transform="translate(285, 65)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 1 ? 18 : 15}
                  fill={activeStage === 1 ? '#8b5cf6' : '#FFFFFF'}
                  stroke="#8b5cf6"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 1 ? '#FFFFFF' : '#8b5cf6'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  02
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  ভিজ্যুয়ালাইজ
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Boiling Flask
                </text>
              </g>
            </g>

            {/* ========================================================
                STATION 03: LIEBIG CONDENSER (SPIRAL COOLING) — CONNECT
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Stand with Angle Clamp */}
              <rect x="420" y="365" width="45" height="10" rx="2" fill="#334155" />
              <line x1="440" y1="365" x2="440" y2="135" stroke="#475569" strokeWidth="4" />
              <line x1="440" y1="200" x2="475" y2="190" stroke="#64748B" strokeWidth="3" />
              <circle cx="475" cy="190" r="4" fill="#334155" />

              {/* Chemical Aura */}
              {(activeStage === 2 || hoveredIndex === 2) && (
                <ellipse cx="495" cy="195" rx="55" ry="40" fill="#0d9488" opacity="0.12" filter="url(#liquidGlow)" />
              )}

              {/* Outer Condenser Glass Water Jacket (Angled at ~30deg) */}
              <g transform="rotate(32 495 195)">
                <rect x="440" y="180" width="110" height="30" rx="14" fill="#F0FDFA" stroke="#64748B" strokeWidth="2" opacity="0.9" />
                {/* Water inlet & outlet nozzles */}
                <line x1="460" y1="180" x2="460" y2="168" stroke="#64748B" strokeWidth="3" />
                <line x1="530" y1="210" x2="530" y2="222" stroke="#64748B" strokeWidth="3" />

                {/* Inner Condensing Vapor Tube with Spiral/Teal Beads */}
                <line x1="425" y1="195" x2="565" y2="195" stroke="#0d9488" strokeWidth="3.5" strokeDasharray="6 4" className="animate-dash" />
                <circle cx="460" cy="195" r="3.5" fill="#2DD4BF" />
                <circle cx="495" cy="195" r="3.5" fill="#14B8A6" />
                <circle cx="530" cy="195" r="3.5" fill="#0D9488" />
              </g>

              {/* Stage Badge & Label */}
              <g transform="translate(495, 65)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 2 ? 18 : 15}
                  fill={activeStage === 2 ? '#0d9488' : '#FFFFFF'}
                  stroke="#0d9488"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 2 ? '#FFFFFF' : '#0d9488'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  03
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  সংযোগ
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Liebig Condenser
                </text>
              </g>
            </g>

            {/* ========================================================
                STATION 04: BURETTE & TITRATION BEAKER — PRACTICE
                * FEATURES: Animated Drop-by-Drop Liquid Dripping ("টপ টপ করে ড্রপ")
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Heavy Titration Base Plate */}
              <rect x="625" y="365" width="80" height="10" rx="2" fill="#1E293B" />
              <line x1="635" y1="365" x2="635" y2="85" stroke="#475569" strokeWidth="4.5" />
              {/* Double Burette Clamp */}
              <line x1="635" y1="140" x2="665" y2="140" stroke="#64748B" strokeWidth="3" />
              <line x1="635" y1="210" x2="665" y2="210" stroke="#64748B" strokeWidth="3" />
              <circle cx="665" cy="140" r="4" fill="#334155" />
              <circle cx="665" cy="210" r="4" fill="#334155" />

              {/* Chemical Aura */}
              {(activeStage === 3 || hoveredIndex === 3) && (
                <ellipse cx="675" cy="260" rx="45" ry="80" fill="#f59e0b" opacity="0.12" filter="url(#liquidGlow)" />
              )}

              {/* Graduated Burette Tube */}
              <rect x="660" y="85" width="12" height="150" rx="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" opacity="0.95" />
              {/* Amber Liquid in Burette */}
              <rect x="662" y="115" width="8" height="120" rx="1" fill="#f59e0b" opacity="0.85" />

              {/* Fine Measurement Graduations */}
              {Array.from({ length: 15 }).map((_, i) => (
                <line
                  key={i}
                  x1="662"
                  y1={105 + i * 8}
                  x2={i % 5 === 0 ? '670' : '667'}
                  y2={105 + i * 8}
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
              ))}

              {/* Burette Stopcock Valve with Handle */}
              <rect x="656" y="235" width="20" height="8" rx="2" fill="#334155" />
              <circle cx="666" cy="239" r="3" fill="#F59E0B" />
              {/* Fine Nozzle Tip */}
              <path d="M 664 243 L 664 252 L 666 256 L 668 252 L 668 243 Z" fill="#64748B" />

              {/* --- REALISTIC DROP-BY-DROP DRIPPING ANIMATION --- */}
              {/* Droplet 1: Forming at nozzle tip & dropping */}
              <g className="animate-drip">
                <path d="M 666 256 Q 663 263 666 268 Q 669 263 666 256 Z" fill="#f59e0b" />
              </g>

              {/* Droplet 2: Secondary micro drop */}
              <g className="animate-drip" style={{ animationDelay: '0.9s' }}>
                <circle cx="666" cy="275" r="2.2" fill="#FBBF24" />
              </g>

              {/* Titration Beaker below receiving the drops */}
              <path
                d="M 648 295 L 648 358 Q 648 362 654 362 L 686 362 Q 692 362 692 358 L 692 295"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
              />
              <path
                d="M 650 325 Q 670 322 690 325 L 690 358 Q 690 360 686 360 L 654 360 Q 650 360 650 358 Z"
                fill="#f59e0b"
                opacity="0.8"
              />
              {/* Splash Ripples in Beaker when droplet hits */}
              <ellipse cx="670" cy="325" rx="14" ry="3" fill="none" stroke="#FDE68A" strokeWidth="1.5" className="animate-ping" />

              {/* Stage Badge & Label */}
              <g transform="translate(670, 45)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 3 ? 18 : 15}
                  fill={activeStage === 3 ? '#f59e0b' : '#FFFFFF'}
                  stroke="#f59e0b"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 3 ? '#FFFFFF' : '#f59e0b'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  04
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  প্রয়োগ
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Burette & Titration
                </text>
              </g>
            </g>

            {/* ========================================================
                STATION 05: SEPARATING FUNNEL (PURIFICATION) — ANALYZE
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(4)}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Retort Stand */}
              <rect x="800" y="365" width="45" height="10" rx="2" fill="#334155" />
              <line x1="820" y1="365" x2="820" y2="120" stroke="#475569" strokeWidth="4" />
              <line x1="820" y1="210" x2="845" y2="210" stroke="#64748B" strokeWidth="3" />
              <circle cx="845" cy="210" r="4" fill="#334155" />

              {/* Chemical Aura */}
              {(activeStage === 4 || hoveredIndex === 4) && (
                <ellipse cx="855" cy="245" rx="45" ry="65" fill="#10b981" opacity="0.12" filter="url(#liquidGlow)" />
              )}

              {/* Pear-shaped Separating Funnel Body */}
              <path
                d="M 845 145 L 865 145 L 878 185 Q 888 230 862 275 L 858 310 L 852 310 L 848 275 Q 822 230 832 185 Z"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* 2 Separating Layers (Purification: separating unwanted compounds) */}
              {/* Top Organic Amber Layer */}
              <path
                d="M 835 185 Q 855 180 875 185 L 872 215 Q 855 210 838 215 Z"
                fill="#F59E0B"
                opacity="0.8"
              />
              {/* Bottom Purified Emerald Layer */}
              <path
                d="M 838 215 Q 855 210 872 215 Q 882 250 862 275 L 858 310 L 852 310 L 848 275 Q 828 250 838 215 Z"
                fill="#10b981"
                opacity="0.85"
              />

              {/* Stopcock and Dripping Stem */}
              <rect x="847" y="295" width="16" height="6" rx="1.5" fill="#334155" />
              {/* Dripping Purified Liquid */}
              <g className="animate-drip" style={{ animationDelay: '0.4s' }}>
                <circle cx="855" cy="322" r="2.2" fill="#34D399" />
              </g>

              {/* Top Stopper */}
              <rect x="847" y="135" width="16" height="12" rx="2" fill="#475569" />

              {/* Stage Badge & Label */}
              <g transform="translate(855, 65)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 4 ? 18 : 15}
                  fill={activeStage === 4 ? '#10b981' : '#FFFFFF'}
                  stroke="#10b981"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 4 ? '#FFFFFF' : '#10b981'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  05
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  বিশ্লেষণ
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Separating Funnel
                </text>
              </g>
            </g>

            {/* ========================================================
                STATION 06: VOLUMETRIC FLASK & PURE CRYSTAL RECEIVER — MASTER
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(5)}
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Stand Plate */}
              <rect x="1015" y="365" width="60" height="10" rx="2" fill="#1E293B" />

              {/* Radiant Golden Glow on Final Product */}
              <ellipse cx="1045" cy="320" rx="55" ry="55" fill="#EAB308" opacity="0.18" filter="url(#liquidGlow)" />

              {/* Volumetric Flask Body with Precision Calibration Mark */}
              <path
                d="M 1039 210 L 1039 265 L 1018 335 Q 1012 360 1025 360 L 1065 360 Q 1078 360 1072 335 L 1051 265 L 1051 210 Z"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* Golden Purified Solution */}
              <path
                d="M 1024 315 Q 1045 310 1066 315 L 1071 340 Q 1076 358 1065 358 L 1025 358 Q 1014 358 1019 340 Z"
                fill="#EAB308"
                opacity="0.9"
              />
              <line x1="1038" y1="240" x2="1052" y2="240" stroke="#EF4444" strokeWidth="1.5" />

              {/* Sparkling Crystals (The Pinnacle of Mastery / Pure Concept) */}
              <polygon points="1045,335 1049,343 1041,343" fill="#FFFFFF" className="animate-pulse" />
              <polygon points="1035,342 1039,349 1031,349" fill="#FEF08A" />
              <polygon points="1055,340 1059,347 1051,347" fill="#FEF08A" />
              <circle cx="1045" cy="325" r="2.5" fill="#FFFFFF" className="animate-ping" />

              {/* Top Glass Stopper */}
              <polygon points="1045,190 1038,205 1052,205" fill="#475569" stroke="#64748B" strokeWidth="1.5" />

              {/* Stage Badge & Label */}
              <g transform="translate(1045, 65)">
                <circle
                  cx="0"
                  cy="0"
                  r={activeStage === 5 ? 18 : 15}
                  fill={activeStage === 5 ? '#EAB308' : '#FFFFFF'}
                  stroke="#EAB308"
                  strokeWidth="2.2"
                  className="transition-all"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={activeStage === 5 ? '#FFFFFF' : '#CA8A04'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  06
                </text>
                <text x="0" y="28" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                  পারদর্শিতা
                </text>
                <text x="0" y="41" textAnchor="middle" fill="#64748B" fontSize="9.5" fontFamily="monospace">
                  Volumetric Flask
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* 3. Automatic Progress Bar along the pipeline */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-4">
        <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((activeStage + progress) / stages.length) * 100}%`,
              backgroundColor: stages[activeStage].color,
            }}
          />
        </div>
      </div>

      {/* 4. Quick Tapping Stage Pills (Mobile/Desktop friendly) */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap px-2">
        {stages.map((st, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                isSelected
                  ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-ocean/40 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: st.color }}
              />
              <span className="font-mono">{st.num}</span>
              <span>{st.titleBangla}</span>
              <span className="text-[10px] opacity-75 font-mono hidden sm:inline">
                ({st.equipmentBangla})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
