# Blog Typography & Spacing Research

**Date**: January 28, 2026
**Purpose**: Establish data-driven typography system for AIDO blog articles

---

## Executive Summary

Based on research of industry-leading blogs (Vercel, Stripe, Medium, Substack) and accessibility standards (WCAG 2.1), the current AIDO blog has critical spacing issues:

**Problem Identified**:
- Revenue Model heading too far from its list items
- Last bullet point closer to next heading than its own heading
- Insufficient visual grouping between related content

**Root Cause**: Improper spacing ratios between headings, lists, and paragraphs

---

## 1. Typography Best Practices (2026)

### Line Length
- **Optimal**: 50-75 characters per line
- **Sweet spot**: 66 characters
- **Maximum**: 70-80 characters
- **AIDO**: 640-760px width (✓ Good)

**Source**: [Baymard Institute - Line Length Readability](https://baymard.com/blog/line-length-readability)

### Line Height
- **Standard**: 1.5-1.6 (150-160% of font size)
- **Accessibility (WCAG)**: Minimum 1.5em
- **Sweet spot**: 1.5 (150%)
- **AIDO current**: 1.7-1.8 (❌ Too loose)

**Source**: [The A11Y Collective - Text Spacing](https://www.a11y-collective.com/blog/text-spacing-wcag/)

### Font Sizes
- **Desktop blog body**: 18-24px ideal
- **Standard**: 17-18px
- **AIDO**: 17px base (✓ Good)

**Source**: [Learn UI Design - Font Size Guidelines](https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)

### Paragraph Spacing
- **Between paragraphs**: 1em (1x font size)
- **AIDO current**: 1.5rem (❌ Too loose)

---

## 2. Design System Analysis

### Vercel Blog (Industry Leader)

**Typography**:
- Big, low-contrast headlines
- Generous spacing
- "Technical without being dry"

**Geist System**:
- Pre-set combinations: font-size, line-height, letter-spacing, font-weight
- Consistent vertical rhythm

**Source**: [Vercel Geist Typography](https://vercel.com/geist/typography)

### Stripe Press

**Approach**:
- Serif font (Ivar) for editorial gravitas
- Each "book" has typographic identity
- Clean, spacious layout

### Medium/Substack

**Key Principles**:
- Inter font dominates UI design
- 1.5x font size for line spacing (16px font = 24px spacing)
- Major Second scale (1.125 ratio, 12.5% increments)

**Source**: [Typography in Design Systems - Inbetween Spaces](https://inbetweenspaces.substack.com/p/typography-in-design-systems)

---

## 3. Spacing System Recommendations

### The 8px Rhythm Rule

All padding/margin should follow 8px increments: 8, 16, 24, 32, 40, 48

**Current AIDO Problems**:
- Heading margins: 3rem, 2.5rem, 2rem (48px, 40px, 32px) ✓
- But list spacing doesn't follow this rhythm ❌

### Proximity Principle (Critical!)

**Elements that belong together should be CLOSER than unrelated elements**

```
Heading                    ←
  ↓ (SMALL gap)
List item 1                ← These belong together
List item 2                ←
List item 3                ←
  ↓ (LARGE gap)
Next Heading               ← Start of new section
```

**AIDO Current Issue**:
```
Revenue Model:             ← Heading
  ↓ (TOO LARGE - 0.75rem)
- List item                ←
- List item                ←
- Last item                ←
  ↓ (TOO SMALL - 0.75rem)
Target Customer:           ← Looks grouped with list above!
```

**Fix**: Heading-to-content gap should be 0.5x the gap between sections

---

## 4. Recommended Spacing Values

### Headings

```css
/* H2 - Major Section */
margin-top: 4rem;     /* 64px - Large section break */
margin-bottom: 0.75rem; /* 12px - Small gap to content */
padding-top: 2rem;    /* 32px - Visual breathing room */
border-top: 1px;      /* Visual separator */

/* H3 - Subsection */
margin-top: 3rem;     /* 48px - Medium section break */
margin-bottom: 0.5rem;  /* 8px - Tiny gap to content */

/* H4 - Minor heading */
margin-top: 2rem;     /* 32px - Small section break */
margin-bottom: 0.5rem;  /* 8px - Tiny gap to content */
```

### Lists

```css
/* UL/OL */
margin-top: 0.5rem;    /* 8px - Close to heading */
margin-bottom: 1.5rem; /* 24px - Clear section end */
padding-left: 1.25rem; /* 20px - Moderate indent */

/* LI */
margin-bottom: 0.25rem; /* 4px - Tight grouping */
```

### Paragraphs

```css
/* P */
margin-bottom: 1rem;   /* 16px - Clear separation */
line-height: 1.6;      /* 160% - Readable */
```

### Key Ratios

- **Heading → Content**: 0.5rem (8px)
- **Content → Content**: 0.25rem (4px) for list items, 1rem (16px) for paragraphs
- **Section → Section**: 3-4rem (48-64px)

**Golden Rule**: `gap(heading→content) < gap(content→content) < gap(section→section)`

---

## 5. Data Visualization Libraries

### For Timeline/Funding Infographics

#### Option 1: **React-Chrono** (Recommended)
- ⭐ 3.9k GitHub stars
- Horizontal/vertical/alternating modes
- Highly customizable
- Perfect for funding rounds timeline

**Source**: [Comparing React Timeline Libraries - LogRocket](https://blog.logrocket.com/comparing-best-react-timeline-libraries/)

```tsx
<Chrono
  items={[
    { title: "Seed - Jun 2023", cardTitle: "€105M" },
    { title: "Series A - Dec 2023", cardTitle: "€385M" },
    { title: "Series B - Jun 2024", cardTitle: "€600M" }
  ]}
  mode="HORIZONTAL"
  theme={{ primary: 'var(--accent)', secondary: 'var(--background)' }}
/>
```

#### Option 2: **react-horizontal-timeline**
- Dedicated horizontal timeline
- Returns clicked date index
- Lightweight

**Source**: [react-horizontal-timeline - npm](https://www.npmjs.com/package/react-horizontal-timeline)

#### Option 3: **Recharts** (For general charts)
- Most used by professionals
- Reliable and battle-tested
- Not timeline-specific but highly customizable

**Source**: [8 Best React Chart Libraries 2025 - Embeddable](https://embeddable.com/blog/react-chart-libraries)

### For General Data Viz

| Library | Best For | Complexity |
|---------|----------|------------|
| **Recharts** | Simple charts, composable | Low |
| **Nivo** | Diverse chart types, D3-powered | Medium |
| **Visx** (Airbnb) | Custom visualizations | High |
| **Victory** | Accessible, modular | Medium |

**Source**: [Top 7 React Chart Libraries 2026 - DEV Community](https://dev.to/basecampxd/top-7-react-chart-libraries-for-2026-features-use-cases-and-benchmarks-412c)

---

## 6. Accessibility Standards

### WCAG 2.1 Requirements

- Line height: Minimum 1.5em
- Paragraph spacing: Minimum 2em
- Letter spacing: Minimum 0.12em
- Word spacing: Minimum 0.16em

**AIDO Compliance**: ✓ Mostly compliant, but spacing needs refinement

**Source**: [WCAG Text Spacing Guidelines](https://www.a11y-collective.com/blog/text-spacing-wcag/)

---

## 7. Implementation Plan

### Phase 1: Fix Spacing Ratios (Immediate)

```css
/* Headings - reduce bottom margin */
h2 { margin-bottom: 0.75rem !important; }
h3 { margin-bottom: 0.5rem !important; }
h4 { margin-bottom: 0.5rem !important; }

/* Lists - reduce top margin, increase bottom */
ul, ol {
  margin-top: 0.5rem !important;
  margin-bottom: 1.5rem !important;
}

/* List items - tighter */
li { margin-bottom: 0.25rem !important; }

/* Paragraphs - standard */
p {
  margin-bottom: 1rem !important;
  line-height: 1.6 !important; /* Reduce from 1.8 */
}
```

### Phase 2: Integrate Timeline Component

Replace ASCII art with **React-Chrono**:

```tsx
<FundingTimeline
  rounds={[
    { stage: "Seed", amount: "€105M", date: "Jun 2023" },
    { stage: "Series A", amount: "€385M", date: "Dec 2023" },
    { stage: "Series B", amount: "€600M", date: "Jun 2024" }
  ]}
  totalFunding="$3.05B"
  currentValuation="$14B"
/>
```

### Phase 3: Design System Update

Document in `src/app/globals.css` with comments explaining ratios:

```css
/* Blog Typography System
 *
 * Spacing Ratios:
 * - Heading to content: 0.5rem (close grouping)
 * - Content to content: 0.25-1rem (medium)
 * - Section to section: 3-4rem (clear separation)
 *
 * Follows 8px rhythm: all values are multiples of 8px
 */
```

### Phase 4: Writer Skill Update

Add to Writer skill prompt:
- Always use proper heading hierarchy (H2 → H3 → H4)
- Keep lists close to their headings
- Use horizontal rules (---) for major section breaks
- Consider using timeline components for funding data

---

## Sources

### Typography & Spacing
- [Website Dimensions & Typography 2026 - Sami Haraketi](https://www.samiharaketi.com/post/website-dimensions-typography-in-2026-a-practical-guide-for-web-designers)
- [Readability: The Optimal Line Length - Baymard](https://baymard.com/blog/line-length-readability)
- [Best UX Practices for Line Spacing - Justinmind](https://www.justinmind.com/blog/best-ux-practices-for-line-spacing/)
- [Text Spacing WCAG - The A11Y Collective](https://www.a11y-collective.com/blog/text-spacing-wcag/)
- [How Spacing Affects Readability - 618media](https://618media.com/en/blog/how-spacing-affects-the-readability-of-text/)

### Design Systems
- [Vercel Geist Typography](https://vercel.com/geist/typography)
- [Typography in Design Systems - Inbetween Spaces](https://inbetweenspaces.substack.com/p/typography-in-design-systems)
- [Generating Design System Spacing - Medium](https://medium.com/@ethersystem/generating-design-system-spacing-aa69714160bc)

### Data Visualization
- [Comparing React Timeline Libraries - LogRocket](https://blog.logrocket.com/comparing-best-react-timeline-libraries/)
- [8 Best React Chart Libraries 2025 - Embeddable](https://embeddable.com/blog/react-chart-libraries/)
- [React Timeline Component - Syncfusion](https://www.syncfusion.com/blogs/post/react-timeline-component)
- [Top 7 React Chart Libraries 2026 - DEV Community](https://dev.to/basecampxd/top-7-react-chart-libraries-for-2026-features-use-cases-and-benchmarks-412c)

---

## Next Steps

1. **Review this document** and confirm spacing ratios
2. **Choose timeline library** (recommend React-Chrono)
3. **Update design system** with approved values
4. **Implement changes** in MarkdownRenderer and globals.css
5. **Update Writer skill** with new guidelines
6. **Test with current article** to validate improvements

---

*Research completed: January 28, 2026*
