import Link from 'next/link';
import { companies } from '@/data/companies';
import { getAiLevelConfig, type AiLevel } from '@/design/tokens';

export const metadata = {
  title: 'AI Levels Framework — AIDO',
  description: 'How we classify AI companies by the role AI plays in their products',
};

function LevelBadge({ level }: { level: AiLevel }) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`font-mono font-semibold ${config.textClass}`}>
      Level {level}
    </span>
  );
}

export default function AiLevelsPage() {
  const levelA = companies.filter(c => c.aiNativeLevel === 'A');
  const levelB = companies.filter(c => c.aiNativeLevel === 'B');
  const levelC = companies.filter(c => c.aiNativeLevel === 'C');
  const levelD = companies.filter(c => c.aiNativeLevel === 'D');

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          &larr; Back to about
        </Link>
      </div>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-semibold mb-4">AI Levels Framework</h1>
        <p className="text-lg text-[var(--muted)] mb-8">
          AI Levels describe the role AI plays in a product, not the size or prestige of the company.
        </p>

        <div className="pl-4 border-l-2 border-[var(--accent)] text-[var(--muted)] mb-8">
          <p className="mb-2">
            <strong>Core question:</strong> Is AI the product itself, or does AI change how an existing product works?
          </p>
          <p className="text-sm">
            AI Level is assigned at the product or team level, not the company level.
          </p>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <LevelBadge level="A" />
              <span className="text-xs text-[var(--muted)]">{levelA.length} companies</span>
            </div>
            <p className="text-[var(--muted)]">AI is the product</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <LevelBadge level="B" />
              <span className="text-xs text-[var(--muted)]">{levelB.length} companies</span>
            </div>
            <p className="text-[var(--muted)]">AI reshapes proven workflow</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <LevelBadge level="C" />
              <span className="text-xs text-[var(--muted)]">{levelC.length} companies</span>
            </div>
            <p className="text-[var(--muted)]">AI enhances existing product</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <LevelBadge level="D" />
              <span className="text-xs text-[var(--muted)]">{levelD.length} companies</span>
            </div>
            <p className="text-[var(--muted)]">AI is indirect</p>
          </div>
        </div>
      </div>

      {/* Level A */}
      <section className="mb-16">
        <div className="card p-6 border-l-4 border-[var(--success)]">
          <div className="mb-6">
            <LevelBadge level="A" />
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-2">Level A</h2>
            <p className="text-lg font-medium mb-2">AI-Native (Zero-to-One)</p>
            <p className="text-[var(--muted)] italic">
              AI model capability itself defines the product and its UX.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-medium mb-2">Definition</h3>
              <p className="text-[var(--muted)]">
                AI <strong>is</strong> the product. The product exists because of AI model capability, not despite it.
                Removing the AI model removes the product entirely.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Design Characteristics</h3>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• No established UX patterns to follow</li>
                <li>• Model capability directly constrains and enables UX</li>
                <li>• Designers define new interaction paradigms and mental models</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Risk / Trade-off</h3>
              <p className="text-[var(--muted)]">
                <span className="text-[var(--warning)]">Very high uncertainty</span> ·
                High equity upside ·
                Maximum design ownership and ambiguity
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Examples ({levelA.length})</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[var(--accent-light)]">
                {levelA.map(c => (
                  <Link key={c.id} href={`/company/${c.id}`} className="hover:underline">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level B */}
      <section className="mb-16">
        <div className="card p-6 border-l-4 border-[var(--accent)]">
          <div className="mb-6">
            <LevelBadge level="B" />
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-2">Level B</h2>
            <p className="text-lg font-medium mb-2">AI-Core (Proven Workflow)</p>
            <p className="text-[var(--muted)] italic">
              AI reshapes a proven workflow rather than inventing a new one.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-medium mb-2">Definition</h3>
              <p className="text-[var(--muted)]">
                The user workflow is already proven. AI fundamentally changes <strong>how</strong> the work is done.
                AI is central to the experience, but UX patterns existed pre-AI.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Design Characteristics</h3>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Human-in-the-loop systems</li>
                <li>• Continuous decisions around automation vs human control</li>
                <li>• AI deeply embedded in daily workflows</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Risk / Trade-off</h3>
              <p className="text-[var(--muted)]">
                Balanced risk and stability ·
                Strong AI design learning curve ·
                High product impact without full zero-to-one risk
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Examples ({levelB.length})</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[var(--accent-light)]">
                {levelB.map(c => (
                  <Link key={c.id} href={`/company/${c.id}`} className="hover:underline">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level C */}
      <section className="mb-16">
        <div className="card p-6 border-l-4 border-[var(--border)]">
          <div className="mb-6">
            <LevelBadge level="C" />
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-2">Level C</h2>
            <p className="text-lg font-medium mb-2">AI as a Feature</p>
            <p className="text-[var(--muted)] italic">
              AI enhances an already mature product as a feature.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-medium mb-2">Definition</h3>
              <p className="text-[var(--muted)]">
                The core product existed before AI. AI is introduced as a feature that increases value.
                The product remains functional without AI.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Design Characteristics</h3>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Feature-level AI integration</li>
                <li>• Strong constraints from existing systems</li>
                <li>• Focus on reliability, consistency, and usability</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Risk / Trade-off</h3>
              <p className="text-[var(--muted)]">
                High stability ·
                Lower UX ownership ·
                Incremental rather than paradigm-shifting design
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Examples ({levelC.length})</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[var(--accent-light)]">
                {levelC.map(c => (
                  <Link key={c.id} href={`/company/${c.id}`} className="hover:underline">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level D */}
      <section className="mb-16">
        <div className="card p-6 border-l-4 border-[var(--border)]">
          <div className="mb-6">
            <LevelBadge level="D" />
            <h2 className="text-3xl sm:text-4xl font-semibold mt-3 mb-2">Level D</h2>
            <p className="text-lg font-medium mb-2">AI-Adjacent / Assisted</p>
            <p className="text-[var(--muted)] italic">
              AI is present, but designers influence it indirectly through systems and tools.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-medium mb-2">Definition</h3>
              <p className="text-[var(--muted)]">
                AI exists in the system, but designers interact with it indirectly.
                Designers do not design AI interactions directly.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Design Characteristics</h3>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Platform, tooling, or infrastructure-focused UX</li>
                <li>• Limited end-user AI interaction</li>
                <li>• Design impact is indirect</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Risk / Trade-off</h3>
              <p className="text-[var(--muted)]">
                Very high stability ·
                Narrow design scope ·
                Preference-dependent role satisfaction
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Examples</h3>
              <p className="text-[var(--muted)]">
                AWS AI platforms, enterprise AI tooling, internal AI systems
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">
                (Currently no Level D companies tracked in AIDO)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-[var(--border)]">
              <tr>
                <th className="text-left py-3 font-medium">Level</th>
                <th className="text-left py-3 font-medium">AI Role</th>
                <th className="text-left py-3 font-medium">Risk</th>
                <th className="text-left py-3 font-medium">Ownership</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              <tr className="border-b border-[var(--border)]">
                <td className="py-3"><LevelBadge level="A" /></td>
                <td className="py-3">AI IS the product</td>
                <td className="py-3 text-[var(--warning)]">Very High</td>
                <td className="py-3 text-[var(--success)]">Maximum</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3"><LevelBadge level="B" /></td>
                <td className="py-3">Reshapes proven workflow</td>
                <td className="py-3 text-[var(--accent-light)]">Balanced</td>
                <td className="py-3 text-[var(--success)]">High</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3"><LevelBadge level="C" /></td>
                <td className="py-3">Enhances existing product</td>
                <td className="py-3 text-[var(--success)]">Low</td>
                <td className="py-3">Lower</td>
              </tr>
              <tr>
                <td className="py-3"><LevelBadge level="D" /></td>
                <td className="py-3">Indirect influence</td>
                <td className="py-3 text-[var(--success)]">Very Low</td>
                <td className="py-3">Narrow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Notes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Important Notes</h2>
        <div className="space-y-4 text-sm text-[var(--muted)]">
          <p>
            <strong className="text-[var(--foreground)]">Levels are not a quality ranking.</strong> Level A is not "better" than Level C.
            The framework describes the role AI plays, not company quality or prestige.
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Levels are mutually exclusive per product.</strong> A single company may have multiple products at different levels.
            For example, Google Cloud AI (Level D) vs Google Gemini (Level A).
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Choose based on your career goals.</strong> Level A offers maximum ownership and ambiguity.
            Level B offers strong AI design learning with balanced risk. Level C offers stability with established products.
            Level D offers indirect AI influence through systems.
          </p>
        </div>
      </section>

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
