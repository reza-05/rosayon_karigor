import { useState } from 'react';
import { Search, Plus, Minus, MessageCircle, Sparkles, Mail } from 'lucide-react';
import { faqData } from '../data/faqData';

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions', bangla: 'সব প্রশ্ন' },
    { id: 'general', label: 'General', bangla: 'সাধারণ' },
    { id: 'batches', label: 'Batches & Routine', bangla: 'ব্যাচ ও রুটিন' },
    { id: 'pedagogy', label: 'Teaching & Pedagogy', bangla: 'শিক্ষাদান ও মেথড' },
    { id: 'admission', label: 'Admission & Enroll', bangla: 'ভর্তি প্রক্রিয়া' },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      item.question.toLowerCase().includes(query) ||
      item.questionBangla.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.answerBangla.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>HELP & SUPPORT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          Frequently asked questions.
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          রসায়ন কারিগরের ক্লাস, পরীক্ষা, ডাউট-সলভিং এবং ভর্তি সম্পর্কিত যাবতীয় সাধারণ প্রশ্নের সহজ সমাধান।
        </p>

        {/* Live Search Input */}
        <div className="max-w-xl mx-auto pt-6">
          <div className="relative">
            <Search className="w-5 h-5 text-brand-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="যেকোনো প্রশ্ন লিখে খুঁজুন (e.g. জৈব রসায়ন, রেকর্ডিং, অফলাইন)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-panel text-sm text-brand-navy placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 shadow-card font-bangla"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-brand-muted hover:text-brand-navy"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-brand-navy/70 border border-brand-navy/10 hover:bg-brand-navy/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className="opacity-70 text-[10px] ml-1">({cat.bangla})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Component */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-3xl p-8 border border-brand-navy/10">
            <p className="text-base font-serif text-brand-navy">
              দুঃখিত, আপনার খোঁজা প্রশ্নের কোনো সরাসরি উত্তর মেলেনি।
            </p>
            <p className="text-xs font-bangla text-brand-muted mt-1">
              সরাসরি হোয়াটসঅ্যাপে আমাদের সাথে কথা বলে আপনার সংশয় দূর করুন।
            </p>
          </div>
        ) : (
          <div className="glass-panel rounded-3xl p-6 sm:p-10 divide-y divide-slate-200/80 border border-slate-200/85 shadow-card">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-base sm:text-lg font-serif font-medium text-brand-navy group-hover:text-brand-ocean transition-colors">
                        {item.question}
                      </span>
                      <span className="block text-xs font-bangla text-brand-muted font-normal">
                        {item.questionBangla}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen
                          ? 'bg-brand-orange text-white border-brand-orange rotate-180'
                          : 'border-brand-navy/20 text-brand-navy group-hover:border-brand-navy'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 pr-12 animate-in fade-in duration-200 space-y-2">
                      <p className="text-sm font-bangla text-brand-navy/90 leading-relaxed">
                        {item.answerBangla}
                      </p>
                      <p className="text-xs text-brand-muted font-sans leading-relaxed">
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

      {/* Direct WhatsApp Contact Help Box */}
      <div className="max-w-3xl mx-auto px-4 pt-12">
        <div className="glass-panel rounded-3xl p-8 border border-brand-navy/10 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif text-brand-navy">
            আপনার প্রশ্নের উত্তর খুঁজে পাননি?
          </h3>
          <p className="text-sm font-bangla text-brand-muted max-w-md mx-auto">
            কোনো দ্বিধা ছাড়াই সরাসরি হোয়াটসঅ্যাপে আমাদের সাথে কথা বলুন। আমরা যেকোনো পরামর্শে সহযোগিতা করতে আনন্দিত।
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="https://wa.me/8801700000000?text=হ্যালো%20স্যার,%20রসায়ন%20কারিগর%20সম্পর্কে%20কিছু%20জানতে%20চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#1EBE5D] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp এ মেসেজ</span>
            </a>
            <a
              href="https://www.facebook.com/roshayonkarigor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1877F2] text-white text-xs sm:text-sm font-semibold hover:bg-[#166FE5] transition-colors shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page</span>
            </a>
            <a
              href="mailto:farzaadp68@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-700 border border-slate-200/90 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span className="font-mono">farzaadp68@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
