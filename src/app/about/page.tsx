import Link from 'next/link';
import { companies } from '@/data/companies';
import { getAiLevelConfig, type AiLevel } from '@/design/tokens';

export const metadata = {
  title: 'About — AIDO',
  description: 'A designer\'s guide to navigating the AI landscape — how to evaluate AI companies by the role AI plays in their product.',
};

function LevelBadge({ level }: { level: AiLevel }) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`font-mono font-semibold ${config.textClass}`}>
      Level {level}
    </span>
  );
}

export default function AboutPage() {
  const levelA = companies.filter(c => c.aiNativeLevel === 'A');
  const levelB = companies.filter(c => c.aiNativeLevel === 'B');
  const levelC = companies.filter(c => c.aiNativeLevel === 'C');
  const levelD = companies.filter(c => c.aiNativeLevel === 'D');

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          &larr; Back to companies
        </Link>
      </div>

      {/* Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold mb-3">A Designer&apos;s Guide to the AI Landscape</h1>
        <p className="text-lg text-[var(--muted)]">
          How I evaluate AI companies — and how you might too.
        </p>
      </div>

      {/* Who I Am */}
      <section className="space-y-4 text-[var(--muted)] leading-relaxed mb-12">
        <p>
          Hi, I&apos;m Ilwon — a Product Designer looking for my next thing in AI.
        </p>
        <p>
          I spent the past year in South Korea as Head of Design at{' '}
          <a href="https://www.bucketplace.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-light)] hover:underline">
            Bucketplace
          </a>
          , a unicorn in the home interior space. I spent most of 2025 pushing AI transformation
          across the company — new workflows, new tools, a lot of convincing. But while I was
          heads-down leading that charge 14 hours ahead of SF, the AI landscape quietly
          (or not so quietly) did a full speedrun without me.
        </p>
        <p>
          I came back to the States and realized my mental map of tech was about two paradigm
          shifts out of date. So I did what any designer would do — I made a tool.
        </p>
      </section>

      {/* What I Learned */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What I learned</h2>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            After researching {companies.length}+ companies, one thing became clear:
            the single most important variable for a designer isn&apos;t company size, funding,
            or even the product itself. It&apos;s <strong className="text-[var(--foreground)]">how
            central AI is to what the company does</strong>.
          </p>
          <p>
            That one factor determines everything — what kind of design problems you&apos;ll solve,
            how much ambiguity you&apos;ll face, how much ownership you&apos;ll have,
            and whether you&apos;re inventing new paradigms or optimizing existing ones.
          </p>
          <p>
            So I built a simple framework around it.
          </p>
        </div>
      </section>

      {/* The Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI Levels: a designer&apos;s lens</h2>
        <p className="text-[var(--muted)] mb-8">
          Four levels, based on the role AI plays in the product. Not a quality ranking —
          a way to understand what you&apos;re signing up for.
        </p>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="card p-5 border-l-4 border-[var(--success)]">
            <div className="flex items-baseline gap-2 mb-2">
              <LevelBadge level="A" />
              <span className="text-xs text-[var(--muted)]">{levelA.length} companies</span>
            </div>
            <p className="text-sm font-medium mb-1">AI-Native</p>
            <p className="text-sm text-[var(--muted)]">
              You&apos;ll invent the UX. No playbook exists. High risk, maximum ownership.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--accent)]">
            <div className="flex items-baseline gap-2 mb-2">
              <LevelBadge level="B" />
              <span className="text-xs text-[var(--muted)]">{levelB.length} companies</span>
            </div>
            <p className="text-sm font-medium mb-1">AI-Core</p>
            <p className="text-sm text-[var(--muted)]">
              Proven workflow, AI-powered. You&apos;ll redesign how people work.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <div className="flex items-baseline gap-2 mb-2">
              <LevelBadge level="C" />
              <span className="text-xs text-[var(--muted)]">{levelC.length} companies</span>
            </div>
            <p className="text-sm font-medium mb-1">AI Feature</p>
            <p className="text-sm text-[var(--muted)]">
              Mature product, AI as a feature. Stability, but lower design ownership.
            </p>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <div className="flex items-baseline gap-2 mb-2">
              <LevelBadge level="D" />
              <span className="text-xs text-[var(--muted)]">{levelD.length} companies</span>
            </div>
            <p className="text-sm font-medium mb-1">AI-Adjacent</p>
            <p className="text-sm text-[var(--muted)]">
              Indirect AI. You design systems and tools, not AI interactions.
            </p>
          </div>
        </div>

        <Link
          href="/ai-levels"
          className="text-sm text-[var(--accent-light)] hover:underline"
        >
          Read the full framework &rarr;
        </Link>
      </section>

      {/* What AIDO Tracks */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What AIDO tracks</h2>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            Every company here is one I&apos;ve researched, categorized, and evaluated through
            the lens of &quot;would this be a great place for me to design?&quot; The data is
            unapologetically skewed toward what I care about — AI-native products, design
            ownership, and teams that actually ship.
          </p>
          <p>
            If you&apos;re a designer (or anyone, really) trying to navigate the AI job landscape,
            I hope this is useful to you too.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] transition-colors"
        >
          Browse All Companies
        </Link>
      </div>

      {/* Credits */}
      <div className="text-center text-xs text-[var(--muted)] pt-8 border-t border-[var(--border)]">
        Logos provided by{' '}
        <a href="https://logo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)]">
          Logo.dev
        </a>
      </div>
    </div>
  );
}
