import { WORK_CLUSTERS } from "../data/portfolioData";
import {
  isProjectLocked,
  mapProjectToStudy,
  unlockedIds,
} from "./projectMappers";

const unlockedOrder = new Map(unlockedIds.map((id, index) => [id, index]));

export const getUnlockedFeaturedProjects = (clusters = WORK_CLUSTERS) =>
  clusters
    .flatMap((cluster, clusterIndex) =>
      cluster.projects.map((project, projectIndex) => ({
        cluster,
        project,
        sourceOrder: clusterIndex * 1000 + projectIndex,
      })),
    )
    .filter(({ project }) => project.caseStudy && !isProjectLocked(project))
    .sort((a, b) => {
      const aOrder = unlockedOrder.has(a.project.id)
        ? unlockedOrder.get(a.project.id)
        : unlockedIds.length + a.sourceOrder;
      const bOrder = unlockedOrder.has(b.project.id)
        ? unlockedOrder.get(b.project.id)
        : unlockedIds.length + b.sourceOrder;

      return aOrder - bOrder;
    });

export const getUnlockedFeaturedStudies = (clusters, isId) =>
  getUnlockedFeaturedProjects(clusters).map(({ project, cluster }) =>
    mapProjectToStudy(project, cluster, isId),
  );
