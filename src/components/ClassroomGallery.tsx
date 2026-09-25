import { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Pause, Play, Users } from 'lucide-react';

interface ClassroomSlide {
  image: string;
  tag: string;
  titleBangla: string;
  description: string;
}

const slides: ClassroomSlide[] = [
  {
    image: '/classroom-1.jpg',
    tag: 'ACTIVE CLASSROOM LEARNING',
    titleBangla: 'প্রাণবন্ত ক্লাসরুম ও শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ',
    description: 'প্রতিটি ক্লাসে আনন্দদায়ক ও আন্তরিক পরিবেশে সরাসরি শেখার অভিজ্ঞতা — বই-খাতা খুলে প্রতিটি রিয়্যাকশন ও সমীকরণ ক্লাসেই আত্মস্থ করার পরিবেশ।',
  },
  {
    image: '/classroom-2.jpg',
    tag: 'VISUAL WHITEBOARD PEDAGOGY',
    titleBangla: 'বোর্ড ওয়ার্ক ও কনসেপচুয়াল মডেল বিশ্লেষণ',
    description: 'রাদারফোর্ড ও বোর পরমাণু মডেলসহ রসায়নের কঠিন অধ্যায়গুলোর নিখুঁত ডায়াগ্রাম বোর্ডে এঁকে স্পষ্ট ও গভীর লজিক দিয়ে তুলে ধরা হয়।',
  },
  {
    image: '/classroom-3.jpg',
    tag: 'CARE BATCH & DEDICATED MENTORSHIP',
    titleBangla: 'ওয়ান-টু-ওয়ান কেয়ার ও নিবিড় প্রশ্ন সমাধান সেশন',
    description: 'পরীক্ষার প্রশ্নপত্র চুলচেরা বিশ্লেষণ ও ক্লাসের পর প্রতিটি শিক্ষার্থীর ব্যক্তিগত ডাউট সলভ — কোনো দ্বিধা ছাড়াই সরাসরি প্রশ্ন করার পূর্ণ স্বাধীনতা।',
  },
];

export const ClassroomGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance slide every 4.5 seconds when not paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4500);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>OFFLINE CLASSROOM MOMENTS • বাস্তব ক্লাসরুমের ঝলক</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-serif text-brand-navy tracking-tight">
          রসায়ন কারিগরের <span className="font-bangla font-bold text-brand-orange">ক্লাসরুমের কিছু মুহূর্ত</span>
        </h3>

        <p className="text-sm sm:text-base font-bangla text-brand-muted leading-relaxed">
          মুখস্থ নয়, বাস্তব ক্লাসরুমে গভীর মনোযোগ, সক্রিয় অংশগ্রহণ এবং নিবিড় ডাউট সলভের মাধ্যমে রসায়নের ভালোবাসা ছড়িয়ে দেওয়ার দৃশ্যপট।
        </p>
      </div>

      {/* Main Slideshow Showcase */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-brand-navy border border-slate-700/60 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Aspect Ratio Container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/11] max-h-[620px] overflow-hidden bg-slate-950">
          {/* Images Stack with cross-fade */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'
              } transition-transform duration-1000`}
            >
              <img
                src={slide.image}
                alt={slide.titleBangla}
                className="w-full h-full object-cover object-center"
              />
              {/* Vignette & Readability Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
            </div>
          ))}

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
              <Users className="w-3.5 h-3.5 text-brand-orange" />
              <span>Offline Care Batch</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Play/Pause Toggle Indicator */}
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white hover:text-brand-orange transition-colors text-xs font-mono flex items-center gap-1.5"
                title={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
              >
                {isPaused ? <Play className="w-3 h-3 fill-current text-emerald-400" /> : <Pause className="w-3 h-3 fill-current text-brand-orange" />}
                <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Auto-playing'}</span>
              </button>

              {/* Slide Counter */}
              <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-bold tracking-wider">
                0{currentIndex + 1} / 0{slides.length}
              </div>
            </div>
          </div>

          {/* Bottom Captions Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 z-20 text-white space-y-2 max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-md bg-brand-orange text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
              {currentSlide.tag}
            </div>

            <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white leading-snug">
              {currentSlide.titleBangla}
            </h4>

            <p className="text-xs sm:text-sm md:text-base font-bangla text-slate-200 leading-relaxed max-w-2xl text-shadow">
              {currentSlide.description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-orange text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg group-hover:opacity-100 sm:opacity-80"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-orange text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg group-hover:opacity-100 sm:opacity-80"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>

          {/* Animated Countdown Progress Bar */}
          {!isPaused && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
              <div
                key={currentIndex}
                className="h-full bg-brand-orange transition-all ease-linear"
                style={{
                  animation: 'galleryProgress 4500ms linear forwards',
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="bg-brand-navy/95 p-3 sm:p-4 border-t border-white/10 flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto">
          {slides.map((slide, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-2 rounded-2xl transition-all text-left ${
                currentIndex === idx
                  ? 'bg-white/15 border-2 border-brand-orange text-white shadow-md'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-10 h-8 sm:w-12 sm:h-9 rounded-lg object-cover flex-shrink-0"
              />
              <div className="hidden sm:block text-left">
                <div className="text-[10px] font-mono uppercase tracking-wider text-brand-orange font-bold">
                  ছবি 0{idx + 1}
                </div>
                <div className="text-xs font-bangla font-medium truncate max-w-[150px]">
                  {slide.titleBangla}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
