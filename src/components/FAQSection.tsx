import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqData } from '../data/faqData';

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  // Display top 6 questions on homepage
  const featuredFaqs = faqData.slice(0, 6);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight font-bold">
              Frequently asked questions
            </h2>
            <p className="text-base text-brand-muted font-bangla">
              রসায়ন কারিগর সম্পর্কে শিক্ষার্থীদের সাধারণ প্রশ্নগুলোর উত্তর।
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs text-brand-muted block font-bangla">আরও বিস্তারিত জানতে চান?</span>
            <Link
              to="/faq"
              className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1 font-bangla mt-0.5"
            >
              <span>সকল প্রশ্নোত্তর পেজ</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
          {featuredFaqs.map((item) => {
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
                    <span className="text-base sm:text-lg font-serif font-medium text-brand-navy group-hover:text-brand-orange transition-colors">
                      {item.question}
                    </span>
                    <span className="block text-xs font-bangla text-brand-muted font-normal">
                      {item.questionBangla}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? 'bg-brand-orange text-white border-brand-orange rotate-180 shadow-sm'
                        : 'border-slate-200 text-brand-navy group-hover:border-brand-navy'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pb-2 pr-6 animate-in fade-in duration-200 space-y-2 border-l-2 border-brand-orange/40 pl-4 mt-2">
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

        {/* View All FAQs Button */}
        <div className="pt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-brand-navy border border-slate-200 text-sm font-semibold transition-all shadow-sm group"
          >
            <span className="font-bangla">সবগুলো প্রশ্নোত্তর দেখুন (All {faqData.length} FAQs)</span>
            <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
