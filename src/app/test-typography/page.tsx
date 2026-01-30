'use client';

import { useState, ReactNode } from 'react';
import { fastestSeedToSeriesB } from '@/data/articles/content/fastest-seed-to-series-b';
import { FundingTimeline, ComparisonChart } from '@/components/visualizations';
import { ArticleWithVisualizations } from '@/components/article/ArticleWithVisualizations';
import { fundingData, industryAverage } from '@/data/articles/visualizations/fastest-seed-to-series-b-data';
import { companiesNumeric } from '@/data/articles/visualizations/fastest-seed-numeric';
import { GrowthTrajectory } from '@/components/visualizations/d3/GrowthTrajectory';

// --- Block types ---

type Block =
  | { type: 'h2' | 'h3' | 'h4' | 'p' | 'bold' | 'code'; text: string }
  | { type: 'ul-item'; text: string; nested?: boolean }
  | { type: 'ol-item'; text: string }
  | { type: 'hr' };

// --- Parse markdown into blocks ---

function parseBlocks(raw: string): Block[] {
  const lines = raw.trim().split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: 'code', text: code.join('\n') });
      continue;
    }

    if (line.trim() === '---') { blocks.push({ type: 'hr' }); i++; continue; }
    if (line.startsWith('#### ')) { blocks.push({ type: 'h4', text: line.slice(5) }); i++; continue; }
    if (line.startsWith('### ')) { blocks.push({ type: 'h3', text: line.slice(4) }); i++; continue; }
    if (line.startsWith('## ')) { blocks.push({ type: 'h2', text: line.slice(3) }); i++; continue; }

    // Bold-only line (standalone bold like **1. Open-Weight Moat** or **Revenue Model**:)
    if (line.startsWith('**') && (line.endsWith('**') || line.endsWith('**:'))) {
      blocks.push({ type: 'bold', text: line.replace(/\*\*/g, '') });
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      blocks.push({ type: 'ol-item', text: line.replace(/^\d+\.\s/, '') });
      i++;
      continue;
    }

    // Nested unordered list (2+ space indent)
    if (line.startsWith('  - ')) {
      blocks.push({ type: 'ul-item', text: line.slice(4), nested: true });
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith('- ')) {
      blocks.push({ type: 'ul-item', text: line.slice(2) });
      i++;
      continue;
    }

    // Empty line — skip (CSS margins handle spacing)
    if (line.trim() === '') { i++; continue; }

    // Regular paragraph
    blocks.push({ type: 'p', text: line });
    i++;
  }

  return blocks;
}

// --- Parse inline **bold** and [links](url) ---

function parseInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]}>{linkMatch[1]}</a>;
    }
    return part;
  });
}

// --- Main Page ---

export default function TypographyTestPage() {
  const [view, setView] = useState<'split' | 'before' | 'after'>('split');
  const content = fastestSeedToSeriesB.content;

  const companyMap = Object.fromEntries(fundingData.map((c) => [c.id, c]));
  const vizMap: Record<string, ReactNode> = {
    'mistral-timeline': <FundingTimeline company={companyMap['mistral-ai']} />,
    'harvey-timeline': <FundingTimeline company={companyMap['harvey']} />,
    'pika-timeline': <FundingTimeline company={companyMap['pika']} />,
    'xai-timeline': <FundingTimeline company={companyMap['xai']} />,
    'granola-timeline': <FundingTimeline company={companyMap['granola']} />,
    'summary-chart': <ComparisonChart companies={fundingData} industryAverage={industryAverage} />,
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Typography Test: Before vs After</h1>

        <div className="flex gap-4 mb-4">
          {(['split', 'before', 'after'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-2 rounded ${
                view === v
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--card)] border border-[var(--border)]'
              }`}
            >
              {v === 'split' ? 'Split View' : v === 'before' ? 'Before Only' : 'After Only'}
            </button>
          ))}
        </div>

        <div className="bg-[var(--warning)] bg-opacity-10 border border-[var(--warning)] rounded p-4 mb-8">
          <h3 className="font-semibold mb-2">Article Design System v2.0:</h3>
          <ul className="text-sm space-y-1">
            <li>&#8226; <strong>h1</strong>: 2rem / 800 / top 4rem, bottom 0.75rem</li>
            <li>&#8226; <strong>h2</strong>: 1.75rem / 700 / top 7rem, bottom 0.75rem (acts as visual section divider)</li>
            <li>&#8226; <strong>h3</strong>: 1.375rem / 600 / top 2.5rem, bottom 0.5rem</li>
            <li>&#8226; <strong>h4</strong>: 1.125rem / 600 / top 2rem, bottom 0.375rem</li>
            <li>&#8226; <strong>Body</strong>: lh 1.778 / bottom 1.333em / var(--text-body)</li>
            <li>&#8226; <strong>Subtitle→list</strong>: :has() family bond 0.25rem / p→list 0.5em</li>
            <li>&#8226; <strong>Proximity ratio</strong>: heading top:bottom ≈ 5:1</li>
          </ul>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto grid ${view === 'split' ? 'grid-cols-2' : 'grid-cols-1'} gap-8`}>
        {(view === 'split' || view === 'before') && (
          <div className="border border-[var(--border)] rounded-lg p-6">
            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded px-3 py-1 text-sm font-semibold mb-4 inline-block">
              BEFORE (Old Spacing)
            </div>
            <BeforeContent content={content} />
          </div>
        )}

        {(view === 'split' || view === 'after') && (
          <div className="border border-[var(--border)] rounded-lg p-6">
            <div className="bg-green-500 bg-opacity-10 border border-green-500 rounded px-3 py-1 text-sm font-semibold mb-4 inline-block">
              AFTER (Proximity Principle + Data Viz)
            </div>
            <div className="article-content">
              <ArticleWithVisualizations
                content={content}
                visualizations={vizMap}
              />
            </div>
          </div>
        )}
      </div>

      {/* --- Growth Trajectory Chart --- */}
      <div className="max-w-4xl mx-auto mt-16 mb-16">
        <GrowthTrajectory companies={companiesNumeric} />
      </div>
    </div>
  );
}

