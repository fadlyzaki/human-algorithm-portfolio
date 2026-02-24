import { ImageResponse } from '@vercel/og';
import { resolveOGMeta, SITE_URL } from './_ogRoutes.js';

export const config = { runtime: 'edge' };

export default async function handler(req) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') || '/';

    const meta = resolveOGMeta(page);

    return new ImageResponse(
        (
            {
                type: 'div',
                props: {
                    style: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '60px 80px',
                        backgroundColor: '#0a0a0a',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                    },
                    children: [
                        // Top: Accent bar
                        {
                            type: 'div',
                            props: {
                                style: {
                                    width: '80px',
                                    height: '6px',
                                    backgroundColor: meta.color || '#10b981',
                                    borderRadius: '3px',
                                },
                            },
                        },
                        // Middle: Title + Description
                        {
                            type: 'div',
                            props: {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    flex: 1,
                                    justifyContent: 'center',
                                },
                                children: [
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                fontSize: '56px',
                                                fontWeight: 700,
                                                color: '#f4f4f5',
                                                letterSpacing: '-0.025em',
                                                lineHeight: 1.1,
                                                maxWidth: '900px',
                                            },
                                            children: meta.title,
                                        },
                                    },
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                fontSize: '24px',
                                                color: '#a1a1aa',
                                                lineHeight: 1.5,
                                                maxWidth: '800px',
                                            },
                                            children: meta.description,
                                        },
                                    },
                                ],
                            },
                        },
                        // Bottom: Branding
                        {
                            type: 'div',
                            props: {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                },
                                children: [
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            fontSize: '28px',
                                                        },
                                                        children: '🧢',
                                                    },
                                                },
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            fontSize: '20px',
                                                            fontWeight: 600,
                                                            color: '#71717a',
                                                        },
                                                        children: 'fadlyzaki-design.vercel.app',
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                fontSize: '16px',
                                                color: '#52525b',
                                                fontWeight: 500,
                                            },
                                            children: 'Product Designer · Systems Thinker',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            }
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
