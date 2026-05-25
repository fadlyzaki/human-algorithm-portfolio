import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  image = null,
  type = "website",
  schema = null,
  noindex = false,
  children,
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://fadlyzaki-design.vercel.app";
  const canonicalUrl = `${siteUrl}${pathname}`;
  const fullTitle = title
    ? `${title} | Fadly Uzzaki  -  Product Designer`
    : "Fadly Uzzaki  -  Product Designer · Systems Thinker";
  const defaultDesc =
    "Product Designer & Systems Thinker specializing in B2B SaaS, EdTech, and human-centered design. Building resilient tools for people who need them to just work.";
  const metaDesc = description || defaultDesc;
  const defaultImage = `${siteUrl}/api/og?page=${encodeURIComponent(pathname)}`;
  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultImage;

  // Structured Data (JSON-LD)
  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fadly Uzzaki  -  Product Designer",
    url: siteUrl,
    description: defaultDesc,
    author: {
      "@type": "Person",
      name: "Fadly Uzzaki",
      jobTitle: "Product Designer",
      url: siteUrl,
    },
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} preview`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="id_ID" />
      <meta property="og:site_name" content="Fadly Uzzaki  -  Product Designer" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:image:alt" content={`${fullTitle} preview`} />

      {/* Hreflang Alternates for bilingual content */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="id" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {children}
    </Helmet>
  );
};

export default SEO;
