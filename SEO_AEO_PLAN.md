# AIDO SEO & AEO Optimization Plan

> Goal: Become the go-to curated job board for AI Product Designers

## Target Keywords
- **Primary:** "AI product designer jobs"
- **Secondary:** "AI design jobs", "product designer AI companies", "AI startup designer jobs"
- **Long-tail:** "AI-native product designer", "Level A AI company design jobs"

---

## Phase 1: SEO Foundation (Week 1-2)

### 1.1 Meta Tags & Open Graph
**Current state:** Basic meta tags
**Needed:**
```typescript
// app/layout.tsx - Global defaults
export const metadata = {
  title: 'AIDO - AI Product Designer Jobs | Curated AI Company Listings',
  description: '57 curated AI companies with product design roles. Filter by AI-native level, funding stage, and location. Updated daily.',
  keywords: ['AI product designer', 'AI design jobs', 'AI startup jobs', 'product designer jobs'],
  openGraph: {
    title: 'AIDO - AI Product Designer Jobs',
    description: '57 curated AI companies with product design roles',
    url: 'https://aido-d2cc0.web.app',
    siteName: 'AIDO',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@aido' },
}

// app/company/[id]/page.tsx - Dynamic per company
export async function generateMetadata({ params }): Promise<Metadata> {
  const company = getCompanyById(params.id);
  return {
    title: `${company.name} - Product Design Jobs | AIDO`,
    description: `${company.openRoles.length} open product design roles at ${company.name}. ${company.description}`,
    openGraph: {
      title: `${company.name} Product Design Jobs`,
      description: company.description,
      images: [{ url: `/logos/${company.id}.png` }],
    },
  };
}
```

### 1.2 Structured Data (Schema.org)
**Priority: JobPosting schema for each role**

```typescript
// components/JobSchema.tsx
export function JobSchema({ company, role }: { company: Company; role: OpenRole }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": role.title,
    "description": role.aboutRole,
    "datePosted": company.lastUpdated,
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days
    "employmentType": role.type === 'full-time' ? 'FULL_TIME' : 'CONTRACTOR',
    "hiringOrganization": {
      "@type": "Organization",
      "name": company.name,
      "sameAs": company.website,
      "logo": `https://aido-d2cc0.web.app/logos/${company.id}.png`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": company.headquarters.split(',')[0],
        "addressCountry": "US"
      }
    },
    "baseSalary": role.compensation ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": parseCompensation(role.compensation),
        "unitText": "YEAR"
      }
    } : undefined,
    "applicationContact": {
      "@type": "ContactPoint",
      "contactType": "recruitment",
      "url": role.url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 1.3 Sitemap Generation
```typescript
// app/sitemap.ts
import { companies } from '@/data/companies';

export default function sitemap() {
  const baseUrl = 'https://aido-d2cc0.web.app';

  const companyPages = companies.map(c => ({
    url: `${baseUrl}/company/${c.id}`,
    lastModified: c.lastUpdated,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ai-levels`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    ...companyPages,
  ];
}
```

### 1.4 robots.txt
```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/analytics', '/api/'],
    },
    sitemap: 'https://aido-d2cc0.web.app/sitemap.xml',
  };
}
```

---

## Phase 2: Content Optimization (Week 3-4)

### 2.1 Job Listing Page (NEW)
**Path:** `/jobs`
**Purpose:** Aggregate all open roles from all companies

```typescript
// app/jobs/page.tsx
export const metadata = {
  title: 'Product Designer Jobs at AI Companies | 127 Open Roles',
  description: 'Browse 127 product design jobs at 57 AI companies. Filter by AI-native level, compensation, location. Updated daily.',
};

// Features:
- List all openRoles from all companies
- Filterable: AI Level, Location, Compensation, Remote/Hybrid/Onsite
- Sortable: Most recent, Highest paid, AI Level
- Each card links to company detail page
- Rich snippets with JobPosting schema
```

### 2.2 Company Profile SEO Content
Add SEO-friendly text sections:

```typescript
// In company detail page, add:
<section className="prose">
  <h2>About {company.name} Product Design Team</h2>
  <p>
    {company.name} is hiring {company.openRoles.length} product designers.
    As a Level {company.aiNativeLevel} AI-native company, designers at {company.name}
    work on {company.aiDesignChallenges.join(', ')}.
  </p>

  <h3>Why Join {company.name} as a Product Designer?</h3>
  <ul>
    {company.tracking.whyJoin.map(reason => <li>{reason}</li>)}
  </ul>

  <h3>Design Team Size</h3>
  <p>{company.designTeam.teamSize} designers</p>

  <h3>Product Design Work Type at {company.name}</h3>
  - Logic/Behavior Design: {company.designWorkType.logicBehavior.level}
  - Evaluation Design: {company.designWorkType.evaluation.level}
  - Interface Design: {company.designWorkType.interface.level}
