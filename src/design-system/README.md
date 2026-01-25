# AIDO Design System

Vercel-inspired minimalist design system for the AIDO application.

## Core Principles

1. **Information-First**: All styling serves the content
2. **Dark by Default**: Modern dark theme with clean light mode
3. **Subtle Interactivity**: Smooth transitions, minimal color shifts
4. **Semantic Color**: Colors convey meaning (green = positive, orange = caution)
5. **Generous Typography**: 17px base for readability
6. **Clarity Over Decoration**: No gradients, shadows, or ornaments

---

## Quick Reference

### Colors (Always use CSS variables)

```css
/* Actions & Links */
var(--accent)        /* Primary blue */
var(--accent-light)  /* Hover state blue */

/* Semantic */
var(--success)       /* Positive: interested, hiring, green flags */
var(--warning)       /* Caution: red flags, alerts */
var(--error)         /* Critical (rarely used) */

/* Text */
var(--foreground)    /* Primary text */
var(--muted)         /* Secondary text, metadata */

/* Surfaces */
var(--background)    /* Page background */
var(--card)          /* Card background */
var(--card-hover)    /* Card hover state */
var(--border)        /* Borders, dividers */
```

### Typography

| Element | Classes | Example |
|---------|---------|---------|
| Page Title | `text-2xl font-semibold` | Companies |
| Large Title | `text-3xl font-semibold` | Company Name |
| Section Title | `section-title` | BUSINESS |
| Card Heading | `text-lg font-medium` | Card Title |
| Body | (default 17px) | Regular text |
| Small | `text-sm` | Secondary info |
| Extra Small | `text-xs` | Metadata, hints |
| Monospace | `font-mono` | $50M, 2024-03 |

### Spacing

| Pattern | Class | Use Case |
|---------|-------|----------|
| Section gap | `mb-10` | Between major sections |
| Block gap | `mb-6` | Between content blocks |
| Card padding | `p-5` | Inside cards |
| List spacing | `space-y-4` | Between list items |
| Grid gap (tight) | `gap-4` | Compact grids |
| Grid gap (loose) | `gap-8` | Page-level grids |

---

## Component Patterns

### Card

```tsx
// Basic card
<div className="card p-5">
  Content here
</div>

// Clickable card (as Link)
<Link href="/path" className="card block p-5">
  Content here
</Link>
```

### Badge

```tsx
// Default badge
<span className="badge">Label</span>

// Accent badge (blue) - for highlights
<span className="badge badge-accent">L3: AI Core</span>

// Success badge (teal) - for positive states
<span className="badge badge-success">Interested</span>

// Warning badge (orange) - for caution
<span className="badge badge-warning">Red Flag</span>
```

### Section

```tsx
<section className="mb-10">
  <h2 className="section-title">Section Name</h2>
  <div className="card p-5">
    Content here
  </div>
</section>
```

### Buttons

```tsx
// Primary (filled)
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors">
  Primary
</button>

// Secondary (outlined)
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)] hover:border-[var(--muted)] transition-colors">
  Secondary
</button>

// Success (for positive actions)
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--success)] text-black transition-colors">
  Interested
</button>
```

### Links

```tsx
// External link
<a href="..." className="text-[var(--accent-light)] hover:underline">
  Link ↗
</a>

// Muted link
<a href="..." className="text-[var(--muted)] hover:text-[var(--foreground)]">
  Back
</a>
```

### Dropdown

```tsx
// Filter chip style
<button className="flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]">
  <span>Filter Label</span>
  <ChevronIcon />
</button>

// Dropdown menu
<div className="absolute left-0 top-full mt-1 min-w-full bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1">
  <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)]">
    Option
  </button>
</div>
```

---

## Layout Patterns

### Page Container

```tsx
<main className="max-w-6xl mx-auto px-6 py-8">
  {children}
</main>
```

### Detail Page Grid

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Main content: spans 2 columns */}
  <div className="lg:col-span-2 space-y-8">
    {mainContent}
  </div>

  {/* Sidebar: spans 1 column */}
  <div className="space-y-6">
    {sidebarContent}
  </div>
</div>
```

### Two Column Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

---

## Animation & Transitions

- **Colors**: `transition-colors duration-150 ease-in-out`
- **All properties**: `transition-all duration-150 ease-in-out`
- **Transform**: `transition-transform duration-150 ease-in-out`

Standard transition: `0.15s ease` for interactive elements.

---

## Z-Index Scale

| Level | Value | Use Case |
|-------|-------|----------|
| Overlay | 40 | Click-away overlays |
| Dropdown | 50 | Dropdown menus |
| Modal | 60 | Modal dialogs |
| Tooltip | 70 | Tooltips |

---

## Do's and Don'ts

### ✅ Do

- Use CSS variables for all colors
- Follow the card + badge pattern
- Keep typography hierarchy consistent
- Use section-title for section headers
- Add hover states with transition

### ❌ Don't

- Use hardcoded color values
- Add shadows (use borders instead)
- Add gradients (except progress bars)
- Use emojis unless user requests
- Create overly complex animations

---

## File Structure

```
src/design-system/
├── tokens.ts    # TypeScript design tokens
└── README.md    # This file

src/app/
└── globals.css  # CSS variables & component classes

src/components/ui/
├── Badge.tsx    # Reusable badge component
├── Card.tsx     # Reusable card component
├── Section.tsx  # Reusable section component
├── Dropdown.tsx # Reusable dropdown component
└── index.ts     # Barrel export
```

---

## Content Language

**All user-facing content must be in English.**

- UI labels: English
- Company data: English
- Error messages: English
- Comments in code: Korean OK for internal notes
