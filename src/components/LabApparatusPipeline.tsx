import React from 'react';

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
  stages?: LabStage[];
  className?: string;
}

export const LabApparatusPipeline: React.FC<LabApparatusPipelineProps> = ({
  className = '',
}) => {
  return (
    <div className={`w-full relative ${className}`}>
      {/* CONTINUOUS 2D VECTOR FLAT LABORATORY PIPELINE BENCH */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent select-none">
        <div className="min-w-[1040px] lg:min-w-full relative px-2">
          <svg
            viewBox="0 0 1140 450"
            className="w-full h-auto overflow-visible select-none bg-white rounded-3xl p-3"
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

              <linearGradient id="boilingLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#C084FC" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="coolingJacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#99F6E4" stopOpacity="0.5" />
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

              {/* CSS Continuous Animations */}
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
                    transform: translateY(-48px) scale(1.15);
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

            {/* ========================================================
                CONNECTING SEAMLESS OPEN-MOUTH GLASS TUBING
               ======================================================== */}

            {/* TUBE 1: Seamless Open Connection from Lower Flask -> Boiling Flask Neck */}
            <g>
              {/* Outer white glass backing */}
              <path
                d="M 158 328 L 215 328 Q 224 328 224 319 L 224 144 Q 224 135 233 135 L 320 135"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="7"
              />
              {/* Top glass wall */}
              <path
                d="M 158 324 L 215 324 Q 220 324 220 319 L 220 144 Q 220 131 233 131 L 320 131"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Bottom glass wall */}
              <path
                d="M 160 338 L 215 338 Q 228 338 228 325 L 228 144 Q 228 139 237 139 L 320 139"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Continuous animated blue chemical stream entering neck with open mouth */}
              <path
                d="M 155 331 L 215 331 Q 224 331 224 322 L 224 144 Q 224 135 233 135 L 325 135"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.5"
                className="anim-pipe-flow"
              />
            </g>

            {/* TUBE 2: Seamless Open Connection from Boiling Flask Neck Top -> Liebig Condenser */}
            <g>
              {/* Outer white backing */}
              <path
                d="M 330 80 Q 330 58 344 58 L 400 58 Q 410 58 416 68 L 438 104"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
              />
              {/* Top/left curved wall of delivery tube */}
              <path
                d="M 320 80 Q 320 54 340 54 L 400 54 Q 412 54 418 66 L 442 100"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Bottom/right curved wall of delivery tube */}
              <path
                d="M 338 80 Q 338 66 346 66 L 398 66 Q 406 66 410 74 L 434 108"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Animated purple vapor/condensate stream flowing smoothly out of neck */}
              <path
                d="M 329 80 Q 329 60 343 60 L 399 60 Q 409 60 414 70 L 438 104"
                fill="none"
                stroke="#C084FC"
                strokeWidth="3.5"
                className="anim-pipe-flow"
              />
            </g>

            {/* TUBE 3: Liebig Condenser Central Tube -> Open Curved Drip Nozzle */}
            <g>
              {/* Outer/top curved glass wall */}
              <path
                d="M 442 100 L 638 210 Q 656 220 663 235 L 666 262"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
              />
              {/* Inner/bottom curved glass wall */}
              <path
                d="M 434 108 L 630 218 Q 644 226 652 238 L 656 262"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
              />
              {/* Notice: At y=262, between (656, 262) and (666, 262) the nozzle mouth is OPEN! */}
              <line x1="656" y1="262" x2="656" y2="264" stroke="#334155" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="666" y1="262" x2="666" y2="264" stroke="#334155" strokeWidth="2.8" strokeLinecap="round" />

              {/* Animated condensate stream inside */}
              <path
                d="M 438 104 L 634 214 Q 650 223 658 236 L 661 262"
                fill="none"
                stroke="#0D9488"
                strokeWidth="2.5"
                className="anim-pipe-flow"
              />
            </g>

            {/* TUBE 4: VACUUM SUCTION TUBE (Open mouth in beaker -> into Volumetric Flask) */}
            <g>
              {/* White backing for glass transparency */}
              <path
                d="M 692 355 L 692 320 Q 692 312 700 312 L 730 312 Q 740 312 740 302 L 740 92 Q 740 76 754 76 L 814 76 Q 826 76 826 92 L 826 215"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="8"
              />
              {/* Left/inner glass wall of suction tube */}
              <path
                d="M 688 355 L 688 318 Q 688 308 698 308 L 728 308 Q 736 308 736 300 L 736 92 Q 736 78 750 78 L 814 78 Q 824 78 824 92 L 824 215"
                fill="none"
                stroke="#334155"
                strokeWidth="2.6"
              />
              {/* Right/outer glass wall of suction tube */}
              <path
                d="M 696 355 L 696 326 Q 696 316 704 316 L 724 316 Q 744 316 744 300 L 744 92 Q 744 70 758 70 L 806 70 Q 816 70 816 92 L 816 215"
                fill="none"
                stroke="#334155"
                strokeWidth="2.6"
              />
              {/* OPEN MOUTH INSIDE BEAKER at y=355 (no line closing 688 to 696) */}
              <line x1="688" y1="355" x2="688" y2="357" stroke="#334155" strokeWidth="2.6" strokeLinecap="round" />
              <line x1="696" y1="355" x2="696" y2="357" stroke="#334155" strokeWidth="2.6" strokeLinecap="round" />

              {/* OPEN MOUTH INSIDE FLASK at y=215 (no line closing 816 to 824) */}
              <line x1="816" y1="215" x2="816" y2="217" stroke="#334155" strokeWidth="2.6" strokeLinecap="round" />
              <line x1="824" y1="215" x2="824" y2="217" stroke="#334155" strokeWidth="2.6" strokeLinecap="round" />

              {/* Animated amber fluid stream pulled UPWARDS by vacuum suction */}
              <path
                d="M 692 355 L 692 320 Q 692 312 700 312 L 730 312 Q 740 312 740 302 L 740 92 Q 740 76 754 76 L 814 76 Q 822 76 822 92 L 822 215"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="3.2"
                className="anim-suction-flow"
              />
            </g>

            {/* VACUUM HOSE LINE: From Stopper Hole 2 to Mechanical Vacuum Pump */}
            <g>
              <path
                d="M 834 150 L 834 120 Q 834 108 846 108 L 940 108 Q 950 108 950 120 L 950 275"
                fill="none"
                stroke="#475569"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
              {/* Vacuum suction directional indicator arrows */}
              <polygon points="950,190 946,198 954,198" fill="#475569" />
            </g>

            {/* ========================================================
                STEP 1: SEPARATORY FUNNEL & LOWER RECEIVING FLASK
               ======================================================== */}
            <g>
              {/* Stand base and vertical rod */}
              <rect x="50" y="370" width="70" height="10" rx="3" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
              <line x1="75" y1="70" x2="75" y2="370" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
              {/* Bosshead clamp holding ring */}
              <rect x="70" y="125" width="10" height="12" rx="2" fill="#1E293B" />
              <line x1="75" y1="131" x2="114" y2="131" stroke="#334155" strokeWidth="3" />
              <path d="M 114 122 Q 135 131 156 122" fill="none" stroke="#334155" strokeWidth="3" />

              {/* Separatory Funnel (Pear Shape) */}
              {/* Soft Blue Liquid */}
              <path
                d="M 127 105 C 105 125 105 160 127 185 L 133 205 L 137 205 L 143 185 C 165 160 165 125 143 105 Z"
                fill="url(#pastelBlueGrad)"
                opacity="0.9"
              />
              {/* Funnel glass outline */}
              <path
                d="M 127 80 L 127 95 C 103 118 103 165 127 192 L 133 212 L 133 232 L 137 232 L 137 212 L 143 192 C 167 165 167 118 143 95 L 143 80 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <ellipse cx="135" cy="80" rx="14" ry="4" fill="none" stroke="#334155" strokeWidth="2.5" />
              <polygon points="129,80 141,80 143,68 127,68" fill="#475569" stroke="#334155" strokeWidth="2" />

              {/* Stopcock Valve */}
              <rect x="127" y="215" width="16" height="8" rx="2" fill="#475569" stroke="#334155" strokeWidth="2" />
              <line x1="135" y1="211" x2="135" y2="227" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
              <line x1="129" y1="211" x2="141" y2="211" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

              {/* Drip nozzle stem (OPEN at bottom) */}
              <line x1="133" y1="223" x2="133" y2="236" stroke="#334155" strokeWidth="2.5" />
              <line x1="137" y1="223" x2="137" y2="236" stroke="#334155" strokeWidth="2.5" />

              {/* Falling Drop under Gravity */}
              <g transform="translate(135, 238)">
                <circle cx="0" cy="0" r="3.5" fill="#38BDF8" className="anim-gravity-drop" />
              </g>

              {/* LOWER RECEIVING FLASK (Conical) */}
              {/* Blue liquid collection */}
              <path
                d="M 120 330 L 105 376 Q 105 380 110 380 L 160 380 Q 165 380 165 376 L 155 338 L 160 338 L 158 328 L 150 328 Z"
                fill="url(#lowerFlaskGrad)"
              />
              <ellipse cx="135" cy="330" rx="15" ry="3" fill="#BAE6FD" opacity="0.8" />

              {/* Conical Flask Glass Body (Open side mouth into delivery tube!) */}
              <path
                d="M 127 270 L 127 295 L 103 375 Q 101 380 107 380 L 163 380 Q 169 380 167 375 L 160 338"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <path
                d="M 158 324 L 143 295 L 143 270"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
              />
              <ellipse cx="135" cy="270" rx="12" ry="3.5" fill="none" stroke="#334155" strokeWidth="2.2" />

              {/* Clean Step Label */}
              <text x="135" y="414" textAnchor="middle" className="text-[15px] font-sans font-bold fill-slate-800 tracking-tight">
                Understand
              </text>
              <text x="135" y="432" textAnchor="middle" className="text-[12px] font-bangla fill-sky-600 font-semibold">
                অনুধাবন
              </text>
            </g>

            {/* ========================================================
                STEP 2: BOILING FLASK & BUNSEN BURNER (HEAT & VAPOR)
               ======================================================== */}
            <g>
              {/* TRIPOD STAND */}
              <line x1="290" y1="292" x2="370" y2="292" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="295" y1="290" x2="365" y2="290" stroke="#64748B" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="300" y1="292" x2="285" y2="380" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="360" y1="292" x2="375" y2="380" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />

              {/* BUNSEN BURNER */}
              <rect x="310" y="370" width="40" height="10" rx="3" fill="#475569" stroke="#334155" strokeWidth="2.5" />
              <rect x="325" y="332" width="10" height="38" rx="1.5" fill="#64748B" stroke="#334155" strokeWidth="2" />
              <rect x="323" y="352" width="14" height="6" rx="1" fill="#334155" />
              <path d="M 325 365 L 305 365 Q 295 365 295 372 L 295 380" fill="none" stroke="#475569" strokeWidth="2.5" />

              {/* Glowing Bunsen Flame */}
              <g className="anim-flame">
                <path
                  d="M 322 332 C 318 315 325 296 330 292 C 335 296 342 315 338 332 Z"
                  fill="url(#flameOuter)"
                />
                <path
                  d="M 326 332 C 324 322 328 310 330 307 C 332 310 336 322 334 332 Z"
                  fill="url(#flameInner)"
                />
              </g>

              {/* Heat glow under boiling flask */}
              <ellipse cx="330" cy="292" rx="28" ry="4" fill="#F97316" opacity="0.3" />

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

              {/* Bulb Glass Body */}
              <path
                d="M 318 230 C 295 240 295 285 315 294 C 330 300 345 295 358 285 C 365 270 365 240 338 230"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              {/* Tall Vertical Neck Left Wall (Has OPEN mouth where Tube 1 enters!) */}
              {/* Upper left neck wall: from y=80 down to y=131 */}
              <line x1="320" y1="80" x2="320" y2="131" stroke="#334155" strokeWidth="2.8" />
              {/* Lower left neck wall: from y=139 down to bulb y=230 */}
              <line x1="320" y1="139" x2="320" y2="230" stroke="#334155" strokeWidth="2.8" />
              {/* Right neck wall: from y=80 down to bulb y=230 */}
              <line x1="338" y1="80" x2="338" y2="230" stroke="#334155" strokeWidth="2.8" />

              {/* RISING PURPLE VAPOR THROUGH VERTICAL TUBE */}
              <g transform="translate(330, 200)">
                <circle cx="-2" cy="0" r="5" fill="#C084FC" opacity="0.5" className="anim-vapor-1" />
                <circle cx="4" cy="-10" r="6" fill="#DDD6FE" opacity="0.55" className="anim-vapor-2" />
                <circle cx="-1" cy="-20" r="7" fill="#A855F7" opacity="0.45" className="anim-vapor-1" />
                <circle cx="2" cy="-40" r="8" fill="#C084FC" opacity="0.6" className="anim-vapor-2" />
              </g>

              {/* Upward Pressure Indicator Arrow */}
              <g transform="translate(350, 160)">
                <line x1="0" y1="25" x2="0" y2="0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
                <polygon points="0,-4 -4,4 4,4" fill="#A855F7" />
              </g>

              {/* Clean Step Label */}
              <text x="330" y="414" textAnchor="middle" className="text-[15px] font-sans font-bold fill-slate-800 tracking-tight">
                Visualize
              </text>
              <text x="330" y="432" textAnchor="middle" className="text-[12px] font-bangla fill-purple-600 font-semibold">
                ভিজ্যুয়ালাইজ
              </text>
            </g>

            {/* ========================================================
                STEP 3: SLANTED LIEBIG CONDENSER WITH WATER JACKET
               ======================================================== */}
            <g>
              {/* Retort Stand holding condenser */}
              <rect x="495" y="370" width="60" height="10" rx="3" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
              <line x1="520" y1="140" x2="520" y2="370" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="515" y="180" width="10" height="12" rx="2" fill="#1E293B" />
              <line x1="520" y1="186" x2="540" y2="175" stroke="#334155" strokeWidth="3" />

              {/* Water Cooling Outer Jacket Sleeve */}
              <polygon
                points="465,95 615,182 605,199 455,112"
                fill="url(#coolingJacketGrad)"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              {/* Water Jacket Nipples */}
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

              {/* Condensing Liquid Droplets Sliding Down the Tube */}
              <g className="anim-condenser-slide" transform="translate(460, 110)">
                <ellipse cx="0" cy="0" rx="3.5" ry="2" fill="#0D9488" opacity="0.85" transform="rotate(28)" />
                <ellipse cx="12" cy="7" rx="3" ry="1.8" fill="#38BDF8" opacity="0.8" transform="rotate(28)" />
              </g>

              {/* Clean Step Label */}
              <text x="540" y="414" textAnchor="middle" className="text-[15px] font-sans font-bold fill-slate-800 tracking-tight">
                Connect
              </text>
              <text x="540" y="432" textAnchor="middle" className="text-[12px] font-bangla fill-teal-600 font-semibold">
                সংযোগ
              </text>
            </g>

            {/* ========================================================
                STEP 4: OPEN GLASS BEAKER & NATURALLY FALLING DROPS
               ======================================================== */}
            <g>
              {/* Droplets Naturally Falling Down from Open Drip Nozzle */}
              <g transform="translate(661, 265)">
                <circle cx="0" cy="0" r="3.5" fill="#F59E0B" className="anim-drop-step4" />
              </g>

              {/* OPEN GLASS BEAKER */}
              {/* Amber Liquid Fill inside beaker */}
              <path
                d="M 643 335 L 643 376 Q 643 380 648 380 L 697 380 Q 702 380 702 376 L 702 335 Z"
                fill="url(#pastelAmberGrad)"
              />
              {/* Surface Ripple where drop lands */}
              <ellipse cx="661" cy="335" rx="3" ry="1.5" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="anim-ripple" />
              <ellipse cx="670" cy="335" rx="26" ry="3.5" fill="#FEF3C7" opacity="0.6" />

              {/* Beaker Glass Body (OPEN TOP) */}
              <path
                d="M 634 300 L 638 300 L 643 376 Q 643 380 648 380 L 697 380 Q 702 380 702 376 L 707 300"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Right rim segment */}
              <line x1="707" y1="300" x2="712" y2="300" stroke="#334155" strokeWidth="2.8" strokeLinecap="round" />

              {/* Volume Graduation Lines on Beaker */}
              <line x1="648" y1="320" x2="658" y2="320" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="648" y1="340" x2="662" y2="340" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="648" y1="360" x2="658" y2="360" stroke="#94A3B8" strokeWidth="1.5" />

              {/* Clean Step Label */}
              <text x="690" y="414" textAnchor="middle" className="text-[15px] font-sans font-bold fill-slate-800 tracking-tight">
                Practice
              </text>
              <text x="690" y="432" textAnchor="middle" className="text-[12px] font-bangla fill-amber-600 font-semibold">
                অনুশীলন
              </text>
            </g>

            {/* ========================================================
                STEP 5: VOLUMETRIC FLASK (2-HOLE STOPPER) & VACUUM PUMP
               ======================================================== */}
            <g>
              {/* VOLUMETRIC FLASK (Long calibrated neck with pear-shaped bulb) */}
              {/* Pure Golden Liquid Fill */}
              <path
                d="M 802 376 Q 802 380 807 380 L 851 380 Q 856 380 856 376 Q 862 340 844 305 L 839 305 L 819 305 L 814 305 Q 796 340 802 376 Z"
                fill="url(#pastelGoldGrad)"
              />
              <ellipse cx="829" cy="305" rx="12" ry="2.5" fill="#FEF08A" opacity="0.8" />

              {/* Sparkling Crystals in Volumetric Flask */}
              <g transform="translate(829, 365)">
                <polygon points="0,-8 5,0 0,8 -5,0" fill="#FFFFFF" opacity="0.95" />
                <polygon points="-8,-3 -3,3 -13,3" fill="#FEF08A" opacity="0.9" />
                <polygon points="8,-2 13,3 3,3" fill="#FDE047" opacity="0.9" />
                <circle cx="-10" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.9" />
                <circle cx="9" cy="-7" r="1.8" fill="#FFFFFF" opacity="0.9" />
              </g>

              {/* Glass Outlines */}
              <path
                d="M 822 150 L 822 275 Q 792 310 802 376 Q 802 380 807 380 L 851 380 Q 856 380 856 376 Q 866 310 836 275 L 836 150 Z"
                fill="none"
                stroke="#334155"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              {/* Red Calibration Ring Mark */}
              <line x1="820" y1="210" x2="838" y2="210" stroke="#EF4444" strokeWidth="2" />

              {/* 2-HOLE RUBBER STOPPER (Transparent holes showing tubes pass through) */}
              <polygon points="818,152 840,152 842,138 816,138" fill="#EA580C" stroke="#334155" strokeWidth="2.4" />
              {/* Hole 1: Suction tube entry */}
              <ellipse cx="822" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />
              {/* Hole 2: Vacuum hose connection */}
              <ellipse cx="834" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />

              {/* MECHANICAL VACUUM PUMP */}
              <rect x="920" y="365" width="85" height="15" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
              <rect x="927" y="378" width="14" height="4" rx="1" fill="#475569" />
              <rect x="983" y="378" width="14" height="4" rx="1" fill="#475569" />

              {/* Motor body */}
              <rect x="930" y="305" width="70" height="60" rx="6" fill="#64748B" stroke="#334155" strokeWidth="2.8" />
              {/* Motor cooling fins */}
              <line x1="935" y1="318" x2="990" y2="318" stroke="#334155" strokeWidth="2.2" />
              <line x1="935" y1="330" x2="990" y2="330" stroke="#334155" strokeWidth="2.2" />
              <line x1="935" y1="342" x2="990" y2="342" stroke="#334155" strokeWidth="2.2" />
              <line x1="935" y1="354" x2="990" y2="354" stroke="#334155" strokeWidth="2.2" />

              {/* Vacuum Pressure Dial Gauge */}
              <line x1="950" y1="305" x2="950" y2="288" stroke="#334155" strokeWidth="3.5" />
              <circle cx="950" cy="275" r="16" fill="#FFFFFF" stroke="#334155" strokeWidth="2.8" />
              <line x1="950" y1="262" x2="950" y2="266" stroke="#64748B" strokeWidth="1.5" />
              <line x1="960" y1="266" x2="957" y2="269" stroke="#64748B" strokeWidth="1.5" />
              <line x1="940" y1="266" x2="943" y2="269" stroke="#64748B" strokeWidth="1.5" />
              <line x1="950" y1="275" x2="943" y2="267" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="950" cy="275" r="2" fill="#334155" />

              {/* Intake barb */}
              <rect x="946" y="275" width="8" height="12" rx="1.5" fill="#334155" />

              {/* Exhaust muffler */}
              <path d="M 985 305 L 985 290 Q 985 282 993 282 L 997 282" fill="none" stroke="#334155" strokeWidth="3" />
              <path d="M 1000 278 Q 1007 278 1010 272" fill="none" stroke="#94A3B8" strokeWidth="1.5" opacity="0.7" />
              <path d="M 1000 284 Q 1009 284 1013 288" fill="none" stroke="#94A3B8" strokeWidth="1.5" opacity="0.7" />

              {/* Power light and label */}
              <circle cx="990" cy="358" r="2.5" fill="#22C55E" />
              <text x="965" y="398" textAnchor="middle" className="text-[9.5px] font-mono fill-slate-500 font-bold">
                VACUUM PUMP
              </text>

              {/* Clean Step Label */}
              <text x="880" y="414" textAnchor="middle" className="text-[15px] font-sans font-bold fill-slate-800 tracking-tight">
                Master
              </text>
              <text x="880" y="432" textAnchor="middle" className="text-[12px] font-bangla fill-amber-500 font-semibold">
                পারদর্শিতা
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
