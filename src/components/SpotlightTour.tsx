'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

// ────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────

export interface TourStep {
  target: string;          // CSS selector
  title: string;
  description: string;
  delayMs?: number;        // delay before showing (e.g., wait for panel animation)
  scrollContainer?: string; // CSS selector of scroll container (for panel steps)
  padding?: number;        // spotlight padding around target
  tooltipAlignSelector?: string; // CSS selector of child element to align tooltip top with
}

interface SpotlightRect {
  top: number;
  left: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
}

interface SpotlightTourProps {
  steps: TourStep[];
  currentStep: number;
  onNext: () => void;
  onSkip: () => void;
  onVisible?: () => void; // called when a step becomes visible
}

// ────────────────────────────────────────────────────────────────────────────
// Tooltip position calculator (mobile-aware, viewport-clamped)
// ────────────────────────────────────────────────────────────────────────────

const TOOLTIP_HEIGHT_ESTIMATE = 200;

function getTooltipStyle(spotlight: SpotlightRect, contentTop?: number | null): React.CSSProperties {
  const viewW = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const viewH = typeof window !== 'undefined' ? window.innerHeight : 768;
  const isMobile = viewW < 768;
  const gap = 12;
  const margin = 16;

  // Mobile: pinned to bottom of visible viewport
  if (isMobile) {
    const cardEl = typeof document !== 'undefined'
      ? document.querySelector('[data-tour="first-card"]') ?? document.querySelector('.card')
      : null;
    const cardRect = cardEl?.getBoundingClientRect();
    const tooltipLeft = cardRect ? cardRect.left : 16;
    const tooltipWidth = cardRect ? cardRect.width : viewW - 32;
    // Use visualViewport for accurate mobile height (excludes browser chrome)
    const visibleH = typeof window !== 'undefined'
      ? (window.visualViewport?.height ?? window.innerHeight)
      : viewH;
    const top = visibleH - TOOLTIP_HEIGHT_ESTIMATE - 24;

    return { position: 'fixed', top, left: tooltipLeft, width: tooltipWidth };
  }

  // Desktop — all positions use fixed to match overlay divs
  const tooltipWidth = 320;
  // Use content card top if available, otherwise fall back to spotlight top
  const alignTop = contentTop ?? spotlight.top;

  // Try right side first (preferred — keeps spotlight visible)
  const spaceRight = viewW - spotlight.right;
  if (spaceRight > tooltipWidth + gap + margin && alignTop > 60) {
    const top = Math.max(margin, Math.min(alignTop, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin));
    return {
      position: 'fixed',
      top,
      left: spotlight.right + gap,
      width: tooltipWidth,
    };
  }

  // Try left side (for panel steps where spotlight is on the right half)
  const spaceLeft = spotlight.left;
  if (spaceLeft > tooltipWidth + gap + margin && alignTop > 60) {
    const top = Math.max(margin, Math.min(alignTop, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin));
    return {
      position: 'fixed',
      top,
      left: spotlight.left - tooltipWidth - gap,
      width: tooltipWidth,
    };
  }

  // Try below
  const spaceBelow = viewH - spotlight.bottom;
  if (spaceBelow > TOOLTIP_HEIGHT_ESTIMATE + gap) {
    let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
    left = Math.max(margin, Math.min(left, viewW - tooltipWidth - margin));
    const top = Math.min(spotlight.bottom + gap, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin);
    return { position: 'fixed', top, left, width: tooltipWidth };
  }

  // Try above
  const spaceAbove = spotlight.top;
  if (spaceAbove > TOOLTIP_HEIGHT_ESTIMATE + gap) {
    let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
    left = Math.max(margin, Math.min(left, viewW - tooltipWidth - margin));
    return { position: 'fixed', bottom: viewH - spotlight.top + gap, left, width: tooltipWidth };
  }

  // Last resort
  let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
  left = Math.max(margin, Math.min(left, viewW - tooltipWidth - margin));
  const top = Math.max(margin, spotlight.top + gap);
  return { position: 'fixed', top, left, width: tooltipWidth };
}

// ────────────────────────────────────────────────────────────────────────────
// Clamp spotlight to visible viewport
// ────────────────────────────────────────────────────────────────────────────

