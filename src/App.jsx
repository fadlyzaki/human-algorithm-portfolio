import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SystemManifest from './pages/SystemManifest';
import ResearchCaseStudy from './pages/ResearchCaseStudy';
import VisualCaseStudy from './pages/VisualCaseStudy';
import ProtectedCaseStudy from './pages/ProtectedCaseStudy';
import SideProjectDetail from './pages/SideProjectDetail';
import SideProjectsIndex from './pages/SideProjectsIndex';
import CompanyDetail from './pages/CompanyDetail';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import { HandCursorProvider } from './context/HandCursorContext';
import HandCursorOverlay from './components/HandCursorOverlay';

function App() {
  return (
    <HandCursorProvider>
      <HandCursorOverlay />
      <Router>
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<SystemManifest />} />

          {/* Index Pages */}
          <Route path="/side-projects" element={<SideProjectsIndex />} />
          <Route path="/work/:id" element={<CompanyDetail />} />

          {/* Case Studies (Dynamic ID for future scaling, static for MVP) */}
          <Route path="/case-study/research" element={<ResearchCaseStudy />} />
          <Route path="/case-study/visual" element={<VisualCaseStudy />} />
          <Route path="/case-study/protected" element={<ProtectedCaseStudy />} />

          {/* Detail Pages */}
          <Route path="/side-project/:id" element={<SideProjectDetail />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HandCursorProvider>
  );
}

export default App;