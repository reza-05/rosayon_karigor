import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Plus,
  Minus,
  MessageCircle,
  Mail,
  HelpCircle,
  X,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { faqData } from '../data/faqData';

const CATEGORIES = [
  { id: 'all', label: 'All Questions', bangla: 'সব প্রশ্ন' },
  { id: 'general', label: 'General', bangla: 'সাধারণ' },
  { id: 'batches', label: 'Batches & Routine', bangla: 'ব্যাচ ও ক্লাসরুম' },
  { id: 'pedagogy', label: 'Teaching & Method', bangla: 'শিক্ষাদান ও মেথড' },
  { id: 'admission', label: 'Admission & Fees', bangla: 'ভর্তি ও ফি সংক্রান্ত' },
];

const QUICK_TOPICS = [
  'HSC 27',
  'HSC 28',
  'এডমিশন',
  'জৈব রসায়ন',
  'অফলাইন ক্লাসরুম',
  'কোর্স ফি',
  'রেকর্ডিং',
];

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: faqData.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = faqData.filter((item) => item.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!query) return matchesCategory;

      const matchesQuery =
        item.question.toLowerCase().includes(query) ||
        item.questionBangla.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.answerBangla.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'general':
        return { label: 'সাধারণ', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'batches':
        return { label: 'ব্যাচ ও রুটিন', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'pedagogy':
        return { label: 'পদ্ধতি ও মেথড', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'admission':
        return { label: 'ভর্তি ও ফি', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      default:
        return { label: 'সাধারণ', bg: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight font-bold">
          Frequently asked questions
        </h1>

        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto leading-relaxed">
          রসায়ন কারিগরের ব্যাচ, ক্লাসরুম, মেথডলজি, ডাউট-সলভিং এবং ভর্তি সংক্রান্ত আপনার যাবতীয় প্রশ্নের নির্ভরযোগ্য উত্তর।
        </p>

        {/* Live Search Box */}
        <div className="max-w-2xl mx-auto pt-4">
          <div className="relative group">
            <Search className="w-5 h-5 text-brand-muted group-focus-within:text-brand-orange absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
            <input
              type="text"
              placeholder="যেকোনো প্রশ্ন লিখে খুঁজুন (e.g. জৈব রসায়ন, HSC 27, রেকর্ডিং, অফলাইন)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-200 text-sm sm:text-base text-brand-navy placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 shadow-card font-bangla transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-brand-muted hover:text-brand-navy hover:bg-slate-100 transition-colors"
                title="মুছে ফেলুন"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Search Chips */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap pt-3">
            <span className="text-xs text-brand-muted font-bangla mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-orange" />
              জনপ্রিয় টপিক:
            </span>
            {QUICK_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSearchQuery(topic)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors font-bangla ${
                  searchQuery === topic
                    ? 'bg-brand-navy text-white border-brand-navy font-medium'
                    : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-brand-navy'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Result Counter if searching */}
          {searchQuery && (
            <div className="pt-3 text-xs font-bangla text-brand-muted">
              {filteredFaqs.length > 0 ? (
                <span>
                  <strong className="text-brand-navy">{filteredFaqs.length}টি</strong> প্রশ্ন খুঁজে পাওয়া গেছে
                </span>
              ) : (
                <span className="text-red-500 font-medium">কোনো প্রাসঙ্গিক প্রশ্ন মেলেনি</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] ?? 0;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-sm ring-2 ring-brand-navy/20'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{cat.bangla}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Component */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <p className="text-lg font-serif text-brand-navy font-semibold">
              দুঃখিত, আপনার খোঁজা প্রশ্নের কোনো সরাসরি উত্তর মেলেনি।
            </p>
            <p className="text-xs sm:text-sm font-bangla text-brand-muted max-w-md mx-auto">
              সরাসরি আমাদের ফেসবুক পেজে মেসেজ পাঠিয়ে আপনার প্রশ্নের উত্তর জেনে নিন। আমাদের টিম দ্রুত সময়ের মধ্যে আপনাকে সাহায্য করবে।
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                সব প্রশ্ন পুনরায় দেখুন
              </button>
              <a
                href="https://m.me/roshayonkarigor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#1877F2] text-white text-xs font-semibold hover:bg-[#166FE5] transition-colors"
              >
                মেসেঞ্জারে জিজ্ঞেস করুন
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/85 shadow-card divide-y divide-slate-100">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openId === item.id;
              const badge = getCategoryBadge(item.category);

              return (
                <div
                  key={item.id}
                  className={`py-5 transition-all duration-200 ${
                    isOpen ? 'bg-slate-50/50 -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-2xl' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-start justify-between gap-4 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-mono text-brand-muted font-bold">
                          Q{String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span
                          className={`text-[10px] font-bangla px-2 py-0.5 rounded-full border font-medium ${badge.bg}`}
                        >
                          {badge.label}
                        </span>
                      </div>

                      <h3
                        className={`text-base sm:text-lg font-bangla font-semibold transition-colors ${
                          isOpen
                            ? 'text-brand-orange'
                            : 'text-brand-navy group-hover:text-brand-orange'
                        }`}
                      >
                        {item.questionBangla}
                      </h3>

                      <p className="text-xs sm:text-sm font-sans text-brand-muted group-hover:text-slate-600 transition-colors">
                        {item.question}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                        isOpen
                          ? 'bg-brand-orange text-white border-brand-orange shadow-sm rotate-180'
                          : 'border-slate-200 text-brand-navy group-hover:border-brand-navy group-hover:bg-slate-50'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 pl-6 sm:pl-7 pr-4 animate-in fade-in duration-200 space-y-3 border-l-2 border-brand-orange/40 mt-3 ml-2">
                      <p className="text-sm sm:text-base font-bangla text-slate-800 leading-relaxed">
                        {item.answerBangla}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed pt-2 border-t border-slate-200/60">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Still Have Questions? Official Contact Help Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/85 shadow-card text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy">
              আপনার প্রশ্নের উত্তর খুঁজে পাননি?
            </h3>
            <p className="text-xs sm:text-sm font-bangla text-brand-muted max-w-lg mx-auto leading-relaxed">
              যেকোনো একাডেমিক পরামর্শ, ব্যাচ টাইমিং বা বিশেষ প্রয়োজনে সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন।
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 max-w-2xl mx-auto">
            {/* 1. Messenger */}
            <a
              href="https://m.me/roshayonkarigor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-blue-50/60 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-bangla font-semibold text-brand-navy">
                মেসেঞ্জারে চ্যাট
              </span>
              <span className="text-[11px] text-brand-muted font-bangla mt-0.5">
                সবচেয়ে দ্রুত উত্তর পেতে
              </span>
            </a>

            {/* 2. Facebook Page */}
            <a
              href="https://www.facebook.com/roshayonkarigor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-slate-100 hover:border-slate-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-sm font-bangla font-semibold text-brand-navy">
                অফিশিয়াল পেজ
              </span>
              <span className="text-[11px] text-brand-muted font-bangla mt-0.5">
                নিয়মিত আপডেট ও টিপস
              </span>
            </a>

            {/* 3. Official Email */}
            <a
              href="mailto:farzaadp68@gmail.com"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-slate-100 hover:border-slate-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-2 shadow-sm border border-red-100 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-bangla font-semibold text-brand-navy">
                ইমেইল পাঠান
              </span>
              <span className="text-[10px] text-brand-muted font-mono mt-0.5">
                farzaadp68@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Inspiring Bottom CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-3xl bg-brand-navy text-white p-6 sm:p-10 relative overflow-hidden shadow-xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bangla">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>HSC 27, 28 ও এডমিশন ব্যাচে ভর্তি চলছে</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                রসায়নে ভয় নয়, এবার তৈরি হোক পূর্ণ প্রস্তুতি।
              </h3>
              <p className="text-xs sm:text-sm font-bangla text-white/80 leading-relaxed">
                শীতাতপ নিয়ন্ত্রিত আধুনিক অফলাইন ক্লাসরুম কিংবা ইন্টারঅ্যাক্টিভ অনলাইন লাইভ ব্যাচ—আসন সীমিত থাকায় দ্রুত আপনার আসন সুরক্ষিত করুন।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                to="/enroll"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange/90 transition-all shadow-md shadow-brand-orange/20"
              >
                <span>আসন নিশ্চিত করুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all border border-white/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>ডেমো ক্লাস দেখুন</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
