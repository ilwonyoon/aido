import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export interface MacroEvent {
  id: string;
  date: string; // ISO date
  type: 'funding' | 'product_launch' | 'leadership' | 'acquisition' | 'layoff' | 'partnership';
  title: string;
  summary: string;
  impactLevel: 1 | 2 | 3; // 1=low, 3=high
  companyIds: string[]; // Link to companies
  sourceUrls: string[];
}

const typeConfig: Record<MacroEvent['type'], { label: string; variant: 'default' | 'accent' | 'success' | 'warning' }> = {
  funding: { label: 'Funding', variant: 'success' },
  product_launch: { label: 'Product Launch', variant: 'accent' },
  leadership: { label: 'Leadership', variant: 'default' },
  acquisition: { label: 'Acquisition', variant: 'warning' },
  layoff: { label: 'Layoff', variant: 'warning' },
  partnership: { label: 'Partnership', variant: 'accent' },
};

const impactColors = {
  1: 'text-[var(--muted)]',
  2: 'text-[var(--accent-light)]',
  3: 'text-[var(--warning)]',
};

export function MacroCard({ event }: { event: MacroEvent }) {
  const config = typeConfig[event.type];

  return (
    <Card className="p-4 mb-4 hover:border-[var(--muted)] transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={config.variant}>{config.label}</Badge>
            <span className={`text-xs font-mono ${impactColors[event.impactLevel]}`}>
              Impact: {Array(event.impactLevel).fill('●').join('')}
            </span>
          </div>
          <h3 className="text-lg font-medium mb-1">{event.title}</h3>
          <p className="text-sm text-[var(--muted)] mb-3">{event.summary}</p>
          
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {event.companyIds.map((companyId) => (
              <Link 
                key={companyId} 
                href={`/company/${companyId}`}
                className="text-[var(--accent-light)] hover:underline capitalize"
              >
                {companyId}
              </Link>
            ))}
            {event.sourceUrls.map((url, i) => (
              <a 
                key={i} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                Source ↗
              </a>
            ))}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <time className="text-xs text-[var(--muted)] font-mono">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </time>
        </div>
      </div>
    </Card>
  );
}
