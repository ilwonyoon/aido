# AIDO Design System

> Tokenized design system extracted from company list and company detail pages

## Overview

This design system provides a single source of truth for all design decisions in AIDO. It's based on the well-organized design patterns from the company list and company detail pages, now tokenized for consistency and maintainability.

## Core Principles

1. **Minimalist** - Clean, focused interface with no unnecessary elements
2. **Consistent** - Uniform spacing, colors, and typography throughout
3. **Accessible** - High contrast ratios, keyboard navigation, semantic HTML
4. **Responsive** - Mobile-first approach with breakpoints for larger screens
5. **Dark-first** - Optimized for dark mode with light mode support

## Design Tokens

All design tokens are defined in `/src/design/tokens.ts`. Import and use these tokens instead of hardcoding values:

```typescript
import { colors, spacing, typography, components } from '@/design/tokens';
```

### Color System

**Base Colors:**
- `background` - Main background color
- `foreground` - Main text color
- `muted` - Secondary text, less prominent
- `border` - Border color for dividers and outlines

**Accent Colors:**
- `accent` - Primary accent (blue)
- `accentLight` - Lighter accent for hover states
- `primary` - Bianchi Celeste (use sparingly for most important info)

**Semantic Colors:**
- `success` - Positive indicators, Level A companies
- `positive` - Muted positive (less important than success)
- `warning` - Cautions, uncertainties
- `error` - Errors and critical issues

**Surface Colors:**
- `card` - Card background
- `cardHover` - Card hover state

### Typography Scale

**Base font size:** 17px (larger than standard 16px for better readability)

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 12px | Captions, metadata, timestamps |
| `sm` | 14px | Body text in dense layouts, table cells |
| `base` | 17px | Standard body text |
| `lg` | 19px | Emphasized body text |
| `xl` | 21px | Small headings |
| `2xl` | 26px | Section headings |
| `3xl` | 32px | Page titles |
| `4xl` | 38px | Hero headings |

**Font weights:**
- `normal` (400) - Body text
- `medium` (500) - Emphasized text
- `semibold` (600) - Headings, important labels
- `bold` (700) - Rarely used, only for strong emphasis

### Spacing Scale

Consistent 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Minimal gaps |
| `2` | 8px | Tight spacing |
| `3` | 12px | Compact layouts |
| `4` | 16px | Standard spacing |
| `5` | 20px | Card padding |
| `6` | 24px | Section gaps |
| `8` | 32px | Large gaps |
| `12` | 48px | Section spacing |
| `16` | 64px | Page sections |

## Component Patterns

### Badge

Used for status indicators, AI levels, and categories.

**Variants:**
- `default` - Neutral badge
- `accent` - Blue accent badge
- `success` - Green success badge
- `warning` - Orange warning badge

**Usage:**
```tsx
<span className="badge-success">Level A: AI-Native</span>
<span className="badge-accent">Level B: AI-Core</span>
<span className="badge">Level C: AI Feature</span>
```

### Card

Container for grouped content with hover effect.

**Base pattern:**
```tsx
<div className="card p-5">
  {/* content */}
</div>
```

**With border accent:**
```tsx
<div className="card p-6 border-l-4 border-[var(--success)]">
  {/* Level A content */}
</div>
```

### Filter Chip (Pill Button)

Rounded filter buttons used in company list and jobs page.

**States:**
- Default: Muted border and text
- Active: Accent border and foreground text
- Hover: Lighter border

**Pattern:**
```tsx
<button className={`
  flex items-center gap-2
  bg-[var(--card)] border rounded-full
  px-4 py-1.5 text-sm
  cursor-pointer transition-colors
  whitespace-nowrap flex-shrink-0
  ${active
    ? 'border-[var(--accent)] text-[var(--foreground)]'
    : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
  }
`}>
  {label}
</button>
```

### Dropdown Menu

Custom dropdown with fixed positioning.

