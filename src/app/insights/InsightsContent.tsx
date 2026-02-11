'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/data/articles/types';
import { ArticleCategory, ARTICLE_CATEGORY_LABELS } from '@/data/articles/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ViewCounter } from '@/components/article/ViewCounter';

interface InsightsContentProps {
  articles: Article[];
}

const CATEGORY_ORDER: ArticleCategory[] = ['company', 'analysis', 'perspectives', 'guides'];

export function InsightsContent({ articles }: InsightsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<ArticleCategory, number> = {
      company: 0,
      analysis: 0,
      perspectives: 0,
      guides: 0,
    };
    articles.forEach(article => {
      counts[article.category] = counts[article.category] + 1;
    });
    return counts;
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === null) return articles;
    return articles.filter(article => article.category === selectedCategory);
  }, [articles, selectedCategory]);

  const handleCategoryClick = (category: ArticleCategory) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`flex items-center gap-1.5 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap ${
            selectedCategory === null
              ? 'border-[var(--accent)] text-[var(--foreground)]'
              : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
          }`}
        >
          All
          <span className="opacity-50">({articles.length})</span>
        </button>
        {CATEGORY_ORDER.map(category => {
          const isActive = selectedCategory === category;
          const count = categoryCounts[category];
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`flex items-center gap-1.5 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-[var(--accent)] text-[var(--foreground)]'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
              }`}
            >
              {ARTICLE_CATEGORY_LABELS[category]}
              <span className="opacity-50">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <Card key={article.slug} href={`/insights/${article.slug}`} className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="accent" className="text-xs">
                {ARTICLE_CATEGORY_LABELS[article.category]}
              </Badge>
              {article.featured && (
                <Badge variant="success" className="text-xs">Featured</Badge>
              )}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-[var(--muted)] text-sm mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
              <span>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              {article.readingTimeMinutes && (
                <>
                  <span>•</span>
                  <span>{article.readingTimeMinutes} min read</span>
                </>
              )}
              <span>•</span>
              <ViewCounter slug={article.slug} />
            </div>
          </Card>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="card p-8 text-center">
          <p className="text-[var(--muted)]">No articles match the selected category.</p>
        </div>
      )}
    </>
  );
}
