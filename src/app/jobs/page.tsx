'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { companies } from '@/data/companies';
import { Company } from '@/data/types';

interface JobWithCompany {
  company: Company;
  role: Company['openRoles'][0];
}

// Custom dropdown filter component matching Companies page style
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
      setDropdownStyle({
        top: rect.bottom + 4,
        left: rect.left,
      });
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

// Multi-select filter for locations
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

      setDropdownStyle({
        top: rect.bottom + 4,
        left: Math.max(16, left),
      });
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
              width: `${Math.max(buttonRef.current.offsetWidth, 180)}px`,
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

export default function JobsPage() {
  const [aiLevelFilter, setAiLevelFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string[]>([]);

  // Collect all jobs with company context
  const allJobs: JobWithCompany[] = companies.flatMap((company) =>
    company.openRoles.map((role) => ({ company, role }))
  );

  // Get unique locations
  const locations = useMemo(() => {
    const locs = new Set<string>();
    allJobs.forEach(({ role }) => {
      const loc = role.location.split(',')[0].trim();
      locs.add(loc);
    });
    return Array.from(locs).sort();
  }, [allJobs]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter(({ company, role }) => {
      // AI Level filter
      if (aiLevelFilter && company.aiNativeLevel !== aiLevelFilter) return false;

      // Location filter
      if (locationFilter.length > 0) {
        const jobLoc = role.location.split(',')[0].trim();
        if (!locationFilter.includes(jobLoc)) return false;
      }

      return true;
    });
  }, [allJobs, aiLevelFilter, locationFilter]);

  // Sort by most recent
  const sortedJobs = useMemo(() => {
    return [...filteredJobs].sort((a, b) => {
      const dateA = new Date(a.company.lastUpdated || 0);
      const dateB = new Date(b.company.lastUpdated || 0);
      return dateB.getTime() - dateA.getTime();
    });
  }, [filteredJobs]);

  const totalJobs = allJobs.length;
  const companiesWithJobs = companies.filter(c => c.openRoles.length > 0).length;

  const hasActiveFilters = aiLevelFilter !== '' || locationFilter.length > 0;

  const clearFilters = () => {
    setAiLevelFilter('');
    setLocationFilter([]);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">AI design opportunities for Product Design</h1>
        <p className="text-[var(--muted)] text-sm">
          {totalJobs} open roles at {companiesWithJobs} AI-native companies
        </p>
      </div>

      {/* Filter & Sort Bar */}
      <div className="space-y-3 mb-6">
        {/* Row 1: Filter chips only */}
        <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {/* AI Level Filter */}
          <DropdownFilter
            label="All Levels"
            value={aiLevelFilter}
            options={[
              { value: 'A', label: 'Level A' },
              { value: 'B', label: 'Level B' },
              { value: 'C', label: 'Level C' },
              { value: 'D', label: 'Level D' },
            ]}
            onChange={setAiLevelFilter}
          />

          {/* Location Filter */}
          <MultiSelectFilter
            label="Location"
            values={locationFilter}
            options={locations.map(loc => ({ value: loc, label: loc }))}
            onChange={setLocationFilter}
          />

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] px-2"
            >
              Clear
            </button>
          )}
        </div>

        {/* Row 2: Job count */}
        <div className="flex items-center justify-between pl-3 pr-3">
          <div className="text-sm font-medium text-[var(--foreground)]">
            {sortedJobs.length === totalJobs ? (
              `${totalJobs} jobs`
            ) : (
              <>
                {sortedJobs.length} <span className="text-[var(--muted)]">of {totalJobs}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Job Listings - List Style */}
      {sortedJobs.length === 0 ? (
        <div className="card p-8 text-center text-[var(--muted)]">
          No jobs match your filters.
        </div>
      ) : (
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--background)] border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Company
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Level
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Compensation
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedJobs.map(({ company, role }, idx) => {
                  const aiLevelColors = {
                    D: 'text-[var(--muted)]',
                    C: 'text-[var(--muted)]',
                    B: 'text-[var(--accent-light)]',
                    A: 'text-[var(--success)]',
                  };

                  return (
                    <tr
                      key={`${company.id}-${idx}`}
                      className="group border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors"
                    >
                      <td className="py-3 px-4 border-r border-[var(--border)]">
                        <Link
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--accent-light)]"
                        >
                          <div className="font-medium text-sm">{role.title}</div>
                          {role.level && (
                            <div className="text-xs text-[var(--muted)] mt-0.5">{role.level}</div>
                          )}
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm border-r border-[var(--border)]">
                        <Link
                          href={`/company/${company.id}`}
                          className="hover:text-[var(--accent-light)]"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{company.name}</span>
                            <span className={`text-xs font-medium ${aiLevelColors[company.aiNativeLevel]}`}>
                              {company.aiNativeLevel}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-xs border-r border-[var(--border)]">
                        <span className="text-[var(--muted)]">{role.location}</span>
                      </td>
                      <td className="py-3 px-4 text-xs border-r border-[var(--border)]">
                        <span className="text-[var(--muted)]">{role.type || 'Full-time'}</span>
                      </td>
                      <td className="py-3 px-4 text-xs">
                        {role.compensation ? (
                          <span className="text-[var(--success)]">{role.compensation}</span>
                        ) : (
                          <span className="text-[var(--muted)]">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
