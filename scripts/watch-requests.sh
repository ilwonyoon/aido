#!/bin/bash
set -e

# ============================================================
# Company Request Watcher
# Polls Firestore every 30s for pending requests.
# When found, runs company-researcher via Claude CLI.
# ============================================================

NODE="/usr/local/bin/node"
NPX="/usr/local/bin/npx"
GIT="/usr/bin/git"
GH="/opt/homebrew/bin/gh"
CLAUDE="/Users/ilwonyoon/.local/bin/claude"

PROJECT_DIR="/Users/ilwonyoon/Documents/AIDO/aido"
OUTPUT_LOG="${PROJECT_DIR}/scripts/watch-requests.log"
BRANCH="company-researching"
POLL_INTERVAL=30

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

  # Switch to company-researching branch
  log "Switching to ${BRANCH}..."
  ${GIT} fetch origin "${BRANCH}" 2>/dev/null || true
  ${GIT} checkout "${BRANCH}" 2>/dev/null || ${GIT} checkout -b "${BRANCH}"
  ${GIT} pull origin "${BRANCH}" --rebase 2>/dev/null || true

  # Build research prompt
  RESEARCH_PROMPT="/company-researcher ${COMPANY_NAME}

IMPORTANT INSTRUCTIONS:
- Do NOT run any git commands (no git add, git commit, git push). The watcher script handles git.
- Complete the full research pipeline end-to-end without stopping.
- If a website is provided, use it: ${WEBSITE}"

  # Run Claude company-researcher (30 min timeout)
  log "Running company-researcher for ${COMPANY_NAME}..."
  if timeout 1800 ${CLAUDE} -p "${RESEARCH_PROMPT}" --dangerously-skip-permissions >> "${OUTPUT_LOG}" 2>&1; then
    log "Research completed for ${COMPANY_NAME}."
  else
    CLAUDE_EXIT=$?
    if [ ${CLAUDE_EXIT} -eq 124 ]; then
      log "ERROR: Timed out after 30 minutes."
    else
      log "ERROR: Claude exited with code ${CLAUDE_EXIT}."
    fi
  fi

  # Check if company file was created
  COMPANY_FILE="${PROJECT_DIR}/src/data/companies/${COMPANY_ID}.ts"

  if [ -f "${COMPANY_FILE}" ]; then
    log "Company file created: ${COMPANY_FILE}"

    # Commit and push
    ${GIT} add src/data/
    ${GIT} commit -m "${DATE_SHORT} | company-researcher: ${COMPANY_NAME}

Auto-researched via watch-requests pipeline.
Request ID: ${REQUEST_ID}"
    ${GIT} push origin "${BRANCH}"

    # Create or update PR
    EXISTING_PR=$(${GH} pr list --head "${BRANCH}" --state open --json number --jq '.[0].number' 2>/dev/null || echo "")
    if [ -z "${EXISTING_PR}" ]; then
      ${GH} pr create \
        --base main \
        --head "${BRANCH}" \
        --title "Company Research: ${COMPANY_NAME}" \
        --body "Auto-researched **${COMPANY_NAME}** via request watcher pipeline."
      log "PR created."
    else
      log "PR #${EXISTING_PR} updated."
    fi

    # Mark as completed
    $NPX tsx scripts/process-company-requests.ts --complete "${REQUEST_ID}" "${COMPANY_ID}" 2>/dev/null || true
    log "Request ${REQUEST_ID} completed."
  else
    # Mark as failed
    $NPX tsx scripts/process-company-requests.ts --fail "${REQUEST_ID}" "Company file not generated" 2>/dev/null || true
    log "Request ${REQUEST_ID} failed: file not generated."
  fi

  # Switch back to main
  ${GIT} checkout main 2>/dev/null || true
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
