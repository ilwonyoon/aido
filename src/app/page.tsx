'use client';

import { useState, useEffect, useRef, useCallback, memo, Suspense } from 'react';
import { flushSync } from 'react-dom';
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

function HomePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { companies, loading, error } = useCompanies();
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [showCompanyNameInHeader, setShowCompanyNameInHeader] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [closingCompany, setClosingCompany] = useState<Company | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const companyNameObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initial load from URL
    const companyId = searchParams.get('company');
    setSelectedCompanyId(companyId);
  }, [searchParams]);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const companyId = params.get('company');
      setSelectedCompanyId(companyId);
      setIsFullWidth(false);

      if (panelRef.current) {
        panelRef.current.scrollTop = 0;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const closePanel = useCallback(() => {
    const currentCompany = selectedCompanyId ? getCompanyById(selectedCompanyId) : null;

    // Force synchronous state update to ensure animation class is applied
    flushSync(() => {
      setClosingCompany(currentCompany);
      setIsClosing(true);
    });

    setTimeout(() => {
      window.history.pushState({}, '', '/');
      setSelectedCompanyId(null);
      setIsFullWidth(false);
      setIsClosing(false);
      setClosingCompany(null);
    }, 300); // Match animation duration
  }, [selectedCompanyId]);

  const handleCompanyClick = useCallback((companyId: string) => {
    // Use window.history to avoid router re-render
    window.history.pushState({}, '', `/?company=${companyId}`);
    setSelectedCompanyId(companyId);
    setIsFullWidth(false);

    // Reset panel scroll
    if (panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, []);

  const toggleFullWidth = useCallback(() => {
    setIsFullWidth(prev => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    if (!selectedCompanyId) return;
    const url = `${window.location.origin}/company/${selectedCompanyId}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }

    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  }, [selectedCompanyId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCompanyId) {
        closePanel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCompanyId, closePanel]);

  // Prevent background scroll when panel is open
  useEffect(() => {
    const html = document.documentElement;

    if (selectedCompanyId) {
      // Add class to html element to prevent scroll
      html.classList.add('panel-open');
    } else {
      // Remove class when panel closes
      html.classList.remove('panel-open');
    }

    return () => {
      html.classList.remove('panel-open');
    };
  }, [selectedCompanyId]);

  // Observer for company name in content to show/hide in header
  useEffect(() => {
    if (!selectedCompanyId) {
      setShowCompanyNameInHeader(false);
      return;
    }

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const companyNameElement = panelRef.current?.querySelector('h1');

      if (companyNameElement) {
        companyNameObserverRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Show name in header when main title is NOT visible
              setShowCompanyNameInHeader(!entry.isIntersecting);
            });
          },
          {
            root: panelRef.current,
            threshold: 0,
            rootMargin: '-56px 0px 0px 0px' // Account for sticky header
          }
        );

        companyNameObserverRef.current.observe(companyNameElement);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      companyNameObserverRef.current?.disconnect();
    };
  }, [selectedCompanyId]);

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
      {/* Main Content - Disable when panel is open */}
      <div
        ref={mainContentRef}
        className={selectedCompanyId ? 'pointer-events-none select-none md:pointer-events-auto md:select-auto' : ''}
        style={selectedCompanyId ? { filter: 'blur(0px)' } : undefined}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Where to Design AI</h1>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            AI-native companies with research-backed notes on why to join, and why not.
          </p>
        </div>

        {/* Company List - Full Width */}
        <div className="w-full">
          <MemoizedCompanyList key="company-list" companies={companies} onCompanyClick={handleCompanyClick} />
        </div>
      </div>

      {/* Side Panel - Overlay on top */}
      {(selectedCompanyId || isClosing) && (closingCompany || selectedCompany) && (() => {
        const displayCompany = closingCompany || selectedCompany;
        if (!displayCompany) return null;

        return (
        <div
          ref={panelRef}
          className={`
            fixed
            right-0 top-0 bottom-0
            ${isFullWidth ? 'w-full' : 'w-full md:w-[60%] lg:w-1/2'}
            bg-[var(--background)]
            border-l border-[var(--border)]
            z-[100]
            overflow-y-auto
            ${isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}
          `}
          style={{
            overscrollBehavior: 'contain',
            transition: isClosing ? 'none' : 'width 0.3s ease'
          }}
        >
          {/* Header - Sticky */}
          <div className="sticky top-0 z-[110] h-14 bg-[var(--background)] border-b border-[var(--border)] flex items-center px-4 gap-3">
            <button
              onClick={closePanel}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors p-2 -ml-2"
              title="Close (ESC)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <button
              onClick={toggleFullWidth}
              className="hidden md:block text-[var(--muted)] hover:text-[var(--foreground)] transition-colors p-2"
              title={isFullWidth ? "Exit full width" : "Expand to full width"}
            >
              {isFullWidth ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              )}
            </button>
            <div className="flex-1 min-w-0">
              <h2 className={`text-sm font-semibold truncate transition-opacity duration-200 ${
                showCompanyNameInHeader ? 'opacity-100' : 'opacity-0'
              }`}>
                {displayCompany.name}
              </h2>
            </div>
            <div className="relative">
              <button
                onClick={handleShare}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors p-2"
                title="Share company page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
              {showCopied && (
                <div className="absolute right-0 top-full mt-2 px-3 py-2 text-xs bg-[var(--card)] border border-[var(--border)] rounded-lg whitespace-nowrap shadow-lg animate-toastIn">
                  🔗 Link copied to your clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Company Detail Content */}
          <div className="pt-4 px-4 sm:px-6 pb-6 panel-view">
            <CompanyDetail company={displayCompany} />
          </div>
        </div>
        );
      })()}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
