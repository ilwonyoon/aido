import { Article } from './types';
import { aiProductDesignInterviewGuide } from './content/ai-product-design-interview-guide';
import { topTenFastestGrowingAiCompanies } from './content/top-10-fastest-growing-ai-companies';
import { fastestSeedToSeriesB } from './content/fastest-seed-to-series-b';

export const articles: Article[] = [
  aiProductDesignInterviewGuide,
  fastestSeedToSeriesB,
  topTenFastestGrowingAiCompanies,
];

export { getArticleBySlug, getAllArticles, getFeaturedArticles, getArticlesByCategory, getArticlesByTag, calculateReadingTime, getRelatedArticles } from './utils';
