import React, { useEffect, useState, useRef, useCallback } from 'react';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance between the 5 stages continuously
  const advanceStage = useCallback(() => {
    onSelectStage((activeStage + 1) % stages.length);
  }, [activeStage, onSelectStage, stages.length]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      advanceStage();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advanceStage]);

  // Handle stage selection by user
  const handleSelect = (idx: number) => {
    onSelectStage(idx);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        advanceStage();
      }, 5000);
    }

    // Auto-scroll on mobile to center the active apparatus
    if (scrollContainerRef.current) {
      const stationPositions = [60, 260, 480, 700, 900];
      const target = stationPositions[idx] || 0;
      scrollContainerRef.current.scrollTo({ left: target - 100, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      {/* 1. THE SVG LABORATORY PIPELINE BENCH */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent select-none"
      >
        <div className="min-w-[960px] lg:min-w-full relative px-2">
          <svg
            viewBox="0 0 1100 420"
            className="w-full h-auto overflow-visible drop-shadow-sm select-none"
          >
            <defs>
              {/* Bench Table Top Reflection Gradient */}
              <linearGradient id="benchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#CBD5E1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.1" />
              </linearGradient>

              {/* Glass Specular Sheen Gradient */}
              <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
              </linearGradient>

              {/* Bunsen Burner Outer Flame Gradient */}
              <radialGradient id="flameOuter" cx="50%" cy="80%" r="65%">
                <stop offset="0%" stopColor="#FFAA00" stopOpacity="1" />
                <stop offset="45%" stopColor="#FF5500" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#FF1100" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FF7700" stopOpacity="0" />
              </radialGradient>

              {/* Bunsen Burner Inner Hot Core Gradient */}
              <radialGradient id="flameInner" cx="50%" cy="80%" r="55%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="1" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
              </radialGradient>

              {/* Glass Tube Highlight */}
              <linearGradient id="tubeGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.5" />
              </linearGradient>

              {/* Gold Crystal Shimmer */}
              <radialGradient id="goldCrystalGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#EAB308" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
              </radialGradient>

              {/* CSS Animations embedded in SVG for 100% smooth framerates */}
              <style>{`
                @keyframes flameFlicker {
                  0%, 100% {
                    transform: scale(1) skewX(0deg);
                    filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.85));
                  }
                  25% {
                    transform: scale(1.05, 0.95) skewX(-1.5deg);
                    filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.95));
                  }
                  50% {
                    transform: scale(0.96, 1.04) skewX(1deg);
                    filter: drop-shadow(0 0 7px rgba(249, 115, 22, 0.75));
                  }
                  75% {
                    transform: scale(1.03, 0.97) skewX(-0.8deg);
                    filter: drop-shadow(0 0 11px rgba(249, 115, 22, 0.9));
                  }
                }
                @keyframes dropFallContinuous {
                  0% {
                    transform: translateY(0);
                    opacity: 0;
                  }
                  15% {
                    opacity: 1;
                    transform: translateY(3px);
                  }
                  75% {
                    opacity: 1;
                    transform: translateY(44px);
                  }
                  90% {
                    opacity: 0.8;
                    transform: translateY(48px);
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(50px);
                  }
                }
                @keyframes rippleEffect {
                  0% {
                    r: 1;
                    opacity: 0.9;
                  }
                  60% {
                    opacity: 0.5;
                  }
                  100% {
                    r: 14;
                    opacity: 0;
                  }
                }
                @keyframes bubbleFloatUp {
                  0% {
                    transform: translateY(0);
                    opacity: 0;
                  }
                  20% {
                    opacity: 0.8;
                  }
                  80% {
                    opacity: 0.8;
                  }
                  100% {
                    transform: translateY(-32px);
                    opacity: 0;
                  }
                }
                @keyframes vaporWaft {
                  0% {
                    transform: translateY(0) scale(0.9);
                    opacity: 0;
                  }
                  40% {
                    opacity: 0.5;
                  }
                  80% {
                    opacity: 0.3;
                  }
                  100% {
                    transform: translateY(-24px) scale(1.2);
                    opacity: 0;
                  }
                }
                @keyframes condenserSliding {
                  0% {
                    transform: translate(0, 0);
                    opacity: 0;
                  }
                  20% {
                    opacity: 0.9;
                  }
                  80% {
                    opacity: 0.9;
                  }
                  100% {
                    transform: translate(145px, 68px);
                    opacity: 0;
                  }
                }
                @keyframes pipeDashFlow {
                  to {
                    stroke-dashoffset: -40;
                  }
                }
                .anim-flame {
                  transform-origin: 340px 295px;
                  animation: flameFlicker 1.4s infinite ease-in-out;
                }
                .anim-drop {
                  animation: dropFallContinuous 1.6s infinite cubic-bezier(0.4, 0, 1, 1);
                }
                .anim-ripple {
                  animation: rippleEffect 1.6s infinite ease-out;
                }
                .anim-bubble-1 {
                  animation: bubbleFloatUp 2.2s infinite ease-in;
                }
                .anim-bubble-2 {
                  animation: bubbleFloatUp 1.8s infinite ease-in 0.7s;
                }
                .anim-bubble-3 {
                  animation: bubbleFloatUp 2.5s infinite ease-in 1.2s;
                }
                .anim-vapor {
                  animation: vaporWaft 2.4s infinite ease-out;
                }
                .anim-condenser-drop {
                  animation: condenserSliding 2.2s infinite linear;
                }
                .anim-pipe-flow {
                  stroke-dasharray: 8 6;
                  animation: pipeDashFlow 1.8s linear infinite;
                }
              `}</style>
            </defs>

            {/* --- LABORATORY BENCH SURFACE --- */}
            <rect x="20" y="350" width="1060" height="22" rx="4" fill="url(#benchGrad)" />
            <line x1="20" y1="350" x2="1080" y2="350" stroke="#94A3B8" strokeWidth="1.8" />
            <line x1="30" y1="372" x2="1070" y2="372" stroke="#E2E8F0" strokeWidth="1" />

            {/* Bench Measurement Ruler Ticks */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1={45 + i * 44}
                y1="350"
                x2={45 + i * 44}
                y2={i % 4 === 0 ? '360' : '355'}
                stroke="#94A3B8"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}

            {/* --- CONNECTING REAL GLASS DELIVERY PIPES --- */}

            {/* Pipe 1: Stage 0 (Conical Flask Stopper) -> Stage 1 (Boiling Flask) */}
            <g className="transition-opacity duration-300">
              {/* Outer glass tube */}
              <path
                d="M 110 170 L 110 100 Q 110 85 125 85 L 325 85 Q 340 85 340 100 L 340 135"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 110 170 L 110 100 Q 110 85 125 85 L 325 85 Q 340 85 340 100 L 340 135"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Inner animated liquid stream */}
              <path
                d="M 110 170 L 110 100 Q 110 85 125 85 L 325 85 Q 340 85 340 100 L 340 135"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 0 ? 0.9 : 0.35}
              />
            </g>

            {/* Pipe 2: Stage 1 (Boiling Flask) -> Stage 2 (Liebig Condenser Top) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 345 130 L 345 95 Q 345 80 360 80 L 440 80 Q 455 80 460 95 L 470 120"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 345 130 L 345 95 Q 345 80 360 80 L 440 80 Q 455 80 460 95 L 470 120"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 345 130 L 345 95 Q 345 80 360 80 L 440 80 Q 455 80 460 95 L 470 120"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 1 ? 0.9 : 0.35}
              />
            </g>

            {/* Pipe 3: Stage 2 (Liebig Condenser Outlet) -> Stage 3 (Drip Nozzle above Beaker) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 645 220 L 675 235 Q 695 245 715 245 L 730 245 Q 740 245 740 255 L 740 268"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 645 220 L 675 235 Q 695 245 715 245 L 730 245 Q 740 245 740 255 L 740 268"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 645 220 L 675 235 Q 695 245 715 245 L 730 245 Q 740 245 740 255 L 740 268"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 2 ? 0.9 : 0.35}
              />
            </g>

            {/* Pipe 4: Stage 3 (Beaker Base) -> Stage 4 (Volumetric Flask) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 770 330 L 795 330 Q 815 330 815 310 L 815 200 Q 815 170 840 170 L 950 170 Q 965 170 965 185 L 965 210"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 770 330 L 795 330 Q 815 330 815 310 L 815 200 Q 815 170 840 170 L 950 170 Q 965 170 965 185 L 965 210"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 770 330 L 795 330 Q 815 330 815 310 L 815 200 Q 815 170 840 170 L 950 170 Q 965 170 965 185 L 965 210"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 3 ? 0.9 : 0.35}
              />
            </g>

            {/* ========================================================
                STATION 01: CONICAL FLASK (ERLENMEYER) — UNDERSTAND
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active stage highlight aura */}
              <circle
                cx="110"
                cy="260"
                r="70"
                fill="#0284c7"
                opacity={activeStage === 0 ? 0.12 : hoveredIndex === 0 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Retort Stand (Base, Rod & Bosshead Clamp) */}
              <rect x="40" y="344" width="55" height="6" rx="2" fill="#334155" />
              <line x1="55" y1="120" x2="55" y2="344" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              <rect x="51" y="200" width="8" height="12" rx="2" fill="#1E293B" />
              <line x1="55" y1="206" x2="98" y2="206" stroke="#475569" strokeWidth="2.5" />
              <path d="M 98 198 Q 110 206 122 198" fill="none" stroke="#334155" strokeWidth="2.5" />

              {/* Conical Flask Liquid Fill (Sky Blue #0284c7) */}
              <path
                d="M 73 342 L 147 342 L 132 255 Q 110 250 88 255 Z"
                fill="#0284c7"
                opacity="0.85"
              />
              <ellipse cx="110" cy="254" rx="22" ry="4" fill="#38BDF8" opacity="0.6" />

              {/* Animated Rising Bubbles */}
              <circle cx="95" cy="320" r="2.5" fill="#E0F2FE" className="anim-bubble-1" />
              <circle cx="112" cy="330" r="3" fill="#FFFFFF" className="anim-bubble-2" />
              <circle cx="125" cy="315" r="2" fill="#E0F2FE" className="anim-bubble-3" />

              {/* Glass Outlines */}
              <path
                d="M 98 175 L 98 215 L 68 342 Q 67 346 72 346 L 148 346 Q 153 346 152 342 L 122 215 L 122 175 Z"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Glass Lip & Stopper */}
              <ellipse cx="110" cy="175" rx="12" ry="3.5" fill="none" stroke="#64748B" strokeWidth="2" />
              <rect x="99" y="168" width="22" height="10" rx="2" fill="#475569" />

              {/* Graduation markings */}
              <line x1="125" y1="280" x2="135" y2="280" stroke="#94A3B8" strokeWidth="1.2" opacity="0.7" />
              <line x1="128" y1="295" x2="137" y2="295" stroke="#94A3B8" strokeWidth="1.2" opacity="0.7" />
              <line x1="131" y1="310" x2="139" y2="310" stroke="#94A3B8" strokeWidth="1.2" opacity="0.7" />

              {/* Station Label */}
              <text x="110" y="385" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-700">
                01 Understand
              </text>
              <text x="110" y="402" textAnchor="middle" className="text-[11px] font-bangla fill-brand-ocean font-bold">
                অনুধাবন (কনিক্যাল ফ্লাস্ক)
              </text>
            </g>

            {/* ========================================================
                STATION 02: BOILING FLASK & BUNSEN BURNER — VISUALIZE
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active stage highlight aura */}
              <circle
                cx="340"
                cy="215"
                r="72"
                fill="#8b5cf6"
                opacity={activeStage === 1 ? 0.12 : hoveredIndex === 1 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Bunsen Burner (Base, Barrel & Gas Hose) */}
              <rect x="315" y="344" width="50" height="6" rx="2" fill="#334155" />
              <rect x="334" y="295" width="12" height="49" fill="#64748B" />
              <rect x="332" y="325" width="16" height="6" rx="1" fill="#475569" />
              <circle cx="340" cy="328" r="1.8" fill="#1E293B" /> {/* Air hole */}
              <path d="M 318 346 Q 300 348 290 355" fill="none" stroke="#475569" strokeWidth="2.5" />

              {/* SCIENTIFIC FLICKERING FIRE ("আগুন জ্বলবে নিচে") */}
              <g className="anim-flame">
                {/* Outer Glowing Fire */}
                <path
                  d="M 330 295 C 324 270 332 245 340 235 C 348 245 356 270 350 295 Z"
                  fill="url(#flameOuter)"
                />
                {/* Inner Bright Blue Hot Cone */}
                <path
                  d="M 334 295 C 332 278 337 262 340 256 C 343 262 348 278 346 295 Z"
                  fill="url(#flameInner)"
                />
              </g>

              {/* Tripod Stand & Wire Gauze */}
              <line x1="315" y1="240" x2="305" y2="345" stroke="#475569" strokeWidth="3" />
              <line x1="365" y1="240" x2="375" y2="345" stroke="#475569" strokeWidth="3" />
              <line x1="340" y1="240" x2="340" y2="345" stroke="#475569" strokeWidth="2" opacity="0.4" />
              {/* Ceramic Wire Gauze (Distributes heat safely) */}
              <rect x="312" y="238" width="56" height="4" rx="1" fill="#475569" />
              <ellipse cx="340" cy="240" rx="14" ry="2" fill="#E2E8F0" opacity="0.8" />

              {/* Round Bottom Boiling Flask */}
              {/* Boiling Liquid Fill (Purple #8b5cf6) */}
              <path
                d="M 308 210 A 34 34 0 0 0 372 210 Q 340 216 308 210 Z"
                fill="#8b5cf6"
                opacity="0.85"
              />
              <ellipse cx="340" cy="210" rx="32" ry="5" fill="#C084FC" opacity="0.5" />

              {/* Boiling Agitation Bubbles */}
              <circle cx="332" cy="225" r="2.5" fill="#FFFFFF" className="anim-bubble-1" />
              <circle cx="348" cy="230" r="3" fill="#EDE9FE" className="anim-bubble-2" />
              <circle cx="340" cy="220" r="2" fill="#FFFFFF" className="anim-bubble-3" />

              {/* Steam / Vapor rising in the neck */}
              <path
                d="M 336 170 Q 340 160 344 150 Q 340 140 338 130"
                fill="none"
                stroke="#C084FC"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                className="anim-vapor"
                opacity="0.7"
              />

              {/* Glass Bulb Outline */}
              <circle cx="340" cy="204" r="34" fill="none" stroke="#64748B" strokeWidth="2.2" />
              {/* Flask Neck & Stopper */}
              <rect x="333" y="130" width="14" height="42" fill="none" stroke="#64748B" strokeWidth="2.2" />
              <ellipse cx="340" cy="130" rx="7.5" ry="2.5" fill="none" stroke="#64748B" strokeWidth="2" />
              <rect x="332" y="124" width="16" height="8" rx="2" fill="#475569" />

              {/* Station Label */}
              <text x="340" y="385" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-700">
                02 Visualize
              </text>
              <text x="340" y="402" textAnchor="middle" className="text-[11px] font-bangla fill-brand-ocean font-bold">
                ভিজ্যুয়ালাইজ (গোলতলী ফ্লাস্ক ও বার্নার)
              </text>
            </g>

            {/* ========================================================
                STATION 03: LIEBIG CONDENSER — CONNECT
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active stage highlight aura */}
              <circle
                cx="560"
                cy="190"
                r="75"
                fill="#0d9488"
                opacity={activeStage === 2 ? 0.12 : hoveredIndex === 2 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Heavy Retort Stand holding Condenser */}
              <rect x="525" y="344" width="70" height="6" rx="2" fill="#334155" />
              <line x1="560" y1="110" x2="560" y2="344" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              {/* Double Clamps clamping at 25-degree angle */}
              <rect x="556" y="160" width="8" height="10" rx="1.5" fill="#1E293B" />
              <line x1="560" y1="165" x2="520" y2="155" stroke="#475569" strokeWidth="2.5" />
              <circle cx="518" cy="154" r="6" fill="none" stroke="#334155" strokeWidth="2.5" />

              <rect x="556" y="215" width="8" height="10" rx="1.5" fill="#1E293B" />
              <line x1="560" y1="220" x2="595" y2="195" stroke="#475569" strokeWidth="2.5" />
              <circle cx="597" cy="194" r="6" fill="none" stroke="#334155" strokeWidth="2.5" />

              {/* LIEBIG CONDENSER BODY (Tilted at 25° downwards from 470,120 to 645,210) */}
              {/* Outer Cooling Water Jacket */}
              <g transform="translate(460, 115) rotate(27)">
                {/* Water Jacket Cylinder */}
                <rect x="25" y="-14" width="145" height="28" rx="6" fill="#0d9488" opacity="0.22" stroke="#64748B" strokeWidth="1.8" />
                {/* Water Inlet Nozzle (cold water in at bottom) */}
                <rect x="140" y="14" width="7" height="12" rx="1.5" fill="#64748B" />
                {/* Water Outlet Nozzle (warm water out at top) */}
                <rect x="35" y="-24" width="7" height="12" rx="1.5" fill="#64748B" />

                {/* Inner Vapor & Condensation Tube */}
                <line x1="0" y1="0" x2="195" y2="0" stroke="#94A3B8" strokeWidth="5" opacity="0.5" />
                <line x1="0" y1="0" x2="195" y2="0" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />

                {/* Condensed Liquid Droplets sliding down the tube */}
                <circle cx="30" cy="0" r="2.5" fill="#2DD4BF" className="anim-condenser-drop" />
                <circle cx="65" cy="0" r="3" fill="#14B8A6" className="anim-condenser-drop" style={{ animationDelay: '0.9s' }} />
                <circle cx="100" cy="0" r="2" fill="#5EEAD4" className="anim-condenser-drop" style={{ animationDelay: '1.5s' }} />
              </g>

              {/* Station Label */}
              <text x="560" y="385" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-700">
                03 Connect
              </text>
              <text x="560" y="402" textAnchor="middle" className="text-[11px] font-bangla fill-brand-ocean font-bold">
                সংযোগ (লিবিগ কন্ডেন্সার ও ঘনীভবন)
              </text>
            </g>

            {/* =================================================================
                STATION 04: DRIP NOZZLE & TITRATION BEAKER — PRACTICE
                ("pipe theke fotay fotay porbe")
               ================================================================= */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active stage highlight aura */}
              <circle
                cx="750"
                cy="285"
                r="72"
                fill="#f59e0b"
                opacity={activeStage === 3 ? 0.12 : hoveredIndex === 3 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Retort Stand holding Burette */}
              <rect x="715" y="344" width="70" height="6" rx="2" fill="#334155" />
              <line x1="775" y1="130" x2="775" y2="344" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              <rect x="771" y="240" width="8" height="12" rx="1.5" fill="#1E293B" />
              <line x1="775" y1="246" x2="745" y2="246" stroke="#475569" strokeWidth="2.5" />

              {/* Glass Nozzle Tip hanging at (740, 268) */}
              <polygon points="737,260 743,260 741,270 739,270" fill="#94A3B8" />

              {/* SCIENTIFIC DROP-BY-DROP FALLING ANIMATION ("ফোটায় ফোটায় পড়বে") */}
              {/* Animated Falling Teardrop */}
              <g transform="translate(740, 270)">
                <path
                  d="M 0 0 C -2.5 3 -2.5 6 0 8 C 2.5 6 2.5 3 0 0 Z"
                  fill="#f59e0b"
                  className="anim-drop"
                />
              </g>

              {/* Concentric Ripples forming on liquid surface in beaker (x: 740, y: 320) */}
              <ellipse cx="740" cy="320" rx="4" ry="1.5" fill="none" stroke="#FBBF24" strokeWidth="1.5" className="anim-ripple" />
              <ellipse cx="740" cy="320" rx="4" ry="1.5" fill="none" stroke="#F59E0B" strokeWidth="1.2" className="anim-ripple" style={{ animationDelay: '0.8s' }} />

              {/* Receiving Beaker */}
              {/* Amber Liquid Fill in Beaker */}
              <rect x="712" y="320" width="56" height="24" rx="2" fill="#f59e0b" opacity="0.85" />
              <ellipse cx="740" cy="320" rx="28" ry="3.5" fill="#FBBF24" opacity="0.6" />

              {/* Beaker Glass Body */}
              <path
                d="M 708 285 L 708 343 Q 708 346 712 346 L 768 346 Q 772 346 772 343 L 772 285"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Beaker Spout & Top Rim */}
              <line x1="706" y1="285" x2="774" y2="285" stroke="#64748B" strokeWidth="2.2" />
              {/* Volume Lines on Beaker */}
              <line x1="714" y1="300" x2="724" y2="300" stroke="#94A3B8" strokeWidth="1" />
              <line x1="714" y1="315" x2="728" y2="315" stroke="#94A3B8" strokeWidth="1.2" />
              <line x1="714" y1="330" x2="724" y2="330" stroke="#94A3B8" strokeWidth="1" />

              {/* Station Label */}
              <text x="750" y="385" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-700">
                04 Practice
              </text>
              <text x="750" y="402" textAnchor="middle" className="text-[11px] font-bangla fill-brand-ocean font-bold">
                অনুশীলন (ড্রপ ব্যুরেট ও টাইট্রেশন)
              </text>
            </g>

            {/* ========================================================
                STATION 05: VOLUMETRIC FLASK & PURE CRYSTALS — MASTER
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(4)}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Active stage highlight aura */}
              <circle
                cx="970"
                cy="260"
                r="72"
                fill="#eab308"
                opacity={activeStage === 4 ? 0.15 : hoveredIndex === 4 ? 0.08 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Retort Stand holding Neck */}
              <rect x="915" y="344" width="50" height="6" rx="2" fill="#334155" />
              <line x1="930" y1="150" x2="930" y2="344" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              <rect x="926" y="215" width="8" height="12" rx="1.5" fill="#1E293B" />
              <line x1="930" y1="221" x2="960" y2="221" stroke="#475569" strokeWidth="2.5" />

              {/* VOLUMETRIC FLASK (Long slender calibrated neck with pear-shaped bulb) */}
              {/* Pure Golden Liquid Fill */}
              <path
                d="M 942 342 L 998 342 Q 1008 335 1005 315 Q 1000 280 976 260 L 964 260 Q 940 280 935 315 Q 932 335 942 342 Z"
                fill="#eab308"
                opacity="0.88"
              />
              <ellipse cx="970" cy="260" rx="8" ry="2" fill="#FEF08A" opacity="0.8" />

              {/* Sparkling Synthesized Crystals at Bottom of Flask */}
              <g transform="translate(970, 335)">
                <polygon points="0,-10 6,0 0,10 -6,0" fill="#FEF08A" opacity="0.95" />
                <polygon points="-8,-4 -2,4 -14,4" fill="#FDE047" opacity="0.85" />
                <polygon points="8,-3 14,4 2,4" fill="#FACC15" opacity="0.9" />
                {/* Crystal shimmer sparkles */}
                <circle cx="-12" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.9" />
                <circle cx="10" cy="-8" r="1.8" fill="#FFFFFF" opacity="0.9" />
              </g>

              {/* Glass Outlines */}
              <path
                d="M 963 175 L 963 245 Q 932 270 932 315 Q 932 346 942 346 L 998 346 Q 1008 346 1008 315 Q 1008 270 977 245 L 977 175 Z"
                fill="none"
                stroke="#64748B"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Neck Graduation Calibration Mark */}
              <line x1="961" y1="210" x2="979" y2="210" stroke="#EF4444" strokeWidth="1.8" />

              {/* Glass Stopper */}
              <ellipse cx="970" cy="175" rx="9" ry="3" fill="none" stroke="#64748B" strokeWidth="2" />
              <polygon points="965,173 975,173 978,160 962,160" fill="#475569" />

              {/* Station Label */}
              <text x="970" y="385" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-700">
                05 Master
              </text>
              <text x="970" y="402" textAnchor="middle" className="text-[11px] font-bangla fill-brand-ocean font-bold">
                পারদর্শিতা (ভলিউমেট্রিক ফ্লাস্ক ও স্ফটিক)
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* 2. STATION SELECTOR PILLS BELOW THE BENCH */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 px-2">
        {stages.map((st, idx) => {
          const isActive = idx === activeStage;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm ${
                isActive
                  ? 'bg-brand-navy text-white ring-2 ring-brand-orange/50 shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: st.color }}
              />
              <span className="font-mono font-bold text-[11px] sm:text-xs">{st.num} {st.title}</span>
              <span className="font-bangla text-xs">({st.titleBangla})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
