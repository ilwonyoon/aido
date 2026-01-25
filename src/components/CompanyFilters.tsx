'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Company } from '@/data/types';

type SortOption = 'fitScore' | 'name' | 'recentFunding' | 'aiLevel';
type FilterState = {
  aiLevel: number | null;
  hasOpenRoles: boolean | null;
  remote: string | null;
  location: string | null;
  recentFunding: boolean | null;
};

function AiLevelBadge({ level }: { level: number }) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const colors = { 1: 'badge', 2: 'badge', 3: 'badge-accent', 4: 'badge-success' };
  return (
    <span className={`badge ${colors[level as keyof typeof colors]}`}>
      L{level}: {labels[level as keyof typeof labels]}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    watching: 'badge',
    interested: 'badge-accent',
    researching: 'badge-warning',
    applied: 'badge-success',
  };
  return <span className={`badge ${colors[status] || 'badge'}`}>{status}</span>;
}

function FitScore({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[var(--muted)]">Fit</span>
      <span className="font-mono font-medium">{score}/10</span>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
        active
          ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
          : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
      }`}
    >
      {label}
    </button>
  );
}

function getLatestFundingDate(company: Company): Date | null {
  if (!company.fundingHistory || company.fundingHistory.length === 0) return null;
  const latest = company.fundingHistory[company.fundingHistory.length - 1];
  return new Date(latest.date + '-01');
}

function isRecentFunding(company: Company): boolean {
  const latestDate = getLatestFundingDate(company);
  if (!latestDate) return false;
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return latestDate >= sixMonthsAgo;
}

export function CompanyFilters({ companies }: { companies: Company[] }) {
  const [sortBy, setSortBy] = useState<SortOption>('fitScore');
  const [sortAsc, setSortAsc] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    aiLevel: null,
    hasOpenRoles: null,
    remote: null,
    location: null,
    recentFunding: null,
  });

  // Get unique locations
  const locations = useMemo(() => {
    const locs = new Set(companies.map((c) => c.headquarters.split(',')[1]?.trim() || c.headquarters));
    return Array.from(locs).sort();
  }, [companies]);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (filters.aiLevel !== null && company.aiNativeLevel !== filters.aiLevel) return false;
      if (filters.hasOpenRoles === true && company.openRoles.length === 0) return false;
      if (filters.hasOpenRoles === false && company.openRoles.length > 0) return false;
      if (filters.remote !== null && company.remote !== filters.remote) return false;
      if (filters.location !== null && !company.headquarters.includes(filters.location)) return false;
      if (filters.recentFunding === true && !isRecentFunding(company)) return false;
      return true;
    });
  }, [companies, filters]);

  // Sort companies
  const sortedCompanies = useMemo(() => {
    const sorted = [...filteredCompanies].sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'fitScore':
          comparison = b.tracking.fitScore - a.tracking.fitScore;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'aiLevel':
          comparison = b.aiNativeLevel - a.aiNativeLevel;
          break;
        case 'recentFunding':
          const dateA = getLatestFundingDate(a);
          const dateB = getLatestFundingDate(b);
          if (!dateA && !dateB) comparison = 0;
          else if (!dateA) comparison = 1;
          else if (!dateB) comparison = -1;
          else comparison = dateB.getTime() - dateA.getTime();
          break;
      }
      return sortAsc ? -comparison : comparison;
    });
    return sorted;
  }, [filteredCompanies, sortBy, sortAsc]);

  const toggleFilter = (key: keyof FilterState, value: unknown) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      aiLevel: null,
      hasOpenRoles: null,
      remote: null,
      location: null,
      recentFunding: null,
    });
  };

  const activeFilterCount = Object.values(filters).filter((v) => v !== null).length;

  return (
    <div>
      {/* Filter & Sort Bar */}
      <div className="mb-6 space-y-4">
        {/* Sort */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-[var(--muted)]">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--accent)]"
          >
            <option value="fitScore">Fit Score</option>
            <option value="name">Name</option>
            <option value="aiLevel">AI Level</option>
            <option value="recentFunding">Recent Funding</option>
          </select>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="px-2 py-1.5 text-sm bg-[var(--card)] border border-[var(--border)] rounded-lg hover:border-[var(--muted)]"
          >
            {sortAsc ? '↑ Asc' : '↓ Desc'}
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-[var(--muted)]">Filter:</span>

          {/* AI Level */}
          {[4, 3, 2, 1].map((level) => (
            <FilterChip
              key={level}
              label={`L${level}`}
              active={filters.aiLevel === level}
              onClick={() => toggleFilter('aiLevel', level)}
            />
          ))}

          <span className="text-[var(--border)]">|</span>

          {/* Open Roles */}
          <FilterChip
            label="Has Open Roles"
            active={filters.hasOpenRoles === true}
            onClick={() => toggleFilter('hasOpenRoles', true)}
          />

          {/* Recent Funding */}
          <FilterChip
            label="Recent Funding"
            active={filters.recentFunding === true}
            onClick={() => toggleFilter('recentFunding', true)}
          />

          <span className="text-[var(--border)]">|</span>

          {/* Remote */}
          <FilterChip
            label="Remote OK"
            active={filters.remote === 'Yes'}
            onClick={() => toggleFilter('remote', 'Yes')}
          />
          <FilterChip
            label="Hybrid"
            active={filters.remote === 'Hybrid'}
            onClick={() => toggleFilter('remote', 'Hybrid')}
          />

          <span className="text-[var(--border)]">|</span>

          {/* Location dropdown */}
          <select
            value={filters.location || ''}
            onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value || null }))}
            className="bg-[var(--card)] border border-[var(--border)] rounded-full px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--accent)]"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Clear */}
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 text-sm text-[var(--warning)] hover:underline"
            >
              Clear ({activeFilterCount})
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-[var(--muted)] mb-4">
        {sortedCompanies.length} of {companies.length} companies
      </div>

      {/* Company List */}
      <div className="space-y-4">
        {sortedCompanies.map((company) => (
          <Link
            key={company.id}
            href={`/company/${company.id}`}
            className="card block p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-lg font-medium">{company.name}</h2>
                  <AiLevelBadge level={company.aiNativeLevel} />
                  <StatusBadge status={company.tracking.status} />
                  {isRecentFunding(company) && (
                    <span className="badge badge-success">New Funding</span>
                  )}
                </div>
                <p className="text-[var(--muted)] text-sm mb-3 line-clamp-2">
                  {company.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--muted)] flex-wrap">
                  <span>{company.headquarters}</span>
                  <span className="text-[var(--border)]">·</span>
                  <span>{company.stage}</span>
                  {company.remote === 'Yes' && (
                    <>
                      <span className="text-[var(--border)]">·</span>
                      <span className="text-[var(--success)]">Remote OK</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                {/* Open Roles - prominently displayed */}
                {company.openRoles.length > 0 ? (
                  <div className="mb-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--success)] text-black rounded-lg font-medium text-sm">
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                      {company.openRoles.length} role{company.openRoles.length > 1 ? 's' : ''} open
                    </div>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-sm text-[var(--muted)]">No open roles</span>
                  </div>
                )}
                {/* Fit Score - smaller below */}
                <div className="text-sm text-[var(--muted)]">
                  Fit: <span className="font-mono font-medium text-[var(--foreground)]">{company.tracking.fitScore}/10</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {sortedCompanies.length === 0 && (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies match your filters.
        </div>
      )}
    </div>
  );
}
