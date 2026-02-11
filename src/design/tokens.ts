/**
 * AIDO Design System Tokens (TypeScript)
 *
 * Contains only actively-used tokens.
 * CSS variables are the primary source of truth (globals.css + tokens.css).
 * This file provides TypeScript helpers for component logic.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Base colors (defined in globals.css as CSS variables)
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  muted: 'var(--muted)',
  mutedDim: 'var(--muted-dim)',
  border: 'var(--border)',

  // Accent colors
  accent: 'var(--accent)',
  accentLight: 'var(--accent-light)',
  primary: 'var(--primary)',

  // Semantic colors
  success: 'var(--success)',
  positive: 'var(--positive)',
  warning: 'var(--warning)',
  error: 'var(--error)',

  // Surface colors
  card: 'var(--card)',
  cardHover: 'var(--card-hover)',
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  badge: {
    variants: {
      default: 'badge',
      accent: 'badge-accent',
      success: 'badge-success',
      warning: 'badge-warning',
    },
  },
} as const;

// ============================================================================
// AI LEVEL TOKENS
// ============================================================================

export const aiLevels = {
  A: {
    label: 'AI-Native',
    color: colors.success,
    badgeClass: 'badge-success',
    badgeVariant: 'success' as const,
    textClass: 'text-[var(--success)]',
  },
  B: {
    label: 'AI-Core',
    color: colors.accentLight,
    badgeClass: 'badge-accent',
    badgeVariant: 'accent' as const,
    textClass: 'text-[var(--accent-light)]',
  },
  C: {
    label: 'AI Feature',
    color: colors.foreground,
    badgeClass: 'badge',
    badgeVariant: 'default' as const,
    textClass: 'text-[var(--foreground)]',
  },
  D: {
    label: 'AI-Assisted',
    color: colors.muted,
    badgeClass: 'badge',
    badgeVariant: 'default' as const,
    textClass: 'text-[var(--muted)]',
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get AI level configuration
 */
export function getAiLevelConfig(level: 'A' | 'B' | 'C' | 'D') {
  return aiLevels[level];
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type BadgeVariant = keyof typeof components.badge.variants;
export type AiLevel = 'A' | 'B' | 'C' | 'D';
