'use client'

const sampleData = {
  name: 'Anthropic',
  description: 'AI safety company building reliable, interpretable, and steerable AI systems. Creator of Claude.',
  aiLevel: 'A' as const,
  hq: 'San Francisco, CA',
  stage: 'Series E',
  funding: '$7.3B',
  remote: 'Hybrid',
  tags: ['LLM', 'AI Safety', 'Enterprise AI', 'Consumer AI'],
  whyJoin: [
    'Leading AI safety research with direct product impact',
    'Design shapes how millions interact with AI',
    'Rapidly scaling — high growth trajectory',
  ],
  watchOut: [
    'Intense competitive pressure from OpenAI, Google',
  ],
  designFocus: {
    logic: 85,
    evaluation: 70,
    interface: 90,
  },
  openRoles: [
    { title: 'Senior Product Designer, Claude', location: 'San Francisco' },
    { title: 'Product Designer, Enterprise', location: 'San Francisco' },
  ],
}

function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[var(--muted)] w-20 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--accent)]"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-[var(--muted)] w-8 text-right">{value}%</span>
    </div>
  )
}

export function PreviewCard() {
  return (
    <div className="card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--border)] flex items-center justify-center text-sm font-semibold text-[var(--muted)]">
            A
          </div>
          <div>
            <h3 className="preview-heading text-base font-semibold text-[var(--foreground)] leading-tight">
              {sampleData.name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="badge badge-success text-xs">Level {sampleData.aiLevel}</span>
              <span className="text-xs text-[var(--muted)]">{sampleData.hq}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="preview-data text-xs text-[var(--muted)]">{sampleData.stage}</span>
          <span className="preview-data text-xs font-medium text-[var(--foreground)]">{sampleData.funding}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-body)] leading-relaxed">
        {sampleData.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {sampleData.tags.map((tag) => (
          <span key={tag} className="badge text-xs">{tag}</span>
        ))}
      </div>

      {/* Why Join / Watch Out */}
      <div className="grid grid-cols-1 gap-3">
        <div>
          <div className="section-title text-xs">Why Join</div>
          <ul className="space-y-1.5">
            {sampleData.whyJoin.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--success)] shrink-0 mt-0.5">+</span>
                <span className="text-[var(--foreground)]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="section-title text-xs">Watch Out</div>
          <ul className="space-y-1">
            {sampleData.watchOut.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--warning)] shrink-0 mt-0.5">-</span>
                <span className="text-[var(--text-body)]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Design Focus */}
      <div>
        <div className="section-title text-xs">Design Focus</div>
        <div className="space-y-2">
          <ProgressBar label="Logic" value={sampleData.designFocus.logic} />
          <ProgressBar label="Evaluation" value={sampleData.designFocus.evaluation} />
          <ProgressBar label="Interface" value={sampleData.designFocus.interface} />
        </div>
      </div>

      {/* Open Roles */}
      <div className="border-t border-[var(--border)] pt-3">
        <div className="section-title text-xs">Open Roles</div>
        <div className="space-y-1.5">
          {sampleData.openRoles.map((role) => (
            <div key={role.title} className="flex items-center justify-between">
              <span className="preview-data text-sm text-[var(--accent-light)]">{role.title}</span>
              <span className="text-xs text-[var(--muted)]">{role.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
