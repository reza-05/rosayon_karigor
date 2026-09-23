import { ResourceLibrary } from '../components/ResourceLibrary';
import { Sparkles } from 'lucide-react';

export const ResourcesPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>FREE DIGITAL LIBRARY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          A free library for curious minds.
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          রিসোর্স লাইব্রেরি: রঙিন কনসেপ্ট নোট, বিক্রিয়া রূপান্তর ম্যাপ, সূত্র সংকলন ও প্রশ্ন ব্যাংক সম্পূর্ণ বিনামূল্যে সংগ্রহ করো।
        </p>
      </div>

      {/* Resource Library with Filter Tabs & Modal */}
      <ResourceLibrary />
    </div>
  );
};
