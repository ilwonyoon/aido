#!/bin/bash

# ============================================================
# Company Request Watcher
# Polls Firestore every 6 hours for pending requests.
# Processes ALL pending requests per cycle (inner loop).
# Uses company-researcher via Claude CLI.
# ============================================================

NPX="/usr/local/bin/npx"
GIT="/usr/bin/git"
CLAUDE="/Users/ilwonyoon/.local/bin/claude"

PROJECT_DIR="/Users/ilwonyoon/Documents/AIDO/aido"
OUTPUT_LOG="${PROJECT_DIR}/scripts/watch-requests.log"
POLL_INTERVAL=21600  # 6 hours (4 times per day)

cd "${PROJECT_DIR}"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "${OUTPUT_LOG}"
}

process_request() {
  local REQUEST_ID="$1"
  local COMPANY_NAME="$2"
  local WEBSITE="$3"

  log "Processing: ${COMPANY_NAME} (${REQUEST_ID})"

  # Mark as researching
  $NPX tsx scripts/process-company-requests.ts --start "${REQUEST_ID}" 2>/dev/null || true

  # Generate company ID
  COMPANY_ID=$(echo "${COMPANY_NAME}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-')
  DATE_SHORT=$(date '+%d/%m/%y - %H:%M:%S')

  # Build research prompt
  local RESEARCH_PROMPT="/company-researcher ${COMPANY_NAME}

IMPORTANT INSTRUCTIONS:
- Do NOT run any git commands (no git add, git commit, git push). The watcher script handles git.
- Complete the full research pipeline end-to-end without stopping."

  if [ -n "${WEBSITE}" ]; then
    RESEARCH_PROMPT="${RESEARCH_PROMPT}
- Company website: ${WEBSITE}"
  fi

  # Run Claude company-researcher with 30 min timeout (background + kill for macOS)
  log "Running company-researcher for ${COMPANY_NAME}..."
  ${CLAUDE} -p "${RESEARCH_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1 &
  CLAUDE_PID=$!

  ( sleep 1800; kill ${CLAUDE_PID} 2>/dev/null ) &
  WATCHDOG_PID=$!

  if wait ${CLAUDE_PID} 2>/dev/null; then
    kill ${WATCHDOG_PID} 2>/dev/null || true
    log "Research completed for ${COMPANY_NAME}."
  else
    CLAUDE_EXIT=$?
    kill ${WATCHDOG_PID} 2>/dev/null || true
    if [ ${CLAUDE_EXIT} -eq 137 ] || [ ${CLAUDE_EXIT} -eq 143 ]; then
      log "WARNING: Claude timed out after 30 minutes for ${COMPANY_NAME}."
    else
      log "WARNING: Claude exited with code ${CLAUDE_EXIT} for ${COMPANY_NAME}."
    fi
  fi

  # Check if company file was created
  COMPANY_FILE="${PROJECT_DIR}/src/data/companies/${COMPANY_ID}.ts"

  if [ -f "${COMPANY_FILE}" ]; then
    log "Company file created: ${COMPANY_FILE}"

    # Commit and push on current branch
    ${GIT} add src/data/ public/ 2>/dev/null || true
    ${GIT} commit -m "${DATE_SHORT} | company-researcher: ${COMPANY_NAME}

Auto-researched via watch-requests pipeline.
Request ID: ${REQUEST_ID}" || true
    ${GIT} push origin HEAD || true

    # Mark as completed
    $NPX tsx scripts/process-company-requests.ts --complete "${REQUEST_ID}" "${COMPANY_ID}" 2>/dev/null || true
    log "Request ${REQUEST_ID} completed."
  else
    # Mark as failed
    $NPX tsx scripts/process-company-requests.ts --fail "${REQUEST_ID}" "Company file not generated" 2>/dev/null || true
    log "Request ${REQUEST_ID} failed: file not generated."
  fi
}

# ============================================================
# Main loop
# ============================================================
log "=== Request Watcher STARTED (polling every ${POLL_INTERVAL}s / $(( POLL_INTERVAL / 3600 ))h) ==="

while true; do
  # Inner loop: process ALL pending requests before sleeping
  BATCH_COUNT=0
  while true; do
    RESULT=$($NPX tsx scripts/process-company-requests.ts --next 2>/dev/null || echo "NO_PENDING_REQUESTS")

    if [ "${RESULT}" = "NO_PENDING_REQUESTS" ]; then
      break
    fi

    IFS='|' read -r REQUEST_ID COMPANY_NAME WEBSITE <<< "${RESULT}"
    process_request "${REQUEST_ID}" "${COMPANY_NAME}" "${WEBSITE}"
    BATCH_COUNT=$((BATCH_COUNT + 1))
  done

  if [ ${BATCH_COUNT} -gt 0 ]; then
    log "Processed ${BATCH_COUNT} request(s) this cycle."
  fi

  log "Sleeping ${POLL_INTERVAL}s until next poll..."
  sleep ${POLL_INTERVAL}
done
