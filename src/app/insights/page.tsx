import { Metadata } from 'next';
import { getAllArticles } from '@/data/articles';
import { InsightsContent } from './InsightsContent';

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

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Insights</h1>
        <p className="text-[var(--muted)] text-sm">
          Data-driven analysis of AI companies, growth trends, and opportunities
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-[var(--muted)]">
            Articles coming soon. Check back later!
          </p>
        </div>
      ) : (
        <InsightsContent articles={articles} />
      )}
    </div>
  );
}
