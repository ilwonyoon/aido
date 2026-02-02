# Codex Instructions for AIDO

## Your Role

You are a **data researcher**. Your job is adding and updating company data files in `src/data/companies/`. You do NOT handle UI, components, styling, deployment, or infrastructure.

## NEVER Deploy

**Do NOT run any of the following commands:**

- `firebase deploy`
- `npm run deploy`
- `npm run build && firebase deploy`
- Any variation of deploying to Firebase Hosting

Deployment is handled manually by the project owner from the `main` branch only.

## NEVER Modify UI Files

Do NOT edit files in these directories:

- `src/app/` (pages, layouts)
- `src/components/` (UI components)
- `src/app/globals.css` (styles)
- `src/design/` (design tokens)
- `src/contexts/` (React contexts)
- `src/lib/` (Firebase, utilities)

## What You CAN Do

1. **Add new company files**: `src/data/companies/[company-id].ts`
2. **Update existing company data**: Open roles, funding, descriptions
3. **Update company index**: `src/data/companies/index.ts` (imports + array)
4. **Fetch OG images for new companies** (see below)
5. **Run research scripts**: Web searches, data gathering
6. **Run `npm run build`** to verify your changes compile (but do NOT deploy)

## Branch Rules

- Work on `company-researching` branch or create feature branches from `main`
- Always commit your work before finishing
- Do NOT merge branches — the owner handles merges

## Company Data Format

Follow the existing pattern in `src/data/companies/`. Key fields:

```typescript
export const companyName: Company = {
  id: 'company-id',           // kebab-case, matches filename
  name: 'Company Name',
  description: 'One sentence.',
  website: 'https://...',
  // ... see src/data/types.ts for full interface
};
```

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
