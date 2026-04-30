import { Article } from '../types';

export const insuranceAiRiskDataPropertyIntelligence: Article = {
  slug: 'insurance-ai-risk-data-property-intelligence',
  title: 'Insurance AI Deep Dive: Risk Data와 Property Intelligence는 보험사의 눈이다',
  excerpt:
    'ZestyAI, Tractable, Gradient AI를 통해 보험사가 위험을 더 잘 보기 위해 어떤 데이터와 AI를 쓰는지, data moat이 왜 어려운지 설명한다.',
  publishedDate: '2026-04-28',
  author: {
    name: 'AIDO Research',
    role: 'AI Design Opportunities',
  },
  seo: {
    metaDescription:
      'A beginner-friendly deep dive into insurance risk data, property intelligence, climate risk, computer vision, ZestyAI, Tractable, and Gradient AI.',
    keywords: [
      'insurance risk data',
      'property intelligence',
      'ZestyAI',
      'Tractable',
      'Gradient AI',
      'climate risk insurance',
      'computer vision insurance',
    ],
  },
  content: `

보험사는 미래의 위험을 예측하는 회사다. 고객에게 보험을 팔 때 보험사는 아직 일어나지 않은 사고와 손실을 가격에 반영해야 한다.

그래서 보험사에게 좋은 데이터는 곧 좋은 시야다. 어떤 집이 산불 위험에 노출되어 있는지, 어떤 지붕이 낡았는지, 어떤 지역의 hail damage 가능성이 높은지, 어떤 고객군이 예상보다 손실이 큰지 더 잘 볼수록 보험사는 underwriting과 pricing을 더 잘할 수 있다.

이 글은 risk data와 property intelligence를 다룬다. 대표 회사는 [ZestyAI](/company/zestyai), [Tractable](/company/tractable), [Gradient AI](/company/gradient-ai)다.


## Plain English: Risk data란 무엇인가

Risk data는 보험사가 위험을 판단하는 데 쓰는 데이터다.

예를 들어 property insurance에서는 건물 위치, 지붕 상태, 주변 vegetation, flood zone, wildfire exposure, 과거 claim history가 risk data가 될 수 있다.

Commercial insurance에서는 회사의 업종, 매출, 직원 수, 안전 기록, cyber posture, litigation history가 risk data가 될 수 있다.

Risk data가 중요한 이유는 보험사가 실제 사고가 나기 전에 가격과 조건을 정해야 하기 때문이다. 보험사는 항상 불완전한 정보로 미래를 예측한다.


## Property intelligence: 건물을 더 잘 보는 기술

**Property intelligence**는 집, 건물, 토지, 주변 환경에 대한 정보를 분석해 보험 리스크를 이해하는 기술이다.

[ZestyAI](/company/zestyai)는 이 영역의 대표 회사다. 항공 이미지, satellite imagery, computer vision, climate data를 활용해 property risk를 분석한다. 예를 들어 지붕 상태, 나무와 건물의 거리, wildfire 위험, severe weather exposure 같은 신호를 볼 수 있다.

이런 정보는 property insurer에게 매우 중요하다. 보험사가 실제 현장 inspection을 매번 할 수는 없다. 하지만 이미지와 외부 데이터를 이용하면 많은 property를 scale 있게 평가할 수 있다.

여기서 **computer vision**은 이미지를 분석하는 AI다. 사람이 사진을 보고 지붕이 낡았는지 판단하듯, AI가 이미지에서 risk signal을 찾는다.


## Climate risk가 보험을 흔드는 이유

Property insurance에서 climate risk는 점점 더 중요해지고 있다. 산불, 홍수, 허리케인, hail, extreme weather가 보험사의 손실을 키우고 있다.

보험사는 특정 지역의 위험을 더 정교하게 봐야 한다. 너무 넓은 단위로 가격을 책정하면 좋은 고객과 나쁜 고객을 구분하지 못한다. 너무 공격적으로 가격을 올리면 regulator와 소비자 반발이 생긴다.

그래서 ZestyAI 같은 회사의 가치는 단순히 "이미지 분석"이 아니다. 보험사가 property-level risk를 더 잘 이해하도록 돕는 것이다.


## Tractable: claims에서 시작하지만 visual risk data를 만든다

[Tractable](/company/tractable)은 주로 auto와 property damage assessment로 알려져 있다. 사고 사진을 보고 손상 정도를 분석한다.

Claims workflow에서 시작했지만, 이런 visual assessment는 risk data와도 연결된다. 손상 이미지, 수리 비용, claim outcome이 쌓이면 특정 damage pattern과 비용 구조를 더 잘 이해할 수 있다.

Tractable의 moat은 이미지 데이터와 domain model에 있다. 하지만 data moat은 자동으로 생기지 않는다. 이미지가 많아도 label 품질이 낮거나 workflow에 연결되지 않으면 가치가 제한된다.


## Gradient AI: risk analytics를 여러 workflow에 연결한다

[Gradient AI](/company/gradient-ai)는 보험 risk analytics를 더 넓게 다룬다. Underwriting, claims, policy analytics에 ML model을 적용해 위험을 예측하려 한다.

ZestyAI가 property-specific signal에 강하다면, Gradient AI는 보험사의 여러 risk decision에 모델과 데이터를 제공하는 쪽에 가깝다.

이런 회사의 기회는 보험사의 fragmented data를 decision-ready intelligence로 바꾸는 데 있다. 보험사는 데이터가 없는 것이 아니라, 데이터가 흩어져 있고 바로 판단에 쓰기 어렵다는 문제가 많다.


## Data moat은 왜 말처럼 쉽지 않은가

AI 회사들이 자주 말하는 moat 중 하나가 data moat이다. 더 많은 데이터가 더 좋은 모델을 만들고, 더 좋은 모델이 더 많은 고객을 끌어오며, 그 고객이 다시 데이터를 늘린다는 논리다.

보험에서는 이 논리가 부분적으로 맞지만, 매우 어렵다.

첫째, 보험 데이터는 민감하다. 고객 정보, claim 기록, 의료 정보, 재무 정보가 포함될 수 있다.

둘째, carrier마다 데이터 format이 다르다. 같은 claim이라도 회사마다 시스템, 필드, 코드, 문서 구조가 다르다.

셋째, 데이터가 많아도 decision에 연결되어야 한다. Underwriter나 claims adjuster가 실제로 쓸 수 있는 형태가 아니면 모델 점수는 dashboard에 머문다.

넷째, 규제와 공정성 문제가 있다. 특정 지역이나 속성을 기반으로 가격과 보장을 다룰 때는 설명 가능성과 governance가 필요하다.

그래서 insurance data moat은 raw data의 양보다 더 복잡하다. 좋은 회사는 데이터를 모으는 것에서 끝나지 않고, 그것을 workflow와 explanation으로 바꾼다.


## Product design 관점

Risk data 제품의 디자인은 map, score, evidence, uncertainty를 다룬다.

디자이너가 풀어야 할 질문은 이런 것들이다.

- Property risk score가 왜 높은지 사용자가 이해할 수 있는가?
- 이미지에서 어떤 부분이 risk signal인지 시각적으로 확인할 수 있는가?
- Climate risk처럼 불확실성이 큰 정보를 어떻게 과신하지 않게 보여줄 것인가?
- Portfolio-level view와 individual property view를 어떻게 연결할 것인가?
- Underwriter가 risk score를 decision에 반영할 때 어떤 evidence가 필요한가?

Risk data UI는 숫자 하나를 보여주는 화면이면 부족하다. 좋은 제품은 점수, 근거, 지도, 이미지, 과거 outcome을 연결해 사용자가 판단할 수 있게 만든다.


## Interview-ready takeaway

> Risk data is the insurer's eyesight. Companies like ZestyAI, Tractable, and Gradient AI are valuable if they turn hard-to-see risk signals into decision-ready intelligence for underwriting, pricing, and claims.

한국어로는 이렇게 말할 수 있다.

> Risk data와 property intelligence는 보험사가 미래 위험을 더 잘 보게 해주는 영역입니다. 하지만 data moat은 데이터 양만으로 생기지 않고, 그 데이터를 underwriting, pricing, claims decision에 쓸 수 있는 evidence와 workflow로 바꿀 때 생깁니다.
`,
  companyIds: ['zestyai', 'tractable', 'gradient-ai'],
  sources: [
    {
      title: 'ZestyAI website',
      url: 'https://zesty.ai/',
      publisher: 'ZestyAI',
    },
    {
      title: 'ZestyAI raises $33M',
      url: 'https://coverager.com/zesty-ai-raises-33-million/',
      publisher: 'Coverager',
      date: '2022-07-19',
    },
    {
      title: 'Tractable raises $65M Series E',
      url: 'https://techcrunch.com/2023/07/18/tractable-snaps-up-65m-led-by-softbank-for-car-and-property-damage-appraisals-using-ai/',
      publisher: 'TechCrunch',
      date: '2023-07-18',
    },
    {
      title: 'Gradient AI secures $56M Series C',
      url: 'https://www.gradientai.com/press-gradient-ai-secures-56-million-in-series-c-funding-to-expand-ai-powered-insurance-solutions',
      publisher: 'Gradient AI',
      date: '2024-07-17',
    },
  ],
  tags: ['Insurance AI', 'Risk Data', 'Property Intelligence', 'Climate Risk', 'Product Design'],
  category: 'guides',
  readingTimeMinutes: 8,
};

