import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { MoleculeCanvas } from './MoleculeCanvas';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Minimal Posh Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-xs text-xs font-mono font-medium text-brand-navy">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HSC 26, 27 & Admission</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-orange font-semibold font-bangla">নতুন ব্যাচ ভর্তি চলছে</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight leading-[1.14]">
              Chemistry doesn't have to{' '}
              <span className="text-brand-orange">feel complicated.</span>
            </h1>

            {/* Clean, Non-Cluttered Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bangla">
              অন্ধ মুখস্থের ভীতি দূর করে ভিজ্যুয়াল মডেল ও লজিক্যাল বিশ্লেষণের মাধ্যমে রসায়ন আয়ত্ত করার আধুনিক শিক্ষালয়। এবার রসায়নের জটিল সমীকরণগুলো ধরা দেবে গভীর অনুধাবনে।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="https://www.facebook.com/roshayonkarigor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-luxury-primary text-white text-base font-semibold shadow-md transition-all duration-200 group"
              >
                <span>Join the Next Batch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <Link
                to="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-brand-navy text-base font-semibold border border-slate-200/90 shadow-xs hover:bg-slate-50 hover:border-brand-navy/30 transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch a Demo Class</span>
              </Link>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-brand-muted">
              {/* Real Student Avatar Cluster */}
              <div className="flex items-center -space-x-2.5">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                  src="/testimonials/arko_saha.png"
                  alt="Arko Saha"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                  src="/testimonials/afsana_tanisha.webp"
                  alt="Afsana Tanisha"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                  src="/testimonials/tashriful_arabi.jpg"
                  alt="Tashriful Arabi"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  +350
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-brand-navy">350+ students guided</span>
                <span className="text-brand-navy/20">•</span>
                <span className="text-amber-500 font-bold">★ 5.0/5</span>
                <span>(SSC, HSC & Admission)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Molecule Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px]">
              {/* 3D Canvas Box */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(15,23,42,0.08)]">
                <MoleculeCanvas />

                {/* Bottom card highlight */}
                <div className="mt-2 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-bangla">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-700">ইন্টারেক্টিভ আণবিক গঠন ও অরবিটাল</span>
                  </div>
                  <span className="font-mono text-[11px] text-brand-ocean font-semibold">NCTB & Admission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
