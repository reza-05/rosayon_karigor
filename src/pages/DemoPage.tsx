import { ClassExperience } from '../components/ClassExperience';
import { ArrowRight } from 'lucide-react';

export const DemoPage = () => {
  return (
    <div className="pt-20 pb-16">
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
            <a
              href="https://www.facebook.com/roshayonkarigor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-primary inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            >
              <span>ব্যাচে ভর্তি হোন (Join Next Batch)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
