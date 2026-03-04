/**
 * MDX Content Utilities — Unprovoked Thoughts
 *
 * Uses Vite's import.meta.glob to dynamically import all MDX files
 * from the content/unprovoked-thoughts/ directory at build time.
 */

// Eager-load all MDX modules at build time
const thoughtModules = import.meta.glob(
    '../../content/unprovoked-thoughts/*.mdx',
    { eager: true }
);

/**
 * Parse a single module entry into a structured thought object
 */
function parseThought(path, module) {
    const slug = path
        .replace('../../content/unprovoked-thoughts/', '')
        .replace('.mdx', '');

    // MDX files compiled with remark-frontmatter expose frontmatter
    // via the module. We also support a `frontmatter` export.
    const frontmatter = module.frontmatter || {};

    return {
        slug,
        Component: module.default,
        frontmatter: {
            id: frontmatter.id || slug,
            title: frontmatter.title || 'Untitled Thought',
            subtitle: frontmatter.subtitle || '',
            date: frontmatter.date || '',
            emoji: frontmatter.emoji || '💭',
            tags: frontmatter.tags || [],
            readTime: frontmatter.readTime || '',
        },
    };
}

/**
 * Get all unprovoked thoughts, sorted by date (newest first)
 */
export function getAllUnprovokedThoughts() {
    const thoughts = Object.entries(thoughtModules).map(([path, module]) =>
        parseThought(path, module)
    );

    // Sort by date descending
    return thoughts.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date || 0);
        const dateB = new Date(b.frontmatter.date || 0);
        return dateB - dateA;
    });
}

/**
 * Get a single thought by slug
 * @returns {Object|null} The thought object, or null if not found
 */
export function getThoughtBySlug(slug) {
    const thoughts = getAllUnprovokedThoughts();
    return thoughts.find((t) => t.slug === slug) || null;
}
