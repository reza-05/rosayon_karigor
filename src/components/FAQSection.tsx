import { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { faqData } from '../data/faqData';

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="text-base text-brand-muted font-bangla">
              রসায়ন কারিগর সম্পর্কে আপনার সাধারণ প্রশ্নগুলোর উত্তর।
            </p>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs text-brand-muted block">Still have questions?</span>
            <a
              href="https://www.facebook.com/roshayonkarigor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
            >
              <span>Feel free to contact us</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqData.map((item) => {
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
      </div>
    </section>
  );
};
