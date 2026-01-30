'use client';

import { ReactNode } from 'react';
import { ArticleWithVisualizations } from '@/components/article/ArticleWithVisualizations';
import { MarkdownRenderer } from '@/components/markdown/MarkdownRenderer';
import { FundingTimeline, ComparisonChart } from '@/components/visualizations';
import {
  fundingData,
  industryAverage,
} from '@/data/articles/visualizations/fastest-seed-to-series-b-data';

function getFastestSeedVizMap(): Record<string, ReactNode> {
  const companyMap = Object.fromEntries(
    fundingData.map((c) => [c.id, c])
  );

  return {
    'mistral-timeline': <FundingTimeline company={companyMap['mistral-ai']} />,
    'harvey-timeline': <FundingTimeline company={companyMap['harvey']} />,
    'pika-timeline': <FundingTimeline company={companyMap['pika']} />,
    'xai-timeline': <FundingTimeline company={companyMap['xai']} />,
    'granola-timeline': <FundingTimeline company={companyMap['granola']} />,
    'summary-chart': (
      <ComparisonChart
        companies={fundingData}
        industryAverage={industryAverage}
      />
    ),
  };
}

const ARTICLE_VIZ_MAP: Record<string, () => Record<string, ReactNode>> = {
  'fastest-seed-to-series-b-ai-companies-2026': getFastestSeedVizMap,
};

interface Props {
  readonly slug: string;
  readonly content: string;
}

export function ArticleVisualizations({ slug, content }: Props) {
  const vizFactory = ARTICLE_VIZ_MAP[slug];

  if (!vizFactory) {
    return <MarkdownRenderer content={content} />;
  }

  const visualizations = vizFactory();
  return (
    <ArticleWithVisualizations
      content={content}
      visualizations={visualizations}
    />
  );
}
