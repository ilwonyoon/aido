import { Metadata } from 'next';
import { getAllArticles } from '@/data/articles';
import { Card } from '@/components/ui/Card';
import { ViewCounter } from '@/components/article/ViewCounter';

export const metadata: Metadata = {
  title: 'Insights - AI Company Analysis & Trends | AIDO',
  description:
    'Data-driven insights about AI companies, growth trends, and design opportunities in the AI industry.',
  keywords: [
    'AI company analysis',
    'AI industry trends',
    'fastest growing AI companies',
    'AI startup insights',
    'product designer AI jobs',
  ],
  openGraph: {
    title: 'AIDO Insights - AI Company Analysis',
    description:
      'Data-driven analysis of AI companies, growth trends, and design opportunities',
    type: 'website',
    url: 'https://aido-d2cc0.web.app/insights',
  },
  alternates: {
    canonical: 'https://aido-d2cc0.web.app/insights',
  },
};

// Format category for display (e.g., 'deep-dive' → 'Deep-dive')
function formatCategory(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function InsightsPage() {
  const articles = getAllArticles();

  if (articles.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Insights</h1>
          <p className="text-[var(--muted)] text-sm">
            Data-driven analysis of AI companies, growth trends, and
            opportunities
          </p>
        </div>

        <div className="card p-8 text-center">
          <p className="text-[var(--muted)]">
            Articles coming soon. Check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Insights</h1>
        <p className="text-[var(--muted)] text-sm">
          Data-driven analysis of AI companies, growth trends, and opportunities
        </p>
      </div>

      {/* All articles — unified full-width format, sorted by publish date (newest first) */}
      <div className="space-y-6">
        {articles.map((article) => (
          <Card key={article.slug} href={`/insights/${article.slug}`} className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge badge-accent text-xs">
                {formatCategory(article.category)}
              </span>
              {article.featured && (
                <span className="badge badge-success text-xs">Featured</span>
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
    </div>
  );
}
