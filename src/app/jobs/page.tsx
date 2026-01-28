'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { companies } from '@/data/companies';
import { Company } from '@/data/types';

interface JobWithCompany {
  company: Company;
  role: Company['openRoles'][0];
}

export default function JobsPage() {
  const [aiLevelFilter, setAiLevelFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list');

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
      <div className="space-y-2 mb-6">
        {/* Row 1: Filter chips only */}
        <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {/* AI Level Filter */}
          <select
            value={aiLevelFilter}
            onChange={(e) => setAiLevelFilter(e.target.value)}
            className="flex items-center gap-2 bg-[var(--card)] border rounded-md px-4 py-1.5 text-sm cursor-pointer transition-colors border-[var(--border)] text-[var(--foreground)] hover:border-[var(--muted)]"
          >
            <option value="">All Levels</option>
            <option value="A">Level A</option>
            <option value="B">Level B</option>
            <option value="C">Level C</option>
            <option value="D">Level D</option>
          </select>

          {/* Location Filter */}
          <select
            multiple
            value={locationFilter}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, option => option.value);
              setLocationFilter(selected);
            }}
            className="flex items-center gap-2 bg-[var(--card)] border rounded-md px-4 py-1.5 text-sm cursor-pointer transition-colors border-[var(--border)] text-[var(--foreground)] hover:border-[var(--muted)]"
            size={1}
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
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
