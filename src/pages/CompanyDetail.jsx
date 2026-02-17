import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScanEye, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
import { useHandCursor } from '../context/HandCursorContext';
import useProjectData from '../hooks/useProjectData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

// Sub-components
import CompanyHero from '../components/company/CompanyHero';
import CompanyStats from '../components/company/CompanyStats';
import CompanySidebar from '../components/company/CompanySidebar';
import CompanyProjects from '../components/company/CompanyProjects';
import CompanyCulture from '../components/company/CompanyCulture';

// Dynamic Imports for AI Interactions
const WorkforceAI = React.lazy(() => import('../components/interactions/WorkforceAI'));
const CommerceAI = React.lazy(() => import('../components/interactions/CommerceAI'));
const EfficiencyAI = React.lazy(() => import('../components/interactions/EfficiencyAI'));

const CompanyDetail = () => {
    const { isDark, setIsDark } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();
    const { isGestureMode, toggleGestureMode } = useHandCursor();
    const { id } = useParams();
    const navigate = useNavigate();

    const { project: cluster, loading } = useProjectData(id);

    if (loading) return <div className="min-h-screen bg-black" />; // Minimal loader
    if (!cluster) return null; // Or 404

    const brandColor = cluster.brandColor || 'var(--accent-blue)';
    const isId = language === 'id';

    // Map ID to Component
    const InteractionComponent = {
        'workforce': WorkforceAI,
        'commerce': CommerceAI,
        'efficiency': EfficiencyAI
    }[cluster.id] || WorkforceAI; // Fallback

    const baseThemeStyles = useThemeStyles();
    const themeStyles = {
        ...baseThemeStyles,
        '--brand': brandColor,
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--brand)] selection:text-white">
            <SEO
                title={`${cluster.company} — ${cluster.title}`}
                description={isId ? (cluster.hook_id || cluster.hook) : cluster.hook}
                image={cluster.logo}
                type="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Project",
                    "name": `${cluster.company}`,
                    "headline": cluster.title,
                    "description": cluster.hook,
                    "image": cluster.logo,
                    "url": window.location.href,
                    "creator": {
                        "@type": "Person",
                        "name": "Fadly Uzzaki"
                    }
                }}
            />

            {/* BACKGROUND NOISE TEXTURE */}
            <div className={`fixed inset-0 z-0 pointer-events-none opacity-[0.05] ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            ></div>

            {/* NAVIGATION */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-void)]/80 backdrop-blur-md border-b border-transparent hover:border-[var(--border-color)] transition-all">
                <BackButton to="/" label={t('company.index')} />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest hidden md:block">
                    {cluster.company} {t('company.case_study')}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleGestureMode}
                        className={`transition-colors p-1 ${isGestureMode ? 'text-[var(--brand)] animate-pulse' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                        title="Toggle Hand Tracking"
                    >
                        <ScanEye size={16} />
                    </button>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors p-1"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-widest transition-colors"
                    >
                        <Globe size={14} /> {language}
                    </button>
                </div>
            </nav>

            <main className="relative z-10 w-full">

                {/* 1. IMMERSIVE HERO SECTION */}
                <CompanyHero
                    cluster={cluster}
                    t={t}
                    isId={isId}
                    InteractionComponent={InteractionComponent}
                    brandColor={brandColor}
                />

                {/* Stats Bar */}
                <div className="relative z-20 bg-[var(--bg-void)]">
                    <CompanyStats cluster={cluster} t={t} />
                </div>


                {/* 2. SPLIT SCROLL LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 max-w-7xl mx-auto px-6 py-24">

                    {/* Sticky Sidebar: Context */}
                    <CompanySidebar
                        cluster={cluster}
                        t={t}
                        isId={isId}
                        id={id}
                    />

                    {/* Main Content: Projects List */}
                    <CompanyProjects
                        cluster={cluster}
                        t={t}
                        isId={isId}
                    />

                </div>

                {/* 3. CULTURE GALLERY (Dynamic) */}
                <CompanyCulture
                    cluster={cluster}
                    isId={isId}
                />

            </main>
            <Footer />
        </div>
    );
};

export default CompanyDetail;
