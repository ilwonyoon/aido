'use client';

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
  return (
    <div className="not-prose my-8 bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
      {/* Timeline */}
      <div className="flex items-center justify-between mb-6 relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-[var(--border)]" />

        {rounds.map((round, index) => {
          const monthsFromPrevious = index > 0 ? calculateMonths(rounds[index - 1].date, round.date) : null;

          return (
            <div key={index} className="flex-1 relative">
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] flex items-center justify-center text-xs font-semibold z-10">
                  {index + 1}
                </div>

                {/* Stage */}
                <div className="mt-2 text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">
                  {round.stage}
                </div>

                {/* Amount */}
                <div className="text-sm font-bold text-[var(--accent-light)] mt-1">
                  {round.amount}
                </div>

                {/* Date */}
                <div className="text-xs text-[var(--muted)] mt-1">
                  {round.date}
                </div>

                {/* Months arrow */}
                {monthsFromPrevious && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-[var(--success)] font-medium whitespace-nowrap">
                    {monthsFromPrevious}mo →
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="flex flex-wrap gap-6 pt-4 border-t border-[var(--border)] text-sm">
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
  );
}

// Helper to calculate months between dates
function calculateMonths(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24 * 30.44));
}
