# Job Scraper Skill

철저한 Product Design job posting 수집 및 검증 스킬.

## 사용법

```
/job-scraper [company name or website]
```

## 목적

회사의 Product Design 관련 오픈 포지션을 **빠짐없이** 수집하고 검증하여 정확한 정보를 제공합니다.

---

## 워크플로우

### Phase 1: Primary Source (Company Career Page)

1. **Career 페이지 접근**
   ```
   [Company Website] → About/Company → Careers → Open Positions
   ```

2. **Department 필터 확인**
   - "Design", "Product Design", "UX", "Product & Design" 등 department 선택
   - 필터가 없으면 전체 리스트에서 검색

3. **검색 키워드** (우선순위 순)

   **Product Design IC (Individual Contributor):**
   - "Product Designer"
   - "Senior Product Designer"
   - "Staff Product Designer"
   - "Principal Product Designer"
   - "UX Designer" (제품 중심인 경우만)
   - "Product Design"

   **Product Design Leadership:**
   - "Head of Design"
   - "Director of Product Design"
   - "VP of Design"
   - "Product Design Manager"
   - "UX Design Manager"
   - "Senior Product Design Manager"
   - "Staff Product Design Manager"
   - "Design Lead"

4. **제외 키워드** (Product Design이 아님)
   - "Visual Designer"
   - "Brand Designer"
   - "Graphic Designer"
   - "Content Designer"
   - "Design Engineer" (엔지니어링 포지션)
   - "Marketing Designer"
   - "Motion Designer"
   - "Industrial Designer"
   - "Interior Designer"

5. **브라우저 검증** (Playwright MCP 사용)
   ```javascript
   // Career 페이지 접속
   await navigate(careerPageUrl);

   // Department 필터가 있으면 클릭
   await click('button:has-text("Design")');

   // 또는 Cmd+F 검색
   await press('Meta+f');
   await type('product design');

   // 매칭되는 job 개수 확인
   const jobs = await querySelectorAll('.job-listing');
   ```

---

### Phase 2: Job Detail 페이지 수집

각 Product Design 포지션마다:

1. **Detail 페이지 접속**
   - Job listing 클릭 → Detail 페이지
   - URL 저장 (나중에 openRoles.url에 사용)

2. **필수 정보 추출**

   ```typescript
   {
     title: string,              // 정확한 직책명
     location: string,           // "San Francisco, CA" or "Remote" or "Hybrid"
     type: 'full-time' | 'contract' | 'intern',
     url: string,                // Detail 페이지 URL

     // 선택 (있으면 추가)
     compensation?: string,      // "$150K-$200K" or "$150K-$200K + equity"
     team?: string,              // "Design Team", "Product & Design"
     level?: 'Senior' | 'Staff' | 'Principal',
     aboutRole?: string,         // 짧은 역할 요약
     responsibilities?: string[],
     requirements?: string[],
     preferred?: string[],
     teamInfo?: string,
     whyInteresting?: string,    // 특이사항, 혜택, 문화
   }
   ```

3. **상세 정보 읽기**
   - WebFetch 또는 Playwright로 detail 페이지 전체 읽기
   - 섹션별로 파싱:
     - "Responsibilities", "What you'll do"
     - "Requirements", "Qualifications", "What we're looking for"
     - "Nice to have", "Bonus", "Preferred"
     - "Benefits", "Perks", "Compensation"
     - "About the team", "About the role"

---

### Phase 3: Cross-Verification (교차 검증)

다른 job board에서도 확인하여 **최신성** 검증:

1. **LinkedIn Jobs**
   ```
   https://www.linkedin.com/jobs/search/?keywords=[Company Name] Product Designer
   ```
   - 최근 30일 이내 포스팅인지 확인
   - Company career page와 동일한 role인지 확인

2. **Greenhouse / Lever / Ashby**
   - 회사가 사용하는 ATS (Applicant Tracking System) 확인
   - 예: `https://jobs.lever.co/[company]`
   - 예: `https://jobs.ashbyhq.com/[company]`
   - 예: `https://boards.greenhouse.io/[company]`

3. **Glassdoor / Indeed**
   - 보조 확인용
   - Career page에 없는데 외부 사이트에만 있으면 → 닫힌 포지션일 가능성

4. **교차 검증 결과**
   - ✅ **Company career page + LinkedIn 모두 있음** → 확실히 열려있음
   - ⚠️ **Company career page만 있음** → 최근 업데이트 확인
   - ❌ **외부 사이트만 있음** → 닫혔을 가능성 (제외)

---

### Phase 4: Playwright Browser Automation

JavaScript로 렌더링되는 career page는 Playwright 필수:

