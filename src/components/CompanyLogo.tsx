'use client';

import { useState } from 'react';

function getDomain(website: string): string {
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`);
    return url.hostname.replace('www.', '');
  } catch {
    return website.replace(/^https?:\/\//, '').replace('www.', '').split('/')[0];
  }
}

interface CompanyLogoProps {
  website: string;
  name: string;
  size?: number;
}

export function CompanyLogo({ website, name, size = 32 }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);
  const domain = getDomain(website);
  const token = 'pk_ZjMwtG5fQ_-Dt-Km4EjHHg'; // Same token as CompanyCardLayouts

  if (failed || !token) {
    return (
      <div
        className="flex-shrink-0 rounded-md bg-[var(--card-hover)] flex items-center justify-center text-[var(--muted)] font-medium"
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  const src = `https://img.logo.dev/${domain}?token=${token}&size=${size * 2}&format=png`;

  return (
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="flex-shrink-0 rounded-md"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
