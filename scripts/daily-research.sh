#!/bin/bash
# NOTE: No `set -e` — one failed request should not kill the entire pipeline.

# ============================================================
# Daily Auto Research Pipeline (Worktree Edition)
# Uses a separate git worktree to avoid conflicts with Codex
# and manual work on main/company-researching branches.
#
# Phase 1:  Process ALL pending user requests (company-researcher)
# Phase 2a: Deep research Phases 1-8 (web search + analysis)
# Phase 2b: Article writing Phase 9 (reads research from disk)
#
# Phase 2 is split into TWO separate Claude invocations to
# prevent context window overflow ("Prompt is too long").
# Each invocation starts with a fresh context.
#
# Commits to daily-deep-research branch → PR → auto-merge
# ============================================================

# --- Full binary paths (launchd does not source shell profile) ---
NODE="/usr/local/bin/node"
NPX="/usr/local/bin/npx"
GIT="/usr/bin/git"
GH="/opt/homebrew/bin/gh"
CLAUDE="/Users/ilwonyoon/.local/bin/claude"

# --- Environment setup for launchd ---
# launchd runs with minimal env; set PATH and HOME explicitly
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${HOME}/.local/bin"
export HOME="/Users/ilwonyoon"
export LANG="en_US.UTF-8"

# Network warmup — launchd may start before network is fully ready
wait_for_network() {
  local max_attempts=10
  local attempt=0
  while [ $attempt -lt $max_attempts ]; do
    if curl -sf --max-time 5 "https://api.anthropic.com" >/dev/null 2>&1; then
      return 0
    fi
    attempt=$((attempt + 1))
    sleep 3
  done
  return 1
}

# --- Claude CLI settings ---
# --max-turns prevents context window overflow ("Prompt is too long")
# Each phase gets its own Claude invocation with fresh context:
# Phase 1 (company-researcher): simpler task, fewer turns
# Phase 2a (deep-research): research Phases 1-8, most web searches
# Phase 2b (article-writer): reads research from disk, writes article
CLAUDE_MAX_TURNS_PHASE1=30
CLAUDE_MAX_TURNS_RESEARCH=35
CLAUDE_MAX_TURNS_ARTICLE=20
# Retry settings for recoverable errors
MAX_RETRIES=1

PROJECT_DIR="/Users/ilwonyoon/Documents/AIDO/aido"
WORKTREE_DIR="/Users/ilwonyoon/Documents/AIDO/aido-daily-research"
LOG_FILE="${PROJECT_DIR}/scripts/daily-research-log.json"
OUTPUT_LOG="${PROJECT_DIR}/scripts/daily-research-output.log"
BRANCH="daily-deep-research"

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

  local entry="{\"timestamp\":\"${TIMESTAMP}\",\"companyName\":\"${company_name}\",\"companyId\":\"${company_id}\",\"tier\":\"${tier}\",\"status\":\"${status}\",\"durationSeconds\":${duration},\"error\":\"${error_msg}\"}"

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
# Helper: run Claude with timeout, max-turns, and retry
# Usage: run_claude_with_retry <prompt> <max_turns> <timeout_sec> <label>
# Returns: 0 on success, 1 on failure
# ============================================================
run_claude_with_retry() {
  local prompt="$1"
  local max_turns="$2"
  local timeout_sec="$3"
  local label="$4"
  local attempt=0

  while [ $attempt -le $MAX_RETRIES ]; do
    if [ $attempt -gt 0 ]; then
      log "Retry ${attempt}/${MAX_RETRIES} for ${label}..."
    fi

    ${CLAUDE} -p "${prompt}" \
      --max-turns "${max_turns}" \
      --dangerously-skip-permissions \
      >> "${OUTPUT_LOG}" 2>&1 &
    local CLAUDE_PID=$!

    ( sleep ${timeout_sec}; kill ${CLAUDE_PID} 2>/dev/null ) &
    local WATCHDOG_PID=$!

    if wait ${CLAUDE_PID} 2>/dev/null; then
      kill ${WATCHDOG_PID} 2>/dev/null || true
      log "Claude completed successfully for ${label}."
      return 0
    else
      local CLAUDE_EXIT=$?
      kill ${WATCHDOG_PID} 2>/dev/null || true

      if [ ${CLAUDE_EXIT} -eq 137 ] || [ ${CLAUDE_EXIT} -eq 143 ]; then
        log "ERROR: Claude timed out after $((timeout_sec / 60)) minutes for ${label}."
        return 1  # No retry on timeout — it won't get faster
      fi

      # Check if "Prompt is too long" in recent output
      if tail -5 "${OUTPUT_LOG}" | grep -q "Prompt is too long"; then
        log "ERROR: Context overflow (Prompt is too long) for ${label}."
        # This is not retryable with same params
        return 1
      fi

      log "WARNING: Claude exited with code ${CLAUDE_EXIT} for ${label}."
      attempt=$((attempt + 1))
    fi
  done

  log "ERROR: All retries exhausted for ${label}."
  return 1
}

