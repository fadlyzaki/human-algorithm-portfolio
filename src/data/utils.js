
/**
 * Normalizes a project object from the new schema (object-based i18n)
 * to the legacy schema (flat `_id` suffixes) for backward compatibility.
 * 
 * @param {Object} project - The project object in the new schema.
 * @returns {Object} - The project object in the legacy schema.
 */
export const normalizeProject = (project) => {
    const legacy = { ...project };

    // Helper to flatten a localized field
    // Input: { en: "Hello", id: "Halo" }
    // Output: key: "Hello", key_id: "Halo"
    const flatten = (key, value) => {
        if (value && typeof value === 'object' && 'en' in value && 'id' in value) {
            legacy[key] = value.en;
            legacy[`${key}_id`] = value.id;
        }
    };

    // 1. Top-level fields
    ['title', 'subtitle', 'desc', 'tldr', 'challenge', 'learnings', 'details'].forEach(key => {
        if (project[key]) flatten(key, project[key]);
    });

    // 2. Arrays of objects (process, insights, solution, designProcess)
    ['process', 'insights', 'solution', 'designProcess'].forEach(arrayKey => {
        if (project[arrayKey] && Array.isArray(project[arrayKey])) {
            // Map the main array to English
            legacy[arrayKey] = project[arrayKey].map(item => {
                const newItem = { ...item };
                Object.keys(item).forEach(k => {
                    if (item[k] && typeof item[k] === 'object' && 'en' in item[k]) {
                        newItem[k] = item[k].en;
                    }
                });
                return newItem;
            });

            // Create the _id array
            legacy[`${arrayKey}_id`] = project[arrayKey].map(item => {
                const newItem = { ...item };
                Object.keys(item).forEach(k => {
                    if (item[k] && typeof item[k] === 'object' && 'id' in item[k]) {
                        newItem[k] = item[k].id; // Use Indonesian
                    } else if (item[k] && typeof item[k] === 'object' && 'en' in item[k]) {
                        // Fallback if ID is missing (restore EN) or specific handling? 
                        // For now, assume strict schema or fallback to EN
                        newItem[k] = item[k].en;
                    }
                });
                // Legacy schema often had specific keys for _id like 'title_id', 'desc_id' INSIDE the objects too?
                // Actually, checking previous file content:
                // process: [{ title: "..", desc: ".." }]
                // process_id: [{ title: "..", desc: ".." }]
                // So we just need to produce two arrays where the objects contain strings.
                return newItem;
            });
        }
    });

    // 3. Case Study (Nested Object)
    if (project.caseStudy) {
        const cs = project.caseStudy;
        const legacyCs = { ...cs };
        const legacyCsId = { ...cs }; // Recreate the separate caseStudy_id object

        // Summaries
        if (cs.summaries) {
            const enSummaries = {};
            const idSummaries = {};
            Object.keys(cs.summaries).forEach(k => {
                const s = cs.summaries[k];
                enSummaries[k] = { ...s, title: s.title?.en || s.title, text: s.text?.en || s.text };
                idSummaries[k] = { ...s, title: s.title?.id || s.title, text: s.text?.id || s.text };
            });
            legacyCs.summaries = enSummaries;
            legacyCsId.summaries = idSummaries;
        }

        // Snapshot
        if (cs.snapshot) {
            legacyCs.snapshot = { ...cs.snapshot, tagline: cs.snapshot.tagline?.en || cs.snapshot.tagline };
            legacyCsId.snapshot = { ...cs.snapshot, tagline: cs.snapshot.tagline?.id || cs.snapshot.tagline };
        }

        // Arrays inside Case Study (process, insights, solution, designProcess, aiHypotheses)
        ['process', 'insights', 'solution', 'designProcess', 'aiHypotheses'].forEach(arrayKey => {
            if (cs[arrayKey]) {
                legacyCs[arrayKey] = cs[arrayKey].map(item => {
                    const newItem = { ...item };
                    Object.keys(item).forEach(k => {
                        if (item[k]?.en) newItem[k] = item[k].en;
                    });
                    return newItem;
                });

                legacyCsId[arrayKey] = cs[arrayKey].map(item => {
                    const newItem = { ...item };
                    Object.keys(item).forEach(k => {
                        if (item[k]?.id) newItem[k] = item[k].id;
                    });
                    return newItem;
                });
            }
        });

        // Top level strings in Case Study
        ['challenge', 'learnings', 'context'].forEach(key => {
            if (cs[key]?.en) legacyCs[key] = cs[key].en;
            if (cs[key]?.id) legacyCsId[key] = cs[key].id;
        });

        legacy.caseStudy = legacyCs;
        legacy.caseStudy_id = legacyCsId;
    }

    // 4. Details (Special object sometimes used in Work Clusters)
    if (project.details) {
        // details: { problem: {en, id}, system: {en, id}, outcome: {en, id} }
        const enDetails = {};
        const idDetails = {};
        Object.keys(project.details).forEach(k => {
            if (project.details[k]?.en) {
                enDetails[k] = project.details[k].en;
                idDetails[k] = project.details[k].id;
            } else {
                enDetails[k] = project.details[k];
                idDetails[k] = project.details[k];
            }
        });
        legacy.details = enDetails;
        legacy.details_id = idDetails;
    }

    // 5. Snapshot (Top-level)
    if (project.snapshot) {
        const snap = project.snapshot;
        const enSnap = { ...snap };
        const idSnap = { ...snap };

        // Normalize tagline
        if (snap.tagline && typeof snap.tagline === 'object' && 'en' in snap.tagline) {
            enSnap.tagline = snap.tagline.en;
            idSnap.tagline = snap.tagline.id;
        }

        legacy.snapshot = enSnap;
        legacy.snapshot_id = idSnap;
    }

    return legacy;
};
