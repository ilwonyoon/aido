#!/bin/bash
set -e

# ============================================================
# Daily Auto Research Pipeline
# Picks the next Tier 0/1 company, runs deep research via
# Claude CLI, commits the result, and opens/updates a PR.
# ============================================================

# --- Full binary paths (launchd does not source shell profile) ---
NODE="/usr/local/bin/node"
NPX="/usr/local/bin/npx"
GIT="/usr/bin/git"
GH="/opt/homebrew/bin/gh"
CLAUDE="/Users/ilwonyoon/.local/bin/claude"

PROJECT_DIR="/Users/ilwonyoon/Documents/AIDO/aido"
LOG_FILE="${PROJECT_DIR}/scripts/daily-research-log.json"
OUTPUT_LOG="${PROJECT_DIR}/scripts/daily-research-output.log"
BRANCH="company-researching"

TIMESTAMP=$(date '+%Y-%m-%dT%H:%M:%S')
DATE_SHORT=$(date '+%d/%m/%y - %H:%M:%S')

log() {
  echo "[$(date '+%H:%M:%S')] $1" | tee -a "${OUTPUT_LOG}"
}

update_log_file() {
  local company_id="$1"
  local company_name="$2"
  local tier="$3"
  local status="$4"
  local duration="$5"
  local error_msg="${6:-}"

  # Build the new run entry (pure bash, no jq dependency)
  local entry="{\"timestamp\":\"${TIMESTAMP}\",\"companyName\":\"${company_name}\",\"companyId\":\"${company_id}\",\"tier\":${tier},\"status\":\"${status}\",\"durationSeconds\":${duration},\"error\":\"${error_msg}\"}"

  # Read existing log, insert new run, update lastRun
  local tmp_file="${LOG_FILE}.tmp"
  ${NODE} -e "
    const fs = require('fs');
    const log = JSON.parse(fs.readFileSync('${LOG_FILE}', 'utf-8'));
    const entry = ${entry};
    const updated = {
      ...log,
      lastRun: '${TIMESTAMP}',
      runs: [...log.runs, entry]
    };
    fs.writeFileSync('${tmp_file}', JSON.stringify(updated, null, 2) + '\n');
  "
  mv "${tmp_file}" "${LOG_FILE}"
}

# ============================================================
# Step 1: Pick the next company
# ============================================================
log "=== Daily Research Pipeline START ==="
log "Step 1: Picking next company..."

cd "${PROJECT_DIR}"
PICK_RESULT=$($NPX tsx scripts/pick-next-research.ts)

if [ "${PICK_RESULT}" = "NONE" ]; then
  log "All companies completed. Nothing to do."
  exit 0
fi

# Parse: "CompanyName|company-id|tier"
IFS='|' read -r COMPANY_NAME COMPANY_ID TIER <<< "${PICK_RESULT}"
log "Selected: ${COMPANY_NAME} (${COMPANY_ID}) — Tier ${TIER}"

START_TIME=$(date +%s)

# ============================================================
# Step 2: Switch to company-researching branch
# ============================================================
log "Step 2: Switching to ${BRANCH} branch..."

${GIT} fetch origin "${BRANCH}" 2>/dev/null || true
${GIT} checkout "${BRANCH}" 2>/dev/null || ${GIT} checkout -b "${BRANCH}"
${GIT} pull origin "${BRANCH}" --rebase 2>/dev/null || true

# ============================================================
# Step 3: Run Claude deep research
# ============================================================
log "Step 3: Running deep research for ${COMPANY_NAME}..."

RESEARCH_PROMPT="/company-deep-research ${COMPANY_NAME}

IMPORTANT INSTRUCTIONS:
- Auto-approve the article when you reach Phase 9 (skip the review gate). Do NOT ask for confirmation.
- Do NOT run any git commands (no git add, git commit, git push, etc.). The orchestrator script handles git.
- Output the research article to src/data/deep-research/${COMPANY_ID}.md
- Complete the full research pipeline end-to-end without stopping."

# 30 minute timeout (1800 seconds)
if timeout 1800 ${CLAUDE} -p "${RESEARCH_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1; then
  log "Claude research completed successfully."
else
  CLAUDE_EXIT=$?
  if [ ${CLAUDE_EXIT} -eq 124 ]; then
    log "ERROR: Claude timed out after 30 minutes."
  else
    log "ERROR: Claude exited with code ${CLAUDE_EXIT}."
  fi
fi

# ============================================================
# Step 4: Verify output exists
# ============================================================
log "Step 4: Verifying research output..."

RESEARCH_FILE="${PROJECT_DIR}/src/data/deep-research/${COMPANY_ID}.md"

if [ ! -f "${RESEARCH_FILE}" ]; then
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  log "ERROR: Research file not found at ${RESEARCH_FILE}"
  update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "error" "${DURATION}" "Research file not generated"
  exit 1
fi

log "Research file verified: ${RESEARCH_FILE}"

# ============================================================
# Step 5: Git add, commit, push
# ============================================================
log "Step 5: Committing and pushing..."

${GIT} add src/data/
${GIT} commit -m "${DATE_SHORT} | deep-research: ${COMPANY_NAME}

Auto-generated deep research article for ${COMPANY_NAME} (Tier ${TIER}).
Pipeline: daily-research.sh"

${GIT} push origin "${BRANCH}"

# ============================================================
# Step 6: Create or update PR
# ============================================================
log "Step 6: Creating/updating PR..."

EXISTING_PR=$(${GH} pr list --head "${BRANCH}" --state open --json number --jq '.[0].number' 2>/dev/null || echo "")

if [ -z "${EXISTING_PR}" ]; then
  ${GH} pr create \
    --base main \
    --head "${BRANCH}" \
    --title "Deep Research: ${COMPANY_NAME}" \
    --body "$(cat <<EOF
## Summary
- Auto-generated deep research for **${COMPANY_NAME}** (Tier ${TIER})
- Generated by \`scripts/daily-research.sh\` pipeline
- Research file: \`src/data/deep-research/${COMPANY_ID}.md\`

## Test plan
- [ ] Verify research content quality
- [ ] Check markdown rendering
- [ ] Confirm data accuracy
EOF
)"
  log "PR created."
else
  log "PR #${EXISTING_PR} already exists. Push updated the PR."
fi

# ============================================================
# Step 7: Update log file
# ============================================================
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

log "Step 7: Updating log file..."
update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "success" "${DURATION}" ""

# Commit the updated log
${GIT} add scripts/daily-research-log.json
${GIT} commit -m "${DATE_SHORT} | log: ${COMPANY_NAME} research complete (${DURATION}s)"
${GIT} push origin "${BRANCH}"

log "=== Daily Research Pipeline COMPLETE ==="
log "Company: ${COMPANY_NAME} | Duration: ${DURATION}s | Status: success"
