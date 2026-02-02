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
}

// ────────────────────────────────────────────────────────────────────────────
// Tooltip position calculator (mobile-aware, viewport-clamped)
// ────────────────────────────────────────────────────────────────────────────

const TOOLTIP_HEIGHT_ESTIMATE = 200;

function getTooltipStyle(spotlight: SpotlightRect): React.CSSProperties {
  const viewW = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const viewH = typeof window !== 'undefined' ? window.innerHeight : 768;
  const isMobile = viewW < 768;
  const tooltipWidth = isMobile ? Math.min(viewW - 32, 320) : 320;
  const gap = 12;
  const margin = 16;

  const spaceBelow = viewH - spotlight.bottom;
  const spaceAbove = spotlight.top;

  // Mobile: always center horizontally, prefer below
  if (isMobile) {
    const left = Math.max(margin, (viewW - tooltipWidth) / 2);

    if (spaceBelow > 160) {
      const top = Math.min(spotlight.bottom + gap, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin);
      return { position: 'fixed', top, left, width: tooltipWidth };
    }
    if (spaceAbove > 160) {
      return { position: 'fixed', bottom: viewH - spotlight.top + gap, left, width: tooltipWidth };
    }
    // Fallback: overlay at bottom of screen
    return { position: 'fixed', bottom: margin, left, width: tooltipWidth };
  }

  // Desktop: try right side first (for panel steps)
  const spaceRight = viewW - spotlight.right;
  if (spaceRight > tooltipWidth + gap + margin && spotlight.top > 60) {
    // Clamp top so tooltip doesn't go above or below viewport
    const idealTop = spotlight.top;
    const top = Math.max(margin, Math.min(idealTop, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin));
    return {
      position: 'fixed',
      top,
      left: spotlight.right + gap,
      width: tooltipWidth,
    };
  }

  // Desktop: try below
  if (spaceBelow > 180) {
    let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
    left = Math.max(margin, Math.min(left, viewW - tooltipWidth - margin));
    const top = Math.min(spotlight.bottom + gap, viewH - TOOLTIP_HEIGHT_ESTIMATE - margin);
    return { position: 'fixed', top, left, width: tooltipWidth };
  }

  // Desktop: fall back to above
  let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
  left = Math.max(margin, Math.min(left, viewW - tooltipWidth - margin));
  return { position: 'fixed', bottom: viewH - spotlight.top + gap, left, width: tooltipWidth };
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
// Component
// ────────────────────────────────────────────────────────────────────────────

export function SpotlightTour({
  steps,
  currentStep,
  onNext,
  onSkip,
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
      // Retry a few times (element might not be rendered yet)
      if (retryCountRef.current < 5) {
        retryCountRef.current += 1;
        setTimeout(() => calculatePosition(), 300);
        return;
      }
      // Give up — auto-advance to next step
      retryCountRef.current = 0;
      onNext();
      return;
    }

    retryCountRef.current = 0;

    // Scroll element into view inside its scroll container
    if (container && step.scrollContainer) {
      const htmlEl = el as HTMLElement;
      const containerEl = container as HTMLElement;
      const targetOffset = htmlEl.offsetTop - 80; // 80px offset for header
      containerEl.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }

    // Wait for scroll to settle, then measure
    const positionDelay = step.scrollContainer ? 500 : 100;
    setTimeout(() => {
      if (!el) return;
      const rect = el.getBoundingClientRect();

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
    }, positionDelay);
  }, [step, onNext]);

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

  const tooltipStyle = getTooltipStyle(spotlight);

  return (
    <div className="fixed inset-0 z-[10000]" style={{ pointerEvents: 'none' }}>
      {/* 4-piece overlay frame (allows clicks through the spotlight hole) */}
      {/* Top */}
      <div
        className="fixed left-0 right-0 bg-black/60 transition-all duration-300"
        style={{
          top: 0,
          height: Math.max(0, spotlight.top),
          pointerEvents: 'auto',
        }}
        onClick={onSkip}
      />
      {/* Bottom */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-black/60 transition-all duration-300"
        style={{
          top: spotlight.bottom,
          pointerEvents: 'auto',
        }}
        onClick={onSkip}
      />
      {/* Left */}
      <div
        className="fixed bg-black/60 transition-all duration-300"
        style={{
          top: spotlight.top,
          left: 0,
          width: Math.max(0, spotlight.left),
          height: spotlight.height,
          pointerEvents: 'auto',
        }}
        onClick={onSkip}
      />
      {/* Right */}
      <div
        className="fixed bg-black/60 transition-all duration-300"
        style={{
          top: spotlight.top,
          left: spotlight.right,
          right: 0,
          height: spotlight.height,
          pointerEvents: 'auto',
        }}
        onClick={onSkip}
      />

      {/* Tooltip card — uses inverted theme for contrast */}
      <div
        className="tour-tooltip p-4 sm:p-5 rounded-xl shadow-2xl animate-fadeIn"
        style={{ ...tooltipStyle, pointerEvents: 'auto' }}
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
