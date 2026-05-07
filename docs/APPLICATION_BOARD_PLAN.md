# AIDO Application Board Plan

## 목적

AIDO 안에 개인 지원 보드를 만들어 Founding Product Designer / First Design Hire 지원 과정을 한곳에서 관리한다.

주요 목표:

- 지원 예정 회사와 이미 지원한 회사를 분리해서 추적한다.
- 지원일, 다음 follow-up 날짜, 마지막 연락일, 인터뷰 단계를 관리한다.
- Gmail MCP 또는 Gmail API를 통해 채용 관련 이메일을 하루 한 번 확인하고 보드에 반영한다.
- `ilwonyoon.com` Google 계정 또는 지정 allowlist 계정만 접근 가능하게 한다.
- AIDO의 기존 디자인 시스템을 사용해 작업용 대시보드처럼 빠르게 스캔하고 업데이트할 수 있게 만든다.

## 접근 방식

MVP는 **AIDO private page + Firestore + Gmail MCP 수동 체크**로 시작한다.

자동 Gmail API scheduled function은 2차 단계로 둔다. 이유는 Gmail OAuth 토큰 저장, refresh, scope 승인, scheduled function 운영까지 들어가면 초기 구현 범위가 커지기 때문이다. 먼저 보드 UX와 데이터 구조를 검증한 뒤 자동화를 붙이는 편이 빠르다.

## 접근 권한

현재 AIDO는 Firebase Google Auth를 사용하고 있고, 일부 admin page는 `ilwonyoon@gmail.com`만 허용한다.

변경 방향:

- `src/lib/auth/admin.ts` 같은 helper를 만든다.
- 허용 이메일을 한곳에서 관리한다.
- 예:

```ts
export const PRIVATE_APP_EMAILS = [
  'ilwonyoon@gmail.com',
  'hello@ilwonyoon.com'
];

export function isPrivateAppUser(email?: string | null) {
  return Boolean(email && PRIVATE_APP_EMAILS.includes(email));
}
```

실제 `ilwonyoon.com` Google 계정 이메일은 확인 후 allowlist에 넣는다.

Firestore rules에도 같은 기준을 반영한다.

## URL 구조

- `/applications`: 지원 보드 메인
- `/applications/[id]`: 필요 시 상세 페이지. MVP에서는 drawer로 충분하면 생략 가능

Navigation:

- 로그인된 private user에게만 `Applications` 링크 표시
- 모바일 메뉴에도 동일하게 표시

## 데이터 모델

Firestore path:

```text
users/{uid}/applications/{applicationId}
users/{uid}/applications/{applicationId}/events/{eventId}
```

### Application

```ts
type ApplicationStatus =
  | 'to_apply'
  | 'applied'
  | 'waiting'
  | 'recruiter_screen'
  | 'founder_or_hm'
  | 'portfolio_review'
  | 'final'
  | 'offer'
  | 'rejected'
  | 'withdrawn'
  | 'closed';

type ApplicationPriority = 'P0' | 'P1' | 'P2' | 'P3';

type ApplicationAts = 'ashby' | 'greenhouse' | 'lever' | 'workable' | 'other';

interface Application {
  companyId?: string;
  companyName: string;
  roleTitle: string;
  roleUrl: string;
  applicationUrl?: string;
  ats: ApplicationAts;
  priority: ApplicationPriority;
  status: ApplicationStatus;

  plannedApplyAt?: Timestamp;
  appliedAt?: Timestamp;
  nextFollowUpAt?: Timestamp;
  lastContactAt?: Timestamp;
  lastCheckedEmailAt?: Timestamp;

  source?: 'aido' | 'manual' | 'gmail' | 'linkedin' | 'referral';
  location?: string;
  compensationNote?: string;
  contactName?: string;
  contactEmail?: string;

  notes?: string;
  ownerUid: string;
  ownerEmail: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Application Event

```ts
type ApplicationEventType =
  | 'created'
  | 'planned'
  | 'applied'
  | 'email_received'
  | 'email_sent'
  | 'status_changed'
  | 'interview_scheduled'
  | 'interview_completed'
  | 'follow_up_due'
  | 'note_added';

interface ApplicationEvent {
  type: ApplicationEventType;
  title: string;
  body?: string;
  occurredAt: Timestamp;
  createdAt: Timestamp;

  gmailMessageId?: string;
  gmailThreadId?: string;
  from?: string;
  to?: string;
  subject?: string;

