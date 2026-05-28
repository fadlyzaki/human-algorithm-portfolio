import { ImageResponse } from '@vercel/og';
import { resolveOGMeta, SITE_URL } from './_ogRoutes.js';

export const config = { runtime: 'edge' };

const WIDTH = 1200;
const HEIGHT = 630;
const DEFAULT_ACCENT = '#10b981';
const INK = '#111827';
const PAPER = '#f7f8f3';
const MUTED = '#4b5563';
const SECONDARY_COLORS = ['#2563eb', '#f97316', '#8b5cf6', '#ec4899', '#0f766e', '#f59e0b'];

const KIND_LABELS = {
    'portfolio': 'PORTFOLIO',
    'profile': 'PROFILE',
    'contact': 'CONTACT',
    'resume': 'RESUME',
    'system': 'DESIGN SYSTEM',
    'side-project-index': 'SIDE PROJECTS',
    'side-project': 'SIDE PROJECT',
    'work-cluster': 'WORK CLUSTER',
    'case-study': 'CASE STUDY',
    'writing': 'WRITING',
};

const node = (type, props = {}, children) => ({
    type,
    props: {
        ...props,
        ...(children === undefined ? {} : { children }),
    },
});

const sanitizeText = (value, fallback = '') => {
    if (!value) return fallback;
    return String(value)
        .replace(/\u2192/g, '->')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201c\u201d]/g, '"')
        .replace(/\s+/g, ' ')
        .trim() || fallback;
};

const truncate = (value, max) => {
    const text = sanitizeText(value);
    return text.length > max ? `${text.slice(0, max - 1).trim()}...` : text;
};

const hashString = (value = '') => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
};

const makePrng = (seed) => {
    let state = hashString(seed) || 1;
    return () => {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        return state / 4294967296;
    };
};

