# 모바일 Responsive 추가 중 발생한 문제들 - 근본 원인 분석

**작성일**: 2024-01-26
**작성자**: Claude Sonnet 4.5

---

## 문제 요약

모바일 responsive 디자인을 추가하는 과정에서:
1. **원래 잘 작동하던 기능들이 깨짐** (Interest 체크박스 클릭 불가)
2. **UI 규칙 위반** (드롭다운 크기 불일치, vertical scroll 발생)
3. **디자인 시스템 불일치** (버튼 크기, 간격 등)

---

## 근본 원인 (Root Causes)

### 1. **점진적 수정의 누적 효과 (Cascading Changes)**

**문제**:
- 각 이슈를 개별적으로 수정하다 보니 전체적인 일관성이 깨짐
- A 문제 해결 → B 문제 발생 → B 해결 → C 문제 발생... 반복

**예시**:
```
드롭다운이 잘림
  → fixed positioning 추가
  → width가 너무 큼
  → minWidth로 변경
  → 여전히 큼
  → width로 고정
  → 화면 밖으로 나감
  → viewport 체크 추가
```

**근본 원인**: **시스템적 접근 부족**
- 한 번에 전체 구조를 설계하지 않고, 문제가 생길 때마다 패치
- "왜 이 문제가 생겼는가?"보다 "어떻게 빨리 고치나?"에 집중

---

### 2. **Event Propagation 이해 부족**

**문제**: Interest 체크박스 클릭이 작동하지 않음

**시도한 해결책들** (모두 실패):
1. `e.stopPropagation()` 추가 → 실패 (tr의 onClick이 먼저 실행됨)
2. `z-index` 추가 → 실패 (z-index는 레이아웃이지 이벤트 우선순위 아님)
3. `relative` positioning 추가 → 실패 (동일한 이유)
4. Touch target 확대 → 실패 (클릭 영역 문제가 아님)

**실제 문제**:
- Table row의 `onClick`이 이벤트 캡처 단계에서 실행됨
- TD의 `stopPropagation`은 버블링 단계에서만 작동
- **해결**: `tr onClick`에서 `e.target.closest('[data-interest-cell]')` 체크

**근본 원인**: **DOM 이벤트 모델에 대한 불완전한 이해**
- Event capture vs bubbling 차이
- `stopPropagation`이 작동하는 시점
- Event delegation 패턴 미숙

---

### 3. **Fixed Positioning의 Side Effects**

**문제**: 드롭다운을 overflow container에서 탈출시키기 위해 `position: fixed` 사용

**발생한 Side Effects**:
1. **Width 계산 복잡도 증가**
   - Absolute: 부모 기준 자동 계산
   - Fixed: viewport 기준이라 수동 계산 필요
   - `getBoundingClientRect()` + inline style 필요

2. **Viewport boundary 처리**
   - Location 드롭다운이 화면 밖으로 나감
   - Right edge detection + repositioning 로직 추가 필요

3. **Z-index stacking context 변경**
   - Fixed element는 새로운 stacking context 생성
   - 다른 요소들과의 z-index 관계가 변경됨

**근본 원인**: **CSS Positioning Model에 대한 불완전한 이해**
- Fixed positioning이 전체 레이아웃에 미치는 영향
- Alternative 솔루션 (Portal, Popper.js 등) 고려 부족

---

### 4. **테스트 부족 (Lack of Testing)**

**문제**: 각 수정 후 전체 기능 테스트 없이 다음 수정으로 진행

**예시**:
- Interest 체크박스 z-index 추가 → 테스트 안함 → 여전히 안됨
- 드롭다운 width 변경 → 테스트 안함 → 화면 밖으로 나감
- Overflow 제거 → 테스트 안함 → vertical scroll 생김

**근본 원인**: **Incremental Validation 부족**
- 각 변경 후 즉시 검증하지 않음
- "코드 변경 = 문제 해결" 가정 (실제 동작 확인 없이)

---

### 5. **디자인 시스템 일관성 관리 실패**

**문제**: 모바일 대응 중 기존 디자인 규칙 위반

**위반 사례**:
1. **간격 불일치**
   - 기존: 8px, 12px, 16px 체계
   - 추가: gap-2 (8px) 맞음, 하지만 일부 gap-3 (12px) 섞임

2. **버튼 크기 불일치**
   - 기존: w-6 h-6 (24px)
   - 변경: w-10 h-10 (40px) → 너무 큼, 44px touch target이면 w-11 h-11

3. **드롭다운 크기**
   - AI Level: 버튼 너비
   - Open Roles: 버튼 너비
   - Location: max(버튼 너비, 180px) ← 일관성 없음

**근본 원인**: **디자인 토큰 시스템 부재**
- 하드코딩된 값들 (gap-2, gap-3, w-10 등)
- 중앙화된 디자인 규칙 문서 없음
- 각 수정마다 "이 정도면 되겠지" 임의 판단

---

### 6. **Overflow 속성 오해**

**문제**: 칩 영역에서 vertical scroll 발생

