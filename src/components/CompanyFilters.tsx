'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Company } from '@/data/types';

type SortOption = 'interest' | 'teamSize' | 'fundingStage' | 'aiLevel';
type InterestStatus = 'interested' | 'not_interested' | null;

function AiLevelText({ level }: { level: number }) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const colors = { 1: 'text-[var(--muted)]', 2: 'text-[var(--muted)]', 3: 'text-[var(--accent-light)]', 4: 'text-[var(--success)]' };
  return (
    <span className={`text-sm ${colors[level as keyof typeof colors]}`}>
      L{level} {labels[level as keyof typeof labels]}
    </span>
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

function SortDropdown({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[var(--foreground)] cursor-pointer"
      >
        <span>{selectedOption?.label}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform text-[var(--muted)] ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-1 min-w-[120px] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${
                  value === opt.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function DropdownFilter({
  label,
  value,
  options,
  onChange,
  infoTooltip,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  infoTooltip?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors ${
          value
            ? 'border-[var(--accent)] text-[var(--foreground)]'
            : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
        }`}
      >
        <span>{selectedOption?.label || label}</span>
        {infoTooltip && (
          <div className="relative group/info">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-[var(--muted)]">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
            </svg>
            <div className="absolute left-0 top-full mt-2 w-72 p-3 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all z-[60] text-left">
              {infoTooltip}
            </div>
          </div>
        )}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-full mt-1 min-w-full bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors ${
                !value ? 'text-[var(--accent-light)]' : 'text-[var(--muted)]'
              }`}
            >
              {label}
            </button>
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${
                  value === opt.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function CompanyFilters({ companies }: { companies: Company[] }) {
  const [sortBy, setSortBy] = useState<SortOption>('interest');
  const [aiLevelFilter, setAiLevelFilter] = useState('');
  const [openRolesFilter, setOpenRolesFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [interestStatuses, setInterestStatuses] = useState<Record<string, InterestStatus>>({});

  // Get unique locations (city level, prioritize SF Bay Area)
  const locations = useMemo(() => {
    const locs = new Set<string>();
    companies.forEach((c) => {
      const city = c.headquarters.split(',')[0]?.trim();
      if (city) locs.add(city);
    });
    const sorted = Array.from(locs).sort((a, b) => {
      // Prioritize SF Bay Area cities
      const sfBayArea = ['San Francisco', 'Palo Alto', 'Mountain View', 'Menlo Park', 'Sunnyvale', 'San Jose'];
      const aIsSF = sfBayArea.some(city => a.includes(city));
      const bIsSF = sfBayArea.some(city => b.includes(city));
      if (aIsSF && !bIsSF) return -1;
      if (!aIsSF && bIsSF) return 1;
      return a.localeCompare(b);
    });
    return sorted;
  }, [companies]);

  // Load interest statuses from localStorage
  useEffect(() => {
    const statuses: Record<string, InterestStatus> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('interest_')) {
        const companyId = key.replace('interest_', '');
        const value = localStorage.getItem(key);
        if (value === 'interested' || value === 'not_interested') {
          statuses[companyId] = value;
        }
      }
    }
    setInterestStatuses(statuses);

    // Listen for storage changes
    const handleStorage = () => {
      const newStatuses: Record<string, InterestStatus> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('interest_')) {
          const companyId = key.replace('interest_', '');
          const value = localStorage.getItem(key);
          if (value === 'interested' || value === 'not_interested') {
            newStatuses[companyId] = value;
          }
        }
      }
      setInterestStatuses(newStatuses);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (aiLevelFilter && company.aiNativeLevel !== parseInt(aiLevelFilter)) return false;
      if (openRolesFilter === 'yes' && company.openRoles.length === 0) return false;
      if (openRolesFilter === 'no' && company.openRoles.length > 0) return false;
      if (locationFilter && !company.headquarters.includes(locationFilter)) return false;
      return true;
    });
  }, [companies, aiLevelFilter, openRolesFilter, locationFilter]);

  // Parse team size to number for sorting
  const parseTeamSize = (size?: string): number => {
    if (!size) return 0;
    const match = size.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  // Get funding stage order (higher = later stage)
  const getFundingStageOrder = (stage: string): number => {
    const stageOrder: Record<string, number> = {
      'Pre-seed': 1, 'Seed': 2, 'Series A': 3, 'Series B': 4,
      'Series C': 5, 'Series D': 6, 'Series E': 7, 'Series F': 8,
    };
    for (const [key, value] of Object.entries(stageOrder)) {
      if (stage.includes(key)) return value;
    }
    return 0;
  };

  // Sort companies
  const sortedCompanies = useMemo(() => {
    const sorted = [...filteredCompanies].sort((a, b) => {
      switch (sortBy) {
        case 'interest':
          const statusA = interestStatuses[a.id];
          const statusB = interestStatuses[b.id];
          const orderA = statusA === 'interested' ? 0 : statusA === 'not_interested' ? 2 : 1;
          const orderB = statusB === 'interested' ? 0 : statusB === 'not_interested' ? 2 : 1;
          return orderA - orderB;
        case 'teamSize':
          return parseTeamSize(b.designTeam.teamSize) - parseTeamSize(a.designTeam.teamSize);
        case 'fundingStage':
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        case 'aiLevel':
          return b.aiNativeLevel - a.aiNativeLevel;
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredCompanies, sortBy, interestStatuses]);

  const hasActiveFilters = aiLevelFilter || openRolesFilter || locationFilter;

  const clearFilters = () => {
    setAiLevelFilter('');
    setOpenRolesFilter('');
    setLocationFilter('');
  };

  return (
    <div>
      {/* Filter & Sort Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Left: Filters */}
        <div className="flex items-center gap-2">
          <DropdownFilter
            label="AI Level"
            value={aiLevelFilter}
            options={[
              { value: '4', label: 'L4: AI Native' },
              { value: '3', label: 'L3: AI Core' },
              { value: '2', label: 'L2: AI Major' },
              { value: '1', label: 'L1: AI Feature' },
            ]}
            onChange={setAiLevelFilter}
            infoTooltip={
              <div className="text-xs space-y-2">
                <div><span className="font-medium text-[var(--success)]">L4:</span> AI is the product (Anthropic, OpenAI)</div>
                <div><span className="font-medium text-[var(--accent-light)]">L3:</span> AI is core differentiator (Cursor, Perplexity)</div>
                <div><span className="font-medium">L2:</span> AI is major feature (Notion AI, Figma AI)</div>
                <div><span className="font-medium">L1:</span> AI is minor feature</div>
              </div>
            }
          />
          <DropdownFilter
            label="Open Roles"
            value={openRolesFilter}
            options={[
              { value: 'yes', label: 'Hiring' },
              { value: 'no', label: 'Not Hiring' },
            ]}
            onChange={setOpenRolesFilter}
          />
          <DropdownFilter
            label="Location"
            value={locationFilter}
            options={locations.map(loc => ({ value: loc, label: loc }))}
            onChange={setLocationFilter}
          />
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Right: Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--muted)]">Sort:</span>
          <SortDropdown
            value={sortBy}
            options={[
              { value: 'interest', label: 'Interest' },
              { value: 'teamSize', label: 'Team Size' },
              { value: 'fundingStage', label: 'Funding Stage' },
              { value: 'aiLevel', label: 'AI Level' },
            ]}
            onChange={(v) => setSortBy(v as SortOption)}
          />
        </div>
      </div>

      {/* Company List */}
      <div className="space-y-4">
        {sortedCompanies.map((company) => {
          const interest = interestStatuses[company.id];
          const hasRecentFunding = isRecentFunding(company);
          return (
            <Link
              key={company.id}
              href={`/company/${company.id}`}
              className={`card block p-5 ${interest === 'not_interested' ? 'opacity-50' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-medium">{company.name}</h2>
                    <span className="text-[var(--border)]">|</span>
                    <AiLevelText level={company.aiNativeLevel} />
                  </div>
                  <p className="text-[var(--muted)] text-sm mb-3 line-clamp-2">
                    {company.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm flex-wrap">
                    <span className="text-[var(--muted)]">{company.headquarters}</span>
                    <span className="text-[var(--border)]">|</span>
                    <span className="text-[var(--muted)]">{company.stage}</span>
                    {company.remote === 'Yes' && (
                      <>
                        <span className="text-[var(--border)]">|</span>
                        <span className="text-[var(--success)]">Remote OK</span>
                      </>
                    )}
                    {interest === 'interested' && (
                      <>
                        <span className="text-[var(--border)]">|</span>
                        <span className="text-[var(--accent-light)]">Interested</span>
                      </>
                    )}
                    {hasRecentFunding && (
                      <>
                        <span className="text-[var(--border)]">|</span>
                        <span className="text-[var(--warning)]">New Funding</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  {company.openRoles.length > 0 ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--success)] text-black rounded-lg font-medium text-sm">
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                      {company.openRoles.length} role{company.openRoles.length > 1 ? 's' : ''} open
                    </div>
                  ) : (
                    <span className="text-sm text-[var(--muted)]">No open roles</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {sortedCompanies.length === 0 && (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies match your filters.
        </div>
      )}
    </div>
  );
}
