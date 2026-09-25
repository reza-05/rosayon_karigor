import { useState } from 'react';
import { FlaskConical, Mail } from 'lucide-react';
import { timelineExperience, specializations } from '../data/timelineData';

export const MeetTeacher = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'specializations'>('timeline');

  return (
    <section id="about" className="pt-8 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            Meet the <span className="font-bangla font-bold text-brand-orange">কারিগর</span>.
          </h1>
          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            রসায়ন মানে কেবল মুখস্থ করা নয়; বরং এটি হলো বিষয়টিকে গভীরভাবে বুঝতে পারা।
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Teacher Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-brand-navy text-base sm:text-lg leading-relaxed font-bangla">
              <div className="bg-amber-50/70 p-5 rounded-2xl border-l-4 border-brand-orange text-brand-navy leading-relaxed shadow-sm">
                “অধিকাংশ শিক্ষার্থীর ধারণা, রসায়ন মানেই প্রচুর বিক্রিয়া, সূত্র এবং মুখস্থ করার বিষয়। কিন্তু এক পর্যায়ে আমি বুঝতে পারি যে, রসায়ন মানে কেবল মুখস্থ করা নয়; বরং এটি হলো বিষয়টিকে বুঝতে পারা। সেই ছোট্ট চিন্তা থেকেই রসায়ন কারিগরের যাত্রা শুরু, যেখানে আমি আমার প্রতিটি শিক্ষার্থীর মধ্যে সেই পরিবর্তনটিই আনতে চাই, যাতে তাদের চিন্তাধারা <span className="text-brand-ocean font-bold">"আমাকে এটা মুখস্থ করতে হবে"</span> থেকে পরিবর্তন হয়ে <span className="text-emerald-700 font-bold">"এখন আমি জানি কেন এমনটা হয়"</span>-তে রূপান্তরিত হয়।”
              </div>

              <p className="text-brand-navy/90 text-sm sm:text-base leading-relaxed">
                আমি <strong className="text-brand-navy font-bold">Farzaad Sawrar (ফারজাদ ভাইয়া)</strong>, আইইউটি (IUT)-তে Civil and Environmental Engineering department এর শিক্ষার্থী এবং ‘রসায়ন কারিগর’-এর প্রতিষ্ঠাতা। আমার এই যাত্রাপথে আমি ৯ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের পড়িয়েছি; ‘শিক্ষানীড় একাডেমিক কোচিং’-এ রসায়ন বিভাগের প্রধান (Former Head of the Chemistry Department) এবং ‘উদ্ভাস ইঞ্জিনিয়ারিং অ্যাডমিশন প্রোগ্রাম’-এ রসায়ন বিষয়ের প্রধান পরীক্ষক (Head Examiner) হিসেবে দায়িত্ব পালন করেছি। শিক্ষার্থীদের রসায়নের ভীতি দূর করে আত্মবিশ্বাস তৈরি করাই আমার লক্ষ্য—কারণ আমার একটাই বিশ্বাস ও প্রত্যয়, <span className="text-brand-orange font-bold">"রসায়ন মানেই, রসায়ন কারিগর।"</span>
              </p>
            </div>

            {/* Signature & Credentials Badge */}
            <div className="pt-6 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif italic text-2xl font-bold text-brand-navy">
                  Farzaad Sawrar
                </div>
                <div className="text-xs font-bangla text-brand-navy font-medium mt-0.5">
                  প্রতিষ্ঠাতা ও মেন্টর, রসায়ন কারিগর
                </div>
                <div className="text-[11px] font-mono text-brand-ocean mt-0.5">
                  CEE, Islamic University of Technology (IUT)
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/roshayonkarigor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-medium text-blue-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Facebook Page</span>
                </a>
                <a
                  href="mailto:farzaadp68@gmail.com"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-medium text-slate-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>ইমেইল</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Teacher Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Background Accent Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-ocean rounded-3xl rotate-2 scale-[1.02] shadow-xl" />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-card overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy/5">
                  <img
                    src="/farzaad.jpg"
                    alt="Farzaad Sawrar (ফারজাদ ভাইয়া) - প্রতিষ্ঠাতা ও প্রধান রসায়ন মেন্টর, রসায়ন কারিগর"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent" />

                  {/* Photo Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[11px] font-mono tracking-widest text-brand-orange uppercase mb-1 font-bold">
                      Founder & Lead Chemistry Mentor
                    </div>
                    <div className="font-serif text-2xl font-bold flex items-baseline gap-2">
                      <span>Farzaad Sawrar</span>
                      <span className="font-bangla text-sm font-normal text-slate-200">(ফারজাদ ভাইয়া)</span>
                    </div>
                    <div className="text-xs text-slate-200 font-sans mt-0.5">
                      Civil & Environmental Engineering, IUT
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-white/15 flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-slate-100">
                        Former Head Examiner, Udvash
                      </span>
                      <span className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-slate-100">
                        Former Head of Chemistry, Shikkhanir
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Profile & Journey Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-1">
                ACADEMIC PROFILE
              </div>
              <h3 className="text-2xl font-serif text-brand-navy">
                A journey of learning and teaching.
              </h3>
            </div>

            {/* Tab Toggles */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-brand-navy/10 self-start sm:self-auto text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('timeline')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'timeline'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-brand-muted hover:text-brand-navy'
                }`}
              >
                Education & Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('specializations')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'specializations'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-brand-muted hover:text-brand-navy'
                }`}
              >
                Core Specializations
              </button>
            </div>
          </div>

          {/* Tab 1: Timeline */}
          {activeTab === 'timeline' && (
            <div className="relative pl-6 border-l-2 border-brand-ocean/30 space-y-8">
              {timelineExperience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-brand-ocean group-hover:border-brand-orange transition-colors" />

                  <div className="bg-white rounded-2xl p-5 border border-brand-navy/8 shadow-sm hover:shadow-card transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full">
                        {item.period}
                      </span>
                      <span className="text-xs text-brand-muted">{item.location}</span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-brand-navy">
                      {item.role}
                    </h4>
                    <div className="text-xs font-semibold text-brand-ocean mb-2">
                      {item.institution}
                    </div>

                    <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Specializations */}
          {activeTab === 'specializations' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-brand-navy/8 shadow-sm hover:shadow-card transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy font-serif">
                        {spec.title}
                      </h4>
                      <span className="text-xs font-bangla text-brand-orange font-medium">
                        {spec.bangla}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bangla text-brand-muted leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
