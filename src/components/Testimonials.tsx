import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star, CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const cardsPerPage = 3;
  const maxIndex = Math.max(0, testimonialsData.length - cardsPerPage);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

          {/* Social Proof & Carousel Navigation */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="hidden sm:flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="h-6 w-[1px] bg-slate-200" />
              <div className="text-xs text-slate-700 font-medium">
                <span className="font-bold text-brand-navy">৫.০ / ৫.০</span> • ১১ জন শিক্ষার্থী
              </div>
            </div>

            {!showAll && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials Display */}
        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((t) => (
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
              {testimonialsData.slice(currentIndex, currentIndex + cardsPerPage).map((t) => (
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

        {/* View All / Collapse Toggle */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm font-semibold text-brand-navy hover:bg-slate-50 hover:border-brand-navy/30 transition-all shadow-sm group active:scale-98"
          >
            <span>{showAll ? 'কম রিভিউ দেখুন (স্লাইডার মোড)' : 'সবগুলো ১১টি রিভিউ একসাথে দেখুন'}</span>
            <ArrowRight className={`w-4 h-4 text-brand-ocean transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
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

