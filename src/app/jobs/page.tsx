'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { companies } from '@/data/companies';
import { Company } from '@/data/types';
import { getAiLevelConfig } from '@/design/tokens';
import { CompanyLogo } from '@/components/CompanyLogo';

// ────────────────────────────────────────────────────────────────────────────
// Filter Components
// ────────────────────────────────────────────────────────────────────────────

function DropdownFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({ top: rect.bottom + 4, left: rect.left });
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
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && dropdownStyle && buttonRef.current && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className="fixed bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden"
            style={{ top: `${dropdownStyle.top}px`, left: `${dropdownStyle.left}px`, minWidth: `${buttonRef.current.offsetWidth}px`, maxWidth: 'calc(100vw - 2rem)' }}
          >
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${!value ? 'text-[var(--accent-light)]' : 'text-[var(--muted)]'}`}
            >
              {label}
            </button>
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${value === opt.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'}`}
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
      const left = spaceOnRight < dropdownWidth ? rect.right - dropdownWidth : rect.left;
      setDropdownStyle({ top: rect.bottom + 4, left: Math.max(16, left) });
    }
  }, [isOpen]);

  const toggleValue = (val: string) => {
    onChange(
      values.includes(val)
        ? values.filter((v) => v !== val)
        : [...values, val]
    );
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
            style={{ top: `${dropdownStyle.top}px`, left: `${dropdownStyle.left}px`, width: `${Math.max(buttonRef.current.offsetWidth, 180)}px`, maxWidth: 'calc(100vw - 2rem)', maxHeight: '320px' }}
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
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap flex items-center gap-2.5 ${isSelected ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'}`}
                >
                  <span className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center ${isSelected ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--border)]'}`}>
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

// ────────────────────────────────────────────────────────────────────────────
// Design Focus Indicator
// ────────────────────────────────────────────────────────────────────────────

function DesignFocus({ dwt }: { dwt: Company['designWorkType'] }) {
  const indicator = (label: string, level: 'high' | 'medium' | 'low') => {
    const dots = level === 'high' ? '\u25CF\u25CF\u25CF' : level === 'medium' ? '\u25CF\u25CF\u25CB' : '\u25CF\u25CB\u25CB';
    const color = level === 'high'
      ? 'text-[var(--success)]'
      : level === 'medium'
        ? 'text-[var(--accent-light)]'
        : 'text-[var(--muted-dim)]';
    return (
      <span className="flex items-center gap-1.5">
        <span className="text-[var(--muted)]">{label}</span>
        <span className={`${color} tracking-tight text-[10px]`}>{dots}</span>
      </span>
    );
  };

  return (
    <div className="flex gap-4 text-xs">
      {indicator('Logic', dwt.logicBehavior.level)}
      {indicator('Eval', dwt.evaluation.level)}
      {indicator('UI', dwt.interface.level)}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// View Toggle Icons
// ────────────────────────────────────────────────────────────────────────────

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? 'text-[var(--foreground)]' : 'text-[var(--muted-dim)]'}>
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? 'text-[var(--foreground)]' : 'text-[var(--muted-dim)]'}>
      <rect x="1" y="2" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="7" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="12" width="14" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Company List Row (full-width, all data)
// ────────────────────────────────────────────────────────────────────────────

function CompanyListRow({ company }: { company: Company }) {
  const config = getAiLevelConfig(company.aiNativeLevel);
  const roles = company.openRoles;

  return (
    <div className="py-6">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-1.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <CompanyLogo company={company} size={32} />
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-[var(--foreground)]">{company.name}</h3>
              <span
                className={`badge ${config.badgeClass} flex-shrink-0`}
                style={{ fontSize: '10px', padding: '1px 6px' }}
              >
                {company.aiNativeLevel}
              </span>
              <span className="text-xs text-[var(--muted)]">
                {company.headquarters} &middot; {company.stage}
                {company.remote && company.remote !== 'Unknown' && <> &middot; {company.remote}</>}
              </span>
            </div>
          </div>
        </div>
        <Link
          href={`/company/${company.id}`}
          className="text-xs text-[var(--muted)] hover:text-[var(--accent-light)] transition-colors flex-shrink-0"
        >
          Full profile &rarr;
        </Link>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] mb-4">{company.description}</p>

      {/* Two-column: Why Join / Why Not */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-4">
        {/* Why Join */}
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] mb-1.5">Why join</div>
          <ul className="space-y-1">
            {company.tracking.whyJoin.map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug">
                <span className="text-[var(--success)] flex-shrink-0 mt-px font-medium">+</span>
                <span className="text-[var(--foreground)]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Not */}
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] mb-1.5">Watch out</div>
          <ul className="space-y-1">
            {company.tracking.whyNot.map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug">
                <span className="text-[var(--warning)] flex-shrink-0 mt-px font-medium">&minus;</span>
                <span className="text-[var(--muted)]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Design Focus */}
      <div className="mb-4">
        <DesignFocus dwt={company.designWorkType} />
      </div>

      {/* Open Roles */}
      <div className="border-t border-[var(--border)] pt-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
          {roles.length} open {roles.length === 1 ? 'role' : 'roles'}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1.5">
          {roles.map((role, i) => (
            <Link
              key={i}
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[var(--accent-light)] transition-colors group"
            >
              <span>{role.title}</span>
              <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent-light)] ml-1.5">
                {role.location.split(',')[0]} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Company Card (grid view)
// ────────────────────────────────────────────────────────────────────────────

function CompanyCard({ company }: { company: Company }) {
  const config = getAiLevelConfig(company.aiNativeLevel);
  const whyJoin = company.tracking.whyJoin.slice(0, 3);
  const topWhyNot = company.tracking.whyNot[0];
  const roles = company.openRoles;

  return (
    <div className="card p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <CompanyLogo company={company} size={32} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[var(--foreground)] truncate">{company.name}</h3>
              <span
                className={`badge ${config.badgeClass} flex-shrink-0`}
                style={{ fontSize: '10px', padding: '1px 6px' }}
              >
                {company.aiNativeLevel}
              </span>
            </div>
          </div>
        </div>
        <div className="text-xs text-[var(--muted)] text-right flex-shrink-0 leading-relaxed">
          <div>{company.headquarters.split(',')[0]}</div>
          <div>{company.stage}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] mb-3 line-clamp-1">{company.description}</p>

      {/* Why Join */}
      <div className="mb-2">
        <ul className="space-y-1">
          {whyJoin.map((reason, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-snug">
              <span className="text-[var(--success)] flex-shrink-0 mt-px font-medium">+</span>
              <span className="text-[var(--foreground)]">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Why Not */}
      {topWhyNot && (
        <div className="mb-3">
          <div className="flex items-start gap-2 text-sm leading-snug">
            <span className="text-[var(--warning)] flex-shrink-0 mt-px font-medium">&minus;</span>
            <span className="text-[var(--muted)]">{topWhyNot}</span>
          </div>
        </div>
      )}

      {/* Design Focus */}
      <div className="mb-4">
        <DesignFocus dwt={company.designWorkType} />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Open Roles */}
      <div className="border-t border-[var(--border)] pt-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
          {roles.length} open {roles.length === 1 ? 'role' : 'roles'}
        </div>
        <div className="space-y-1.5">
          {roles.map((role, i) => (
            <Link
              key={i}
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm hover:text-[var(--accent-light)] transition-colors group"
            >
              <span className="truncate">{role.title}</span>
              <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent-light)] flex-shrink-0 ml-2">
                {role.location.split(',')[0]} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Link */}
      <div className="mt-3 pt-3 border-t border-[var(--border)]">
        <Link
          href={`/company/${company.id}`}
          className="text-xs text-[var(--muted)] hover:text-[var(--accent-light)] transition-colors"
        >
          Full profile &rarr;
        </Link>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Location helpers
// ────────────────────────────────────────────────────────────────────────────

const SF_BAY_PATTERN = /San Francisco|Palo Alto|Mountain View|San Jose|Menlo Park|Sunnyvale|Cupertino|Oakland|Berkeley|Redwood City|San Mateo|Santa Clara|Fremont/i;
const NY_PATTERN = /New York|NYC|Brooklyn/i;

function isSFBayArea(hq: string): boolean {
  return SF_BAY_PATTERN.test(hq);
}

// ────────────────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────────────────

export default function JobsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [aiLevelFilter, setAiLevelFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [designFocusFilter, setDesignFocusFilter] = useState('');

  const companiesWithRoles = useMemo(() => {
    const levelOrder: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
    return companies
      .filter(c => c.openRoles.length > 0)
      .sort((a, b) => {
        const diff = (levelOrder[a.aiNativeLevel] ?? 4) - (levelOrder[b.aiNativeLevel] ?? 4);
        return diff !== 0 ? diff : b.openRoles.length - a.openRoles.length;
      });
  }, []);

  const filtered = useMemo(() => {
    return companiesWithRoles.filter(company => {
      if (aiLevelFilter && company.aiNativeLevel !== aiLevelFilter) return false;

      if (locationFilter.length > 0) {
        const hq = company.headquarters;
        const matches = locationFilter.some(loc => {
          if (loc === 'sf-bay-area') return isSFBayArea(hq);
          if (loc === 'new-york') return NY_PATTERN.test(hq);
          if (loc === 'remote') return company.remote === 'Yes';
          if (loc === 'other') return !isSFBayArea(hq) && !NY_PATTERN.test(hq);
          return false;
        });
        if (!matches) return false;
      }

      if (designFocusFilter) {
        const dwt = company.designWorkType;
        if (designFocusFilter === 'logic' && dwt.logicBehavior.level !== 'high') return false;
        if (designFocusFilter === 'evaluation' && dwt.evaluation.level !== 'high') return false;
        if (designFocusFilter === 'interface' && dwt.interface.level !== 'high') return false;
      }

      return true;
    });
  }, [companiesWithRoles, aiLevelFilter, locationFilter, designFocusFilter]);

  const totalCompanies = companiesWithRoles.length;
  const totalRoles = companiesWithRoles.reduce((sum, c) => sum + c.openRoles.length, 0);
  const filteredRoles = filtered.reduce((sum, c) => sum + c.openRoles.length, 0);
  const hasActiveFilters = aiLevelFilter !== '' || locationFilter.length > 0 || designFocusFilter !== '';

  const clearFilters = () => {
    setAiLevelFilter('');
    setLocationFilter([]);
    setDesignFocusFilter('');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Where to Design AI</h1>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          {totalRoles} roles at {totalCompanies} companies — each with research-backed notes on why to join, and why not.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
          <DropdownFilter
            label="All Levels"
            value={aiLevelFilter}
            options={[
              { value: 'A', label: 'Level A \u2014 AI-Native' },
              { value: 'B', label: 'Level B \u2014 AI-Core' },
              { value: 'C', label: 'Level C \u2014 AI Feature' },
              { value: 'D', label: 'Level D \u2014 AI-Assisted' },
            ]}
            onChange={setAiLevelFilter}
          />
          <MultiSelectFilter
            label="Location"
            values={locationFilter}
            options={[
              { value: 'sf-bay-area', label: 'SF Bay Area' },
              { value: 'new-york', label: 'New York' },
              { value: 'remote', label: 'Remote' },
              { value: 'other', label: 'Other' },
            ]}
            onChange={setLocationFilter}
          />
          <DropdownFilter
            label="Design Focus"
            value={designFocusFilter}
            options={[
              { value: 'logic', label: 'Logic & Behavior \u2014 High' },
              { value: 'evaluation', label: 'Evaluation \u2014 High' },
              { value: 'interface', label: 'Interface \u2014 High' },
            ]}
            onChange={setDesignFocusFilter}
          />
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] px-2 flex-shrink-0"
            >
              Clear
            </button>
          )}
        </div>

        {/* Count + View Toggle */}
        <div className="flex items-center justify-between pl-3 pr-3">
          <div className="text-sm font-medium text-[var(--foreground)]">
            {filtered.length === totalCompanies ? (
              <>{totalCompanies} companies &middot; {totalRoles} roles</>
            ) : (
              <>
                {filtered.length} companies &middot; {filteredRoles} roles{' '}
                <span className="text-[var(--muted)]">
                  of {totalCompanies} &middot; {totalRoles}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode('list')}
              className="p-1.5 rounded transition-colors hover:bg-[var(--card-hover)]"
              aria-label="List view"
            >
              <ListIcon active={viewMode === 'list'} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className="p-1.5 rounded transition-colors hover:bg-[var(--card-hover)]"
              aria-label="Grid view"
            >
              <GridIcon active={viewMode === 'grid'} />
            </button>
          </div>
        </div>
      </div>

      {/* Company List */}
      {filtered.length === 0 ? (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies match your filters.
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="border border-[var(--border)] rounded-lg bg-[var(--card)] divide-y divide-[var(--border)]">
          {filtered.map(company => (
            <div key={company.id} className="px-5">
              <CompanyListRow company={company} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
