# Role Validator Skill

openRoles에 등록된 포지션이 아직 실제로 열려 있는지 검증하는 스킬.

## 사용법

```
Codex task: "Run role-validator for all companies with openRoles"
```

## 목적

회사 파일에 등록된 openRoles의 URL을 검증하여 **이미 닫힌/삭제된 포지션을 제거**하고, 데이터 정확성을 유지한다.

---

## 검증 방법

### Step 1: 대상 회사 목록 생성

```bash
node scripts/list-companies-with-roles.mjs
```

이 스크립트가 openRoles가 비어있지 않은 회사 목록 + 역할 수 + URL 목록을 출력한다.

### Step 2: 각 회사별 검증 (배치 단위)

**한 번에 10개 회사씩** 처리한다. 절대 한꺼번에 전부 하지 말 것.

각 회사의 openRoles에 대해:

#### 방법 A: URL 직접 확인 (우선)

1. openRole의 `url` 필드에 있는 URL을 WebFetch로 접근
2. 응답 상태로 판단:
   - **200 + 포지션 내용 있음** → ✅ Active (유지)
   - **404 / "position not found" / "no longer available"** → ❌ Closed (제거)
   - **301/302 → 일반 careers 페이지로 리다이렉트** → ❌ Closed (제거)
   - **페이지 차단 (403, captcha)** → 방법 B로 fallback

#### 방법 B: 웹 검색 확인 (fallback)

1. `WebSearch: "[Company Name]" "[Role Title]" site:[ATS domain] 2026`
2. 검색 결과에 동일 포지션이 있으면 → ✅ Active
3. 검색 결과 없거나 "closed" 표시 → ❌ Closed

#### 방법 C: Career 페이지 전체 확인 (최종 fallback)

1. 회사 career 페이지를 WebFetch로 접근
2. 해당 role title이 현재 리스팅에 존재하는지 확인
3. 없으면 → ❌ Closed

### Step 3: 검증 결과 적용

각 회사 파일에 대해:

**Closed 포지션 발견 시:**
```typescript
// 해당 role 객체를 openRoles 배열에서 제거
// lastUpdated를 오늘 날짜로 업데이트
```

**모든 역할이 Closed인 경우:**
```typescript
openRoles: [],
// lastUpdated 업데이트
```

**Active 포지션만 남긴 경우:**
- 기존 role 데이터(compensation, responsibilities 등)는 그대로 유지
- URL만 업데이트가 필요한 경우 새 URL로 교체

### Step 4: 검증 로그 기록

각 배치 완료 후 커밋 메시지에 검증 결과를 포함:

```
feat: validate openRoles batch N (X companies)

Checked: [company1, company2, ...]
- company1: 3/5 roles active (removed 2 closed)
- company2: 0/2 roles active (all closed)
- company3: 4/4 roles active (no changes)
```

---

## 처리 순서 (우선순위)

1. **최근 추가된 회사** (lastUpdated가 최근 30일 이내) — 가장 먼저 검증
2. **역할 수가 많은 회사** (5개 이상) — 오래된 데이터일 가능성 높음
3. **postedDate가 오래된 역할** (3개월 이상) — 닫혔을 가능성 높음
4. **나머지 회사** — 알파벳 순서로

---

## 품질 규칙

1. **Active 확인 없이 절대 제거하지 말 것** — 반드시 URL 또는 검색으로 확인 후 제거
2. **role 데이터를 수정하지 말 것** — compensation, responsibilities 등 기존 데이터는 건드리지 않음. 오직 제거만.
3. **새 역할을 추가하지 말 것** — 이 스킬은 검증만 함. 새 역할 추가는 job-scraper 스킬 담당.
4. **배치 크기 준수** — 한 번에 10개 회사, 한 커밋에 10개 회사 이하
5. **빌드 검증 필수** — 매 배치 커밋 전 `npm run build` 통과 확인

---

## 절대 하지 말 것

- UI 파일 수정 금지 (`src/app/`, `src/components/`)
- 새 회사 추가 금지 (이 스킬은 검증만)
- 새 역할 추가 금지 (이 스킬은 검증만)
- `firebase deploy` 실행 금지
- 한꺼번에 50개+ 회사 처리 금지