# ============================================================
# Pipeline START
# ============================================================
log "=== Daily Research Pipeline START (worktree mode) ==="

# Wait for network connectivity (launchd may start before network is ready)
if ! wait_for_network; then
  log "ERROR: Network not available after 30s. Aborting."
  exit 1
fi
log "Network connectivity verified."

# Sync worktree with latest main
cd "${WORKTREE_DIR}"
${GIT} fetch origin main 2>/dev/null || true
${GIT} reset --hard origin/main 2>/dev/null || true

log "Worktree synced to latest main."

# ============================================================
# PHASE 1: Process ALL pending user requests (company-researcher)
# ============================================================
log "=== Phase 1: Processing pending user requests ==="

REQUEST_COUNT=0

while true; do
  REQUEST_RESULT=$(cd "${PROJECT_DIR}" && $NPX tsx scripts/process-company-requests.ts --next 2>/dev/null || echo "NO_PENDING_REQUESTS")

  if [ "${REQUEST_RESULT}" = "NO_PENDING_REQUESTS" ]; then
    break
  fi

  IFS='|' read -r REQUEST_ID REQUEST_COMPANY REQUEST_WEBSITE <<< "${REQUEST_RESULT}"
  log "Found user request: ${REQUEST_COMPANY} (ID: ${REQUEST_ID})"

  cd "${PROJECT_DIR}" && $NPX tsx scripts/process-company-requests.ts --start "${REQUEST_ID}" 2>/dev/null || true

  COMPANY_ID=$(echo "${REQUEST_COMPANY}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-')
  REQ_START=$(date +%s)

  REQ_PROMPT="/company-researcher ${REQUEST_COMPANY}

IMPORTANT INSTRUCTIONS:
- Do NOT run any git commands (no git add, git commit, git push). The pipeline script handles git.
- Complete the full research pipeline end-to-end without stopping."

  if [ -n "${REQUEST_WEBSITE}" ]; then
    REQ_PROMPT="${REQ_PROMPT}
- Company website: ${REQUEST_WEBSITE}"
  fi

  log "Running company-researcher for ${REQUEST_COMPANY}..."
  cd "${WORKTREE_DIR}"
  run_claude_with_retry "${REQ_PROMPT}" "${CLAUDE_MAX_TURNS_PHASE1}" 1800 "company-researcher: ${REQUEST_COMPANY}"

  COMPANY_FILE="${WORKTREE_DIR}/src/data/companies/${COMPANY_ID}.ts"
  REQ_END=$(date +%s)
  REQ_DURATION=$((REQ_END - REQ_START))

  if [ -f "${COMPANY_FILE}" ]; then
    log "Company file created: ${COMPANY_FILE}"
    cd "${PROJECT_DIR}" && $NPX tsx scripts/process-company-requests.ts --complete "${REQUEST_ID}" "${COMPANY_ID}" 2>/dev/null || true
    update_log_file "${COMPANY_ID}" "${REQUEST_COMPANY}" "request" "success" "${REQ_DURATION}" ""
    REQUEST_COUNT=$((REQUEST_COUNT + 1))
  else
    log "WARNING: File not generated for ${REQUEST_COMPANY}."
    cd "${PROJECT_DIR}" && $NPX tsx scripts/process-company-requests.ts --fail "${REQUEST_ID}" "Company file not generated" 2>/dev/null || true
    update_log_file "${COMPANY_ID}" "${REQUEST_COMPANY}" "request" "error" "${REQ_DURATION}" "Company file not generated"
  fi
done

log "Phase 1 complete: processed ${REQUEST_COUNT} user request(s)."

# Commit Phase 1 results if any
if [ ${REQUEST_COUNT} -gt 0 ]; then
  cd "${WORKTREE_DIR}"
  ${GIT} add src/data/ public/ 2>/dev/null || true
  ${GIT} commit -m "${DATE_SHORT} | company-researcher: ${REQUEST_COUNT} user request(s)

Auto-researched via daily-research.sh Phase 1 (user requests)." 2>/dev/null || true
fi

# ============================================================
# PHASE 2: Deep research for next Tier 0/1 company
# ============================================================
log "=== Phase 2: Tier list deep research ==="

PICK_RESULT=$(cd "${PROJECT_DIR}" && $NPX tsx scripts/pick-next-research.ts 2>/dev/null || echo "NONE")

if [ "${PICK_RESULT}" = "NONE" ]; then
  log "All tier list companies completed. Nothing to do."

  # Still push Phase 1 if there were results
  if [ ${REQUEST_COUNT} -gt 0 ]; then
    cd "${WORKTREE_DIR}"
    ${GIT} push --force-with-lease origin "${BRANCH}" 2>/dev/null || true
  fi

  log "=== Daily Research Pipeline COMPLETE ==="
  exit 0
fi

IFS='|' read -r COMPANY_NAME COMPANY_ID TIER <<< "${PICK_RESULT}"
log "Selected: ${COMPANY_NAME} (${COMPANY_ID}) — Tier ${TIER}"

START_TIME=$(date +%s)

# ============================================================
# PHASE 2a: Deep Research (Phases 1-8 only)
# Separate invocation to prevent context overflow.
# Web searches + analysis accumulate ~40-50KB of context.
# ============================================================
cd "${WORKTREE_DIR}"
log "Running deep research (Phase 1-8) for ${COMPANY_NAME}..."

RESEARCH_PROMPT="/company-deep-research ${COMPANY_NAME}

IMPORTANT INSTRUCTIONS:
- STOP after Phase 8 (Decision Framework). Do NOT proceed to Phase 9 (article writing).
- Do NOT run any git commands (no git add, git commit, git push, etc.). The orchestrator script handles git.
- Output the research report to src/data/deep-research/${COMPANY_ID}.md
- Update the company data file at src/data/companies/${COMPANY_ID}.ts
- Complete Phases 1-8 fully, then stop."

# 30 minute timeout (research-only typically completes in 10-15 min)
run_claude_with_retry "${RESEARCH_PROMPT}" "${CLAUDE_MAX_TURNS_RESEARCH}" 1800 "research: ${COMPANY_NAME}"

# Verify research output
RESEARCH_FILE="${WORKTREE_DIR}/src/data/deep-research/${COMPANY_ID}.md"

if [ ! -f "${RESEARCH_FILE}" ]; then
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  log "ERROR: Research file not found at ${RESEARCH_FILE}"
  update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "error" "${DURATION}" "Research file not generated"
  log "=== Daily Research Pipeline COMPLETE (research failed) ==="
  exit 0
fi

log "Research file verified: ${RESEARCH_FILE}"

# ============================================================
# PHASE 2b: Article Writing (Phase 9)
# Fresh Claude context — reads research from disk, writes article.
# This prevents context overflow from accumulated web search results.
# ============================================================
log "Running article generation for ${COMPANY_NAME}..."

ARTICLE_PROMPT="Write a deep-dive article about ${COMPANY_NAME} for the AIDO Insights blog.

CONTEXT:
- Read the deep research report at: src/data/deep-research/${COMPANY_ID}.md
- Read the company data at: src/data/companies/${COMPANY_ID}.ts
- Use these as your primary data sources for the article.

INSTRUCTIONS:
1. Read both files above first.
2. Pick the most compelling angle from the research (unique design team story, dramatic growth, founder story, or competition landscape).
3. Write the article following the /writer skill patterns:
   - Data-Driven Analytical voice
   - Lead with numbers and metrics
   - Designer's lens perspective
   - Include inline citation chips: [↗ Publisher](url) for key data points
   - Company mentions use format: [Company Name](/company/id)
4. Create the article TypeScript file at src/data/articles/content/[slug].ts
5. Update src/data/articles/index.ts to include the new article.
6. Do NOT run any git commands.
7. Do NOT ask for confirmation — auto-approve everything.
8. Verify the build passes: npm run build"

# 20 minute timeout (article writing typically completes in 5-10 min)
run_claude_with_retry "${ARTICLE_PROMPT}" "${CLAUDE_MAX_TURNS_ARTICLE}" 1200 "article: ${COMPANY_NAME}"

# Check article output (non-fatal — research is the primary deliverable)
ARTICLE_COUNT=$(find "${WORKTREE_DIR}/src/data/articles/content/" -name "*${COMPANY_ID}*" -newer "${RESEARCH_FILE}" 2>/dev/null | wc -l | tr -d ' ')
if [ "${ARTICLE_COUNT}" -eq 0 ]; then
  log "WARNING: Article file not generated for ${COMPANY_NAME}. Research report still available."
else
  log "Article file verified for ${COMPANY_NAME}."
fi

# ============================================================
# Git commit, push, and PR
# ============================================================
cd "${WORKTREE_DIR}"
${GIT} add src/data/ scripts/ 2>/dev/null || true
${GIT} commit -m "${DATE_SHORT} | deep-research: ${COMPANY_NAME}

Auto-generated deep research + article for ${COMPANY_NAME} (Tier ${TIER}).
Pipeline: daily-research.sh (split invocation)"

# Force push needed: worktree was reset to origin/main, so the branch diverges
# from the remote after previous PRs are merged. Safe because this branch is
# pipeline-only and the old commits are already merged to main.
${GIT} push --force-with-lease origin "${BRANCH}"

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
- Generated by \`scripts/daily-research.sh\` pipeline (split invocation)
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

# Update log
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

update_log_file "${COMPANY_ID}" "${COMPANY_NAME}" "${TIER}" "success" "${DURATION}" ""

log "=== Daily Research Pipeline COMPLETE ==="
log "Company: ${COMPANY_NAME} | Duration: ${DURATION}s | Status: success"
