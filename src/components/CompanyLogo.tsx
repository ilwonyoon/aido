'use client';

import { useState } from 'react';
import { Company } from '@/data/types';
import { getAiLevelConfig } from '@/design/tokens';

function getDomain(website: string): string {
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`);
    return url.hostname.replace('www.', '');
  } catch {
    return website.replace(/^https?:\/\//, '').replace('www.', '').split('/')[0];
  }
}

const LOGO_DEV_TOKEN = 'pk_ZjMwtG5fQ_-Dt-Km4EjHHg';

// Flexible props: accepts either Company object or individual props
type CompanyLogoProps =
  | { company: Company; size?: number }
  | { website: string; name: string; aiNativeLevel?: Company['aiNativeLevel']; size?: number };

export function CompanyLogo(props: CompanyLogoProps) {
  const [errored, setErrored] = useState(false);
  const size = props.size ?? 32;

  // Extract values from either props pattern
  let website: string;
  let name: string;
  let aiNativeLevel: Company['aiNativeLevel'] | undefined;

  if ('company' in props) {
    website = props.company.website;
    name = props.company.name;
    aiNativeLevel = props.company.aiNativeLevel;
  } else {
    website = props.website;
    name = props.name;
    aiNativeLevel = props.aiNativeLevel;
  }

  const domain = getDomain(website);
  const config = aiNativeLevel ? getAiLevelConfig(aiNativeLevel) : null;

  // AI-level-based fallback colors (if aiNativeLevel provided)
  const fallbackStyle = config?.badgeClass === 'badge-success'
    ? 'bg-[rgba(80,227,194,0.12)] text-[var(--success)]'
    : config?.badgeClass === 'badge-accent'
      ? 'bg-[rgba(0,112,243,0.12)] text-[var(--accent-light)]'
      : 'bg-[var(--card-hover)] text-[var(--muted)]';

  if (!domain || errored) {
    return (
      <div
        className={`rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0 ${fallbackStyle}`}
        style={{ width: size, height: size }}
      >
        {name[0]}
      </div>
    );
  }

  return (
    <img
      src={`https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=${size * 2}&format=png`}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="rounded-lg flex-shrink-0 bg-white"
      onError={() => setErrored(true)}
    />
  );
}
