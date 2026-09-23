import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock } from 'lucide-react';

export const ClassExperience = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(35); // 35% default for preview

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
          return prev + 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="demo" className="py-24 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-ocean/10 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>CLASS EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight">
            See how a <span className="font-bangla font-bold">কারিগর</span> class feels.
          </h2>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            A glimpse into the real teaching style — clear explanations, visual thinking, and problem solving in action.
            একবার দেখে নাও কীভাবে জটিল কনসেপ্টগুলো নিমেষেই পরিষ্কার হয়ে যায়।
          </p>
        </div>

        {/* Video Card Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-brand-navy/10 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video Player Mockup */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-brand-dark shadow-inner group">
                {/* Chalkboard / Classroom Background Simulation */}
                <div className="absolute inset-0 bg-[#0d2238] flex items-center justify-center p-6 text-center select-none overflow-hidden">
                  {/* Subtle Grid / Chalkboard Texture */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Chemistry Diagram Simulation on Board */}
                  <div className="relative z-10 text-white space-y-4 max-w-md">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-brand-orange tracking-widest uppercase">
                      Class Preview • Lecture #04
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-serif text-white/95">
                      Why do atoms form bonds?
                    </h4>

                    {/* Chemical Structure on blackboard */}
                    <div className="font-mono text-sm sm:text-base text-slate-300 py-2 border-y border-white/15 my-2">
                      <div className="flex items-center justify-center gap-2">
                        <span>H</span>
                        <span className="text-brand-orange">—</span>
                        <span>C</span>
                        <span className="text-brand-orange">≡</span>
                        <span>C</span>
                        <span className="text-brand-orange">—</span>
                        <span>H</span>
                        <span className="text-xs text-brand-orange/80 ml-2">(sp Hybridization)</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        ΔH = -839 kJ/mol • 180° Linear Bond Angle
                      </div>
                    </div>

                    <p className="text-xs font-bangla text-slate-300 italic">
                      "শক্তি সর্বনিম্নকরণ ও অষ্টক পূরণের চেয়েও ইলেকট্রন জোড় স্থিতিশীল হওয়ার মূল কারণ..."
                    </p>
                  </div>
                </div>

                {/* Center Play Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-brand-navy/40 backdrop-blur-[2px] flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-glow-orange hover:scale-110 active:scale-95 transition-all duration-200"
                      aria-label="Play Video"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                  </div>
                )}

                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                    Live Demo Class
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/80 text-[11px] font-medium text-white">
                    HD 1080p
                  </span>
                </div>

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
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

                  {/* Button row */}
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

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-brand-orange font-medium hidden sm:inline">
                        Chapter: {chapters[activeChapter].title}
                      </span>
                      <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Chapters Track */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {chapters.map((chap, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => {
                      setActiveChapter(i);
                      setProgress(i * 33 + 10);
                      setIsPlaying(true);
                    }}
                    className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                      activeChapter === i
                        ? 'bg-brand-navy text-white border-brand-navy'
                        : 'bg-[#F7F5EF] text-brand-navy border-brand-navy/10 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-brand-orange font-mono mb-0.5">
                      <span>Part 0{i + 1}</span>
                      <span>{chap.range}</span>
                    </div>
                    <div className="font-medium truncate">{chap.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Topic Details & Takeaways */}
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

              {/* What you'll learn checklist */}
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

              {/* Call to action */}
              <div className="pt-2">
                <a
                  href="#enroll"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-orange text-white text-sm font-semibold shadow-sm hover:bg-brand-orange-hover hover:shadow-glow-orange transition-all"
                >
                  <span>Watch the Full Demo & Join Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
