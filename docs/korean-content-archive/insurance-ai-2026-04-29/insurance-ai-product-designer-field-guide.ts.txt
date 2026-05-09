import { Article } from '../types';

export const insuranceAiProductDesignerFieldGuide: Article = {
  slug: 'insurance-ai-product-designer-field-guide',
  title: 'Insurance AI Field Guide: Product Designer가 봐야 할 것',
  excerpt:
    '보험 AI에서 디자이너가 봐야 할 핵심은 예쁜 dashboard가 아니라 trust, explainability, audit trail, exception handling, human-in-the-loop이다.',
  publishedDate: '2026-04-28',
  author: {
    name: 'AIDO Research',
    role: 'AI Design Opportunities',
  },
  seo: {
    metaDescription:
      'A product designer field guide to insurance AI: trust design, explainability, audit trails, exception handling, human-in-the-loop workflows, and interview-ready framing.',
    keywords: [
      'insurance AI product design',
      'AI UX',
      'explainability',
      'human in the loop',
      'audit trail',
      'trust design',
      'AI design career',
    ],
  },
  content: `

보험 AI는 겉으로 보면 덜 매력적인 B2B SaaS처럼 보일 수 있다. 어두운 dashboard, 많은 table, 복잡한 form, 오래된 workflow가 떠오른다.

하지만 product designer 관점에서 보면 보험 AI는 매우 좋은 문제를 품고 있다. AI가 실질적인 판단을 돕고, 그 판단이 돈과 고객 경험과 규제에 영향을 주기 때문이다.

여기서 좋은 디자인은 예쁜 화면이 아니다. 좋은 디자인은 expert user가 AI를 믿을 수 있게 하되, 맹신하지 않게 만드는 구조다.


## 1. Trust design: 사용자가 왜 믿어도 되는가

보험 AI에서 trust는 감성적인 단어가 아니다. 제품 기능이다.

Underwriter가 AI의 risk recommendation을 볼 때, claims adjuster가 fraud alert를 볼 때, actuary가 pricing model 결과를 볼 때 모두 같은 질문을 한다.

"왜 이렇게 판단했지?"

그래서 보험 AI는 answer보다 evidence가 중요하다. AI가 결론을 말하는 것보다, 어떤 문서, 어떤 policy 조항, 어떤 과거 data, 어떤 image region을 근거로 삼았는지 보여줘야 한다.

디자인 질문:

- AI recommendation 옆에 어떤 evidence를 붙일 것인가?
- 사용자가 원하면 deeper source까지 drill down할 수 있는가?
- 신뢰도가 낮을 때 그 불확실성을 어떻게 표현할 것인가?
- 모델이 모르는 것을 모른다고 말할 수 있는가?


## 2. Explainability: 설명 가능성은 compliance가 아니라 UX다

**Explainability**는 AI가 왜 그런 결과를 냈는지 사람이 이해할 수 있게 만드는 것이다.

보험에서는 explainability가 특히 중요하다. 보험료가 오르거나 claim이 거절되거나 fraud investigation이 시작되면 고객과 regulator가 이유를 물을 수 있다.

하지만 설명 가능성을 compliance 팀만의 요구사항으로 보면 UX가 딱딱해진다. 좋은 제품은 설명을 workflow 안에 자연스럽게 녹인다.

예를 들어 "High risk"라는 badge만 보여주면 부족하다. 어떤 factor가 risk를 높였는지, 어떤 정보가 missing인지, 어떤 policy 조항과 연결되는지 보여줘야 한다.


## 3. Audit trail: 기록은 제품의 뒷단이 아니라 앞단이다

**Audit trail**은 누가, 언제, 어떤 정보를 보고, 어떤 판단을 했는지 남기는 기록이다.

많은 제품에서 audit log는 admin page 구석에 있다. 하지만 보험 AI에서는 audit trail이 decision workflow의 일부가 되어야 한다.

Underwriter가 AI recommendation을 수락했는지, 수정했는지, 거절했는지. Claims adjuster가 fraud alert를 왜 dismiss했는지. Actuary가 pricing scenario를 어떤 이유로 승인했는지. 이런 기록은 나중에 compliance, dispute, team learning에 모두 쓰인다.

디자인 질문:

- 사용자가 별도 부담 없이 판단 이유를 남기게 할 수 있는가?
- Override reason을 너무 귀찮지 않게 수집할 수 있는가?
- Audit trail이 review와 coaching에도 도움이 되게 만들 수 있는가?


## 4. Exception handling: 보험 업무는 예외의 연속이다

보험 workflow는 표준화된 것처럼 보이지만 실제로는 예외가 많다.

문서가 빠져 있다. Policy wording이 애매하다. Broker가 다른 정보를 보냈다. Claim 사진이 흐릿하다. 고객이 특수한 업종이다. Regulation이 지역마다 다르다.

그래서 보험 AI의 UX는 happy path만 설계하면 안 된다. 오히려 exception state가 제품의 실력이다.

디자인 질문:

- AI가 판단할 수 없는 case를 어떻게 표시할 것인가?
- 추가 정보 요청 flow를 어떻게 자연스럽게 연결할 것인가?
- Low confidence case를 specialist에게 넘기는 escalation은 어떻게 설계할 것인가?
- 사용자가 AI output을 수정했을 때 그 수정이 다음 workflow에 어떻게 반영되는가?


## 5. Human-in-the-loop: 사람을 없애는 것이 아니라 판단을 증폭한다

**Human-in-the-loop**는 사람이 AI workflow 안에 남아 최종 판단이나 검토를 하는 구조다.

보험 AI에서 이 개념은 매우 중요하다. 많은 보험 업무는 완전 자동화보다 augmented decision이 현실적이다. Underwriter, claims adjuster, actuary는 AI가 정리한 정보를 바탕으로 더 빠르고 일관되게 판단한다.

좋은 human-in-the-loop 디자인은 사람이 rubber stamp가 되지 않게 한다. 즉, AI가 말한 것을 그냥 승인하는 사람이 아니라, 필요한 순간에 제대로 개입할 수 있어야 한다.

디자인 질문:

- 사람이 개입해야 하는 threshold는 어떻게 보이는가?
- AI recommendation과 human judgment가 충돌할 때 flow는 어떻게 되는가?
- 사람이 override한 판단은 제품이 어떻게 학습하거나 기록하는가?


## 6. Interview에서 써먹을 관점

보험 AI 회사를 인터뷰할 때 좋은 질문은 "모델이 얼마나 좋아요?"보다 더 구체적이어야 한다.

예를 들어 이렇게 물어볼 수 있다.

- 이 제품이 insurer의 어떤 daily decision을 소유하려 하나요?
- AI recommendation의 evidence와 audit trail은 어떻게 설계되어 있나요?
- 사용자가 AI를 override하는 경우를 어떻게 다루나요?
- 고객사별 guideline이나 decision history가 제품에 어떻게 반영되나요?
- Underwriter나 claims adjuster가 매일 여는 workbench가 되는 것이 목표인가요, 아니면 document automation layer인가요?

이 질문들은 product designer가 business moat과 UX quality를 함께 이해하고 있다는 신호를 준다.


## Companies to watch

[Sixfold](/company/sixfold)와 [Federato](/company/federato)는 underwriting decision layer 관점에서 볼 만하다.

[FurtherAI](/company/further-ai)는 insurance workflow automation에서 decision layer로 확장할 수 있는지가 핵심 질문이다.

[Akur8](/company/akur8)은 transparent AI와 actuarial workflow 측면에서 좋은 design problem이 있다.

[Tractable](/company/tractable)과 [ZestyAI](/company/zestyai)는 visual evidence와 risk visualization이 중요하다.

[Counterforce Health](/company/counterforce-health)는 patient-side trust와 high-stress UX를 볼 수 있는 다른 종류의 보험 AI다.


## Interview-ready takeaway

> In insurance AI, product design is not about making dashboards prettier. It is about designing trust, evidence, audit trails, exception handling, and human judgment into high-stakes workflows.

한국어로는 이렇게 말할 수 있다.

> 보험 AI에서 디자이너의 핵심 역할은 AI 답변을 예쁘게 보여주는 것이 아니라, 사람이 고위험 의사결정을 신뢰하고 검토하고 기록할 수 있는 workflow를 설계하는 것입니다. 그래서 trust, explainability, audit trail, exception handling, human-in-the-loop가 핵심 디자인 문제입니다.
`,
  companyIds: [
    'sixfold',
    'federato',
    'further-ai',
    'akur8',
    'tractable',
    'zestyai',
    'counterforce-health',
  ],
  sources: [
    {
      title: 'FurtherAI announces $25M Series A',
      url: 'https://www.furtherai.com/blog/%20furtherai-announces-25m-series-a-from-andreessen-horowitz-to-transform-insurance-workflows-with-ai-automating-busywork',
      publisher: 'FurtherAI',
      date: '2025-10-01',
    },
    {
      title: 'Sixfold raises $30M Series B to build AI underwriters',
      url: 'https://www.sixfold.ai/content/post/series-b-ai-underwriter',
      publisher: 'Sixfold',
      date: '2026-01-13',
    },
    {
      title: 'Akur8 secures $120M Series C',
      url: 'https://s24.q4cdn.com/538403808/files/doc_news/Akur8-Secures-120-Million-in-Series-C-Round-to-Accelerate-Growth-of-its-Next-Generation-Actuarial-Platform-2024.pdf',
      publisher: 'Akur8',
      date: '2024-09-05',
    },
  ],
  tags: ['Insurance AI', 'Product Design', 'AI UX', 'Trust Design', 'Career'],
  category: 'guides',
  readingTimeMinutes: 9,
};

