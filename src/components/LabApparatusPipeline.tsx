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
    <div className={`w-full relative select-none ${className}`}>
      {/* Mobile Swipe Guidance Bar */}
      <div className="flex sm:hidden items-center justify-between px-2 mb-1.5 text-[11px] font-bangla text-slate-500">
        <span className="inline-flex items-center gap-1.5 text-brand-orange font-semibold">
          <span>↔</span> সোয়াইপ করে সম্পূর্ণ সেটআপ দেখুন
        </span>
        <span className="text-[10px] font-mono text-slate-400">১ম ➔ ৫ম ধাপ</span>
      </div>

      {/* 1-LINE STRICT CONTINUOUS LABORATORY PIPELINE (RESPONSIVE SVG SCALING WITH MOBILE HORIZONTAL SWIPE) */}
      <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 shadow-sm border border-slate-200/80 overflow-x-auto scrollbar-none touch-pan-x">
        <div className="min-w-[720px] sm:min-w-full">
          <svg
            viewBox="25 48 1085 396"
            className="w-full h-auto block select-none"
            preserveAspectRatio="xMidYMid meet"
          >
          <defs>
            {/* Soft Pastel Liquid Gradients */}
            <linearGradient id="pastelBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="lowerFlaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="boilingLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="coolingJacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#99F6E4" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="pastelAmberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="pastelGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#FBBF24" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.92" />
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

            {/* Neck Clip Path to ensure rising vapor stays strictly inside the glass tube */}
            <clipPath id="flaskNeckClip">
              <rect x="325.4" y="65" width="9.2" height="165" />
            </clipPath>

            {/* CSS Animations */}
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
                  transform: translateY(0) scale(0.5);
                  opacity: 0;
                }
                8% {
                  transform: translateY(2px) scale(0.9);
                  opacity: 1;
                }
                16% {
                  transform: translateY(6px) scale(1, 1.15);
                  opacity: 1;
                }
                78% {
                  transform: translateY(86px) scale(0.9, 1.25);
                  opacity: 1;
                }
                84% {
                  transform: translateY(92px) scale(1.6, 0.45);
                  opacity: 0.95;
                }
                89% {
                  transform: translateY(93px) scale(2.2, 0.15);
                  opacity: 0;
                }
                100% {
                  transform: translateY(93px) scale(2.2, 0.15);
                  opacity: 0;
                }
              }
              @keyframes gravityRippleEffect {
                0%, 82% {
                  transform: scale(0);
                  opacity: 0;
                }
                85% {
                  transform: scale(0.7);
                  opacity: 0.9;
                }
                100% {
                  transform: scale(3.5);
                  opacity: 0;
                }
              }
              @keyframes boilingDropFall {
                0% {
                  transform: translateY(0) scale(0.5);
                  opacity: 0;
                }
                8% {
                  transform: translateY(2px) scale(0.9);
                  opacity: 1;
                }
                16% {
                  transform: translateY(12px) scale(1, 1.15);
                  opacity: 1;
                }
                78% {
                  transform: translateY(134px) scale(0.9, 1.25);
                  opacity: 1;
                }
                84% {
                  transform: translateY(140px) scale(1.6, 0.45);
                  opacity: 0.95;
                }
                89% {
                  transform: translateY(142px) scale(2.2, 0.15);
                  opacity: 0;
                }
                100% {
                  transform: translateY(142px) scale(2.2, 0.15);
                  opacity: 0;
                }
              }
              @keyframes boilingRippleEffect {
                0%, 82% {
                  transform: scale(0);
                  opacity: 0;
                }
                85% {
                  transform: scale(0.8);
                  opacity: 0.9;
                }
                100% {
                  transform: scale(4);
                  opacity: 0;
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
                  transform: translateY(58px);
                }
                90% {
                  opacity: 0.7;
                  transform: translateY(66px);
                }
                100% {
                  opacity: 0;
                  transform: translateY(70px);
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
                  r: 18;
                  opacity: 0;
                }
              }
              @keyframes vaporRise {
                0% {
                  transform: translateY(0) scale(0.8);
                  opacity: 0;
                }
                25% {
                  opacity: 0.75;
                }
                75% {
                  opacity: 0.6;
                }
                100% {
                  transform: translateY(-55px) scale(0.95);
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
                  transform: translate(147px, 85px);
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
                animation: gravityDropFall 1.8s infinite cubic-bezier(0.4, 0, 1, 1);
              }
              .anim-gravity-ripple {
                transform-origin: 0 0;
                animation: gravityRippleEffect 1.8s infinite ease-out;
              }
              .anim-boiling-drop {
                animation: boilingDropFall 1.8s infinite cubic-bezier(0.4, 0, 1, 1) 0.4s;
              }
              .anim-boiling-ripple {
                transform-origin: 0 0;
                animation: boilingRippleEffect 1.8s infinite ease-out 0.4s;
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
              @keyframes gaugeNeedleFlutter {
                0%, 100% {
                  transform: rotate(-36deg);
                }
                18% {
                  transform: rotate(-44deg);
                }
                35% {
                  transform: rotate(-32deg);
                }
                52% {
                  transform: rotate(-48deg);
                }
                70% {
                  transform: rotate(-35deg);
                }
                85% {
                  transform: rotate(-42deg);
                }
              }
              .anim-gauge-needle {
                transform-origin: 950px 275px;
                animation: gaugeNeedleFlutter 2s infinite ease-in-out;
              }
            `}</style>
          </defs>

          {/* --- BASE BENCH LINE --- */}
          <line x1="30" y1="380" x2="1110" y2="380" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <rect x="30" y="380" width="1080" height="6" rx="2" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

          {/* ========================================================
              CONNECTING SEAMLESS OPEN-MOUTH GLASS TUBING
             ======================================================== */}

          {/* PIPE 1: Lower Flask Side-arm -> Boiling Flask Neck (Flawless Concentric Bends) */}
          <g>
            {/* White glass backing */}
            <path
              d="M 155 333 L 210 333 Q 225 333 225 318 L 225 142 Q 225 127 240 127 L 324 127"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
            />
            {/* Top glass wall */}
            <path
              d="M 154 328 L 210 328 Q 220 328 220 318 L 220 142 Q 220 122 240 122 L 324 122"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Bottom glass wall */}
            <path
              d="M 156 338 L 210 338 Q 230 338 230 318 L 230 142 Q 230 132 240 132 L 324 132"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Continuous animated blue chemical stream entering neck */}
            <path
              d="M 150 333 L 210 333 Q 225 333 225 318 L 225 142 Q 225 127 240 127 L 326 127 Q 328 127 328 131"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3.8"
              className="anim-pipe-flow"
            />
          </g>

          {/* PIPE 2: Boiling Flask Neck Top -> 30° Slanted Liebig Condenser (Perfect C1 Tangent Curve) */}
          <g>
            {/* White glass backing */}
            <path
              d="M 330 80 Q 330 62 348 62 L 380 62 Q 405 62 430 91 L 640 212"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
            />
            {/* Top glass wall: from neck left wall (x=324) curving to 30° line */}
            <path
              d="M 324 80 Q 324 56 345 56 L 380 56 Q 405 56 433 86 L 643 207"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Bottom glass wall: from neck right wall (x=336) curving to 30° line */}
            <path
              d="M 336 80 Q 336 68 348 68 L 380 68 Q 405 68 427 96 L 637 217"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Animated purple vapor stream: flowing from neck to halfway inside condenser */}
            <path
              d="M 330 80 Q 330 62 348 62 L 380 62 Q 405 62 430 91 L 531.5 149.6"
              fill="none"
              stroke="#C084FC"
              strokeWidth="3.8"
              className="anim-pipe-flow"
            />
          </g>

          {/* PIPE 3: Condenser Delivery Curve -> Open Drip Nozzle */}
          <g>
            {/* White glass backing */}
            <path
              d="M 640 212 Q 665 226 675 260"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
            />
            {/* Outer curve */}
            <path
              d="M 643 207 Q 670 222 680 260"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Inner curve */}
            <path
              d="M 637 217 Q 660 230 670 260"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* OPEN DRIP NOZZLE at y=260 (no closure line!) */}
            {/* Flow stream: Orange chemical condensed from halfway inside condenser through delivery nozzle */}
            <path
              d="M 531.5 149.6 L 640 212 Q 665 226 675 260"
              fill="none"
              stroke="#E26127"
              strokeWidth="3.8"
              className="anim-pipe-flow"
            />
          </g>

          {/* PIPE 4: VACUUM SUCTION TUBE (Concentric Smooth Bends: Beaker -> Volumetric Flask) */}
          <g>
            {/* White backing for glass transparency */}
            <path
              d="M 697 360 L 697 85 Q 697 70 712 70 L 820 70 Q 835 70 835 85 L 835 215"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
            />
            {/* Left glass wall of suction tube */}
            <path
              d="M 692 360 L 692 85 Q 692 65 712 65 L 820 65 Q 840 65 840 85 L 840 215"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Right glass wall of suction tube */}
            <path
              d="M 702 360 L 702 85 Q 702 75 712 75 L 820 75 Q 830 75 830 85 L 830 215"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* OPEN MOUTH in beaker at y=360 (no line closing 692 to 702) */}
            {/* OPEN MOUTH in flask at y=215 (no line closing 830 to 840) */}

            {/* Animated golden fluid stream pulled UPWARDS by vacuum suction */}
            <path
              d="M 697 360 L 697 85 Q 697 70 712 70 L 820 70 Q 835 70 835 85 L 835 215"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3.8"
              className="anim-suction-flow"
            />
          </g>

          {/* VACUUM HOSE LINE: From Stopper Hole 2 to Mechanical Vacuum Pump */}
          <g>
            <path
              d="M 845 150 L 845 118 Q 845 106 857 106 L 945 106 Q 955 106 955 118 L 955 275"
              fill="none"
              stroke="#475569"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
            <polygon points="955,190 951,198 959,198" fill="#475569" />
          </g>

          {/* ========================================================
              STEP 1: SEPARATORY FUNNEL & LOWER RECEIVING FLASK
             ======================================================== */}
          <g>
            {/* Stand base and vertical rod */}
            <rect x="40" y="370" width="70" height="10" rx="3" fill="#64748B" stroke="#334155" strokeWidth="2.5" />
            <line x1="65" y1="70" x2="65" y2="370" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
            {/* Bosshead clamp holding ring */}
            <rect x="60" y="125" width="10" height="12" rx="2" fill="#1E293B" />
            <line x1="65" y1="131" x2="108" y2="131" stroke="#334155" strokeWidth="3" />
            <path d="M 108 122 Q 130 131 152 122" fill="none" stroke="#334155" strokeWidth="3" />

            {/* Separatory Funnel (Pear Shape) */}
            <path
              d="M 122 105 C 100 125 100 160 122 185 L 128 205 L 132 205 L 138 185 C 160 160 160 125 138 105 Z"
              fill="url(#pastelBlueGrad)"
              opacity="0.9"
            />
            {/* Funnel glass outline */}
            <path
              d="M 122 80 L 122 95 C 98 118 98 165 122 192 L 128 212 L 128 232 L 132 232 L 132 212 L 138 192 C 162 165 162 118 138 95 L 138 80 Z"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            <ellipse cx="130" cy="80" rx="14" ry="4" fill="none" stroke="#334155" strokeWidth="2.5" />
            <polygon points="124,80 136,80 138,68 122,68" fill="#475569" stroke="#334155" strokeWidth="2" />

            {/* Stopcock Valve */}
            <rect x="122" y="215" width="16" height="8" rx="2" fill="#475569" stroke="#334155" strokeWidth="2" />
            <line x1="130" y1="211" x2="130" y2="227" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <line x1="124" y1="211" x2="136" y2="211" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

            {/* Drip nozzle stem (OPEN at bottom) */}
            <line x1="128" y1="223" x2="128" y2="236" stroke="#334155" strokeWidth="2.5" />
            <line x1="132" y1="223" x2="132" y2="236" stroke="#334155" strokeWidth="2.5" />

            {/* LOWER RECEIVING FLASK (Conical) */}
            {/* Blue liquid collection */}
            <path
              d="M 115 330 L 100 376 Q 100 380 105 380 L 155 380 Q 160 380 160 376 L 156 338 L 154 328 L 145 328 Z"
              fill="url(#lowerFlaskGrad)"
            />
            <ellipse cx="130" cy="330" rx="15" ry="3" fill="#BAE6FD" opacity="0.8" />

            {/* Surface Ripple upon Drop Impact */}
            <g transform="translate(130, 330)">
              <ellipse cx="0" cy="0" rx="4" ry="1.2" fill="none" stroke="#BAE6FD" strokeWidth="1.6" className="anim-gravity-ripple" />
            </g>

            {/* Falling Drop under Gravity (Falls 92px down into liquid and merges) */}
            <g transform="translate(130, 238)">
              <circle cx="0" cy="0" r="3.5" fill="#38BDF8" className="anim-gravity-drop" />
            </g>

            {/* Conical Flask Glass Body (Open side mouth into delivery tube!) */}
            <path
              d="M 122 270 L 122 295 L 98 375 Q 96 380 102 380 L 158 380 Q 164 380 162 375 L 156 338"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            <path
              d="M 154 328 L 138 295 L 138 270"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
            />
            <ellipse cx="130" cy="270" rx="12" ry="3.5" fill="none" stroke="#334155" strokeWidth="2.2" />

            {/* Clean Step Label */}
            <text x="130" y="415" textAnchor="middle" className="text-[17px] font-sans font-bold fill-slate-800 tracking-tight">
              Understand
            </text>
            <text x="130" y="434" textAnchor="middle" className="text-[13px] font-bangla fill-sky-600 font-semibold">
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

            {/* Surface Ripple upon Drop Landing in Boiling Flask */}
            <g transform="translate(330, 272)">
              <ellipse cx="0" cy="0" rx="3.5" ry="1" fill="none" stroke="#BAE6FD" strokeWidth="1.5" className="anim-boiling-ripple" />
            </g>

            {/* Falling Drop from Blue Delivery Pipe down into Boiling Liquid */}
            <g transform="translate(328, 132)">
              <circle cx="0" cy="0" r="3.2" fill="#38BDF8" className="anim-boiling-drop" />
            </g>

            {/* Boiling bubbles */}
            <circle cx="320" cy="285" r="2.5" fill="#FFFFFF" className="anim-bubble-1" />
            <circle cx="335" cy="288" r="3" fill="#FFFFFF" className="anim-bubble-2" />
            <circle cx="342" cy="282" r="2" fill="#FFFFFF" className="anim-bubble-1" />

            {/* Bulb Glass Body */}
            <path
              d="M 324 230 C 295 240 295 285 315 294 C 330 300 345 295 358 285 C 365 270 365 240 336 230"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />

            {/* Tall Vertical Neck Left Wall (OPEN mouth for Tube 1 between y=122 and y=132!) */}
            <line x1="324" y1="80" x2="324" y2="122" stroke="#334155" strokeWidth="2.8" />
            <line x1="324" y1="132" x2="324" y2="230" stroke="#334155" strokeWidth="2.8" />
            {/* Right neck wall */}
            <line x1="336" y1="80" x2="336" y2="230" stroke="#334155" strokeWidth="2.8" />

            {/* RISING PURPLE VAPOR THROUGH VERTICAL TUBE (Strictly contained inside glass neck) */}
            <g clipPath="url(#flaskNeckClip)">
              <g transform="translate(330, 200)">
                <circle cx="0" cy="0" r="3.2" fill="#C084FC" opacity="0.65" className="anim-vapor-1" />
                <circle cx="0.5" cy="-14" r="3.4" fill="#DDD6FE" opacity="0.7" className="anim-vapor-2" />
                <circle cx="-0.5" cy="-28" r="3.2" fill="#A855F7" opacity="0.6" className="anim-vapor-1" />
                <circle cx="0" cy="-42" r="3.4" fill="#C084FC" opacity="0.7" className="anim-vapor-2" />
              </g>
            </g>

            {/* Upward Pressure Indicator Arrow */}
            <g transform="translate(350, 160)">
              <line x1="0" y1="25" x2="0" y2="0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
              <polygon points="0,-4 -4,4 4,4" fill="#A855F7" />
            </g>

            {/* Clean Step Label */}
            <text x="330" y="415" textAnchor="middle" className="text-[17px] font-sans font-bold fill-slate-800 tracking-tight">
              Visualize
            </text>
            <text x="330" y="434" textAnchor="middle" className="text-[13px] font-bangla fill-purple-600 font-semibold">
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
            <line x1="520" y1="186" x2="538" y2="176" stroke="#334155" strokeWidth="3" />

            {/* Water Cooling Outer Jacket Sleeve (Mathematically Centered at 30° on Pipe) */}
            <polygon
              points="473.5,96.3 608.5,174.3 591.5,203.7 456.5,125.7"
              fill="url(#coolingJacketGrad)"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />

            {/* Water Jacket Nipples (Without Text Labels) */}
            {/* Cool Water Inlet Port (Lower end, underside) */}
            <line x1="578" y1="196" x2="570" y2="210" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            {/* Warm Water Outlet Port (Upper end, top side) */}
            <line x1="488" y1="104" x2="496" y2="90" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

            {/* Condensing Liquid Droplets Sliding Down Central Tube at 30° */}
            <g className="anim-condenser-slide" transform="translate(460, 108)">
              <ellipse cx="0" cy="0" rx="3.5" ry="2" fill="#E26127" opacity="0.85" transform="rotate(30)" />
              <ellipse cx="12" cy="7" rx="3" ry="1.8" fill="#F59E0B" opacity="0.8" transform="rotate(30)" />
            </g>

            {/* Clean Step Label */}
            <text x="535" y="415" textAnchor="middle" className="text-[17px] font-sans font-bold fill-slate-800 tracking-tight">
              Connect
            </text>
            <text x="535" y="434" textAnchor="middle" className="text-[13px] font-bangla fill-teal-600 font-semibold">
              সংযোগ
            </text>
          </g>

          {/* ========================================================
              STEP 4: OPEN GLASS BEAKER & NATURALLY FALLING DROPS
             ======================================================== */}
          <g>
            {/* Droplets Naturally Falling Down from Open Drip Nozzle */}
            <g transform="translate(675, 265)">
              <circle cx="0" cy="0" r="3.5" fill="#E26127" className="anim-drop-step4" />
            </g>

            {/* OPEN GLASS BEAKER */}
            {/* Amber Liquid Fill inside beaker */}
            <path
              d="M 646 335 L 646 376 Q 646 380 651 380 L 699 380 Q 704 380 704 376 L 704 335 Z"
              fill="url(#pastelAmberGrad)"
            />
            {/* Surface Ripple where drop lands */}
            <ellipse cx="675" cy="335" rx="3" ry="1.5" fill="none" stroke="#E26127" strokeWidth="1.5" className="anim-ripple" />
            <ellipse cx="675" cy="335" rx="26" ry="3.5" fill="#FEF3C7" opacity="0.6" />

            {/* Beaker Glass Body (OPEN TOP) */}
            <path
              d="M 638 305 L 644 305 L 646 376 Q 646 380 651 380 L 699 380 Q 704 380 704 376 L 708 305"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Volume Graduation Lines on Beaker */}
            <line x1="652" y1="325" x2="662" y2="325" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="652" y1="345" x2="666" y2="345" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="652" y1="365" x2="662" y2="365" stroke="#94A3B8" strokeWidth="1.5" />

            {/* Clean Step Label */}
            <text x="675" y="415" textAnchor="middle" className="text-[17px] font-sans font-bold fill-slate-800 tracking-tight">
              Practice
            </text>
            <text x="675" y="434" textAnchor="middle" className="text-[13px] font-bangla fill-amber-600 font-semibold">
              অনুশীলন
            </text>
          </g>

          {/* ========================================================
              STEP 5: VOLUMETRIC FLASK (2-HOLE STOPPER) & VACUUM PUMP
             ======================================================== */}
          <g>
            {/* VOLUMETRIC FLASK (Filled to calibration line with rich orange chemical) */}
            <path
              d="M 808 376 Q 808 380 813 380 L 857 380 Q 862 380 862 376 Q 872 310 845 275 L 845 205 L 825 205 L 825 275 Q 795 310 808 376 Z"
              fill="url(#pastelGoldGrad)"
            />
            <ellipse cx="835" cy="205" rx="10" ry="2" fill="#FEF3C7" opacity="0.9" />


            {/* Flask Glass Outlines */}
            <path
              d="M 825 150 L 825 275 Q 795 310 808 376 Q 808 380 813 380 L 857 380 Q 862 380 862 376 Q 872 310 845 275 L 845 150 Z"
              fill="none"
              stroke="#334155"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* Calibration mark */}
            <line x1="823" y1="210" x2="847" y2="210" stroke="#EF4444" strokeWidth="2" />

            {/* 2-HOLE RUBBER STOPPER */}
            <polygon points="820,152 850,152 852,138 818,138" fill="#EA580C" stroke="#334155" strokeWidth="2.4" />
            {/* Hole 1: Suction tube entry */}
            <ellipse cx="835" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />
            {/* Hole 2: Vacuum hose connection */}
            <ellipse cx="845" cy="145" rx="2.5" ry="1.5" fill="#7C2D12" />

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

            {/* Live Oscillating Vacuum Needle */}
            <g className="anim-gauge-needle">
              <line x1="950" y1="275" x2="950" y2="263" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" />
            </g>
            <circle cx="950" cy="275" r="2.2" fill="#334155" />

            {/* Intake port */}
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
            <text x="880" y="415" textAnchor="middle" className="text-[17px] font-sans font-bold fill-slate-800 tracking-tight">
              Master
            </text>
            <text x="880" y="434" textAnchor="middle" className="text-[13px] font-bangla fill-amber-500 font-semibold">
              পারদর্শিতা
            </text>
          </g>
        </svg>
        </div>
      </div>
    </div>
  );
};
