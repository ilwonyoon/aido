import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCompanyById, companies } from '@/data/companies';
import { Company } from '@/data/types';

export function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function AiLevelBadge({ level }: { level: number }) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const colors = { 1: 'badge', 2: 'badge', 3: 'badge-accent', 4: 'badge-success' };
  return (
    <span className={`badge ${colors[level as keyof typeof colors]}`}>
      Level {level}: {labels[level as keyof typeof labels]}
    </span>
  );
}

function LevelBadge({ level }: { level: 'high' | 'medium' | 'low' }) {
  const colors = {
    high: 'badge-success',
    medium: 'badge-accent',
    low: 'badge',
  };
  const labels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  return <span className={`badge ${colors[level]}`}>{labels[level]}</span>;
}

function WorkTypeSection({
  title,
  level,
  tasks,
}: {
  title: string;
  level: 'high' | 'medium' | 'low';
  tasks: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">{title}</h3>
        <LevelBadge level={level} />
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
            <span className="text-[var(--accent-light)]">•</span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  const icons: Record<string, string> = {
    twitter: '𝕏',
    threads: '@',
    substack: '📝',
    blog: '📄',
    linkedin: 'in',
    podcast: '🎙️',
  };
  return <span className="text-xs">{icons[platform] || '🔗'}</span>;
}

function CompanyDetail({ company }: { company: Company }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-4 inline-block"
        >
          ← Back to companies
        </Link>
        <div className="flex items-start justify-between gap-4">
          {company.logo && (
            <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-semibold">{company.name}</h1>
              <AiLevelBadge level={company.aiNativeLevel} />
            </div>
            <p className="text-[var(--muted)] text-lg">{company.description}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-mono font-bold">{company.tracking.fitScore}</div>
            <div className="text-sm text-[var(--muted)]">Fit Score</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-light)] hover:underline"
          >
            {company.website} ↗
          </a>
          <span className="text-[var(--muted)]">Updated {company.lastUpdated}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Business */}
          <Section title="Business">
            <div className="card p-5">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-[var(--muted)]">Stage</div>
                  <div className="font-medium">{company.stage}</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--muted)]">Valuation</div>
                  <div className="font-medium">{company.valuation || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--muted)]">Revenue</div>
                  <div className="font-medium">{company.revenue || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--muted)]">Growth</div>
                  <div className="font-medium">{company.growth || 'N/A'}</div>
                </div>
              </div>
              {company.customers && (
                <div className="pt-4 border-t border-[var(--border)]">
                  <div className="text-sm text-[var(--muted)]">Customers</div>
                  <div>{company.customers}</div>
                </div>
              )}
            </div>

            {/* Moat */}
            <div className="card p-5 mt-4">
              <h3 className="font-medium mb-3">Why They Win (Moat)</h3>
              <ul className="space-y-2">
                {company.moat.map((m, i) => (
                  <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
                    <span className="text-[var(--success)]">→</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Competition */}
            <div className="card p-5 mt-4">
              <h3 className="font-medium mb-3">Competition</h3>
              <div className="space-y-3 mb-3">
                {company.competitors.map((c, i) => (
                  <div key={i} className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                    <div className="font-medium text-sm">{c.name}</div>
                    <div className="text-xs text-[var(--muted)] mt-1">{c.description}</div>
                    {c.whyTheyWin && (
                      <div className="text-xs text-[var(--warning)] mt-1">Why they win: {c.whyTheyWin}</div>
                    )}
                  </div>
                ))}
              </div>
              {company.marketPosition && (
                <p className="text-sm text-[var(--muted)]">{company.marketPosition}</p>
              )}
            </div>
          </Section>

          {/* AI Native */}
          <Section title="AI-Native Level">
            <div className="card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl font-mono font-bold">L{company.aiNativeLevel}</div>
                <div>
                  <AiLevelBadge level={company.aiNativeLevel} />
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {company.aiNativeLevelDescription}
                  </p>
                </div>
              </div>
              <h3 className="font-medium mb-3">AI Design Challenges</h3>
              <ul className="space-y-2">
                {company.aiDesignChallenges.map((c, i) => (
                  <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
                    <span className="text-[var(--accent-light)]">◆</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Founders & Vision */}
          <Section title="Founders & Vision">
            <div className="card p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {company.founders.map((f) => (
                  <div key={f.name} className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                    <div className="font-medium">{f.name}</div>
                    <div className="text-sm text-[var(--accent-light)]">{f.role}</div>
                    <div className="text-sm text-[var(--muted)] mt-1">{f.background}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Why They're Building This</h3>
                  <p className="text-sm text-[var(--muted)]">{company.whyBuilding}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">What They Believe</h3>
                  <ul className="space-y-1">
                    {company.beliefs.map((b, i) => (
                      <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
                        <span>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {company.designPhilosophy && (
                  <div>
                    <h3 className="font-medium mb-2">Design Philosophy</h3>
                    <p className="text-sm text-[var(--muted)]">{company.designPhilosophy}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-[var(--border)]">
                <div>
                  <h4 className="text-sm font-medium text-[var(--success)] mb-2">Green Flags</h4>
                  <ul className="space-y-1">
                    {company.greenFlags.map((f, i) => (
                      <li key={i} className="text-sm text-[var(--muted)]">✓ {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[var(--warning)] mb-2">Red Flags</h4>
                  <ul className="space-y-1">
                    {company.redFlags.map((f, i) => (
                      <li key={i} className="text-sm text-[var(--muted)]">⚠ {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Design Work Type */}
          <Section title="Design Work Type">
            <div className="card p-5">
              <WorkTypeSection
                title="Logic / Behavior Design"
                level={company.designWorkType.logicBehavior.level}
                tasks={company.designWorkType.logicBehavior.tasks}
              />
              <div className="border-t border-[var(--border)] my-5" />
              <WorkTypeSection
                title="Evaluation Design"
                level={company.designWorkType.evaluation.level}
                tasks={company.designWorkType.evaluation.tasks}
              />
              <div className="border-t border-[var(--border)] my-5" />
              <WorkTypeSection
                title="Interface Design"
                level={company.designWorkType.interface.level}
                tasks={company.designWorkType.interface.tasks}
              />
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Design Team */}
          <Section title="Design Team">
            <div className="card p-5">
              {company.designTeam.cpo && (
                <div className="mb-3">
                  <div className="text-sm text-[var(--muted)]">CPO</div>
                  <div className="font-medium">{company.designTeam.cpo}</div>
                </div>
              )}
              {company.designTeam.designHead && (
                <div className="mb-3">
                  <div className="text-sm text-[var(--muted)]">Head of Design</div>
                  <div className="font-medium">{company.designTeam.designHead}</div>
                </div>
              )}
              {company.designTeam.teamSize && (
                <div className="mb-3">
                  <div className="text-sm text-[var(--muted)]">Team Size</div>
                  <div>{company.designTeam.teamSize}</div>
                </div>
              )}
              <div className="mb-3">
                <div className="text-sm text-[var(--muted)]">Product Stage</div>
                <div className="font-mono">{company.productStage}</div>
              </div>
            </div>
          </Section>

          {/* Designer Links */}
          {company.designerLinks.length > 0 && (
            <Section title="Designer Links">
              <div className="space-y-2">
                {company.designerLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block p-4 hover:border-[var(--accent)]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <PlatformIcon platform={link.platform} />
                      <span className="font-medium text-sm">{link.name}</span>
                    </div>
                    <div className="text-xs text-[var(--muted)]">{link.role}</div>
                    {link.description && (
                      <div className="text-xs text-[var(--accent-light)] mt-1">{link.description}</div>
                    )}
                  </a>
                ))}
              </div>
            </Section>
          )}

          {/* Open Roles */}
          <Section title="Open Design Roles">
            {company.openRoles.length > 0 ? (
              <div className="space-y-3">
                {company.openRoles.map((role, i) => (
                  <div key={i} className="card p-4">
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm hover:text-[var(--accent-light)]"
                    >
                      {role.title} ↗
                    </a>
                    <div className="text-xs text-[var(--muted)] mb-2">{role.location}</div>
                    {role.requirements && role.requirements.length > 0 && (
                      <div className="pt-2 border-t border-[var(--border)]">
                        <div className="text-xs text-[var(--muted)] mb-1">Requirements:</div>
                        <ul className="space-y-0.5">
                          {role.requirements.map((req, j) => (
                            <li key={j} className="text-xs text-[var(--muted)]">• {req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="card p-4 text-sm text-[var(--muted)]">
                No open design roles
              </div>
            )}
          </Section>

          {/* Culture Insights */}
          {company.cultureInsights && company.cultureInsights.length > 0 && (
            <Section title="Culture Insights">
              <div className="space-y-2">
                {company.cultureInsights.map((insight, i) => {
                  const sentimentColors = {
                    positive: 'border-l-[var(--success)]',
                    neutral: 'border-l-[var(--muted)]',
                    negative: 'border-l-[var(--warning)]',
                  };
                  const sourceLabels: Record<string, string> = {
                    blind: 'Blind',
                    glassdoor: 'Glassdoor',
                    linkedin: 'LinkedIn',
                    twitter: 'X/Twitter',
                    'levels.fyi': 'Levels.fyi',
                  };
                  return (
                    <div
                      key={i}
                      className={`card p-3 border-l-2 ${sentimentColors[insight.sentiment]}`}
                    >
                      <div className="text-xs text-[var(--muted)] mb-1">
                        {sourceLabels[insight.source] || insight.source}
                      </div>
                      <p className="text-sm">{insight.content}</p>
                    </div>
                  );
                })}
              </div>
            </Section>
          )}

          {/* My Tracking */}
          <Section title="My Tracking">
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <span className={`badge badge-accent`}>{company.tracking.status}</span>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold">{company.tracking.fitScore}/10</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--success)] mb-2">Why Join</h4>
                  <ul className="space-y-1">
                    {company.tracking.whyJoin.map((w, i) => (
                      <li key={i} className="text-xs text-[var(--muted)]">+ {w}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[var(--warning)] mb-2">Why Not</h4>
                  <ul className="space-y-1">
                    {company.tracking.whyNot.map((w, i) => (
                      <li key={i} className="text-xs text-[var(--muted)]">- {w}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <h4 className="text-sm font-medium mb-2">Next Actions</h4>
                  <ul className="space-y-1">
                    {company.tracking.nextActions.map((a, i) => (
                      <li key={i} className="text-xs text-[var(--muted)] flex gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Sources */}
          <Section title="Sources">
            <div className="space-y-1">
              {company.sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-[var(--muted)] hover:text-[var(--accent-light)] truncate"
                >
                  {s.title} ↗
                </a>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = getCompanyById(id);

  if (!company) {
    notFound();
  }

  return <CompanyDetail company={company} />;
}
