import { Article } from './types';
import { aiCareerIntelligenceGlassdoor } from './content/ai-career-intelligence-what-glassdoor-cant-tell-you';
import { aiProductDesignInterviewGuide } from './content/ai-product-design-interview-guide';
import { topTenFastestGrowingAiCompanies } from './content/top-10-fastest-growing-ai-companies';
import { fastestSeedToSeriesB } from './content/fastest-seed-to-series-b';
import { livekitVoiceAiInfrastructureDesign } from './content/livekit-voice-ai-infrastructure-design';
import { delveAiComplianceDesignOpportunity } from './content/delve-ai-compliance-design-opportunity';
import { anthropicDeepDiveDesignOpportunity } from './content/anthropic-deep-dive-design-opportunity';
import { foundationStackForAiAgents } from './content/foundation-stack-for-ai-agents';
import { riseOfVerticalAiAgents } from './content/rise-of-vertical-ai-agents';
import { hyperPersonalizationPersonalAgents } from './content/hyper-personalization-personal-agents-replace-apps';
import { soloAiBusinessNoVcMoney } from './content/solo-ai-business-no-vc-money';
import { linearDeepDiveDesignerCeoCraft } from './content/linear-deep-dive-designer-ceo-craft';
import { replitDeepDiveVibeCodingDesign } from './content/replit-deep-dive-vibe-coding-design';

export const articles: Article[] = [
  replitDeepDiveVibeCodingDesign,
  linearDeepDiveDesignerCeoCraft,
  aiCareerIntelligenceGlassdoor,
  soloAiBusinessNoVcMoney,
  hyperPersonalizationPersonalAgents,
  riseOfVerticalAiAgents,
  foundationStackForAiAgents,
  anthropicDeepDiveDesignOpportunity,
  delveAiComplianceDesignOpportunity,
  livekitVoiceAiInfrastructureDesign,
  aiProductDesignInterviewGuide,
  fastestSeedToSeriesB,
  topTenFastestGrowingAiCompanies,
];

export { getArticleBySlug, getAllArticles, getFeaturedArticles, getArticlesByCategory, getArticlesByTag, calculateReadingTime, getRelatedArticles } from './utils';
export type { ArticleCategory } from './types';
export { ARTICLE_CATEGORY_LABELS } from './types';
