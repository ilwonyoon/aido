import React from 'react';

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';
  return (
    <span className={`badge ${variantClass} ${className}`.trim()}>
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
  level: number;
}

export function AiLevelBadge({ level }: AiLevelBadgeProps) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const variants: Record<number, BadgeVariant> = { 1: 'default', 2: 'default', 3: 'accent', 4: 'success' };

  return (
    <Badge variant={variants[level as keyof typeof variants]}>
      L{level}: {labels[level as keyof typeof labels]}
    </Badge>
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
