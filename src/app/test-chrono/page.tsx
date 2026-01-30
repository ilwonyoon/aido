'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamic import to avoid SSR issues
const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
  ssr: false,
  loading: () => <p>Loading timeline...</p>
});

export default function ChronoTestPage() {
  const [error, setError] = useState<string | null>(null);

  const items = [
    {
      title: "Jun 2023",
      cardTitle: "Seed Round",
      cardSubtitle: "€105M",
      cardDetailedText: "Initial funding"
    },
    {
      title: "Dec 2023",
      cardTitle: "Series A",
      cardSubtitle: "€385M",
      cardDetailedText: "6 months from Seed"
    },
    {
      title: "Jun 2024",
      cardTitle: "Series B",
      cardSubtitle: "€600M",
      cardDetailedText: "12 months from Seed"
    },
    {
      title: "Sep 2025",
      cardTitle: "Series C",
      cardSubtitle: "$14B valuation",
      cardDetailedText: "29 months to unicorn"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">React-Chrono Timeline Test</h1>

        {error && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded p-4 mb-8">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Horizontal Timeline</h2>

          <div style={{ width: '100%', height: '400px' }}>
            <Chrono
              items={items}
              mode="HORIZONTAL"
              theme={{
                primary: '#0070f3',
                secondary: '#111111',
                cardBgColor: '#000000',
                titleColor: '#ededed',
                titleColorActive: '#3291ff',
              }}
              cardHeight={150}
            />
          </div>
        </div>

        <div className="mt-8 bg-[var(--card)] border border-[var(--border)] rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Vertical Timeline</h2>

          <div style={{ width: '100%', height: '600px' }}>
            <Chrono
              items={items}
              mode="VERTICAL"
              theme={{
                primary: '#0070f3',
                secondary: '#111111',
                cardBgColor: '#000000',
                titleColor: '#ededed',
                titleColorActive: '#3291ff',
              }}
            />
          </div>
        </div>

        <div className="mt-8 bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded p-4">
          <h3 className="font-semibold mb-2">Debug Info:</h3>
          <ul className="text-sm space-y-1">
            <li>• Items count: {items.length}</li>
            <li>• react-chrono version: 3.3.3</li>
            <li>• Dynamic import: {typeof Chrono === 'function' ? '✅ Loaded' : '❌ Failed'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
