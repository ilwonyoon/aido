'use client'

import { useRef } from 'react'
import {
  useCardStagger,
  useNumberCounter,
  useProgressBars,
  TextReveal,
} from './Interactions'

/* ──────────────────────────────────────────────
   Full-site preview — JetBrains Mono 90%
   + GSAP interactions on every section.
   ────────────────────────────────────────────── */

// ─── Navigation ──────────────────────────────

export function PreviewNavigation() {
  const links = [
    { label: 'About', active: false },
    { label: 'Jobs', active: true },
    { label: 'Insights', active: false },
  ]
  return (
    <nav className="border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-semibold tracking-tight">AIDO</span>
        <div className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <span
              key={l.label}
              className={
                l.active
                  ? 'text-[var(--foreground)] font-medium'
                  : 'text-[var(--muted-dim)]'
              }
            >
              {l.label}
            </span>
          ))}
          <span className="px-3 py-1.5 bg-[var(--card)] border border-[var(--border)] rounded-lg text-xs text-[var(--muted)]">
            Light / Dark
          </span>
        </div>
      </div>
    </nav>
  )
}

// ─── Company List (Home) ─────────────────────

const companyCards = [
  {
    name: 'Anthropic',
    level: 'A',
    badge: 'badge-success',
    stage: 'Series F',
    funding: '$27B+',
    desc: 'AI safety company building Claude, a helpful, harmless, and honest AI assistant.',
    tags: ['LLM', 'AI Safety', 'Enterprise AI'],
    whyJoin: ['Frontier of AI design', 'Mike Krieger as CPO'],
    roles: 1,
  },
  {
    name: 'Cursor',
    level: 'B',
    badge: 'badge-accent',
    stage: 'Series B',
    funding: '$400M',
    desc: 'AI-first code editor that lets you build software faster with AI pair programming.',
    tags: ['Dev Tools', 'Code AI', 'Productivity'],
    whyJoin: ['Fastest-growing dev tool', 'Small team, high impact'],
    roles: 2,
  },
  {
    name: 'Perplexity',
    level: 'B',
    badge: 'badge-accent',
    stage: 'Series B',
    funding: '$500M+',
    desc: 'AI-powered answer engine that provides direct answers with cited sources.',
    tags: ['Search', 'Consumer AI', 'Information'],
    whyJoin: ['Redefining search UX', 'Rapid user growth'],
    roles: 3,
  },
]

