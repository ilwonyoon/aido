# Codex Instructions for AIDO

## Your Role

You are a **data researcher**. Your job is adding and updating company data files in `src/data/companies/`. You do NOT handle UI, components, styling, or infrastructure.

## NEVER Modify UI Files

Do NOT edit files in these directories:

- `src/app/` (pages, layouts)
- `src/components/` (UI components)
- `src/app/globals.css` (styles)
- `src/design/` (design tokens)
- `src/contexts/` (React contexts)
- `src/lib/` (Firebase, utilities)

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

Before deploying, you MUST merge `main` into your branch to get the latest UI:

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
- [List companies added/updated]

## Data changes only
- No UI changes
- Merged latest main before building
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

You do NOT need to do anything else. The entire pipeline is automated.

> **Note**: If the PR touches non-data files (UI, components, etc.), auto-merge is skipped and manual review is required. This is a safety guardrail.

---

## ⚠️ Deployment History & Context

### Why "NEVER deploy" was the original rule

Previously (Jan 2026), Codex was told to NEVER deploy because:

1. **UI Rollback Bug**: The `company-researching` branch did not have the latest UI changes from `main`. When code from this branch was deployed directly, the production website reverted to an older UI version — breaking the live site.

2. **Root Cause**: The `company-researching` branch diverged from `main` and missed UI improvements (click-outside-to-close, scroll position, article typography, OG images, design system v2, location filters, etc.) that were added on `main` or `feature/insight-update`.

3. **Resolution (Feb 2026)**: The workflow now requires `git merge origin/main` BEFORE any build/deploy. This ensures all UI changes are included. Deployment goes through PR → GitHub Actions, not direct Firebase deploy.

4. **Full Automation (Feb 2026)**: Three GitHub Actions now handle the pipeline:
   - `sync-branches.yml`: Auto-merges `main` → `company-researching` on every main push
   - `auto-merge-data-pr.yml`: Auto-merges data-only PRs from `company-researching` when build passes
   - `firebase-deploy.yml` / `firebase-hosting-merge.yml`: Auto-deploys to production on merge to `main`

### Key rule: ALWAYS merge main first

The #1 cause of deployment issues is deploying without the latest `main`. The auto-sync workflow handles this automatically, but if you're in the middle of work, always run Step 1 before creating a PR.

---

## What You CAN Do

1. **Add new company files**: `src/data/companies/[company-id].ts`
2. **Update existing company data**: Open roles, funding, descriptions
3. **Update company index**: `src/data/companies/index.ts` (imports + array)
4. **Fetch OG images for new companies** (see below)
5. **Run research scripts**: Web searches, data gathering
6. **Run `npm run build`** to verify your changes compile
7. **Create PRs to main** following the deployment workflow above

## Git Worktree 환경 (2026-02-10)

로컬 환경이 git worktree로 분리되어 있습니다:

| 디렉토리 | 브랜치 | 용도 |
|-----------|--------|------|
| `aido/` | `main` | UI/배포 (수동) |
| `aido-codex/` | `company-researching` | Codex 데이터 리서치 |
| `aido-daily-research/` | `daily-deep-research` | 자동 딥리서치 파이프라인 |

### 브랜치 규칙
- `company-researching` 브랜치에서만 작업
- `daily-deep-research` 브랜치는 건드리지 말 것 — 자동 파이프라인 전용
- `scripts/daily-research-log.json` 수정 금지 — 파이프라인이 관리
- Always commit your work before finishing
- When ready to deploy: merge main → verify build → push → create PR
- Do NOT force push or rebase — use merge only

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

1. **Batch complete**: You've added or updated 10+ companies
2. **Research task done**: You've finished a specific research request
3. **End of session**: You're done working and have uncommitted changes
4. **Explicitly asked**: The owner tells you to deploy

Follow the Deployment Workflow (Steps 1-4) above. The PR will be auto-merged and deployed without manual intervention.

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

After adding a company file, add it to `src/data/companies/index.ts`:
1. Add the import at the correct alphabetical position
2. Add the variable to the `companies` array

## OG Images (Required for Every New Company)

Every company MUST have an OG image in `public/og-images/`. The company detail page displays this image as a banner at the top.

### How to add OG images

**After creating a company file**, run the fetch script:

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

If `fetch-og-single.mjs` fails (no OG image found, network error, etc.):
1. Try the company's main product page URL instead of homepage
2. If still no image, set `ogImage: ''` in the company file and move on
3. Note which companies are missing images in your commit message

### Verification

After adding companies, verify OG images exist:
```bash
ls public/og-images/{company-id}-og.webp
```

### Batch processing

If adding many companies at once, you can run the batch pipeline:
```bash
npm run og-pipeline
```

This exports all companies, fetches missing OG images, and populates the data.

## String Safety

- Use double quotes for strings containing apostrophes: `"Mother Nature's farmacy"`
- Variable names cannot start with numbers: use `elevenX` not `11x`
- Always run `npm run build` after changes to catch syntax errors
