import Link from 'next/link';

export const metadata = {
  title: 'Design System — AIDO',
  description: 'AIDO Design System tokens and components reference',
};

function ColorSwatch({
  name,
  variable,
  description
}: {
  name: string;
  variable: string;
  description?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-lg border border-[var(--border)] flex-shrink-0"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div>
        <div className="text-body-strong">{name}</div>
        <code className="text-caption text-[var(--muted)]">{variable}</code>
        {description && <div className="text-caption text-[var(--muted)]">{description}</div>}
      </div>
    </div>
  );
}

function SpacingSwatch({ name, variable, size }: { name: string; variable: string; size: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="h-4 bg-[var(--accent)] rounded"
        style={{ width: `var(${variable})` }}
      />
      <div className="flex-1">
        <span className="text-body-strong">{name}</span>
        <span className="text-caption text-[var(--muted)] ml-2">{size}</span>
      </div>
      <code className="text-caption text-[var(--muted)]">{variable}</code>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-headline mb-6 pb-4 border-b border-[var(--border)]">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-title mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-caption text-[var(--muted)] hover:text-[var(--foreground)]">
          Back to companies
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="text-display mb-4">Design System</h1>
        <p className="text-body-lg text-[var(--muted)]">
          AIDO design tokens and component reference. All styles should use these tokens
          instead of hardcoded values to ensure consistency.
        </p>
      </header>

      {/* Typography */}
      <Section title="Typography">
        <div className="space-y-6">
          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Caption</div>
            <p className="text-caption">Metadata, timestamps, and small labels</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-caption-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Label</div>
            <p className="text-label">Form labels and UI text</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-label-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Body</div>
            <p className="text-body">Default reading text for content and descriptions</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-body-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Body Strong</div>
            <p className="text-body-strong">Emphasized text within body content</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-body-strong-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Body Large</div>
            <p className="text-body-lg">Intro text and company descriptions</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-body-lg-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Title</div>
            <p className="text-title">Card titles and subsection headers</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-title-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Headline</div>
            <p className="text-headline">Page section headers</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-headline-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Display</div>
            <p className="text-display">Page titles</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-display-*</code>
          </div>

          <div className="card p-4">
            <div className="text-caption text-[var(--muted)] mb-1">Section Title</div>
            <p className="section-title" style={{ marginBottom: 0 }}>Uppercase section labels</p>
            <code className="text-caption text-[var(--muted)] mt-2 block">--type-section-title-*</code>
          </div>
        </div>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <SubSection title="Background">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorSwatch name="Base" variable="--color-bg-base" description="Page background" />
            <ColorSwatch name="Elevated" variable="--color-bg-elevated" description="Cards, modals" />
            <ColorSwatch name="Elevated Hover" variable="--color-bg-elevated-hover" />
          </div>
        </SubSection>

        <SubSection title="Foreground / Text">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorSwatch name="Default" variable="--color-fg-default" description="Primary text" />
            <ColorSwatch name="Muted" variable="--color-fg-muted" description="Secondary text" />
            <ColorSwatch name="Subtle" variable="--color-fg-subtle" description="Disabled, hints" />
          </div>
        </SubSection>

        <SubSection title="Interactive">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorSwatch name="Primary" variable="--color-interactive-primary" description="Buttons, CTAs" />
            <ColorSwatch name="Primary Hover" variable="--color-interactive-primary-hover" />
            <ColorSwatch name="Link" variable="--color-interactive-link" description="Text links" />
          </div>
        </SubSection>

        <SubSection title="Feedback">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorSwatch name="Success" variable="--color-feedback-success" description="Positive states" />
            <ColorSwatch name="Warning" variable="--color-feedback-warning" description="Caution, risks" />
            <ColorSwatch name="Error" variable="--color-feedback-error" description="Errors, destructive" />
            <ColorSwatch name="Info" variable="--color-feedback-info" description="Informational" />
          </div>
        </SubSection>

        <SubSection title="AI Level Colors">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="text-level-a font-mono font-semibold">Level A</span>
              <div className="text-caption text-[var(--muted)]">AI-Native</div>
            </div>
            <div>
              <span className="text-level-b font-mono font-semibold">Level B</span>
              <div className="text-caption text-[var(--muted)]">AI-Core</div>
            </div>
            <div>
              <span className="text-level-c font-mono font-semibold">Level C</span>
              <div className="text-caption text-[var(--muted)]">AI Feature</div>
            </div>
            <div>
              <span className="text-level-d font-mono font-semibold">Level D</span>
              <div className="text-caption text-[var(--muted)]">AI-Adjacent</div>
            </div>
          </div>
        </SubSection>
      </Section>

      {/* Spacing */}
      <Section title="Spacing">
        <SubSection title="Primitive Scale (4px baseline)">
          <div className="space-y-3">
            <SpacingSwatch name="space-1" variable="--primitive-space-1" size="4px" />
            <SpacingSwatch name="space-2" variable="--primitive-space-2" size="8px" />
            <SpacingSwatch name="space-3" variable="--primitive-space-3" size="12px" />
            <SpacingSwatch name="space-4" variable="--primitive-space-4" size="16px" />
            <SpacingSwatch name="space-5" variable="--primitive-space-5" size="20px" />
            <SpacingSwatch name="space-6" variable="--primitive-space-6" size="24px" />
            <SpacingSwatch name="space-8" variable="--primitive-space-8" size="32px" />
            <SpacingSwatch name="space-10" variable="--primitive-space-10" size="40px" />
            <SpacingSwatch name="space-12" variable="--primitive-space-12" size="48px" />
          </div>
        </SubSection>

        <SubSection title="Semantic Spacing">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-4">
              <h4 className="text-label mb-3">Layout Spacing</h4>
              <div className="space-y-2 text-caption">
                <div><code>--space-layout-xs</code> 8px</div>
                <div><code>--space-layout-sm</code> 16px</div>
                <div><code>--space-layout-md</code> 24px</div>
                <div><code>--space-layout-lg</code> 32px</div>
                <div><code>--space-layout-xl</code> 48px</div>
              </div>
            </div>
            <div className="card p-4">
              <h4 className="text-label mb-3">Component Spacing</h4>
              <div className="space-y-2 text-caption">
                <div><code>--space-component-xs</code> 4px</div>
                <div><code>--space-component-sm</code> 8px</div>
                <div><code>--space-component-md</code> 12px</div>
                <div><code>--space-component-lg</code> 16px</div>
              </div>
            </div>
            <div className="card p-4">
              <h4 className="text-label mb-3">Text Spacing</h4>
              <div className="space-y-2 text-caption">
                <div><code>--space-text-inline</code> 4px - same line elements</div>
                <div><code>--space-text-stacked</code> 8px - label to input</div>
                <div><code>--space-text-paragraph</code> 16px - between paragraphs</div>
                <div><code>--space-text-section</code> 24px - section gaps</div>
              </div>
            </div>
          </div>
        </SubSection>
      </Section>

      {/* Border Radius */}
      <Section title="Border Radius">
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-none)' }} />
            <div className="text-caption mt-2">none</div>
            <code className="text-caption text-[var(--muted)]">0px</code>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-sm)' }} />
            <div className="text-caption mt-2">sm</div>
            <code className="text-caption text-[var(--muted)]">4px</code>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-md)' }} />
            <div className="text-caption mt-2">md</div>
            <code className="text-caption text-[var(--muted)]">6px</code>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-lg)' }} />
            <div className="text-caption mt-2">lg</div>
            <code className="text-caption text-[var(--muted)]">8px</code>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-xl)' }} />
            <div className="text-caption mt-2">xl</div>
            <code className="text-caption text-[var(--muted)]">12px</code>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)]" style={{ borderRadius: 'var(--radius-full)' }} />
            <div className="text-caption mt-2">full</div>
            <code className="text-caption text-[var(--muted)]">pill</code>
          </div>
        </div>
      </Section>

      {/* Control Heights */}
      <Section title="Control Heights">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center px-4"
              style={{ height: 'var(--control-height-sm)', minWidth: '120px' }}
            >
              Small
            </div>
            <code className="text-caption text-[var(--muted)]">--control-height-sm: 32px</code>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center px-4"
              style={{ height: 'var(--control-height-md)', minWidth: '120px' }}
            >
              Default
            </div>
            <code className="text-caption text-[var(--muted)]">--control-height-md: 40px (default)</code>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center px-4"
              style={{ height: 'var(--control-height-lg)', minWidth: '120px' }}
            >
              Large
            </div>
            <code className="text-caption text-[var(--muted)]">--control-height-lg: 48px</code>
          </div>
        </div>
      </Section>

      {/* Components */}
      <Section title="Components">
        <SubSection title="Card">
          <div className="card p-4">
            <h4 className="text-title mb-2">Card Title</h4>
            <p className="text-body text-[var(--muted)]">
              Cards use <code>--card-padding</code> (16px) by default.
              For larger cards with more content, use <code>--card-padding-lg</code> (20px).
            </p>
          </div>
        </SubSection>

        <SubSection title="Badge">
          <div className="flex flex-wrap gap-3">
            <span className="badge">Default</span>
            <span className="badge badge-accent">Accent</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
          </div>
        </SubSection>

        <SubSection title="Filter Chips">
          <div className="flex flex-wrap" style={{ gap: 'var(--chip-gap)' }}>
            <button className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 text-sm" style={{ height: 'var(--chip-height)' }}>
              Not Selected
            </button>
            <button className="flex items-center gap-2 bg-[var(--card)] border border-[var(--accent)] text-[var(--foreground)] rounded-full px-4 text-sm" style={{ height: 'var(--chip-height)' }}>
              Selected
            </button>
          </div>
        </SubSection>

        <SubSection title="Buttons">
          <div className="flex flex-wrap gap-3">
            <button
              className="bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] transition-colors"
              style={{
                height: 'var(--control-height-default)',
                padding: '0 var(--button-padding-x)'
              }}
            >
              Primary Button
            </button>
            <button
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg hover:border-[var(--muted)] transition-colors"
              style={{
                height: 'var(--control-height-default)',
                padding: '0 var(--button-padding-x)'
              }}
            >
              Secondary Button
            </button>
          </div>
        </SubSection>
      </Section>

      {/* List Bullets Semantic Guide */}
      <Section title="List Bullet Semantics">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card p-4">
            <h4 className="text-label mb-3">General List</h4>
            <ul className="space-y-1 text-body text-[var(--muted)]">
              <li className="flex gap-2"><span>•</span> Default bullet for unordered items</li>
              <li className="flex gap-2"><span>•</span> Neutral, informational content</li>
            </ul>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-3">Actions / Steps</h4>
            <ul className="space-y-1 text-body text-[var(--muted)]">
              <li className="flex gap-2"><span className="text-[var(--accent-light)]">→</span> Sequential actions</li>
              <li className="flex gap-2"><span className="text-[var(--accent-light)]">→</span> Directions or outcomes</li>
            </ul>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-3">Positive / Negative</h4>
            <ul className="space-y-1 text-body text-[var(--muted)]">
              <li className="flex gap-2"><span className="text-success">+</span> Positive factors (Why Join)</li>
              <li className="flex gap-2"><span>-</span> Negative factors (Why Not)</li>
            </ul>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-3">Flags</h4>
            <ul className="space-y-1 text-body text-[var(--muted)]">
              <li className="flex gap-2"><span className="text-success">✓</span> Green flags (positive signals)</li>
              <li className="flex gap-2"><span className="text-warning">!</span> Red flags (risks, concerns)</li>
            </ul>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-3">Challenges</h4>
            <ul className="space-y-1 text-body text-[var(--muted)]">
              <li className="flex gap-2"><span className="text-[var(--accent-light)]">◆</span> AI design challenges</li>
              <li className="flex gap-2"><span className="text-[var(--accent-light)]">◆</span> Technical complexities</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Link Styles */}
      <Section title="Link Styles">
        <div className="space-y-4">
          <div className="card p-4">
            <h4 className="text-label mb-2">Internal Link</h4>
            <Link href="/" className="text-[var(--accent-light)] hover:underline">
              Link to internal page
            </Link>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-2">External Link</h4>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-light)] hover:underline"
            >
              External link example ↗
            </a>
            <p className="text-caption text-[var(--muted)] mt-2">
              External links always include the ↗ icon
            </p>
          </div>
          <div className="card p-4">
            <h4 className="text-label mb-2">Navigation Link</h4>
            <span className="text-[var(--muted)] hover:text-[var(--foreground)] cursor-pointer">
              ← Back to list
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