function MiniCard({ c }: { c: typeof companyCards[0] }) {
  return (
    <div className="card p-5 flex flex-col gap-3">
      {/* Row 1: Name + metadata */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-[var(--border)] flex items-center justify-center text-xs font-semibold text-[var(--muted)] shrink-0">
          {c.name[0]}
        </div>
        <span className="text-lg font-semibold text-[var(--foreground)] leading-tight">{c.name}</span>
        <span className={`badge ${c.badge} shrink-0`}>{c.level}</span>
        <span className="text-xs text-[var(--muted)] ml-auto shrink-0">{c.stage} · {c.funding}</span>
      </div>
      <p className="text-sm text-[var(--text-body)] leading-relaxed">{c.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {c.tags.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
      <div>
        <div className="section-title">Why Join</div>
        <ul className="space-y-1">
          {c.whyJoin.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm">
              <span className="text-[var(--success)] shrink-0">+</span>
              <span className="text-[var(--foreground)]">{r}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[var(--border)] pt-3 mt-auto">
        <span className="text-xs text-[var(--accent-light)]">{c.roles} open role{c.roles > 1 ? 's' : ''}</span>
      </div>
    </div>
  )
}

export function PreviewCompanyList() {
  const containerRef = useRef<HTMLDivElement>(null)
  useCardStagger(containerRef)


  const chips = ['All', 'AI-Native', 'Open Roles', 'SF Bay Area', 'Series B+']

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Hero */}
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-[var(--foreground)] tracking-tight">
          <TextReveal text="Where to Design AI" />
        </h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          AI-native companies with research-backed notes on why to join, and why not.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              i === 0
                ? 'border-[var(--accent)] text-[var(--foreground)] bg-[var(--card)]'
                : 'border-[var(--border)] text-[var(--muted)] bg-[var(--card)]'
            }`}
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {companyCards.map((c) => (
          <MiniCard key={c.name} c={c} />
        ))}
      </div>
    </div>
  )
}

// ─── Company Detail (Anthropic) ──────────────

function AnimatedProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[var(--muted)] w-20 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--accent)]"
          data-progress={value}
        />
      </div>
      <span className="text-xs text-[var(--muted)] w-8 text-right">{value}%</span>
    </div>
  )
}

export function PreviewCompanyDetail() {
  const containerRef = useRef<HTMLDivElement>(null)
  useCardStagger(containerRef)
  useNumberCounter(containerRef)
  useProgressBars(containerRef)

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 max-w-3xl">
      {/* Back link */}
      <span className="text-sm text-[var(--muted)]">&larr; Back to companies</span>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-[var(--border)] flex items-center justify-center text-lg font-semibold text-[var(--muted)]">
          A
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[var(--foreground)] tracking-tight">
            <TextReveal text="Anthropic" />
          </h1>
          <p className="text-sm text-[var(--muted)] mt-1">
            AI safety company building Claude, a helpful, harmless, and honest AI assistant.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="badge badge-success">Level A</span>
            <span className="badge">Series F</span>
            <span className="badge">San Francisco, CA</span>
            <span className="badge">Hybrid</span>
          </div>
        </div>
      </div>

      {/* Two-column: Business + Founders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Business — number counters */}
        <div className="card p-5 space-y-3">
          <div className="section-title">Business</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Valuation</span>
              <span className="text-[var(--foreground)] font-medium" data-counter="183" data-prefix="$" data-suffix="B">$0B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Total Funding</span>
              <span className="text-[var(--foreground)] font-medium" data-counter="27" data-prefix="$" data-suffix="B+">$0B+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Revenue</span>
              <span className="text-[var(--foreground)] font-medium" data-counter="7" data-prefix="~$" data-suffix="B ARR">~$0B ARR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Growth</span>
              <span className="text-[var(--success)] font-medium" data-counter="7" data-suffix="x YoY">0x YoY</span>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="card p-5 space-y-3">
          <div className="section-title">Founders</div>
          <div className="space-y-3">
            <div>
              <div className="text-sm font-medium text-[var(--foreground)]">Dario Amodei</div>
              <div className="text-xs text-[var(--muted)]">CEO — Ex-OpenAI VP of Research</div>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--foreground)]">Daniela Amodei</div>
              <div className="text-xs text-[var(--muted)]">President — Ex-OpenAI VP of Operations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Focus — animated progress bars */}
      <div className="card p-5">
        <div className="section-title">Design Focus</div>
        <div className="space-y-3">
          <AnimatedProgressBar label="Logic" value={85} />
          <AnimatedProgressBar label="Evaluation" value={70} />
          <AnimatedProgressBar label="Interface" value={90} />
        </div>
      </div>

      {/* Why Join / Watch Out */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="section-title">Why Join</div>
          <ul className="space-y-2">
            {[
              'Level A AI-native — frontier of AI design',
              'Founder philosophy aligns with my values',
              'Character Design — unique learning opportunity',
              'Strong business — no risk of failure',
              'Mike Krieger as CPO — design investment clear',
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--success)] shrink-0 mt-0.5">+</span>
                <span className="text-[var(--foreground)]">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="section-title">Watch Out</div>
          <ul className="space-y-2">
            {[
              '1000+ employees — not early-stage',
              'Design leadership already exists',
              'Highly competitive — hard to get in',
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--warning)] shrink-0 mt-0.5">-</span>
                <span className="text-[var(--text-body)]">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Funding History */}
      <div>
        <div className="section-title">Funding History</div>
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--background)] border-b border-[var(--border)]">
                <th className="text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Stage</th>
                <th className="text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Amount</th>
                <th className="text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Date</th>
                <th className="text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Valuation</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { s: 'Series F', a: '$3.5B', d: 'Sep 2025', v: '$183B' },
                { s: 'Series E', a: '$4B', d: 'Nov 2024', v: '$60B' },
                { s: 'Series D', a: '$2B', d: 'Mar 2024', v: '$18B' },
                { s: 'Series C', a: '$450M', d: 'May 2023', v: '$5B' },
              ].map((r) => (
                <tr key={r.s} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="py-2.5 px-4 text-[var(--foreground)]">{r.s}</td>
                  <td className="py-2.5 px-4 font-medium text-[var(--foreground)]">{r.a}</td>
                  <td className="py-2.5 px-4 text-[var(--muted)]">{r.d}</td>
                  <td className="py-2.5 px-4 text-[var(--muted)]">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Open Roles */}
      <div>
        <div className="section-title">Open Roles</div>
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--accent-light)]">Product Designer, Claude Code</span>
            <span className="text-xs text-[var(--muted)]">SF · NYC · Seattle · Remote</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Article (half) ──────────────────────────

export function PreviewArticle() {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 max-w-3xl">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge badge-accent">Guides</span>
          <span className="badge badge-success">Featured</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-[var(--foreground)]">
          <TextReveal text="The AI Product Design Interview Has Changed" />
        </h1>
        <p className="text-lg text-[var(--muted)] mb-4">
          Portfolio reviews now ask for prompt histories. Design challenges test how you think with AI, not without it.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <span>AIDO</span>
          <span>&middot;</span>
          <span>Research</span>
          <span>&middot;</span>
          <span>January 30, 2026</span>
          <span>&middot;</span>
          <span>14 min read</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {['#interviews', '#career', '#skills', '#AI-design', '#hiring'].map((tag) => (
            <span key={tag} className="text-xs text-[var(--muted)]">{tag}</span>
          ))}
        </div>
      </header>

      {/* Article Body */}
      <div className="article-content">
        <p>
          The AI product design interview in 2026 bears little resemblance to what it looked like two years ago.
          The shift isn&apos;t cosmetic. The evaluation criteria, the skills being tested, and even the format of
          portfolio reviews have fundamentally changed as AI companies figure out what kind of designer actually
          succeeds in their environment.
        </p>
        <p>
          We analyzed job postings, interview reports, and hiring signals across <strong>57 AI companies</strong> tracked
          in AIDO&apos;s database to understand what&apos;s different now. The findings are clear: companies aren&apos;t just
          adding &ldquo;AI experience preferred&rdquo; to old job descriptions. They&apos;re rebuilding the interview process from scratch.
        </p>

        <h2>What Changed</h2>

        <h3>The Portfolio Review Is No Longer What You Think</h3>

        <p>
          The traditional portfolio review — walk through 2-3 case studies, show polished mockups, explain your
          process — still exists. But at AI-native companies, it&apos;s been augmented (or in some cases replaced) by
          something more revealing.
        </p>
        <p>
          <strong>Some companies now ask to see your AI prompt history.</strong> Not as a gimmick. They want to
          understand how you think through problems when working with AI tools. Your prompts reveal your mental
          models, how you decompose complexity, and whether you can steer non-deterministic systems toward useful
          outputs.
        </p>
        <p>
          <strong>What the portfolio must now demonstrate:</strong>
        </p>
        <ul>
          <li><strong>AI fluency</strong>: Not just that you can design interfaces, but that you understand model capabilities and limitations</li>
          <li><strong>The &ldquo;AI layer&rdquo; made visible</strong>: How you handled uncertainty, probabilistic outputs, model errors</li>
          <li><strong>Measurable impact over visual polish</strong>: Metrics and outcomes, not pixel-perfect screenshots</li>
          <li><strong>Ownership clarity</strong>: Your specific decisions and contributions, not team-level summaries</li>
        </ul>

        <h3>Design Challenges Now Test AI Thinking</h3>

        <p>
          Design exercises haven&apos;t disappeared, but the evaluation criteria shifted hard. In 2024, a design
          challenge might ask you to redesign a settings page. In 2026, at AI companies, the prompts look different:
        </p>
        <ul>
          <li><em>Design a system that handles unstructured data and probabilistic outcomes</em></li>
          <li><em>How would you communicate model uncertainty to a non-technical user?</em></li>
          <li><em>Design the feedback loop for a feature where the AI can be wrong 20% of the time</em></li>
        </ul>
        <p>
          Companies aren&apos;t testing pixel perfection. They&apos;re evaluating <strong>critical thinking about
          non-deterministic systems</strong>. Can you design for a product that&apos;s right most of the time but
          wrong in unpredictable ways?
        </p>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <span className="text-sm text-[var(--muted-dim)] italic">— Article continues —</span>
        </div>
      </div>
    </div>
  )
}

// ─── About Page ──────────────────────────────

export function PreviewAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  useCardStagger(containerRef)


  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-4 sm:p-6 max-w-3xl space-y-10">
      {/* Back */}
      <span className="text-sm text-[var(--muted)]">&larr; Back to companies</span>

      {/* Title */}
      <div className="py-6">
        <h1 className="text-4xl font-semibold mb-3 text-[var(--foreground)]">
          <TextReveal text="A Designer's Guide to the AI Landscape" />
        </h1>
        <p className="text-lg text-[var(--muted)]">
          How I evaluate AI companies — and how you might too.
        </p>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-[var(--muted)] leading-relaxed">
        <p>
          Hi, I&apos;m Ilwon — a Product Designer looking for my next thing in AI.
          Previously at Meta and Google, where I designed products used by billions.
        </p>
        <p>
          Most recently, I spent a year in South Korea as Head of Design at{' '}
          <span className="text-[var(--accent-light)]">Bucketplace</span>, a unicorn in the home
          interior space. I spent most of 2025{' '}
          <span className="text-[var(--foreground)]">pushing AI transformation across the company</span> —
          new workflows, new tools, a lot of convincing.
        </p>
        <p>
          I came back to the States and realized{' '}
          <span className="text-[var(--foreground)]">my mental map of tech was about two paradigm
          shifts out of date</span>. So I did what any designer would do — I made a tool.
        </p>
        <p>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium">
            Connect with me on LinkedIn &rarr;
          </span>
        </p>
      </div>

      {/* Framework */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
          AI Levels: a designer&apos;s lens
        </h2>
        <p className="text-[var(--muted)] mb-6">
          Four levels, based on the role AI plays in the product. Not a quality ranking —
          a way to understand what you&apos;re signing up for.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card p-5 border-l-4 border-[var(--success)]">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-semibold text-[var(--success)]">Level A</span>
              <span className="text-xs text-[var(--muted)]">12 companies</span>
            </div>
            <p className="text-sm font-medium mb-1 text-[var(--foreground)]">AI-Native</p>
            <p className="text-sm text-[var(--muted)]">
              You&apos;ll invent the UX. No playbook exists. High risk, maximum ownership.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--accent)]">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-semibold text-[var(--accent-light)]">Level B</span>
              <span className="text-xs text-[var(--muted)]">28 companies</span>
            </div>
            <p className="text-sm font-medium mb-1 text-[var(--foreground)]">AI-Core</p>
            <p className="text-sm text-[var(--muted)]">
              Proven workflow, AI-powered. You&apos;ll redesign how people work.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-semibold text-[var(--foreground)]">Level C</span>
              <span className="text-xs text-[var(--muted)]">14 companies</span>
            </div>
            <p className="text-sm font-medium mb-1 text-[var(--foreground)]">AI Feature</p>
            <p className="text-sm text-[var(--muted)]">
              Mature product, AI as a feature. Stability, but lower design ownership.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-semibold text-[var(--muted)]">Level D</span>
              <span className="text-xs text-[var(--muted)]">3 companies</span>
            </div>
            <p className="text-sm font-medium mb-1 text-[var(--foreground)]">AI-Adjacent</p>
            <p className="text-sm text-[var(--muted)]">
              Indirect AI. You design systems and tools, not AI interactions.
            </p>
          </div>
        </div>
      </div>

      {/* What AIDO tracks */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">What AIDO tracks</h2>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            Every company here is one I&apos;ve researched, categorized, and evaluated through
            the lens of &ldquo;would this be a great place for me to design?&rdquo;
          </p>
          <p>
            If you&apos;re a designer trying to navigate the AI job landscape,
            I hope this is useful to you too.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-6">
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg">
          Browse All Companies
        </span>
      </div>
    </div>
  )
}
