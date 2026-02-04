import React from 'react';
import { getAiLevelConfig, components } from '@/design/tokens';

export type BadgeVariant = keyof typeof components.badge.variants;

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantClass = components.badge.variants[variant];
  return (
    <span className={`${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

/**
 * AI Level text display (not a chip badge)
 *
 * Text-style display with semantic colors:
 * - Level A: Success (green) - AI-Native
 * - Level B: Accent (blue) - AI-Core
 * - Level C: Default (white) - AI Feature
 * - Level D: Muted (gray) - AI-Adjacent
 */
export type AiLevel = 'A' | 'B' | 'C' | 'D';

export interface AiLevelTextProps {
  level: AiLevel;
  /** Show full label (e.g., "Level A AI-Native") or just level (e.g., "Level A") */
  showLabel?: boolean;
  className?: string;
}

export function AiLevelText({ level, showLabel = true, className = '' }: AiLevelTextProps) {
  const labels: Record<AiLevel, string> = {
    A: 'AI-Native',
    B: 'AI-Core',
    C: 'AI Feature',
    D: 'AI-Adjacent',
  };

  const colorClasses: Record<AiLevel, string> = {
    A: 'text-level-a',
    B: 'text-level-b',
    C: 'text-level-c',
    D: 'text-level-d',
  };

  return (
    <span className={`font-mono font-semibold ${colorClasses[level]} ${className}`.trim()}>
      Level {level}{showLabel && ` ${labels[level]}`}
    </span>
  );
}

/**
 * @deprecated Use AiLevelText instead for text-style display
 * Legacy badge-style AI level (numeric 1-4)
 */
export interface AiLevelBadgeProps {
  level: AiLevel;
}

export function AiLevelBadge({ level }: AiLevelBadgeProps) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`badge ${config.badgeClass} whitespace-nowrap flex-shrink-0`}>
      Level {level}: {config.label}
    </span>
  );
}

export interface LevelBadgeProps {
  level: 'high' | 'medium' | 'low';
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const variants: Record<'high' | 'medium' | 'low', BadgeVariant> = {
    high: 'success',
    medium: 'accent',
    low: 'default',
  };
  const labels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };

  return <Badge variant={variants[level]}>{labels[level]}</Badge>;
}
