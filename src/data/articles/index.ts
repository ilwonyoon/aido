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
import { cursorDeepDiveDesignOpportunity } from './content/cursor-deep-dive-fastest-growing-saas-design';
import { gammaDeepDive100mArr52People } from './content/gamma-deep-dive-100m-arr-52-people';
import { harveyDeepDiveLegalAiDesignOpportunity } from './content/harvey-deep-dive-legal-ai-design-opportunity';
import { listenLabsDeepDiveFoundingDesignerZeroToOne } from './content/listen-labs-deep-dive-founding-designer-zero-to-one';
import { writerDeepDiveEnterpriseAiPlatformDesign } from './content/writer-deep-dive-enterprise-ai-platform-design';
import { huggingFaceDeepDiveGithubOfMlDesign } from './content/hugging-face-deep-dive-github-of-ml-design';

export const articles: Article[] = [
  huggingFaceDeepDiveGithubOfMlDesign,
  writerDeepDiveEnterpriseAiPlatformDesign,
  listenLabsDeepDiveFoundingDesignerZeroToOne,
  harveyDeepDiveLegalAiDesignOpportunity,
  gammaDeepDive100mArr52People,
  cursorDeepDiveDesignOpportunity,
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
