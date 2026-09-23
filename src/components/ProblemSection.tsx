import { Brain, FlaskConical, Clock } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      id: 'p1',
      icon: Brain,
      iconColor: 'text-brand-ocean',
      iconBg: 'bg-brand-ocean/10',
      quote: '“I understand the chapter... until the question changes.”',
      quoteBangla: '“বইয়ের চেনা অংক পারি, কিন্তু পরীক্ষায় উদ্দীপক একটু ঘুরিয়ে দিলেই আটকে যাই।”',
      context: 'FAMILIAR QUESTIONS FEEL EASY. UNFAMILIAR ONES DON’T.',
      contextBangla: 'মুখস্থ বিদ্যা দিয়ে প্যাঁচানো সৃজনশীল বা এডমিশন প্রশ্ন সমাধান করা অসম্ভব।',
    },
    {
      id: 'p2',
      icon: FlaskConical,
      iconColor: 'text-brand-orange',
      iconBg: 'bg-brand-orange/15',
      quote: '“I can memorize reactions... but I don’t know why they happen.”',
      quoteBangla: '“বিক্রিয়া মুখস্থ করি ঠিকই, কিন্তু ২ দিন পর আবার সব গুলিয়ে ফেলি।”',
      context: 'FACTS WITHOUT MEANING ARE HARD TO REMEMBER.',
      contextBangla: 'ইলেকট্রনের প্রবাহ ও মেকানিজম না বুঝলে জৈব রসায়ন সবচেয়ে ভীতিকর মনে হয়।',
    },
    {
      id: 'p3',
      icon: Clock,
      iconColor: 'text-brand-navy',
      iconBg: 'bg-brand-navy/10',
      quote: '“I study for hours... and still forget everything in exams.”',
      quoteBangla: '“ঘন্টার পর ঘন্টা পড়েও পরীক্ষার হলে গিয়ে সূত্র ও কনফিডেন্স হারিয়ে ফেলি।”',
      context: 'WITHOUT CONNECTION, INFORMATION FADES FAST.',
      contextBangla: 'অধ্যায়ের সাথে অধ্যায়ের যোগসূত্র না থাকলে রসায়ন বিচ্ছিন্ন তথ্যের স্তূপ মনে হয়।',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-transparent relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold tracking-wider uppercase">
            <span>THE PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight leading-tight">
            You don’t hate chemistry.{' '}
            <span className="text-brand-orange italic font-normal block sm:inline">
              You hate the way it was explained.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
            রসায়ন কঠিন কোনো বিষয় নয়; বেশিরভাগ ক্ষেত্রে সমস্যাটা ঘটে যেভাবে আমাদের শেখানো হয়। অন্ধ মুখস্থের চাপে হারিয়ে
            যায় বিজ্ঞানের আসল রোমাঞ্চ।
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/85 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${prob.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-200`}>
                      <Icon className={`w-6 h-6 ${prob.iconColor}`} />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-mono font-semibold text-brand-muted/70">
                      Pain Point
                    </span>
                  </div>

                  {/* English Quote */}
                  <blockquote className="font-serif text-lg text-brand-navy font-medium leading-snug mb-3">
                    {prob.quote}
                  </blockquote>

                  {/* Bengali Subquote */}
                  <p className="text-sm font-bangla text-brand-muted leading-relaxed mb-6 italic">
                    {prob.quoteBangla}
                  </p>
                </div>

                {/* Bottom Context Badge */}
                <div className="pt-4 border-t border-brand-navy/5">
                  <div className="text-[10px] font-mono font-bold tracking-wider text-brand-ocean uppercase mb-1">
                    {prob.context}
                  </div>
                  <div className="text-xs font-bangla text-brand-navy/80">
                    {prob.contextBangla}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
