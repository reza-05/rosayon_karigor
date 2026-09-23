import { EnrollmentForm } from '../components/EnrollmentForm';
import { Sparkles } from 'lucide-react';

export const EnrollPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>JOIN THE NEXT BATCH</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          Reserve your seat today.
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          সীমিত আসনের প্রতিটি ব্যাচে দেওয়া হয় সর্বোচ্চ যত্ন। নিচের ফর্মটি পূরণ করে তোমার ভর্তি নিশ্চিত করো।
        </p>
      </div>

      {/* Enrollment Form */}
      <EnrollmentForm />
    </div>
  );
};
