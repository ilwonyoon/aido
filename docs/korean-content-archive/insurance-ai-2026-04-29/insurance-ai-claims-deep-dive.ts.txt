import { Article } from '../types';

export const insuranceAiClaimsDeepDive: Article = {
  slug: 'insurance-ai-claims-deep-dive',
  title: 'Insurance AI Deep Dive: Claims AI는 왜 넓고 어려운가',
  excerpt:
    'Claims는 보험금 청구를 처리하는 업무다. Sprout.ai, EvolutionIQ, Tractable, Shift Technology를 통해 claims AI가 왜 크지만 한 회사가 다 먹기 어려운지 본다.',
  publishedDate: '2026-04-28',
  author: {
    name: 'AIDO Research',
    role: 'AI Design Opportunities',
  },
  seo: {
    metaDescription:
      'A beginner-friendly deep dive into claims AI, claims adjusters, fraud detection, damage assessment, Sprout.ai, EvolutionIQ, Tractable, and Shift Technology.',
    keywords: [
      'claims AI',
      'insurance claims',
      'Sprout.ai',
      'EvolutionIQ',
      'Tractable',
      'Shift Technology',
      'insurance fraud AI',
      'AI product design',
    ],
  },
  content: `

보험에서 claim은 고객이 보험금을 요청하는 순간이다. 사고가 났고, 손해가 발생했고, 고객은 보험사에게 "이건 보상 대상입니다"라고 말한다.

그래서 claims는 보험사의 가장 민감한 workflow다. 고객 경험과 비용이 동시에 걸려 있다.

보험사가 너무 느리게 처리하면 고객은 화가 난다. 너무 쉽게 지급하면 손해율이 나빠진다. 너무 공격적으로 사기를 의심하면 정상 고객까지 피해를 본다. 그래서 claims AI는 기회가 크지만, 단순 자동화로 접근하기 어렵다.


## Plain English: Claim과 adjuster

**Claim**은 보험금 청구다. 자동차 사고, 건물 화재, 장애 보험, 산재, 의료비 거절 등 고객이 보험사에 보상을 요청하는 모든 일이 claim이다.

**Claims adjuster**는 claim을 검토하는 사람이다. 사고가 실제로 발생했는지, policy가 보장하는 범위인지, 지급 금액은 얼마가 적절한지 판단한다.

**Loss adjustment expense**는 claim을 처리하는 데 드는 비용이다. 사람의 시간, 조사 비용, 외부 전문가, 행정 비용 등이 포함된다. 보험사 입장에서는 claim 지급액뿐 아니라 claim을 처리하는 비용도 줄이고 싶다.

**Fraud**는 보험 사기다. 실제보다 피해를 부풀리거나, 존재하지 않는 사고를 청구하거나, policy 조건을 악용하는 경우가 있다. 하지만 모든 의심스러운 claim이 사기는 아니기 때문에 조심해야 한다.


## 왜 claims는 AI에 잘 맞는가

Claims에는 AI가 잘 처리할 수 있는 정보가 많다.

첫째, 문서가 많다. 사고 보고서, 의료 기록, 수리 견적, 이메일, policy 문서, 사진, 통화 기록 등 대부분이 사람이 읽어야 하는 자료다.

둘째, triage가 필요하다. 여기서 **triage**는 많은 claim 중 어떤 것을 먼저 볼지, 어떤 것은 자동 처리해도 되는지, 어떤 것은 전문가에게 넘겨야 하는지 분류하는 일이다.

셋째, evidence가 중요하다. Claim decision은 근거가 있어야 한다. AI가 "지급하세요"라고 말하는 것보다, 어떤 policy 조항과 어떤 증거를 보고 그렇게 판단했는지가 중요하다.

넷째, 결과가 고객 경험과 직결된다. Claims는 고객이 보험사의 가치를 체감하는 순간이다. 보험 가입 때는 약속을 사는 것이고, claim 때는 그 약속이 실제로 지켜지는지 보는 것이다.


## Sprout.ai: claim 문서를 읽고 처리하는 automation layer

[Sprout.ai](/company/sprout-ai)는 claim 문서를 읽고, 정보를 추출하고, claims team이 더 빠르게 판단하도록 돕는 쪽에 가깝다.

이 유형의 제품은 claim intake와 document review에서 시작한다. Claim이 들어오면 필요한 정보를 찾고, 빠진 내용을 표시하고, policy와 비교하고, handler가 검토하기 쉽게 정리한다.

이 시장은 ROI가 분명하다. Claim 처리 시간이 줄면 고객 응답 속도가 빨라지고, claims team의 workload가 줄고, 운영비도 낮아진다. 하지만 moat은 깊은 workflow로 들어가야 생긴다. 단순 extraction만 하면 범용 document AI와 경쟁해야 한다.


## EvolutionIQ: complex claims에서 next-best-action을 제안한다

[EvolutionIQ](/company/evolutioniq)는 disability, injury, workers compensation처럼 복잡한 claim에서 claims professional에게 next-best-action을 제안하는 회사다.

**Next-best-action**은 이 case에서 다음에 해야 할 가장 좋은 행동을 뜻한다. 예를 들어 추가 의료 기록을 요청해야 하는지, 특정 case manager가 개입해야 하는지, 회복 가능성이 높은 claim을 우선 처리해야 하는지 같은 판단이다.

복잡한 claim은 단순히 문서를 읽는 문제가 아니다. 기간이 길고, 의료 정보가 있고, employer, doctor, claimant, insurer가 모두 얽혀 있다. 그래서 EvolutionIQ 같은 제품은 claim handler의 판단을 대체하기보다 우선순위와 intervention을 돕는다.

이런 제품의 design challenge는 "왜 이 claim이 지금 중요해졌는가"를 설명하는 것이다. Claims team은 AI가 찍어준 점수만 보고 움직일 수 없다. 어떤 signal 때문에 이 case를 봐야 하는지 이해해야 한다.


## Tractable: 사진을 보고 damage assessment를 한다

[Tractable](/company/tractable)은 claims AI 중에서도 computer vision 쪽이다. 자동차나 건물 손상 사진을 보고 damage assessment를 한다.

**Damage assessment**는 손상 정도를 평가하는 일이다. 예를 들어 차량 사고 사진을 보고 어떤 부품이 손상되었는지, 수리비가 어느 정도인지 추정하는 것이다.

Tractable의 장점은 input과 output이 비교적 선명하다는 점이다. 사진이 있고, 손상 판단이 있고, estimate나 repair workflow로 이어진다. 많은 claim 업무가 텍스트와 문서 중심인 반면, Tractable은 visual AI의 깊이가 moat이 될 수 있다.

하지만 이미지 기반 AI도 어렵다. 조명, 각도, 지역, 차량 모델, 수리 기준, hidden damage 등 변수가 많다. 그래서 UI는 결과만 보여주면 안 된다. 어떤 부위가 손상으로 감지되었는지, confidence가 어느 정도인지, 사람이 어디를 확인해야 하는지 보여줘야 한다.


## Shift Technology: fraud와 decision automation

[Shift Technology](/company/shift-technology)는 claims fraud detection과 insurance decision automation에 강한 회사다.

Fraud detection은 매력적인 영역이다. 보험 사기는 보험사의 손실을 키운다. AI는 여러 claim 사이의 패턴, 이상 행동, 과거 기록, 네트워크 관계를 분석해 의심 신호를 찾을 수 있다.

하지만 fraud AI는 UX가 특히 조심스럽다. False positive, 즉 정상 claim을 사기로 잘못 의심하는 경우가 생길 수 있다. 그러면 고객 경험과 공정성 문제가 발생한다.

그래서 fraud AI의 좋은 디자인은 "이 claim은 사기입니다"가 아니라 "이 claim에는 이런 이유로 추가 검토가 필요합니다"에 가깝다. Investigator가 evidence를 보고 판단할 수 있어야 한다.


## 왜 한 회사가 claims를 다 먹기 어려운가

Claims는 하나의 workflow처럼 보이지만 실제로는 여러 개의 시장이다.

Auto claim과 disability claim은 완전히 다르다. Property damage와 health insurance denial도 다르다. Fraud investigation과 document intake도 다르다.

그래서 claims AI에서는 "claims 전체를 자동화한다"는 말보다, 어떤 claim type과 어떤 workflow를 소유하는지가 중요하다.

- Sprout.ai는 document-heavy claims automation에 가깝다.
- EvolutionIQ는 complex injury/disability claims guidance에 가깝다.
- Tractable은 visual damage assessment에 가깝다.
- Shift Technology는 fraud detection과 decision automation에 가깝다.

겹치는 부분은 있지만, core wedge는 다르다.


## Design question

Claims AI의 디자인 핵심은 속도와 공정성의 균형이다.

디자이너가 풀어야 할 질문은 이런 것들이다.

- AI가 claim을 우선순위화한 이유를 어떻게 보여줄 것인가?
- 고객에게 불리한 결정이 내려질 때 어떤 evidence와 explanation이 필요한가?
- Fraud alert가 뜬 claim을 investigator가 어떻게 검토해야 하는가?
- 사진 기반 damage estimate에서 사람이 확인해야 할 부분을 어떻게 표시할 것인가?
- Claim handler가 AI recommendation을 override할 때 기록은 어떻게 남길 것인가?

Claims AI는 automation만의 문제가 아니다. 고객이 보험사를 믿을 수 있게 만드는 trust workflow의 문제다.


## Interview-ready takeaway

> Claims AI is attractive because claims are document-heavy, repetitive, and expensive. But it is hard to own because claims are not one workflow. Auto damage, disability, fraud, and health denials are different markets with different data, users, and trust problems.

한국어로는 이렇게 말하면 된다.

> Claims AI는 문서와 반복 업무가 많아서 AI에 잘 맞지만, claims 자체가 너무 넓어서 한 회사가 다 먹기 어렵습니다. 좋은 회사를 보려면 claims라는 큰 단어보다 어떤 claim type과 어떤 decision workflow를 소유하는지 봐야 합니다.
`,
  companyIds: ['sprout-ai', 'evolutioniq', 'tractable', 'shift-technology'],
  sources: [
    {
      title: 'Sprout.ai platform',
      url: 'https://sprout.ai/platform/',
      publisher: 'Sprout.ai',
    },
    {
      title: 'CCC Intelligent Solutions completes EvolutionIQ acquisition',
      url: 'https://www.cccis.com/ai-powered-casualty',
      publisher: 'CCC Intelligent Solutions',
      date: '2025-01-15',
    },
    {
      title: 'Tractable raises $65M Series E',
      url: 'https://techcrunch.com/2023/07/18/tractable-snaps-up-65m-led-by-softbank-for-car-and-property-damage-appraisals-using-ai/',
      publisher: 'TechCrunch',
      date: '2023-07-18',
    },
    {
      title: 'Shift Technology Claims Fraud product',
      url: 'https://www.shift-technology.com/products/claims-fraud-detection',
      publisher: 'Shift Technology',
    },
  ],
  tags: ['Insurance AI', 'Claims', 'Fraud Detection', 'Computer Vision', 'Product Design'],
  category: 'guides',
  readingTimeMinutes: 10,
};

