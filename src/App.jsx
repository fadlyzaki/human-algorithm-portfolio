import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Activity } from 'lucide-react';

// Lazy Import Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SystemManifest = React.lazy(() => import('./pages/SystemManifest'));
const ResearchCaseStudy = React.lazy(() => import('./pages/ResearchCaseStudy'));
const VisualCaseStudy = React.lazy(() => import('./pages/VisualCaseStudy'));
const ProtectedCaseStudy = React.lazy(() => import('./pages/ProtectedCaseStudy'));
const SideProjectDetail = React.lazy(() => import('./pages/SideProjectDetail'));
const SideProjectsIndex = React.lazy(() => import('./pages/SideProjectsIndex'));
const CompanyDetail = React.lazy(() => import('./pages/CompanyDetail'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

import { HandCursorProvider } from './context/HandCursorContext';
import HandCursorOverlay from './components/HandCursorOverlay';
import ScrollToTop from './components/ScrollToTop';

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-400">
    <Activity className="w-8 h-8 animate-pulse text-emerald-500 mb-4" />
    <span className="font-mono text-xs tracking-widest uppercase">Initializing System...</span>
  </div>
);

function App() {
  return (
    <HandCursorProvider>
      <HandCursorOverlay />
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<SystemManifest />} />

            {/* Index Pages */}
            <Route path="/side-projects" element={<SideProjectsIndex />} />
            <Route path="/work/:id" element={<CompanyDetail />} />

            {/* Case Studies (Dynamic ID for future scaling) */}
            <Route path="/case-study/:id" element={<ProtectedCaseStudy />} />

            {/* Detail Pages */}
            <Route path="/side-project/:id" element={<SideProjectDetail />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </HandCursorProvider>
  );
}

export default App;