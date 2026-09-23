import { Users, Calendar, Video, Award, Quote } from 'lucide-react';

export const StatsBar = () => {
  const stats = [
    {
      value: '500+',
      label: 'Students Guided',
      labelBangla: 'সফল শিক্ষার্থী',
      icon: Users,
    },
    {
      value: '4+',
      label: 'Years of Teaching',
      labelBangla: 'শিক্ষাদানের অভিজ্ঞতা',
      icon: Calendar,
    },
    {
      value: '1,200+',
      label: 'Classes Conducted',
      labelBangla: 'সফল ক্লাস সম্পন্ন',
      icon: Video,
    },
    {
      value: '95%',
      label: 'Better Concept Clarity',
      labelBangla: 'উন্নত কনসেপ্ট ক্ল্যারিটি',
      icon: Award,
    },
  ];

  return (
    <section className="bg-brand-navy text-white py-12 relative overflow-hidden bg-chem-dark-grid">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-ocean/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Numbers Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="space-y-1 group">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Icon className="w-5 h-5 text-brand-orange/80 group-hover:text-brand-orange transition-colors" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-orange">
                      {st.value}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white tracking-wide">
                    {st.label}
                  </div>
                  <div className="text-xs font-bangla text-slate-300">
                    {st.labelBangla}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Quote Pill */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-inner">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-brand-orange flex-shrink-0 opacity-80" />
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                  "I stopped trying to memorize every reaction. Once I understood the pattern, everything became easier."
                </p>
                <div className="flex items-center justify-between text-xs text-brand-orange pt-1 border-t border-white/10 font-medium">
                  <span>Ayaan Rahman</span>
                  <span className="text-slate-300 text-[11px]">HSC 2025 • NDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
