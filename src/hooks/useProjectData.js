import { useMemo } from "react";
import { PORTFOLIO } from "../data/portfolioData";
import { WORK_CLUSTERS, SIDE_PROJECTS, NOTES } from "../data/portfolioData";

/**
 * Hook to retrieve project data from any of the data sources.
 * @param {string} id - Project ID
 * @returns {object} - { project, parentCluster, loading, error, type }
 */
export const useProjectData = (id) => {
  const data = useMemo(() => {
    if (!id) return { loading: true };

    // Handle case study view via /case-study/:id pattern
    // which maps to standard projects but with different layout focus
    const projectId = id;

    // Note: Project data retrieval must be fast and reliable.
    // We're iterating over nested arrays to flatten the structure,
    // which could be optimized in the future if the catalog grows significantly.
    let foundProject = null;
    let foundParent = null;

    for (const cat of PORTFOLIO.categories) {
      for (const item of cat.items) {
        if (item.id === projectId) {
          foundProject = item;
          foundParent = item; // self-parent for direct items
          break;
        }

        // Handle work cluster projects
        if (item.projects) {
          for (const subProject of item.projects) {
            if (subProject.id === projectId) {
              foundProject = subProject;
              foundParent = item;
              break;
            }
          }
        }

        // Handle nested structures like gridItems
        if (!foundProject && item.gridItems) {
          for (const gridItem of item.gridItems) {
            if (gridItem.id === projectId) {
              foundProject = gridItem;
              foundParent = item;
              break;
            }
          }
        }

        // Handle subItems (e.g., nested side-project items)
        if (!foundProject && item.subItems) {
          for (const subItem of item.subItems) {
            if (subItem.id === projectId) {
              foundProject = subItem;
              foundParent = item;
              break;
            }
          }
        }
      }
      if (foundProject) break;
    }

    // Also search NOTES (Prototypes)
    if (!foundProject) {
      for (const note of NOTES) {
        if (note.id === projectId) {
          foundProject = note;
          foundParent = note; // self-parent for direct items
          break;
        }
      }
    }

    if (foundProject) {
      return {
        project: foundProject,
        parentCluster: foundParent,
        loading: false,
      };
    }

    return {
      project: null,
      parentCluster: null,
      error: "Project not found",
      loading: false,
    };
  }, [id]);

  return data;
};

export default useProjectData;
