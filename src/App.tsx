import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { MethodPage } from './pages/MethodPage';
import { DemoPage } from './pages/DemoPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { TeacherPage } from './pages/TeacherPage';
import { FAQPage } from './pages/FAQPage';
import { EnrollPage } from './pages/EnrollPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#F4A261]/30 selection:text-[#09284C]">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/method" element={<MethodPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<TeacherPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
