import { KarigorMethod } from '../components/KarigorMethod';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MethodPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>OUR PEDAGOGY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          The <span className="font-bangla font-bold">কারিগর</span> Method™
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          From memorizing chemistry to understanding it. একটি বৈজ্ঞানিক, চিত্রভিত্তিক ও প্রয়োগমুখী শিক্ষাদান পদ্ধতি।
        </p>
      </div>

      {/* The 5-Step Detailed Roadmap & Transformation Matrix */}
      <KarigorMethod />

      {/* Student Reviews on the Method */}
      <Testimonials />

      {/* Action Footer */}
      <div className="max-w-4xl mx-auto px-4 text-center pt-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy/10 shadow-lg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <h3 className="text-2xl sm:text-3xl font-serif text-brand-navy">
            তুমি কি কারিগর মেথডে রসায়ন শিখতে প্রস্তুত?
          </h3>
          <p className="text-sm sm:text-base font-bangla text-brand-muted max-w-xl mx-auto">
            আমাদের আসন্ন ব্যাচে ভর্তি চলছে। এখনই তোমার আসন সংরক্ষণ করো এবং রসায়নের ভীতি জয় করো।
          </p>
          <div className="pt-2">
            <Link
              to="/enroll"
              className="btn-luxury-primary inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            >
              <span>Join Upcoming Batch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
