import Link from 'next/link';
import { companies } from '@/data/companies';

function AiLevelBadge({ level }: { level: number }) {
  const labels = {
    1: 'AI Feature',
    2: 'AI Major',
    3: 'AI Core',
    4: 'AI Native',
  };
  const colors = {
    1: 'badge',
    2: 'badge',
    3: 'badge-accent',
    4: 'badge-success',
  };
  return (
    <span className={`badge ${colors[level as keyof typeof colors]}`}>
      L{level}: {labels[level as keyof typeof labels]}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    watching: 'badge',
    interested: 'badge-accent',
    researching: 'badge-warning',
    applied: 'badge-success',
  };
  return (
    <span className={`badge ${colors[status] || 'badge'}`}>
      {status}
    </span>
  );
}

function FitScore({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[var(--muted)]">Fit</span>
      <span className="font-mono font-medium">{score}/10</span>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Companies</h1>
        <p className="text-[var(--muted)]">
          AI-native companies worth watching for product design opportunities
        </p>
      </div>

      <div className="space-y-4">
        {companies.map((company) => (
          <Link
            key={company.id}
            href={`/company/${company.id}`}
            className="card block p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg font-medium">{company.name}</h2>
                  <AiLevelBadge level={company.aiNativeLevel} />
                  <StatusBadge status={company.tracking.status} />
                </div>
                <p className="text-[var(--muted)] text-sm mb-3 line-clamp-2">
                  {company.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                  <span>{company.stage}</span>
                  <span className="text-[var(--border)]">·</span>
                  <span>{company.revenue}</span>
                  <span className="text-[var(--border)]">·</span>
                  <span>
                    {company.openRoles.length > 0
                      ? `${company.openRoles.length} design roles open`
                      : 'No open roles'}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <FitScore score={company.tracking.fitScore} />
              </div>
            </div>

            {/* Design Work Type Preview */}
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-[var(--muted)] mb-1">Logic/Behavior</div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${company.designWorkType.logicBehavior}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[var(--muted)] mb-1">Evaluation</div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${company.designWorkType.evaluation}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[var(--muted)] mb-1">Interface</div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${company.designWorkType.interface}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {companies.length === 0 && (
        <div className="card p-8 text-center text-[var(--muted)]">
          No companies added yet.
        </div>
      )}
    </div>
  );
}