**시도한 것**:
```tsx
// 시도 1
<div className="overflow-x-auto overflow-y-visible" style={{ overflowY: 'visible' }}>

// 문제: overflow-x-auto가 있으면 overflow-y는 자동으로 'auto'가 됨
// CSS 스펙: overflow-x와 overflow-y 중 하나가 visible이 아니면,
//          다른 하나도 자동으로 auto로 변경됨
```

**해결**:
```tsx
// 시도 2
<div className="overflow-x-auto scrollbar-hide">
// overflow-y는 기본값(visible)로 두되, scrollbar만 숨김
```

**근본 원인**: **CSS Overflow 동작 원리 미숙**
- `overflow-x`와 `overflow-y`의 상호작용
- Scrollable container 내부의 fixed positioning

---

## 패턴 분석

### 공통 패턴 1: "Quick Fix" 사고방식
```
문제 발생 → 구글 검색 → 첫 번째 솔루션 적용 → 안되면 다음 솔루션
```
**올바른 접근**:
```
문제 발생 → 근본 원인 분석 → 여러 해결책 비교 → 최적 솔루션 선택 → 검증
```

### 공통 패턴 2: 증상 치료 vs 원인 치료
- 증상: "체크박스가 클릭 안됨"
- 시도한 증상 치료: z-index, relative, touch target 확대
- 실제 원인: Event propagation order
- 올바른 치료: Event delegation

### 공통 패턴 3: 격리된 수정 (Isolated Changes)
- 각 컴포넌트를 독립적으로 수정
- 전체 시스템에 미치는 영향 고려 부족
- 예: Fixed positioning → viewport boundary → z-index → 다른 컴포넌트 영향

---

## 교훈 (Lessons Learned)

### 1. **시스템적 접근 필요**
모바일 responsive 같은 전체 시스템 변경은:
- 먼저 전체 설계 (어떤 컴포넌트들이 영향받는가?)
- 변경 범위 파악 (Navigation, Filters, Detail, Typography 등)
- 우선순위 설정 (Critical → Important → Nice-to-have)
- 단계별 구현 + 검증

### 2. **근본 원인 파악 우선**
문제 발생 시:
1. **Why?** 왜 이 문제가 발생했는가?
2. **Root Cause**: 겉으로 보이는 증상의 근본 원인은?
3. **Alternatives**: 해결 방법이 여러 개라면 trade-off는?
4. **Validation**: 해결책이 정말 작동하는가?

### 3. **CSS 기본 원리 이해**
- Positioning models (static, relative, absolute, fixed)
- Stacking contexts와 z-index
- Overflow behavior
- Event propagation

### 4. **디자인 시스템 강제**
```tsx
// BAD: 하드코딩
<div className="gap-2 px-4 py-1.5">

// GOOD: 토큰 사용
const spacing = {
  xs: 'gap-1',    // 4px
  sm: 'gap-2',    // 8px
  md: 'gap-3',    // 12px
  lg: 'gap-4',    // 16px
}
<div className={`${spacing.sm} px-4 py-1.5`}>
```

### 5. **Incremental Testing**
각 변경 후:
- [ ] 의도한 기능 작동하는가?
- [ ] 기존 기능 깨지지 않았는가?
- [ ] 디자인 시스템 일치하는가?
- [ ] Edge case 처리했는가?

---

## 앞으로의 방향

### 즉시 조치 (Immediate Actions)
1. **Interest 체크박스 테스트**: 실제 브라우저에서 클릭 확인
2. **전체 기능 검증**: 모든 페이지 (Home, Detail, AI Levels) 확인
3. **디자인 일관성 검토**: 간격, 크기, 색상 통일성

### 중기 개선 (Medium-term Improvements)
1. **디자인 토큰 시스템 구축**
   - `design-tokens.ts` 파일 생성
   - spacing, colors, typography, breakpoints 중앙화

2. **컴포넌트 테스트 추가**
   - Interest 체크박스 클릭 테스트
   - 드롭다운 표시/숨김 테스트
   - 모바일 navigation 테스트

3. **리팩토링**
   - Dropdown 컴포넌트 통일 (현재 3가지 다른 방식)
   - Event handling 패턴 통일
   - CSS 클래스명 체계화

### 장기 전략 (Long-term Strategy)
1. **Headless UI 라이브러리 도입** (Radix UI, Headless UI)
   - 드롭다운, 모달 등 접근성과 이벤트 처리가 검증된 컴포넌트
   - 직접 구현 대신 proven solution 사용

2. **Storybook 도입**
   - 각 컴포넌트 격리된 환경에서 테스트
   - 디자인 시스템 문서화

3. **E2E 테스트** (Playwright)
   - Critical user flows 자동화
   - "체크박스 클릭 → 상태 변경" 등

---

## 결론

모바일 responsive 추가 과정에서 발생한 문제들은 **기술적 이해 부족**보다는 **엔지니어링 프로세스 부족**에서 비롯되었습니다:

1. 시스템적 설계 없이 문제가 생길 때마다 패치
2. 근본 원인 분석 없이 증상만 치료
3. 각 변경 후 검증 부족
4. 디자인 시스템 일관성 관리 실패

**핵심 교훈**: "빠르게 고치기"보다 "제대로 이해하고 고치기"가 결국 더 빠릅니다.
