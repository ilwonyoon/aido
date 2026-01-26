// Macro Page
'use client';

import React, { useState, useMemo } from 'react';
import { MacroFeed, MacroFilters, MacroEvent, MacroTypeFilter, ImpactFilter } from '@/components/Macro';

const mockMacroEvents: MacroEvent[] = [
  {
    id: '1',
    date: '2025-01-24',
    type: 'funding',
    title: 'Anthropic raises $2B Series D',
    summary: 'Led by Lightspeed at $60B valuation',
    impactLevel: 3,
    companyIds: ['anthropic'],
    sourceUrls: ['https://example.com']
  },
  {
    id: '2',
    date: '2025-01-23',
    type: 'product_launch',
    title: 'Cursor releases Composer feature',
    summary: 'Multi-file editing with AI',
    impactLevel: 2,
    companyIds: ['cursor'],
    sourceUrls: ['https://example.com']
  },
  {
    id: '3',
    date: '2025-01-23',
    type: 'partnership',
    title: 'OpenAI partners with Apple for iOS integration',
    summary: 'Siri will now use GPT-4o for complex queries',
    impactLevel: 3,
    companyIds: ['openai', 'apple'],
    sourceUrls: ['https://example.com']
  }
];

export default function MacroPage() {
  const [typeFilter, setTypeFilter] = useState<MacroTypeFilter>('all');
  const [impactFilter, setImpactFilter] = useState<ImpactFilter>('all');

  const filteredEvents = useMemo(() => {
    return mockMacroEvents.filter((event) => {
      if (typeFilter !== 'all' && event.type !== typeFilter) return false;
      if (impactFilter !== 'all' && event.impactLevel.toString() !== impactFilter) return false;
      return true;
    });
  }, [typeFilter, impactFilter]);

  const clearFilters = () => {
    setTypeFilter('all');
    setImpactFilter('all');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">Daily Macro</h1>
        <p className="text-[var(--muted)]">
          Stay updated with the latest AI scene movements, funding, and launches.
        </p>
      </header>

      <MacroFilters
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        impactFilter={impactFilter}
        onImpactChange={setImpactFilter}
        onClear={clearFilters}
      />

      <MacroFeed events={filteredEvents} />
    </div>
  );
}
