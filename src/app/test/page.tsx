'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { companies } from '@/data/companies';

type SortOption = 'name' | 'aiLevel' | 'stage' | 'openRoles' | 'interest';
type InterestStatus = 'interested' | 'not_interested' | null;
type ViewMode = 'card' | 'table';

export default function TestTablePage() {
  const [sortBy, setSortBy] = useState<SortOption>('interest');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [interestStatuses, setInterestStatuses] = useState<Record<string, InterestStatus>>({});

  // Load interest statuses
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

  // Sort companies
  const sortedCompanies = useMemo(() => {
    return [...companies].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'aiLevel':
          return b.aiNativeLevel - a.aiNativeLevel;
        case 'stage': {
          const stageOrder: Record<string, number> = {
            'Pre-seed': 1, 'Seed': 2, 'Series A': 3, 'Series B': 4,
            'Series C': 5, 'Series D': 6, 'Series E': 7, 'Series F': 8,
          };
          const getOrder = (stage: string) => {
            for (const [key, value] of Object.entries(stageOrder)) {
              if (stage.includes(key)) return value;
            }
            return 0;
          };
          return getOrder(b.stage) - getOrder(a.stage);
        }
        case 'openRoles':
          return b.openRoles.length - a.openRoles.length;
        case 'interest': {
          const statusA = interestStatuses[a.id];
          const statusB = interestStatuses[b.id];
          const orderA = statusA === 'interested' ? 0 : statusA === 'not_interested' ? 2 : 1;
          const orderB = statusB === 'interested' ? 0 : statusB === 'not_interested' ? 2 : 1;
          return orderA - orderB;
        }
        default:
          return 0;
      }
    });
  }, [companies, sortBy, interestStatuses]);

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">View Mode Test</h1>
          <p className="text-[var(--muted)]">
            Testing table vs card layout
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('card')}
            className={`p-2 rounded border transition-colors ${
              viewMode === 'card'
                ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
            }`}
            title="Card view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded border transition-colors ${
              viewMode === 'table'
                ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
            }`}
            title="Table view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {viewMode === 'table' ? (
        /* Table View - Google Sheets style */
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--background)] border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('name')}>
                    Company {sortBy === 'name' && '↓'}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                    Work Type
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('stage')}>
                    Stage {sortBy === 'stage' && '↓'}
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('openRoles')}>
                    Roles {sortBy === 'openRoles' && '↓'}
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('interest')}>
                    Interest {sortBy === 'interest' && '↓'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedCompanies.map((company) => {
                  const interest = interestStatuses[company.id];
                  const aiLevelColors = {
                    1: 'text-[var(--muted)]',
                    2: 'text-[var(--muted)]',
                    3: 'text-[var(--accent-light)]',
                    4: 'text-[var(--success)]',
                  };

                  return (
                    <tr
                      key={company.id}
                      className={`border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors ${
                        interest === 'not_interested' ? 'opacity-50' : ''
                      }`}
                    >
                      <td className="py-3 px-4 border-r border-[var(--border)]">
                        <Link href={`/company/${company.id}`} className="hover:text-[var(--accent-light)]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{company.name}</span>
                            <span className={`text-xs font-medium ${aiLevelColors[company.aiNativeLevel as keyof typeof aiLevelColors]}`}>
                              L{company.aiNativeLevel}
                            </span>
                          </div>
                          <div className="text-xs text-[var(--muted)] line-clamp-1">{company.description}</div>
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm text-[var(--muted)] border-r border-[var(--border)]">
                        {company.headquarters.split(',')[0]}
                      </td>
                      <td className="py-3 px-4 text-sm border-r border-[var(--border)]">
                        {company.remote === 'No' ? (
                          <span className="text-[var(--warning)]">On-site</span>
                        ) : company.remote === 'Hybrid' ? (
                          <span className="text-[var(--muted)]">Hybrid</span>
                        ) : (
                          <span className="text-[var(--success)]">Remote</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-[var(--muted)] border-r border-[var(--border)]">
                        {company.stage}
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
                        {interest === 'interested' ? (
                          <span className="text-[var(--primary)]">✨</span>
                        ) : interest === 'not_interested' ? (
                          <span className="text-[var(--muted)]">—</span>
                        ) : (
                          <span className="text-[var(--muted)]">·</span>
                        )}
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
                    </div>
                    <p className="text-[var(--muted)] text-sm mb-3 line-clamp-2">
                      {company.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm flex-wrap">
                      {interest === 'interested' && (
                        <>
                          <span className="text-[var(--primary)]">✨ Interested</span>
                          <span className="text-[var(--border)]">|</span>
                        </>
                      )}
                      <span className="text-[var(--muted)]">{company.headquarters}</span>
                      <span className="text-[var(--border)]">|</span>
                      <span className="text-[var(--muted)]">{company.stage}</span>
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
      )}

      {/* Back link */}
      <div className="mt-6">
        <Link href="/" className="text-sm text-[var(--accent-light)] hover:underline">
          ← Back to main page
        </Link>
      </div>
    </div>
  );
}
