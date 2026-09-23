import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star, CheckCircle2, GraduationCap, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'photo' | 'hsc' | 'ssc'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('grid');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filteredTestimonials = useMemo(() => {
    switch (activeTab) {
      case 'photo':
        return testimonialsData.filter((t) => t.avatarUrl && !imageErrors[t.id]);
      case 'hsc':
        return testimonialsData.filter((t) => t.category === 'hsc');
      case 'ssc':
        return testimonialsData.filter((t) => t.category === 'ssc' || t.category === 'foundation');
      default:
        return testimonialsData;
    }
  }, [activeTab, imageErrors]);

  const cardsPerPage = 3;
  const maxIndex = Math.max(0, filteredTestimonials.length - cardsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#FAFBFC] relative overflow-hidden border-t border-slate-200/60">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-ocean text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>REAL STUDENT EXPERIENCES • বাস্তব অভিজ্ঞতা</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-navy tracking-tight">
              শিক্ষার্থীদের চোখে <span className="text-brand-ocean">রসায়ন কারিগর</span>
            </h2>
            <p className="text-base text-slate-600 font-bangla leading-relaxed">
              ঢাকা কলেজ, ভিকারুননিসা, নূর মোহাম্মদ, সিটি কলেজ ও বিএমএআরপিসি সহ স্বনামধন্য শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের নিজস্ব অনুভূতি ও অভিজ্ঞতা।
            </p>
          </div>

          {/* Social Proof & Metrics Badge */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-brand-navy">৫.০ / ৫.০ রেটিং</span>
              <span className="block text-slate-500 text-xs font-bangla">১১ জন ভেরিফাইড শিক্ষার্থী</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs & View Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => { setActiveTab('all'); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              সবগুলো রিভিউ ({testimonialsData.length})
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('photo'); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'photo'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              ছবিসহ রিভিউ (৪)
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('hsc'); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'hsc'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              HSC ব্যাচ
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('ssc'); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'ssc'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              SSC ও ফাউন্ডেশন
            </button>
          </div>

          {/* Toggle Grid/Slider Mode */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/70 text-slate-600">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' ? 'bg-white text-brand-navy shadow-sm' : 'hover:text-brand-navy'
                }`}
                title="গ্রিড ভিউ"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden md:inline">গ্রিড</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'slider' ? 'bg-white text-brand-navy shadow-sm' : 'hover:text-brand-navy'
                }`}
                title="স্লাইডার ভিউ"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden md:inline">স্লাইডার</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <div className="flex items-center gap-1 ml-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials Display (Grid Mode vs Slider Mode) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                isImageFailed={!!imageErrors[t.id]}
                onImageError={() => handleImageError(t.id)}
              />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.slice(currentIndex, currentIndex + cardsPerPage).map((t) => (
                <TestimonialCard
                  key={t.id}
                  testimonial={t}
                  isImageFailed={!!imageErrors[t.id]}
                  onImageError={() => handleImageError(t.id)}
                />
              ))}
            </div>

            {/* Pagination Indicators */}
            {maxIndex > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'w-8 bg-brand-ocean' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: (typeof testimonialsData)[0];
  isImageFailed: boolean;
  onImageError: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial: t, isImageFailed, onImageError }) => {
  const hasValidPhoto = Boolean(t.avatarUrl && !isImageFailed);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.1)] hover:border-brand-ocean/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Header: Rating, Batch Tag & Quote Accent */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-brand-ocean/30 -scale-x-100 flex-shrink-0" />
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(t.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold tracking-wide border border-slate-200/60">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>{t.batch}</span>
          </div>
        </div>

        {/* Student's English / Direct Quote */}
        <blockquote className="text-sm sm:text-base text-slate-800 font-sans leading-relaxed mb-4 line-clamp-6">
          "{t.quote}"
        </blockquote>

        {/* Bengali Context / Translation Card */}
        {t.quoteBangla && (
          <div className="bg-slate-50/90 rounded-2xl p-3.5 border border-slate-100 mb-6">
            <p className="text-xs sm:text-sm font-bangla text-slate-600 leading-relaxed italic">
              "{t.quoteBangla}"
            </p>
          </div>
        )}
      </div>

      {/* Student Profile Info */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3.5 mb-3.5">
          {/* Avatar: Photo vs Stylish Initials Badge */}
          {hasValidPhoto ? (
            <div className="relative flex-shrink-0">
              <img
                src={t.avatarUrl}
                alt={t.name}
                onError={onImageError}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Verified Student" />
            </div>
          ) : (
            <div className={`relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarBg || 'from-blue-600 to-indigo-600'} flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md ring-2 ring-slate-100`}>
              <span>{t.initials || t.name.slice(0, 2).toUpperCase()}</span>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Verified Student" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm sm:text-base font-bold text-brand-navy truncate">
                {t.name}
              </span>
              <span className="text-xs text-slate-400 font-bangla">
                ({t.nameBangla})
              </span>
            </div>
            <div className="text-xs text-slate-500 truncate flex items-center gap-1 mt-0.5" title={t.institution}>
              <GraduationCap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">{t.institution}</span>
            </div>
          </div>
        </div>

        {/* Key Takeaway / Improvement Tag */}
        <div className="px-3 py-1.5 rounded-xl bg-brand-ocean/5 border border-brand-ocean/10 text-brand-ocean text-xs font-semibold text-center truncate">
          {t.improvementTag}
        </div>
      </div>
    </div>
  );
};

