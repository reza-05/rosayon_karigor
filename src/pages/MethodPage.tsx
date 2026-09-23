import { KarigorMethod } from '../components/KarigorMethod';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const MethodPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* The 5-Step Detailed Roadmap & Transformation Matrix */}
      <KarigorMethod />

      {/* Student Reviews on the Method */}
      <Testimonials />

      {/* Action Footer */}
      <div className="max-w-4xl mx-auto px-4 text-center pt-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200/85 shadow-lg space-y-4 relative overflow-hidden">
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
