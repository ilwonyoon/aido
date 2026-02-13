"use strict";
// AIDO Design System tokens mapped to email-safe inline styles
// Source: src/styles/tokens.css + src/app/globals.css (dark theme)
//
// Typography scale (17px base, JetBrains Mono primary):
//   4xl = 24px, lh 1.15, ls -0.035em
//   3xl = 22px, lh 1.2,  ls -0.03em
//   2xl = 20px, lh 1.25, ls -0.025em
//   xl  = 18px, lh 1.3,  ls -0.02em
//   base= 15px, lh 1.7,  ls -0.01em
//   sm  = 13px, lh 1.65
//   xs  = 12px, lh 1.5,  ls 0.01em
//
// Font weights: 400 (normal), 500 (medium), 600 (semibold)
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctaButtonStyle = exports.emailContainerStyle = exports.emailBodyStyle = exports.sectionTitleStyle = exports.radius = exports.fontWeight = exports.typeScale = exports.fonts = exports.colors = void 0;
exports.colors = {
    background: '#000000',
    foreground: '#ededed',
    // rgba(255,255,255,0.82) on #000 = #d1d1d1 — email-safe hex equivalent
    textBody: '#d1d1d1',
    // rgba(255,255,255,0.78) on #000 = #c7c7c7
    textSecondary: '#c7c7c7',
    muted: '#888888',
    mutedDim: '#444444',
    border: '#333333',
    accent: '#0070f3',
    accentLight: '#3291ff',
    success: '#50e3c2',
    warning: '#f5a623',
    card: '#111111',
    cardHover: '#1a1a1a',
};
exports.fonts = {
    // AIDO site uses JetBrains Mono as primary body font
    primary: '"JetBrains Mono", monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Geist Mono", monospace',
};
exports.typeScale = {
    '4xl': { fontSize: '24px', lineHeight: '1.15', letterSpacing: '-0.035em' },
    '3xl': { fontSize: '22px', lineHeight: '1.2', letterSpacing: '-0.03em' },
    '2xl': { fontSize: '20px', lineHeight: '1.25', letterSpacing: '-0.025em' },
    xl: { fontSize: '18px', lineHeight: '1.3', letterSpacing: '-0.02em' },
    base: { fontSize: '15px', lineHeight: '1.7', letterSpacing: '-0.01em' },
    sm: { fontSize: '13px', lineHeight: '1.65' },
    xs: { fontSize: '12px', lineHeight: '1.5', letterSpacing: '0.01em' },
};
exports.fontWeight = {
    normal: 400,
    medium: 500,
    semibold: 600,
};
exports.radius = {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
};
// Section title pattern: xs size, uppercase, wide tracking
// Site uses 600 with antialiasing → 500 in email for visual parity
exports.sectionTitleStyle = {
    fontSize: exports.typeScale.xs.fontSize,
    fontWeight: exports.fontWeight.medium,
    lineHeight: exports.typeScale.xs.lineHeight,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
};
// Common email layout styles
exports.emailBodyStyle = {
    backgroundColor: exports.colors.background,
    fontFamily: exports.fonts.primary,
    fontWeight: exports.fontWeight.normal,
    fontSize: exports.typeScale.base.fontSize,
    lineHeight: exports.typeScale.base.lineHeight,
    letterSpacing: exports.typeScale.base.letterSpacing,
    margin: '0',
    padding: '0',
};
exports.emailContainerStyle = {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '40px 20px',
};
// Button uses font-medium (500) on AIDO site, not semibold
exports.ctaButtonStyle = {
    backgroundColor: exports.colors.accent,
    color: '#ffffff',
    fontSize: exports.typeScale.sm.fontSize,
    fontWeight: exports.fontWeight.medium,
    lineHeight: exports.typeScale.sm.lineHeight,
    borderRadius: exports.radius.lg,
    padding: '12px 24px',
    textDecoration: 'none',
    display: 'inline-block',
};
//# sourceMappingURL=tokens.js.map