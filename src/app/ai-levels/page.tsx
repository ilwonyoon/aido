import Link from 'next/link';
import { companies } from '@/data/companies';

export const metadata = {
  title: 'AI Levels Framework — AIDO',
  description: 'How we classify AI companies by the role AI plays in their products',
};

function LevelBadge({ level }: { level: 'A' | 'B' | 'C' | 'D' }) {
  const colors = {
    A: 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30',
    B: 'bg-[var(--accent)]/10 text-[var(--accent-light)] border-[var(--accent)]/30',
    C: 'bg-[var(--muted)]/10 text-[var(--foreground)] border-[var(--border)]',
    D: 'bg-[var(--muted)]/10 text-[var(--muted)] border-[var(--border)]',
  };
  const labels = { A: 'AI-Native', B: 'AI-Core', C: 'AI Feature', D: 'AI-Adjacent' };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[level]}`}>
      Level {level}: {labels[level]}
    </span>
  );
}

function CompanyLink({ id, name }: { id: string; name: string }) {
  return (
    <Link
      href={`/company/${id}`}
      className="text-sm text-[var(--accent-light)] hover:underline"
    >
      {name}
    </Link>
  );
}

export default function AiLevelsPage() {
  // Get companies by level
  const levelA = companies.filter(c => c.aiNativeLevel === 'A');
  const levelB = companies.filter(c => c.aiNativeLevel === 'B');
  const levelC = companies.filter(c => c.aiNativeLevel === 'C');
  const levelD = companies.filter(c => c.aiNativeLevel === 'D');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] inline-block"
        >
          ← Back to companies
        </Link>
      </div>

      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold mb-4">AI Levels Framework</h1>
        <p className="text-lg text-[var(--muted)] mb-6">
          AI Levels describe the role AI plays in a product, not the size or prestige of the company.
        </p>
        <div className="card p-6 border-l-4 border-[var(--accent)]">
          <h3 className="font-medium mb-2">Core Principle</h3>
          <p className="text-sm text-[var(--muted)] mb-3">
            AI Level is assigned at the <strong>product or team level</strong>, not the company level.
            A single company may appear in multiple levels if it operates products with different AI roles.
          </p>
          <p className="text-sm text-[var(--muted)]">
            The classification is based on one primary question:
          </p>
          <blockquote className="mt-3 pl-4 border-l-2 border-[var(--accent)] text-[var(--foreground)] italic">
            Is AI the product itself, or does AI change how an existing product works?
          </blockquote>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-5 border-l-4 border-[var(--success)]">
            <LevelBadge level="A" />
            <p className="text-sm text-[var(--muted)] mt-3">
              AI 모델 자체가 제품이며, UX 패턴을 새로 정의한다.
            </p>
            <div className="mt-2 text-xs text-[var(--muted)]">{levelA.length} companies</div>
          </div>
          <div className="card p-5 border-l-4 border-[var(--accent)]">
            <LevelBadge level="B" />
            <p className="text-sm text-[var(--muted)] mt-3">
              검증된 워크플로우 위에서 AI가 일하는 방식을 바꾼다.
            </p>
            <div className="mt-2 text-xs text-[var(--muted)]">{levelB.length} companies</div>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <LevelBadge level="C" />
            <p className="text-sm text-[var(--muted)] mt-3">
              완성된 제품에 AI 기능이 추가되어 가치를 증폭한다.
            </p>
            <div className="mt-2 text-xs text-[var(--muted)]">{levelC.length} companies</div>
          </div>
          <div className="card p-5 border-l-4 border-[var(--border)]">
            <LevelBadge level="D" />
            <p className="text-sm text-[var(--muted)] mt-3">
              AI는 존재하지만 디자이너는 간접적으로만 관여한다.
            </p>
            <div className="mt-2 text-xs text-[var(--muted)]">{levelD.length} companies</div>
          </div>
        </div>
      </div>

      {/* Level A */}
      <section className="mb-16">
        <div className="mb-6">
          <LevelBadge level="A" />
          <h2 className="text-3xl font-semibold mt-3 mb-2">AI-Native (Zero-to-One)</h2>
          <p className="text-lg text-[var(--muted)] italic">
            AI model capability itself defines the product and its UX.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-medium mb-3">Definition</h3>
            <p className="text-sm text-[var(--muted)]">
              AI <strong>is</strong> the product. The product exists because of AI model capability, not despite it.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Design Characteristics</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--success)]">→</span>
                No established UX patterns
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--success)]">→</span>
                Model capability directly constrains and enables UX
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--success)]">→</span>
                Designers define new interaction paradigms and mental models
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Risk / Trade-off Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Uncertainty</div>
                <div className="text-sm font-medium text-[var(--warning)]">Very High</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Equity Upside</div>
                <div className="text-sm font-medium text-[var(--success)]">High</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Design Ownership</div>
                <div className="text-sm font-medium text-[var(--success)]">Maximum</div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Classification Rule</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Assign <strong>Level A</strong> if:</p>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                Removing the AI model removes the product entirely
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                The primary UX challenge is "how humans interact with AI systems"
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-4">Canonical Examples ({levelA.length})</h3>
            <div className="flex flex-wrap gap-2">
              {levelA.map(company => (
                <CompanyLink key={company.id} id={company.id} name={company.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Level B */}
      <section className="mb-16">
        <div className="mb-6">
          <LevelBadge level="B" />
          <h2 className="text-3xl font-semibold mt-3 mb-2">AI-Core (Proven Workflow)</h2>
          <p className="text-lg text-[var(--muted)] italic">
            AI reshapes a proven workflow rather than inventing a new one.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-medium mb-3">Definition</h3>
            <p className="text-sm text-[var(--muted)]">
              The user workflow is already proven. AI fundamentally changes <strong>how</strong> the work is done.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Design Characteristics</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--accent-light)]">→</span>
                Human-in-the-loop systems
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--accent-light)]">→</span>
                Continuous decisions around automation vs human control
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--accent-light)]">→</span>
                AI deeply embedded in daily workflows
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Risk / Trade-off Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Risk Level</div>
                <div className="text-sm font-medium text-[var(--accent-light)]">Balanced</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Learning Curve</div>
                <div className="text-sm font-medium text-[var(--accent-light)]">Strong AI Design</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Impact</div>
                <div className="text-sm font-medium text-[var(--success)]">High Product Impact</div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Classification Rule</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Assign <strong>Level B</strong> if:</p>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                The product solves an existing job-to-be-done
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                AI is central to the experience, but UX patterns existed pre-AI
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-4">Canonical Examples ({levelB.length})</h3>
            <div className="flex flex-wrap gap-2">
              {levelB.map(company => (
                <CompanyLink key={company.id} id={company.id} name={company.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Level C */}
      <section className="mb-16">
        <div className="mb-6">
          <LevelBadge level="C" />
          <h2 className="text-3xl font-semibold mt-3 mb-2">AI as a Feature</h2>
          <p className="text-lg text-[var(--muted)] italic">
            AI enhances an already mature product as a feature.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-medium mb-3">Definition</h3>
            <p className="text-sm text-[var(--muted)]">
              The core product existed before AI. AI is introduced as a <strong>feature</strong> that increases value.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Design Characteristics</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Feature-level AI integration
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Strong constraints from existing systems
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Focus on reliability, consistency, and usability
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Risk / Trade-off Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Stability</div>
                <div className="text-sm font-medium text-[var(--success)]">High</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">UX Ownership</div>
                <div className="text-sm font-medium">Lower</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Design Type</div>
                <div className="text-sm font-medium">Incremental</div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Classification Rule</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Assign <strong>Level C</strong> if:</p>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                The product remains functional without AI
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                AI enhances, but does not redefine, the core user workflow
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-4">Canonical Examples ({levelC.length})</h3>
            <div className="flex flex-wrap gap-2">
              {levelC.map(company => (
                <CompanyLink key={company.id} id={company.id} name={company.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Level D */}
      <section className="mb-16">
        <div className="mb-6">
          <LevelBadge level="D" />
          <h2 className="text-3xl font-semibold mt-3 mb-2">AI-Adjacent / Assisted</h2>
          <p className="text-lg text-[var(--muted)] italic">
            AI is present, but designers influence it indirectly through systems and tools.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-medium mb-3">Definition</h3>
            <p className="text-sm text-[var(--muted)]">
              AI exists in the system, but designers interact with it indirectly.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Design Characteristics</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Platform, tooling, or infrastructure-focused UX
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Limited end-user AI interaction
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span className="text-[var(--muted)]">→</span>
                Design impact is indirect
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Risk / Trade-off Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Stability</div>
                <div className="text-sm font-medium text-[var(--success)]">Very High</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Design Scope</div>
                <div className="text-sm font-medium">Narrow</div>
              </div>
              <div>
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">Fit</div>
                <div className="text-sm font-medium">Preference-dependent</div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-3">Classification Rule</h3>
            <p className="text-sm text-[var(--muted)] mb-3">Assign <strong>Level D</strong> if:</p>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                Designers do not design AI interactions directly
              </li>
              <li className="text-sm text-[var(--muted)] flex gap-2">
                <span>•</span>
                AI is accessed via tooling, APIs, or internal systems
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-medium mb-4">Examples</h3>
            <p className="text-sm text-[var(--muted)]">
              AWS AI platforms, enterprise AI tooling, internal AI systems
            </p>
            <p className="text-xs text-[var(--muted)] mt-2">
              (Currently no Level D companies tracked in AIDO)
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Level Comparison</h2>
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">Level</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">AI Role</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">Risk</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">Ownership</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[var(--muted)]">Companies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4"><LevelBadge level="A" /></td>
                <td className="py-3 px-4 text-sm">AI IS the product</td>
                <td className="py-3 px-4 text-sm text-[var(--warning)]">Very High</td>
                <td className="py-3 px-4 text-sm text-[var(--success)]">Maximum</td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">{levelA.length}</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4"><LevelBadge level="B" /></td>
                <td className="py-3 px-4 text-sm">AI reshapes proven workflow</td>
                <td className="py-3 px-4 text-sm text-[var(--accent-light)]">Balanced</td>
                <td className="py-3 px-4 text-sm text-[var(--success)]">High</td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">{levelB.length}</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4"><LevelBadge level="C" /></td>
                <td className="py-3 px-4 text-sm">AI enhances existing product</td>
                <td className="py-3 px-4 text-sm text-[var(--success)]">Low</td>
                <td className="py-3 px-4 text-sm">Lower</td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">{levelC.length}</td>
              </tr>
              <tr>
                <td className="py-3 px-4"><LevelBadge level="D" /></td>
                <td className="py-3 px-4 text-sm">AI is indirect</td>
                <td className="py-3 px-4 text-sm text-[var(--success)]">Very Low</td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">Narrow</td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">{levelD.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Important Notes</h2>
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="font-medium mb-2">Levels are not a quality ranking</h3>
            <p className="text-sm text-[var(--muted)]">
              Level A is not "better" than Level C. The framework describes the <strong>role AI plays</strong>, not company quality or prestige.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-medium mb-2">Levels are mutually exclusive per product</h3>
            <p className="text-sm text-[var(--muted)]">
              A single company may have multiple products at different levels. For example, Google Cloud AI (Level D) vs Google Gemini (Level A).
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-medium mb-2">Choose based on your career goals</h3>
            <p className="text-sm text-[var(--muted)]">
              Level A offers maximum ownership and ambiguity. Level B offers strong AI design learning with balanced risk. Level C offers stability with established products. Level D offers indirect AI influence through systems.
            </p>
          </div>
        </div>
      </section>

      {/* Back to companies */}
      <div className="text-center py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] transition-colors"
        >
          Browse All Companies
        </Link>
      </div>
    </div>
  );
}
