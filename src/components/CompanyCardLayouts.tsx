'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Company, AI_TYPE_LABELS, MARKET_LABELS, INDUSTRY_LABELS } from '@/data/types';
import { getAiLevelConfig } from '@/design/tokens';
import { CompanyLogo } from './CompanyLogo';

// ────────────────────────────────────────────────────────────────────────────
// Design Focus Indicator
// ────────────────────────────────────────────────────────────────────────────

export function DesignFocus({ dwt }: { dwt: Company['designWorkType'] }) {
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

export function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? 'text-[var(--foreground)]' : 'text-[var(--muted-dim)]'}>
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ListIcon({ active }: { active: boolean }) {
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

export function CompanyListRow({
  company,
  onCompanyClick
}: {
  company: Company;
  onCompanyClick?: (companyId: string) => void;
}) {
  const config = getAiLevelConfig(company.aiNativeLevel);
  const roles = company.openRoles;

  const handleClick = (e: React.MouseEvent) => {
    if (onCompanyClick) {
      e.preventDefault();
      onCompanyClick(company.id);
    }
  };

  return (
    <div className="py-6 cursor-pointer" onClick={handleClick}>
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
          onClick={(e) => e.stopPropagation()}
        >
          Full profile &rarr;
        </Link>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] mb-3">{company.description}</p>

      {/* Tags */}
      {(company.aiTypes?.length || company.markets?.length || company.industries?.length) ? (
        <div className="flex flex-wrap gap-1 mb-4">
          {company.aiTypes?.map(t => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {AI_TYPE_LABELS[t]}
            </span>
          ))}
          {company.markets?.map(m => (
            <span key={m} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {MARKET_LABELS[m]}
            </span>
          ))}
          {company.industries?.map(i => (
            <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {INDUSTRY_LABELS[i]}
            </span>
          ))}
        </div>
      ) : null}

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
      <div className="pt-3">
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
              onClick={(e) => e.stopPropagation()}
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

export function CompanyCard({
  company,
  onCompanyClick
}: {
  company: Company;
  onCompanyClick?: (companyId: string) => void;
}) {
  const config = getAiLevelConfig(company.aiNativeLevel);
  const whyJoin = company.tracking.whyJoin.slice(0, 3);
  const topWhyNot = company.tracking.whyNot[0];
  const roles = company.openRoles;

  const handleClick = (e: React.MouseEvent) => {
    if (onCompanyClick) {
      e.preventDefault();
      onCompanyClick(company.id);
    }
  };

  return (
    <div className="card p-5 flex flex-col cursor-pointer" onClick={handleClick}>
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
      <p className="text-sm text-[var(--muted)] mb-2">{company.description}</p>

      {/* Tags */}
      {(company.aiTypes?.length || company.markets?.length || company.industries?.length) ? (
        <div className="flex flex-wrap gap-1 mb-3">
          {company.aiTypes?.map(t => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {AI_TYPE_LABELS[t]}
            </span>
          ))}
          {company.markets?.map(m => (
            <span key={m} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {MARKET_LABELS[m]}
            </span>
          ))}
          {company.industries?.map(i => (
            <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--card-hover)] text-[var(--muted)]">
              {INDUSTRY_LABELS[i]}
            </span>
          ))}
        </div>
      ) : null}

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
      <div className="pt-3">
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
              onClick={(e) => e.stopPropagation()}
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
      <div className="mt-3 pt-3">
        <Link
          href={`/company/${company.id}`}
          className="text-xs text-[var(--muted)] hover:text-[var(--accent-light)] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Full profile &rarr;
        </Link>
      </div>
    </div>
  );
}
