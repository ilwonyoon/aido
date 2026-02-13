# Codex Instructions for AIDO

## Your Role

You are a **company data researcher** for AIDO — an AI startup intelligence system for product designers. Your job is researching AI-native companies and producing high-quality, verified data files.

**You MUST follow the skill workflows** in `.codex/skills/` for every task. These are not optional reference documents — they are your standard operating procedures.

---

## ⚠️ CRITICAL: Mandatory Skill Workflows

Every company you add or update MUST go through these skills **in order**:

### Step 1: Job Scraper (REQUIRED for every company)

Follow `.codex/skills/job-scraper/SKILL.md` exactly.

```
Input:  company name or website
Output: openRoles TypeScript array
```

- Search career pages, LinkedIn, Greenhouse, Ashby, Lever
- Only collect Product Design roles (not Brand, Content, Visual, or Design Engineer)
- If career page blocks scraping, use fallback: HTTP retry → ATS direct endpoint
- **NEVER leave openRoles as `[]` without actually checking** — empty is OK only after verified search

### Step 2: Company Researcher (REQUIRED for every company)

Follow `.codex/skills/company-researcher/SKILL.md` exactly.

```
Input:  company name
Output: complete Company TypeScript file + OG image
```

This skill internally calls Job Scraper (Step 1) first. Key requirements:
- **Multi-source verification**: Every key field (funding, valuation, remote policy, founders) needs 2+ sources
- **Source priority**: Company official site > Crunchbase/PitchBook > TechCrunch/Reuters > startups.gallery (hint only)
- **Unknown 최소화**: Exhaust all search avenues before marking a field `'Unknown'`
- **OG image**: Run `node scripts/fetch-og-single.mjs <id> <website>` after creating the file

### Step 3: Deep Research (Tier 0/1 only)

Follow `.codex/skills/company-deep-research/SKILL.md` exactly.

```
Input:  company name (must already have company file from Step 2)
Output: deep research report (.md) + article (.ts) + company data update
```

Only run this for companies with fitScore >= 8. Produces:
- Full 9-phase analysis (Design Team → Business → Product → Upside/Downside → Competition → Decision)
- Inline citations using `[↗ Publisher](url)` pattern
- Article with `sources` array containing `{title, url, publisher, date}`

### Step 4: Writer (optional, topic-driven)

Follow `.codex/skills/writer/SKILL.md` exactly.

```
Input:  article topic
Output: TypeScript article file + index update
```

---

## 🎯 Target Company Criteria (MUST FOLLOW)

### What to research

| Criteria | Required |
|----------|----------|
| **AI-Native Level** | **A or B only** — C and D are out of scope |
| **Stage** | Seed or later (skip pre-product stealth companies) |
| **Total Funding** | $5M+ minimum (skip micro-funded companies) |
| **Product** | Must have a shipped product (not just research/consulting) |
| **Design Relevance** | Must have or plausibly need Product Designers |

### Level definitions

- **Level A (AI-Native)**: AI IS the product. Zero-to-one innovation. (Anthropic, Cursor, Perplexity, Midjourney)
- **Level B (AI-Core)**: AI is the core differentiator. (Glean, Harvey, Superhuman, ElevenLabs)
- **Level C (AI Feature)**: AI is a major feature but not core. **→ DO NOT ADD**
- **Level D (AI Minor)**: AI is a minor add-on. **→ DO NOT ADD**

### What NOT to research

- Companies with < $5M funding
- Companies that are acquired, shut down, or pre-product
- Level C/D companies (AI is not their core)
- Companies outside AI/tech (even if they use AI internally)
- Duplicate/overlapping companies already in the database

### How to find target companies

Use these sources in priority order:

1. **Tier 0/1 Queue** — Check `scripts/pick-next-research.ts` for curated priority list
2. **AIDO existing data** — Companies in `src/data/companies/` that need updates (empty openRoles, outdated funding)
3. **Trusted directories** — YC batch pages, a16z portfolio, Sequoia portfolio, Index Ventures
4. **Industry sources** — TechCrunch AI coverage, The Information, CB Insights AI 100

**NEVER bulk-add companies from random directories.** Research one company thoroughly, then move to the next.

---

## Quality Gates (MUST pass before committing)

Before adding any company to the codebase, verify:

