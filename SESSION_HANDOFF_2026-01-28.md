# Session Handoff - 2026-01-28

## Current Branch
- `company-researching`

## What Was Just Completed
- Added 10 SF companies: Infisical, Natural, ClarityCare, Agora, Nooks, Sesame AI, LangChain, Replicate, Tempo, Comulate.
- Updated `src/data/companies/index.ts`, SF unresearched list, and sitemap.
- Ran `npm run build` and deployed via `firebase deploy --only hosting`.
- Hosting URL: `https://aido-d2cc0.web.app`

## Latest Commits (company-researching)
- `40ae921` — Add Infisical, Natural, ClarityCare, Agora, Nooks, Sesame AI, LangChain, Replicate, Tempo, Comulate (SF)
- `c97bda6` — Add Cartesia, Generation Lab, Tensormesh, Unstructured, Alex AI + Mandolin, FurtherAI, Seneca Systems, Rivo

## Important Rules / Constraints
- Always use **job-scraper → company-researcher** order for each company.
- **Job roles: only Product Design IC + Product Design leadership**; exclude brand/visual/etc.
- Proceed by city priority from Startups.gallery; skip companies already in `src/data/companies`.
- Deploy after every **6 companies** (now adjusted to **10** per user request, but still deploy every 6 accumulated).
- Ignore unrelated local changes; do not touch `.claude/memory/session-end.json`.
- Use `company-researching` branch only.

## Known Limitations
- Playwright/MCP browser was failing to launch, so job pages were verified only via non-Playwright sources.

## Next Batch (SF, unresearched list)
From `src/data/research/startups-gallery-bay-area-unresearched-2026-01-27.json` (SF first entries now):
1. pulley
2. lighthouse
3. osmosis
4. zed-dev
5. warmer
6. campfire
7. causal-labs
8. trunk
9. sentient-labs
10. inference-net

## Files Added This Session
- `src/data/companies/infisical.ts`
- `src/data/companies/natural.ts`
- `src/data/companies/claritycare.ts`
- `src/data/companies/agora.ts`
- `src/data/companies/nooks.ts`
- `src/data/companies/sesame-ai.ts`
- `src/data/companies/langchain.ts`
- `src/data/companies/replicate.ts`
- `src/data/companies/tempo.ts`
- `src/data/companies/comulate.ts`

## Files Modified This Session
- `src/data/companies/index.ts`
- `src/data/research/startups-gallery-bay-area-unresearched-2026-01-27.json`
- `public/sitemap.xml`

## To Resume
1. Ensure branch: `git switch company-researching`.
2. Start with next 10 SF companies listed above.
3. Run job-scraper + company-researcher per company.
4. Update index + research list + sitemap.
5. Deploy after 6 companies accumulated.
6. Commit/push with timestamp.

