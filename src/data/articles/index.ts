import { Article } from './types';
import { topTenFastestGrowingAiCompanies } from './content/top-10-fastest-growing-ai-companies';

export const articles: Article[] = [
  topTenFastestGrowingAiCompanies,
];

export { getArticleBySlug, getAllArticles, getFeaturedArticles, getArticlesByCategory, getArticlesByTag, calculateReadingTime, getRelatedArticles } from './utils';
