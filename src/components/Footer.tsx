import { ArrowUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <span className="font-bangla font-bold text-xl text-brand-navy leading-none">
                  রসায়ন কারিগর
                </span>
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
                <Link to="/" className="text-brand-muted hover:text-brand-navy transition-colors">
                  হোম (Home)
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-brand-muted hover:text-brand-navy transition-colors">
                  কারিগর মেথড (The Method)
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-brand-muted hover:text-brand-navy transition-colors">
                  ডেমো ক্লাস (Demo Class)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-muted hover:text-brand-navy transition-colors">
                  শিক্ষক পরিচিতি (About Educator)
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-brand-muted hover:text-brand-navy transition-colors">
                  সাধারণ জিজ্ঞাসা (FAQ)
                </Link>
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
