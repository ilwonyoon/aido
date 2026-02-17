#!/bin/bash
set -u

PROJECT_DIR="/Users/ilwonyoon/Documents/AIDO/aido"
CLAUDE_BIN="/Users/ilwonyoon/.local/bin/claude"
TARGETS_FILE="$PROJECT_DIR/src/data/research/autopilot-targets-60.json"
LOG_FILE="$PROJECT_DIR/scripts/run-batch10-tty.log"
STATUS_FILE="$PROJECT_DIR/src/data/research/run-batch10-status.json"

BATCH_INDEX="${1:-1}"  # 1..6
if ! [[ "$BATCH_INDEX" =~ ^[0-9]+$ ]]; then
  echo "BATCH_INDEX must be numeric" >&2
  exit 1
fi

BATCH_SIZE=10
START=$(( (BATCH_INDEX - 1) * BATCH_SIZE ))
END=$(( START + BATCH_SIZE ))

if [ ! -f "$TARGETS_FILE" ]; then
  echo "Targets file missing: $TARGETS_FILE" >&2
  exit 1
fi

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

run_with_watchdog() {
  local prompt="$1"
  local max_turns="$2"
  local timeout_sec="$3"
  local label="$4"

  log "RUN: $label"
  "$CLAUDE_BIN" -p "$prompt" --max-turns "$max_turns" --dangerously-skip-permissions >> "$LOG_FILE" 2>&1 &
  local pid=$!

  ( sleep "$timeout_sec"; kill "$pid" 2>/dev/null ) &
  local watchdog=$!

  if wait "$pid" 2>/dev/null; then
    kill "$watchdog" 2>/dev/null || true
    log "OK: $label"
    return 0
  else
    local code=$?
    kill "$watchdog" 2>/dev/null || true
    log "FAIL: $label (exit $code or timeout)"
    return 1
  fi
}

ITEMS=()
while IFS= read -r line; do
  ITEMS+=("$line")
done < <(node - <<NODE
const fs=require('fs');
const f=JSON.parse(fs.readFileSync('$TARGETS_FILE','utf8'));
const items=(f.items||[]).slice($START,$END);
for(const it of items){
  console.log(it.name + '\\t' + it.companyId);
}
NODE
)

if [ "${#ITEMS[@]}" -eq 0 ]; then
  log "No items for batch $BATCH_INDEX"
  exit 1
fi

log "=== Batch $BATCH_INDEX START (${#ITEMS[@]} companies) ==="

# Round 1: research per company
for line in "${ITEMS[@]}"; do
  name="${line%%$'\t'*}"
  company_id="${line#*$'\t'}"

  prompt="/company-researcher ${name}

IMPORTANT INSTRUCTIONS:
- Complete full pipeline end-to-end for this company only.
- Run job-scraper first and sync openRoles from that result.
- For fundingHistory, if lead investors are unknown (especially first round), use leadInvestors: [] (no placeholder text).
- Collect visual assets via automation rules (ogImage/screenshot), do not guess URLs manually.
- Do not ask clarification questions; proceed best-effort.
- If data is limited, still generate src/data/companies/${company_id}.ts with strict unknown-handling rules.
- Do NOT run git commands."

  run_with_watchdog "$prompt" 14 360 "R1 ${name}" || true

done

# Round 2: single verify pass for same 10
verify_list=""
for line in "${ITEMS[@]}"; do
  name="${line%%$'\t'*}"
  company_id="${line#*$'\t'}"
  verify_list+="- ${name} -> src/data/companies/${company_id}.ts\n"
done

verify_prompt="Batch verification pass for 10 companies.

Companies:
${verify_list}

Strict checks:
1) fundingHistory dates format and investor fields
2) unknown lead investors must be leadInvestors: []
3) openRoles consistency with job-scraper output
4) visual assets via automation only (ogImage/screenshot)
5) patch files directly for any issues

Do NOT run git commands."

run_with_watchdog "$verify_prompt" 24 600 "R2 Batch $BATCH_INDEX" || true

# Local QA summary
BATCH_INDEX_ENV="$BATCH_INDEX" TARGETS_FILE_ENV="$TARGETS_FILE" PROJECT_DIR_ENV="$PROJECT_DIR" STATUS_FILE_ENV="$STATUS_FILE" node - <<'NODE'
const fs=require('fs');
const path=require('path');
const project=process.env.PROJECT_DIR_ENV;
const targetsFile=process.env.TARGETS_FILE_ENV;
const statusFile=process.env.STATUS_FILE_ENV;
const batchIndex=Number(process.env.BATCH_INDEX_ENV);
const all=(JSON.parse(fs.readFileSync(targetsFile,'utf8')).items||[]);
const start=(batchIndex-1)*10;
const items=all.slice(start,start+10).map(it=>({name:it.name,companyId:it.companyId}));
function qa(id){
  const p=path.join(project,'src/data/companies',`${id}.ts`);
  if(!fs.existsSync(p)) return {exists:false,issues:['missing file']};
  const c=fs.readFileSync(p,'utf8');
  const issues=[];
  if(!/openRoles\s*:\s*\[/.test(c)) issues.push('openRoles missing');
  if(!/fundingHistory\s*:\s*\[/.test(c)) issues.push('fundingHistory missing');
  if(/leadInvestors\s*:\s*\[[^\]]*(Unknown investor|TBD|unknown investor)[^\]]*\]/i.test(c)) issues.push('leadInvestors placeholder');
  if(!/(ogImage|screenshot)\s*:/.test(c)) issues.push('visual asset missing');
  return {exists:true,issues};
}
const results=items.map(x=>({name:x.name,companyId:x.companyId,...qa(x.companyId)}));
const passed=results.filter(r=>r.issues.length===0).length;
const status={
  updatedAt:new Date().toISOString(),
  batch:batchIndex,
  total:results.length,
  passed,
  failed:results.length-passed,
  results,
};
fs.writeFileSync(statusFile,JSON.stringify(status,null,2));
console.log(JSON.stringify(status,null,2));
NODE

log "=== Batch $BATCH_INDEX END ==="
