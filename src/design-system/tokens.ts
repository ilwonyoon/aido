/**
 * AIDO Design System Tokens
 *
 * Design tokens extracted from globals.css for programmatic access.
 * These tokens define the visual language of the application.
 *
 * Usage: Import tokens for consistent styling across components.
 * Note: For CSS, always use CSS variables (var(--token-name)) directly.
 */

// =============================================================================
// COLOR TOKENS
// =============================================================================

export const colors = {
  dark: {
    background: '#000000',
    foreground: '#ededed',
    muted: '#888888',
    border: '#333333',
    accent: '#0070f3',
    accentLight: '#3291ff',
    success: '#50e3c2',
    warning: '#f5a623',
    error: '#e00',
    card: '#111111',
    cardHover: '#1a1a1a',
  },
  light: {
    background: '#ffffff',
    foreground: '#171717',
    muted: '#666666',
    border: '#e5e5e5',
    accent: '#0070f3',
    accentLight: '#0061d5',
    success: '#0d9488',
    warning: '#d97706',
    error: '#dc2626',
    card: '#fafafa',
    cardHover: '#f5f5f5',
  },
} as const;

/**
 * Semantic color usage guide:
 * - accent/accentLight: Primary actions, links, interactive elements
 * - success: Positive signals, interested status, green flags, "Hiring" badges
 * - warning: Caution signals, red flags, alerts
 * - error: Critical issues (rarely used)
 * - muted: Secondary text, disabled states, metadata
 * - border: Separators, card borders
 * - card/cardHover: Contained content areas
 */
export const semanticColors = {
  action: 'var(--accent)',
  actionHover: 'var(--accent-light)',
  positive: 'var(--success)',
  caution: 'var(--warning)',
  negative: 'var(--error)',
  textPrimary: 'var(--foreground)',
  textSecondary: 'var(--muted)',
  surface: 'var(--card)',
  surfaceHover: 'var(--card-hover)',
  divider: 'var(--border)',
} as const;

// =============================================================================
// TYPOGRAPHY TOKENS
// =============================================================================

