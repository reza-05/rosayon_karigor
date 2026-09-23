import { MeetTeacher } from '../components/MeetTeacher';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';

export const TeacherPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Teacher Profile & Timeline */}
      <MeetTeacher />

      {/* Personal Mentorship Assurance Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-navy/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />
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
            className="btn-luxury-primary inline-flex items-center gap-2 text-sm font-semibold tracking-wide flex-shrink-0"
          >
            <span>আসন্ন ব্যাচে ভর্তি হোন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
