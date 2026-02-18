# Task: Validate All openRoles

## 목표

`openRoles`에 등록된 포지션들이 실제로 아직 채용 중인지 검증하고, 닫힌 포지션을 제거하라.

## 스킬 참조

**반드시** `.codex/skills/role-validator/SKILL.md`를 따를 것.

## 실행 순서

### 1. 대상 파악

```bash
node scripts/list-companies-with-roles.mjs
```

현재 **92개 회사, 103개 역할**이 대상이다.

### 2. 배치 단위 작업

**10개 회사씩** 처리한다. 한 배치의 흐름:

1. 회사 파일 읽기
2. 각 openRole의 URL을 WebFetch로 확인
   - 200 + 포지션 내용 → ✅ Active (유지)
   - 404 / "not found" / "no longer accepting" / careers 페이지로 리다이렉트 → ❌ Closed (제거)
   - 접근 불가 → WebSearch로 fallback 확인
3. Closed 역할을 openRoles에서 제거
4. `lastUpdated`를 오늘 날짜로 업데이트
5. `npm run build` 통과 확인
6. 커밋:
   ```
   feat: validate openRoles batch N (X companies)

   Checked: [company1, company2, ...]
   - company1: 2/3 active (removed 1)
   - company2: 0/1 active (all closed)
   ```

### 3. 반복

모든 92개 회사를 처리할 때까지 배치를 반복한다.

### 4. 완료 후 PR

모든 배치 완료 → PR 생성:

```bash
gh pr create --title "chore: validate openRoles across 92 companies" --body "$(cat <<'EOF'
## Summary
- Validated all openRoles URLs across 92 companies
- Removed closed/expired positions
- Updated lastUpdated for all checked companies

## Stats
- Companies checked: 92
- Roles before: 103
- Roles removed: [N]
- Roles remaining: [N]

## Method
- URL direct check (WebFetch) → fallback WebSearch
- Batch size: 10 companies per commit
EOF
)"
```

## 주의사항

- **기존 role 데이터를 수정하지 말 것** — 오직 제거만
- **새 역할을 추가하지 말 것** — 검증만 하는 태스크
- **UI 파일 건드리지 말 것**
- **한 배치에 10개 이하**
- URL 접근 시 rate limit 주의 — 같은 도메인 연속 요청 시 2-3초 간격
