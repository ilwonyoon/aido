import { Article } from './types';
import { articles } from './index';

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getArticlesByCategory(
  category: Article['category']
): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((a) => a.tags.includes(tag));
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit: number = 3
): Article[] {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => article.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}