export const typography = {
  /** Base font size - larger than typical 16px for better readability */
  baseFontSize: '17px',

  /** Primary font family */
  fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  /** Monospace font for code, data, funding amounts */
  fontFamilyMono: 'var(--font-geist-mono), ui-monospace, monospace',

  /** Base line height for comfortable reading */
  lineHeight: 1.6,

  /** Font weights */
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

/**
 * Typography scale (Tailwind classes)
 *
 * Page title:     text-2xl font-semibold (or text-3xl for detail pages)
 * Section title:  section-title class (0.75rem, uppercase, muted)
 * Card heading:   text-lg font-medium
 * Body:           default (17px base)
 * Small:          text-sm
 * Extra small:    text-xs (metadata, hints)
 * Monospace:      font-mono (data, numbers)
 */
export const typographyScale = {
  pageTitle: 'text-2xl font-semibold',
  pageTitleLarge: 'text-3xl font-semibold',
  sectionTitle: 'section-title', // CSS class from globals.css
  cardHeading: 'text-lg font-medium',
  body: '', // default 17px
  small: 'text-sm',
  extraSmall: 'text-xs',
  mono: 'font-mono',
} as const;

// =============================================================================
// SPACING TOKENS
// =============================================================================

/**
 * Spacing scale (Tailwind units)
 * 1 unit = 4px (0.25rem)
 */
export const spacing = {
  /** 4px */
  xs: '1',    // 0.25rem
  /** 8px */
  sm: '2',    // 0.5rem
  /** 12px */
  md: '3',    // 0.75rem
  /** 16px */
  lg: '4',    // 1rem
  /** 20px */
  xl: '5',    // 1.25rem
  /** 24px */
  '2xl': '6', // 1.5rem
  /** 32px */
  '3xl': '8', // 2rem
  /** 40px */
  '4xl': '10', // 2.5rem
} as const;

/**
 * Common spacing patterns
 */
export const spacingPatterns = {
  /** Gap between major sections */
  sectionGap: 'mb-10',
  /** Gap between content blocks */
  blockGap: 'mb-6',
  /** Card internal padding */
  cardPadding: 'p-5',
  /** Small card padding */
  cardPaddingSmall: 'p-4',
  /** List item spacing */
  listSpacing: 'space-y-4',
  /** Tight list spacing */
  listSpacingTight: 'space-y-2',
  /** Grid gap (tight) */
  gridGapTight: 'gap-4',
  /** Grid gap (loose) */
  gridGapLoose: 'gap-8',
  /** Inline element gap */
  inlineGap: 'gap-2',
  /** Inline element gap (tight) */
  inlineGapTight: 'gap-1',
} as const;

// =============================================================================
// BORDER & RADIUS TOKENS
// =============================================================================

export const borders = {
  /** Default border radius for cards, buttons, inputs */
  radius: '8px',
  /** Fully rounded for badges, pills */
  radiusFull: '9999px',
  /** Small radius for inner elements */
  radiusSmall: '4px',
  /** Border width */
  width: '1px',
} as const;

export const borderClasses = {
  card: 'rounded-lg', // 8px
  badge: 'rounded-full', // 9999px
  button: 'rounded-lg', // 8px
  input: 'rounded-lg', // 8px
} as const;

// =============================================================================
// TRANSITION TOKENS
// =============================================================================

export const transitions = {
  /** Fast transition for interactive elements */
  fast: '0.15s ease',
  /** Default transition */
  default: '0.2s ease',
  /** Slow transition for larger elements */
  slow: '0.3s ease',
} as const;

export const transitionClasses = {
  colors: 'transition-colors duration-150 ease-in-out',
  all: 'transition-all duration-150 ease-in-out',
  transform: 'transition-transform duration-150 ease-in-out',
} as const;

// =============================================================================
// COMPONENT PATTERNS
// =============================================================================

/**
 * Pre-defined component class patterns.
 * Use these for consistent component styling.
 */
export const componentClasses = {
  // Cards
  card: 'card', // Uses .card from globals.css
  cardWithPadding: 'card p-5',
  cardClickable: 'card p-5 cursor-pointer',

  // Badges
  badge: 'badge',
  badgeAccent: 'badge badge-accent',
  badgeSuccess: 'badge badge-success',
  badgeWarning: 'badge badge-warning',

  // Buttons
  buttonPrimary: 'px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors',
  buttonSecondary: 'px-4 py-2 rounded-lg text-sm font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)] hover:border-[var(--muted)] transition-colors',
  buttonSuccess: 'px-4 py-2 rounded-lg text-sm font-medium bg-[var(--success)] text-black transition-colors',

  // Links
  linkExternal: 'text-[var(--accent-light)] hover:underline',
  linkMuted: 'text-[var(--muted)] hover:text-[var(--foreground)]',

  // Section
  sectionTitle: 'section-title', // Uses .section-title from globals.css

  // Theme toggle
  themeToggle: 'theme-toggle', // Uses .theme-toggle from globals.css
} as const;

// =============================================================================
// LAYOUT TOKENS
// =============================================================================

export const layout = {
  /** Maximum content width */
  maxWidth: 'max-w-6xl', // 1152px
  /** Container padding */
  containerPadding: 'px-6',
  /** Page vertical padding */
  pageVerticalPadding: 'py-8',
} as const;

/**
 * Responsive grid patterns
 */
export const gridPatterns = {
  /** Detail page: 2 columns + 1 sidebar on large screens */
  detailPage: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
  /** Two column grid */
  twoColumn: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  /** Data pairs grid */
  dataPairs: 'grid grid-cols-2 gap-4',
} as const;

// =============================================================================
// Z-INDEX TOKENS
// =============================================================================

export const zIndex = {
  dropdown: 50,
  modal: 60,
  overlay: 40,
  sticky: 10,
  tooltip: 70,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

/**
 * Tailwind default breakpoints (for reference)
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