// --- Before: Old flat spacing (inline styles) ---

function BeforeContent({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i} style={{ marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.625rem', fontWeight: 600 }}>{parseInline(block.text)}</h2>;
          case 'h3':
            return <h3 key={i} style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.375rem', fontWeight: 600 }}>{parseInline(block.text)}</h3>;
          case 'h4':
            return <h4 key={i} style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem', fontWeight: 600 }}>{parseInline(block.text)}</h4>;
          case 'bold':
            return <p key={i} style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>{block.text}</p>;
          case 'p':
            return <p key={i} style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>{parseInline(block.text)}</p>;
          case 'ul-item':
            return (
              <li key={i} style={{
                marginBottom: '0.5rem',
                lineHeight: 1.7,
                marginLeft: block.nested ? '2.5rem' : '1.25rem',
                listStyleType: block.nested ? 'circle' : 'disc',
                display: 'list-item',
              }}>
                {parseInline(block.text)}
              </li>
            );
          case 'ol-item':
            return (
              <li key={i} style={{
                marginBottom: '0.5rem',
                lineHeight: 1.7,
                marginLeft: '1.25rem',
                listStyleType: 'decimal',
                display: 'list-item',
              }}>
                {parseInline(block.text)}
              </li>
            );
          case 'hr':
            return <hr key={i} style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />;
          case 'code':
            return (
              <pre key={i} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1rem',
                overflow: 'auto',
                margin: '1.5rem 0',
                fontSize: '0.875rem',
                lineHeight: 1.5,
              }}>
                <code>{block.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

// --- After: .article-content CSS cascade handles styling ---

function AfterContent({ content }: { content: string }) {
  const blocks = parseBlocks(content);
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    // Group consecutive ul-items into <ul>
    if (block.type === 'ul-item') {
      const items: { text: string; nested?: boolean }[] = [];
      while (i < blocks.length && blocks[i].type === 'ul-item') {
        const b = blocks[i] as { type: 'ul-item'; text: string; nested?: boolean };
        items.push({ text: b.text, nested: b.nested });
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`}>
          {items.map((item, j) => (
            <li key={j} style={item.nested ? { marginLeft: '1.5rem', listStyleType: 'circle' } : undefined}>
              {parseInline(item.text)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Group consecutive ol-items into <ol>
    if (block.type === 'ol-item') {
      const items: { text: string }[] = [];
      while (i < blocks.length && blocks[i].type === 'ol-item') {
        const b = blocks[i] as { type: 'ol-item'; text: string };
        items.push({ text: b.text });
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`}>
          {items.map((item, j) => (
            <li key={j}>{parseInline(item.text)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Single blocks — CSS cascade handles all styling
    switch (block.type) {
      case 'h2':
        elements.push(<h2 key={i}>{parseInline(block.text)}</h2>);
        break;
      case 'h3':
        elements.push(<h3 key={i}>{parseInline(block.text)}</h3>);
        break;
      case 'h4':
        elements.push(<h4 key={i}>{parseInline(block.text)}</h4>);
        break;
      case 'bold':
        elements.push(<p key={i}><strong>{block.text}</strong></p>);
        break;
      case 'p':
        elements.push(<p key={i}>{parseInline(block.text)}</p>);
        break;
      case 'hr':
        elements.push(<hr key={i} />);
        break;
      case 'code':
        elements.push(<pre key={i}><code>{block.text}</code></pre>);
        break;
    }

    i++;
  }

  return <>{elements}</>;
}
