import React, { Suspense, useMemo } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { useLanguage } from "../context/LanguageContext";
import DefaultCard from "./cards/DefaultCard";

const CARD_REGISTRY = {
  "human-algorithm": lazyWithRetry(() => import("./cards/HumanAlgorithmCard")),
  workforce: lazyWithRetry(() => import("./cards/WorkforceCard")),
  commerce: lazyWithRetry(() => import("./cards/CommerceCard")),
  efficiency: lazyWithRetry(() => import("./cards/EfficiencyCard")),
  "interactive-workbook": lazyWithRetry(() => import("./cards/InteractiveWorkbookCard")),
  "year-in-review": lazyWithRetry(() => import("./cards/YearInReviewCard")),
  "price-lock": lazyWithRetry(() => import("./cards/PriceLockCard")),
  "project-kinship": lazyWithRetry(() => import("./cards/ProjectKinshipCard")),
  "stoqo-logistics": lazyWithRetry(() => import("./cards/ProjectKinshipCard")), // Reusing Kinship card as per original logic
  "filter-me": lazyWithRetry(() => import("./cards/FilterMeCard")),
  "workforce-chat": lazyWithRetry(() => import("./cards/WorkforceChatCard")),
  "direct-apply": lazyWithRetry(() => import("./cards/WorkforceChatCard")), // Reusing WorkforceChat card
  "ats-dashboard": lazyWithRetry(() => import("./cards/AtsDashboardCard")),
  "app-navigation": lazyWithRetry(() => import("./cards/AppNavigationCard")),
  "marketplace-checkout": lazyWithRetry(() => import("./cards/MarketplaceCheckoutCard")),
  "brand-official-store": lazyWithRetry(() => import("./cards/BrandOfficialStoreCard")),
  "promo-engine": lazyWithRetry(() => import("./cards/PromoEngineCard")),
  "design-system-gudangada": lazyWithRetry(() => import("./cards/DesignSystemCard")),
  "stoqo-sales": lazyWithRetry(() => import("./cards/StoqoSalesCard")),
  "stoqo-sales-incentive": lazyWithRetry(() => import("./cards/StoqoSalesIncentiveCard")),
  "stoqo-sales-kpi": lazyWithRetry(() => import("./cards/StoqoSalesKpiCard")),
  "stoqo-live-app": lazyWithRetry(() => import("./cards/StoqoLiveAppCard")),
  "stoqo-logistics-live": lazyWithRetry(() => import("./cards/StoqoLogisticsLiveCard")),
  "stoqo-picker-app": lazyWithRetry(() => import("./cards/StoqoPickerAppCard")),
  "stoqo-checker-app": lazyWithRetry(() => import("./cards/StoqoCheckerAppCard")),
  "stoqo-sales-context": lazyWithRetry(() => import("./cards/StoqoSalesContextCard")),
  "paper-to-paperless": lazyWithRetry(() => import("./cards/PaperToPaperlessCard")),
};

const ProjectCardFallback = ({ backgroundOnly }) => (
  <div
    className={`w-full h-full bg-[var(--bg-card)] border border-[var(--border-color)] ${backgroundOnly ? "opacity-20" : ""}`}
  />
);

const ProjectCard = ({
  type = "Web",
  expanded = false,
  image = null,
  id = null,
  showChrome = false,
  backgroundOnly = false,
  isId: isIdProp,
}) => {
  let isIdFromContext = false;
  try {
    const langContext = useLanguage();
    isIdFromContext = langContext?.isIndonesian || langContext?.language === "id";
  } catch {
    isIdFromContext = false;
  }
  const isId = isIdProp !== undefined ? isIdProp : isIdFromContext;

  const CardComponent = useMemo(() => {
    if (id && CARD_REGISTRY[id]) {
      return CARD_REGISTRY[id];
    }
    return DefaultCard;
  }, [id]);

  // If it's the DefaultCard, it needs distinct props handling to support the fallback image/AiryDiagram logic
  if (CardComponent === DefaultCard) {
    return (
      <CardComponent
        type={type}
        expanded={expanded}
        image={image}
        showChrome={showChrome}
        backgroundOnly={backgroundOnly}
        isId={isId}
      />
    );
  }

  return (
    <Suspense fallback={<ProjectCardFallback backgroundOnly={backgroundOnly} />}>
      <CardComponent
        expanded={expanded}
        showChrome={showChrome}
        backgroundOnly={backgroundOnly}
        isId={isId}
      />
    </Suspense>
  );
};

export default ProjectCard;
