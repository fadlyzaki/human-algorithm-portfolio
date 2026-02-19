import React, { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScanEye, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useThemeStyles from '../hooks/useThemeStyles';
import { useLanguage } from '../context/LanguageContext';
// import { useHandCursor } from '../context/HandCursorContext';
import Navbar from '../components/Navbar';
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
    const { isDark } = useTheme();
    const { t, language } = useLanguage();
    // const { isGestureMode, toggleGestureMode } = useHandCursor();
    const { id } = useParams();
    // const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const baseThemeStyles = useThemeStyles();

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

    const themeStyles = {
        ...baseThemeStyles,
        '--brand': brandColor,
    };

    return (
        <div style={themeStyles} className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] font-sans transition-colors duration-500 selection:bg-[var(--brand)] selection:text-white" >
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
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }
                }
            ></div >

            {/* --- NAVIGATION SYSTEM --- */}
            < Navbar onOpenMenu={() => setIsMenuOpen(true)} title={cluster.company} backPath="/" />

            <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

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
        </div >
    );
};

export default CompanyDetail;
