'use client'

import { useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { PreviewNavigation, PreviewCompanyList, PreviewCompanyDetail, PreviewArticle, PreviewAbout } from './SitePreview'
import { PageBackground } from './Interactions'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jb-mono',
})

type Section = 'list' | 'detail' | 'article' | 'about'

const sections: { id: Section; label: string }[] = [
  { id: 'list', label: 'Company List' },
  { id: 'detail', label: 'Company Detail' },
  { id: 'article', label: 'Article' },
  { id: 'about', label: 'About' },
]

export default function DesignRefreshPage() {
  const [activeSection, setActiveSection] = useState<Section>('list')

  return (
    <div className={jetbrainsMono.variable}>
      <style>{`
        /* ── Break out of parent max-w container ───── */
        .full-bleed {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
        }

        .mono-scope {
          font-family: var(--font-jb-mono), monospace;
          line-height: 1.7;
          letter-spacing: -0.01em;
        }

        /* ── Typography scale ─────────────────────────── */

        .mono-scope .text-4xl { font-size: 1.412rem !important; letter-spacing: -0.035em; line-height: 1.15; }
        .mono-scope .text-3xl { font-size: 1.294rem !important; letter-spacing: -0.03em; line-height: 1.2; }
        .mono-scope .text-2xl { font-size: 1.176rem !important; letter-spacing: -0.025em; line-height: 1.25; }
        .mono-scope .text-xl  { font-size: 1.029rem !important; letter-spacing: -0.02em; line-height: 1.3; }
        .mono-scope .text-lg  { font-size: 0.882rem !important; letter-spacing: -0.015em; line-height: 1.35; }
        .mono-scope .text-base { font-size: 0.882rem !important; line-height: 1.7; }
        .mono-scope .text-sm  { font-size: 0.765rem !important; line-height: 1.65; }
        .mono-scope .text-xs  { font-size: 0.676rem !important; letter-spacing: 0.01em; line-height: 1.5; }

        @media (min-width: 640px) {
          .mono-scope .sm\\:text-4xl { font-size: 1.412rem !important; letter-spacing: -0.035em; line-height: 1.15; }
        }

        /* ── Component classes ────────────────────────── */
        .mono-scope .section-title { font-size: 0.676rem !important; letter-spacing: 0.08em; }
        .mono-scope .badge { font-size: 0.676rem !important; letter-spacing: 0.01em; }

        /* ── Article content ──────────────────────────── */
        .mono-scope .article-content h2 { font-size: 1.176rem !important; letter-spacing: -0.03em; line-height: 1.2; }
        .mono-scope .article-content h3 { font-size: 1.029rem !important; letter-spacing: -0.02em; line-height: 1.25; }
        .mono-scope .article-content h4 { font-size: 0.882rem !important; letter-spacing: -0.015em; line-height: 1.3; }
        .mono-scope .article-content p,
        .mono-scope .article-content li { font-size: 0.882rem; line-height: 1.8; }

        /* ── Token typography utilities ────────────────── */
        .mono-scope .text-display  { font-size: 1.294rem !important; letter-spacing: -0.035em; }
        .mono-scope .text-headline { font-size: 1.176rem !important; letter-spacing: -0.025em; }
        .mono-scope .text-title    { font-size: 0.882rem !important; letter-spacing: -0.015em; }
        .mono-scope .text-body-lg  { font-size: 0.882rem !important; }
        .mono-scope .text-body     { font-size: 0.765rem !important; }
        .mono-scope .text-label    { font-size: 0.765rem !important; letter-spacing: 0.02em; }
        .mono-scope .text-caption  { font-size: 0.676rem !important; letter-spacing: 0.01em; }

        /* ── Flowing gradient background ─────────────── */
        .page-gradient {
          background-size: 400% 400%;
          background-image: linear-gradient(-45deg, #e8eeff, #ffe8f4, #e8fffa, #f0f4ff, #fafafa);
          animation: gradientFlow 50s ease infinite;
        }
        [data-theme="dark"] .page-gradient {
          background-image: linear-gradient(-45deg, #0e0e1c, #140e17, #0e1515, #15130a, #0c0c12);
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Card styles ─────────────────────────────── */
        .mono-scope .card {
          background: var(--card);
          border-color: var(--border);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .mono-scope .card:hover {
          border-color: var(--muted);
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        [data-theme="dark"] .mono-scope .card {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%),
            var(--card);
          border-color: rgba(255,255,255,0.06);
        }
        [data-theme="dark"] .mono-scope .card:hover {
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Full-width preview */}
      <div className="full-bleed">
        {/* Floating section tabs */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1 bg-[var(--card)]/90 backdrop-blur-md rounded-lg border border-[var(--border)] shadow-lg">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === s.id
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className="mono-scope min-h-screen relative overflow-hidden">
          <PageBackground />
          <div className="relative z-10">
            <PreviewNavigation />
            <div className="border-t border-[var(--border)]">
              {activeSection === 'list' && <PreviewCompanyList />}
              {activeSection === 'detail' && <PreviewCompanyDetail />}
              {activeSection === 'article' && <PreviewArticle />}
              {activeSection === 'about' && <PreviewAbout />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
