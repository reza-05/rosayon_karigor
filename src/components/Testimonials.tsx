import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>REAL STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight">
              Students noticed the difference.
            </h2>
            <p className="text-base text-brand-muted font-bangla">
              Different backgrounds. Same experience — chemistry finally makes sense.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid (Desktop 3 cards, responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                idx === currentIndex ? 'ring-2 ring-brand-orange' : ''
              }`}
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-brand-orange/40" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* English Quote */}
                <blockquote className="text-xs sm:text-sm text-brand-navy font-serif leading-relaxed mb-3">
                  "{t.quote}"
                </blockquote>

                {/* Bengali Subquote */}
                <p className="text-xs font-bangla text-brand-muted leading-relaxed mb-6 italic">
                  "{t.quoteBangla}"
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="pt-4 border-t border-brand-navy/8">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-brand-navy/10"
                  />
                  <div>
                    <div className="text-sm font-bold text-brand-navy font-serif">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-brand-muted font-sans truncate max-w-[140px]">
                      {t.batch}
                    </div>
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="inline-block px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-semibold tracking-wide truncate w-full text-center">
                  {t.improvementTag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