```typescript
// 1. 브라우저 열기
await mcp__playwright__browser_navigate({ url: careerPageUrl });

// 2. Department 필터 클릭
await mcp__playwright__browser_click({
  selector: 'button:has-text("Design")'
});

// 3. Job listing 나타날 때까지 대기
await mcp__playwright__browser_wait_for({
  selector: '.job-listing',
  timeout: 5000
});

// 4. 스크린샷 (검증용)
await mcp__playwright__browser_take_screenshot({
  name: 'career-page-design-jobs'
});

// 5. Job links 추출
const jobs = await mcp__playwright__browser_evaluate({
  script: `
    Array.from(document.querySelectorAll('.job-listing'))
      .filter(el => el.textContent.includes('Product Designer'))
      .map(el => ({
        title: el.querySelector('.job-title')?.textContent,
        url: el.querySelector('a')?.href,
        location: el.querySelector('.location')?.textContent
      }))
  `
});

// 6. 각 job detail 페이지 방문
for (const job of jobs) {
  await mcp__playwright__browser_navigate({ url: job.url });
  const details = await mcp__playwright__browser_snapshot();
  // Parse details...
}

// 7. 브라우저 닫기
await mcp__playwright__browser_close();
```

---

## 출력 포맷

```markdown
# [Company Name] - Product Design Job Openings

## Summary
- Total Product Design roles found: 3
- IC roles: 2 (Product Designer, Senior Product Designer)
- Leadership roles: 1 (Design Manager)
- Verification: ✅ All roles verified on LinkedIn + Company career page

---

## Role 1: Senior Product Designer

**Source URLs:**
- Company: https://company.com/careers/senior-product-designer
- LinkedIn: https://linkedin.com/jobs/12345
- Greenhouse: https://boards.greenhouse.io/company/jobs/67890

**Details:**
- **Title:** Senior Product Designer
- **Location:** San Francisco, CA (Hybrid 3 days/week)
- **Type:** Full-time
- **Compensation:** $150,000 - $200,000 + equity
- **Team:** Design Team (reports to Head of Design)
- **Posted Date:** 2026-01-15 (verified on LinkedIn)

**About the Role:**
[Short summary from job description]

**Responsibilities:**
- [Bullet 1]
- [Bullet 2]
- [Bullet 3]

**Requirements:**
- [Required 1]
- [Required 2]

**Preferred:**
- [Nice to have 1]
- [Nice to have 2]

**Why Interesting:**
[Special perks, culture, tech stack, etc.]

---

## Role 2: [Next role...]

---

## Recommended TypeScript Object

```typescript
openRoles: [
  {
    title: 'Senior Product Designer',
    location: 'San Francisco, CA',
    type: 'full-time',
    url: 'https://company.com/careers/senior-product-designer',
    compensation: '$150K-$200K + equity',
    team: 'Design Team',
    level: 'Senior',
    aboutRole: 'Lead design for core product features...',
    responsibilities: [
      'Design end-to-end product experiences',
      'Collaborate with PM and engineering',
      'Contribute to design system',
    ],
    requirements: [
      '5+ years product design experience',
      'Portfolio demonstrating shipped products',
      'Figma proficiency',
    ],
    preferred: [
      'AI product experience',
      'B2B SaaS background',
    ],
    whyInteresting: 'Hybrid 3 days/week. $1B+ valuation. Enterprise AI space. Strong design culture.',
  },
  // ... more roles
]
```

---

## Verification Checklist

- [ ] Company career page checked
- [ ] Department filter used (if available)
- [ ] Searched: "Product Designer", "Senior", "Staff", "Manager", "Head of Design"
- [ ] Excluded: Visual, Brand, Content, Design Engineer
- [ ] Detail pages visited for each role
- [ ] LinkedIn cross-check completed
- [ ] ATS (Greenhouse/Lever/Ashby) checked
- [ ] All URLs validated (not 404)
- [ ] Posted dates verified (within 60 days)
- [ ] Playwright used for JS-rendered pages (if needed)

---

## 특수 케이스 처리

### 1. No Design Roles Open
```markdown
## [Company Name] - No Open Product Design Roles

**Verification:**
- ✅ Company career page checked (no design roles)
- ✅ LinkedIn checked (no active postings)
- ✅ Last checked: 2026-01-27

**Recommendation:**
Set `openRoles: []` in company data.
```

### 2. Career Page Down / Not Found
```markdown
## [Company Name] - Career Page Unavailable

**Issue:** Career page returned 404 or is not accessible.

**Fallback:**
- Check LinkedIn jobs
- Check Glassdoor
- Check AngelList

If no external sources found → `openRoles: []`
```

### 3. Only Non-Product Design Roles
```markdown
## [Company Name] - No Product Design Roles (Only Brand/Visual)

**Found:**
- Brand Designer (excluded)
- Visual Designer (excluded)

**Result:** `openRoles: []`
```

---

## 실행 예시

### Input
```
/job-scraper Anthropic
```

### Agent Actions
1. Visit https://www.anthropic.com/careers
2. Filter by "Design" department
3. Find: "Product Designer", "Senior Product Designer"
4. Visit detail pages for each
5. Extract all info (title, location, compensation, responsibilities, requirements)
6. Cross-check on LinkedIn: https://linkedin.com/jobs/search/?keywords=Anthropic Product Designer
7. Verify on Greenhouse: https://boards.greenhouse.io/anthropic
8. Use Playwright if career page is JS-rendered
9. Output full report with TypeScript objects

---

## Integration with Company Data Collection

**자동 소환 규칙:**

회사 데이터를 추가/업데이트할 때 **항상** 이 스킬을 먼저 실행:

```
## 회사 추가 워크플로우