| Check | Requirement |
|-------|-------------|
| **AI Level** | Must be A or B — if C or D, do not add |
| **openRoles** | Job scraper must have been run (empty `[]` is OK if verified no roles exist) |
| **Funding data** | `totalFunding` and `stage` must be filled from Crunchbase or equivalent |
| **Founders** | At least 1 founder with name, role, and background |
| **Description** | Must accurately describe the product in 1-2 sentences |
| **Category** | Must be set with `as const` — valid values in types.ts |
| **Sources** | At least 3 verified sources with URLs |
| **OG Image** | Must run `fetch-og-single.mjs` — set `ogImage: ''` only if script fails |
| **Build** | `npm run build` must pass after adding the company |

**If a company doesn't meet these criteria, do not add it.**

---

## Workflow: Adding a New Company (Step by Step)

### 1. Select target company
- Check `scripts/pick-next-research.ts` Tier 0/1 queue first
- Or identify a Level A/B company from trusted sources
- Verify it's not already in `src/data/companies/`

### 2. Run Job Scraper
- Follow `.codex/skills/job-scraper/SKILL.md`
- Record the openRoles output

### 3. Run Company Researcher
- Follow `.codex/skills/company-researcher/SKILL.md`
- This produces the complete `.ts` file with all fields
- Multi-source verification for all key fields

### 4. Fetch OG Image
```bash
node scripts/fetch-og-single.mjs <company-id> <website-url>
```

### 5. Update index
- Add import to `src/data/companies/index.ts` (alphabetical order)
- Add variable to `companies` array
- **Verify the file exists** before adding the import

### 6. Build verification
```bash
npm run build
```

### 7. Commit
```bash
git add src/data/companies/<id>.ts src/data/companies/index.ts public/og-images/<id>-og.webp
git commit -m "feat: add <Company Name> (Level <A/B>, <stage>)"
```

### 8. Repeat or PR
- Research the next company, or
- Create a PR when you have 3-5 companies ready (see Deployment Workflow below)

---

## Workflow: Updating an Existing Company

### When to update
- openRoles is empty `[]` and hasn't been checked recently
- Funding data is outdated (new round announced)
- Missing fields (founders, designerLinks, competitors)

### How to update
1. Read the existing file
2. Run Job Scraper to refresh openRoles
3. Research and fill missing fields
4. Update `lastUpdated` field
5. Run `npm run build`
6. Commit with descriptive message

---

## NEVER Modify UI Files

Do NOT edit files in these directories:

- `src/app/` (pages, layouts)
- `src/components/` (UI components)
- `src/app/globals.css` (styles)
- `src/design/` (design tokens)
- `src/contexts/` (React contexts)
- `src/lib/` (Firebase, utilities)

---

## NEVER Run Direct Deploy Commands

**Do NOT run:**

- `firebase deploy`
- `npm run deploy`
- `npm run build && firebase deploy`

Deployment happens automatically via GitHub Actions when code is merged to `main`.

---

## Deployment Workflow (Safe Auto-Deploy)

When your research work is ready to go live, follow this EXACT workflow:

### Step 1: Sync with main (CRITICAL)

```bash
git fetch origin main
git merge origin/main --no-edit
```

If there are merge conflicts in company data files, resolve by keeping your newer research data. If there are conflicts in UI files (src/app/, src/components/), STOP and do NOT proceed — notify the user.

### Step 2: Verify the build

```bash
npm run build
```

If the build fails, fix ONLY data issues (missing fields like `category`, type errors in company files). Do NOT fix UI-related build errors — those require owner intervention.

### Step 3: Push and create PR

```bash
git push origin company-researching
gh pr create --title "Company data update: [brief summary]" --body "$(cat <<'EOF'
## Summary
- [List companies added/updated with AI Level]

## Quality checks
- All companies Level A or B
- Job scraper run for each company
- OG images fetched
- Build verified: passes

## Auto-deploy
This PR will auto-deploy to production when merged.
EOF
)"
```

### Step 4: Done — fully automated

GitHub Actions will:
1. Build and create a preview deployment for the PR
2. **Auto-merge the PR** if ONLY data files changed (`src/data/`, `public/og-images/`)
3. Auto-deploy to production once merged to `main`

---

## Git 환경

Codex는 `aido/` 레포에서 작업하며, **직접 새 브랜치를 생성**합니다.

### ⚠️ 절대 규칙
- **`main` 브랜치에서 직접 작업하지 말 것** — 항상 새 브랜치 생성 후 작업
- 브랜치명 형식: `company-research-MMDD` (예: `company-research-0213`)
- `daily-deep-research` 브랜치는 건드리지 말 것 — 자동 파이프라인 전용
- `scripts/daily-research-log.json` 수정 금지 — 파이프라인이 관리
- Always commit your work before finishing
- When ready to deploy: merge main → verify build → push → create PR
- Do NOT force push or rebase — use merge only