function clampToViewport(rect: SpotlightRect): SpotlightRect {
  const viewW = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const viewH = typeof window !== 'undefined' ? window.innerHeight : 768;

  const top = Math.max(0, rect.top);
  const left = Math.max(0, rect.left);
  const right = Math.min(viewW, rect.right);
  const bottom = Math.min(viewH, rect.bottom);

  return {
    top,
    left,
    width: right - left,
    height: bottom - top,
    right,
    bottom,
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Check if an element is hidden by CSS (display:none, visibility:hidden, etc.)
// ────────────────────────────────────────────────────────────────────────────

function isElementHidden(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return true;

  const style = window.getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden') return true;

  return false;
}

// ────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────

export function SpotlightTour({
  steps,
  currentStep,
  onNext,
  onSkip,
  onVisible,
}: SpotlightTourProps) {
  const [spotlight, setSpotlight] = useState<SpotlightRect | null>(null);
  const [visible, setVisible] = useState(false);
  const recalcTimerRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  // Calculate spotlight position for current step
  const calculatePosition = useCallback(() => {
    if (!step) return;

    const pad = step.padding ?? 12;

    // Find target element
    let el: Element | null = null;
    let container: Element | null = null;

    if (step.scrollContainer) {
      container = document.querySelector(step.scrollContainer);
      if (container) {
        el = container.querySelector(step.target);
      }
    } else {
      el = document.querySelector(step.target);
    }

    if (!el) {
      // Retry — element might not be rendered yet
      // Step 0 gets more retries since the company list always renders eventually
      const maxRetries = currentStep === 0 ? 20 : 5;
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current += 1;
        setTimeout(() => calculatePosition(), 300);
        return;
      }
      // Give up — auto-advance to next step
      retryCountRef.current = 0;
      onNext();
      return;
    }

    // Immediately skip if element is hidden by CSS (e.g., desktop nav on mobile)
    if (isElementHidden(el)) {
      retryCountRef.current = 0;
      onNext();
      return;
    }

    retryCountRef.current = 0;

    const viewW = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const isMobile = viewW < 768;

    // Scroll element into view
    if (container && step.scrollContainer) {
      // Panel scroll container — use instant scroll so measurement is accurate
      // (smooth scroll over long distances can take 500ms+ and cause stale positions)
      const htmlEl = el as HTMLElement;
      const containerEl = container as HTMLElement;
      const targetOffset = htmlEl.offsetTop - 80;
      containerEl.scrollTo({ top: targetOffset, behavior: 'instant' });
    } else if (isMobile) {
      // Mobile: scroll page so target is near top, leaving room for tooltip at bottom
      const rect = el.getBoundingClientRect();
      const navHeight = 56;
      const targetScrollTop = window.scrollY + rect.top - navHeight - 8;
      window.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
    }

    // Wait for reveal animation to settle, then measure
    // Panel sections use GSAP reveal (0.6s) triggered by IntersectionObserver after scroll
    const positionDelay = (step.scrollContainer || isMobile) ? 900 : 100;
    setTimeout(() => {
      // Re-query the element fresh to avoid stale closure references
      let freshEl: Element | null = null;
      if (step.scrollContainer) {
        const freshContainer = document.querySelector(step.scrollContainer);
        if (freshContainer) {
          freshEl = freshContainer.querySelector(step.target);
        }
      } else {
        freshEl = document.querySelector(step.target);
      }

      if (!freshEl) {
        if (retryCountRef.current < 3) {
          retryCountRef.current += 1;
          setTimeout(() => calculatePosition(), 300);
          return;
        }
        onNext();
        return;
      }

      const rect = freshEl.getBoundingClientRect();

      // Validate: element must be visible in viewport
      const viewH = window.innerHeight;
      if (rect.top > viewH || rect.bottom < 0 || rect.width === 0) {
        // Element not visible, retry
        if (retryCountRef.current < 3) {
          retryCountRef.current += 1;
          setTimeout(() => calculatePosition(), 300);
          return;
        }
        onNext();
        return;
      }

      const raw: SpotlightRect = {
        top: rect.top - pad,
        left: rect.left - pad,
        width: rect.width + pad * 2,
        height: rect.height + pad * 2,
        right: rect.right + pad,
        bottom: rect.bottom + pad,
      };

      setSpotlight(clampToViewport(raw));
      setVisible(true);
      onVisible?.();
    }, positionDelay);
  }, [step, currentStep, onNext, onVisible]);

  // Recalculate on step change
  useEffect(() => {
    setVisible(false);
    setSpotlight(null);
    retryCountRef.current = 0;

    const delay = step?.delayMs ?? 0;
    const timer = setTimeout(() => {
      calculatePosition();
    }, delay);

    return () => clearTimeout(timer);
  }, [currentStep, calculatePosition, step?.delayMs]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      if (recalcTimerRef.current) clearTimeout(recalcTimerRef.current);
      recalcTimerRef.current = setTimeout(calculatePosition, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (recalcTimerRef.current) clearTimeout(recalcTimerRef.current);
    };
  }, [calculatePosition]);

  if (!spotlight || !visible || !step) return null;

  // Measure tooltip alignment target at render time for accuracy
  // This runs AFTER the spotlight is positioned and the DOM is stable
  let contentTop: number | null = null;
  if (step.tooltipAlignSelector) {
    const fullSelector = `${step.target} ${step.tooltipAlignSelector}`;
    const alignEl = typeof document !== 'undefined' ? document.querySelector(fullSelector) : null;
    if (alignEl) {
      contentTop = alignEl.getBoundingClientRect().top;
    }
  }

  const tooltipStyle = getTooltipStyle(spotlight, contentTop);

  return (
    <div className="fixed inset-0 z-[10000]" style={{ pointerEvents: 'none' }}>
      {/* Rounded spotlight overlay using box-shadow */}
      <div
        className="fixed transition-all duration-300"
        style={{
          top: spotlight.top,
          left: spotlight.left,
          width: spotlight.width,
          height: spotlight.height,
          borderRadius: 12,
          boxShadow: '0 0 0 9999px rgba(0,0,0,0.75)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Invisible click-catchers for skip (4-piece frame around spotlight) */}
      <div className="fixed top-0 left-0 right-0" style={{ height: Math.max(0, spotlight.top), pointerEvents: 'auto', zIndex: 2 }} onClick={onSkip} />
      <div className="fixed left-0 right-0 bottom-0" style={{ top: spotlight.bottom, pointerEvents: 'auto', zIndex: 2 }} onClick={onSkip} />
      <div className="fixed" style={{ top: spotlight.top, left: 0, width: Math.max(0, spotlight.left), height: spotlight.height, pointerEvents: 'auto', zIndex: 2 }} onClick={onSkip} />
      <div className="fixed" style={{ top: spotlight.top, left: spotlight.right, right: 0, height: spotlight.height, pointerEvents: 'auto', zIndex: 2 }} onClick={onSkip} />

      {/* Tooltip card — uses inverted theme for contrast, z-index above box-shadow overlay */}
      <div
        className="tour-tooltip p-4 sm:p-5 rounded-xl shadow-2xl animate-fadeIn"
        style={{ ...tooltipStyle, pointerEvents: 'auto', zIndex: 3 }}
      >
        {/* Step counter */}
        <div className="flex items-center gap-1.5 mb-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-colors ${
                i === currentStep
                  ? 'w-4 bg-[var(--accent)]'
                  : i < currentStep
                    ? 'w-2 bg-[var(--accent)]/40'
                    : 'w-2 tour-tooltip-dot-inactive'
              }`}
            />
          ))}
          <span className="text-[10px] tour-tooltip-muted ml-auto">
            {currentStep + 1}/{steps.length}
          </span>
        </div>

        <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
        <p className="text-xs sm:text-sm tour-tooltip-muted leading-relaxed mb-3 sm:mb-4">
          {step.description}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={onSkip}
            className="text-xs tour-tooltip-muted hover:opacity-80 transition-opacity cursor-pointer"
          >
            Skip tour
          </button>
          <button
            onClick={onNext}
            className="text-xs px-4 py-1.5 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-light)] transition-colors cursor-pointer"
          >
            {isLastStep ? 'Got it!' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
