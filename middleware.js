/**
 * Vercel Edge Middleware
 * Detects social media crawler bots and rewrites to /api/og-html
 * so they receive proper OG meta tags instead of the empty SPA shell.
 */

const BOT_USER_AGENTS = [
    'facebookexternalhit',
    'Facebot',
    'Twitterbot',
    'LinkedInBot',
    'WhatsApp',
    'Slackbot',
    'TelegramBot',
    'Discordbot',
    'redditbot',
    'Embedly',
    'Quora Link Preview',
    'Showyoubot',
    'outbrain',
    'pinterest',
    'vkShare',
    'W3C_Validator',
    'Iframely',
    'Applebot',        // iMessage link previews
    'MetaInspector',
];

export const config = {
    matcher: [
        /*
         * Match all paths EXCEPT:
         * - /api/* (already serverless)
         * - /_next/* (Next.js internals — not used but safe)
         * - /static/* and asset files
         */
        '/((?!api|_next|static|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot|json|xml|txt|mp4|webm|mp3)).*)',
    ],
};

export default function middleware(request) {
    const userAgent = request.headers.get('user-agent') || '';

    // Check if the request is from a social crawler
    const isBot = BOT_USER_AGENTS.some(bot =>
        userAgent.toLowerCase().includes(bot.toLowerCase())
    );

    if (isBot) {
        const url = new URL(request.url);
        const page = url.pathname;

        // Rewrite bot requests to the OG HTML API
        const ogUrl = new URL('/api/og-html', request.url);
        ogUrl.searchParams.set('page', page);

        return Response.redirect(ogUrl.toString(), 302);
    }

    // Normal users pass through to the SPA
    return undefined;
}
