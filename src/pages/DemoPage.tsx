import { ClassExperience } from '../components/ClassExperience';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export const DemoPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>CLASS EXPERIENCE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          See how a <span className="font-bangla font-bold">কারিগর</span> class feels.
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          একটি সম্পূর্ণ ক্লাস ডেমো দেখে নাও—কীভাবে ভিজ্যুয়াল চিন্তাভাবনা ও বাস্তব উদাহরণের মাধ্যমে জটিল কনসেপ্টগুলো পরিষ্কার করা হয়।
        </p>
      </div>

      {/* Classroom Video Player Component */}
      <ClassExperience />

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 text-center pt-8">
        <div className="glass-panel-dark rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl space-y-4 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <h3 className="text-2xl sm:text-3xl font-serif">
            ডেমো ক্লাসটি কি ভালো লেগেছে?
          </h3>
          <p className="text-sm sm:text-base font-bangla text-slate-300 max-w-xl mx-auto">
            সম্পূর্ণ সিলেবাস শেষ করার জন্য যুক্ত হও আমাদের পূর্ণাঙ্গ অনলাইন ও অফলাইন ব্যাচে।
          </p>
          <div className="pt-2">
            <Link
              to="/enroll"
              className="btn-luxury-primary inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            >
              <span>ব্যাচে ভর্তি হোন (Enroll Now)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
