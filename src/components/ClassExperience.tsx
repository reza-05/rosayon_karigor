import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock, HelpCircle, Check, X } from 'lucide-react';

export const ClassExperience = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(42);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const chapters = [
    { title: 'Why atoms actually form bonds', time: '01:15', range: '00:00 - 01:15' },
    { title: 'Valence electrons & energetic stability', time: '02:40', range: '01:15 - 02:40' },
    { title: 'Sigma vs Pi orbital overlapping', time: '04:32', range: '02:40 - 04:32' },
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

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
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>STUDIO CLASSROOM EXPERIENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            See how a <span className="font-bangla font-bold">কারিগর</span> class feels.
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            একটি সম্পূর্ণ ইন্টারেক্টিভ চকবোর্ড লেকচার পরিবেশ—যেখানে শুধু সূত্র মুখস্থ নয়, প্রতিটি পরমাণুর আচরণ অ্যানিমেশন ও বাস্তব উদাহরণের মাধ্যমে প্রাঞ্জলভাবে তুলে ধরা হয়।
          </p>
        </div>

        {/* Video Card Container */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 shadow-card border border-white/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Studio Player */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A192F] shadow-2xl group border border-slate-700/60">
                {/* Chalkboard Texture Background */}
                <div className="absolute inset-0 bg-[#071322] flex items-center justify-center p-6 text-center select-none overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Real Scientific Blackboard Diagrams */}
                  <div className="relative z-10 text-white space-y-3 max-w-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-brand-orange tracking-widest uppercase">
                      <span>Live Lecture • Chemical Bonding</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-serif text-white/95">
                      Steric Number & Geometry Formula
                    </h4>

                    {/* Scientific Calculation Board */}
                    <div className="font-mono text-xs sm:text-sm bg-black/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 text-left space-y-1.5 text-slate-200">
                      <div className="text-brand-orange font-bold">
                        SN = (σ-bonds) + (lone pairs)
                      </div>
                      <div className="text-xs text-slate-300">
                        For H₂O: 2 (O-H bonds) + 2 (lone pairs on O) = 4 ➔ <strong className="text-white">sp³ Hybridized</strong>
                      </div>
                      <div className="text-xs text-emerald-400">
                        VSEPR Effect: lp-lp repulsion compresses bond angle to 104.5°
                      </div>
                    </div>

                    <p className="text-xs font-bangla text-slate-300 italic">
                      "মুখস্থ নয়—কেন ১০৯.৫° থেকে কমে ১০৪.৫° হয় তা মুক্তজোড়ের পারস্পরিক বিকর্ষণ দেখলেই স্পষ্ট।"
                    </p>
                  </div>
                </div>

                {/* Center Play Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-brand-navy/50 backdrop-blur-[2px] flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full btn-luxury-primary text-white flex items-center justify-center shadow-glow-orange hover:scale-110 active:scale-95 transition-all duration-200"
                      aria-label="Play Video"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                  </div>
                )}

                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                    Studio HD
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/90 text-[11px] font-semibold text-white">
                    NCTB Aligned
                  </span>
                </div>

                {/* Quick Concept Check Prompt Button */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    type="button"
                    onClick={() => setShowQuizModal(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/90 text-white text-xs font-bold hover:bg-amber-600 transition-all shadow-md"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Quick Concept Quiz</span>
                  </button>
                </div>

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2 z-20">
                  {/* Progress Bar */}
                  <div
                    className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setProgress((clickX / rect.width) * 100);
                    }}
                  >
                    <div
                      className="h-full bg-brand-orange rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-brand-orange transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-brand-orange transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="font-mono text-[11px] text-slate-300">
                        {Math.floor((progress / 100) * 4)}:{String(Math.floor(((progress / 100) * 272) % 60)).padStart(2, '0')} / 04:32
                      </span>
                    </div>

                    {/* Speed Selector */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md text-[10px] font-mono">
                        {[1, 1.25, 1.5].map((spd) => (
                          <button
                            type="button"
                            key={spd}
                            onClick={() => setPlaybackSpeed(spd)}
                            className={`px-1 rounded ${playbackSpeed === spd ? 'text-brand-orange font-bold' : 'text-slate-300'}`}
                          >
                            {spd}x
                          </button>
                        ))}
                      </div>

                      <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Chapters */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {chapters.map((chap, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => {
                      setActiveChapter(i);
                      setProgress(i * 33 + 12);
                      setIsPlaying(true);
                    }}
                    className={`text-left p-2.5 rounded-2xl border text-xs transition-all ${
                      activeChapter === i
                        ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                        : 'bg-white text-brand-navy border-brand-navy/10 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-brand-orange font-mono mb-0.5">
                      <span>Part 0{i + 1}</span>
                      <span>{chap.range}</span>
                    </div>
                    <div className="font-semibold truncate">{chap.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-ocean">
                  <BookOpen className="w-4 h-4" />
                  <span>Topic: Chemical Bonding & Hybridization</span>
                </div>
                <h3 className="text-2xl font-serif text-brand-navy">
                  Why atoms form bonds: A fresh visual perspective
                </h3>
                <div className="flex items-center gap-4 text-xs text-brand-muted">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: 04:32 min</span>
                  </div>
                  <span>•</span>
                  <span>Board & Admission Focused</span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2 border-t border-brand-navy/10">
                <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  What you'll discover in this demo:
                </h4>
                <ul className="space-y-2.5 text-sm font-bangla text-brand-navy/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>কেন পরমাণু বন্ধন গঠন করে—অষ্টক নিয়মের সীমাবদ্ধতা এবং অরবিটাল শক্তির বাস্তব চিত্র।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>সিগমা (σ) ও পাই (π) বন্ধনের শক্তি ও সক্রিয়তার পার্থক্য সহজে বোঝার মেথড।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>পরীক্ষায় অচেনা কোনো যৌগের সংকরণ ও আকৃতি বের করার ১০-সেকেন্ড শর্টকাট।</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#/enroll"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-luxury-primary text-white text-sm font-semibold shadow-md transition-all"
                >
                  <span>Watch the Full Demo & Join Batch</span>
                  <ArrowRight className="w-4 h-4" />
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
                      : 'bg-[#FAF8F5] border-brand-navy/10 hover:bg-white text-brand-navy'
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
