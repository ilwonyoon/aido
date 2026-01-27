'use client';

import { useState, useEffect, useRef, useCallback, memo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCompanies } from '@/hooks/useCompanies';
import { CompanyFilters } from '@/components/CompanyFilters';
import { CompanyDetail } from '@/components/CompanyDetail';
import { getCompanyById } from '@/data/companies';
import { Company } from '@/data/types';

// Memoized company list to prevent re-render
const MemoizedCompanyList = memo(function MemoizedCompanyList({
  companies,
  onCompanyClick
}: {
  companies: Company[];
  onCompanyClick: (id: string) => void;
}) {
  return <CompanyFilters companies={companies} onCompanyClick={onCompanyClick} />;
});

function TestPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { companies, loading, error } = useCompanies();
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const companyId = searchParams.get('company');
    setSelectedCompanyId(companyId);

    // Reset scroll to top when company changes
    if (panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [searchParams]);

  const handleCompanyClick = useCallback((companyId: string) => {
    router.push(`/test?company=${companyId}`);
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCompanyId) {
        closePanel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCompanyId]);

  const closePanel = () => {
    router.push('/test');
    setSelectedCompanyId(null);
  };

  const selectedCompany = selectedCompanyId ? getCompanyById(selectedCompanyId) : null;

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-5 animate-pulse">
            <div className="h-6 bg-[var(--border)] rounded w-1/3 mb-3" />
            <div className="h-4 bg-[var(--border)] rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="card p-5 border-[var(--warning)]">
        <p className="text-sm text-[var(--warning)]">
          Failed to load from database. Showing cached data.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold">Test: Split View</h1>
          <span className="text-xs text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] rounded px-2 py-1">
            Desktop: 50% | Tablet: 60% | Mobile: Full
          </span>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Click a company to open side panel. Press ESC or click overlay to close.
        </p>
      </div>

      {/* Company List - Full Width */}
      <div className="w-full">
        <MemoizedCompanyList companies={companies} onCompanyClick={handleCompanyClick} />
      </div>

      {/* Side Panel - Overlay on top */}
      {selectedCompanyId && selectedCompany && (
        <div
          ref={panelRef}
          className={`
            fixed
            right-0 top-0 bottom-0
            w-full md:w-[60%] lg:w-1/2
            bg-[var(--background)]
            border-l border-[var(--border)]
            z-50
            overflow-y-auto
            animate-slideInRight
          `}
        >
          {/* Header - Sticky */}
          <div className="sticky top-0 z-10 h-14 bg-[var(--background)] flex items-center px-4 gap-2">
            <button
              onClick={closePanel}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors p-2"
              title="Close (ESC)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <button
              onClick={() => window.open(`/company/${selectedCompany.id}`, '_blank')}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors p-2"
              title="Open in full page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
          </div>

          {/* Company Detail Content */}
          <div className="px-6 pb-6 panel-view">
            <CompanyDetail company={selectedCompany} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function TestPage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <TestPageContent />
    </Suspense>
  );
}
