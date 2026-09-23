import { MeetTeacher } from '../components/MeetTeacher';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

export const TeacherPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy/5 text-brand-ocean text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
          <span>MEET THE INSTRUCTOR</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight">
          Meet the <span className="font-bangla font-bold">কারিগর</span>.
        </h1>
        <p className="text-base sm:text-lg text-brand-muted font-bangla max-w-2xl mx-auto">
          A teacher, a learner, and a firm believer that better explanations can change everything.
        </p>
      </div>

      {/* Teacher Profile & Timeline */}
      <MeetTeacher />

      {/* Personal Mentorship Assurance Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-brand-navy/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase">
              <Award className="w-4 h-4" />
              <span>DIRECT MENTORSHIP</span>
            </div>
            <h3 className="text-2xl font-serif text-brand-navy">
              সরাসরি রেজা স্যারের তত্ত্বাবধানে শেখার সুযোগ
            </h3>
            <p className="text-sm font-bangla text-brand-muted max-w-xl leading-relaxed">
              প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে তদারকি এবং যেকোনো কঠিন টপিক ওয়ান-টু-ওয়ান ডাউট সলভের মাধ্যমে বুঝিয়ে দেওয়া হয়।
            </p>
          </div>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange-hover shadow-md transition-all flex-shrink-0"
          >
            <span>আসন্ন ব্যাচে ভর্তি হোন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