</section>
```

### 2.3 FAQ Section (AEO Critical)
**Path:** `/faq` or add to homepage

```markdown
## Frequently Asked Questions

### What is an AI-native company?
AI-native companies build products where AI is the core...

### What is a Level A AI company?
Level A companies are zero-to-one AI products where AI IS the product...

### How often are job listings updated?
Daily at 6am PST using automated scraping...

### What makes a good AI product designer?
AI product designers need skills in...

### Which AI companies are hiring product designers?
Currently {count} companies are hiring: {list}...

### What's the average salary for AI product designers?
Range: $150K - $440K based on our data...

### Do I need AI experience to work at AI companies?
Depends on AI-native level...
```

---

## Phase 3: AEO (Answer Engine Optimization)

### 3.1 Structured FAQ with Schema
```typescript
// components/FAQSchema.tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI-native company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI-native companies are..."
      }
    },
    // ... more questions
  ]
};
```

### 3.2 Rich Snippets
- **Breadcrumbs:** Homepage > Companies > Anthropic
- **Organization:** Company info
- **JobPosting:** Each role
- **HowTo:** "How to find AI product design jobs"

### 3.3 Natural Language Content
AI search engines (Perplexity, ChatGPT, Gemini) prefer:
- Complete sentences
- Clear structure
- Factual data with sources
- Up-to-date timestamps

**Example:**
```
"As of January 2026, Anthropic ($183B valuation) has 3 open product design roles
including a Senior Product Designer position in San Francisco. Anthropic is a Level A
AI-native company, meaning AI is the core product. Product designers at Anthropic work
on character training, trust design, and conversational UX."
```

---

## Phase 4: Performance & Technical SEO

### 4.1 Core Web Vitals
**Current:** Need to measure
**Target:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

**Optimizations:**
- Image optimization (next/image)
- Font optimization (next/font)
- Lazy loading
- Code splitting

### 4.2 Mobile-First (Already Done ✅)
- Responsive design
- Touch targets (44px minimum)
- Fast mobile loading

### 4.3 Clean URLs
**Current:** ✅ Already good
- `/` (homepage)
- `/company/anthropic` (not `/company?id=anthropic`)
- `/ai-levels` (not `/levels`)

---

## Phase 5: Automation (Cron Jobs)

### 5.1 Daily Job Scraper
**Cron:** Every day at 6am PST
**Tool:** Vercel Cron or Firebase Functions

```typescript
// api/cron/update-jobs/route.ts
export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Run job scraper for all companies
  const results = await Promise.all(
    companies.map(async (company) => {
      const jobs = await scrapeJobs(company.website);
      return { companyId: company.id, jobs };
    })
  );

  // Update company files
  await updateCompanyData(results);

  // Trigger rebuild (Vercel Deploy Hook)
  await fetch(process.env.VERCEL_DEPLOY_HOOK);

  return Response.json({ success: true, updated: results.length });
}
```

**vercel.json:**
```json
{
  "crons": [
    {
      "path": "/api/cron/update-jobs",
      "schedule": "0 14 * * *"
    }
  ]
}
```

### 5.2 Weekly Company Data Refresh
**Cron:** Every Sunday at 3am PST
**Updates:**
- Funding data (Crunchbase API)
- Valuation data
- Employee count
- Verify job postings still active

### 5.3 Sitemap Regeneration
Auto-regenerates on deploy (Next.js handles this)

---

## Phase 6: Content Marketing (Optional but Powerful)

### 6.1 Blog/Resources
**Path:** `/blog` or `/resources`
**Topics:**
- "Top 10 AI Companies Hiring Product Designers in 2026"
- "How to Become an AI Product Designer"
- "AI-Native vs AI-Feature Companies: What's the Difference?"
- "Product Design at Level A AI Companies"
- "Interview Guide: Product Design at Anthropic, OpenAI, xAI"

**Benefits:**
- Long-tail keyword targeting
- Backlinks
- Authority building
- AEO optimization (answer common questions)

### 6.2 Weekly Newsletter
- "5 New AI Product Design Jobs This Week"
- Drives repeat traffic
- Email list growth

---

## Phase 7: Backlinks & Authority

### 7.1 Submit to Directories
- **Design job boards:** Cofolios, Wellfound (AngelList), Dribble Jobs
- **AI directories:** There's An AI For That, Futurepedia
- **Startup directories:** Hacker News Jobs, Product Hunt

### 7.2 Community Engagement
- Post on Twitter/X with #AIProductDesign
- Share on Designer News
- Reddit: r/userexperience, r/ProductDesign
- LinkedIn posts

### 7.3 Partner Sites
- Reach out to AI newsletters (Ben's Bites, The Rundown AI)
- Design communities (Designer Hangout, UX Collective)

---

## Implementation Priority

### Must-Have (Week 1-2)
1. ✅ Meta tags + OG images
2. ✅ JobPosting schema for all roles
3. ✅ Sitemap + robots.txt
4. ✅ `/jobs` aggregated listing page
5. ✅ Performance optimization (Core Web Vitals)

### Should-Have (Week 3-4)
6. FAQ page with schema
7. SEO content on company pages
8. Daily cron job scraper
9. Analytics tracking (already done ✅)

### Nice-to-Have (Month 2+)
10. Blog/resources section
11. Weekly newsletter
12. Directory submissions
13. Backlink strategy

---

## Measurement & KPIs

### SEO Metrics
- **Google Search Console:** Impressions, clicks, CTR, position
- **Target:** Top 10 for "AI product designer jobs" within 3 months
- **Backlinks:** Ahrefs/Semrush tracking

### AEO Metrics
- **AI search appearances:** Track "AIDO" mentions in Perplexity, ChatGPT, Gemini
- **Featured snippets:** Track Google featured snippet wins

### Traffic Metrics
- Organic search traffic (Google Analytics 4)
- Job application click-through rate
- User retention (daily active users)

### Business Metrics
- Number of companies tracked: 57 → 100+
- Number of active job listings: Track growth
- Data freshness: % of companies updated in last 7 days

---

## Technical Stack Recommendations

### Cron Jobs
- **Option 1:** Vercel Cron (if moving from Firebase)
- **Option 2:** Firebase Functions + Cloud Scheduler (current Firebase setup)
- **Option 3:** GitHub Actions (free, runs on schedule)

### Job Scraping
- Playwright (already have MCP) ✅
- Bright Data (if need proxies)
- Rate limiting to avoid bans

### SEO Tools
- Google Search Console (free) - **Must have**
- Ahrefs or Semrush (paid) - Track backlinks, keywords
- PageSpeed Insights (free) - Core Web Vitals

---

## Next Steps

1. **Immediate:**
   - Add meta tags + OG images
   - Create `/jobs` page
   - Add JobPosting schema

2. **This week:**
   - Generate sitemap + robots.txt
   - Set up Google Search Console
   - Optimize Core Web Vitals

3. **Next week:**
   - Implement cron job scraper
   - Add FAQ page
   - Submit to directories

4. **Month 2:**
   - Start blog/resources
   - Build backlinks
   - Scale to 100+ companies

---

## Budget (if needed)

- **Free:**
  - Firebase Hosting
  - Google Search Console
  - Firebase Functions (generous free tier)
  - GitHub Actions

- **Optional Paid:**
  - Ahrefs ($99/mo) - SEO tracking
  - Bright Data ($500/mo) - Job scraping at scale
  - OpenAI API ($20/mo) - Content generation

**Total:** $0 initially, scale up as revenue grows

---

## Questions to Decide

1. **Monetization?** (Job board takes 10-20% fee from companies)
2. **User accounts?** (Save favorite companies, job alerts)
3. **Email newsletter?** (Weekly digest of new jobs)
4. **Move from Firebase to Vercel?** (Better Next.js integration, cron jobs)

---

This plan positions AIDO as **the** curated job board for AI product designers, with strong SEO/AEO fundamentals and automation for long-term growth.