1. /job-scraper [company name]
2. 결과를 바탕으로 openRoles 필드 채우기
3. 나머지 company 데이터 수집
4. TypeScript 파일 생성
5. Commit
```

**CLAUDE.md에 명시:**

```markdown
## 회사 데이터 추가 시 필수 절차

1. **Job Scraper 먼저 실행**
   ```
   /job-scraper [company name]
   ```

2. openRoles 정보 정확히 채우기
3. 나머지 필드 수집
```

---

## 사용 가능한 도구

- **WebFetch**: 일반 HTML 페이지 읽기
- **Playwright MCP**: JavaScript 렌더링 페이지 + 브라우저 자동화
  - `browser_navigate`
  - `browser_click`
  - `browser_type`
  - `browser_wait_for`
  - `browser_snapshot`
  - `browser_take_screenshot`
  - `browser_evaluate`
- **Grep/Read**: 로컬 회사 데이터 확인
- **Bash**: curl로 API 엔드포인트 확인

---

## 에러 처리

### Playwright 실패 시
```
1. WebFetch로 시도
2. 여전히 실패하면 → LinkedIn/Glassdoor만으로 검증
3. 불확실하면 → 사용자에게 manual check 요청
```

### Rate Limiting
```
1. 요청 간 2-3초 대기
2. 너무 많은 페이지 방문 시 → 우선순위 높은 것만
3. Playwright screenshot으로 검증 후 닫기
```

---

## Phase 5: URL Validation (MANDATORY)

**모든 URL은 추가 전에 반드시 HTTP 200을 반환해야 합니다.**

### URL 품질 규칙

1. **NEVER use generic careers page URLs** as job URLs:
   - ❌ `https://company.com/careers`
   - ❌ `https://jobs.ashbyhq.com/company` (UUID 없음)
   - ❌ `https://company.com/jobs`
   - ✅ `https://jobs.ashbyhq.com/company/UUID-HERE`
   - ✅ `https://job-boards.greenhouse.io/company/jobs/12345`
   - ✅ `https://jobs.lever.co/company/UUID-HERE`

2. **URL Priority Order** (가장 안정적인 것 먼저):
   - 1st: Company career page with specific job path (e.g., `openai.com/careers/product-designer-chatgpt-san-francisco/`) — 회사가 직접 관리하므로 가장 안정적
   - 2nd: Company career → 파트너 ATS 페이지 (Greenhouse, Ashby, Lever, Wellfound 등 specific job URL)
     - `job-boards.greenhouse.io/[company]/jobs/[id]`
     - `jobs.ashbyhq.com/[company]/[uuid]`
     - `jobs.lever.co/[company]/[uuid]`
     - `wellfound.com/company/[company]/jobs/[id]`
   - NEVER: Generic careers page without job ID

3. **HTTP Verification** (추가 전 필수):
   ```bash
   # 각 URL에 대해 실행
   curl -sL -o /dev/null -w "%{http_code} %{url_effective}" "[URL]"
   ```
   - 200 → ✅ OK
   - 301/302 → Check redirect target. If redirects to generic careers page → ❌ REJECT
   - 404/410 → ❌ REJECT (role removed)
   - 403 → ❌ REJECT (access denied = likely removed)

4. **No specific URL found? → Do NOT add the role.**
   - Generic careers page URL = role existence is UNVERIFIED
   - Only add roles with confirmed, specific, working URLs

### Post-Scrape Validation

항상 스크래핑 완료 후 실행:
```bash
npm run verify-jobs
```
모든 URL이 OK가 아니면 → 해당 role 제거

---

## 성공 기준

✅ **완벽한 수집**
- 모든 Product Design 역할 발견
- Detail 페이지까지 방문
- 교차 검증 완료
- **모든 URL이 HTTP 200 반환 (verified)**
- **모든 URL이 specific job posting URL (generic careers page 아님)**
- 정확한 TypeScript object 생성

❌ **불완전한 수집**
- Career page만 보고 끝
- Detail 페이지 스킵
- 제목만 수집, 세부사항 누락
- 교차 검증 안 함
- **Generic careers page URL 사용 (NO!)**
- **URL 검증 안 함 (NO!)**

---

## Root Cause Prevention

과거 발생한 문제와 방지책:

| 문제 | 원인 | 방지책 |
|------|------|--------|
| 없는 포지션이 있다고 표시 | Generic careers page URL로 추가 | Phase 5 URL 품질 규칙 적용 |
| 깨진 job link | URL 검증 없이 추가 | HTTP 200 검증 필수 |
| 있는 포지션이 없다고 표시 | Career page JS 렌더링 실패 | Playwright + 교차 검증 |
| 잘못된 URL | WebSearch 캐시된 결과 사용 | curl로 실시간 검증 |
| ATS URL 인코딩 문제 | URL 수동 구성 | ATS 검색 결과에서 직접 복사 |

---

이 스킬은 **회사 데이터 수집의 첫 단계**로 항상 실행되어야 합니다.
