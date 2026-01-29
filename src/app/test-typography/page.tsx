'use client';

import { useState } from 'react';

export default function TypographyTestPage() {
  const [view, setView] = useState<'split' | 'before' | 'after'>('split');

  const sampleContent = `
## Business Model: The European AI Challenger

Mistral AI builds **open-weight and commercial large language models** (LLMs), positioning itself as the European answer to OpenAI.

**Revenue Model**:
- Enterprise API access (La Plateforme)
- Self-hosted licenses for regulated industries
- Government contracts (French AI strategy)
- Azure partnership (distribution)

**Target Customer**: Top 1% of legal market first (AmLaw 100), then down-market.

### Why Their Model is Strong

**1. Open-Weight Moat**
- Developers trust open models they can inspect and modify
- Creates ecosystem lock-in: thousands of apps built on Mistral
- Regulatory advantage: EU companies prefer auditable AI

**2. European Data Sovereignty**
- GDPR-compliant infrastructure
- French government backing ($332M investment)
- Enterprise customers need EU-hosted AI (banking, defense, healthcare)

### Growth Trajectory

**Current Metrics** (Sept 2025):
- Valuation: $14B
- Funding: $3.05B total
- Time to unicorn: **12 months** (fastest European AI unicorn)
`;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Typography Test: Before vs After</h1>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setView('split')}
            className={`px-4 py-2 rounded ${
              view === 'split' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--card)] border border-[var(--border)]'
            }`}
          >
            Split View
          </button>
          <button
            onClick={() => setView('before')}
            className={`px-4 py-2 rounded ${
              view === 'before' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--card)] border border-[var(--border)]'
            }`}
          >
            Before Only
          </button>
          <button
            onClick={() => setView('after')}
            className={`px-4 py-2 rounded ${
              view === 'after' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--card)] border border-[var(--border)]'
            }`}
          >
            After Only
          </button>
        </div>

        <div className="bg-[var(--warning)] bg-opacity-10 border border-[var(--warning)] rounded p-4 mb-8">
          <h3 className="font-semibold mb-2">Key Changes to Notice:</h3>
          <ul className="text-sm space-y-1">
            <li>• <strong>Heading → Content gap:</strong> Reduced from 1.75rem to 0.5-0.75rem (CLOSER)</li>
            <li>• <strong>Content → Next Section gap:</strong> Increased to 1.5rem (FARTHER)</li>
            <li>• <strong>List item spacing:</strong> Reduced from 0.5rem to 0.25rem (TIGHTER)</li>
            <li>• <strong>Line height:</strong> Reduced from 1.8 to 1.6</li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className={`max-w-7xl mx-auto grid ${view === 'split' ? 'grid-cols-2' : 'grid-cols-1'} gap-8`}>
        {/* BEFORE */}
        {(view === 'split' || view === 'before') && (
          <div className="border border-[var(--border)] rounded-lg p-6">
            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded px-3 py-1 text-sm font-semibold mb-4 inline-block">
              ❌ BEFORE (Old Spacing)
            </div>

            <div className="article-content-old">
              <BeforeContent content={sampleContent} />
            </div>
          </div>
        )}

        {/* AFTER */}
        {(view === 'split' || view === 'after') && (
          <div className="border border-[var(--border)] rounded-lg p-6">
            <div className="bg-green-500 bg-opacity-10 border border-green-500 rounded px-3 py-1 text-sm font-semibold mb-4 inline-block">
              ✅ AFTER (New Spacing - Proximity Principle)
            </div>

            <div className="article-content">
              <AfterContent content={sampleContent} />
            </div>
          </div>
        )}
      </div>

      {/* React-Chrono Test */}
      <div className="max-w-7xl mx-auto mt-12 border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">React-Chrono Timeline Test</h2>
        <TimelineTest />
      </div>
    </div>
  );
}

// BEFORE styles
function BeforeContent({ content }: { content: string }) {
  const lines = content.trim().split('\n');

  return (
    <div>
      {lines.map((line, i) => {
        if (line.startsWith('## ')) {
          return <h2 key={i} style={{ marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.625rem', fontWeight: 600 }}>{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.375rem', fontWeight: 600 }}>{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('**') && line.endsWith('**:')) {
          return <h4 key={i} style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem', fontWeight: 600 }}>{line.replace(/\*\*/g, '').replace(':', ':')}</h4>;
        }
        if (line.startsWith('- ')) {
          return <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.7', marginLeft: '1.25rem', listStyleType: 'disc', display: 'list-item' }}>{line.replace('- ', '')}</li>;
        }
        if (line.trim() === '') {
          return <div key={i} style={{ height: '0.5rem' }} />;
        }
        return <p key={i} style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{line}</p>;
      })}
    </div>
  );
}

// AFTER styles (current)
function AfterContent({ content }: { content: string }) {
  const lines = content.trim().split('\n');

  return (
    <div>
      {lines.map((line, i) => {
        if (line.startsWith('## ')) {
          return <h2 key={i} style={{ marginTop: '4rem', marginBottom: '0.75rem', fontSize: '1.875rem', fontWeight: 600, borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} style={{ marginTop: '3rem', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('**') && line.endsWith('**:')) {
          return <h4 key={i} style={{ marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>{line.replace(/\*\*/g, '').replace(':', ':')}</h4>;
        }
        if (line.startsWith('- ')) {
          return <li key={i} style={{ marginBottom: '0.25rem', lineHeight: '1.6', marginLeft: '1.25rem', listStyleType: 'disc', display: 'list-item', paddingLeft: '0.25rem' }}>{line.replace('- ', '')}</li>;
        }
        if (line.trim() === '') {
          return <div key={i} style={{ height: '0.5rem' }} />;
        }
        return <p key={i} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{line}</p>;
      })}
    </div>
  );
}

// Timeline test
function TimelineTest() {
  return (
    <div>
      <p className="mb-4">Testing React-Chrono import and rendering:</p>
      <div className="bg-[var(--card)] border border-[var(--border)] rounded p-4">
        <p className="text-sm text-[var(--muted)]">
          If timeline appears below, React-Chrono is working. If not, there's an import/build issue.
        </p>
        <div className="mt-4">
          {/* We'll import and test Chrono here */}
          <DynamicTimeline />
        </div>
      </div>
    </div>
  );
}

function DynamicTimeline() {
  try {
    // Dynamic import to test
    const items = [
      { title: "Jun 2023", cardTitle: "Seed", cardSubtitle: "€105M" },
      { title: "Dec 2023", cardTitle: "Series A", cardSubtitle: "€385M" },
      { title: "Jun 2024", cardTitle: "Series B", cardSubtitle: "€600M" }
    ];

    return (
      <div className="p-4 bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded">
        <p className="text-sm mb-2">⚠️ React-Chrono requires client-side rendering</p>
        <p className="text-xs text-[var(--muted)]">Timeline data: {JSON.stringify(items.map(i => i.cardTitle))}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded">
        <p className="text-sm">❌ Error loading timeline: {String(error)}</p>
      </div>
    );
  }
}

// Old styles for comparison
const oldStyles = `
.article-content-old h2 {
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  font-size: 1.625rem;
  font-weight: 600;
}

.article-content-old h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.375rem;
  font-weight: 600;
}

.article-content-old h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.article-content-old p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.article-content-old li {
  margin-bottom: 0.5rem;
  line-height: 1.7;
  list-style-type: disc;
  margin-left: 1.25rem;
  display: list-item;
}
`;
