import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { KarigorMethod } from '../components/KarigorMethod';
import { StatsBar } from '../components/StatsBar';
import { ClassroomGallery } from '../components/ClassroomGallery';
import { Testimonials } from '../components/Testimonials';
import {
  ArrowRight,
  PlayCircle,
  UserCheck,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero with Interactive 3D Molecular Simulation & Verified Proof */}
      <Hero />

      {/* 2. The Problem Statement */}
      <ProblemSection />

      {/* 3. The Flagship Karigor Method (Continuous 2D Lab Pipeline + 5 Steps + Transformation) */}
      <KarigorMethod />

      {/* 4. Live Statistics Ribbon */}
      <StatsBar />

      {/* 5. Live Classroom Moments Auto Slideshow */}
      <ClassroomGallery />

      {/* 6. Authentic Student Testimonials Carousel */}
      <Testimonials />

      {/* 7. Quick Discovery & Deep Dive Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-brand-ocean" />
            <span>EXPLORE MORE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-brand-navy tracking-tight">
            সবকিছু এক নজরে এক্সপ্লোর করুন
          </h3>
          <p className="text-sm font-bangla text-brand-muted leading-relaxed">
            রসায়ন কারিগরের ডেমো ক্লাস, শিক্ষকের পাঠদান দর্শন ও সাধারণ জিজ্ঞাসা সম্পর্কিত বিস্তারিত তথ্য:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Demo Class */}
          <Link
            to="/demo"
            className="group glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/85 bg-gradient-to-b from-white via-white to-amber-50/30 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200/60">
                  HD VIDEO LECTURE
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                ডেমো ক্লাস (Demo Class)
              </h4>
              <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed mb-4">
                ফারজাদ ভাইয়ার অফিশিয়াল ডেমো লেকচার ভিডিও দেখে নিন—কীভাবে জটিল বিষয়গুলো সহজ ও ভিজ্যুয়াল রূপ পায়।
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/50 font-medium">
                  অরবিটাল সংকরায়ন
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/50 font-medium">
                  ইলেকট্রন মেকানিজম
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/50 font-medium">
                  লজিক্যাল মডেল
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-brand-orange">
              <span>ডেমো ক্লাস দেখুন (Watch Video)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 2: Meet Teacher */}
          <Link
            to="/about"
            className="group glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/85 bg-gradient-to-b from-white via-white to-indigo-50/30 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100/80 px-2.5 py-1 rounded-full border border-indigo-200/60">
                  LEAD MENTOR
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-indigo-700 transition-colors">
                শিক্ষক পরিচিতি (About Educator)
              </h4>
              <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed mb-4">
                ফারজাদ ভাইয়ার শিক্ষাদান দর্শন, শিক্ষকতা অভিজ্ঞতা এবং রসায়ন কারিগরের পেছনের গল্প জানুন।
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200/50 font-semibold">
                  CEE, IUT
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200/50 font-medium">
                  সাবেক হেড এক্সামিনার (উদ্ভাস)
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200/50 font-medium">
                  ৪+ বছরের অভিজ্ঞতা
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>প্রোফাইল ও অভিজ্ঞতা দেখুন</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 3: FAQ */}
          <Link
            to="/faq"
            className="group glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/85 bg-gradient-to-b from-white via-white to-emerald-50/30 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  HELP & SUPPORT
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-emerald-700 transition-colors">
                প্রশ্নোত্তর (FAQ)
              </h4>
              <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed mb-4">
                অনলাইন-অফলাইন ব্যাচ, ক্লাস রেকর্ডিং, পরীক্ষা ব্যবস্থা ও ভর্তি সম্পর্কিত যাবতীয় সাধারণ জিজ্ঞাসা।
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/50 font-medium">
                  অনলাইন ও অফলাইন ব্যাচ
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/50 font-medium">
                  ক্লাস রেকর্ডিং
                </span>
                <span className="text-[11px] font-bangla px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/50 font-medium">
                  সরাসরি ডাউট সলভ
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>উত্তরগুলো দেখুন (View FAQ)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. Ultra-Luxury Admission & Enrollment Final Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="bg-gradient-to-br from-[#071E3D] via-[#0B2545] to-[#041224] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative overflow-hidden bg-chem-dark-grid shadow-2xl border border-white/10">
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-ocean/20 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headline, Description & Key Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-brand-orange">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span>HSC 26, 27 & ADMISSION BATCHES</span>
                <span className="text-white/30">•</span>
                <span className="text-emerald-400 font-semibold font-bangla">সীমিত আসন</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Ready to make chemistry easier?
                </h3>
                <p className="text-lg sm:text-xl font-bangla text-slate-200 font-semibold">
                  রসায়নের জটিল সমীকরণগুলো এবার হোক পানির মতো সহজ ও রোমাঞ্চকর।
                </p>
              </div>

              <p className="text-sm sm:text-base font-bangla text-slate-300 leading-relaxed max-w-xl">
                অন্ধ মুখস্থের দিন শেষ। বৈজ্ঞানিক মেথডোলজি, ল্যাবরেটরি মেকানিজম ভিজ্যুয়ালাইজেশন এবং সরাসরি ফারজাদ ভাইয়ার ব্যক্তিগত তত্ত্বাবধানে শুরু হোক তোমার এইচএসসি ও এডমিশনের সেরা প্রস্তুতি।
              </p>

              {/* Key Trust Checkmarks */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-200 font-bangla">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>৩৫০+ শিক্ষার্থীর আস্থা ও শতভাগ লজিক্যাল কনসেপ্ট ক্ল্যারিটি</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>সরাসরি ফারজাদ ভাইয়ার তত্ত্বাবধানে ওয়ান-টু-ওয়ান নিবিড় ডাউট সলভ</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>অধ্যায়ভিত্তিক স্ট্যান্ডার্ড প্র্যাকটিস শিট ও নিয়মিত উইকলি এক্সাম</span>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <a
                  href="https://www.facebook.com/roshayonkarigor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-luxury-primary text-white text-sm font-semibold transition-all shadow-md group"
                >
                  <span>Reserve My Seat / আসন নিশ্চিত করুন</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/20 transition-all backdrop-blur-sm"
                >
                  <span>ভর্তি সম্পর্কিত প্রশ্নোত্তর (FAQ)</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Luxury Status Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                      Admissions Active
                    </span>
                  </div>
                  <span className="text-[11px] font-bangla text-slate-300">
                    নতুন সেশন ২০২৫-২৬
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm font-bangla">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Target Batches
                    </span>
                    <span className="text-white font-bold text-base font-sans">
                      HSC 2026, HSC 2027 & Admission
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Class Delivery
                    </span>
                    <span className="text-slate-200">
                      অফলাইন ক্লাসরুম (ঢাকা) এবং দেশব্যাপী ইন্টারেক্টিভ অনলাইন ব্যাচ
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Mentor & Educator
                    </span>
                    <div className="flex items-center gap-2.5 pt-1">
                      <img
                        src="/farzaad.jpg"
                        alt="Farzaad Sawrar"
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <span className="text-white font-bold block text-sm font-sans">
                          Farzaad Sawrar (ফারজাদ ভাইয়া)
                        </span>
                        <span className="text-[11px] text-brand-orange font-mono">
                          CEE, IUT • Former Head Examiner, Udvash
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <a
                    href="https://www.facebook.com/roshayonkarigor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-colors border border-white/15"
                  >
                    <span>ফেসবুক পেজে মেসেজ পাঠান</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
