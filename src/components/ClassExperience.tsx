import { useState } from 'react';
import { CheckCircle2, ArrowRight, ExternalLink, HelpCircle, Check, X, Tv } from 'lucide-react';

export const ClassExperience = () => {
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const quizQuestion = {
    question: 'Why is the bond angle in H₂O 104.5° instead of the normal tetrahedral angle 109.5°?',
    questionBangla: 'পানিতে (H₂O) সংকরণ sp³ হওয়া সত্ত্বেও বন্ধন কোণ ১০৯.৫° না হয়ে ১০৪.৫° হয় কেন?',
    options: [
      { text: 'Due to low electronegativity of Hydrogen', isCorrect: false },
      { text: 'Due to Lone Pair - Lone Pair (lp-lp) strong repulsion', isCorrect: true },
      { text: 'Due to hydrogen bonding in liquid state', isCorrect: false },
    ],
    explanation: 'VSEPR তত্ত্ব অনুসারে: lp-lp বিকর্ষণ > lp-bp বিকর্ষণ > bp-bp বিকর্ষণ। অক্সিজেনের ২টি মুক্তজোড় ইলেকট্রন (lone pairs) বন্ধনজোড় ইলেকট্রনগুলোকে ভেতরের দিকে চাপ দেয়, ফলে কোণ কমে ১০৪.৫° হয়।',
  };

  return (
    <section id="demo" className="pt-8 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            See how a <span className="font-bangla font-bold text-brand-orange">কারিগর</span> class feels.
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন কেবল মুখস্থ করার বিষয় নয় — কনসেপ্টের গভীরে গিয়ে সহজ লজিকে প্রতিটি মেকানিজম ও সমীকরণ আত্মস্থ করার পূর্ণাঙ্গ ডেমো ক্লাস।
          </p>
        </div>

        {/* Video Card Container */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 shadow-card border border-white/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: YouTube Video Embed */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800">
                <iframe
                  src="https://www.youtube.com/embed/Lrgz9kcD-jw?rel=0"
                  title="রসায়ন কারিগর ডেমো ক্লাস - ফারজাদ ভাইয়া"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Sub-bar below video */}
              <div className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                  </span>
                  <span className="font-semibold text-brand-navy font-bangla">অফিসিয়াল ডেমো ক্লাস • ফারজাদ ভাইয়া</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowQuizModal(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold border border-amber-200 transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Quick Concept Quiz</span>
                  </button>

                  <a
                    href="https://youtu.be/Lrgz9kcD-jw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-ocean hover:text-brand-orange transition-colors font-medium"
                  >
                    <span>YouTube-এ ওপেন করুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Details & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-ocean">
                  <Tv className="w-4 h-4" />
                  <span>DEMO LECTURE • HSC & ADMISSION</span>
                </div>
                <h3 className="text-2xl font-serif text-brand-navy font-bold">
                  রসায়ন কারিগর ডেমো ক্লাস
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted font-bangla leading-relaxed">
                  ভিডিওতে দেখে নাও কীভাবে প্রতিটি জটিল সমীকরণ ও রসায়নের বিক্রিয়াকে বাস্তব উদাহরণ দিয়ে প্রাণবন্ত করে তোলা হয়।
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2 border-t border-brand-navy/10">
                <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  এই ডেমো ক্লাসে যা যা দেখবে:
                </h4>
                <ul className="space-y-2.5 text-sm font-bangla text-brand-navy/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>অন্ধের মতো সূত্র না মুখস্থ করে যৌক্তিক ব্যাখ্যার মাধ্যমে বিক্রিয়া বোঝার মেথড।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>বোর্ড পরীক্ষা ও ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় দ্রুত এবং নির্ভুল উত্তর বের করার টেকনিক।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>কঠিন অধ্যায়গুলোর কনসেপচুয়াল ভয় কাটিয়ে পরীক্ষার হলে সর্বোচ্চ আত্মবিশ্বাস অর্জন।</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.facebook.com/roshayonkarigor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full btn-luxury-primary text-white text-sm font-semibold shadow-md transition-all group"
                >
                  <span>Join Next Batch (ফেসবুক পেজে মেসেজ দিন)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Check Quiz Modal */}
      {showQuizModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-brand-navy/10 shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand-orange uppercase">
                Quick Concept Check
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowQuizModal(false);
                  setSelectedAnswer(null);
                }}
                className="text-brand-muted hover:text-brand-navy p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h4 className="text-lg font-serif font-bold text-brand-navy">
              {quizQuestion.question}
            </h4>
            <p className="text-xs font-bangla text-brand-muted">
              {quizQuestion.questionBangla}
            </p>

            <div className="space-y-2.5">
              {quizQuestion.options.map((opt, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setSelectedAnswer(i)}
                  className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                    selectedAnswer === i
                      ? opt.isCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                        : 'bg-red-50 border-red-500 text-red-900'
                      : 'bg-slate-50 border-slate-200/80 hover:bg-white text-brand-navy'
                  }`}
                >
                  <span>{opt.text}</span>
                  {selectedAnswer === i && (
                    opt.isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-red-600" />
                  )}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bangla text-emerald-950 space-y-1">
                <span className="font-bold block text-emerald-800">ব্যাখ্যা (Scientific Insight):</span>
                <span>{quizQuestion.explanation}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
