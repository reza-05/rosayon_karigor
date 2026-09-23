import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { KarigorMethod } from './components/KarigorMethod';
import { StatsBar } from './components/StatsBar';
import { ClassExperience } from './components/ClassExperience';
import { MeetTeacher } from './components/MeetTeacher';
import { ResourceLibrary } from './components/ResourceLibrary';
import { Testimonials } from './components/Testimonials';
import { EnrollmentForm } from './components/EnrollmentForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#18232D] flex flex-col font-sans selection:bg-[#F4A261]/30 selection:text-[#09284C]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section with Interactive 3D Canvas */}
        <Hero />

        {/* The Problem Section */}
        <ProblemSection />

        {/* The Karigor Method 5-Step Visual Framework */}
        <KarigorMethod />

        {/* Live Metrics & Social Proof Ribbon */}
        <StatsBar />

        {/* Video Classroom Experience Demo */}
        <ClassExperience />

        {/* About Educator Profile & Academic Timeline */}
        <MeetTeacher />

        {/* Free Chemistry Resource Library with Filter Tabs & Modal */}
        <ResourceLibrary />

        {/* Student Success Stories & Testimonials */}
        <Testimonials />

        {/* Batch Reservation & Lead Enrollment Form */}
        <EnrollmentForm />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;
