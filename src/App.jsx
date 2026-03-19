import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activity } from "lucide-react";
import { lazyWithRetry } from "./utils/lazyWithRetry";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy Import Pages with Retry Logic
const Home = lazyWithRetry(() => import("./pages/Home"));
const About = lazyWithRetry(() => import("./pages/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const SystemManifest = lazyWithRetry(() => import("./pages/SystemManifest"));
const ProtectedCaseStudy = lazyWithRetry(
  () => import("./pages/ProtectedCaseStudy"),
);
const SideProjectDetail = lazyWithRetry(() => import("./pages/SideProjectDetail"));
const SideProjectsIndex = lazyWithRetry(() => import("./pages/SideProjectsIndex"));
const CompanyDetail = lazyWithRetry(() => import("./pages/CompanyDetail"));
const BlogPost = lazyWithRetry(() => import("./pages/BlogPost"));
const UnprovokedThoughtsIndex = lazyWithRetry(() => import("./pages/UnprovokedThoughtsIndex"));
const UnprovokedThoughtDetail = lazyWithRetry(() => import("./pages/UnprovokedThoughtDetail"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const DesignSystem = lazyWithRetry(() => import("./pages/DesignSystem"));
const Sketches = lazyWithRetry(() => import("./pages/Sketches"));

import { LanguageProvider } from "./context/LanguageContext";
import { RecruiterModeProvider } from "./context/RecruiterModeContext";
import ScrollToTop from "./components/ScrollToTop";

import AnalyticsTracker from "./components/AnalyticsTracker";
import VirtualAssistant from "./components/VirtualAssistant";
import CustomCursor from "./components/CustomCursor";

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-400">
    <Activity className="w-8 h-8 animate-pulse text-emerald-500 mb-4" />
    <span className="font-mono text-xs tracking-widest uppercase">
      Initializing System...
    </span>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <RecruiterModeProvider>
        <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <VirtualAssistant />
        <CustomCursor />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv" element={<SystemManifest />} />
              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/sketches" element={<Sketches />} />

              {/* Index Pages */}
              <Route path="/side-projects" element={<SideProjectsIndex />} />
              <Route path="/work/:id" element={<CompanyDetail />} />

              {/* Case Studies (Dynamic ID for future scaling) */}
              <Route path="/case-study/:id" element={<ProtectedCaseStudy />} />

              {/* Detail Pages */}
              <Route path="/side-project/:id" element={<SideProjectDetail />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Unprovoked Thoughts (MDX CMS) */}
              <Route path="/thoughts" element={<UnprovokedThoughtsIndex />} />
              <Route path="/thoughts/:slug" element={<UnprovokedThoughtDetail />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        </Router>
      </RecruiterModeProvider>
    </LanguageProvider>
  );
}

export default App;
