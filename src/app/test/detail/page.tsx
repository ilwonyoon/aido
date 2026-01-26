'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { companies } from '@/data/companies';
import { Company } from '@/data/types';
import { InterestToggle } from '@/components/InterestToggle';

// Use Anthropic as sample data
const company = companies.find(c => c.id === 'anthropic') || companies[0];

function AiLevelBadge({ level }: { level: number }) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const colors = { 1: 'badge', 2: 'badge', 3: 'badge-accent', 4: 'badge-success' };
  return (
    <span className={`badge ${colors[level as keyof typeof colors]}`}>
      L{level}: {labels[level as keyof typeof labels]}
    </span>
  );
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
  const colors = { high: 'badge-success', medium: 'badge-accent', low: 'badge' };
  const labels = { high: 'High', medium: 'Medium', low: 'Low' };
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">{title}</h3>
        <span className={`badge ${colors[level]}`}>{labels[level]}</span>
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

const sections = [
  { id: 'quick-info', label: 'Quick Info', icon: '⚡' },
  { id: 'company', label: 'Company', icon: '🏢' },
  { id: 'design', label: 'Design', icon: '🎨' },
];

export default function TestDetailPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/test"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] inline-block"
        >
          ← Back to test page
        </Link>
      </div>

      {/* Main Layout: Index Nav + Content */}
      <div className="flex gap-8">
        {/* Sticky Index Nav */}
        <nav className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky top-8 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-[var(--card)] text-[var(--foreground)] font-medium'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
                {activeSection === section.id && (
                  <span className="ml-auto text-[var(--accent-light)]">●</span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile horizontal nav */}
        <div className="lg:hidden sticky top-0 z-10 -mx-6 px-6 py-3 bg-[var(--background)] border-b border-[var(--border)] mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs transition-colors ${
                  activeSection === section.id
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--card)] text-[var(--muted)]'
                }`}
              >
                {section.icon} {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 space-y-12">
          {/* Header Info */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-semibold">{company.name}</h1>
              <AiLevelBadge level={company.aiNativeLevel} />
            </div>
            <p className="text-[var(--muted)] text-lg">{company.description}</p>
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

          {/* Quick Info */}
          <section id="quick-info" className="scroll-mt-20 space-y-4">
            <h2 className="text-2xl font-semibold mb-6">⚡ Quick Info</h2>

            {/* Overview - Summary Card */}
            <div className="card p-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-[var(--muted)]">Stage</div>
                  <div className="font-medium text-sm">{company.stage}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)]">Valuation</div>
                  <div className="font-medium text-sm">{company.valuation || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)]">AI Level</div>
                  <div className="font-medium text-sm">L{company.aiNativeLevel}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)]">Work Type</div>
                  <div className="font-medium text-sm">
                    {company.remote === 'Yes' ? '🟢 Remote' : company.remote === 'Hybrid' ? '🟡 Hybrid' : '🔴 On-site'}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border)]">
                <div>
                  <div className="text-xs text-[var(--muted)]">HQ</div>
                  <div className="text-sm">{company.headquarters.split(',')[0]}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)]">Team Size</div>
                  <div className="text-sm">{company.designTeam.teamSize || 'Unknown'}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)]">Total Funding</div>
                  <div className="text-sm font-medium text-[var(--success)]">{company.totalFunding}</div>
                </div>
              </div>

              {/* AI Level Description */}
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <div className="text-xs text-[var(--muted)] mb-1">AI-Native Level</div>
                <p className="text-sm">{company.aiNativeLevelDescription}</p>
              </div>

              {/* Founders Summary */}
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <div className="text-xs text-[var(--muted)] mb-2">Founders</div>
                <div className="space-y-1">
                  {company.founders.slice(0, 2).map((f, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-medium">{f.name}</span>
                      <span className="text-[var(--muted)]"> — {f.background}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Building */}
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <div className="text-xs text-[var(--muted)] mb-1">Why They're Building This</div>
                <p className="text-sm">{company.whyBuilding}</p>
              </div>

              {/* Moat */}
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <div className="text-xs text-[var(--muted)] mb-2">Moat (Top 3)</div>
                <ul className="space-y-1">
                  {company.moat.slice(0, 3).map((m, i) => (
                    <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
                      <span className="text-[var(--success)]">→</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Join / Why Not */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)] mt-4">
                <div>
                  <div className="text-xs text-[var(--muted)] mb-2">Why Join (Top 3)</div>
                  <ul className="space-y-1">
                    {company.tracking.whyJoin.slice(0, 3).map((w, i) => (
                      <li key={i} className="text-xs text-[var(--success)]">+ {w}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs text-[var(--muted)] mb-2">Why Not (Top 3)</div>
                  <ul className="space-y-1">
                    {company.tracking.whyNot.slice(0, 3).map((w, i) => (
                      <li key={i} className="text-xs text-[var(--warning)]">- {w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Open Roles - Quick List */}
            {company.openRoles.length > 0 ? (
              <div className="card p-4 border-2 border-[var(--success)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-[var(--muted)]">Open Design Roles</div>
                  <span className="badge badge-success text-xs">{company.openRoles.length}</span>
                </div>
                <div className="space-y-2">
                  {company.openRoles.map((role, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[var(--success)] text-xs mt-0.5">•</span>
                      <div className="flex-1">
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-[var(--accent-light)]"
                        >
                          {role.title} ↗
                        </a>
                        <div className="text-xs text-[var(--muted)]">{role.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card p-4 text-center text-sm text-[var(--muted)]">
                No open design roles
              </div>
            )}
          </section>

          {/* Open Roles - Detailed */}
          {company.openRoles.length > 0 && (
            <section className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-6">💼 Open Roles Details</h2>
              <div className="space-y-4">
                {company.openRoles.map((role, i) => (
                  <div key={i} className="card p-5">
                    <div className="mb-4">
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-[var(--accent-light)]"
                      >
                        {role.title} ↗
                      </a>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-sm text-[var(--muted)]">{role.location}</span>
                        {role.level && <span className="badge text-xs">{role.level}</span>}
                        {role.team && <span className="badge badge-accent text-xs">{role.team}</span>}
                        {role.compensation && (
                          <span className="text-sm font-medium text-[var(--success)]">{role.compensation}</span>
                        )}
                      </div>
                    </div>

                    {role.aboutRole && (
                      <div className="mb-3">
                        <p className="text-sm text-[var(--muted)]">{role.aboutRole}</p>
                      </div>
                    )}

                    {role.whyInteresting && (
                      <div className="mb-3 p-3 bg-[var(--success)]/10 rounded border border-[var(--success)]/30">
                        <div className="text-xs font-medium text-[var(--success)] uppercase tracking-wide mb-1">
                          Why Interesting
                        </div>
                        <p className="text-sm">{role.whyInteresting}</p>
                      </div>
                    )}

                    {role.responsibilities && role.responsibilities.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide mb-2">
                          What You'll Do
                        </div>
                        <ul className="space-y-1">
                          {role.responsibilities.map((item, j) => (
                            <li key={j} className="text-sm flex gap-2">
                              <span className="text-[var(--accent-light)]">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {role.requirements && role.requirements.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide mb-2">
                          Requirements
                        </div>
                        <ul className="space-y-1">
                          {role.requirements.map((req, j) => (
                            <li key={j} className="text-sm text-[var(--muted)] flex gap-2">
                              <span>•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {role.preferred && role.preferred.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide mb-2">
                          Nice to Have
                        </div>
                        <ul className="space-y-1">
                          {role.preferred.map((pref, j) => (
                            <li key={j} className="text-sm text-[var(--muted)] flex gap-2">
                              <span className="text-[var(--success)]">+</span>
                              <span>{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Company */}
          <section id="company" className="scroll-mt-20 space-y-8">
            <h2 className="text-2xl font-semibold mb-6">🏢 Company</h2>

            {/* Business */}
            <div>
              <h3 className="section-title">Business</h3>

            {/* Funding History */}
            {company.fundingHistory && company.fundingHistory.length > 0 && (
              <div className="card p-5 mb-4">
                <h3 className="font-medium mb-4">Funding History</h3>
                <div className="space-y-3">
                  {company.fundingHistory.map((round, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm">
                      <div className="w-20 font-mono text-[var(--muted)]">{round.date}</div>
                      <div className="w-20"><span className="badge">{round.stage}</span></div>
                      <div className="w-24 font-medium text-[var(--success)]">{round.amount}</div>
                      {round.valuation && (
                        <div className="text-[var(--muted)]">@ {round.valuation}</div>
                      )}
                      {round.leadInvestors && round.leadInvestors.length > 0 && (
                        <div className="text-xs text-[var(--muted)] truncate">
                          {round.leadInvestors.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Moat */}
            <div className="card p-5 mb-4">
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
            <div className="card p-5">
              <h3 className="font-medium mb-3">Competition</h3>
              <div className="space-y-3">
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
            </div>
            </div>

            {/* AI Native Level */}
            <div>
              <h3 className="section-title">AI-Native Level</h3>
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
            </div>

            {/* Founders & Vision */}
            <div>
              <h3 className="section-title">Founders & Vision</h3>
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
                      <li key={i} className="text-sm text-[var(--muted)]">! {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>

            {/* Interest Status */}
            <div className="card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Interest Status</h3>
                <InterestToggle companyId={company.id} />
              </div>
            </div>
          </section>

          {/* Design */}
          <section id="design" className="scroll-mt-20 space-y-8">
            <h2 className="text-2xl font-semibold mb-6">🎨 Design</h2>

            {/* Design Team + Designer Links */}
            <div>
              <h3 className="section-title">Design Team</h3>
            <div className="card p-5 mb-4">
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

            {/* Designer Links */}
            {company.designerLinks.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium text-sm mb-3">Designer Links</h3>
                {company.designerLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block p-4 hover:border-[var(--accent)]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs">{link.platform}</span>
                      <span className="font-medium text-sm">{link.name}</span>
                    </div>
                    <div className="text-xs text-[var(--muted)]">{link.role}</div>
                    {link.description && (
                      <div className="text-xs text-[var(--accent-light)] mt-1">{link.description}</div>
                    )}
                  </a>
                ))}
              </div>
            )}
            </div>

            {/* Culture Insights */}
            {company.cultureInsights && company.cultureInsights.length > 0 && (
            <div>
              <h3 className="section-title">Culture Insights</h3>
              <div className="space-y-2">
                {company.cultureInsights.map((insight, i) => {
                  const sentimentColors = {
                    positive: 'border-l-[var(--success)]',
                    neutral: 'border-l-[var(--muted)]',
                    negative: 'border-l-[var(--warning)]',
                  };
                  return (
                    <div
                      key={i}
                      className={`card p-4 border-l-2 ${sentimentColors[insight.sentiment]}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[var(--muted)]">{insight.source}</span>
                        {insight.rating && (
                          <span className="text-xs font-medium text-[var(--accent-light)]">
                            ★ {insight.rating}/5
                          </span>
                        )}
                      </div>
                      <p className="text-sm">{insight.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            )}

            {/* My Tracking */}
            <div>
              <h3 className="section-title">My Tracking</h3>
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-accent">{company.tracking.status}</span>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold">{company.tracking.fitScore}/10</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--success)] mb-2">Why Join</h4>
                  <ul className="space-y-1">
                    {company.tracking.whyJoin.map((w, i) => (
                      <li key={i} className="text-sm text-[var(--muted)]">+ {w}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[var(--warning)] mb-2">Why Not</h4>
                  <ul className="space-y-1">
                    {company.tracking.whyNot.map((w, i) => (
                      <li key={i} className="text-sm text-[var(--muted)]">- {w}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <h4 className="text-sm font-medium mb-2">Next Actions</h4>
                  <ul className="space-y-1">
                    {company.tracking.nextActions.map((a, i) => (
                      <li key={i} className="text-sm text-[var(--muted)] flex gap-2">
                        <input type="checkbox" className="mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>

            {/* Sources */}
            <div>
              <h3 className="section-title">Sources</h3>
            <div className="card p-5">
              <div className="space-y-2">
                {company.sources.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[var(--accent-light)] hover:underline"
                  >
                    {s.title} ↗
                  </a>
                ))}
              </div>
            </div>
            </div>

            {/* Design Work Type */}
            <div>
              <h3 className="section-title">Design Work Type</h3>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
