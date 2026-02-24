import { resolveOGMeta, SITE_URL } from './_ogRoutes.js';

export const config = { runtime: 'edge' };

export default async function handler(req) {
    const url = new URL(req.url);
    const page = url.searchParams.get('page') || '/';

    const meta = resolveOGMeta(page);

    const fullTitle = meta.title.includes('Fadlyzaki')
        ? meta.title
        : `${meta.title} | Fadlyzaki Portfolio`;

    const ogImageUrl = `${SITE_URL}/api/og?page=${encodeURIComponent(page)}`;
    const canonicalUrl = `${SITE_URL}${page}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${ogImageUrl}" />

    <!-- Redirect real users to the SPA -->
    <meta http-equiv="refresh" content="0;url=${canonicalUrl}" />
</head>
<body>
    <h1>${escapeHtml(meta.title)}</h1>
    <p>${escapeHtml(meta.description)}</p>
    <p><a href="${canonicalUrl}">Visit Fadlyzaki Portfolio</a></p>
</body>
</html>`;

    return new Response(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
