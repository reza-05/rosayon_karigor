import { ArrowUp, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white text-brand-navy border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="রসায়ন কারিগর লোগো"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bangla font-bold text-xl text-brand-navy leading-none">
                    রসায়ন কারিগর
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                </div>
                <span className="text-[10px] font-bangla text-brand-muted mt-0.5">
                  বোঝো। প্রয়োগ করো। পারদর্শী হও।
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted font-bangla max-w-sm leading-relaxed">
              একটি আধুনিক ও যুক্তিনির্ভর রসায়ন শিক্ষালয়। শিক্ষার্থীদের মনের ভেতরের রসায়ন ভীতি দূর করে গভীর উপলব্ধি ও
              স্বতঃস্ফূর্ত মেধার বিকাশ ঘটানোই আমাদের প্রতিজ্ঞা।
            </p>

            <div className="text-xs font-serif italic text-brand-ocean">
              "More than Memorization. A Deeper Understanding."
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="text-brand-muted hover:text-brand-navy transition-colors">
                  হোম (Home)
                </a>
              </li>
              <li>
                <a href="#method" className="text-brand-muted hover:text-brand-navy transition-colors">
                  কারিগর মেথড (The Method)
                </a>
              </li>
              <li>
                <a href="#demo" className="text-brand-muted hover:text-brand-navy transition-colors">
                  ক্লাস ডেমো (Class Experience)
                </a>
              </li>
              <li>
                <a href="#resources" className="text-brand-muted hover:text-brand-navy transition-colors">
                  ফ্রি রিসোর্স লাইব্রেরি (Resources)
                </a>
              </li>
              <li>
                <a href="#about" className="text-brand-muted hover:text-brand-navy transition-colors">
                  শিক্ষক পরিচিতি (About Educator)
                </a>
              </li>
              <li>
                <a href="#faq" className="text-brand-muted hover:text-brand-navy transition-colors">
                  সাধারণ জিজ্ঞাসা (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Communities */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
              Connect & Community
            </h4>
            <p className="text-xs text-brand-muted font-bangla leading-relaxed">
              আমাদের নিয়মিত রসায়ন টিপস, কুইজ ও প্রশ্ন সমাধান পেতে যুক্ত থাকুন সোশ্যাল চ্যানেলে:
            </p>

            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/roshayonkarigor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="Facebook Page"
                title="Facebook: roshayonkarigor"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-[#FF0000] hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Gmail / Email */}
              <a
                href="mailto:farzaadp68@gmail.com"
                className="w-9 h-9 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-[#EA4335] hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="Email"
                title="farzaadp68@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-[#E4405F] hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center text-brand-navy hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Direct Email Address Display */}
            <div className="pt-1">
              <a
                href="mailto:farzaadp68@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-mono text-slate-700 hover:text-brand-ocean hover:border-brand-ocean/40 transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-brand-ocean flex-shrink-0" />
                <span>farzaadp68@gmail.com</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://www.facebook.com/roshayonkarigor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-brand-orange hover:underline font-bangla"
              >
                ব্যাচ ভর্তির বিস্তারিত জানতে মেসেজ দিন →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div className="flex items-center gap-1.5 font-bangla">
            <span>© 2025–2026 রসায়ন কারিগর (Rosayon Karigor). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif italic text-brand-ocean">A brighter tomorrow.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full border border-brand-navy/15 hover:bg-brand-navy hover:text-white transition-colors"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
