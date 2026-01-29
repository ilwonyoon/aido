import { Metadata } from 'next';
import { getAllArticles } from '@/data/articles';
import { Card } from '@/components/ui/Card';

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

export default function InsightsPage() {
  const articles = getAllArticles();

  if (articles.length === 0) {
    return (
      <div>
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

  const featured = articles.filter((a) => a.featured);
  const regular = articles.filter((a) => !a.featured);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Insights</h1>
        <p className="text-[var(--muted)] text-sm">
          Data-driven analysis of AI companies, growth trends, and opportunities
        </p>
      </div>

      {/* Featured Articles - Full width */}
      {featured.length > 0 && (
        <div className="space-y-6 mb-8">
          {featured.map((article) => (
            <Card key={article.slug} href={`/insights/${article.slug}`} className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-accent text-xs">
                  {article.category.charAt(0).toUpperCase() +
                    article.category.slice(1)}
                </span>
                <span className="badge badge-success text-xs">Featured</span>
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
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Regular Articles Grid */}
      {regular.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((article) => (
            <Card key={article.slug} href={`/insights/${article.slug}`} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-accent text-xs">
                  {article.category.charAt(0).toUpperCase() +
                    article.category.slice(1)}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
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
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
