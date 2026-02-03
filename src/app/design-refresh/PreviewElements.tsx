'use client'

const filterChips = ['All', 'AI-Native', 'Open Roles', 'SF Bay Area', 'Series B+']

const fundingData = [
  { stage: 'Series E', amount: '$7.3B', date: 'Mar 2024' },
  { stage: 'Series D', amount: '$2.0B', date: 'Sep 2023' },
  { stage: 'Series C', amount: '$580M', date: 'May 2023' },
]

const badgeVariants = [
  { label: 'Default', className: 'badge' },
  { label: 'Level A', className: 'badge badge-success' },
  { label: 'Level B', className: 'badge badge-accent' },
  { label: 'Caution', className: 'badge badge-warning' },
]

const typographyScale = [
  { name: 'Display', className: 'text-display', sample: 'AI Design Opportunities' },
  { name: 'Headline', className: 'text-headline', sample: 'Company Intelligence' },
  { name: 'Title', className: 'text-title', sample: 'Anthropic — Series E' },
  { name: 'Body Large', className: 'text-body-lg', sample: 'Building reliable, interpretable AI systems.' },
  { name: 'Body', className: 'text-body', sample: 'Senior Product Designer, Claude — San Francisco, CA' },
  { name: 'Label', className: 'text-label', sample: 'FUNDING STAGE · OPEN ROLES · AI LEVEL' },
  { name: 'Caption', className: 'text-caption', sample: 'Last updated: Jan 2025 · 2 open roles' },
]

export function PreviewElements() {
  return (
    <div className="space-y-8">
      {/* Filter Chips */}
      <div>
        <div className="section-title text-xs">Filter Chips</div>
        <div className="flex flex-wrap gap-1.5">
          {filterChips.map((chip, i) => (
            <button
              key={chip}
              className={`preview-data flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full border transition-colors whitespace-nowrap ${
                i === 0
                  ? 'border-[var(--accent)] text-[var(--foreground)] bg-[var(--card)]'
                  : 'border-[var(--border)] text-[var(--muted)] bg-[var(--card)] hover:border-[var(--muted)]'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Funding Table */}
      <div>
        <div className="section-title text-xs">Funding History</div>
        <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-[var(--card)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--background)] border-b border-[var(--border)]">
                <th className="preview-data text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Stage</th>
                <th className="preview-data text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Amount</th>
                <th className="preview-data text-left py-2.5 px-4 text-sm font-medium text-[var(--muted)]">Date</th>
              </tr>
            </thead>
            <tbody>
              {fundingData.map((row) => (
                <tr key={row.stage} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="preview-data py-2.5 px-4 text-sm text-[var(--foreground)]">{row.stage}</td>
                  <td className="preview-data py-2.5 px-4 text-sm font-medium text-[var(--foreground)]">{row.amount}</td>
                  <td className="preview-data py-2.5 px-4 text-sm text-[var(--muted)]">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Badge Collection */}
      <div>
        <div className="section-title text-xs">Badges</div>
        <div className="flex flex-wrap gap-2">
          {badgeVariants.map((b) => (
            <span key={b.label} className={b.className}>{b.label}</span>
          ))}
        </div>
      </div>

      {/* Typography Scale */}
      <div>
        <div className="section-title text-xs">Typography Scale</div>
        <div className="space-y-4">
          {typographyScale.map((t) => (
            <div key={t.name} className="flex flex-col gap-0.5">
              <span className="text-xs text-[var(--muted-dim)] uppercase tracking-wider">{t.name}</span>
              <span className={`preview-heading ${t.className} text-[var(--foreground)]`}>{t.sample}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
