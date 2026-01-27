'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Company } from '@/data/types';
import { useAuth } from '@/contexts/AuthContext';
import { getAllUserTracking, setUserTracking, deleteUserTracking } from '@/lib/firebase/tracking';
import { trackEvent } from '@/lib/firebase/analytics';

type SortOption = 'recommended' | 'interest' | 'teamSize' | 'fundingStage' | 'aiLevel';
type InterestStatus = 'interested' | 'not_interested' | null;

function AiLevelText({ level }: { level: 'A' | 'B' | 'C' | 'D' }) {
  const labels = { D: 'AI-Assisted', C: 'AI Feature', B: 'AI-Core', A: 'AI-Native' };
  const colors = { D: 'text-[var(--muted)]', C: 'text-[var(--muted)]', B: 'text-[var(--accent-light)]', A: 'text-[var(--success)]' };
  return (
    <span className={`text-sm ${colors[level]}`}>
      Level {level} {labels[level]}
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

function InterestCheckbox({
  companyId,
  currentStatus,
  onStatusChange,
}: {
  companyId: string;
  currentStatus: InterestStatus;
  onStatusChange: (status: InterestStatus) => void;
}) {
  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click
    const newStatus = currentStatus === 'interested' ? null : 'interested';
    onStatusChange(newStatus);
  };

  return (
    <button
      onClick={handleClick}
      className="group/checkbox relative flex items-center justify-center w-6 h-6"
      title={currentStatus === 'interested' ? 'Remove from interested' : 'Mark as interested'}
    >
      <div
        className={`w-4 h-4 rounded border-2 transition-all flex items-center justify-center ${
          currentStatus === 'interested'
            ? 'bg-[var(--success)] border-[var(--success)]'
            : 'border-[var(--border)] group-hover/checkbox:border-[var(--success)]'
        }`}
      >
        {currentStatus === 'interested' && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6L5 9L10 3"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
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
          <div className="absolute right-0 top-full mt-1 min-w-[120px] max-w-[calc(100vw-2rem)] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
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
        className={`flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${
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
          <div className="absolute left-0 top-full mt-1 min-w-full max-w-[calc(100vw-2rem)] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
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

function MultiSelectFilter({
  label,
  values,
  options,
  onChange,
}: {
  label: string;
  values: string[];
  options: { value: string; label: string }[];
  onChange: (values: string[]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const displayLabel = values.length === 0 ? label : `${label} (${values.length})`;

  const toggleValue = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${
          values.length > 0
            ? 'border-[var(--accent)] text-[var(--foreground)]'
            : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
        }`}
      >
        <span>{displayLabel}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-full mt-1 min-w-full max-w-[calc(100vw-2rem)] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            {values.length > 0 && (
              <button
                onClick={() => onChange([])}
                className="w-full text-left px-4 py-2 text-sm text-[var(--muted)] hover:bg-[var(--card-hover)] transition-colors border-b border-[var(--border)]"
              >
                Clear all
              </button>
            )}
            {options.map((opt) => {
              const isSelected = values.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => toggleValue(opt.value)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap flex items-center gap-2.5 ${
                    isSelected ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                  }`}
                >
                  <span className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center ${
                    isSelected
                      ? 'bg-[var(--accent)] border-[var(--accent)]'
                      : 'border-[var(--border)]'
                  }`}>
                    {isSelected && (
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="white">
                        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/>
                      </svg>
                    )}
                  </span>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

type ViewMode = 'card' | 'table';

export function CompanyFilters({ companies }: { companies: Company[] }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [isMobile, setIsMobile] = useState(false);
  const [aiLevelFilter, setAiLevelFilter] = useState('');
  const [openRolesFilter, setOpenRolesFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [interestStatuses, setInterestStatuses] = useState<Record<string, InterestStatus>>({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const effectiveViewMode = isMobile ? 'card' : viewMode;

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

  // Load interest statuses from Firestore (per user)
  useEffect(() => {
    if (loading) return;
    if (!user) {
      setInterestStatuses({});
      return;
    }

    let isActive = true;
    const load = async () => {
      const tracking = await getAllUserTracking(user.uid);
      if (!isActive) return;
      const statuses: Record<string, InterestStatus> = {};
      tracking.forEach((item) => {
        if (item.status === 'interested' || item.status === 'not_interested') {
          statuses[item.companyId] = item.status;
        }
      });
      setInterestStatuses(statuses);
    };

    load();
    return () => {
      isActive = false;
    };
  }, [user, loading]);

  // Update interest status
  const updateInterestStatus = async (companyId: string, newStatus: InterestStatus) => {
    if (!user) return;

    // Optimistic update
    setInterestStatuses((prev) => {
      if (newStatus === null) {
        const { [companyId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [companyId]: newStatus };
    });

    // Persist to Firestore
    if (newStatus) {
      await setUserTracking(user.uid, companyId, { status: newStatus });
    } else {
      await deleteUserTracking(user.uid, companyId);
    }

    void trackEvent('interest_toggle', {
      company_id: companyId,
      status: newStatus ?? 'cleared',
      source: 'list_checkbox',
    });
  };

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (aiLevelFilter && company.aiNativeLevel !== aiLevelFilter) return false;
      if (openRolesFilter === 'yes' && company.openRoles.length === 0) return false;
      if (openRolesFilter === 'no' && company.openRoles.length > 0) return false;
      if (
        locationFilter.length > 0 &&
        !locationFilter.some((loc) => company.headquarters.includes(loc))
      ) {
        return false;
      }
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
    const sfBayArea = ['San Francisco', 'Palo Alto', 'Mountain View', 'Menlo Park', 'Sunnyvale', 'San Jose', 'Berkeley', 'Oakland', 'Redwood City'];

    const sorted = [...filteredCompanies].sort((a, b) => {
      switch (sortBy) {
        case 'recommended':
          // Priority 1: Interest status (interested first, not_interested last)
          const statusA = interestStatuses[a.id];
          const statusB = interestStatuses[b.id];
          const orderA = statusA === 'interested' ? 0 : statusA === 'not_interested' ? 2 : 1;
          const orderB = statusB === 'interested' ? 0 : statusB === 'not_interested' ? 2 : 1;
          if (orderA !== orderB) return orderA - orderB;

          // Priority 2: AI Level (A > B > C > D)
          const levelOrder = { A: 0, B: 1, C: 2, D: 3 };
          if (a.aiNativeLevel !== b.aiNativeLevel) {
            return levelOrder[a.aiNativeLevel] - levelOrder[b.aiNativeLevel];
          }
          // Priority 3: SF Bay Area location
          const aIsSF = sfBayArea.some(city => a.headquarters.includes(city));
          const bIsSF = sfBayArea.some(city => b.headquarters.includes(city));
          if (aIsSF && !bIsSF) return -1;
          if (!aIsSF && bIsSF) return 1;
          // Priority 4: Alphabetical
          return a.name.localeCompare(b.name);
        case 'interest':
          const statusA2 = interestStatuses[a.id];
          const statusB2 = interestStatuses[b.id];
          const orderA2 = statusA2 === 'interested' ? 0 : statusA2 === 'not_interested' ? 2 : 1;
          const orderB2 = statusB2 === 'interested' ? 0 : statusB2 === 'not_interested' ? 2 : 1;
          return orderA2 - orderB2;
        case 'teamSize':
          return parseTeamSize(b.designTeam.teamSize) - parseTeamSize(a.designTeam.teamSize);
        case 'fundingStage':
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        case 'aiLevel':
          const levelOrder3 = { A: 0, B: 1, C: 2, D: 3 };
          return levelOrder3[a.aiNativeLevel] - levelOrder3[b.aiNativeLevel];
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredCompanies, sortBy, interestStatuses]);

  const hasActiveFilters = aiLevelFilter || openRolesFilter || locationFilter.length > 0;

  const clearFilters = () => {
    setAiLevelFilter('');
    setOpenRolesFilter('');
    setLocationFilter([]);
  };

  return (
    <div>
      {/* Filter & Sort Bar */}
      <div className="space-y-2 mb-6">
        {/* Row 1: Filter chips only */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <DropdownFilter
            label="AI Level"
            value={aiLevelFilter}
            options={[
              { value: 'A', label: 'Level A: AI-Native' },
              { value: 'B', label: 'Level B: AI-Core' },
              { value: 'C', label: 'Level C: AI Feature' },
              { value: 'D', label: 'Level D: AI-Assisted' },
            ]}
            onChange={setAiLevelFilter}
            infoTooltip={
              <div className="text-xs space-y-2">
                <div><span className="font-medium text-[var(--success)]">Level A:</span> AI-Native/Zero-to-One (Anthropic, OpenAI, Cursor)</div>
                <div><span className="font-medium text-[var(--accent-light)]">Level B:</span> AI-Core on Proven Workflow (Perplexity, Harvey)</div>
                <div><span className="font-medium">Level C:</span> AI Major Feature (Notion AI, Figma AI)</div>
                <div><span className="font-medium">Level D:</span> AI Minor Feature/Assisted</div>
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
          <MultiSelectFilter
            label="Location"
            values={locationFilter}
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

        {/* Row 2: Company count + Sort + View Toggle */}
        <div className="flex items-center justify-between pl-3 pr-3">
          {/* Left: Company count */}
          <div className="text-sm font-medium text-[var(--foreground)]">
            {sortedCompanies.length === companies.length ? (
              <>{companies.length} companies</>
            ) : (
              <>
                {sortedCompanies.length} <span className="text-[var(--muted)]">of {companies.length}</span>
              </>
            )}
          </div>

          {/* Right: Sort & View Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--muted)]">Sort:</span>
              <SortDropdown
                value={sortBy}
                options={[
                  { value: 'recommended', label: 'Recommended' },
                  { value: 'interest', label: 'Interest' },
                  { value: 'teamSize', label: 'Team Size' },
                  { value: 'fundingStage', label: 'Funding Stage' },
                  { value: 'aiLevel', label: 'AI Level' },
                ]}
                onChange={(v) => setSortBy(v as SortOption)}
              />
            </div>

            {/* View toggle - Hide on mobile */}
            {!isMobile && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewMode('card')}
                  className={`p-1.5 rounded border transition-colors ${
                    viewMode === 'card'
                      ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                      : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
                  }`}
                  title="Card view"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded border transition-colors ${
                    viewMode === 'table'
                      ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                      : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
                  }`}
                  title="Table view"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Company List */}
      {effectiveViewMode === 'table' ? (
        /* Table View - Google Sheets style */
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--background)] border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Company
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Description
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Stage & Funding
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Roles
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Interest
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedCompanies.map((company) => {
                  const interest = interestStatuses[company.id];
                  const aiLevelColors = {
                    D: 'text-[var(--muted)]',
                    C: 'text-[var(--muted)]',
                    B: 'text-[var(--accent-light)]',
                    A: 'text-[var(--success)]',
                  };

                  return (
                    <tr
                      key={company.id}
                      onClick={() => {
                        void trackEvent('company_detail_click', {
                          company_id: company.id,
                          company_name: company.name,
                          source: 'table_row',
                        });
                        router.push(`/company/${company.id}`);
                      }}
                      className={`group border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors cursor-pointer ${
                        interest === 'not_interested' ? 'opacity-50' : ''
                      }`}
                    >
                      <td className="py-3 px-4 border-r border-[var(--border)]">
                        <Link
                          href={`/company/${company.id}`}
                          className="hover:text-[var(--accent-light)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            void trackEvent('company_detail_click', {
                              company_id: company.id,
                              company_name: company.name,
                              source: 'table_name_link',
                            });
                          }}
                        >
                          <div className="flex items-center gap-2 flex-nowrap">
                            <span className="font-medium text-sm whitespace-nowrap">{company.name}</span>
                            <span className={`text-xs font-medium flex-shrink-0 ${aiLevelColors[company.aiNativeLevel]}`}>
                              {company.aiNativeLevel}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors border-r border-[var(--border)]">
                        <div className="line-clamp-2">{company.description}</div>
                      </td>
                      <td className="py-3 px-4 text-xs border-r border-[var(--border)]">
                        <span className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">{company.headquarters.split(',')[0]}</span>
                        <span className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">, </span>
                        {company.remote === 'No' ? (
                          <span className="text-[var(--warning)]">On-site</span>
                        ) : company.remote === 'Hybrid' ? (
                          <span className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">Hybrid</span>
                        ) : (
                          <span className="text-[var(--success)]">Remote</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-xs border-r border-[var(--border)]">
                        <div className="text-[var(--foreground)]">{company.stage}</div>
                        {company.totalFunding && (
                          <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-0.5">{company.totalFunding}</div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center border-r border-[var(--border)]">
                        {company.openRoles.length > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--success)] text-black rounded text-xs font-medium">
                            {company.openRoles.length}
                          </span>
                        ) : (
                          <span className="text-xs text-[var(--muted)]">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <InterestCheckbox
                          companyId={company.id}
                          currentStatus={interest}
                          onStatusChange={(status) => updateInterestStatus(company.id, status)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Card View */
        <div className="space-y-4">
          {sortedCompanies.map((company) => {
            const interest = interestStatuses[company.id];
            const hasRecentFunding = isRecentFunding(company);
            return (
              <Link
                key={company.id}
                href={`/company/${company.id}`}
                className={`card block p-5 ${interest === 'not_interested' ? 'opacity-50' : ''}`}
                onClick={() => {
                  void trackEvent('company_detail_click', {
                    company_id: company.id,
                    company_name: company.name,
                    source: 'card',
                  });
                }}
              >
                <div className="space-y-3">
                  {/* Top Row: Company Name + Open Roles Only */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-medium flex-1 min-w-0">{company.name}</h2>
                    <div className="flex-shrink-0">
                      {company.openRoles.length > 0 ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--success)] text-black rounded-lg font-medium text-sm whitespace-nowrap">
                          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                          {company.openRoles.length} role{company.openRoles.length > 1 ? 's' : ''} open
                        </div>
                      ) : (
                        <span className="text-sm text-[var(--muted)] whitespace-nowrap">No open roles</span>
                      )}
                    </div>
                  </div>

                  {/* Full Width: Description */}
                  <p className="text-[var(--muted)] text-sm line-clamp-2">
                    {company.description}
                  </p>

                  {/* Full Width: AI Level + Metadata */}
                  <div className="flex items-center gap-1.5 text-sm flex-wrap">
                    <AiLevelText level={company.aiNativeLevel} />
                    <span className="text-[var(--border)]">|</span>
                    {interest === 'interested' && (
                      <>
                        <span className="text-[var(--primary)]">✨ Interested</span>
                        <span className="text-[var(--border)]">|</span>
                      </>
                    )}
                    <span className="text-[var(--muted)]">{company.headquarters}</span>
                    <span className="text-[var(--border)]">|</span>
                    <span className="text-[var(--muted)]">{company.stage}</span>
                    {company.remote === 'Yes' && (
                      <>
                        <span className="text-[var(--border)]">|</span>
                        <span className="text-[var(--muted)]">Remote OK</span>
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
              </Link>
            );
          })}
        </div>
      )}

      {sortedCompanies.length === 0 && (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies match your filters.
        </div>
      )}
    </div>
  );
}
