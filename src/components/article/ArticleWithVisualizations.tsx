'use client';

import { MarkdownRenderer } from '@/components/markdown/MarkdownRenderer';
import { ReactNode } from 'react';

interface ArticleSection {
  readonly type: 'markdown' | 'visualization';
  readonly content?: string;
  readonly vizId?: string;
}

interface Props {
  readonly content: string;
  readonly visualizations?: Readonly<Record<string, ReactNode>>;
}

function splitContentByVizPlaceholders(content: string): readonly ArticleSection[] {
  const regex = /<!--\s*viz:(\S+)\s*-->/g;
  const sections: ArticleSection[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      sections.push({ type: 'markdown', content: content.slice(lastIndex, match.index) });
    }
    sections.push({ type: 'visualization', vizId: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    sections.push({ type: 'markdown', content: content.slice(lastIndex) });
  }

  return sections;
}

export function ArticleWithVisualizations({ content, visualizations = {} }: Props) {
  const sections = splitContentByVizPlaceholders(content);

  return (
    <>
      {sections.map((section, i) => {
        if (section.type === 'markdown' && section.content) {
          const trimmed = section.content.trim();
          if (!trimmed) return null;
          return <MarkdownRenderer key={i} content={trimmed} />;
        }
        if (section.type === 'visualization' && section.vizId && visualizations[section.vizId]) {
          return (
            <div key={i} style={{ margin: '2.5rem 0' }}>
              {visualizations[section.vizId]}
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
