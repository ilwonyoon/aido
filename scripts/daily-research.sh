#!/bin/bash
# NOTE: No `set -e` — one failed request should not kill the entire pipeline.

# ============================================================
# Daily Auto Research Pipeline
# 1. Processes ALL pending user requests (company-researcher, fast)
# 2. Then picks the next Tier 0/1 company for deep research
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
  local entry="{\"timestamp\":\"${TIMESTAMP}\",\"companyName\":\"${company_name}\",\"companyId\":\"${company_id}\",\"tier\":\"${tier}\",\"status\":\"${status}\",\"durationSeconds\":${duration},\"error\":\"${error_msg}\"}"

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
# Pipeline START
# ============================================================
log "=== Daily Research Pipeline START ==="

cd "${PROJECT_DIR}"

# ============================================================
# PHASE 1: Process ALL pending user requests (company-researcher)
# Uses the lighter company-researcher skill for speed.
# Loops until no more pending requests remain.
# ============================================================
log "=== Phase 1: Processing pending user requests ==="

REQUEST_COUNT=0

while true; do
  REQUEST_RESULT=$($NPX tsx scripts/process-company-requests.ts --next 2>/dev/null || echo "NO_PENDING_REQUESTS")

  if [ "${REQUEST_RESULT}" = "NO_PENDING_REQUESTS" ]; then
    break
  fi

  IFS='|' read -r REQUEST_ID REQUEST_COMPANY REQUEST_WEBSITE <<< "${REQUEST_RESULT}"
  log "Found user request: ${REQUEST_COMPANY} (ID: ${REQUEST_ID})"

  # Mark as researching
  $NPX tsx scripts/process-company-requests.ts --start "${REQUEST_ID}" 2>/dev/null || true

  COMPANY_ID=$(echo "${REQUEST_COMPANY}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-')
  REQ_START=$(date +%s)
  REQ_DATE=$(date '+%d/%m/%y - %H:%M:%S')

  # Build prompt for company-researcher (lighter than deep-research)
  REQ_PROMPT="/company-researcher ${REQUEST_COMPANY}

IMPORTANT INSTRUCTIONS:
- Do NOT run any git commands (no git add, git commit, git push). The pipeline script handles git.
- Complete the full research pipeline end-to-end without stopping."

  if [ -n "${REQUEST_WEBSITE}" ]; then
    REQ_PROMPT="${REQ_PROMPT}
- Company website: ${REQUEST_WEBSITE}"
  fi

  # Run with 30 min timeout (1800s) — background + kill pattern for macOS
  log "Running company-researcher for ${REQUEST_COMPANY}..."
  ${CLAUDE} -p "${REQ_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1 &
  CLAUDE_PID=$!

  ( sleep 1800; kill ${CLAUDE_PID} 2>/dev/null ) &
  WATCHDOG_PID=$!

  if wait ${CLAUDE_PID} 2>/dev/null; then
    kill ${WATCHDOG_PID} 2>/dev/null || true
    log "Research completed for ${REQUEST_COMPANY}."
  else
    CLAUDE_EXIT=$?
    kill ${WATCHDOG_PID} 2>/dev/null || true
    log "WARNING: Claude exited with code ${CLAUDE_EXIT} for ${REQUEST_COMPANY}."
  fi

  # Check result and update Firestore
  COMPANY_FILE="${PROJECT_DIR}/src/data/companies/${COMPANY_ID}.ts"
  REQ_END=$(date +%s)
  REQ_DURATION=$((REQ_END - REQ_START))

  if [ -f "${COMPANY_FILE}" ]; then
    log "Company file created: ${COMPANY_FILE}"
    $NPX tsx scripts/process-company-requests.ts --complete "${REQUEST_ID}" "${COMPANY_ID}" 2>/dev/null || true
    update_log_file "${COMPANY_ID}" "${REQUEST_COMPANY}" "request" "success" "${REQ_DURATION}" ""
    REQUEST_COUNT=$((REQUEST_COUNT + 1))
  else
    log "WARNING: File not generated for ${REQUEST_COMPANY}."
    $NPX tsx scripts/process-company-requests.ts --fail "${REQUEST_ID}" "Company file not generated" 2>/dev/null || true
    update_log_file "${COMPANY_ID}" "${REQUEST_COMPANY}" "request" "error" "${REQ_DURATION}" "Company file not generated"
  fi
done

log "Phase 1 complete: processed ${REQUEST_COUNT} user request(s)."

# Commit all request results if any were processed
if [ ${REQUEST_COUNT} -gt 0 ]; then
  ${GIT} add src/data/ public/ scripts/daily-research-log.json 2>/dev/null || true
  ${GIT} commit -m "${DATE_SHORT} | company-researcher: ${REQUEST_COUNT} user request(s)

Auto-researched via daily-research.sh Phase 1 (user requests)." 2>/dev/null || true
  ${GIT} push origin HEAD 2>/dev/null || true
fi

# ============================================================
# PHASE 2: Deep research for next Tier 0/1 company
# Uses heavier company-deep-research skill.
# ============================================================
log "=== Phase 2: Tier list deep research ==="

PICK_RESULT=$($NPX tsx scripts/pick-next-research.ts 2>/dev/null || echo "NONE")

if [ "${PICK_RESULT}" = "NONE" ]; then
  log "All tier list companies completed. Nothing to do."
  log "=== Daily Research Pipeline COMPLETE ==="
  exit 0
fi

# Parse: "CompanyName|company-id|tier"
IFS='|' read -r COMPANY_NAME COMPANY_ID TIER <<< "${PICK_RESULT}"
log "Selected: ${COMPANY_NAME} (${COMPANY_ID}) — Tier ${TIER}"

START_TIME=$(date +%s)

# Switch to company-researching branch
log "Switching to ${BRANCH} branch..."

${GIT} stash --include-untracked 2>/dev/null || true
${GIT} fetch origin "${BRANCH}" 2>/dev/null || true
if ${GIT} show-ref --verify --quiet "refs/heads/${BRANCH}"; then
  ${GIT} checkout "${BRANCH}"
else
  ${GIT} checkout -b "${BRANCH}" "origin/${BRANCH}" 2>/dev/null || ${GIT} checkout -b "${BRANCH}"
fi
${GIT} pull origin "${BRANCH}" --rebase 2>/dev/null || true

# Run Claude deep research
log "Running deep research for ${COMPANY_NAME}..."

RESEARCH_PROMPT="/company-deep-research ${COMPANY_NAME}

IMPORTANT INSTRUCTIONS:
- Auto-approve the article when you reach Phase 9 (skip the review gate). Do NOT ask for confirmation.
- Do NOT run any git commands (no git add, git commit, git push, etc.). The orchestrator script handles git.
- Output the research article to src/data/deep-research/${COMPANY_ID}.md
- Complete the full research pipeline end-to-end without stopping."

# 60 minute timeout (3600 seconds) — background + kill pattern for macOS
${CLAUDE} -p "${RESEARCH_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1 &
CLAUDE_PID=$!

( sleep 3600; kill ${CLAUDE_PID} 2>/dev/null ) &
WATCHDOG_PID=$!

if wait ${CLAUDE_PID} 2>/dev/null; then
  kill ${WATCHDOG_PID} 2>/dev/null || true
  log "Claude research completed successfully."
else
  CLAUDE_EXIT=$?
  kill ${WATCHDOG_PID} 2>/dev/null || true
  if [ ${CLAUDE_EXIT} -eq 137 ] || [ ${CLAUDE_EXIT} -eq 143 ]; then
    log "ERROR: Claude timed out after 60 minutes."
  else
    log "ERROR: Claude exited with code ${CLAUDE_EXIT}."
  fi
fi

# Verify output exists
RESEARCH_FILE="${PROJECT_DIR}/src/data/deep-research/${COMPANY_ID}.md"

if [ ! -f "${RESEARCH_FILE}" ]; then
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  log "ERROR: Research file not found at ${RESEARCH_FILE}"
  update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "error" "${DURATION}" "Research file not generated"
  # Don't exit — pipeline already processed user requests above
  log "=== Daily Research Pipeline COMPLETE (deep research failed) ==="
  exit 0
fi

log "Research file verified: ${RESEARCH_FILE}"

# Git add, commit, push
log "Committing and pushing..."

${GIT} add src/data/
${GIT} commit -m "${DATE_SHORT} | deep-research: ${COMPANY_NAME}

Auto-generated deep research article for ${COMPANY_NAME} (Tier ${TIER}).
Pipeline: daily-research.sh"

${GIT} push origin "${BRANCH}"

# Create or update PR
log "Creating/updating PR..."

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

# Update log file
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "success" "${DURATION}" ""

# Commit the updated log
${GIT} add scripts/daily-research-log.json
${GIT} commit -m "${DATE_SHORT} | log: ${COMPANY_NAME} research complete (${DURATION}s)"
${GIT} push origin "${BRANCH}"

log "=== Daily Research Pipeline COMPLETE ==="
log "Company: ${COMPANY_NAME} | Duration: ${DURATION}s | Status: success"
