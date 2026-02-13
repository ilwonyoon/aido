---
name: writer
description: "Generate data-driven analytical articles for AIDO Insights blog. Auto-selects companies, creates SEO metadata, and produces TypeScript article files ready for deployment."
---

# AIDO Insights Writer

Data-driven analytical article generator for AIDO Insights blog.

## Usage

```bash
/writer "Top 10 fastest growing AI companies"
/writer "Anthropic vs OpenAI for product designers"
/writer "How to evaluate AI startup design culture"
```

## What This Skill Does

Given just a topic, this skill will:
1. **Analyze** the topic and determine article type (Top N, comparison, guide, deep dive)
2. **Select** relevant companies from AIDO database based on keywords
3. **Generate** complete article with SEO metadata in Data-Driven Analytical voice
4. **Create** TypeScript file ready for deployment

## AIDO Persona: Data-Driven Analytical

### Core Traits
- Lead with numbers, metrics, quantifiable insights
- Professional, objective (not promotional or hype-driven)
- Designer's lens: evaluate companies through design opportunity/culture
- Cite sources (AIDO company database, funding announcements)

### Voice & Style
- Active voice, clear and direct
- Use bullet points for scannability
- Structure: Hook → Data → Insights → Takeaway
- Avoid marketing jargon, buzzwords, superlatives
- Prefer: "X grew 12x YoY" over "X experienced explosive growth"

### Writing Patterns

**Avoid:**
- "AI is revolutionizing everything!"
- "Cursor is an amazing code editor!"
- "Anthropic has incredible growth"

**Prefer:**
- "The AI industry added 15 new unicorns in 2025 alone, but not all growth is created equal."
- "Cursor reached $1B ARR faster than any SaaS in history. Here's why."
- "Anthropic went from $1B to $7B ARR in a single year—a 7x growth rate"

---

## Workflow

### Step 1: Parse Topic & Determine Structure

When user provides topic, automatically detect article type:

```typescript
Topic patterns:
- "Top N [subject]" → Ranked list
- "X vs Y" → Comparison (2 companies)
- "How to [action]" → Guide
- "[Company name] [subject]" → Deep dive
- "Why [pattern]" → Trend analysis
```

### Step 2: Select Companies Automatically

Extract keywords from topic and query company database:

```typescript
Keywords from topic → Filter companies by:
- Matching category/tags
- Relevant metrics (e.g., "fastest growing" → sort by growth rate)
- Design-related if topic mentions "design/designer"
- AI-native level if topic is general

Auto-select top 5-10 companies
```

### Step 3: Gather Data

Pull from company database:
- ARR, growth rate, valuation
- Funding rounds, velocity
- Design team size, open roles
- AI-native level, category
- Designer links (if relevant)

Calculate comparative stats:
- Rankings
- Growth percentages
- Funding velocity

### Step 4: Generate Article

**SEO Metadata (auto-generated):**
- **Title**: 55-60 chars, keyword-optimized from topic
- **Meta description**: 150-160 chars, data-driven summary
- **Keywords**: 5-10, extracted from topic + company names
- **Slug**: URL-friendly version of topic (lowercase, hyphens)
- **Excerpt**: 150-200 chars for card preview

**Article Structure:**

```markdown
## Introduction (Hook + Context)
- Lead with surprising data point or counterintuitive insight
- Set context from AIDO database analysis
- Preview key findings

## Methodology (if Top N or comparison)
- How companies were selected
- Data sources (AIDO database)
- Evaluation criteria

## Main Content
- For Top N: Each company section with:
  - Metrics (ARR, growth rate, valuation)
  - Why they're winning (moat/differentiation)
  - Designer perspective (culture, team, roles)
  - Link to company page: [Company](/company/id)
    → Automatically renders with company logo icon

- For Comparison: Side-by-side analysis with data

- For Guide: Step-by-step framework with company examples

## Key Insights
- Patterns emerging from the data
- Counterintuitive findings
- Designer takeaways

## Conclusion + CTA
- Summary of main insight
- Link to /jobs for design roles
```

**Auto-insert Company Links with Logos:**
- First mention of each company → `[Company Name](/company/id)`
- This automatically renders with a small company logo icon (16x16px) next to the name
- The MarkdownRenderer detects `/company/` links and adds logo image
- Based on companyIds array
- Validate all IDs exist in database
- Logo path is auto-resolved from `/logos/[company-id].png`

