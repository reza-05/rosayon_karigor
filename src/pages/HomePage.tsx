import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { StatsBar } from '../components/StatsBar';
import { ClassroomGallery } from '../components/ClassroomGallery';
import { ArrowRight, PlayCircle, UserCheck, HelpCircle } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero with Interactive 3D Molecular Simulation */}
      <Hero />

      {/* 2. The Problem Statement Teaser */}
      <ProblemSection />

      {/* 3. The Karigor Method High-Impact Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy/10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy">
                The <span className="font-bangla font-bold">কারিগর</span> Method
              </h2>
              <p className="text-sm sm:text-base font-bangla text-brand-muted leading-relaxed max-w-xl">
                রসায়ন মুখস্থের বিষয় নয় — এটি একটি সুশৃঙ্খল মানসিক চিত্র। Understand ➔ Visualize ➔ Connect ➔ Practice ➔ Master —
                এই ৫টি ধাপে শিক্ষার্থীদের রসায়ন ভীতি দূর করে পরীক্ষায় সেরা ফলাফল এনে দেয় কারিগর মেথড।
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold text-brand-ocean">
                <span className="px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 shadow-sm">01 Understand</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 shadow-sm">02 Visualize</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 shadow-sm">03 Connect</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 shadow-sm">04 Practice</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 shadow-sm">05 Master</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <Link
                to="/method"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-navy text-white text-sm font-semibold hover:bg-brand-ocean transition-all shadow-md group"
              >
                <span>পদ্ধতির বিস্তারিত দেখুন (Explore Method)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Statistics Ribbon */}
      <StatsBar />

      {/* 5. Quick Discovery Grid (Demo Class, About, FAQ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif text-brand-navy">
            সবকিছু এক নজরে এক্সপ্লোর করুন
          </h3>
          <p className="text-sm font-bangla text-brand-muted">
            রসায়ন কারিগরের ডেমো ক্লাস, শিক্ষক পরিচিতি ও বিস্তারিত তথ্য আলাদা পেজে ভিজিট করুন:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Demo Class */}
          <Link
            to="/demo"
            className="group glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/85 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-navy mb-1.5">
                ডেমো ক্লাস (Demo Class)
              </h4>
              <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed">
                ফারজাদ ভাইয়ার অফিশিয়াল ডেমো লেকচার ভিডিও দেখে নিন—কীভাবে জটিল বিষয়গুলো সহজভাবে বোঝানো হয়।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-brand-orange">
              <span>ডেমো ক্লাস দেখুন</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 3: Meet Teacher */}
          <Link
            to="/about"
            className="group glass-panel rounded-3xl p-6 border border-slate-200/85 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-brand-navy mb-1">
                শিক্ষক পরিচিতি (About)
              </h4>
              <p className="text-xs font-bangla text-brand-muted leading-relaxed">
                ফারজাদ ভাইয়ার শিক্ষাদান দর্শন, অভিজ্ঞতা এবং রসায়ন কারিগরের মূল গল্প জানুন।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>প্রোফাইল দেখুন</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 4: FAQ */}
          <Link
            to="/faq"
            className="group glass-panel rounded-3xl p-6 border border-slate-200/85 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-brand-navy mb-1">
                প্রশ্নোত্তর (FAQ)
              </h4>
              <p className="text-xs font-bangla text-brand-muted leading-relaxed">
                অনলাইন-অফলাইন ব্যাচ, ক্লাস রেকর্ডিং, পরীক্ষা ব্যবস্থা ও ভর্তি সম্পর্কিত সাধারণ জিজ্ঞাসা।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-navy/5 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>উত্তরগুলো দেখুন</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 7. Live Classroom Moments Auto Slideshow */}
      <ClassroomGallery />

      {/* 8. Quick Join Next Batch Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-chem-dark-grid shadow-2xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
              NEW BATCH ADMISSION OPEN
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif">
              Ready to make chemistry easier?
            </h3>
            <p className="text-sm font-bangla text-slate-300 leading-relaxed">
              সীমিত আসনের নতুন ব্যাচে যুক্ত হয়ে রসায়নের ভয় দূর করো। সরাসরি ফারজাদ ভাইয়ার তত্ত্বাবধানে শুরু হোক তোমার
              এইচএসসি ও এডমিশনের সেরা প্রস্তুতি।
            </p>
            <div className="pt-2">
              <a
                href="https://www.facebook.com/roshayonkarigor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-luxury-primary text-white text-sm font-semibold transition-all shadow-md"
              >
                <span>Reserve My Seat / আসন নিশ্চিত করুন</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
