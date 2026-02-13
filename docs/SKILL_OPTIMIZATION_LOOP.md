# Skill Optimization Loop (Job Scraper + Company Researcher)

목표: 회사 리서치를 반복하면서 `job-scraper`와 `company-researcher`의 정확도/효율/완성도를 지속적으로 높인다.

## Loop

1. `pick-next-research` 기준으로 다음 회사 선택
2. `job-scraper` 실행 후 결과 기록
3. `company-researcher` 실행 후 회사 파일 업데이트
4. 품질 점수 측정
5. 토큰/진행/챌린지/개선 포인트 로그 기록
6. 개선안 반영 후 다음 회사 반복

## Commands

1. 품질 점수 측정

```bash
node scripts/score-company-quality.mjs <company-id>
```

출력:
- `Score`: 현재 회사 품질 점수 (0-100)
- `Quality Bar`: 완성도 기준점(골드 회사 평균)
- `Gap`: 기준 대비 차이
- `Issues`: 개선해야 할 항목

2. 반복 로그 기록 (토큰/만족도/개선점)

```bash
node scripts/log-skill-iteration.mjs \
  --company <company-id> \
  --phase baseline \
  --job-input-chars 12000 --job-output-chars 8000 \
  --research-input-chars 18000 --research-output-chars 14000 \
  --quality-score 82 --quality-bar 88 \
  --satisfaction 4 \
  --challenges "ATS blocked by bot|LinkedIn posting stale" \
  --improvements "Add ATS direct API fallback|Add role URL specificity check" \
  --notes "Need better source-domain diversity"
```

기록 위치:
- `src/data/research/skill-optimization-log.json`

## Metrics Definition

- 토큰 사용량: `chars / 4` 추정치
- 진행 상태: `baseline | improved | validated`
- 퀄리티: `quality score` vs `quality bar`
- 만족도: 1~5
- 챌린지: 반복적으로 발생한 병목/실패 유형
- 개선사항: 다음 iteration에서 반영할 행동 가능한 수정

## Quality Bar

`score-company-quality`는 아래 회사를 골드 기준으로 사용:
- `anthropic`
- `cursor`
- `linear`
- `replit`
- `gamma`
- `lovable`

## 운영 원칙

- 회사당 최소 1회 `baseline` + 1회 `improved` 측정
- 동일 이슈가 3회 이상 반복되면 스킬 문서 자체를 수정
- `Gap <= 0`(기준 이상) + 만족도 4 이상이면 해당 회사 iteration 종료

