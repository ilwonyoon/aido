import { Article } from '../types';

export const insuranceAi101NotOneMarket: Article = {
  slug: 'insurance-ai-101-not-one-market',
  title: 'Insurance AI 101: 보험 AI는 하나의 시장이 아니다',
  excerpt:
    'FurtherAI, Sixfold, Federato, Akur8, Tractable이 모두 보험 AI처럼 보이지만 실제로는 서로 다른 workflow 전장에서 싸운다. 보험 업계를 처음 보는 사람을 위한 지도.',
  publishedDate: '2026-04-28',
  author: {
    name: 'AIDO Research',
    role: 'AI Design Opportunities',
  },
  seo: {
    metaDescription:
      'An accessible primer on Insurance AI: underwriting, claims, pricing, fraud, risk data, and why the best insurance AI companies are trying to own the decision layer.',
    keywords: [
      'insurance AI',
      'insurtech AI',
      'FurtherAI',
      'Sixfold',
      'Federato',
      'Akur8',
      'Tractable',
      'underwriting AI',
      'claims AI',
      'insurance product design',
      'AI vertical SaaS',
    ],
  },
  content: `

FurtherAI라는 회사를 보기 시작했을 때 처음 든 생각은 단순했다. "보험사를 위한 AI 자동화 회사구나." 그런데 비슷한 회사를 더 찾아보면 금방 이상한 점이 보인다. Sixfold도 보험 AI다. Federato도 보험 AI다. Akur8도 보험 AI다. Tractable도 보험 AI다. Corgi도 보험 AI다.

겉으로 보면 모두 같은 시장에서 경쟁하는 것처럼 보인다. 하지만 조금만 들어가면 전혀 다른 문제를 풀고 있다.

- 어떤 회사는 보험사가 **누구를 고객으로 받을지** 판단하는 일을 돕는다.
- 어떤 회사는 사고가 났을 때 **보험금을 지급할지** 판단하는 일을 돕는다.
- 어떤 회사는 **보험료를 얼마로 책정할지** 계산한다.
- 어떤 회사는 사진을 보고 **차량이나 건물 손상 정도**를 추정한다.
- 어떤 회사는 아예 기존 보험사를 돕는 것이 아니라 **새로운 보험사**를 만들려 한다.

그래서 보험 AI를 이해할 때 첫 번째로 버려야 하는 생각은 이것이다.

> Insurance AI is not one market.

보험 AI는 하나의 시장이 아니다. 보험사가 매일 반복하는 여러 decision workflow, 즉 의사결정 업무들에서 동시에 열리고 있는 여러 개의 전장이다.

이 글은 그 지도를 그리기 위한 1편이다. 보험 업계를 모르는 사람도 이해할 수 있도록 기본 용어부터 풀고, 각 영역에서 어떤 AI 회사들이 무엇을 노리는지 정리한다.


## 먼저 보험사는 무엇을 하는 회사인가

보험을 아주 단순하게 말하면 **위험을 대신 떠안는 비즈니스**다.

예를 들어 어떤 스타트업이 사이버 공격, 직원 소송, 제품 문제 같은 리스크를 걱정한다고 하자. 보험사는 그 회사에게 이렇게 말한다.

"매달 또는 매년 보험료를 내세요. 대신 특정한 문제가 생기면 우리가 정해진 범위 안에서 손실을 보상해드리겠습니다."

여기서 몇 가지 기본 용어가 나온다.

**Premium**은 보험료다. 고객이 보험사에 내는 돈이다.

**Policy**는 보험 계약이다. 어떤 사고를 보장하고, 어떤 사고는 제외하며, 한도는 얼마인지 적혀 있는 문서다.

**Claim**은 보험금 청구다. 사고나 손해가 발생했을 때 고객이 "이건 보험으로 보상해주세요"라고 요청하는 과정이다.

**Underwriting**은 보험사가 고객을 받을지, 받는다면 어떤 조건과 가격으로 받을지 판단하는 과정이다. 쉽게 말하면 보험사의 심사 업무다.

**Loss ratio**는 보험사가 받은 보험료 대비 실제로 지급한 보험금의 비율이다. 보험사가 보험료로 100달러를 받고 보험금으로 70달러를 지급했다면 loss ratio는 70%다. 보험 비즈니스에서는 이 숫자가 매우 중요하다.

보험사의 일은 결국 이 질문들로 압축된다.

1. 이 고객은 우리가 받아도 되는 위험인가?
2. 받는다면 얼마를 받아야 손해를 보지 않을까?
3. 실제 사고가 났을 때 이 claim은 정당한가?
4. 보험금을 얼마나 지급해야 하는가?
5. 사기나 과다 청구는 없는가?
6. 전체 포트폴리오 관점에서 특정 위험에 너무 많이 노출되어 있지는 않은가?

이 질문들은 전부 판단의 문제다. 그리고 판단에는 데이터, 문서, 예외, 경험, 규제, 인간 검토가 필요하다. 바로 이 지점에서 AI 회사들이 들어온다.


## 왜 보험은 AI에 잘 맞는가

보험은 AI에 잘 맞는 특징을 많이 갖고 있다.

첫째, 문서가 많다. 보험 신청서, 기존 policy, claim 문서, 의료 기록, 사고 보고서, 사진, 이메일, broker note 등 대부분의 정보가 비정형 데이터다. 여기서 **비정형 데이터(unstructured data)**란 엑셀 표처럼 깔끔하게 정리된 데이터가 아니라, PDF, 이메일, 이미지, 긴 문서처럼 사람이 읽고 해석해야 하는 정보를 말한다.

둘째, 반복 업무가 많다. 보험사는 매일 수많은 submission, policy, claim을 처리한다. 많은 업무가 완전히 똑같지는 않지만, 패턴은 반복된다. AI가 초안을 만들거나, 정보를 추출하거나, 다음 행동을 추천하기 좋은 구조다.

셋째, 판단이 비싸다. 좋은 underwriter, claims adjuster, actuary의 시간은 비싸다. 이들이 문서를 찾고 복사하고 요약하는 데 시간을 쓰는 것은 낭비다. AI가 low-value busywork를 줄이고, 사람은 high-value judgment에 집중하게 만들 수 있다.

넷째, 결과가 돈과 직접 연결된다. underwriting을 잘못하면 손해 나는 고객을 너무 싸게 받을 수 있다. claim을 잘못 처리하면 돈을 과하게 지급하거나, 반대로 정당한 고객 경험을 망칠 수 있다. pricing을 잘못하면 시장에서 밀리거나 손실이 커진다.

다섯째, 규제가 강하다. 이건 AI에게는 부담이지만, 좋은 회사에게는 moat이 될 수 있다. 보험사는 "AI가 그렇게 말했어요"만으로 결정을 내릴 수 없다. 왜 그런 판단을 했는지, 어떤 근거가 있었는지, 사람이 언제 개입했는지 남겨야 한다.

여기서 중요한 디자인 단어가 나온다.

**Audit trail**은 의사결정 기록이다. 누가, 언제, 어떤 정보를 보고, 어떤 판단을 했는지 남기는 흔적이다. 보험처럼 규제와 분쟁 가능성이 큰 산업에서는 audit trail이 제품의 핵심 기능이 된다.

**Human-in-the-loop**는 사람이 최종 판단 과정에 남아 있는 구조다. 보험 AI에서 중요한 것은 사람을 완전히 없애는 것이 아니라, 사람이 더 좋은 판단을 더 빨리 하도록 돕는 것이다.


## 보험 AI의 큰 지도

보험 AI를 하나의 카테고리로 보면 흐릿하다. 하지만 보험사의 운영 흐름을 따라가면 꽤 선명해진다.

보험사의 workflow를 아주 단순화하면 이렇게 볼 수 있다.

1. 고객 또는 broker가 보험 신청을 보낸다.
2. 보험사가 underwriting을 한다.
3. pricing 팀이나 actuarial 팀이 가격과 위험 모델을 관리한다.
4. policy가 발행되고 관리된다.
5. 사고가 나면 claim이 들어온다.
6. claim을 검토하고, 사기 가능성을 확인하고, 지급 여부와 금액을 결정한다.
7. 전체 포트폴리오의 위험과 손익을 관리한다.

각 단계마다 다른 AI 회사들이 붙고 있다.


## 1. Workflow Automation: 문서와 반복 업무를 줄이는 회사들

이 영역의 대표적인 회사는 [FurtherAI](/company/further-ai), [Roots Automation](/company/roots-automation), [Indico Data](/company/indico-data), [Sprout.ai](/company/sprout-ai) 일부다.

이 회사들이 푸는 문제는 보험사가 매일 처리하는 문서와 반복 업무다.

보험 업무에는 "읽고, 비교하고, 옮겨 적고, 요약하고, 확인하는" 일이 많다. 예를 들어 underwriter가 새 submission을 받으면 여러 문서를 읽고, 필요한 정보를 찾아내고, 기존 policy와 비교하고, 부족한 정보를 broker에게 요청해야 한다. claims team도 비슷하다. 사고 문서, 사진, 보고서, 이메일을 읽고 필요한 정보를 찾아야 한다.

AI가 할 수 있는 일은 명확하다.

- PDF와 이메일에서 핵심 정보를 추출한다.
- policy 문서를 비교한다.
- claim이나 submission을 요약한다.
- 빠진 정보를 찾는다.
- 다음 action을 추천한다.
- 반복적인 데이터 입력을 자동화한다.

여기서 중요한 질문은 이 회사가 단순히 **document automation**에 머무르는지, 아니면 보험사의 **decision workflow** 안으로 들어가는지다.

Document automation은 문서 처리 자동화다. 유용하지만 경쟁이 많고, 시간이 지나면 commodity가 될 수 있다. 반면 decision workflow는 "이 고객을 받아야 하는가", "이 claim은 지급해야 하는가", "다음에 무엇을 해야 하는가" 같은 판단 흐름이다. 여기에 들어가면 제품이 훨씬 더 sticky해진다.

FurtherAI를 볼 때 중요한 질문도 바로 이것이다.

> FurtherAI는 보험사의 busywork를 줄이는 automation layer인가, 아니면 보험사가 매일 쓰는 decision layer가 될 수 있는가?


## 2. Underwriting: 보험사의 첫 번째 핵심 판단

Underwriting은 보험사가 고객을 받을지 결정하는 과정이다. 이건 보험 비즈니스의 심장에 가깝다.

쉽게 말하면 underwriter는 이런 질문을 한다.

"이 회사는 우리가 보험을 들어줘도 되는 고객인가? 리스크가 크다면 어떤 조건을 붙여야 하는가? 보험료는 얼마가 적절한가?"

여기서 대표 회사는 [Sixfold](/company/sixfold), [Federato](/company/federato), [Cytora](/company/cytora)다. FurtherAI도 일부 workflow에서 이 영역과 닿아 있다.

Underwriting이 매력적인 이유는 세 가지다.

첫째, 돈에 가깝다. Underwriting이 나쁘면 보험사는 처음부터 손해 나는 계약을 받는다. 좋은 underwriting은 보험사의 수익성과 직결된다.

둘째, 반복되지만 완전히 자동화하기 어렵다. Submission마다 문서와 맥락이 다르다. 그래서 AI가 정보를 정리하고 추천하되, underwriter가 판단하는 구조가 자연스럽다.

셋째, workflow에 깊게 박힐 수 있다. Underwriter가 매일 아침 여는 workbench가 되면 switching cost가 생긴다. 여기서 **switching cost**란 한 제품에서 다른 제품으로 갈아탈 때 드는 비용이다. 데이터 이전, 업무 습관 변화, 팀 교육, integration 변경, audit trail 손실 등이 모두 switching cost다.

Sixfold는 AI underwriter를 전면에 내세운다. Submission을 읽고, risk를 분석하고, underwriting team이 더 빠르게 판단하도록 돕는 포지션이다.

Federato는 RiskOps라는 표현을 쓴다. 단순히 하나의 submission을 처리하는 것뿐 아니라, 전체 portfolio와 risk appetite까지 연결하려는 방향이다. 여기서 **risk appetite**은 보험사가 어떤 위험은 받아들이고, 어떤 위험은 피할지 정해둔 기준이다.

Cytora는 commercial insurance의 risk digitization과 underwriting workflow를 오래 파고든 회사다. 2025년에 Applied Systems에 인수되면서 더 큰 보험 소프트웨어 생태계 안으로 들어갔다.

이 영역에서 가장 좋은 회사는 단순 요약기가 아니다. 보험사별 underwriting guideline, 과거 decision, broker communication, portfolio 목표를 연결해 underwriter의 daily decision layer가 되려는 회사다.


## 3. Claims: 보험사의 가장 큰 운영 비용

Claim은 고객이 보험금을 청구하는 과정이다. 자동차 사고, 건물 손상, 건강보험 거절, 장애 보험, 산재 보험 등 종류가 매우 다양하다.

Claims 영역의 대표 회사는 [Sprout.ai](/company/sprout-ai), [EvolutionIQ](/company/evolutioniq), [Tractable](/company/tractable), [Shift Technology](/company/shift-technology)다.

Claims는 AI에 잘 맞지만 동시에 어렵다.

잘 맞는 이유는 문서, 이미지, 반복 업무가 많기 때문이다. 사고 사진, 진단서, 수리 견적, 경찰 보고서, 이메일, policy 문서 등 AI가 읽고 정리할 수 있는 데이터가 많다.

어려운 이유는 claim이 고객 경험과 직접 연결되기 때문이다. 정당한 claim을 너무 늦게 지급하면 고객은 보험사를 믿지 않게 된다. 반대로 부정확한 claim을 너무 쉽게 지급하면 보험사는 손해를 본다. 사기 탐지도 중요하지만, 너무 공격적으로 탐지하면 정상 고객에게 피해를 줄 수 있다.

Tractable은 computer vision을 이용해 차량이나 건물 손상을 평가한다. 여기서 computer vision은 이미지를 분석하는 AI다. 사진을 보고 "어디가 얼마나 손상됐는가"를 판단하는 식이다.

EvolutionIQ는 복잡한 disability, injury, workers compensation claim에서 claims professional에게 next-best-action을 제안한다. 여기서 **next-best-action**은 "이 case에서 다음으로 해야 할 가장 좋은 행동"이다.

Sprout.ai는 claim 문서를 읽고, 추출하고, decision support를 제공하는 claims automation에 가깝다.

Shift Technology는 fraud detection과 decision automation 쪽 색깔이 강하다. Fraud detection은 보험 사기 가능성을 찾는 일이다.

Claims AI의 핵심 디자인 질문은 이것이다.

> AI가 빠르게 판단하도록 도울 수는 있지만, 고객이 불공정하게 대우받는다는 느낌을 주지 않으려면 어떻게 설계해야 하는가?


## 4. Pricing & Reserving: 보험의 가격표와 미래 부채

보험에서 pricing은 보험료를 정하는 일이다. Reserving은 앞으로 지급해야 할 보험금을 예상해 돈을 따로 잡아두는 일이다.

대표 회사는 [Akur8](/company/akur8)과 [Gradient AI](/company/gradient-ai)다.

이 영역은 일반 product designer에게는 가장 낯설 수 있다. 하지만 보험사 입장에서는 매우 중요하다.

보험료가 너무 낮으면 고객은 많이 모이지만 손해를 본다. 너무 높으면 고객이 경쟁사로 간다. 그래서 보험사는 리스크를 잘 예측하고, 가격을 정교하게 조정해야 한다.

여기서 **actuary**라는 직업이 나온다. Actuary는 통계와 금융 모델을 이용해 보험 리스크와 가격을 계산하는 전문가다. 보험사의 pricing과 reserving에서 핵심 역할을 한다.

Akur8은 transparent AI를 강조한다. Transparent AI란 왜 모델이 그런 결론을 냈는지 사람이 이해할 수 있도록 만드는 AI다. 보험 pricing은 규제와 내부 승인이 중요하기 때문에 black-box AI가 잘 먹히기 어렵다.

이 영역의 moat은 workflow보다는 전문성과 신뢰에 가깝다. Actuarial team이 매일 쓰는 모델링 도구가 되고, regulator와 internal governance를 통과할 수 있다면 방어력이 생긴다.


## 5. Risk Data & Property Intelligence: 위험을 더 잘 보는 회사들

보험사는 미래의 위험을 예측하는 회사다. 그래서 좋은 데이터는 매우 중요하다.

[ZestyAI](/company/zestyai)는 property risk를 본다. 집이나 건물의 상태, 지붕, 주변 환경, 기후 리스크 같은 정보를 AI와 imagery로 분석한다. Property insurance에서는 이런 정보가 underwriting과 pricing에 직접 연결된다.

[Tractable](/company/tractable)도 claims 쪽에서 시작했지만 이미지 기반 damage assessment라는 risk intelligence 성격을 갖고 있다.

[Gradient AI](/company/gradient-ai)는 underwriting, claims, policy analytics를 위한 보험 데이터와 ML 모델을 제공한다.

이 영역의 핵심은 **data moat**이다. Data moat은 더 좋은 데이터가 더 좋은 모델을 만들고, 더 좋은 모델이 더 많은 고객을 끌어오고, 그 고객 사용이 다시 데이터를 늘리는 구조다.

하지만 보험 데이터에서 data moat은 말처럼 쉽지 않다. 데이터가 민감하고, carrier마다 format이 다르고, regulator와 privacy 문제가 있다. 그래서 좋은 제품은 단순히 데이터를 많이 갖는 것이 아니라, 그 데이터를 실제 underwriting이나 claims decision에 쓸 수 있게 만들어야 한다.


## 6. Full-Stack Insurance: AI가 보험사를 돕는 것을 넘어 보험사가 된다면

[Corgi](/company/corgi)는 앞의 회사들과 조금 다르다. 기존 보험사를 위한 소프트웨어를 파는 것이 아니라, AI-native full-stack insurance carrier를 만들려는 방향이다.

여기서 **carrier**는 실제로 보험 리스크를 인수하는 보험사를 뜻한다. Broker나 software vendor와 다르다. Carrier는 보험료를 받고, claim이 발생하면 자기 balance sheet에서 돈을 지급할 책임을 진다.

이 모델은 upside가 크지만 훨씬 어렵다. Software 회사는 제품을 팔면 되지만, carrier는 규제, 자본, risk management, claim liability를 모두 감당해야 한다.

Counterforce Health도 기존 보험사를 돕는 회사라기보다는 환자와 clinician이 health insurance denial에 대응하도록 돕는 patient-side AI에 가깝다. 이 회사는 보험사의 workflow 안으로 들어가는 것이 아니라, 보험사 결정에 맞서는 쪽에 서 있다.

이런 회사들은 "보험 AI vendor"라기보다는 보험 시장 자체의 구조를 바꾸려는 실험으로 보는 편이 낫다.


## 그래서 누가 서로 경쟁하는가

보험 AI 회사를 볼 때 가장 흔한 실수는 모든 회사를 한 줄에 세우는 것이다.

FurtherAI와 Sixfold는 일부 workflow에서 만날 수 있지만 완전히 같은 회사는 아니다. Sixfold는 underwriting workbench 쪽이 선명하고, FurtherAI는 더 넓은 insurance operations automation에서 출발한다.

Federato와 Sixfold는 underwriting과 risk decision 영역에서 더 가까운 경쟁자다. 하지만 Federato는 portfolio와 RiskOps라는 더 넓은 management layer를 강조한다.

Akur8은 Sixfold와 직접 경쟁한다기보다 pricing과 actuarial workflow를 먹는다. Underwriting과 연결되지만 사용자는 다를 수 있다.

Tractable은 claims 안에서도 visual damage assessment에 특화되어 있다. Sprout.ai의 document claims automation과 겹칠 수는 있지만 core wedge는 다르다.

Corgi는 software vendor가 아니라 carrier라서 경쟁의 축이 아예 다르다.

정리하면 보험 AI는 이렇게 나눠 보는 것이 좋다.

| 전장 | 핵심 질문 | 대표 회사 |
| --- | --- | --- |
| Workflow automation | 반복 문서 업무를 줄일 수 있는가? | FurtherAI, Roots Automation, Indico Data |
| Underwriting | 어떤 고객을 받을지 더 잘 판단할 수 있는가? | Sixfold, Federato, Cytora |
| Claims | 보험금 청구를 더 빠르고 정확하게 처리할 수 있는가? | Sprout.ai, EvolutionIQ, Tractable |
| Pricing & reserving | 보험료와 미래 지급액을 더 잘 계산할 수 있는가? | Akur8, Gradient AI |
| Fraud & risk data | 위험과 사기를 더 잘 볼 수 있는가? | Shift Technology, ZestyAI, Gradient AI |
| Full-stack models | AI-native 보험사를 새로 만들 수 있는가? | Corgi, Counterforce Health |


## 가장 중요한 질문: 누가 decision layer가 되는가

보험 AI에서 가장 좋은 회사는 단순히 문서를 빨리 읽는 회사가 아닐 가능성이 크다. 문서 처리만으로는 경쟁이 많아지고, foundation model 성능이 좋아질수록 차별화가 약해질 수 있다.

더 강한 회사는 보험사의 daily decision workflow 안으로 들어간다.

여기서 **decision layer**란 사용자가 중요한 판단을 내리는 화면과 workflow를 말한다. Underwriter가 매일 submission을 검토하는 곳. Claims adjuster가 claim 지급 여부를 판단하는 곳. Actuary가 pricing model을 비교하는 곳. Portfolio manager가 특정 위험에 너무 많이 노출되어 있는지 확인하는 곳.

Decision layer가 강한 이유는 세 가지다.

첫째, 업무 습관이 쌓인다. 팀이 매일 쓰는 제품은 바꾸기 어렵다.

둘째, 고객별 데이터가 쌓인다. 한 carrier의 guideline, exception, override, approval history는 generic AI가 쉽게 복제하기 어렵다.

셋째, audit trail이 쌓인다. 규제 산업에서는 기록 자체가 제품의 일부다.

그래서 보험 AI 회사를 볼 때 좋은 질문은 "AI가 얼마나 똑똑한가"보다 이것이다.

> 이 회사는 보험사의 어떤 daily decision을 소유하려 하는가?

이 질문으로 보면 회사들이 더 잘 보인다.

Sixfold는 underwriting decision에 가깝다. Federato는 underwriting과 portfolio decision에 가깝다. Akur8은 pricing decision에 가깝다. Tractable은 damage assessment와 claims decision에 가깝다. FurtherAI는 아직 더 넓은 automation layer처럼 보이지만, 특정 workflow에서 decision layer까지 들어갈 수 있다면 upside가 커진다.


## Product designer에게 왜 흥미로운가

보험 AI의 디자인 문제는 "예쁜 dashboard를 만드는 것"이 아니다.

핵심은 trust다.

보험 업무에서 AI가 틀리면 돈이 잘못 지급될 수 있고, 고객이 부당하게 거절될 수 있고, regulator에게 문제가 될 수 있다. 그래서 제품은 AI 답변을 보여주는 것에서 끝나면 안 된다. 사용자가 왜 그 판단을 믿어도 되는지 확인할 수 있어야 한다.

디자이너가 풀어야 하는 질문은 이런 것들이다.

- AI가 어떤 근거로 추천했는지 어떻게 보여줄 것인가?
- Confidence가 낮을 때 사용자가 어떻게 알아차리게 할 것인가?
- 사람이 override할 때 그 이유를 어떻게 남길 것인가?
- 여러 문서와 policy 조항을 어떻게 비교 가능하게 보여줄 것인가?
- 고객에게 불리한 결정이 내려질 때 어떤 설명과 review flow가 필요한가?
- Audit trail을 compliance 기능이 아니라 자연스러운 workflow로 만들 수 있는가?

이런 문제는 일반 consumer AI보다 덜 화려해 보일 수 있다. 하지만 product design 관점에서는 매우 깊다. AI, workflow, trust, regulation, expert user가 모두 섞여 있기 때문이다.


## Interview-ready takeaway

면접에서 보험 AI를 설명해야 한다면 이렇게 말할 수 있다.

> Insurance AI is not one market. It is a set of workflow battles across underwriting, claims, pricing, fraud, risk data, and new carrier models. The best companies are not just automating paperwork. They are trying to become the decision layer inside insurance operations.

한국어로 풀면 이렇다.

> 보험 AI는 하나의 시장이 아니라 보험사의 여러 핵심 의사결정 업무에서 동시에 벌어지는 전장이다. 좋은 회사는 단순히 문서를 요약하는 것이 아니라, underwriter, claims adjuster, actuary가 매일 판단을 내리는 workflow 안으로 들어가려고 한다.

이 관점으로 보면 FurtherAI를 평가하는 질문도 더 선명해진다.

FurtherAI가 단순히 보험사의 busywork를 줄이는 회사라면 좋은 automation company일 수 있다. 하지만 insurer의 submission intake, policy comparison, claims workflow 안에서 매일 쓰이는 decision layer가 된다면 훨씬 더 큰 회사가 될 수 있다.

다음 글에서는 이 중 가장 매력적인 전장으로 보이는 underwriting을 더 깊게 볼 것이다. Underwriting은 보험사가 "누구를 받을지, 어떤 가격과 조건으로 받을지" 결정하는 곳이다. 그리고 아마도 보험 AI에서 가장 강한 workflow moat이 생길 수 있는 곳이다.
`,
  companyIds: [
    'further-ai',
    'sixfold',
    'federato',
    'cytora',
    'roots-automation',
    'indico-data',
    'sprout-ai',
    'evolutioniq',
    'tractable',
    'shift-technology',
    'akur8',
    'gradient-ai',
    'zestyai',
    'corgi',
    'counterforce-health',
  ],
  sources: [
    {
      title: 'FurtherAI announces $25M Series A from Andreessen Horowitz',
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
      title: 'Federato raises $100M Series D',
      url: 'https://finance.yahoo.com/news/ai-driven-insurance-platform-federato-100310804.html',
      publisher: 'Yahoo Finance',
      date: '2025-11-19',
    },
    {
      title: 'Akur8 secures $120M Series C',
      url: 'https://s24.q4cdn.com/538403808/files/doc_news/Akur8-Secures-120-Million-in-Series-C-Round-to-Accelerate-Growth-of-its-Next-Generation-Actuarial-Platform-2024.pdf',
      publisher: 'Akur8',
      date: '2024-09-05',
    },
    {
      title: 'Tractable raises $65M Series E',
      url: 'https://techcrunch.com/2023/07/18/tractable-snaps-up-65m-led-by-softbank-for-car-and-property-damage-appraisals-using-ai/',
      publisher: 'TechCrunch',
      date: '2023-07-18',
    },
    {
      title: 'CCC Intelligent Solutions completes EvolutionIQ acquisition',
      url: 'https://www.cccis.com/ai-powered-casualty',
      publisher: 'CCC Intelligent Solutions',
      date: '2025-01-15',
    },
  ],
  tags: ['Insurance AI', 'Vertical SaaS', 'AI Agents', 'Product Design', 'Insurtech'],
  category: 'guides',
  featured: true,
  readingTimeMinutes: 14,
};