  previousStatus?: ApplicationStatus;
  nextStatus?: ApplicationStatus;
}
```

## 상태 정의

- `to_apply`: 지원 예정
- `applied`: 지원 완료, 아직 응답 없음
- `waiting`: 인터뷰 또는 답변 대기
- `recruiter_screen`: recruiter / first call
- `founder_or_hm`: founder, hiring manager, design/product lead conversation
- `portfolio_review`: portfolio review, take-home, design exercise
- `final`: final loop
- `offer`: offer
- `rejected`: rejection received
- `withdrawn`: 직접 철회
- `closed`: 포지션 종료 또는 더 이상 진행하지 않음

## 화면 구조

### 상단

- 제목: `Applications`
- 요약 카드:
  - Active
  - Applied this week
  - Interviews
  - Follow-ups due
  - Needs email review
- 액션:
  - `Add Application`
  - `Check Gmail`
  - `Import from AIDO jobs`

### 필터

- Status
- Priority
- ATS
- Has response
- Follow-up due
- Location
- Search

### 메인 뷰

MVP는 table-first가 좋다. 이유는 지원 상태, 날짜, 연락 기록을 빠르게 비교하기 쉽기 때문이다.

추가로 board toggle을 둔다.

Table columns:

- Company
- Role
- Priority
- Status
- Applied
- Last contact
- Next action
- Follow-up
- ATS
- Links

Board columns:

- To Apply
- Applied
- Waiting
- Recruiter
- Founder / HM
- Portfolio
- Final
- Offer
- Closed

### Detail Drawer

카드를 클릭하면 우측 drawer를 연다.

포함 내용:

- 회사/포지션/지원 링크
- 현재 상태 변경
- 지원일, next follow-up 날짜
- contact 정보
- notes
- timeline
- matched Gmail messages
- quick actions:
  - `Mark applied`
  - `Add note`
  - `Schedule follow-up`
  - `Move to interview`
  - `Mark rejected`

## 디자인 방향

AIDO 기존 디자인 시스템을 사용한다.

- 색상: `var(--background)`, `var(--foreground)`, `var(--muted)`, `var(--card)`, `var(--border)`, `var(--accent)`
- 컴포넌트: `Button`, `IconButton`, `Badge`, `Card`
- 페이지 톤: SaaS/CRM식 작업 화면
- 카드 남용 금지. 반복 항목에는 카드 사용 가능, 페이지 섹션은 full-width layout 유지
- 정보 밀도를 높이고, hero/marketing layout은 사용하지 않는다.

상태 badge 예:

- Applied: accent
- Waiting: warning
- Interview: success
- Offer: success
- Rejected/Closed: default muted

## Gmail 연동 계획

### MVP: Gmail MCP 수동 체크

Codex/Gmail MCP로 하루 한 번 이메일을 검색하고, 결과를 보드에 반영한다.

기본 쿼리:

```text
newer_than:7d (from:ashbyhq.com OR from:greenhouse.io OR from:lever.co OR from:workablemail.com OR from:jobs.ashbyhq.com)
```

회사별 쿼리:

```text
newer_than:30d ("Listen Labs" OR listenlabs OR "Founding Product Designer")
```

처리 방식:

- 바로 상태를 자동 변경하지 않는다.
- `email_received` event로 기록한다.
- 보드에 `Needs review` 표시를 띄운다.
- 사용자가 확인 후 상태를 확정한다.

### 2차: Gmail API 자동 체크

Firebase Scheduled Function:

- 하루 1회 실행
- Gmail API OAuth token 필요
- Firestore에 마지막 체크 시점 저장
- 신규 메일만 검색
- application companyName, roleTitle, known domain 기준으로 매칭
- 불확실하면 `unmatchedApplicationEmails` collection에 저장

주의점:

- Gmail API scope는 최소화한다.
- 원문 전체 저장은 피하고 subject/snippet/sender/date/messageId 중심으로 저장한다.
- 필요 시 사용자가 Gmail에서 직접 원문을 열도록 한다.

## Firestore Rules

초안:

```js
function isOwner(userId) {
  return request.auth != null && request.auth.uid == userId;
}

function isPrivateEmail() {
  return request.auth != null
    && request.auth.token.email in [
      'ilwonyoon@gmail.com',
      'hello@ilwonyoon.com'
    ];
}

match /users/{userId}/applications/{applicationId} {
  allow read, write: if isOwner(userId) && isPrivateEmail();
}

match /users/{userId}/applications/{applicationId}/events/{eventId} {
  allow read, write: if isOwner(userId) && isPrivateEmail();
}
```

실제 `ilwonyoon.com` Google 계정 이메일 확인 후 업데이트한다.

## AIDO Jobs와 연결

기존 company data의 `openRoles`에서 지원 대상 role을 골라 보드로 보낼 수 있게 한다.

추가 액션:

- `Add to Applications`
- 이미 보드에 있으면 `In Applications` 표시
- role URL, company ID, priority, ATS를 자동 채움

초기 seed:

- Listen Labs - Founding Product Designer
  - Status: `applied`
  - Applied date: 2026-05-07
  - ATS: `ashby`
  - Priority: `P0`
  - Notes: O!makers / UXR system note included in application

## 구현 순서

1. Auth allowlist helper 추가
2. Firestore rules에 private applications path 추가
3. `src/lib/firebase/applications.ts` 작성
4. `src/app/applications/page.tsx` 작성
5. Application table + detail drawer 구현
6. Add/Edit application form 구현
7. Listen Labs seed record 추가
8. Navigation에 private `Applications` 링크 추가
9. Gmail MCP manual check workflow 문서화
10. AIDO Jobs page에서 `Add to Applications` 액션 연결
11. Playwright로 접근 제어, CRUD, 모바일 레이아웃 확인
12. 배포

## MVP 완료 기준

- 허용된 Google 계정만 `/applications` 접근 가능
- application 생성/수정/삭제 가능
- status, priority, next follow-up 관리 가능
- Listen Labs 지원 기록이 보드에 표시됨
- timeline event 추가 가능
- Gmail MCP로 찾은 이메일 결과를 event로 수동 기록 가능
- 모바일/데스크톱에서 UI가 깨지지 않음

## 이후 개선

- Gmail API scheduled function 자동화
- Gmail message deep link 저장
- follow-up due notification
- calendar interview event import
- 회사별 interview prep note 연결
- application outcome analytics
- resume/portfolio variant tracking
- cover note template generator
