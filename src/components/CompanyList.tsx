'use client';

import { useCompanies } from '@/hooks/useCompanies';
import { CompanyFilters } from '@/components/CompanyFilters';

export function CompanyList() {
  const { companies, loading, error } = useCompanies();

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-5 animate-pulse">
            <div className="h-6 bg-[var(--border)] rounded w-1/3 mb-3" />
            <div className="h-4 bg-[var(--border)] rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="card p-5 border-[var(--warning)]">
        <p className="text-sm text-[var(--warning)]">
          Failed to load from database. Showing cached data.
        </p>
      </div>
    );
  }

  return <CompanyFilters companies={companies} />;
}
