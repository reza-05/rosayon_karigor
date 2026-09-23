import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { MoleculeCanvas } from './MoleculeCanvas';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-chem-grid">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-orange/15 via-brand-ocean/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-ocean/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-navy/10 shadow-sm text-xs font-semibold text-brand-ocean tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>CHEMISTRY, REIMAGINED</span>
              <span className="text-brand-muted">•</span>
              <span className="font-bangla font-normal text-brand-navy">রসায়ন শিক্ষা, নতুন রূপে</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight leading-[1.12]">
              Chemistry doesn't have to{' '}
              <span className="relative inline-block text-brand-orange italic font-normal">
                feel complicated.
                {/* Hand-drawn style decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/40"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M3 9C50 3 150 2 197 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Bilingual Subtitle */}
            <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bangla">
              <strong className="text-brand-navy font-semibold">রসায়ন কারিগর</strong> turns confusing concepts into
              clear mental models, visual stories, and problem-solving skills. আর অন্ধ মুখস্থ নয় — এবার রসায়নের জটিল
              সমীকরণগুলো ধরা দেবে গভীর অনুধাবনে।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/enroll"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-luxury-primary text-white text-base font-semibold shadow-md transition-all duration-200 group"
              >
                <span>Join the Next Batch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/90 backdrop-blur-md text-brand-navy text-base font-semibold border border-brand-navy/15 shadow-sm hover:bg-white hover:border-brand-navy/30 transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch a Demo Class</span>
              </Link>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-brand-muted">
              {/* Avatar Cluster */}
              <div className="flex items-center -space-x-2.5">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center">
                  +500
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-brand-navy">500+ students guided</span>
                <span className="text-brand-navy/20">•</span>
                <span className="text-amber-500 font-bold">★ 4.9/5</span>
                <span>(SSC, HSC & Admission)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Molecule Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px]">
              {/* Handwritten callout style overlay */}
              <div className="absolute -top-6 -right-2 z-20 hidden sm:block rotate-6">
                <div className="font-serif italic text-sm text-brand-ocean bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-ocean/20 shadow-md">
                  "More than Memorization."
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 z-20 hidden sm:block -rotate-3">
                <div className="font-serif italic text-sm text-brand-orange bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-orange/30 shadow-md">
                  A Deeper Understanding.
                </div>
              </div>

              {/* 3D Canvas Box */}
              <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/80 shadow-2xl">
                <MoleculeCanvas />

                {/* Bottom card highlight */}
                <div className="mt-2 pt-3 border-t border-brand-navy/10 flex items-center justify-between text-xs text-brand-muted">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Real-time 3D Chemistry Physics</span>
                  </div>
                  <span className="font-mono text-[11px] text-brand-ocean font-semibold">NCTB & Admission Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-6 text-center flex flex-col items-center justify-center">
        <a
          href="#problem"
          className="group flex flex-col items-center gap-1 text-[11px] tracking-widest uppercase font-semibold text-brand-muted hover:text-brand-navy transition-colors focus:outline-none"
        >
          <div className="w-5 h-8 rounded-full border-2 border-brand-navy/20 flex items-start justify-center p-1 group-hover:border-brand-orange transition-colors">
            <div className="w-1 h-2 rounded-full bg-brand-navy group-hover:bg-brand-orange animate-bounce" />
          </div>
          <span>Scroll to explore</span>
        </a>
      </div>
    </section>
  );
};
