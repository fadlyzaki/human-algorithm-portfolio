
import React, { useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import useProjectData from '../hooks/useProjectData';
import LockScreen from '../components/auth/LockScreen';
import SEO from '../components/SEO';

// Lazy Load Heavy Content
const CaseStudyContent = React.lazy(() => import('../components/case-study/CaseStudyContent'));

const ProtectedCaseStudy = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [isLocked, setIsLocked] = useState(true);
  const [, setIsMenuOpen] = useState(false); // Added for Navbar

  // Use Centralized Data Hook
  const { project, parentCluster, loading, error } = useProjectData(id);

  // --- LOADING PROTOTYPE ---
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Activity className="animate-pulse text-gray-500" />
      </div>
    );
  }

  // --- ERROR / 404 HANDLING ---
  if (error || !project) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="z-10 text-center border border-red-900/50 bg-red-950/10 p-12 backdrop-blur-sm max-w-lg w-full">
          <ShieldAlert size={48} className="mx-auto text-red-500 mb-6 animate-pulse" />
          <h1 className="text-2xl font-bold text-red-500 mb-2 uppercase tracking-[0.2em]">{t('protected.access_denied') || "Access Denied"}</h1>
          <div className="h-px w-16 bg-red-800 mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {t('protected.file_not_exist') || `The requested case file "${id}" does not exist or has been redacted from the archives.`}
          </p>
          {/* The original Link component was removed as per instruction to replace inline navigation */}
          {/* If a navigation back to home is still desired in the error state, it should be re-added or handled by Navbar */}
        </div>
      </div>
    );
  }

  // --- RENDER ---
  return (
    <>
      {isLocked ? (
        <LockScreen
          project={project}
          parentCluster={parentCluster}
          onSuccess={() => setIsLocked(false)}
        />
      ) : (
        <Suspense fallback={
          <div className="min-h-screen bg-[var(--bg-void)] flex items-center justify-center">
            <div className="font-mono text-xs uppercase tracking-widest animate-pulse text-[var(--brand)]">
              Loading_Case_File...
            </div>
          </div>
        }>
          {/* --- NAVIGATION SYSTEM --- */}
          <Navbar
            onOpenMenu={() => setIsMenuOpen(true)}
            title="Restricted Access"
            backPath={`/work/${parentCluster?.id || ''}`}
          />

          {/* <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
          <CaseStudyContent project={project} parentCluster={parentCluster} />
        </Suspense>
      )}
    </>
  );
};

export default ProtectedCaseStudy;