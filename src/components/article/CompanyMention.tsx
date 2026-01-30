'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CompanyMentionProps {
  companyId: string;
  companyName: string;
}

export function CompanyMention({ companyId, companyName }: CompanyMentionProps) {
  const imagePath = `/og-images/${companyId}-og.webp`;

  return (
    <div className="my-6 not-prose">
      <Link
        href={`/company/${companyId}`}
        className="block group"
      >
        <div className="card p-0 overflow-hidden hover:border-[var(--accent-light)] transition-all">
          {/* OG Image */}
          <div className="relative w-full aspect-video bg-[var(--card)]">
            <Image
              src={imagePath}
              alt={`${companyName} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              quality={90}
            />
          </div>
          
          {/* Company Name */}
          <div className="p-4 border-t border-[var(--border)]">
            <div className="flex items-center justify-between">
              <span className="font-medium group-hover:text-[var(--accent-light)] transition-colors">
                {companyName}
              </span>
              <span className="text-sm text-[var(--muted)]">
                View company →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
