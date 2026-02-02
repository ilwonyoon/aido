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
  maxHeight?: number;      // cap spotlight height
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
// Tooltip position calculator
// ────────────────────────────────────────────────────────────────────────────

function getTooltipStyle(
  spotlight: SpotlightRect
): React.CSSProperties {
  const tooltipWidth = 320;
  const gap = 16;
  const viewW = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const viewH = typeof window !== 'undefined' ? window.innerHeight : 768;

  const spaceBelow = viewH - spotlight.bottom;
  const spaceRight = viewW - spotlight.right;

  // Try right side first (desktop side panel steps)
  if (spaceRight > tooltipWidth + gap + 16 && spotlight.top > 60) {
    return {
      position: 'fixed',
      top: Math.max(16, spotlight.top),
      left: spotlight.right + gap,
      width: tooltipWidth,
    };
  }

  // Try below
  if (spaceBelow > 180) {
    let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
    left = Math.max(16, Math.min(left, viewW - tooltipWidth - 16));
    return {
      position: 'fixed',
      top: spotlight.bottom + gap,
      left,
      width: tooltipWidth,
    };
  }

  // Fall back to above
  let left = spotlight.left + spotlight.width / 2 - tooltipWidth / 2;
  left = Math.max(16, Math.min(left, viewW - tooltipWidth - 16));
  return {
    position: 'fixed',
    bottom: viewH - spotlight.top + gap,
    left,
    width: tooltipWidth,
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

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  // Calculate spotlight position for current step
  const calculatePosition = useCallback(() => {
    if (!step) return;

    const pad = step.padding ?? 12;

    // Find target element
    let el: Element | null = null;

    if (step.scrollContainer) {
      const container = document.querySelector(step.scrollContainer);
      if (container) {
        el = container.querySelector(step.target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    } else {
      el = document.querySelector(step.target);
    }

    if (!el) {
      // Target not found — skip this step
      setSpotlight(null);
      return;
    }

    // Small delay for scroll to settle
    const positionDelay = step.scrollContainer ? 400 : 50;
    setTimeout(() => {
      const rect = el!.getBoundingClientRect();
      const height = step.maxHeight
        ? Math.min(rect.height + pad * 2, step.maxHeight)
        : rect.height + pad * 2;

      setSpotlight({
        top: rect.top - pad,
        left: rect.left - pad,
        width: rect.width + pad * 2,
        height,
        right: rect.right + pad,
        bottom: rect.top - pad + height,
      });
      setVisible(true);
    }, positionDelay);
  }, [step]);

  // Recalculate on step change
  useEffect(() => {
    setVisible(false);
    setSpotlight(null);

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

      {/* Spotlight border ring */}
      <div
        className="fixed rounded-lg border-2 border-[var(--accent)]/60 transition-all duration-300"
        style={{
          top: spotlight.top,
          left: spotlight.left,
          width: spotlight.width,
          height: spotlight.height,
          pointerEvents: 'none',
        }}
      />

      {/* Tooltip card */}
      <div
        className="card p-5 shadow-2xl animate-fadeIn border border-[var(--accent)]/30"
        style={{ ...tooltipStyle, pointerEvents: 'auto' }}
      >
        {/* Step counter */}
        <div className="flex items-center gap-2 mb-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-colors ${
                i === currentStep
                  ? 'w-4 bg-[var(--accent)]'
                  : i < currentStep
                    ? 'w-2 bg-[var(--accent)]/40'
                    : 'w-2 bg-[var(--border)]'
              }`}
            />
          ))}
          <span className="text-[10px] text-[var(--muted)] ml-auto">
            {currentStep + 1}/{steps.length}
          </span>
        </div>

        <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
          {step.description}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={onSkip}
            className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
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
