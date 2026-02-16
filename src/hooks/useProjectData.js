import { useMemo } from 'react';
import { WORK_CLUSTERS, SIDE_PROJECTS, NOTES } from '../data/portfolioData';

/**
 * Hook to retrieve project data from any of the data sources.
 * @param {string} id - Project ID
 * @returns {object} - { project, parentCluster, loading, error, type }
 */
export const useProjectData = (id) => {
    const data = useMemo(() => {
        if (!id) return { loading: true };

        // 1. Try finding in WORK_CLUSTERS (Case Studies)
        for (const cluster of WORK_CLUSTERS) {
            const found = cluster.projects.find(p => p.id === id);
            if (found) {
                return {
                    project: found,
                    parentCluster: cluster,
                    type: 'case-study',
                    loading: false
                };
            }
        }

        // 2. Try finding in SIDE_PROJECTS
        const sideProject = SIDE_PROJECTS.find(p => p.id === id);
        if (sideProject) {
            return {
                project: sideProject,
                type: 'side-project',
                loading: false
            };
        }

        // 3. Try finding in NOTES (Prototypes)
        const note = NOTES.find(p => p.id === id);
        if (note) {
            return {
                project: note,
                type: 'prototype',
                loading: false
            };
        }

        // 4. Try finding in WORK_CLUSTERS (Main Cluster ID - for Company Detail)
        const cluster = WORK_CLUSTERS.find(c => c.id === id);
        if (cluster) {
            return {
                project: cluster, // In this case 'project' is actually the cluster/company
                type: 'company',
                loading: false
            };
        }

        return { error: 'Project not found', loading: false };
    }, [id]);

    return data;
};

export default useProjectData;
