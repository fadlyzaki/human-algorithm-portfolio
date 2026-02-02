import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    image = '/og-id-card.png',
    type = 'website',
    articleTime,
    children
}) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://fadlyzaki-design.vercel.app';
    const canonicalUrl = `${siteUrl}${pathname}`;
    const fullTitle = title ? `${title} :: Human Algorithm` : 'Fadlyzaki :: Human Algorithm';
    const defaultDesc = "Product Designer · Systems Thinker. I don't chase chaos—I contain it. Building resilient tools for people who need them to just work.";
    const metaDesc = description || defaultDesc;
    const metaImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Structured Data (JSON-LD)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Fadly Uzzaki",
        "url": siteUrl,
        "sameAs": [
            "https://www.linkedin.com/in/fadlyzaki/",
            "https://github.com/fadlyzaki",
            "https://dribbble.com/fadlyzaki",
            "https://medium.com/@fadlyzaki"
        ],
        "jobTitle": "Product Designer",
        "description": defaultDesc
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDesc} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDesc} />
            <meta property="twitter:image" content={metaImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {children}
        </Helmet>
    );
};

export default SEO;
