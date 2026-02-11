# Cursor (Anysphere) -- Deep Research Report

> Generated: 2026-02-11
> Tier: 0 (fitScore: 9)
> Overall Score: 8.6/10
> Reading time: ~10 min

---

## Executive Summary

Cursor is the fastest-growing SaaS product in history, reaching $1B+ ARR in roughly 24 months. Built by four MIT friends -- Michael Truell (CEO), Sualeh Asif (CPO), Arvid Lunnemark (former CTO, departed Oct 2025), and Aman Sanger -- the AI-first code editor has redefined how software gets built. Head of Design Ryo Lu (ex-Notion, Stripe, Asana) joined in January 2025 and is actively building a small, elite design team. The design opportunity is rare: a tiny team (<5 designers) shaping a product used by millions of developers daily, at a $29.3B valuation with $2.3B cash in the bank. The main risk is competitive pressure from GitHub Copilot's distribution and foundation model providers (OpenAI, Anthropic, Google) potentially building their own editors. But Cursor's product quality, ship velocity, and proprietary models (Composer) create real defensibility.

---

## Design Team Intelligence

### Leadership

- **Ryo Lu** -- Head of Design -- [LinkedIn](https://www.linkedin.com/in/ryo-lu-7060b534/) | [X/Twitter](https://x.com/ryolu_) | [Personal Site](https://ryo.lu/)
  - Background: 5 years at Notion, previously Stripe, Asana, Ping++
  - Joined Cursor: January 31, 2025 (announced via X)
  - Design philosophy: "It's all the same thing" -- views design as pattern recognition + taste. Believes designers should work directly with code as raw material. Emphasis on emergence over prescription. Built ryOS (a full retro operating system) entirely in Cursor to demonstrate design-to-code workflows.
  - Public presence: Multiple podcast appearances (a16z Show, Dive Club, Y Combinator, UX Tools), very active on X/Twitter. Publicly reviews startup websites for YC. Strong design community visibility.

### Founders with Design Influence

- **Sualeh Asif** -- CPO -- [LinkedIn](https://www.linkedin.com/in/sualeh-asif/)
  - MIT Mathematics, competitive programming background
  - As CPO, directly shapes product decisions alongside Ryo Lu
  - Note: At Cursor, "roles between designers, PMs, engineers are really muddy" (Ryo Lu). No dedicated PMs exist -- PM responsibilities spread across builders.

- **Michael Truell** -- CEO -- [LinkedIn](https://www.linkedin.com/in/michael-t-5b1bbb122/)
  - Deeply product-obsessed; still codes daily
  - "Taste" and logical design become more valuable than raw coding ability in the AI era
  - Design philosophy: "Make AI feel like a brilliant pair programmer, not a chatbot"

### IC Designers / Design-Adjacent

- Limited public information on IC product designers beyond Ryo Lu
- Current open role: **Product Designer** (San Francisco or New York City) -- [Apply](https://cursor.com/careers/product-designer)
- Design team estimated at <5 designers for a 300+ person company

### Team Dynamics Assessment

**Team Composition**
- Total designers: <5 (estimated)
- Ratio: 1 Head of Design : ~3-4 ICs
- Growth: Actively hiring (Product Designer role open)

**Design Maturity Signals**
- [x] Dedicated Head of Design (Ryo Lu, hired Jan 2025)
- [ ] Design system exists [Unverified -- likely nascent]
- [x] Design blog/public writing (Ryo Lu is very active publicly)
- [x] Designers speak at conferences/podcasts (Ryo Lu: a16z, YC, Dive Club)
- [ ] Formal design critique culture [Unverified]
- [ ] Dedicated UXR function [Unlikely at current team size]

**Collaboration Pattern**
- Designer:Engineer ratio: ~1:60+ (extremely engineering-heavy)
- Designer:PM ratio: No PMs exist -- designers are embedded with engineers
- Org structure: Flat, no traditional PM layer. "Roles are really muddy"
- Design review: Ryo Lu describes "shaping clay" approach -- continuous iteration, not spec-driven

**My Fit Assessment**
- Seniority match: Senior/Staff IC would have massive impact given tiny team
- Growth ceiling: Could grow into design leadership or founding design team member
- Leadership opportunity: Yes -- building the design team from near-zero
- Mentorship: Ryo Lu's background (Notion, Stripe, Asana) is world-class

---

## Business Model

- **Revenue Model**: SaaS subscription, freemium with tiered pricing
  - Free: 2,000 code completions/month
  - Pro: $20/month (unlimited completions, premium models)
  - Pro+: $60/month
  - Ultra: $200/month
  - Business: $40/user/month
  - Enterprise: Custom pricing (median annual contract: $61.4K)
- **ARR**: ~$1B+ (Nov 2025), grew from $100M (Jan 2025) to $500M (Jun 2025) to $1B+ in ~24 months
- **Growth**: Fastest SaaS to $1B ARR ever. Revenue doubling roughly every 2 months at peak
- **Enterprise**: 50% of Fortune 500 use Cursor. Enterprise revenue grew 100x in 2025 YTD. Customers include Nvidia, Uber, Adobe, Stripe, Rippling, Brex, Ramp
- **Users**: 1M+ daily active users, 50,000+ teams, millions of developers globally
- **Employees**: ~300+ (Dec 2025), up from 60 (Mar 2025)
- **GTM**: Product-led growth. Zero marketing spend to reach $100M ARR. Developer word-of-mouth drives viral adoption
- **Unit Economics**: Single-digit monthly cash burn. Profitable or near-profitable
- **Funding**: $3.6B+ total. Series D at $29.3B valuation (Nov 2025). $2.3B cash on hand
- **Valuation Trajectory**: $400M (Jan 2024) -> $2.5B (Dec 2024) -> $9.9B (Jun 2025) -> $29.3B (Nov 2025) -- 73x in under 2 years

---

## Product Design Take

### The Core Problem

**What**: Writing software is slow, error-prone, and cognitively draining -- developers spend most of their time on boilerplate, navigation, and context-switching rather than solving actual problems.

**Who**: 30M+ professional software engineers worldwide, plus growing numbers of non-developers who want to build software.

**When**: Every working hour. Developers spend 5-8 hours daily in their IDE.

**How painful**: Massive -- estimated 40-60% of developer time is spent on repetitive tasks. At average developer salaries of $150K+, billions of dollars in productivity are lost annually.

### Pain Point Anatomy

1. **Primary pain**: Manual coding is slow compared to thinking speed
   - Frequency: Constant (every minute of coding)
   - Current workaround: Stack Overflow, documentation, copy-paste
   - Cost of inaction: Hours per day of lost productivity

2. **Secondary pain**: Understanding large codebases wastes massive time
   - Who else suffers: Managers waiting for features, users waiting for products
   - Cascading effects: Slower product iteration, delayed time-to-market

3. **Emotional pain**: Developer frustration with repetitive work
   - Frustration source: "I know what I want to build, but typing it out takes forever"
   - Status impact: Senior developers want to think architecturally, not write boilerplate

### Problem Scale

- **Domestic (US)**: ~4.4M software developers, each spending $150K+ in salary
- **Global**: 30M+ developers, growing to 40M+ by 2030
- **$ value**: If AI saves 30% of developer time, that is $100B+ in value annually (US alone)
- **TAM**: $100B+ (all software development globally)
- **Adjacent problems**: Code review (acquired Graphite), debugging, deployment, testing, project management

### Solution-Problem Fit

| User Pain | Product Solution | Design Role |
|-----------|-----------------|-------------|
| Slow coding | Tab completion + Composer | When/how to suggest without disrupting flow |
| Codebase navigation | Codebase-aware AI chat | Information architecture of context windows |
| Context switching | Inline AI assistance | Seamless integration without breaking flow state |
| Code review bottleneck | BugBot + Graphite | Review workflow UX, trust calibration |
| Repetitive tasks | Agent mode / Background Agents | Autonomy controls, task delegation UX |

### What's Still Unsolved (Design Opportunities)

- **Gap 1**: Multi-modal design-to-code workflow (Visual Editor launched Dec 2025, but "bugs and ever-changing UI irk developers")
  - Design opportunity: Polishing the visual editing experience into something production-ready
- **Gap 2**: Enterprise team collaboration (code review, shared context, team settings)
  - Design opportunity: Enterprise UX that doesn't sacrifice the elegant individual experience
- **Gap 3**: Background Agent trust/transparency (how to show what autonomous agents did)
  - Design opportunity: Novel UX patterns for AI agent supervision and approval

### Designer Impact Potential

- **User touch frequency**: Daily, 5-8 hours. Every design decision compounds across millions of sessions
- **Decision criticality**: High -- developers' primary tool. Bad UX = lost productivity at scale
- **Emotional intensity**: High -- developers are passionate about their tools (see: vim vs emacs, tabs vs spaces)
- **Design problem novelty**: Very high -- AI-native code editing is a new category. No established patterns for agent mode, background agents, codebase-aware AI
- **Portfolio story**: "I designed the UX for the fastest-growing SaaS product in history"

---

## Upside Case

### Market Opportunity
- TAM: $100B+ (all software development globally)
- Current penetration: ~1% (massive room to grow)
- Growth trajectory: AI coding tools projected to reach $97.9B by 2030
- Why now: AI model capabilities crossed the usefulness threshold in 2023-2024

### Product Moat
- **Technical moat**: Proprietary Composer model "generates more code than almost any other LLMs in the world." Billions of code completions served daily
- **Distribution moat**: 1M+ DAU, 50% Fortune 500 adoption, developer brand loyalty
- **Data moat**: Billions of daily code interactions feeding model improvements
- **Acquisition moat**: Supermaven (Nov 2024), Graphite (Dec 2025) -- building end-to-end platform

### Growth Signals
- Revenue: $1B+ ARR, 10x+ YoY growth
- Hiring: 60 -> 300+ employees in 9 months
- Product velocity: Releases every 2-4 weeks. Launched Cursor 2.0, visual editor, background agents, web/mobile agents in 2025
- Enterprise: 100x enterprise revenue growth in 2025
- Partnerships: Google, Nvidia partnerships deepened

### Designer-Specific Upside
- Design influence: With <5 designers at a $29.3B company, every design decision is high-leverage
- Novel challenges: Agent mode, background agents, design-to-code, multi-modal editing -- problems no one has solved
- Career growth: Joining a 0-to-1 design team with world-class Head of Design (Ryo Lu)
- Portfolio value: "Shaped the UX of the fastest-growing SaaS ever" is an unmatched portfolio story
- Equity upside: $29.3B valuation with realistic path to $50-100B+. No IPO planned yet -- early equity could be transformative
- Learning from leadership: Ryo Lu (Notion, Stripe) + founders who built $29B company by age 25

---

## Downside / Risk Analysis

### Business Risks
- **Competition**: GitHub Copilot has 20M+ users and Microsoft distribution. If VS Code integrates equivalent AI features natively, Cursor's VS Code fork advantage diminishes
- **Foundation model risk**: OpenAI (ChatGPT Codex), Anthropic (Claude Code), Google (Gemini Code Assist) could vertically integrate and build competing editors
- **Windsurf exit**: Windsurf's CEO and founders joined Google DeepMind ($2.4B deal) -- Google is investing heavily in AI coding
- **Pricing backlash**: June 2025 credit-based billing change caused significant user complaints. "Unlimited" to credit caps frustrated power users
- **CTO departure**: Co-founder Arvid Lunnemark left in Oct 2025 to start Integrous Research -- losing a technical co-founder at a critical growth stage

### Design-Specific Risks
- **Design influence**: Engineering-dominated culture with 300+ employees and <5 designers. Design may be structurally underweighted
- **No PM layer**: "Roles are muddy" sounds empowering, but could mean designers do PM work without PM authority
- **Growth ceiling**: If the team stays very small, there is limited management track. If it grows fast, the culture may shift
- **Scope**: Developer tools have a narrow design surface compared to consumer products. Most of the product is a code editor with AI overlays
- **Work-life balance**: "Faster pace than anything I've ever experienced" (Glassdoor). Burnout risk is real at hypergrowth startups
- **In-person only**: SF or NYC required. No remote option limits flexibility

### Worst Case Scenario
- GitHub Copilot catches up in AI quality + bundles free with GitHub Enterprise -> Cursor loses enterprise momentum
- Foundation model providers build their own IDEs (Claude Code already gaining traction as CLI tool)
- Valuation correction if growth slows -- $29.3B is 29x ARR, premium even by AI standards
- Down round or flat round would significantly impact equity value

---

## Competition & LLM Position

### Direct Competitors

| Company | Funding | Revenue Est. | Moat | Threat Level |
|---------|---------|-------------|------|-------------|
| GitHub Copilot | Microsoft-backed | ~$300M+ ARR [Estimated] | 20M+ users, GitHub/VS Code distribution, enterprise bundle | **High** |
| Claude Code | Anthropic-backed | Growing rapidly | Best AI model for coding, terminal-native, no IDE overhead | **Medium-High** |
| Google Gemini Code Assist | Google-backed | N/A | Gemini models + Windsurf team acquisition + Google Cloud distribution | **Medium-High** |

### Indirect Competitors

| Company | Approach | Convergence Risk |
|---------|----------|-----------------|
| Replit | Browser-based IDE + AI | Medium -- different market (beginners, web) |
| Lovable / Bolt | Prompt-to-app (no-code) | Low -- different user (non-developers) |
| Devin (Cognition) | Autonomous AI engineer | Medium -- if agents replace editors |

### Giant Threat
- **Microsoft**: Highest threat. Owns GitHub (130M+ developers), VS Code (base for Cursor's fork), and Copilot. Could bundle AI features into VS Code for free
- **Google**: High threat. Hired Windsurf CEO + founders ($2.4B deal). Gemini Code Assist improving rapidly
- **Anthropic**: Medium threat. Claude Code is CLI-first, not IDE-first. Symbiotic today (Cursor uses Claude models) but could compete
- **OpenAI**: Medium threat. ChatGPT Codex exists but is not a full IDE. Could build one

### vs Foundation Models

- **Relationship type**: Infrastructure dependency + partial symbiosis. Cursor uses Claude, GPT, Gemini + builds own Composer model
- **LLM switching**: Easy -- Cursor is model-agnostic, which is both strength (flexibility) and risk (no model lock-in)
- **LLM cost**: Significant portion of COGS. Credit-based pricing change reflects pressure on LLM costs
- **Unique value beyond LLM**: UX (tab completion feel, Composer multi-file edits), codebase awareness (RAG system), editor integration, workflow habits
- **Defensibility**: Medium-Strong. Between "domain data" and "workflow lock-in" on the defensibility spectrum. Tab completion creates muscle memory (switching cost), but code lives in git (easy to migrate)

### Competitive Positioning
- Cursor's unique angle: Best-in-class AI UX in a full IDE. Not just a model wrapper -- deep product integration
- Switching costs: Medium (muscle memory, workflow habits), but low technical barriers (code in git)
- Winner-take-all: Possible -- similar to how VS Code dominated editors. AI coding may consolidate around 1-2 players
- Likely outcome: IPO at $50-100B by 2027-2028, or becomes the default AI coding platform

---

## Key References

### Founder Interviews & Podcasts
- [The Rise of Cursor (Lenny's Newsletter)](https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell) -- Michael Truell on founding story, product vision, and "what comes after code"
- [Cursor Co-Founder CEO Interview (Stratechery)](https://stratechery.com/2025/an-interview-with-cursor-co-founder-and-ceo-michael-truell-about-coding-with-ai/) -- Deep dive on AI coding and value chain
- [Michael Truell x Garry Tan (Y Combinator)](https://podscan.fm/podcasts/y-combinator-startup-podcast/episodes/michael-truell-building-cursor-at-23-taking-on-github-copilot-and-advice-to-engineering-students) -- "Going Beyond Code, Superintelligent AI Agents, And Why Taste Still Matters"
- [Cursor CEO on Vibe Coding (Fortune)](https://fortune.com/2025/12/25/cursor-ceo-michael-truell-vibe-coding-warning-generative-ai-assistant/) -- Truell warns "vibe coding builds shaky foundations"

### Design Team Content
- [Ryo Lu on Soulful Design (Substack)](https://jdahl.substack.com/p/cursors-ryo-lu-on-soulful-design) -- Design philosophy: "it's all the same thing," emergence, shaping clay
- [Ryo Lu: AI Turns Designers to Developers (a16z Show)](https://podcasts.apple.com/hr/podcast/ryo-lu-cursor-ai-turns-designers-to-developers/id1740178076?i=1000737773758) -- How AI changes the designer role
- [Ryo Lu Reviews Startup Websites (Y Combinator)](https://www.ycombinator.com/library/N8-cursor-head-of-design-reviews-startup-websites) -- Design taste and critique approach
- [Design to Code with Ryo Lu (Creator Economy)](https://creatoreconomy.so/p/design-to-code-with-cursor-head-of-design-ryo-lu) -- Tutorial on designer-to-code workflow using Cursor
- [Ryo Lu on Design Review (LinkedIn/YC)](https://www.linkedin.com/posts/y-combinator_cursor-head-of-design-ryo-lu-has-spent-his-activity-7397288443078377472-FyRo) -- How to build great product

### Business Analysis
- [Anysphere Business Breakdown (Contrary Research)](https://research.contrary.com/company/anysphere) -- Comprehensive business analysis with team, financials, competition
- [Cursor Revenue & Funding (Sacra)](https://sacra.com/c/cursor/) -- Detailed financial data and valuation history
- [Cursor Hit $1B ARR (SaaStr)](https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/) -- Growth milestone analysis
- [Real-World Engineering Challenges (Pragmatic Engineer)](https://newsletter.pragmaticengineer.com/p/cursor) -- Inside Cursor's engineering culture

### Product Reviews
- [Cursor Reviews (Trustpilot)](https://www.trustpilot.com/review/cursor.com) -- User sentiment and complaints
- [Cursor Review 2025: Reddit Sentiment (Toksta)](https://www.toksta.com/products/cursor) -- Community perspective

### Employee Perspectives
- [Glassdoor: Anysphere](https://www.glassdoor.com/Reviews/Anysphere-Reviews-E10847804.htm) -- "Best place I've ever worked" but "pace faster than anything I've ever experienced"
- [Blind: Cursor Salary](https://www.teamblind.com/post/cursor-estimated-salary-range-gqxi1tfp) -- Compensation discussion
- [Levels.fyi: Cursor Salaries](https://www.levels.fyi/companies/cursor/salaries) -- Limited data but updated Feb 2026

### News & Press
- [Cursor $2.3B Series D (CNBC)](https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html) -- Nov 2025 funding at $29.3B
- [Cursor Acquires Graphite (Fortune)](https://fortune.com/2025/12/19/cursor-ai-coding-startup-graphite-competition-heats-up/) -- Dec 2025 acquisition of code review startup
- [Cursor No IPO Plans (Yahoo Finance)](https://finance.yahoo.com/news/cursor-growing-revenue-29-billion-113947803.html) -- CEO says no plans to go public
- [Arvid Lunnemark Departure](https://arvid.xyz/posts/leaving/) -- Co-founder CTO leaves to start Integrous Research (Oct 2025)
- [Why Competition Won't Crush Cursor (TechCrunch)](https://techcrunch.com/2025/12/09/why-cursors-ceo-believes-openai-anthropic-competition-wont-crush-his-startup/) -- Truell on competitive moat

---

## Decision Framework

### The 5 Key Questions

#### 1. Will I learn things I can't learn elsewhere?
- Answer: **Yes**
- Evidence: Designing AI-native coding UX at the category leader. Agent mode, background agents, Composer, multi-file AI editing -- these design problems don't exist elsewhere. Ryo Lu (ex-Notion, Stripe) as design mentor.
- Score: **9/10**

#### 2. Will I have real influence on the product?
- Answer: **Yes**
- Evidence: <5 designers at a $29.3B company used by millions daily. No PM layer -- designers own product decisions directly with engineers. But risk: engineering-dominated culture could structurally limit design influence.
- Score: **8/10**

#### 3. Is the business healthy enough to sustain my growth?
- Answer: **Yes**
- Evidence: $1B+ ARR, 10x+ YoY growth, $2.3B cash, single-digit burn, profitable or near-profitable. Fastest-growing SaaS ever. Fortune 500 enterprise adoption.
- Score: **10/10**

#### 4. Will I work with people I admire?
- Answer: **Yes**
- Evidence: Ryo Lu (Notion, Stripe, Asana) is a world-class design leader. Founders are product-obsessed MIT alums who still code daily. Culture of "pilgrims, not conscripts." Flat, high-trust organization.
- Score: **8/10**

#### 5. Does the equity have real upside?
- Answer: **Yes**
- Evidence: $29.3B valuation with realistic path to $50-100B+ at IPO (2027-2028 timeline). Pre-IPO equity at a profitable, hypergrowth company. Even at $29.3B, the company is at ~1% market penetration in a $100B+ TAM.
- Score: **9/10**

### Final Assessment

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Learning  | 9/10  | 25%    | 2.25     |
| Influence | 8/10  | 25%    | 2.00     |
| Business  | 10/10 | 20%    | 2.00     |
| People    | 8/10  | 20%    | 1.60     |
| Equity    | 9/10  | 10%    | 0.90     |
| **TOTAL** |       |        | **8.75/10** |

### Verdict

Cursor is one of the most compelling design opportunities in tech right now. The combination of category-defining product, world-class design leadership (Ryo Lu), tiny design team (<5), massive scale (1M+ DAU), and extraordinary business trajectory ($1B+ ARR in 24 months) creates a rare career moment. The risks are real -- engineering-dominated culture, in-person only, intense pace, and existential competitive threats from Microsoft/Google/foundation model providers -- but the upside is proportional. A designer joining now would be among the first handful of people shaping how millions of developers interact with AI every day. The equity is meaningful at a pre-IPO company with clear path to $50-100B+. For a designer who thrives in ambiguity, ships fast, and can operate without traditional PM support, this is a top-tier opportunity.

### Recommended Actions
- [ ] Apply to Product Designer role: [https://cursor.com/careers/product-designer](https://cursor.com/careers/product-designer)
- [ ] Use Cursor intensively for 2+ weeks to develop informed product opinions
- [ ] Study Ryo Lu's public content (a16z podcast, Substack interview, YC review) to understand design culture
- [ ] Prepare "product critique + improvement proposal" for interview (e.g., agent mode UX, background agent transparency)
- [ ] Connect with Ryo Lu on X/Twitter -- he is publicly active and responsive

---

## Appendix

### Full Design Team LinkedIn

| Name | Role | LinkedIn |
|------|------|----------|
| Ryo Lu | Head of Design | [linkedin.com/in/ryo-lu-7060b534](https://www.linkedin.com/in/ryo-lu-7060b534/) |
| [Open Role] | Product Designer | [Apply](https://cursor.com/careers/product-designer) |

Note: Cursor's design team is extremely small (<5). Beyond Ryo Lu, no other designers have been publicly identified with LinkedIn profiles confirmed as of Feb 2026. The team is actively hiring.

### Key Personnel (Non-Design)

| Name | Role | LinkedIn |
|------|------|----------|
| Michael Truell | CEO / Co-founder | [linkedin.com/in/michael-t-5b1bbb122](https://www.linkedin.com/in/michael-t-5b1bbb122/) |
| Sualeh Asif | CPO / Co-founder | [linkedin.com/in/sualeh-asif](https://www.linkedin.com/in/sualeh-asif/) |
| Aman Sanger | Product Lead / Co-founder | [linkedin.com/in/aman-sanger-482243171](https://www.linkedin.com/in/aman-sanger-482243171/) |
| Arvid Lunnemark | Former CTO / Co-founder (Left Oct 2025) | [linkedin.com/in/arvid-lunnemark](https://www.linkedin.com/in/arvid-lunnemark/) |
| Shaoru "Ian" Huang | Engineer (5th employee) | [linkedin.com/in/shaoruu](https://www.linkedin.com/in/shaoruu/) |

### All Sources

1. https://research.contrary.com/company/anysphere
2. https://sacra.com/c/cursor/
3. https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/
4. https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html
5. https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell
6. https://jdahl.substack.com/p/cursors-ryo-lu-on-soulful-design
7. https://creatoreconomy.so/p/design-to-code-with-cursor-head-of-design-ryo-lu
8. https://fortune.com/2025/12/19/cursor-ai-coding-startup-graphite-competition-heats-up/
9. https://techcrunch.com/2025/12/09/why-cursors-ceo-believes-openai-anthropic-competition-wont-crush-his-startup/
10. https://arvid.xyz/posts/leaving/
11. https://en.wikipedia.org/wiki/Anysphere
12. https://www.glassdoor.com/Reviews/Anysphere-Reviews-E10847804.htm
13. https://newsletter.pragmaticengineer.com/p/cursor
14. https://fortune.com/2025/12/25/cursor-ceo-michael-truell-vibe-coding-warning-generative-ai-assistant/
15. https://devclass.com/2025/12/16/cursor-ai-editor-gets-visual-designer-but-bugs-and-ever-changing-ui-irk-developers/
16. https://finance.yahoo.com/news/cursor-growing-revenue-29-billion-113947803.html
17. https://www.dive.club/deep-dives/ryo-lu-cursor
18. https://www.ycombinator.com/library/N8-cursor-head-of-design-reviews-startup-websites
19. https://www.linkedin.com/in/ryo-lu-7060b534/
20. https://x.com/ryolu_
