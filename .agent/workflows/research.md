---
description: Automated Company Research Workflow
---
// turbo-all

This workflow automates the company research process using project-local skills.

1. Run the company researcher skill for a specific company
```bash
/company-researcher <company-name>
```

2. Fetch OG image for the new company
```bash
node scripts/fetch-og-single.mjs <company-id> <company-website>
```

3. Verify the build after data updates
```bash
npm run build
```

4. Create a data-only PR (Codex workflow)
```bash
git add .
git commit -m "$(date +'%d/%m/%y - %H:%M:%S') | Add/update company data"
git push origin company-researching
gh pr create --title "Company data update" --body "Automated data update"
```
