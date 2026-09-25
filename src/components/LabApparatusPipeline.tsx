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
      }, 5500);
    }

    // Auto-scroll on mobile to center the active apparatus
    if (scrollContainerRef.current) {
      const stationPositions = [70, 280, 520, 720, 930];
      const target = stationPositions[idx] || 0;
      scrollContainerRef.current.scrollTo({ left: target - 100, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      {/* 1. CONTINUOUS 2D VECTOR FLAT LABORATORY PIPELINE BENCH */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent select-none"
      >
        <div className="min-w-[1020px] lg:min-w-full relative px-2">
          <svg
            viewBox="0 0 1140 450"
            className="w-full h-auto overflow-visible select-none bg-white rounded-3xl p-2"
          >
            <defs>
              {/* Soft Pastel Gradients */}
              <linearGradient id="pastelBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="lowerFlaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="pastelPurpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="boilingLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.75" />
              </linearGradient>

              <linearGradient id="coolingJacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#99F6E4" stopOpacity="0.45" />
              </linearGradient>

              <linearGradient id="pastelAmberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="pastelGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FDE047" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAB308" stopOpacity="0.9" />
              </linearGradient>

              {/* Bunsen Burner Outer Flame Gradient */}
              <radialGradient id="flameOuter" cx="50%" cy="80%" r="65%">
                <stop offset="0%" stopColor="#FDE047" stopOpacity="1" />
                <stop offset="45%" stopColor="#FB923C" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#EA580C" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
              </radialGradient>

              {/* Bunsen Burner Inner Hot Core Gradient */}
              <radialGradient id="flameInner" cx="50%" cy="80%" r="55%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
              </radialGradient>

              {/* CSS Animations embedded in SVG */}
              <style>{`
                @keyframes flameFlicker {
                  0%, 100% {
                    transform: scale(1) skewX(0deg);
                    filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.8));
                  }
                  25% {
                    transform: scale(1.06, 0.94) skewX(-1.5deg);
                    filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.9));
                  }
                  50% {
                    transform: scale(0.95, 1.05) skewX(1deg);
                    filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.7));
                  }
                  75% {
                    transform: scale(1.04, 0.96) skewX(-1deg);
                    filter: drop-shadow(0 0 9px rgba(249, 115, 22, 0.85));
                  }
                }
                @keyframes gravityDropFall {
                  0% {
                    transform: translateY(0);
                    opacity: 0;
                  }
                  15% {
                    opacity: 1;
                    transform: translateY(4px);
                  }
                  75% {
                    opacity: 1;
                    transform: translateY(50px);
                  }
                  95% {
                    opacity: 0.6;
                    transform: translateY(58px);
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(60px);
                  }
                }
                @keyframes dropFallStep4 {
                  0% {
                    transform: translateY(0);
                    opacity: 0;
                  }
                  15% {
                    opacity: 1;
                    transform: translateY(4px);
                  }
                  75% {
                    opacity: 1;
                    transform: translateY(48px);
                  }
                  90% {
                    opacity: 0.7;
                    transform: translateY(54px);
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(56px);
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
                    r: 16;
                    opacity: 0;
                  }
                }
                @keyframes vaporRise {
                  0% {
                    transform: translateY(0) scale(0.85);
                    opacity: 0;
                  }
                  25% {
                    opacity: 0.75;
                  }
                  75% {
                    opacity: 0.6;
                  }
                  100% {
                    transform: translateY(-45px) scale(1.15);
                    opacity: 0;
                  }
                }
                @keyframes bubbleBoil {
                  0% {
                    transform: translateY(0);
                    opacity: 0;
                  }
                  20% {
                    opacity: 0.85;
                  }
                  80% {
                    opacity: 0.85;
                  }
                  100% {
                    transform: translateY(-22px);
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
                  85% {
                    opacity: 0.9;
                  }
                  100% {
                    transform: translate(145px, 80px);
                    opacity: 0;
                  }
                }
                @keyframes pipeDashFlow {
                  to {
                    stroke-dashoffset: -36;
                  }
                }
                @keyframes suctionDashUp {
                  to {
                    stroke-dashoffset: 36;
                  }
                }
                .anim-flame {
                  transform-origin: 330px 325px;
                  animation: flameFlicker 1.3s infinite ease-in-out;
                }
                .anim-gravity-drop {
                  animation: gravityDropFall 1.5s infinite cubic-bezier(0.4, 0, 1, 1);
                }
                .anim-drop-step4 {
                  animation: dropFallStep4 1.6s infinite cubic-bezier(0.4, 0, 1, 1) 0.3s;
                }
                .anim-ripple {
                  animation: rippleEffect 1.6s infinite ease-out 0.3s;
                }
                .anim-vapor-1 {
                  animation: vaporRise 2.2s infinite ease-out;
                }
                .anim-vapor-2 {
                  animation: vaporRise 2.5s infinite ease-out 0.8s;
                }
                .anim-bubble-1 {
                  animation: bubbleBoil 1.8s infinite ease-in;
                }
                .anim-bubble-2 {
                  animation: bubbleBoil 1.5s infinite ease-in 0.5s;
                }
                .anim-condenser-slide {
                  animation: condenserSliding 2.1s infinite linear;
                }
                .anim-pipe-flow {
                  stroke-dasharray: 8 6;
                  animation: pipeDashFlow 1.6s linear infinite;
                }
                .anim-suction-flow {
                  stroke-dasharray: 8 6;
                  animation: suctionDashUp 1.5s linear infinite;
                }
              `}</style>
            </defs>

            {/* --- MINIMAL BASE BENCH LINE --- */}
            <line x1="30" y1="380" x2="1110" y2="380" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <rect x="30" y="380" width="1080" height="6" rx="2" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

            {/* --- CONNECTING TRANSPARENT GLASS TUBING (Left to Right) --- */}

            {/* Tube 1: Lower Flask Side Arm (Step 1) -> Boiling Flask Tall Neck (Step 2) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 165 330 L 215 330 Q 225 330 225 320 L 225 145 Q 225 135 235 135 L 315 135"
                fill="none"
                stroke="#334155"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 165 330 L 215 330 Q 225 330 225 320 L 225 145 Q 225 135 235 135 L 315 135"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 165 330 L 215 330 Q 225 330 225 320 L 225 145 Q 225 135 235 135 L 315 135"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 0 ? 0.95 : 0.4}
              />
            </g>

            {/* Tube 2: Boiling Flask Tall Neck Top (Step 2) -> Liebig Condenser Inlet (Step 3) */}
            <g className="transition-opacity duration-300">
              <path
                d="M 330 80 L 330 65 Q 330 55 342 55 L 400 55 Q 412 55 418 68 L 438 100"
                fill="none"
                stroke="#334155"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 330 80 L 330 65 Q 330 55 342 55 L 400 55 Q 412 55 418 68 L 438 100"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 330 80 L 330 65 Q 330 55 342 55 L 400 55 Q 412 55 418 68 L 438 100"
                fill="none"
                stroke="#C084FC"
                strokeWidth="2.5"
                className="anim-pipe-flow"
                opacity={activeStage >= 1 ? 0.95 : 0.4}
              />
            </g>

            {/* Tube 3: Slanted Liebig Condenser -> Open Beaker (Step 4) via curved delivery adapter */}
            <g className="transition-opacity duration-300">
              <path
                d="M 640 212 L 655 220 Q 670 230 670 245 L 670 262"
                fill="none"
                stroke="#334155"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 640 212 L 655 220 Q 670 230 670 245 L 670 262"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 640 212 L 655 220 Q 670 230 670 245 L 670 262"
                fill="none"
                stroke="#0D9488"
                strokeWidth="2"
                className="anim-pipe-flow"
                opacity={activeStage >= 2 ? 0.95 : 0.4}
              />
            </g>

            {/* Tube 4: VACUUM SUCTION TUBE: Open Beaker (Step 4) UPWARDS into Volumetric Flask (Step 5) */}
            <g className="transition-opacity duration-300">
              {/* Outer glass suction line */}
              <path
                d="M 690 355 L 690 330 Q 690 320 700 320 L 730 320 Q 740 320 740 310 L 740 95 Q 740 82 755 82 L 815 82 Q 830 82 830 95 L 830 148"
                fill="none"
                stroke="#334155"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 690 355 L 690 330 Q 690 320 700 320 L 730 320 Q 740 320 740 310 L 740 95 Q 740 82 755 82 L 815 82 Q 830 82 830 95 L 830 148"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Inner animated suction flow (Liquid moving UP out of beaker due to vacuum) */}
              <path
                d="M 690 355 L 690 330 Q 690 320 700 320 L 730 320 Q 740 320 740 310 L 740 95 Q 740 82 755 82 L 815 82 Q 830 82 830 95 L 830 148"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                className="anim-suction-flow"
                opacity={activeStage >= 3 ? 0.95 : 0.4}
              />
            </g>

            {/* Vacuum Hose Line: From Volumetric Flask 2-Hole Stopper to Mechanical Vacuum Pump */}
            <g>
              <path
                d="M 840 148 L 840 120 Q 840 108 852 108 L 930 108 Q 942 108 942 120 L 942 275"
                fill="none"
                stroke="#475569"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
              {/* Vacuum direction arrows on hose */}
              <polygon points="942,190 938,198 946,198" fill="#475569" />
            </g>

            {/* ========================================================
                STEP 1: SEPARATORY FUNNEL & LOWER FLASK (GRAVITY DRIP)
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection Aura */}
              <circle
                cx="140"
                cy="230"
                r="78"
                fill="#38BDF8"
                opacity={activeStage === 0 ? 0.12 : hoveredIndex === 0 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Lab Stand holding separatory funnel */}
              <rect x="50" y="370" width="70" height="10" rx="3" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
              <line x1="75" y1="70" x2="75" y2="370" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
              {/* Clamp at Funnel */}
              <rect x="70" y="125" width="10" height="12" rx="2" fill="#1E293B" />
              <line x1="75" y1="131" x2="118" y2="131" stroke="#334155" strokeWidth="3" />
              <path d="M 118 122 Q 138 131 158 122" fill="none" stroke="#334155" strokeWidth="3" />

              {/* Separatory Funnel (Pear Shape) */}
              {/* Soft Blue Liquid inside */}
              <path
                d="M 132 105 C 110 125 110 160 132 185 L 138 205 L 142 205 L 148 185 C 170 160 170 125 148 105 Z"
                fill="url(#pastelBlueGrad)"
                opacity="0.9"
              />
              {/* Glass pear body outline */}
              <path
                d="M 132 80 L 132 95 C 108 118 108 165 132 192 L 138 212 L 138 232 L 142 232 L 142 212 L 148 192 C 172 165 172 118 148 95 L 148 80 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              {/* Top rim and stopper */}
              <ellipse cx="140" cy="80" rx="14" ry="4" fill="none" stroke="#334155" strokeWidth="2.5" />
              <polygon points="134,80 146,80 148,68 132,68" fill="#475569" stroke="#334155" strokeWidth="2" />

              {/* Stopcock Valve on Funnel Stem */}
              <rect x="132" y="215" width="16" height="8" rx="2" fill="#475569" stroke="#334155" strokeWidth="2" />
              <line x1="140" y1="211" x2="140" y2="227" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
              <line x1="134" y1="211" x2="146" y2="211" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

              {/* Drip Nozzle */}
              <line x1="138" y1="223" x2="138" y2="235" stroke="#334155" strokeWidth="2.5" />
              <line x1="142" y1="223" x2="142" y2="235" stroke="#334155" strokeWidth="2.5" />

              {/* Gravity Falling Droplet */}
              <g transform="translate(140, 238)">
                <circle cx="0" cy="0" r="3.5" fill="#38BDF8" className="anim-gravity-drop" />
              </g>

              {/* LOWER FLASK (Conical / Receiving Flask placed under the funnel) */}
              {/* Blue liquid collection */}
              <path
                d="M 125 330 L 110 376 Q 110 380 115 380 L 165 380 Q 170 380 170 376 L 155 330 Z"
                fill="url(#lowerFlaskGrad)"
              />
              {/* Surface ripples */}
              <ellipse cx="140" cy="330" rx="15" ry="3" fill="#BAE6FD" opacity="0.8" />

              {/* Conical Flask Glass Body */}
              <path
                d="M 132 270 L 132 295 L 108 375 Q 106 380 112 380 L 168 380 Q 174 380 172 375 L 148 295 L 148 270 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <ellipse cx="140" cy="270" rx="12" ry="3.5" fill="none" stroke="#334155" strokeWidth="2.2" />

              {/* Side Arm on Lower Flask */}
              <path d="M 158 326 L 168 326 L 168 334 L 158 334" fill="none" stroke="#334155" strokeWidth="2.4" />

              {/* Step Label */}
              <text x="140" y="410" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-800">
                01 Understand
              </text>
              <text x="140" y="427" textAnchor="middle" className="text-[11px] font-bangla fill-sky-600 font-bold">
                অনুধাবন (সেপারেটরি ফানেল ও গ্র্যাভিটি)
              </text>
            </g>

            {/* ========================================================
                STEP 2: BOILING FLASK & GLOWING BUNSEN BURNER (HEAT & VAPOR)
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection Aura */}
              <circle
                cx="330"
                cy="230"
                r="78"
                fill="#8B5CF6"
                opacity={activeStage === 1 ? 0.12 : hoveredIndex === 1 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* TRIPOD STAND */}
              <line x1="290" y1="292" x2="370" y2="292" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
              {/* Wire gauze mesh lines */}
              <line x1="295" y1="290" x2="365" y2="290" stroke="#64748B" strokeWidth="2" strokeDasharray="3 2" />
              {/* Tripod legs */}
              <line x1="300" y1="292" x2="285" y2="380" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="360" y1="292" x2="375" y2="380" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />

              {/* GLOWING BUNSEN BURNER (Underneath) */}
              <rect x="310" y="370" width="40" height="10" rx="3" fill="#475569" stroke="#334155" strokeWidth="2.5" />
              <rect x="325" y="332" width="10" height="38" rx="1.5" fill="#64748B" stroke="#334155" strokeWidth="2" />
              {/* Air collar */}
              <rect x="323" y="352" width="14" height="6" rx="1" fill="#334155" />
              {/* Gas hose line */}
              <path d="M 325 365 L 305 365 Q 295 365 295 372 L 295 380" fill="none" stroke="#475569" strokeWidth="2.5" />

              {/* Glowing Bunsen Flame */}
              <g className="anim-flame">
                {/* Outer flame */}
                <path
                  d="M 322 332 C 318 315 325 296 330 292 C 335 296 342 315 338 332 Z"
                  fill="url(#flameOuter)"
                />
                {/* Inner hot core */}
                <path
                  d="M 326 332 C 324 322 328 310 330 307 C 332 310 336 322 334 332 Z"
                  fill="url(#flameInner)"
                />
              </g>

              {/* Heat glow under flask */}
              <ellipse cx="330" cy="292" rx="28" ry="4" fill="#F97316" opacity="0.3" filter="drop-shadow(0 0 4px #F97316)" />

              {/* ROUND BOTTOM BOILING FLASK */}
              {/* Boiling Liquid in bulb */}
              <path
                d="M 302 272 Q 330 268 358 272 C 362 288 350 292 330 292 C 310 292 298 288 302 272 Z"
                fill="url(#boilingLiquidGrad)"
              />
              <ellipse cx="330" cy="272" rx="28" ry="4" fill="#DDD6FE" opacity="0.6" />

              {/* Boiling bubbles */}
              <circle cx="320" cy="285" r="2.5" fill="#FFFFFF" className="anim-bubble-1" />
              <circle cx="335" cy="288" r="3" fill="#FFFFFF" className="anim-bubble-2" />
              <circle cx="342" cy="282" r="2" fill="#FFFFFF" className="anim-bubble-1" />

              {/* Glass Body Outlines */}
              {/* Round bottom bulb */}
              <path
                d="M 320 228 C 295 240 295 285 315 294 C 330 300 345 295 358 285 C 365 270 365 240 340 228"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              {/* Tall vertical neck */}
              <line x1="320" y1="80" x2="320" y2="230" stroke="#334155" strokeWidth="2.8" />
              <line x1="340" y1="80" x2="340" y2="230" stroke="#334155" strokeWidth="2.8" />
              <ellipse cx="330" cy="80" rx="12" ry="3.5" fill="none" stroke="#334155" strokeWidth="2.2" />

              {/* RISING PURPLE VAPOR THROUGH VERTICAL TUBE */}
              <g transform="translate(330, 200)">
                <circle cx="-3" cy="0" r="5" fill="#C084FC" opacity="0.5" className="anim-vapor-1" />
                <circle cx="4" cy="-10" r="6" fill="#DDD6FE" opacity="0.55" className="anim-vapor-2" />
                <circle cx="-1" cy="-20" r="7" fill="#A855F7" opacity="0.45" className="anim-vapor-1" />
                <circle cx="2" cy="-40" r="8" fill="#C084FC" opacity="0.6" className="anim-vapor-2" />
              </g>

              {/* Upward Pressure Indicator Arrow */}
              <g transform="translate(352, 160)">
                <line x1="0" y1="25" x2="0" y2="0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
                <polygon points="0,-4 -4,4 4,4" fill="#A855F7" />
              </g>

              {/* Step Label */}
              <text x="330" y="410" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-800">
                02 Visualize
              </text>
              <text x="330" y="427" textAnchor="middle" className="text-[11px] font-bangla fill-purple-600 font-bold">
                ভিজ্যুয়ালাইজ (বয়েলিং ফ্লাস্ক ও বুনসেন বার্নার)
              </text>
            </g>

            {/* ========================================================
                STEP 3: SLANTED LIEBIG CONDENSER WITH WATER COOLING JACKET
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection Aura */}
              <circle
                cx="540"
                cy="170"
                r="82"
                fill="#0D9488"
                opacity={activeStage === 2 ? 0.12 : hoveredIndex === 2 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Retort Stand holding condenser */}
              <rect x="495" y="370" width="60" height="10" rx="3" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
              <line x1="520" y1="140" x2="520" y2="370" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="515" y="180" width="10" height="12" rx="2" fill="#1E293B" />
              <line x1="520" y1="186" x2="540" y2="175" stroke="#334155" strokeWidth="3" />

              {/* Slanted Liebig Condenser Body */}
              {/* Water Cooling Outer Jacket Fill */}
              <polygon
                points="465,95 615,182 605,199 455,112"
                fill="url(#coolingJacketGrad)"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              {/* Water Jacket In/Out Port Nipples */}
              {/* Cool Water Inlet (at lower end, underside) */}
              <line x1="595" y1="193" x2="583" y2="214" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
              <text x="580" y="230" textAnchor="middle" className="text-[9px] font-mono fill-teal-600 font-bold">
                Water In ↓
              </text>

              {/* Warm Water Outlet (at upper end, top side) */}
              <line x1="475" y1="101" x2="487" y2="80" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
              <text x="495" y="75" textAnchor="middle" className="text-[9px] font-mono fill-teal-600 font-bold">
                Water Out ↑
              </text>

              {/* Inner Glass Vapor/Condensation Tube */}
              <line x1="438" y1="100" x2="640" y2="212" stroke="#334155" strokeWidth="3" />
              <line x1="442" y1="107" x2="644" y2="219" stroke="#334155" strokeWidth="3" />

              {/* Condensing Liquid Droplets Sliding Down the Tube */}
              <g className="anim-condenser-slide" transform="translate(460, 110)">
                <ellipse cx="0" cy="0" rx="3.5" ry="2" fill="#0D9488" opacity="0.85" transform="rotate(28)" />
                <ellipse cx="12" cy="7" rx="3" ry="1.8" fill="#38BDF8" opacity="0.8" transform="rotate(28)" />
              </g>

              {/* Step Label */}
              <text x="540" y="410" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-800">
                03 Connect
              </text>
              <text x="540" y="427" textAnchor="middle" className="text-[11px] font-bangla fill-teal-600 font-bold">
                সংযোগ (লিবিগ কন্ডেন্সার ও জ্যাকেট)
              </text>
            </g>

            {/* ========================================================
                STEP 4: OPEN GLASS BEAKER & NATURALLY FALLING DROPS
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection Aura */}
              <circle
                cx="675"
                cy="320"
                r="72"
                fill="#F59E0B"
                opacity={activeStage === 3 ? 0.12 : hoveredIndex === 3 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* Droplets Naturally Falling Down from Drip Tip */}
              <g transform="translate(670, 265)">
                <circle cx="0" cy="0" r="3.5" fill="#F59E0B" className="anim-drop-step4" />
              </g>

              {/* OPEN GLASS BEAKER (Resting directly on base bench) */}
              {/* Amber Liquid Fill inside beaker */}
              <path
                d="M 643 335 L 643 376 Q 643 380 648 380 L 697 380 Q 702 380 702 376 L 702 335 Z"
                fill="url(#pastelAmberGrad)"
              />
              {/* Ripple on liquid surface where drops hit */}
              <ellipse cx="670" cy="335" rx="3" ry="1.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="anim-ripple" />
              <ellipse cx="670" cy="335" rx="26" ry="3.5" fill="#FEF3C7" opacity="0.6" />

              {/* Beaker Glass Body */}
              <path
                d="M 638 300 L 643 376 Q 643 380 648 380 L 697 380 Q 702 380 702 376 L 707 300"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Beaker Spout at left top rim */}
              <path d="M 634 300 L 710 300" stroke="#334155" strokeWidth="2.8" strokeLinecap="round" />

              {/* Volume Graduation Lines on Beaker */}
              <line x1="648" y1="320" x2="658" y2="320" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="648" y1="340" x2="662" y2="340" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="648" y1="360" x2="658" y2="360" stroke="#94A3B8" strokeWidth="1.5" />

              {/* Step Label */}
              <text x="675" y="410" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-800">
                04 Practice
              </text>
              <text x="675" y="427" textAnchor="middle" className="text-[11px] font-bangla fill-amber-600 font-bold">
                অনুশীলন (খোলা বিকার ও ড্রপওয়াইজ সংগ্রহ)
              </text>
            </g>

            {/* ========================================================
                STEP 5: VOLUMETRIC FLASK (2-HOLE STOPPER) & VACUUM PUMP
               ======================================================== */}
            <g
              className="cursor-pointer group"
              onClick={() => handleSelect(4)}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection Aura */}
              <circle
                cx="900"
                cy="280"
                r="88"
                fill="#EAB308"
                opacity={activeStage === 4 ? 0.12 : hoveredIndex === 4 ? 0.06 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              {/* VOLUMETRIC FLASK (Long slender calibrated neck with pear-shaped bulb) */}
              {/* Pure Golden Liquid Fill */}
              <path
                d="M 808 376 Q 808 380 813 380 L 857 380 Q 862 380 862 376 Q 868 340 850 305 L 845 305 L 825 305 L 820 305 Q 802 340 808 376 Z"
                fill="url(#pastelGoldGrad)"
              />
              <ellipse cx="835" cy="305" rx="12" ry="2.5" fill="#FEF08A" opacity="0.8" />

              {/* Sparkling Crystals in Volumetric Flask */}
              <g transform="translate(835, 365)">
                <polygon points="0,-8 5,0 0,8 -5,0" fill="#FFFFFF" opacity="0.95" />
                <polygon points="-8,-3 -3,3 -13,3" fill="#FEF08A" opacity="0.9" />
                <polygon points="8,-2 13,3 3,3" fill="#FDE047" opacity="0.9" />
                <circle cx="-10" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.9" />
                <circle cx="9" cy="-7" r="1.8" fill="#FFFFFF" opacity="0.9" />
              </g>

              {/* Glass Outlines */}
              <path
                d="M 828 150 L 828 275 Q 798 310 808 376 Q 808 380 813 380 L 857 380 Q 862 380 862 376 Q 872 310 842 275 L 842 150 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              {/* Neck Graduation Calibration Mark */}
              <line x1="826" y1="210" x2="844" y2="210" stroke="#EF4444" strokeWidth="2" />

              {/* 2-HOLE RUBBER STOPPER */}
              <polygon points="824,152 846,152 848,138 822,138" fill="#EA580C" stroke="#334155" strokeWidth="2.4" />
              {/* Hole 1: Suction Tube inlet */}
              <ellipse cx="830" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />
              {/* Hole 2: Vacuum line outlet */}
              <ellipse cx="840" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />

              {/* MECHANICAL VACUUM PUMP */}
              {/* Heavy pump base */}
              <rect x="915" y="365" width="85" height="15" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
              {/* Rubber mounting pads */}
              <rect x="922" y="378" width="14" height="4" rx="1" fill="#475569" />
              <rect x="978" y="378" width="14" height="4" rx="1" fill="#475569" />

              {/* Motor body */}
              <rect x="925" y="305" width="70" height="60" rx="6" fill="#64748B" stroke="#334155" strokeWidth="2.8" />
              {/* Motor cooling fins / ribs */}
              <line x1="930" y1="318" x2="985" y2="318" stroke="#334155" strokeWidth="2.2" />
              <line x1="930" y1="330" x2="985" y2="330" stroke="#334155" strokeWidth="2.2" />
              <line x1="930" y1="342" x2="985" y2="342" stroke="#334155" strokeWidth="2.2" />
              <line x1="930" y1="354" x2="985" y2="354" stroke="#334155" strokeWidth="2.2" />

              {/* Vacuum Pressure Dial Gauge on Top */}
              <line x1="950" y1="305" x2="950" y2="288" stroke="#334155" strokeWidth="3.5" />
              <circle cx="950" cy="275" r="16" fill="#FFFFFF" stroke="#334155" strokeWidth="2.8" />
              {/* Dial tick marks */}
              <line x1="950" y1="262" x2="950" y2="266" stroke="#64748B" strokeWidth="1.5" />
              <line x1="960" y1="266" x2="957" y2="269" stroke="#64748B" strokeWidth="1.5" />
              <line x1="940" y1="266" x2="943" y2="269" stroke="#64748B" strokeWidth="1.5" />
              {/* Vacuum indicator needle */}
              <line x1="950" y1="275" x2="943" y2="267" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="950" cy="275" r="2" fill="#334155" />

              {/* Vacuum intake nozzle & label */}
              <rect x="938" y="275" width="8" height="12" rx="1.5" fill="#334155" />

              {/* Pump Exhaust Port with subtle airflow */}
              <path d="M 980 305 L 980 290 Q 980 282 988 282 L 992 282" fill="none" stroke="#334155" strokeWidth="3" />
              {/* Air exhaust wisps */}
              <path d="M 995 278 Q 1002 278 1005 272" fill="none" stroke="#94A3B8" strokeWidth="1.5" opacity="0.7" />
              <path d="M 995 284 Q 1004 284 1008 288" fill="none" stroke="#94A3B8" strokeWidth="1.5" opacity="0.7" />

              {/* Power Switch & Indicator Light */}
              <circle cx="985" cy="358" r="2.5" fill="#22C55E" />
              <text x="960" y="398" textAnchor="middle" className="text-[9.5px] font-mono fill-slate-500 font-bold">
                VACUUM PUMP
              </text>

              {/* Step Label */}
              <text x="890" y="420" textAnchor="middle" className="text-[13px] font-mono font-bold fill-slate-800">
                05 Master
              </text>
              <text x="890" y="437" textAnchor="middle" className="text-[11px] font-bangla fill-amber-500 font-bold">
                পারদর্শিতা (ভলিউমেট্রিক ফ্লাস্ক ও ভ্যাকুয়াম পাম্প)
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
