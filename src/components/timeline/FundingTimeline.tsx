'use client';

import { Chrono } from 'react-chrono';

interface FundingRound {
  stage: string;
  amount: string;
  date: string;
  valuation?: string;
}

interface FundingTimelineProps {
  rounds: FundingRound[];
  totalFunding: string;
  currentValuation?: string;
  additionalInfo?: string;
}

export function FundingTimeline({
  rounds,
  totalFunding,
  currentValuation,
  additionalInfo,
}: FundingTimelineProps) {
  // Transform data for React-Chrono
  const items = rounds.map((round, index) => {
    const monthsFromPrevious = index > 0 ? calculateMonths(rounds[index - 1].date, round.date) : null;

    return {
      title: round.date,
      cardTitle: round.stage,
      cardSubtitle: round.amount,
      cardDetailedText: monthsFromPrevious ? `${monthsFromPrevious} months from previous round` : undefined,
    };
  });

  return (
    <div className="not-prose my-8">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
        {/* Timeline */}
        <Chrono
          items={items}
          mode="HORIZONTAL"
          theme={{
            primary: 'var(--accent)',
            secondary: 'var(--card)',
            cardBgColor: 'var(--background)',
            titleColor: 'var(--foreground)',
            titleColorActive: 'var(--accent-light)',
          }}
        />

        {/* Summary */}
        <div className="flex flex-wrap gap-6 pt-6 mt-6 border-t border-[var(--border)] text-sm">
          <div>
            <span className="text-[var(--muted)]">Total Funding: </span>
            <span className="font-semibold text-[var(--foreground)]">{totalFunding}</span>
          </div>
          {currentValuation && (
            <div>
              <span className="text-[var(--muted)]">Current Valuation: </span>
              <span className="font-semibold text-[var(--foreground)]">{currentValuation}</span>
            </div>
          )}
          {additionalInfo && (
            <div className="text-[var(--muted)]">{additionalInfo}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper to calculate months between dates
function calculateMonths(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24 * 30.44));
}
