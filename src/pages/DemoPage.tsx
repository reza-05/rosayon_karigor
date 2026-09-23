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
        <div className="bg-brand-navy text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <h3 className="text-2xl font-serif">
            ডেমো ক্লাসটি কি ভালো লেগেছে?
          </h3>
          <p className="text-sm font-bangla text-slate-300">
            সম্পূর্ণ সিলেবাস শেষ করার জন্য যুক্ত হও আমাদের পূর্ণাঙ্গ অনলাইন ও অফলাইন ব্যাচে।
          </p>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange-hover shadow-md transition-all"
          >
            <span>ব্যাচে ভর্তি হোন (Enroll Now)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