**Pattern:**
```tsx
{/* Overlay */}
<div className="fixed inset-0 z-40" onClick={close} />

{/* Menu */}
<div
  className="fixed bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1"
  style={{ top, left, minWidth }}
>
  {options.map(opt => (
    <button className={`
      w-full text-left px-4 py-2 text-sm
      hover:bg-[var(--card-hover)] transition-colors
      whitespace-nowrap
      ${selected ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'}
    `}>
      {opt.label}
    </button>
  ))}
</div>
```

### Table

Bordered table with hover states.

**Pattern:**
```tsx
<div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-[var(--background)] border-b border-[var(--border)]">
        <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">
          Header
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="group border-b border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors">
        <td className="py-3 px-4 border-r border-[var(--border)]">
          Cell
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Section Title

Uppercase labels for section headers.

**Pattern:**
```tsx
<div className="section-title">
  Section Label
</div>
```

Or using Tailwind directly:
```tsx
<div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
  Section Label
</div>
```

### Navigation Link

Navigation links with active state indicator. Active = foreground + font-medium, inactive = muted.

**Desktop Pattern:**
```tsx
<Link
  href="/path"
  className={
    isActive('/path')
      ? 'text-[var(--foreground)] font-medium'
      : 'text-[var(--muted)] hover:text-[var(--foreground)]'
  }
>
  Link Label
</Link>
```

**Mobile Pattern (left border):**
```tsx
<Link
  href="/path"
  className={`block py-3 px-4 rounded-lg ${
    isActive('/path')
      ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
      : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
  }`}
>
  Link Label
</Link>
```

**Active state helper:**
```typescript
const isActive = (path: string) => {
  if (path === '/') return pathname === '/';
  return pathname.startsWith(path);
};
```

## Layout Patterns

### Page Container

Standard page wrapper with max width and padding:

```tsx
<div className="max-w-6xl mx-auto px-4 sm:px-6">
  {/* page content */}
</div>
```

### Two-Column Layout (Desktop)

Company list uses a side panel pattern:

```tsx
{/* Main content */}
<div className="w-full">
  {/* Company filters and list */}
</div>

{/* Side panel overlay */}
<div className="fixed right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-1/2">
  {/* Company detail */}
</div>
```

### Grid Layouts

**Company cards:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* cards */}
</div>
```

**Info grid (2 columns):**
```tsx
<div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
  {/* info items */}
</div>
```

## AI Level Visual System

Each AI level has specific color coding:

| Level | Label | Color | Badge Class | Text Class |
|-------|-------|-------|-------------|------------|
| A | AI-Native | Success (teal) | `badge-success` | `text-[var(--success)]` |
| B | AI-Core | Accent (blue) | `badge-accent` | `text-[var(--accent-light)]` |
| C | AI Feature | Foreground (gray) | `badge` | `text-[var(--foreground)]` |
| D | AI-Assisted | Muted (light gray) | `badge` | `text-[var(--muted)]` |

**Helper function:**
```typescript
import { getAiLevelConfig, type AiLevel } from '@/design/tokens';

// Get full configuration for an AI level
const config = getAiLevelConfig('A');
// Returns: { label: 'AI-Native', color: 'var(--success)', badgeClass: 'badge-success', textClass: 'text-[var(--success)]' }

// Use in components
function AiLevelBadge({ level }: { level: AiLevel }) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`badge ${config.badgeClass}`}>
      Level {level}: {config.label}
    </span>
  );
}

// For text-only display
function AiLevelText({ level }: { level: AiLevel }) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`text-sm ${config.textClass}`}>
      Level {level} {config.label}
    </span>
  );
}
```

**Direct access to all levels:**
```typescript
import { aiLevels } from '@/design/tokens';

// Access specific level config
const levelA = aiLevels.A; // { label, color, badgeClass, textClass }
```

## Responsive Design

### Breakpoints

- `sm`: 640px - Tablets in portrait
- `md`: 768px - Tablets in landscape
- `lg`: 1024px - Laptops
- `xl`: 1280px - Desktops
- `2xl`: 1536px - Large desktops

### Mobile-First Approach

Always write mobile styles first, then add larger breakpoints:

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Responsive width */}
</div>
```

### Panel Behavior

- Mobile: Full-width overlay panel
- Desktop: Half-width side panel with toggle to full width

## Animation Guidelines

### Transitions

**Standard transitions:**
- Colors, backgrounds, borders: 150ms ease
- Transforms: 200ms ease
- Layout changes: 300ms ease

**Usage:**
```tsx
<button className="transition-colors hover:text-[var(--foreground)]">
  {/* Smooth color transition */}
</button>
```

### Animations

**Slide in from right:**
```tsx
<div className="animate-slideInRight">
  {/* Panel sliding in */}
</div>
```

**Fade in:**
```tsx
<div className="animate-fadeIn">
  {/* Overlay fading in */}
</div>
```

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:
- Text on background: 7:1 minimum
- Muted text on background: 4.5:1 minimum
- Interactive elements: Clear focus states

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus states are visible
- Skip links for navigation
- Escape key closes panels and modals

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<section>`)
- Provide alt text for images
- Use aria-labels for icon buttons

## Code Style

### Tailwind CSS Usage

**Prefer utility classes for:**
- Layout (flex, grid, spacing)
- Responsive design (breakpoints)
- One-off styles

**Prefer CSS variables for:**
- Colors (always use `var(--color-name)`)
- Repeated patterns
- Theme values

**Example:**
```tsx
{/* Good */}
<div className="flex items-center gap-2 text-[var(--muted)]">

{/* Bad - hardcoded color */}
<div className="flex items-center gap-2 text-gray-500">
```

### Component Extraction

Extract components when:
- Pattern is used more than twice
- Logic is complex
- Reusability is needed

Keep components small and focused:
```tsx
// Good - focused component
function FilterChip({ label, active, onClick }) {
  return <button className={getFilterChipClass(active)} onClick={onClick}>
    {label}
  </button>
}

// Bad - too many responsibilities
function Filter() {
  // handles state, rendering, and business logic
}
```

## Testing Design System

### Visual Regression

Test key components in isolation:
- All badge variants
- Card hover states
- Filter chip active/inactive states
- Dropdown open/closed states
- Table layouts

### Responsive Testing

Test at key breakpoints:
- 375px (iPhone SE)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1440px (Desktop)

### Theme Testing

Verify all components in:
- Dark mode (default)
- Light mode
- System preference

## Migration Guide

### From Hardcoded Values to Tokens

**Before:**
```tsx
<div className="text-sm text-gray-500 mb-4">
```

**After:**
```tsx
import { typography, spacing, colors } from '@/design/tokens';

<div className="text-sm text-[var(--muted)] mb-4">
```

### From Inline Styles to Tokens

**Before:**
```tsx
<div style={{ padding: '20px', borderRadius: '8px' }}>
```

**After:**
```tsx
<div className="p-5 rounded-lg">
{/* Uses spacing[5] = 20px and borderRadius.lg = 8px */}
```

## Resources

- **Design Tokens:** `/src/design/tokens.ts`
- **Global Styles:** `/src/app/globals.css`
- **Component Examples:** `/src/components/CompanyFilters.tsx`, `/src/components/CompanyDetail.tsx`
- **Page Examples:** `/src/app/page.tsx`, `/src/app/jobs/page.tsx`

---

**Last Updated:** 2026-01-28
**Version:** 1.1.0 - AI Level tokens fully integrated
