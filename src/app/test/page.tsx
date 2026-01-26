'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { companies } from '@/data/companies';

type SortOption = 'name' | 'aiLevel' | 'stage' | 'openRoles' | 'interest';
type InterestStatus = 'interested' | 'not_interested' | null;

export default function TestTablePage() {
  const [sortBy, setSortBy] = useState<SortOption>('interest');
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
      <header className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Table View Test</h1>
        <p className="text-[var(--muted)]">
          Testing table-style layout for better overview
        </p>
      </header>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('name')}>
                Company {sortBy === 'name' && '↓'}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)] cursor-pointer hover:text-[var(--foreground)]" onClick={() => setSortBy('aiLevel')}>
                AI Level {sortBy === 'aiLevel' && '↓'}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
                Location
              </th>
              <th className="text-center py-3 px-4 text-sm font-medium text-[var(--muted)]">
                Remote
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
                  <td className="py-3 px-4">
                    <Link href={`/company/${company.id}`} className="hover:text-[var(--accent-light)]">
                      <div className="font-medium">{company.name}</div>
                      <div className="text-xs text-[var(--muted)] line-clamp-1">{company.description}</div>
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-sm font-medium ${aiLevelColors[company.aiNativeLevel as keyof typeof aiLevelColors]}`}>
                      L{company.aiNativeLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-[var(--muted)]">
                    {company.headquarters.split(',')[0]}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {company.remote === 'Yes' ? (
                      <span className="text-[var(--success)]">✓</span>
                    ) : company.remote === 'Hybrid' ? (
                      <span className="text-[var(--warning)]">~</span>
                    ) : (
                      <span className="text-[var(--muted)]">×</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-[var(--muted)]">
                    {company.stage}
                  </td>
                  <td className="py-3 px-4 text-center">
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

      {/* Back link */}
      <div className="mt-6">
        <Link href="/" className="text-sm text-[var(--accent-light)] hover:underline">
          ← Back to card view
        </Link>
      </div>
    </div>
  );
}
