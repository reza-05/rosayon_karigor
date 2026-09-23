import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Atom, Sparkles, User, PlayCircle, FolderDown, HelpCircle } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', enName: 'Home', path: '/', icon: Atom },
    { name: 'পদ্ধতি', enName: 'Method', path: '/method', icon: Sparkles },
    { name: 'ক্লাস ডেমো', enName: 'Demo', path: '/demo', icon: PlayCircle },
    { name: 'রিসোর্স', enName: 'Resources', path: '/resources', icon: FolderDown },
    { name: 'শিক্ষক পরিচিতি', enName: 'About', path: '/about', icon: User },
    { name: 'প্রশ্নোত্তর', enName: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50,15 80,32 80,68 50,85 20,68 20,32"
                  stroke="#09284C"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <line x1="50" y1="15" x2="50" y2="40" stroke="#164B73" strokeWidth="4" />
                <line x1="80" y1="32" x2="58" y2="45" stroke="#164B73" strokeWidth="4" />
                <line x1="80" y1="68" x2="58" y2="55" stroke="#164B73" strokeWidth="4" />
                <line x1="50" y1="85" x2="50" y2="60" stroke="#164B73" strokeWidth="4" />
                <line x1="20" y1="68" x2="42" y2="55" stroke="#164B73" strokeWidth="4" />
                <line x1="20" y1="32" x2="42" y2="45" stroke="#164B73" strokeWidth="4" />
                <circle cx="50" cy="15" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="80" cy="32" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="80" cy="68" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="50" cy="85" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="20" cy="68" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="20" cy="32" r="7" fill="#164B73" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="50" cy="50" r="11" fill="#F4A261" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse-subtle" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bangla font-bold text-xl sm:text-2xl text-brand-navy tracking-tight leading-none">
                  রসায়ন কারিগর
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bangla text-brand-muted tracking-wider leading-tight mt-0.5">
                বোঝো। প্রয়োগ করো। পারদর্শী হও।
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-bangla transition-all duration-200 ${
                    isActive
                      ? 'border-2 border-[#0957C3] text-[#0957C3] font-bold shadow-sm bg-white/70'
                      : 'text-brand-navy/85 hover:text-brand-navy hover:bg-brand-navy/5 font-medium'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/enroll"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-sm font-semibold shadow-sm hover:bg-brand-orange-hover hover:shadow-glow-orange active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Join Next Batch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/enroll"
              className="px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-semibold shadow-sm"
            >
              ভর্তি হোন
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-navy hover:bg-brand-navy/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200/80 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-slate-50 border border-[#0957C3] text-[#0957C3] font-bold shadow-sm'
                        : 'text-brand-navy hover:bg-slate-50 font-medium'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 text-brand-ocean" />
                  <div>
                    <div className="text-sm font-bangla">{link.name}</div>
                    <div className="text-[11px] text-brand-muted">{link.enName}</div>
                  </div>
                </NavLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200/60">
            <Link
              to="/enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full btn-luxury-primary text-white text-sm font-semibold shadow-md"
            >
              <span>Join Next Batch / ব্যাচে ভর্তি হোন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
