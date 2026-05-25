import { ImageResponse } from '@vercel/og';
import { resolveOGMeta, SITE_URL } from './_ogRoutes.js';

export const config = { runtime: 'edge' };

const proofPoints = [
    'Resume / CV',
    'Unlocked case studies',
    'B2B SaaS',
    'AI learning systems',
];

const evidenceCards = [
    { label: 'STOQO', value: 'Logistics + field sales', color: '#FA6130' },
    { label: 'GudangAda', value: 'B2B commerce + design system', color: '#2563EB' },
    { label: 'Lumina', value: 'Workforce tech + recruiter ATS', color: '#7C3AED' },
    { label: 'AI Labs', value: 'ADK, MCP, EdTech prototypes', color: '#10B981' },
];

export default async function handler(req) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') || '/';
    const meta = resolveOGMeta(page);
    const routeLabel = meta.path === '/' ? 'HOME' : meta.path.toUpperCase();

    return new ImageResponse(
        (
            {
                type: 'div',
                props: {
                    style: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        padding: '54px 64px',
                        backgroundColor: '#f7f5ef',
                        color: '#111827',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                        position: 'relative',
                        overflow: 'hidden',
                    },
                    children: [
                        {
                            type: 'div',
                            props: {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage:
                                        'linear-gradient(rgba(17,24,39,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.055) 1px, transparent 1px)',
                                    backgroundSize: '42px 42px',
                                },
                            },
                        },
                        {
                            type: 'div',
                            props: {
                                style: {
                                    position: 'absolute',
                                    right: '-120px',
                                    top: '-170px',
                                    width: '520px',
                                    height: '520px',
                                    borderRadius: '999px',
                                    backgroundColor: meta.color || '#10b981',
                                    opacity: 0.18,
                                },
                            },
                        },
                        {
                            type: 'div',
                            props: {
                                style: {
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    gap: '42px',
                                },
                                children: [
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                flex: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                border: '2px solid #111827',
                                                backgroundColor: 'rgba(255,255,255,0.78)',
                                                padding: '38px',
                                                borderRadius: '18px',
                                                boxShadow: '12px 12px 0 rgba(17,24,39,0.12)',
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            gap: '20px',
                                                        },
                                                        children: [
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '12px',
                                                                        fontSize: '18px',
                                                                        fontWeight: 800,
                                                                        letterSpacing: '0.12em',
                                                                    },
                                                                    children: [
                                                                        {
                                                                            type: 'div',
                                                                            props: {
                                                                                style: {
                                                                                    width: '16px',
                                                                                    height: '16px',
                                                                                    borderRadius: '999px',
                                                                                    backgroundColor: meta.color || '#10b981',
                                                                                },
                                                                            },
                                                                        },
                                                                        'FADLY UZZAKI',
                                                                    ],
                                                                },
                                                            },
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        padding: '8px 12px',
                                                                        border: '1px solid rgba(17,24,39,0.3)',
                                                                        borderRadius: '999px',
                                                                        fontSize: '13px',
                                                                        fontWeight: 700,
                                                                        letterSpacing: '0.1em',
                                                                        color: '#374151',
                                                                    },
                                                                    children: routeLabel,
                                                                },
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '18px',
                                                        },
                                                        children: [
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        fontSize: '58px',
                                                                        fontWeight: 900,
                                                                        letterSpacing: '-0.035em',
                                                                        lineHeight: 1.02,
                                                                        maxWidth: '720px',
                                                                    },
                                                                    children: meta.title,
                                                                },
                                                            },
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        width: '96px',
                                                                        height: '7px',
                                                                        borderRadius: '999px',
                                                                        backgroundColor: meta.color || '#10b981',
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        fontSize: '23px',
                                                                        lineHeight: 1.42,
                                                                        color: '#374151',
                                                                        maxWidth: '760px',
                                                                    },
                                                                    children: meta.description,
                                                                },
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: '10px',
                                                        },
                                                        children: proofPoints.map((point) => ({
                                                            type: 'div',
                                                            props: {
                                                                style: {
                                                                    padding: '9px 12px',
                                                                    borderRadius: '8px',
                                                                    border: '1px solid rgba(17,24,39,0.18)',
                                                                    backgroundColor: '#ffffff',
                                                                    fontSize: '15px',
                                                                    fontWeight: 800,
                                                                    color: '#111827',
                                                                },
                                                                children: point,
                                                            },
                                                        })),
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        type: 'div',
                                        props: {
                                            style: {
                                                width: '320px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                gap: '14px',
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            borderRadius: '18px',
                                                            backgroundColor: '#111827',
                                                            color: '#f9fafb',
                                                            padding: '24px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '14px',
                                                        },
                                                        children: [
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        letterSpacing: '0.16em',
                                                                        fontWeight: 800,
                                                                        color: '#9ca3af',
                                                                    },
                                                                    children: 'CURRENT PORTFOLIO',
                                                                },
                                                            },
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        fontSize: '34px',
                                                                        lineHeight: 1.05,
                                                                        fontWeight: 900,
                                                                    },
                                                                    children: 'Proof, resume, and live systems in one place.',
                                                                },
                                                            },
                                                        ],
                                                    },
                                                },
                                                ...evidenceCards.map((card) => ({
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            borderRadius: '14px',
                                                            backgroundColor: '#ffffff',
                                                            border: '1px solid rgba(17,24,39,0.15)',
                                                            padding: '16px',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '6px',
                                                        },
                                                        children: [
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '8px',
                                                                        fontSize: '16px',
                                                                        fontWeight: 900,
                                                                    },
                                                                    children: [
                                                                        {
                                                                            type: 'div',
                                                                            props: {
                                                                                style: {
                                                                                    width: '10px',
                                                                                    height: '10px',
                                                                                    borderRadius: '999px',
                                                                                    backgroundColor: card.color,
                                                                                },
                                                                            },
                                                                        },
                                                                        card.label,
                                                                    ],
                                                                },
                                                            },
                                                            {
                                                                type: 'div',
                                                                props: {
                                                                    style: {
                                                                        fontSize: '14px',
                                                                        lineHeight: 1.3,
                                                                        color: '#4b5563',
                                                                    },
                                                                    children: card.value,
                                                                },
                                                            },
                                                        ],
                                                    },
                                                })),
                                                {
                                                    type: 'div',
                                                    props: {
                                                        style: {
                                                            fontSize: '15px',
                                                            fontWeight: 800,
                                                            color: '#374151',
                                                            textAlign: 'right',
                                                        },
                                                        children: SITE_URL.replace('https://', ''),
                                                    },
                                                },
                                            ],
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
