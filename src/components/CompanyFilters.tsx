'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Company, InterestStatus, Category, CATEGORY_LABELS, FundingStageCategory, FUNDING_STAGE_LABELS, normalizeFundingStage } from '@/data/types';
import { useAuth } from '@/contexts/AuthContext';
import { getAllUserTracking, setUserTracking, deleteUserTracking } from '@/lib/firebase/tracking';
import { trackEvent } from '@/lib/firebase/analytics';
import { getAiLevelConfig, type AiLevel } from '@/design/tokens';
import { CompanyCard, CompanyListRow, GridIcon, ListIcon } from '@/components/CompanyCardLayouts';
import { getCompanyQualityScore, parseFundingAmount } from '@/lib/companyScoring';

type SortOption = 'recommended' | 'teamSize' | 'fundingStage' | 'fundingSize' | 'aiLevel';

function AiLevelText({ level }: { level: AiLevel }) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`text-sm ${config.textClass}`}>
      Level {level} {config.label}
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
    e.preventDefault();

    // Cycle through tiers: null -> tier_0 -> tier_1 -> not_interested -> null
    let newStatus: InterestStatus = null;
    if (currentStatus === null) {
      newStatus = 'tier_0';
    } else if (currentStatus === 'tier_0') {
      newStatus = 'tier_1';
    } else if (currentStatus === 'tier_1') {
      newStatus = 'not_interested';
    } else {
      newStatus = null;
    }

    onStatusChange(newStatus);
  };

  const getStatusDisplay = () => {
    if (currentStatus === 'tier_0') return { text: '🥇', color: 'bg-[var(--success)]' };
    if (currentStatus === 'tier_1') return { text: '🥈', color: 'bg-[var(--accent)]' };
    if (currentStatus === 'not_interested') return { text: '—', color: 'bg-[var(--muted)]' };
    return { text: '', color: 'border-[var(--border)]' };
  };

  const status = getStatusDisplay();

  return (
    <button
      onClick={handleClick}
      className="group/checkbox flex items-center justify-center w-11 h-11"
      title={
        currentStatus === 'tier_0' ? 'Tier 0 (Top Priority)' :
        currentStatus === 'tier_1' ? 'Tier 1 (Good to Apply)' :
        currentStatus === 'not_interested' ? 'Not Interested' :
        'Click to set tier'
      }
      type="button"
    >
      <div
        className={`w-6 h-6 rounded flex items-center justify-center text-xs transition-all ${
          currentStatus
            ? `${status.color} text-black`
            : 'border-2 border-[var(--border)] group-hover/checkbox:border-[var(--accent)]'
        }`}
      >
        {status.text}
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: rect.bottom + 4,
        left: rect.left,
      });

      const handleScroll = () => setIsOpen(false);
      window.addEventListener('scroll', handleScroll, true);
      return () => window.removeEventListener('scroll', handleScroll, true);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
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

      {isOpen && dropdownStyle && buttonRef.current && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className="fixed bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden"
            style={{
              top: `${dropdownStyle.top}px`,
              left: `${dropdownStyle.left}px`,
              minWidth: `${buttonRef.current.offsetWidth}px`,
              maxWidth: 'calc(100vw - 2rem)'
            }}
          >
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ top: number; left: number } | null>(null);
  const displayLabel = values.length === 0 ? label : `${label} (${values.length})`;

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = Math.max(buttonRef.current.offsetWidth, 180);
      const spaceOnRight = window.innerWidth - rect.left;

      // If dropdown would overflow on right, align to button's right edge
      const left = spaceOnRight < dropdownWidth ? rect.right - dropdownWidth : rect.left;

      setDropdownStyle({
        top: rect.bottom + 4,
        left: Math.max(16, left), // Ensure at least 16px from left edge
      });

      const handleScroll = () => setIsOpen(false);
      window.addEventListener('scroll', handleScroll, true);
      return () => window.removeEventListener('scroll', handleScroll, true);
    }
  }, [isOpen]);

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
        ref={buttonRef}
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

      {isOpen && dropdownStyle && buttonRef.current && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className="fixed bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-y-auto"
            style={{
              top: `${dropdownStyle.top}px`,
              left: `${dropdownStyle.left}px`,
              minWidth: `${Math.max(buttonRef.current.offsetWidth, 200)}px`,
              maxWidth: 'calc(100vw - 2rem)',
              maxHeight: '320px'
            }}
          >
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

type ViewMode = 'grid' | 'list';

interface CompanyFiltersProps {
  companies: Company[];
  onCompanyClick?: (companyId: string) => void;
}

export function CompanyFilters({ companies, onCompanyClick }: CompanyFiltersProps) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [isMobile, setIsMobile] = useState(false);
  const [reviewStatusFilter, setReviewStatusFilter] = useState('');
  const [fundingStageFilter, setFundingStageFilter] = useState<FundingStageCategory[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<Category[]>([]);
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [openRolesToggle, setOpenRolesToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [interestStatuses, setInterestStatuses] = useState<Record<string, InterestStatus>>({});
  // Store initial interest statuses for sorting (doesn't change until page reload)
  const [initialInterestStatuses, setInitialInterestStatuses] = useState<Record<string, InterestStatus>>({});
  // Track previous interest statuses to detect changes
  const prevInterestStatusesRef = useRef<Record<string, InterestStatus>>({});
  const [visibleCount, setVisibleCount] = useState(30);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const effectiveViewMode = isMobile ? 'grid' : viewMode;

  // Memoized event handlers
  const handleSortChange = useCallback((v: string) => {
    setSortBy(v as SortOption);
  }, []);

  const handleViewModeList = useCallback(() => {
    setViewMode('list');
  }, []);

  const handleViewModeGrid = useCallback(() => {
    setViewMode('grid');
  }, []);

  // SF Bay Area cities to consolidate
  const sfBayAreaCities = ['San Francisco', 'Palo Alto', 'Mountain View', 'Menlo Park', 'Sunnyvale', 'San Jose', 'Berkeley', 'Oakland', 'Redwood City', 'Foster City'];

  // Get unique locations (consolidate SF Bay Area, New York, and Remote/Hybrid)
  const locations = useMemo(() => {
    const locs = new Set<string>();
    let hasSFBayArea = false;
    let hasNewYork = false;
    let hasRemote = false;
    let hasHybrid = false;

    companies.forEach((c) => {
      // Track remote/hybrid status
      if (c.remote === 'Yes') hasRemote = true;
      if (c.remote === 'Hybrid') hasHybrid = true;

      const city = c.headquarters.split(',')[0]?.trim();
      if (city) {
        // Check if it's a SF Bay Area city
        if (sfBayAreaCities.some(sfCity => city.includes(sfCity))) {
          hasSFBayArea = true;
        } else if (city.includes('New York')) {
          hasNewYork = true;
        } else {
          locs.add(city);
        }
      }
    });

    const sorted = Array.from(locs).sort((a, b) => a.localeCompare(b));

    // Add consolidated locations at the top (reverse order since unshift)
    if (hasNewYork) {
      sorted.unshift('New York');
    }
    if (hasSFBayArea) {
      sorted.unshift('SF Bay Area');
    }
    if (hasHybrid) {
      sorted.unshift('Hybrid');
    }
    if (hasRemote) {
      sorted.unshift('Remote');
    }

    return sorted;
  }, [companies]);

  // Get Category options with counts
  const categoryOptions = useMemo(() => {
    const counts: Record<Category, number> = {} as Record<Category, number>;
    companies.forEach(c => {
      if (c.category) {
        counts[c.category] = (counts[c.category] || 0) + 1;
      }
    });
    return (Object.keys(CATEGORY_LABELS) as Category[])
      .filter(cat => counts[cat] > 0)
      .map(cat => ({ value: cat, label: `${CATEGORY_LABELS[cat]} (${counts[cat]})` }));
  }, [companies]);

  // Get Funding Stage options with counts
  const fundingStageOptions = useMemo(() => {
    const counts: Record<FundingStageCategory, number> = {} as Record<FundingStageCategory, number>;
    companies.forEach(c => {
      const cat = normalizeFundingStage(c.stage);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return (Object.keys(FUNDING_STAGE_LABELS) as FundingStageCategory[])
      .filter(cat => counts[cat] > 0)
      .map(cat => ({ value: cat, label: `${FUNDING_STAGE_LABELS[cat]} (${counts[cat]})` }));
  }, [companies]);

  // Load interest statuses from Firestore (per user)
  useEffect(() => {
    if (loading) return;
    if (!user) {
      setInterestStatuses({});
      setInitialInterestStatuses({});
      return;
    }

    let isActive = true;
    const load = async () => {
      const tracking = await getAllUserTracking(user.uid);
      if (!isActive) return;
      const statuses: Record<string, InterestStatus> = {};
      tracking.forEach((item) => {
        if (item.status === 'tier_0' || item.status === 'tier_1' || item.status === 'not_interested') {
          statuses[item.companyId] = item.status;
        }
      });
      setInterestStatuses(statuses);
      // Store initial statuses for sorting (only set once on load)
      setInitialInterestStatuses(statuses);
    };

    load();

    // Reload when page becomes visible (e.g., returning from company detail)
    // Debounce to prevent rapid re-fetches when switching tabs quickly
    let lastLoadTime = Date.now();
    const handleVisibilityChange = () => {
      if (!document.hidden && user && Date.now() - lastLoadTime > 5000) {
        lastLoadTime = Date.now();
        load();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isActive = false;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user, loading]);

  // Auto-switch filter when user reviews a company (from unfiltered/all view)
  useEffect(() => {
    if (reviewStatusFilter !== '' && reviewStatusFilter !== 'all') {
      prevInterestStatusesRef.current = interestStatuses;
      return;
    }

    // Find newly added or changed statuses
    const prev = prevInterestStatusesRef.current;
    const changedCompanies = Object.entries(interestStatuses).filter(
      ([companyId, status]) => status && prev[companyId] !== status
    );

    // Only auto-switch on single-company changes (user action),
    // not bulk changes (initial Firestore load)
    if (changedCompanies.length === 1) {
      const newStatus = changedCompanies[0][1];
      if (newStatus) {
        setReviewStatusFilter(newStatus);
      }
    }

    // Update ref
    prevInterestStatusesRef.current = interestStatuses;
  }, [interestStatuses, reviewStatusFilter]);

  // Progressive loading: observe sentinel and load more on scroll
  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 30);
        }
      },
      { rootMargin: '600px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(30);
  }, [reviewStatusFilter, fundingStageFilter, categoryFilter, locationFilter, openRolesToggle, sortBy, searchQuery]);

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
    const query = searchQuery.toLowerCase().trim();
    return companies.filter((company) => {
      // Search Filter
      if (query) {
        const nameMatch = company.name.toLowerCase().includes(query);
        const descMatch = company.description.toLowerCase().includes(query);
        const hqMatch = company.headquarters.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !hqMatch) return false;
      }

      // Review Status Filter (empty string or 'all' = show all)
      const status = interestStatuses[company.id];
      if (reviewStatusFilter === 'not_yet_reviewed' && status) return false;
      if (reviewStatusFilter === 'tier_0' && status !== 'tier_0') return false;
      if (reviewStatusFilter === 'tier_1' && status !== 'tier_1') return false;
      if (reviewStatusFilter === 'not_interested' && status !== 'not_interested') return false;

      // Open Roles Toggle
      if (openRolesToggle && company.openRoles.length === 0) return false;

      // Funding Stage Filter
      if (fundingStageFilter.length > 0) {
        const companyStage = normalizeFundingStage(company.stage);
        if (!fundingStageFilter.includes(companyStage)) return false;
      }

      // Category Filter
      if (categoryFilter.length > 0) {
        if (!categoryFilter.includes(company.category)) return false;
      }

      // Location Filter with Remote, Hybrid, SF Bay Area, and New York handling
      if (locationFilter.length > 0) {
        const hasMatch = locationFilter.some((loc) => {
          if (loc === 'Remote') return company.remote === 'Yes';
          if (loc === 'Hybrid') return company.remote === 'Hybrid';
          if (loc === 'SF Bay Area') {
            return sfBayAreaCities.some(sfCity => company.headquarters.includes(sfCity));
          }
          if (loc === 'New York') {
            return company.headquarters.includes('New York');
          }
          return company.headquarters.includes(loc);
        });
        if (!hasMatch) return false;
      }

      return true;
    });
  }, [companies, searchQuery, reviewStatusFilter, interestStatuses, openRolesToggle, fundingStageFilter, categoryFilter, locationFilter]);

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

  // Sort companies (uses initial interest statuses so sorting doesn't change when toggling interest)
  const sortedCompanies = useMemo(() => {
    const sfBayArea = ['San Francisco', 'Palo Alto', 'Mountain View', 'Menlo Park', 'Sunnyvale', 'San Jose', 'Berkeley', 'Oakland', 'Redwood City'];

    const sorted = [...filteredCompanies].sort((a, b) => {
      switch (sortBy) {
        case 'recommended':
          // Priority 1: SF Bay Area + Open Positions
          const aIsSF = sfBayArea.some(city => a.headquarters.includes(city));
          const bIsSF = sfBayArea.some(city => b.headquarters.includes(city));
          const aHasRoles = a.openRoles.length > 0;
          const bHasRoles = b.openRoles.length > 0;
          const aScore = (aIsSF ? 2 : 0) + (aHasRoles ? 1 : 0);
          const bScore = (bIsSF ? 2 : 0) + (bHasRoles ? 1 : 0);
          if (aScore !== bScore) return bScore - aScore;

          // Priority 2: Tier status (tier_0 > tier_1 > not_reviewed > not_interested)
          // Use initialInterestStatuses so sort order doesn't change until page reload
          const statusA = initialInterestStatuses[a.id];
          const statusB = initialInterestStatuses[b.id];
          const orderA = statusA === 'tier_0' ? 0 : statusA === 'tier_1' ? 1 : statusA === 'not_interested' ? 3 : 2;
          const orderB = statusB === 'tier_0' ? 0 : statusB === 'tier_1' ? 1 : statusB === 'not_interested' ? 3 : 2;
          if (orderA !== orderB) return orderA - orderB;

          // Priority 3: Company Quality Score (funding + founders + open roles)
          const qualityA = getCompanyQualityScore(a);
          const qualityB = getCompanyQualityScore(b);
          if (qualityA !== qualityB) return qualityB - qualityA;

          // Priority 4: Alphabetical
          return a.name.localeCompare(b.name);
        case 'teamSize':
          const teamSizeDiff = parseTeamSize(b.designTeam.teamSize) - parseTeamSize(a.designTeam.teamSize);
          if (teamSizeDiff !== 0) return teamSizeDiff;
          // Secondary: Funding stage
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        case 'fundingStage':
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        case 'fundingSize':
          const fundingSizeDiff = parseFundingAmount(b.totalFunding) - parseFundingAmount(a.totalFunding);
          if (fundingSizeDiff !== 0) return fundingSizeDiff;
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        case 'aiLevel':
          const levelOrder3 = { A: 0, B: 1, C: 2, D: 3 };
          const aiLevelDiff = levelOrder3[a.aiNativeLevel] - levelOrder3[b.aiNativeLevel];
          if (aiLevelDiff !== 0) return aiLevelDiff;
          // Secondary: Funding stage
          return getFundingStageOrder(b.stage) - getFundingStageOrder(a.stage);
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredCompanies, sortBy, initialInterestStatuses]);

  const visibleCompanies = useMemo(() => {
    return sortedCompanies.slice(0, visibleCount);
  }, [sortedCompanies, visibleCount]);

  // Count not reviewed companies
  const notReviewedCount = useMemo(() => {
    return companies.filter(c => !interestStatuses[c.id]).length;
  }, [companies, interestStatuses]);

  const hasActiveFilters = searchQuery !== '' || reviewStatusFilter !== '' || fundingStageFilter.length > 0 || categoryFilter.length > 0 || locationFilter.length > 0 || openRolesToggle;

  const clearFilters = () => {
    setSearchQuery('');
    setReviewStatusFilter('');
    setFundingStageFilter([]);
    setCategoryFilter([]);
    setLocationFilter([]);
    setOpenRolesToggle(false);
  };

  return (
    <div>
      {/* Filter & Sort Bar */}
      <div className="space-y-2 mb-6">
        {/* Row 1: Search + Filter chips */}
        <div className="flex items-center gap-1 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {/* Search: icon-only on mobile, inline input on desktop */}
          <div className="relative flex-shrink-0">
            {/* Mobile: single container, width animates from icon-size to full input */}
            <div
              className={`md:hidden relative overflow-hidden rounded-full bg-[var(--card)] border transition-all duration-200 ease-out cursor-text ${
                searchExpanded
                  ? 'w-[180px] border-[var(--accent)]'
                  : searchQuery
                    ? 'w-9 border-[var(--accent)]'
                    : 'w-9 border-[var(--border)]'
              }`}
              style={{ height: '36px' }}
              onClick={() => {
                if (!searchExpanded) {
                  setSearchExpanded(true);
                  setTimeout(() => searchInputRef.current?.focus(), 200);
                }
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-[11px] top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => { if (!searchQuery) setSearchExpanded(false); }}
                placeholder="Search..."
                className={`absolute inset-0 bg-transparent pl-8 pr-8 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none transition-opacity duration-200 ${
                  searchExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />
              {searchQuery && searchExpanded && (
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => { e.stopPropagation(); setSearchQuery(''); searchInputRef.current?.focus(); }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
            {/* Desktop: always show input */}
            <div className="hidden md:block relative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-[140px] focus:w-[200px] transition-all bg-[var(--card)] border border-[var(--border)] rounded-full pl-8 pr-3 py-1.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
          </div>
          <DropdownFilter
            label="Review Status"
            value={reviewStatusFilter}
            options={[
              { value: 'not_yet_reviewed', label: 'Not Yet Reviewed' },
              { value: 'tier_0', label: '🥇 Tier 0' },
              { value: 'tier_1', label: '🥈 Tier 1' },
              { value: 'not_interested', label: 'Not Interested' },
            ]}
            onChange={setReviewStatusFilter}
          />
          <MultiSelectFilter
            label="Funding Stage"
            values={fundingStageFilter}
            options={fundingStageOptions}
            onChange={(vals) => setFundingStageFilter(vals as FundingStageCategory[])}
          />
          <MultiSelectFilter
            label="Category"
            values={categoryFilter}
            options={categoryOptions}
            onChange={(vals) => setCategoryFilter(vals as Category[])}
          />
          <MultiSelectFilter
            label="Location"
            values={locationFilter}
            options={locations.map(loc => ({ value: loc, label: loc }))}
            onChange={setLocationFilter}
          />
          <button
            onClick={() => setOpenRolesToggle(prev => !prev)}
            className={`flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${
              openRolesToggle
                ? 'border-[var(--accent)] text-[var(--foreground)]'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
            }`}
          >
            Hiring
          </button>
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
              <>
                {companies.length} companies
                {notReviewedCount > 0 && (
                  <span className="text-[var(--muted)] ml-2">({notReviewedCount} not reviewed)</span>
                )}
              </>
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
                  { value: 'teamSize', label: 'Team Size' },
                  { value: 'fundingStage', label: 'Funding Stage' },
                  { value: 'fundingSize', label: 'Funding Size' },
                  { value: 'aiLevel', label: 'AI Level' },
                ]}
                onChange={handleSortChange}
              />
            </div>

            {/* View toggle - Hide on mobile */}
            {!isMobile && (
              <div className="flex items-center gap-1">
                <button
                  onClick={handleViewModeList}
                  className="p-1.5 rounded transition-colors hover:bg-[var(--card-hover)]"
                  aria-label="List view"
                >
                  <ListIcon active={viewMode === 'list'} />
                </button>
                <button
                  onClick={handleViewModeGrid}
                  className="p-1.5 rounded transition-colors hover:bg-[var(--card-hover)]"
                  aria-label="Grid view"
                >
                  <GridIcon active={viewMode === 'grid'} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Company List */}
      {sortedCompanies.length === 0 ? (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies match your filters.
        </div>
      ) : effectiveViewMode === 'grid' ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visibleCompanies.map(company => (
              <CompanyCard key={company.id} company={company} onCompanyClick={onCompanyClick} />
            ))}
          </div>
          {visibleCount < sortedCompanies.length && (
            <div ref={loadMoreRef} className="h-10" />
          )}
        </>
      ) : (
        <>
          <div className="border border-[var(--border)] rounded-lg bg-[var(--card)] divide-y divide-[var(--border)]">
            {visibleCompanies.map(company => (
              <CompanyListRow key={company.id} company={company} onCompanyClick={onCompanyClick} />
            ))}
          </div>
          {visibleCount < sortedCompanies.length && (
            <div ref={loadMoreRef} className="h-10" />
          )}
        </>
      )}
    </div>
  );
}