**Calculate Reading Time:**
- Word count ÷ 200 words/minute
- Round to nearest minute

### Step 5: Present Draft for Review

Show complete article:

```
Article Draft Ready

Title: [Generated title]
Slug: [generated-slug]
Excerpt: [Generated excerpt]

Companies featured: Anthropic, OpenAI, Linear, ...
Reading time: 8 minutes
Category: [analysis|deep-dive|insights|trends|guides]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Full markdown content with company links]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Approve and create file
Edit SEO metadata
Regenerate article
Cancel
```

### Step 6: Create Files (if approved)

1. **Generate TypeScript file:**
   ```
   /src/data/articles/content/[slug].ts
   ```

2. **Update articles index:**
   ```typescript
   // /src/data/articles/index.ts
   import { [camelCaseSlug] } from './content/[slug]';

   export const articles: Article[] = [
     [camelCaseSlug],
     // ... existing
   ];
   ```

3. **Show verification steps:**
   ```bash
   npm run build
   npm run dev → /insights/[slug]
   git add + commit + deploy
   ```

---

## File Generation Template

```typescript
import { Article } from '../types';

export const [camelCaseSlug]: Article = {
  slug: '[slug]',
  title: '[generated-title]',
  excerpt: '[generated-excerpt]',
  publishedDate: '[YYYY-MM-DD]',
  author: {
    name: 'Claude Code',
    role: 'Written by AI',
  },
  seo: {
    metaDescription: '[generated-meta-description]',
    keywords: [
      '[keyword-1]',
      '[keyword-2]',
      // ... 5-10 keywords
    ],
  },
  content: `[generated-markdown-with-links]`,
  companyIds: ['id1', 'id2', ...],
  sources: [
    {
      title: 'Article or report title',
      url: 'https://...',
      publisher: 'TechCrunch',
      date: '2025-06-01',
    },
    // ... all cited sources
  ],
  tags: ['tag1', 'tag2', ...],
  category: '[analysis|deep-dive|insights|trends|guides]',
  featured: false,
  readingTimeMinutes: [calculated],
};
```

---

## Inline Source Citations

데이터 포인트에 출처가 있을 때 인라인 citation 칩을 사용:

```markdown
Harvey reached $190M ARR by end of 2025 [↗ Sacra](https://sacra.com/c/harvey/).
```

**CRITICAL**: 링크 텍스트는 반드시 `↗ ` (화살표 + 공백)으로 시작해야 함.

**Citation 삽입 기준**:
- 구체적 숫자 (ARR, valuation, funding, 직원 수)
- 인용문 (CEO 발언, 인터뷰)
- 특정 이벤트 (Series B 발표, 제품 출시)
- 일반적 사실이나 의견은 citation 불필요

마크다운 content에 `## Sources` 섹션 넣지 말 것 — `sources` 배열이 페이지 하단에 자동 렌더링됨.

---

## Article Typography & Visual Rules

Articles are rendered inside `.article-content` CSS cascade via `<MarkdownRenderer>`. All styling is handled automatically — **never add inline styles or HTML in markdown content**.

### Heading Hierarchy (Strict)

Use proper heading levels — CSS assigns distinct size, weight, and spacing per level:

```
h2 — Major sections (7rem top margin acts as visual divider)
h3 — Sub-sections within h2
h4 — Groups within h3 (e.g., "Business Model", "Why Their Model is Strong")
```

**Rules:**
- **Never skip levels** (h2 → h4 without h3)
- **Never use `---` (hr) as section divider** — h2's 7rem gap replaces it visually (hr is hidden in article CSS)
- Use `---` only in the source template between Methodology and Main Content for legacy compatibility
- Bold-leading lines (`**Revenue Model**:`) followed by bullet lists get automatic tight spacing via CSS `:has()`

### Data Visualization

**Do NOT use ASCII art, box-drawing characters, or code blocks for infographics.**

When an article contains numeric/timeline data that benefits from visualization:

1. **Use `<!-- viz:id -->` placeholders** in the markdown content where a chart should appear
2. **Create a numeric data file** at `src/data/articles/visualizations/[slug]-data.ts`
3. **Create visualization components** or reuse existing ones from `src/components/visualizations/`
4. **Wire up in `ArticleVisualizations.tsx`** at `src/app/insights/[slug]/ArticleVisualizations.tsx`

