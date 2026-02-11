// AIDO Design System tokens mapped to email-safe inline styles
// Source: src/styles/tokens.css + src/app/globals.css (dark theme)

export const colors = {
  background: '#000000',
  foreground: '#ededed',
  textBody: 'rgba(255, 255, 255, 0.82)',
  textSecondary: 'rgba(255, 255, 255, 0.78)',
  muted: '#888888',
  mutedDim: '#444444',
  border: '#333333',
  accent: '#0070f3',
  accentLight: '#3291ff',
  success: '#50e3c2',
  warning: '#f5a623',
  card: '#111111',
  cardHover: '#1a1a1a',
} as const;

export const fonts = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"JetBrains Mono", "Geist Mono", monospace',
} as const;

export const radius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  full: '9999px',
} as const;

// Common email layout styles
export const emailBodyStyle: React.CSSProperties = {
  backgroundColor: colors.background,
  fontFamily: fonts.sans,
  margin: '0',
  padding: '0',
};

export const emailContainerStyle: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 20px',
};

export const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: colors.accent,
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: radius.lg,
  padding: '12px 24px',
  textDecoration: 'none',
  display: 'inline-block',
};
