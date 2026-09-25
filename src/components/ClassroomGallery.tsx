import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ClassroomSlide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: ClassroomSlide[] = [
  {
    image: '/classroom-1.jpg',
    title: 'প্রাণবন্ত ক্লাসরুম ও শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ',
    subtitle: 'আনন্দদায়ক পরিবেশে হাতে-কলমে রসায়নের প্রতিটি কনসেপ্ট অনুশীলন',
  },
  {
    image: '/classroom-2.jpg',
    title: 'বোর্ড ওয়ার্ক ও কনসেপচুয়াল মডেল বিশ্লেষণ',
    subtitle: 'পরমাণু মডেল ও বিক্রিয়াগুলোর ভিজ্যুয়াল ব্যাখ্যা ও গভীর অনুধাবন',
  },
  {
    image: '/classroom-3.jpg',
    title: 'ওয়ান-টু-ওয়ান কেয়ার ও নিবিড় প্রশ্ন সমাধান সেশন',
    subtitle: 'পরীক্ষার প্রশ্নপত্র বিশ্লেষণ এবং প্রতিটি শিক্ষার্থীর ব্যক্তিগত ডাউট সলভ',
  },
];

export const ClassroomGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smooth automatic slide change every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>CLASSROOM GLIMPSE • অফলাইন ক্লাসরুম</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight">
          রসায়ন কারিগরের <span className="font-bangla font-bold text-brand-orange">বাস্তব ক্লাসরুম</span>
        </h3>

        <p className="text-sm sm:text-base font-bangla text-brand-muted leading-relaxed max-w-2xl mx-auto">
          মুখস্থ নয়, বাস্তব ক্লাসরুমে গভীর মনোযোগ, সক্রিয় অংশগ্রহণ এবং নিবিড় ডাউট সলভের মাধ্যমে রসায়নের আনন্দময় শিক্ষা।
        </p>
      </div>

      {/* Modern High-End Image Showcase */}
      <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-slate-950 border border-slate-200/80 group">
        {/* Responsive Image Aspect Ratio */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/10] max-h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle Elegant Bottom Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Minimal Caption on Active Slide */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-28 z-20 text-white space-y-1 sm:space-y-1.5 pointer-events-none">
                <h4 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight drop-shadow-md">
                  {slide.title}
                </h4>
                <p className="text-xs sm:text-sm font-bangla text-slate-300 drop-shadow-sm max-w-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-70 group-hover:opacity-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-70 group-hover:opacity-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>

          {/* Sleek Minimal Indicator Dots (Apple Style) */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-20 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-7 bg-brand-orange shadow-glow-orange'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
