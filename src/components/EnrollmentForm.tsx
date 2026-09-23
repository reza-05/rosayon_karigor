import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, AlertCircle, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { EnrollmentFormData } from '../types';

export const EnrollmentForm = () => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: '',
    role: 'student',
    academicLevel: 'HSC 2025',
    phone: '',
    learningFormat: 'online_live',
    challengeNote: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'আপনার পূর্ণ নাম লিখুন (Please enter your name)';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'ফোন নম্বর প্রয়োজন (Phone number is required)';
    } else if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(cleanPhone)) {
      newErrors.phone = 'সঠিক ১১ ডিজিটের ফোন নম্বর দিন (যেমন: 017XXXXXXXX)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F4A261', '#09284C', '#164B73', '#E76F51'],
      });
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      role: 'student',
      academicLevel: 'HSC 2025',
      phone: '',
      learningFormat: 'online_live',
      challengeNote: '',
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="enroll" className="py-24 bg-brand-navy text-white relative overflow-hidden bg-chem-dark-grid">
      {/* Ambient background lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-ocean/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>PREMIUM MENTORSHIP BATCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
              Ready to make chemistry easier?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-bangla leading-relaxed">
              Join the next batch and experience chemistry the{' '}
              <span className="text-brand-orange font-semibold">কারিগর</span> way.
              সীমিত আসনের প্রতিটি ব্যাচে দেওয়া হয় সর্বোচ্চ ব্যক্তিগত যত্ন ও সার্বক্ষণিক ডাউট-সলভিং সাপোর্ট।
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-sm font-bangla text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>সাপ্তাহিক লাইভ ক্লাস ও ২৪/৭ রেকর্ডিং অ্যাক্সেস</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>অধ্যায়ভিত্তিক রঙিন কনসেপ্ট নোট ও মেকানিজম শিট</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>বোর্ড ও এডমিশন স্ট্যান্ডার্ড মডেল টেস্ট ও পার্সোনাল ফিডব্যাক</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Award className="w-8 h-8 text-brand-orange flex-shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">১০০% মানসম্মত শিক্ষা নিশ্চয়তা</div>
                <div className="text-slate-300 font-bangla">প্রতিটি ক্লাসে বাস্তব লজিক ও প্রবলেম সলভিং স্কিল নিশ্চিত করা হয়।</div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-brand-navy rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/40 relative">
              {isSuccess ? (
                /* Success View */
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-brand-navy">
                    আসন সংরক্ষণ অনুরোধ সম্পন্ন হয়েছে!
                  </h3>

                  <p className="text-sm font-bangla text-brand-muted max-w-md mx-auto">
                    ধন্যবাদ <strong className="text-brand-navy">{formData.fullName}</strong>। আমাদের এডমিশন টিম আগামী ২৪
                    ঘণ্টার মধ্যে আপনার ফোন নম্বরে ({formData.phone}) যোগাযোগ করে ব্যাচের সময়সূচি ও পরবর্তী ধাপ নিশ্চিত করবে।
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                        `হ্যালো স্যার, আমি রসায়ন কারিগরের ${formData.academicLevel} ব্যাচে ভর্তি হতে আগ্রহী। আমার নাম ${formData.fullName}।`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1EBE5D] transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>হোয়াটসঅ্যাপে সরাসরি কথা বলুন</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-brand-navy/5 text-brand-navy text-sm font-semibold hover:bg-brand-navy/10 transition-colors"
                    >
                      আরেকটি ফর্ম জমা দিন
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold text-brand-navy">
                        Your Name / আপনার নাম <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Ayaan Rahman"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                          errors.fullName
                            ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-200'
                            : 'border-brand-navy/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20'
                        }`}
                      />
                      {errors.fullName && (
                        <div className="flex items-center gap-1 text-[11px] text-red-600 font-bangla">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Segmented Toggle: Student vs Guardian */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-navy">
                        I am a / আমি <span className="text-brand-orange">*</span>
                      </label>
                      <div className="flex items-center bg-[#FAF8F5] p-1 rounded-xl border border-brand-navy/10">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, role: 'student' })}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            formData.role === 'student'
                              ? 'bg-brand-navy text-white shadow-sm'
                              : 'text-brand-muted hover:text-brand-navy'
                          }`}
                        >
                          Student (শিক্ষার্থী)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, role: 'guardian' })}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            formData.role === 'guardian'
                              ? 'bg-brand-navy text-white shadow-sm'
                              : 'text-brand-muted hover:text-brand-navy'
                          }`}
                        >
                          Guardian (অভিভাবক)
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Class Selection */}
                    <div className="space-y-1.5">
                      <label htmlFor="academicLevel" className="text-xs font-semibold text-brand-navy">
                        Select Class / শ্রেণি <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        id="academicLevel"
                        value={formData.academicLevel}
                        onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/15 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none bg-white"
                      >
                        <option value="HSC 2025">HSC 2025 (Revision & Test Paper)</option>
                        <option value="HSC 2026">HSC 2026 (Foundation & Full Syllabus)</option>
                        <option value="SSC 2025">SSC 2025 (Board Booster Batch)</option>
                        <option value="SSC 2026">SSC 2026 (Class 9-10 Basic to Pro)</option>
                        <option value="Admission (Engineering)">Engineering Admission (BUET/CKRUET)</option>
                        <option value="Admission (Medical)">Medical Admission Special</option>
                      </select>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-brand-navy">
                        Phone Number (WhatsApp) <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="017XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/50 focus:ring-2 focus:ring-red-200'
                            : 'border-brand-navy/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20'
                        }`}
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 text-[11px] text-red-600 font-bangla">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preferred Learning Format */}
                  <div className="space-y-1.5">
                    <label htmlFor="learningFormat" className="text-xs font-semibold text-brand-navy">
                      Preferred Learning Format / পড়ার পছন্দসই মাধ্যম
                    </label>
                    <select
                      id="learningFormat"
                      value={formData.learningFormat}
                      onChange={(e) => setFormData({ ...formData, learningFormat: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/15 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none bg-white"
                    >
                      <option value="online_live">Online Live Batch (Zoom + Portal)</option>
                      <option value="offline_care">Offline Care Batch (Dhaka Center)</option>
                      <option value="recorded_mastery">Recorded Masterclass + Weekly Q&A</option>
                    </select>
                  </div>

                  {/* Challenge Note */}
                  <div className="space-y-1.5">
                    <label htmlFor="challengeNote" className="text-xs font-semibold text-brand-navy">
                      What do you need help with? / আপনার সমস্যা বা প্রত্যাশা
                    </label>
                    <textarea
                      id="challengeNote"
                      rows={2}
                      placeholder="e.g. জৈব রসায়নের রূপান্তর মনে থাকে না, অথবা গাণিতিক সমস্যা দ্রুত সমাধান করতে চাই..."
                      value={formData.challengeNote}
                      onChange={(e) => setFormData({ ...formData, challengeNote: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-brand-navy/15 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none resize-none font-bangla"
                    />
                  </div>

                  {/* Submit Button with Luxury Styling */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full btn-luxury-primary text-white text-base font-semibold shadow-lg active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Reserve My Seat / আসন নিশ্চিত করুন</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Trust note */}
                  <div className="flex items-center justify-center gap-2 text-xs text-brand-muted pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your information is safe and strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
