'use client';

import { BarChart } from '@/components/analytics/charts';
import { computeCountryData } from '@/lib/analytics/queries';

interface GeographySectionProps {
  readonly countries: Record<string, number>;
}

export function GeographySection({ countries }: GeographySectionProps) {
  const countryData = computeCountryData(countries);

  if (countryData.length === 0) {
    return (
      <section>
        <h2 className="text-lg font-semibold mb-3">Geography</h2>
        <div className="card p-5 text-center text-[var(--muted)] text-sm">
          No visitor location data yet
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Geography</h2>
      <div className="card p-5">
        <BarChart
          data={countryData}
          height={Math.max(180, countryData.length * 32)}
          horizontal
          barColor="var(--accent)"
        />
      </div>
    </section>
  );
}
