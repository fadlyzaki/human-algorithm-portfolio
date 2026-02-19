import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Activity } from 'lucide-react';

// Lazy Import Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SystemManifest = React.lazy(() => import('./pages/SystemManifest'));
const ProtectedCaseStudy = React.lazy(() => import('./pages/ProtectedCaseStudy'));
const SideProjectDetail = React.lazy(() => import('./pages/SideProjectDetail'));
const SideProjectsIndex = React.lazy(() => import('./pages/SideProjectsIndex'));
const CompanyDetail = React.lazy(() => import('./pages/CompanyDetail'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const DesignProcess = React.lazy(() => import('./pages/DesignProcess'));

import { LanguageProvider } from './context/LanguageContext';
import { HandCursorProvider, useHandCursor } from './context/HandCursorContext';
import ScrollToTop from './components/ScrollToTop';

import AnalyticsTracker from './components/AnalyticsTracker';

// HandCursorOverlay eagerly loaded for zero-latency gesture tracking
import HandCursorOverlay from './components/HandCursorOverlay';
// Welcome modal lazy-loaded (one-time use)
const HandTrackerWelcome = React.lazy(() => import('./components/HandTrackerWelcome'));

// TreasureCongrats is for Easter eggs — always available
import TreasureCongrats from './components/TreasureCongrats';

const GestureOverlays = () => {
  const { isGestureMode, showWelcomeModal } = useHandCursor();
  // HandTrackerWelcome needs to render for the welcome modal (before gesture activates)
  // HandCursorOverlay only renders when gesture mode is fully active
  if (!isGestureMode && !showWelcomeModal) return null;
  return (
    <React.Suspense fallback={null}>
      {isGestureMode && <HandCursorOverlay />}
      <HandTrackerWelcome />
    </React.Suspense>
  );
};

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-400">
    <Activity className="w-8 h-8 animate-pulse text-emerald-500 mb-4" />
    <span className="font-mono text-xs tracking-widest uppercase">Initializing System...</span>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <HandCursorProvider>
        <GestureOverlays />
        <TreasureCongrats />
        <Router>
          <AnalyticsTracker />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv" element={<SystemManifest />} />
              <Route path="/process" element={<DesignProcess />} />

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
    </LanguageProvider>
  );
}

export default App;