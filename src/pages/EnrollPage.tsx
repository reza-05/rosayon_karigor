import { useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const EnrollPage = () => {
  useEffect(() => {
    window.location.href = 'https://www.facebook.com/roshayonkarigor';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 border border-slate-200/80 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <MessageCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif text-brand-navy">
          ফেসবুক পেজে রিডাইরেক্ট করা হচ্ছে...
        </h2>
        <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed">
          নতুন ব্যাচে ভর্তি ও তথ্যের জন্য সরাসরি আমাদের অফিসিয়াল ফেসবুক পেজে মেসেজ দিন।
        </p>
        <a
          href="https://www.facebook.com/roshayonkarigor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-white text-sm font-semibold"
        >
          <span>ফেসবুক পেজে যান</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

