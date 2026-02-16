import React, { useMemo } from 'react';
import * as Cards from './cards';

const CARD_REGISTRY = {
    'human-algorithm': Cards.HumanAlgorithmCard,
    'workforce': Cards.WorkforceCard,
    'commerce': Cards.CommerceCard,
    'efficiency': Cards.EfficiencyCard,
    'interactive-workbook': Cards.InteractiveWorkbookCard,
    'year-in-review': Cards.YearInReviewCard,
    'price-lock': Cards.PriceLockCard,
    'project-kinship': Cards.ProjectKinshipCard,
    'stoqo-logistics': Cards.ProjectKinshipCard, // Reusing Kinship card as per original logic
    'filter-me': Cards.FilterMeCard,
    'workforce-chat': Cards.WorkforceChatCard,
    'direct-apply': Cards.WorkforceChatCard, // Reusing WorkforceChat card
    'ats-dashboard': Cards.AtsDashboardCard,
    'app-navigation': Cards.AppNavigationCard,
    'marketplace-checkout': Cards.MarketplaceCheckoutCard,
    'brand-official-store': Cards.BrandOfficialStoreCard,
    'promo-engine': Cards.PromoEngineCard,
    'design-system-gudangada': Cards.DesignSystemCard,
    'stoqo-sales': Cards.StoqoSalesCard,
    'stoqo-sales-incentive': Cards.StoqoSalesIncentiveCard,
    'stoqo-sales-kpi': Cards.StoqoSalesKpiCard,
    'stoqo-live-app': Cards.StoqoLiveAppCard,
    'stoqo-logistics-live': Cards.StoqoLogisticsLiveCard,
    'stoqo-picker-app': Cards.StoqoPickerAppCard,
    'stoqo-checker-app': Cards.StoqoCheckerAppCard,
    'stoqo-sales-context': Cards.StoqoSalesContextCard,
    'paper-to-paperless': Cards.PaperToPaperlessCard,
};

const ProjectCard = ({ type = 'Web', expanded = false, image = null, id = null, showChrome = false, backgroundOnly = false, priority = false }) => {

    const CardComponent = useMemo(() => {
        if (id && CARD_REGISTRY[id]) {
            return CARD_REGISTRY[id];
        }
        return Cards.DefaultCard;
    }, [id]);

    // If it's the DefaultCard, it needs distinct props handling to support the fallback image/AiryDiagram logic
    if (CardComponent === Cards.DefaultCard) {
        return (
            <CardComponent
                type={type}
                expanded={expanded}
                image={image}
                showChrome={showChrome}
                backgroundOnly={backgroundOnly}
            />
        );
    }

    return (
        <CardComponent
            expanded={expanded}
            showChrome={showChrome}
            backgroundOnly={backgroundOnly}
        />
    );
};

export default ProjectCard;
