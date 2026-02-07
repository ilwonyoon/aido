import { Article } from './types';
import { aiProductDesignInterviewGuide } from './content/ai-product-design-interview-guide';
import { topTenFastestGrowingAiCompanies } from './content/top-10-fastest-growing-ai-companies';
import { fastestSeedToSeriesB } from './content/fastest-seed-to-series-b';
import { livekitVoiceAiInfrastructureDesign } from './content/livekit-voice-ai-infrastructure-design';
import { delveAiComplianceDesignOpportunity } from './content/delve-ai-compliance-design-opportunity';

export const articles: Article[] = [
  delveAiComplianceDesignOpportunity,
  livekitVoiceAiInfrastructureDesign,
  aiProductDesignInterviewGuide,
  fastestSeedToSeriesB,
  topTenFastestGrowingAiCompanies,
];

export { getArticleBySlug, getAllArticles, getFeaturedArticles, getArticlesByCategory, getArticlesByTag, calculateReadingTime, getRelatedArticles } from './utils';
