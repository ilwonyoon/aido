import { Article } from '../types';

export const insuranceAiNewCarrierModels: Article = {
  slug: 'insurance-ai-new-carrier-models',
  title: 'Insurance AI Deep Dive: AI가 보험사를 돕는 것을 넘어 보험사가 될 수 있을까',
  excerpt:
    'Corgi와 Counterforce Health를 통해 software vendor가 아닌 carrier, patient-side advocacy, full-stack insurance model을 이해한다.',
  publishedDate: '2026-04-28',
  author: {
    name: 'AIDO Research',
    role: 'AI Design Opportunities',
  },
  seo: {
    metaDescription:
      'A beginner-friendly deep dive into AI-native insurance carriers, Corgi, Counterforce Health, carrier vs broker vs software vendor, and new insurance models.',
    keywords: [
      'AI insurance carrier',
      'Corgi insurance',
      'Counterforce Health',
      'insurance denial AI',
      'full stack insurance',
      'AI native carrier',
    ],
  },
  content: `

대부분의 보험 AI 회사는 기존 보험사를 돕는다. Sixfold는 underwriter를 돕고, Tractable은 claim assessment를 돕고, Akur8은 pricing team을 돕는다.

하지만 어떤 회사들은 다른 질문을 던진다.

"AI로 기존 보험사의 workflow를 개선하는 것을 넘어, 아예 보험 비즈니스 자체를 새로 만들 수 있을까?"

이 글에서는 [Corgi](/company/corgi)와 [Counterforce Health](/company/counterforce-health)를 통해 new insurance models를 본다.


## Plain English: Carrier, broker, MGA, software vendor

보험 업계에는 비슷해 보이지만 다른 역할들이 있다.

**Carrier**는 실제 보험 리스크를 인수하는 보험사다. 고객에게 보험료를 받고, claim이 발생하면 보험금을 지급할 책임을 진다.

**Broker**는 고객과 보험사를 연결하는 중개자다. 고객에게 맞는 보험을 찾아주지만, 보통 자기 balance sheet로 리스크를 떠안지는 않는다.

**MGA**는 Managing General Agent의 약자다. 보험사를 대신해 underwriting이나 policy 발행을 할 수 있는 전문 사업자다. 리스크를 직접 보유하지 않을 수도 있지만, 보험 상품 운영에 깊게 관여한다.

**Software vendor**는 보험사, broker, MGA에게 software를 파는 회사다. 대부분의 보험 AI 회사는 이 범주에 들어간다.

Corgi가 흥미로운 이유는 software vendor가 아니라 AI-native full-stack carrier를 지향한다는 점이다.


## Corgi: AI-native carrier라는 높은 난이도의 선택

[Corgi](/company/corgi)는 startups와 high-growth companies를 위한 AI-native full-stack insurance carrier를 말한다.

Full-stack carrier라는 말은 보험사의 핵심 기능을 직접 가진다는 뜻이다. 단순 software를 파는 것이 아니라, 상품을 만들고, underwriting을 하고, policy를 발행하고, claim 책임을 진다.

이 모델은 upside가 크다. 보험사를 직접 만들면 software fee만 받는 것이 아니라 보험료 기반의 더 큰 revenue pool에 접근할 수 있다. 고객 경험도 end-to-end로 설계할 수 있다.

하지만 난이도도 훨씬 높다.

첫째, 규제가 강하다. 보험사는 주별, 국가별 규제를 따라야 한다.

둘째, 자본이 필요하다. Claim이 발생하면 실제 돈을 지급해야 한다.

셋째, risk management가 어렵다. 잘못된 underwriting은 회사의 손실로 바로 돌아온다.

넷째, software startup의 빠른 iteration과 regulated carrier의 안정성이 충돌할 수 있다.

그래서 Corgi는 단순한 AI SaaS보다 훨씬 더 큰 bet이다. 성공하면 보험 경험 자체를 바꿀 수 있지만, software vendor보다 훨씬 무겁다.


## Counterforce Health: 보험사를 위한 AI가 아니라 보험사에 맞서는 AI

[Counterforce Health](/company/counterforce-health)는 또 다른 방향이다. 기존 보험사를 돕는 것이 아니라, 환자와 clinician이 health insurance denial에 대응하도록 돕는다.

**Denial**은 보험사가 claim이나 치료 보장을 거절하는 것이다. 환자 입장에서는 매우 스트레스가 큰 상황이다. Appeal을 하려면 policy language, 의료 근거, payer rule을 이해해야 한다.

Counterforce Health는 AI로 appeal letter를 만들고, 환자나 clinic이 거절에 대응하도록 돕는다. 이 모델은 insurer workflow 안으로 들어가는 것이 아니라, insurer decision의 반대편에 선다.

이 회사는 전통적인 B2B insurance AI와 다르게 봐야 한다. 고객은 보험사가 아니라 환자, clinician, clinic일 수 있다. Moat도 carrier integration이 아니라 appeal outcome data, medical evidence workflow, distribution에서 생길 수 있다.


## 왜 이 모델들은 software vendor와 다르게 평가해야 하는가

Software vendor는 보험사의 기존 workflow 안으로 들어가 효율성을 판다. Carrier나 patient advocacy model은 보험 시장의 power structure 자체를 건드린다.

Corgi는 보험사가 되려 한다. Counterforce Health는 보험사의 denial에 대응하는 도구가 되려 한다.

둘 다 흥미롭지만, 평가 기준이 다르다.

Corgi를 볼 때는 AI UX만 볼 수 없다. Underwriting quality, regulatory approval, capital strategy, claims handling, loss ratio를 봐야 한다.

Counterforce Health를 볼 때는 product usage만 볼 수 없다. Appeal success rate, medical/legal accuracy, patient trust, clinic distribution, business model을 봐야 한다.


## Product design 관점

New insurance model의 디자인은 신뢰와 책임의 디자인이다.

Corgi 같은 AI-native carrier에서는 founder나 finance leader가 보험을 이해하고 구매해야 한다. 보험은 원래 어렵고 불투명하다. 좋은 UX는 coverage, exclusions, limits, claims process를 명확하게 설명해야 한다.

Counterforce Health 같은 appeal tool에서는 사용자가 이미 스트레스 상태다. 돈, 건강, 치료가 걸려 있다. AI가 도움을 주되 과장하면 안 된다. "승인될 것입니다"가 아니라 "이 근거를 바탕으로 appeal을 준비할 수 있습니다"에 가까워야 한다.

디자이너가 풀어야 할 질문은 이런 것들이다.

- 보험 상품의 보장 범위와 제외 조건을 어떻게 쉽게 설명할 것인가?
- 사용자가 AI-generated appeal을 검토하고 수정할 수 있게 하려면 어떻게 해야 하는가?
- 의료 정보와 보험 문서를 안전하게 입력하게 만드는 trust flow는 무엇인가?
- Claim이나 denial처럼 감정적으로 민감한 순간에 어떤 tone이 적절한가?
- AI가 법률이나 의료 조언처럼 보이지 않게 하면서도 실질적 도움을 줄 수 있는가?


## Interview-ready takeaway

> Most insurance AI companies sell software into insurers. New carrier and advocacy models are different. They do not just improve insurance workflows. They try to change who owns the customer relationship and who captures the economics.

한국어로는 이렇게 말할 수 있다.

> Corgi나 Counterforce Health 같은 회사는 보험사를 위한 SaaS가 아니라 보험 시장의 구조 자체를 다르게 건드리는 모델입니다. 그래서 일반 보험 AI vendor처럼만 보면 안 되고, regulation, capital, trust, customer ownership까지 함께 봐야 합니다.
`,
  companyIds: ['corgi', 'counterforce-health'],
  sources: [
    {
      title: 'Corgi raises $108M to launch AI-native full-stack insurance carrier',
      url: 'https://www.prnewswire.com/news-releases/corgi-raises-108-million-to-launch-its-ai-native-full-stack-insurance-carrier-302346204.html',
      publisher: 'PR Newswire',
      date: '2026-01-13',
    },
    {
      title: 'Corgi YC profile',
      url: 'https://www.ycombinator.com/companies/corgi',
      publisher: 'Y Combinator',
    },
    {
      title: 'Counterforce Health website',
      url: 'https://www.counterforcehealth.org/',
      publisher: 'Counterforce Health',
    },
    {
      title: 'Using AI to fight back against insurance denials',
      url: 'https://www.axios.com/local/raleigh/2025/08/20/using-ai-to-fight-back-against-insurance-denials-counteforce',
      publisher: 'Axios Raleigh',
      date: '2025-08-20',
    },
  ],
  tags: ['Insurance AI', 'Carrier', 'Healthcare', 'Patient Advocacy', 'Product Design'],
  category: 'guides',
  readingTimeMinutes: 8,
};