**Available visualization components:**
- `FundingTimeline` — Horizontal SVG timeline for funding rounds (per company)
- `ComparisonChart` — Horizontal bar chart comparing companies
- `GrowthTrajectory` — D3 log-scale line chart of cumulative funding over time

**Placeholder example in markdown:**
```
#### Timeline Breakdown
- **Seed**: June 2023 — €105M
- **Series A**: December 2023 — €385M

<!-- viz:mistral-timeline -->

#### Business Model
```

**Data file template** (`src/data/articles/visualizations/[slug]-data.ts`):
```typescript
import type { CompanyFunding } from '@/components/visualizations/types';

export const fundingData: readonly CompanyFunding[] = [
  {
    id: 'company-id',
    name: 'Company Name',
    emoji: '🏆',
    tagline: 'One-line description',
    rounds: [
      { name: 'Seed', amount: '$5M', date: "Jun '23", monthsFromSeed: 0 },
      { name: 'Series A', amount: '$50M', date: "Dec '23", monthsFromSeed: 6 },
    ],
    currentValuation: '$1B',
    seedToSeriesBMonths: 12,
    totalFunding: '$55M',
    color: 'var(--accent)',
  },
];
```

**When to include visualizations:**
- Funding timelines (Seed → Series B progression)
- Company comparisons with numeric data
- Growth trajectory over time
- Any data that would otherwise be an ASCII table or code block

**When NOT to include visualizations:**
- Simple metric lists (just use bullet points)
- Qualitative comparisons (use prose)
- Single data points (inline in text)

---

## Quality Standards

### Before File Creation - Validate:

- [ ] Title: 55-60 chars
- [ ] Meta description: 150-160 chars
- [ ] Excerpt: 150-200 chars
- [ ] Slug: URL-safe, unique, lowercase with hyphens
- [ ] All companyIds exist in database
- [ ] Company links: first mention only, properly formatted
- [ ] No duplicate links
- [ ] Category matches content type
- [ ] Tags relevant and specific
- [ ] Reading time calculated (word count ÷ 200)

### Content Quality:

- [ ] Data-driven: leads with numbers/metrics
- [ ] Objective: professional tone, no hype
- [ ] Designer perspective: evaluates through design lens
- [ ] Scannable: headers, bullets, short paragraphs
- [ ] Actionable: clear insights and takeaways
- [ ] 5-10 minute reading time (1000-2000 words)

### Typography & Visual:

- [ ] Heading hierarchy: h2 → h3 → h4 (no skipping)
- [ ] No `---` used as section divider (h2 gap handles it)
- [ ] No ASCII art or code blocks for data visualization
- [ ] `<!-- viz:id -->` placeholders for numeric infographics
- [ ] Visualization data file created if placeholders are used
- [ ] Bold-subtitle pattern used for sub-points (e.g., `**Revenue Model**:` → bullets)

---

## Usage Examples

### Example 1: Top N List

```bash
User: /writer "Top 5 AI companies for product designers"

━━━ Writer Skill ━━━

Analyzing topic...
✓ Article type: Ranked list (Top 5)
✓ Keywords: AI companies, product designers, design culture
✓ Auto-selecting companies with strong design teams...
✓ Selected: Linear, Anthropic, Cursor, Vercel, Perplexity

Gathering data from company database...
✓ Metrics collected: ARR, growth, team size, open roles

Generating article in Data-Driven Analytical voice...
✓ SEO metadata generated
✓ Article structured: Intro → Top 5 → Insights → CTA
✓ Company links inserted
✓ Reading time calculated: 7 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Article Draft Ready

Title: "5 Best AI Companies for Product Designers in 2026"
Slug: best-ai-companies-for-designers-2026
Excerpt: Linear ($100M ARR), Anthropic ($7B ARR), and Cursor ($1B ARR) lead in design investment. Analysis of culture, growth, and 15+ open roles.

Companies: Linear, Anthropic, Cursor, Vercel, Perplexity
Reading time: 7 minutes
Category: analysis

[Full article content shown here]

✅ Approve and create file
✏️  Edit SEO metadata
🔄 Regenerate article
❌ Cancel

User: ✅ Approve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Created /src/data/articles/content/best-ai-companies-for-designers-2026.ts
✅ Updated /src/data/articles/index.ts

Next steps:
1. npm run build
2. npm run dev → http://localhost:3000/insights/best-ai-companies-for-designers-2026
3. Verify company links work
4. git add + commit + deploy
```