const normalizeHex = (value) => {
    if (typeof value !== 'string') return DEFAULT_ACCENT;
    const color = value.trim();
    if (/^#[0-9a-f]{6}$/i.test(color)) return color;
    if (/^#[0-9a-f]{3}$/i.test(color)) {
        const [, r, g, b] = color;
        return `#${r}${r}${g}${g}${b}${b}`;
    }
    return DEFAULT_ACCENT;
};

const hexToRgb = (hex) => {
    const normalized = normalizeHex(hex).replace('#', '');
    const value = parseInt(normalized, 16);
    return {
        r: (value >> 16) & 255,
        g: (value >> 8) & 255,
        b: value & 255,
    };
};

const alpha = (hex, opacity) => {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const routeToLabel = (path) => (path === '/' ? 'HOME' : path.replace(/^\//, '').replace(/\//g, ' / ').toUpperCase());

const titleSizeFor = (title) => {
    const length = sanitizeText(title).length;
    if (length > 86) return 42;
    if (length > 68) return 48;
    if (length > 52) return 54;
    return 62;
};

const fallbackChipsFor = (meta) => {
    if (meta.kind === 'case-study') return ['Public case study', 'Product design', 'Outcome evidence'];
    if (meta.kind === 'side-project') return ['Prototype', 'AI systems', 'Build notes'];
    if (meta.kind === 'work-cluster') return ['B2B SaaS', 'Complex systems', 'Product design'];
    return ['Portfolio', 'Resume', 'Case studies'];
};

const fallbackMetricsFor = (meta, routeLabel) => [
    { label: 'SURFACE', value: KIND_LABELS[meta.kind] || 'PORTFOLIO' },
    { label: 'ROUTE', value: routeLabel },
    { label: 'OWNER', value: 'Fadly Uzzaki' },
];

const buildSignature = (seed, accent, secondary) => {
    const random = makePrng(seed);
    return Array.from({ length: 12 }, (_, index) => {
        const isAccent = random() > 0.46;
        return {
            key: `${seed}-${index}`,
            height: 22 + Math.round(random() * 110),
            width: 8 + Math.round(random() * 18),
            offset: Math.round(random() * 18),
            color: isAccent ? accent : secondary,
            opacity: isAccent ? 0.95 : 0.78,
        };
    });
};

const buildGridMarks = (seed, accent, secondary) => {
    const random = makePrng(`${seed}:grid`);
    return Array.from({ length: 9 }, (_, index) => ({
        key: `${seed}-mark-${index}`,
        left: 44 + Math.round(random() * 1010),
        top: 46 + Math.round(random() * 500),
        width: 18 + Math.round(random() * 72),
        height: 3 + Math.round(random() * 9),
        color: random() > 0.52 ? alpha(accent, 0.14) : alpha(secondary, 0.12),
    }));
};

const chipNode = (chip, accent) => node('div', {
    style: {
        padding: '8px 11px',
        border: `1px solid ${alpha(accent, 0.34)}`,
        backgroundColor: alpha(accent, 0.08),
        borderRadius: '6px',
        color: INK,
        fontSize: '15px',
        fontWeight: 800,
        lineHeight: 1,
    },
}, truncate(chip, 32));

const metricNode = (metric, index, accent, secondary) => node('div', {
    style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '14px 0',
        borderTop: index === 0 ? '0' : '1px solid rgba(17,24,39,0.16)',
    },
}, [
    node('div', {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: MUTED,
            fontSize: '12px',
            fontWeight: 900,
            lineHeight: 1,
        },
    }, [
        node('div', {
            style: {
                width: '8px',
                height: '8px',
                backgroundColor: index % 2 === 0 ? accent : secondary,
                borderRadius: '2px',
            },
        }),
        truncate(metric.label, 18).toUpperCase(),
    ]),
    node('div', {
        style: {
            color: INK,
            fontSize: '22px',
            fontWeight: 900,
            lineHeight: 1.08,
        },
    }, truncate(metric.value, 34)),
]);

export default async function handler(req) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') || '/';
    const meta = resolveOGMeta(page);
    const accent = normalizeHex(meta.color);
    const signatureSeed = sanitizeText(meta.signature || meta.path || page, page);
    const hash = hashString(signatureSeed).toString(16).toUpperCase().padStart(8, '0').slice(0, 8);
    const secondary = SECONDARY_COLORS[hashString(`${signatureSeed}:secondary`) % SECONDARY_COLORS.length];
    const routeLabel = routeToLabel(meta.path || page);
    const eyebrow = sanitizeText(meta.eyebrow, KIND_LABELS[meta.kind] || 'PORTFOLIO');
    const title = sanitizeText(meta.title, 'Fadly Uzzaki Portfolio');
    const description = truncate(meta.description, 178);
    const chips = (Array.isArray(meta.chips) && meta.chips.length ? meta.chips : fallbackChipsFor(meta)).slice(0, 4);
    const metrics = (Array.isArray(meta.metrics) && meta.metrics.length ? meta.metrics : fallbackMetricsFor(meta, routeLabel)).slice(0, 3);
    const bars = buildSignature(signatureSeed, accent, secondary);
    const gridMarks = buildGridMarks(signatureSeed, accent, secondary);
    const titleSize = titleSizeFor(title);

    return new ImageResponse(
        node('div', {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                padding: '42px 48px',
                backgroundColor: PAPER,
                color: INK,
                fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                position: 'relative',
                overflow: 'hidden',
            },
        }, [
            node('div', {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(17,24,39,0.052) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.052) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                },
            }),
            node('div', {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '14px',
                    backgroundColor: accent,
                },
            }),
            node('div', {
                style: {
                    position: 'absolute',
                    right: '-54px',
                    top: '92px',
                    width: '460px',
                    height: '66px',
                    backgroundColor: alpha(accent, 0.28),
                    transform: 'rotate(-7deg)',
                },
            }),
            node('div', {
                style: {
                    position: 'absolute',
                    left: '-72px',
                    bottom: '74px',
                    width: '420px',
                    height: '44px',
                    backgroundColor: alpha(secondary, 0.2),
                    transform: 'rotate(8deg)',
                },
            }),
            ...gridMarks.map((mark) => node('div', {
                style: {
                    position: 'absolute',
                    left: `${mark.left}px`,
                    top: `${mark.top}px`,
                    width: `${mark.width}px`,
                    height: `${mark.height}px`,
                    backgroundColor: mark.color,
                },
            })),
            node('div', {
                style: {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    gap: '26px',
                },
            }, [
                node('div', {
                    style: {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '34px 36px',
                        border: `2px solid ${INK}`,
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,0.88)',
                    },
                }, [
                    node('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '18px',
                        },
                    }, [
                        node('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '18px',
                                fontWeight: 900,
                                lineHeight: 1,
                            },
                        }, [
                            node('div', {
                                style: {
                                    width: '14px',
                                    height: '14px',
                                    backgroundColor: accent,
                                    border: `2px solid ${INK}`,
                                },
                            }),
                            'FADLY UZZAKI',
                        ]),
                        node('div', {
                            style: {
                                padding: '8px 11px',
                                border: `1px solid ${alpha(INK, 0.22)}`,
                                borderRadius: '6px',
                                color: MUTED,
                                fontSize: '12px',
                                fontWeight: 900,
                                lineHeight: 1,
                            },
                        }, truncate(routeLabel, 58)),
                    ]),
                    node('div', {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '19px',
                            maxWidth: '710px',
                        },
                    }, [
                        node('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: accent,
                                fontSize: '14px',
                                fontWeight: 900,
                                lineHeight: 1,
                            },
                        }, [
                            node('div', {
                                style: {
                                    width: '42px',
                                    height: '5px',
                                    backgroundColor: accent,
                                },
                            }),
                            eyebrow,
                        ]),
                        node('div', {
                            style: {
                                fontSize: `${titleSize}px`,
                                fontWeight: 900,
                                lineHeight: 1.02,
                                maxWidth: '750px',
                            },
                        }, title),
                        node('div', {
                            style: {
                                fontSize: '23px',
                                lineHeight: 1.36,
                                color: '#303741',
                                maxWidth: '725px',
                            },
                        }, description),
                    ]),
                    node('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '18px',
                        },
                    }, [
                        node('div', {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '9px',
                                maxWidth: '620px',
                            },
                        }, chips.map((chip) => chipNode(chip, accent))),
                        node('div', {
                            style: {
                                color: MUTED,
                                fontSize: '13px',
                                fontWeight: 800,
                                lineHeight: 1,
                                whiteSpace: 'nowrap',
                            },
                        }, SITE_URL.replace('https://', '')),
                    ]),
                ]),
                node('div', {
                    style: {
                        width: '324px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px',
                    },
                }, [
                    node('div', {
                        style: {
                            minHeight: '282px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '24px',
                            border: `2px solid ${INK}`,
                            borderRadius: '8px',
                            backgroundColor: INK,
                            color: '#f9fafb',
                        },
                    }, [
                        node('div', {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '12px',
                            },
                        }, [
                            node('div', {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                },
                            }, [
                                node('div', {
                                    style: {
                                        color: alpha(accent, 0.92),
                                        fontSize: '13px',
                                        fontWeight: 900,
                                        lineHeight: 1,
                                    },
                                }, KIND_LABELS[meta.kind] || 'PORTFOLIO'),
                                node('div', {
                                    style: {
                                        color: '#d1d5db',
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        lineHeight: 1,
                                    },
                                }, `ID ${hash}`),
                            ]),
                            node('div', {
                                style: {
                                    width: '38px',
                                    height: '38px',
                                    border: `2px solid ${alpha(accent, 0.9)}`,
                                    backgroundColor: secondary,
                                },
                            }),
                        ]),
                        node('div', {
                            style: {
                                height: '150px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '8px',
                                paddingTop: '18px',
                                borderBottom: `4px solid ${alpha(accent, 0.9)}`,
                            },
                        }, bars.map((bar) => node('div', {
                            style: {
                                width: `${bar.width}px`,
                                height: `${bar.height}px`,
                                marginBottom: `${bar.offset}px`,
                                backgroundColor: bar.color,
                                opacity: bar.opacity,
                                borderRadius: '3px 3px 0 0',
                            },
                        }))),
                        node('div', {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: '#e5e7eb',
                                fontSize: '13px',
                                fontWeight: 800,
                                lineHeight: 1,
                            },
                        }, [
                            'ROUTE SIGNATURE',
                            node('div', {
                                style: {
                                    width: '72px',
                                    height: '10px',
                                    backgroundImage: `linear-gradient(90deg, ${accent} 0%, ${accent} 45%, ${secondary} 45%, ${secondary} 72%, #f9fafb 72%, #f9fafb 100%)`,
                                },
                            }),
                        ]),
                    ]),
                    node('div', {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '16px 20px',
                            border: `2px solid ${INK}`,
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255,255,255,0.9)',
                        },
                    }, metrics.map((metric, index) => metricNode(metric, index, accent, secondary))),
                ]),
            ]),
        ]),
        {
            width: WIDTH,
            height: HEIGHT,
        },
    );
}
