import { FAQSection } from '../components/FAQSection';
import { MessageCircle, Sparkles, PhoneCall } from 'lucide-react';

export const FAQPage = () => {
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
      </div>

      {/* Accordion Component */}
      <FAQSection />

      {/* Direct WhatsApp Contact Help Box */}
      <div className="max-w-3xl mx-auto px-4 pt-12">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-brand-navy/10 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif text-brand-navy">
            আপনার প্রশ্নের উত্তর খুঁজে পাননি?
          </h3>
          <p className="text-sm font-bangla text-brand-muted max-w-md mx-auto">
            কোনো দ্বিধা ছাড়াই সরাসরি হোয়াটসঅ্যাপে আমাদের সাথে কথা বলুন। আমরা যেকোনো পরামর্শে সহযোগিতা করতে আনন্দিত।
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/8801700000000?text=হ্যালো%20স্যার,%20রসায়ন%20কারিগর%20সম্পর্কে%20কিছু%20জানতে%20চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1EBE5D] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp এ মেসেজ দিন</span>
            </a>
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-navy border border-brand-navy/15 text-sm font-semibold hover:bg-brand-navy/5 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-orange" />
              <span>সরাসরি কল করুন</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