### Example 2: Comparison

```bash
User: /writer "Anthropic vs OpenAI: Which is better for product designers?"

━━━ Writer Skill ━━━

Analyzing topic...
✓ Article type: Comparison (2 companies)
✓ Companies: Anthropic, OpenAI
✓ Angle: Designer perspective

Gathering data...
✓ Anthropic: $7B ARR, 7x YoY, 32% enterprise share, 8 design roles
✓ OpenAI: $20B ARR, 3x YoY, 800M users, 12 design roles

Generating comparison...
✓ Side-by-side metrics
✓ Designer culture analysis
✓ Role opportunities

Article Draft Ready

Title: "Anthropic vs OpenAI: Product Designer Perspective 2026"
Slug: anthropic-vs-openai-product-designers-2026
Excerpt: Anthropic leads in design craft (32% enterprise), while OpenAI dominates consumer (800M users). Data-driven comparison for designers.

[Full comparison article]

✅ Approve and create file
```

### Example 3: Trend Analysis

```bash
User: /writer "Why developer tools dominate AI hypergrowth"

━━━ Writer Skill ━━━

Analyzing topic...
✓ Article type: Trend analysis
✓ Keywords: developer tools, hypergrowth
✓ Auto-selecting dev tool companies...
✓ Selected: Cursor, Linear, Replit, Vercel, Anthropic, Perplexity

Analyzing pattern...
✓ Insight: 6 of top 10 fastest-growing build for developers
✓ Data: Bottom-up adoption, PLG motion, faster developer adoption

Article Draft Ready

Title: "Developer Tools Dominate AI Hypergrowth: Here's Why"
Slug: developer-tools-ai-hypergrowth-2026
Excerpt: 6 of the 10 fastest-growing AI companies build for developers. Analysis of bottom-up adoption, PLG motion, and developer-first culture.

[Full trend analysis]

✅ Approve
```

---

## Integration with AIDO

### Dependencies

**Required Access:**
- `/src/data/companies/` - company database
- `/src/data/articles/types.ts` - Article interface
- `/src/data/articles/utils.ts` - helper functions
- `/src/data/articles/content/` - existing articles for style reference

**Tools Used:**
- `Read` - fetch company data, existing articles
- `Grep` - search companies by keywords
- `Write` - create new article file
- `Edit` - update articles index

### Article Categories

Map topic to category:
- "Top N", "fastest", "best", rankings → `analysis`
- Company-specific deep research, "[Company] deep dive" → `deep-dive`
- "trend", "why", "pattern" → `insights`
- "how to", "guide", "evaluate" → `guides`
- Other → `trends`

### Content Rules (CRITICAL)

- **Never start markdown content with `# Title`** — the page header already renders the title
- Content should start directly with the first paragraph or h2 section
- `stripLeadingH1()` exists as a safety net but do NOT rely on it
- All articles use the same full-width card layout on the list page (no grid)
- Articles are sorted by publishedDate descending (newest first)

---

## Error Handling

### No Matching Companies
```
⚠️  No companies found matching "[topic]"

Suggestions:
- Try broader keywords
- Check company database for available companies
- Manually specify company IDs
```

### Slug Already Exists
```
⚠️  Article slug "[slug]" already exists

Options:
- Append year: [slug]-2026
- Append version: [slug]-v2
- Enter custom slug
```

### Invalid Company IDs
```
⚠️  Company ID "[id]" not found in database

Fix:
- Remove from companyIds
- Check correct ID in /src/data/companies/
```

---

## Future Enhancements

### V2 Features
- **Multi-language**: Korean article support
- **Data fetching**: Auto-fetch latest metrics from Crunchbase
- **Image generation**: Auto-generate OG images with key metrics
- **A/B testing**: Generate 2-3 title/meta variations

### Advanced Automation
- **Topic suggestions**: Based on recent company data updates
- **Update alerts**: Notify when company data changes (re-write needed)
- **Performance tracking**: Analyze article engagement, suggest optimizations

---

## Related Skills

- `/company-researcher` - gather company data before writing
- `/job-scraper` - get latest design roles to mention in articles
- `/skill-create` - used to create this writer skill

---

**This skill turns blog writing from 2-3 hours → 10 minutes.**
