'use client'

import { useState, useCallback, useRef } from 'react'

interface TypeStyle {
  label: string
  selector: string
  size: number
  color: string
  preview: string
}

const DEFAULT_STYLES: TypeStyle[] = [
  { label: 'H1', selector: 'h1', size: 1.412, color: '#ededed', preview: 'Page Title — Display' },
  { label: 'H2', selector: 'h2', size: 1.176, color: '#ededed', preview: 'Section Header' },
  { label: 'Subtitle', selector: '.typo-subtitle', size: 0.882, color: '#c7c7c7', preview: 'Page subtitle / description' },
  { label: 'Body', selector: '.typo-body p', size: 0.882, color: '#888888', preview: 'Body text paragraph' },
  { label: 'Strong', selector: 'strong', size: 0.882, color: '#ededed', preview: 'Emphasis / highlight' },
  { label: 'Button', selector: '.typo-btn', size: 0.882, color: '#ffffff', preview: 'CTA Button Label' },
  { label: 'Small', selector: '.typo-small', size: 0.676, color: '#666666', preview: 'Caption / metadata' },
  { label: 'Card Title', selector: '.typo-card-title', size: 0.765, color: '#ededed', preview: 'Card heading' },
  { label: 'Card Body', selector: '.typo-card-body', size: 0.765, color: '#888888', preview: 'Card description text' },
]

export function TypographyEditor() {
  const [styles, setStyles] = useState(DEFAULT_STYLES)
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = useCallback(
    (index: number, field: 'size' | 'color', value: number | string) => {
      setStyles((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)))
    },
    []
  )

  const handleReset = useCallback(() => setStyles(DEFAULT_STYLES), [])

  const handleCopy = useCallback(() => {
    const lines = styles.map(
      (s) => `${s.label}: ${s.size.toFixed(3)}rem / ${s.color}`
    )
    navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1500)
  }, [styles])

  // Build override CSS
  const overrideCss = styles
    .map((s) => {
      const rules = `font-size: ${s.size}rem !important; color: ${s.color} !important;`
      // Map selectors to actual page elements
      switch (s.label) {
        case 'H1':
          return `.about-typo-scope h1 { ${rules} }`
        case 'H2':
          return `.about-typo-scope h2 { ${rules} }`
        case 'Subtitle':
          return `.about-typo-scope > div:nth-child(2) p { ${rules} }`
        case 'Body':
          return `.about-typo-scope section p, .about-typo-scope section > div p { ${rules} }`
        case 'Strong':
          return `.about-typo-scope strong { ${rules} }`
        case 'Button':
          return `.about-typo-scope a.inline-flex { ${rules} }`
        case 'Small':
          return `.about-typo-scope > div:last-child { ${rules} }`
        case 'Card Title':
          return `.about-typo-scope .card .text-sm.font-medium { ${rules} }`
        case 'Card Body':
          return `.about-typo-scope .card .text-sm:not(.font-medium) { ${rules} }`
        default:
          return ''
      }
    })
    .join('\n')

  return (
    <>
      {open && <style>{overrideCss}</style>}

      {/* Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed top-4 right-4 z-[200] px-3 py-1.5 text-xs font-medium rounded-md border transition-colors"
        style={{
          background: open ? 'var(--accent)' : 'var(--card)',
          borderColor: open ? 'var(--accent)' : 'var(--border)',
          color: open ? '#fff' : 'var(--muted)',
        }}
      >
        {open ? 'Close' : 'Typo'}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed top-14 right-4 z-[200] w-72 max-h-[80vh] overflow-y-auto rounded-lg border shadow-2xl"
          style={{
            background: 'rgba(17, 17, 17, 0.95)',
            borderColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Header */}
          <div
            className="px-4 pt-3 pb-2 border-b sticky top-0"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: 'rgba(17, 17, 17, 0.98)',
            }}
          >
            <div
              className="text-xs font-semibold tracking-wide"
              style={{ color: 'var(--foreground)' }}
            >
              Typography Editor
            </div>
          </div>

          {/* Entries */}
          <div className="px-4 py-2 space-y-1">
            {styles.map((s, i) => (
              <div
                key={s.label}
                className="py-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Header: label + role */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: '#fff' }}
                  >
                    {s.label}
                  </span>
                  <span className="text-[10px]" style={{ color: '#666' }}>
                    {s.preview}
                  </span>
                </div>

                {/* Size row */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] w-7" style={{ color: '#888' }}>Size</span>
                  <input
                    type="range"
                    min={8}
                    max={68}
                    step={0.5}
                    value={Math.round(s.size * 17 * 2) / 2}
                    onChange={(e) => handleChange(i, 'size', Number(e.target.value) / 17)}
                    className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: 'linear-gradient(to right, #222 0%, #666 100%)',
                      accentColor: 'var(--accent)',
                    }}
                  />
                  <input
                    type="number"
                    min={1}
                    max={136}
                    step={0.5}
                    value={Math.round(s.size * 17 * 10) / 10}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value)
                      if (!isNaN(v)) handleChange(i, 'size', v / 17)
                    }}
                    className="w-[44px] text-[11px] font-mono text-right px-1 py-0.5 rounded border"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                    }}
                  />
                  <span className="text-[9px]" style={{ color: '#666' }}>px</span>
                </div>

                {/* Color row */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] w-7" style={{ color: '#888' }}>Color</span>
                  <input
                    type="color"
                    value={s.color.length === 7 ? s.color : '#888888'}
                    onChange={(e) => handleChange(i, 'color', e.target.value)}
                    className="w-5 h-5 rounded cursor-pointer border-0 p-0"
                    style={{ background: 'transparent' }}
                  />
                  <input
                    type="text"
                    value={s.color}
                    onChange={(e) => {
                      const v = e.target.value
                      if (/^#[0-9a-fA-F]{0,6}$/.test(v)) handleChange(i, 'color', v)
                    }}
                    className="w-[62px] text-[11px] font-mono px-1 py-0.5 rounded border"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                    }}
                  />
                  <span className="text-[9px] font-mono" style={{ color: '#555' }}>
                    {s.size.toFixed(2)}rem
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div
            className="px-4 py-3 flex gap-2 border-t sticky bottom-0"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: 'rgba(17, 17, 17, 0.98)',
            }}
          >
            <button
              onClick={handleCopy}
              className="flex-1 px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors"
              style={{
                background: copied ? 'var(--success)' : 'var(--accent)',
                color: '#fff',
              }}
            >
              {copied ? 'Copied!' : 'Copy Values'}
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-[11px] font-medium rounded-md border transition-colors"
              style={{
                background: 'transparent',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'var(--muted)',
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  )
}
