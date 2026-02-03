/**
 * AIDO Design System Tokens
 *
 * Single source of truth for all design decisions.
 * Extracted from company list and company detail pages.
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
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
    jbMono: 'var(--font-jb-mono)',
  },

  // Optical scale factor for JB Mono (monospace → visual parity)
  jbScale: 0.9,

  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 17px (custom base)
    lg: '1.125rem',   // 19px
    xl: '1.25rem',    // 21px
    '2xl': '1.5rem',  // 26px
    '3xl': '1.875rem', // 32px
    '4xl': '2.25rem', // 38px
  },

  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  // Consistent spacing scale
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  full: '9999px',  // Fully rounded (pills)
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
} as const;

// ============================================================================
// TRANSITION TOKENS
// ============================================================================

export const transitions = {
  fast: '0.15s ease',
  base: '0.2s ease',
  slow: '0.3s ease',

  // Specific properties
  colors: 'color 0.15s ease, background 0.15s ease, border-color 0.15s ease',
  transform: 'transform 0.2s ease',
  all: 'all 0.15s ease',
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 40,
  dropdownMenu: 50,
  overlay: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  // Badge variants
  badge: {
    base: {
      className: 'badge',
      padding: '0.25rem 0.625rem',
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.medium,
      borderRadius: borderRadius.full,
    },
    variants: {
      default: 'badge',
      accent: 'badge-accent',
      success: 'badge-success',
      warning: 'badge-warning',
    },
  },

  // Card variants
  card: {
    base: {
      className: 'card',
      padding: spacing[5],
      borderRadius: borderRadius.md,
      transition: transitions.colors,
    },
    hover: 'card:hover',
  },

  // Button variants
  button: {
    base: {
      padding: '0.5rem 0.75rem',
      borderRadius: borderRadius.md,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      transition: transitions.colors,
    },
    variants: {
      primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]',
      secondary: 'bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-hover)]',
      ghost: 'text-[var(--muted)] hover:text-[var(--foreground)]',
    },
  },

  // Dropdown/Filter chips (pill-shaped buttons)
  filterChip: {
    base: {
      className: 'flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap flex-shrink-0',
    },
    states: {
      default: 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]',
      active: 'border-[var(--accent)] text-[var(--foreground)]',
    },
  },

  // Dropdown menu
  dropdownMenu: {
    container: {
      className: 'fixed bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden',
    },
    item: {
      base: 'w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap',
      active: 'text-[var(--accent-light)]',
      default: 'text-[var(--foreground)]',
    },
  },

  // Table
  table: {
    container: {
      className: 'border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]',
    },
    header: {
      className: 'bg-[var(--background)] border-b border-[var(--border)]',
      cell: 'text-left py-3 px-4 text-sm font-medium text-[var(--muted)]',
    },
    body: {
      row: 'group border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors',
      cell: 'py-3 px-4 border-r border-[var(--border)]',
    },
  },

  // Section title (uppercase labels)
  sectionTitle: {
    className: 'section-title',
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: typography.letterSpacing.wider,
    color: colors.muted,
  },
} as const;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layout = {
  // Container max widths
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    content: '800px',    // For text content
    reading: '680px',    // For optimal reading
  },

  // Grid gaps
  gridGap: {
    xs: spacing[2],
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
    xl: spacing[8],
  },

  // Section spacing
  sectionSpacing: {
    xs: spacing[8],
    sm: spacing[12],
    md: spacing[16],
    lg: spacing[20],
    xl: spacing[24],
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animations = {
  slideInRight: {
    keyframes: 'slideInRight',
    duration: '0.3s',
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  fadeIn: {
    keyframes: 'fadeIn',
    duration: '0.2s',
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// AI LEVEL SPECIFIC TOKENS
// ============================================================================

export const aiLevels = {
  A: {
    label: 'AI-Native',
    color: colors.success,
    badgeClass: 'badge-success',
    textClass: 'text-[var(--success)]',
  },
  B: {
    label: 'AI-Core',
    color: colors.accentLight,
    badgeClass: 'badge-accent',
    textClass: 'text-[var(--accent-light)]',
  },
  C: {
    label: 'AI Feature',
    color: colors.foreground,
    badgeClass: 'badge',
    textClass: 'text-[var(--foreground)]',
  },
  D: {
    label: 'AI-Assisted',
    color: colors.muted,
    badgeClass: 'badge',
    textClass: 'text-[var(--muted)]',
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get badge className for a component variant
 */
export function getBadgeClass(variant: keyof typeof components.badge.variants): string {
  return components.badge.variants[variant];
}

/**
 * Get button className for a button variant
 */
export function getButtonClass(variant: keyof typeof components.button.variants): string {
  return components.button.variants[variant];
}

/**
 * Get AI level configuration
 */
export function getAiLevelConfig(level: 'A' | 'B' | 'C' | 'D') {
  return aiLevels[level];
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ZIndexToken = keyof typeof zIndex;
export type BadgeVariant = keyof typeof components.badge.variants;
export type ButtonVariant = keyof typeof components.button.variants;
export type AiLevel = 'A' | 'B' | 'C' | 'D';
