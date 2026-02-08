#!/bin/bash

# ============================================================
# Company Request Watcher
# Polls Firestore every 30s for pending requests.
# When found, runs company-researcher via Claude CLI.
# Works on main branch (auto-merge pipeline handles the rest).
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

  # Run Claude company-researcher (no timeout on macOS)
  log "Running company-researcher for ${COMPANY_NAME}..."
  if ${CLAUDE} -p "${RESEARCH_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1; then
    log "Research completed for ${COMPANY_NAME}."
  else
    log "WARNING: Claude exited with code $?."
  fi

  # Check if company file was created
  COMPANY_FILE="${PROJECT_DIR}/src/data/companies/${COMPANY_ID}.ts"

  if [ -f "${COMPANY_FILE}" ]; then
    log "Company file created: ${COMPANY_FILE}"

    # Commit and push on main
    ${GIT} add src/data/
    ${GIT} commit -m "${DATE_SHORT} | company-researcher: ${COMPANY_NAME}

Auto-researched via watch-requests pipeline.
Request ID: ${REQUEST_ID}" || true
    ${GIT} push origin main || true

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
log "=== Request Watcher STARTED (polling every ${POLL_INTERVAL}s) ==="

while true; do
  RESULT=$($NPX tsx scripts/process-company-requests.ts --next 2>/dev/null || echo "NO_PENDING_REQUESTS")

  if [ "${RESULT}" != "NO_PENDING_REQUESTS" ]; then
    IFS='|' read -r REQUEST_ID COMPANY_NAME WEBSITE <<< "${RESULT}"
    process_request "${REQUEST_ID}" "${COMPANY_NAME}" "${WEBSITE}"
  fi

  sleep ${POLL_INTERVAL}
done
