import { useState } from 'react';
import { Sparkles, FlaskConical } from 'lucide-react';
import { timelineExperience, specializations } from '../data/timelineData';

export const MeetTeacher = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'specializations'>('timeline');

  return (
    <section id="about" className="pt-8 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>ABOUT THE EDUCATOR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
            Meet the <span className="font-bangla font-bold">কারিগর</span>.
          </h1>
          <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
            A teacher, a learner, and a firm believer that better explanations can change everything. প্রতিটি শিক্ষার্থীর মাঝে রসায়নের প্রতি ভালোবাসা ও গভীর উপলব্ধি তৈরি করাই আমার অঙ্গীকার।
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Teacher Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-brand-navy text-base sm:text-lg leading-relaxed font-bangla">
              <p>
                আমি যখন প্রথম রসায়ন পড়ানো শুরু করি, লক্ষ্য করলাম অনেক মেধাবী শিক্ষার্থী রসায়নে ভয় পায় — তাদের মেধার
                ঘাটতির কারণে নয়, বরং বিষয়টিকে তাদের সামনে তুলে ধরা হয়েছে অগণিত বিচ্ছিন্ন সূত্রের বোঝা হিসেবে।
              </p>
              <p className="text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
                "Today, I teach to make chemistry visible, understandable, and applicable — so that students can build
                unshakable confidence, think clearly, and truly enjoy the science."
              </p>
              <p>
                আমার লক্ষ্য কেবল শিক্ষার্থীদের পরীক্ষায় ভালো নম্বর এনে দেওয়া নয়, বরং তাদের মধ্যে একটি বৈজ্ঞানিক দৃষ্টিভঙ্গি
                ও যৌক্তিক চিন্তাশক্তি গড়ে তোলা—যা তাদের উচ্চশিক্ষায় ও যেকোনো প্রতিযোগিতামূলক ভর্তি পরীক্ষায় এগিয়ে রাখবে।
              </p>
            </div>

            {/* Signature & Seal */}
            <div className="pt-6 border-t border-brand-navy/10 flex items-center justify-between">
              <div>
                <div className="font-serif italic text-2xl text-brand-navy">
                  Reza
                </div>
                <div className="text-xs font-bangla text-brand-muted mt-0.5">
                  প্রতিষ্ঠাতা ও প্রধান নির্দেশক, রসায়ন কারিগর
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-brand-ocean">
                Chemistry for a Brighter You
              </div>
            </div>
          </div>

          {/* Right Column: Teacher Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Background Accent Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-ocean rounded-3xl rotate-3 scale-[1.02] shadow-xl" />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-card overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy/5">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                    alt="Teacher in classroom"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />

                  {/* Photo Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-mono tracking-widest text-brand-orange uppercase mb-1">
                      Educator & Mentor
                    </div>
                    <div className="font-serif text-xl font-bold">
                      Md. Reza
                    </div>
                    <div className="text-xs text-slate-300 font-bangla mt-0.5">
                      B.Sc. in Chemical Sciences • 4+ Years Mentorship
                    </div>
                  </div>
                </div>

                {/* Floating quote badge */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-brand-navy font-serif italic text-center">
                  "Good chemistry changes everything." — রসায়ন কারিগর
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