### 작업 시작 시 환경 확인
```bash
# 1. 현재 브랜치 확인
git branch --show-current

# 2. main이면 새 브랜치 생성
git checkout -b company-research-$(date +%m%d)

# 3. 최신 main과 동기화
git fetch origin main && git merge origin/main --no-edit
```

### 자동 머지 조건
- PR이 `company-researching` 또는 `daily-deep-research`에서 온 것
- 변경 파일이 `src/data/`, `public/og-images/`, `scripts/daily-research-log.json`에만 해당
- Firebase PR 빌드가 성공한 경우

## Auto-Sync (Background)

A GitHub Action automatically merges `main` into `company-researching` whenever `main` is updated. This keeps your branch current with the latest UI. You generally don't need to worry about this, but if you see merge conflicts during your work, run:

```bash
git fetch origin main
git merge origin/main --no-edit
```

And resolve data file conflicts by keeping your newer research data.

## When to Create a PR (Auto-Deploy Trigger)

Create a PR to deploy your work when ANY of these apply:

1. **3-5 companies added**: Quality batch (not 37 at once)
2. **Research task done**: You've finished a specific research request
3. **End of session**: You're done working and have uncommitted changes
4. **Explicitly asked**: The owner tells you to deploy

---

## Company Data Format

Follow the existing pattern in `src/data/companies/`. Key fields:

```typescript
export const companyName: Company = {
  id: 'company-id',           // kebab-case, matches filename
  name: 'Company Name',
  category: 'developer-tools' as const,  // REQUIRED — see types.ts for options
  description: 'One sentence.',
  website: 'https://...',
  // ... see src/data/types.ts for full interface
};
```

**IMPORTANT**: The `category` field is REQUIRED. Valid values:
- `'ai-models'` — Foundation models, AI research (Anthropic, OpenAI)
- `'developer-tools'` — Code assistants, dev infra (Cursor, Replit)
- `'creative-media'` — Image/video/audio gen, design tools (Midjourney, Runway)
- `'productivity'` — Writing, notes, search (Notion, Perplexity)
- `'sales-marketing'` — CRM, marketing (Gong, Intercom)
- `'enterprise-ops'` — Business automation, data (Ramp, Scale AI)
- `'vertical-saas'` — Healthcare, legal, fintech (Harvey, Abridge)

### AI-Native Level (REQUIRED)

```typescript
aiNativeLevel: 'A' | 'B',  // Only A or B — do NOT add C or D companies
aiNativeLevelDescription: string,  // Explain why this level
```

- **A**: AI IS the product (Anthropic, Cursor, Perplexity)
- **B**: AI is the core differentiator (Glean, Harvey, ElevenLabs)

After adding a company file, add it to `src/data/companies/index.ts`:
1. Add the import at the correct alphabetical position
2. Add the variable to the `companies` array
3. **CRITICAL**: Run `npm run build` to verify the import works

### ⚠️ index.ts 수정 시 필수 체크
- import 추가 전에 해당 `.ts` 파일이 실제로 존재하는지 확인
- 파일이 없는 회사를 index에 추가하면 **빌드가 깨져서 전체 배포가 실패함**
- 작업 완료 후 반드시 `npm run build` 실행하여 빌드 확인

---

## OG Images (Required for Every New Company)

Every company MUST have an OG image in `public/og-images/`.

### How to add OG images

```bash
node scripts/fetch-og-single.mjs <company-id> <company-website>
```

Example:
```bash
node scripts/fetch-og-single.mjs anthropic https://anthropic.com
```

This will:
1. Fetch the OG image from the company's website via Microlink API
2. Optimize it (1440px, WebP, 90% quality)
3. Save to `public/og-images/{company-id}-og.webp`
4. Update the `ogImage` field in the company's `.ts` file

### If the script fails

1. Try the company's main product page URL instead of homepage
2. If still no image, set `ogImage: ''` in the company file and move on
3. Note which companies are missing images in your commit message

---

## String Safety

- Use double quotes for strings containing apostrophes: `"Mother Nature's farmacy"`
- Variable names cannot start with numbers: use `elevenX` not `11x`
- Always run `npm run build` after changes to catch syntax errors
