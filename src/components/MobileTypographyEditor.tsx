'use client'

import { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SCALE = [
  { label: '4xl', rem: 1.412, letterSpacing: '-0.035em', lineHeight: '1.15' },
  { label: '3xl', rem: 1.294, letterSpacing: '-0.03em', lineHeight: '1.2' },
  { label: '2xl', rem: 1.176, letterSpacing: '-0.025em', lineHeight: '1.25' },
  { label: 'xl', rem: 1.029, letterSpacing: '-0.02em', lineHeight: '1.3' },
  { label: 'lg', rem: 0.882, letterSpacing: '-0.015em', lineHeight: '1.35' },
  { label: 'base', rem: 0.882, letterSpacing: '', lineHeight: '1.7' },
  { label: 'sm', rem: 0.765, letterSpacing: '', lineHeight: '1.65' },
  { label: 'xs', rem: 0.706, letterSpacing: '0.01em', lineHeight: '1.5' },
] as const

const ARTICLE_SCALE = [
  { selector: 'h1', rem: 1.412, letterSpacing: '-0.035em' },
  { selector: 'h2', rem: 1.176, letterSpacing: '-0.03em' },
  { selector: 'h3', rem: 1.029, letterSpacing: '-0.02em' },
  { selector: 'h4', rem: 0.882, letterSpacing: '-0.015em' },
  { selector: 'p', rem: 0.882, letterSpacing: '' },
  { selector: 'li', rem: 0.882, letterSpacing: '' },
] as const

const HTML_BASE = 17
const CURRENT_BODY_PX = 15
const DEFAULT_TARGET_BODY = 17

const NAV_PAGES = [
  { label: 'List', href: '/' },
  { label: 'Detail', href: '/company/anthropic' },
  { label: 'About', href: '/about' },
] as const

function buildOverrideCSS(scaleFactor: number): string {
  const scaled = (rem: number) => (rem * scaleFactor).toFixed(3)
  const rules: string[] = []

  for (const s of SCALE) {
    const ls = s.letterSpacing ? ` letter-spacing: ${s.letterSpacing} !important;` : ''
    rules.push(`.text-${s.label} { font-size: ${scaled(s.rem)}rem !important;${ls} line-height: ${s.lineHeight} !important; }`)
  }

  rules.push(
    `@media (min-width: 640px) {`,
    `  .sm\\:text-4xl { font-size: ${scaled(1.412)}rem !important; letter-spacing: -0.035em !important; line-height: 1.15 !important; }`,
    `  .sm\\:text-3xl { font-size: ${scaled(1.294)}rem !important; letter-spacing: -0.03em !important; line-height: 1.2 !important; }`,
    `}`,
  )

  rules.push(`body { font-size: ${scaled(0.882)}rem !important; }`)

  for (const a of ARTICLE_SCALE) {
    const ls = a.letterSpacing ? ` letter-spacing: ${a.letterSpacing} !important;` : ''
    rules.push(`.article-content ${a.selector} { font-size: ${scaled(a.rem)}rem !important;${ls} }`)
  }

  rules.push(
    `.section-title { font-size: ${scaled(0.706)}rem !important; }`,
    `.badge { font-size: ${scaled(0.706)}rem !important; }`,
  )

  return rules.join('\n')
}

function generateCSSExport(scaleFactor: number): string {
  const scaled = (rem: number) => (rem * scaleFactor).toFixed(3)
  const toPx = (rem: number) => (rem * HTML_BASE * scaleFactor).toFixed(1)

  const lines = [
    `/* Mobile Typography — body: ${toPx(0.882)}px, scale: ${scaleFactor.toFixed(3)}x */`,
    '',
  ]

  for (const s of SCALE) {
    const ls = s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : ''
    lines.push(`.text-${s.label} { font-size: ${scaled(s.rem)}rem;${ls} line-height: ${s.lineHeight}; } /* ${toPx(s.rem)}px */`)
  }

  lines.push('', `body { font-size: ${scaled(0.882)}rem; }`, '')

  for (const a of ARTICLE_SCALE) {
    lines.push(`.article-content ${a.selector} { font-size: ${scaled(a.rem)}rem; }`)
  }

  lines.push('', `.section-title { font-size: ${scaled(0.706)}rem; }`, `.badge { font-size: ${scaled(0.706)}rem; }`)

  return lines.join('\n')
}

export function MobileTypographyEditor() {
  const [open, setOpen] = useState(false)
  const [bodyTarget, setBodyTarget] = useState(DEFAULT_TARGET_BODY)
  const [copied, setCopied] = useState(false)
  const sliderRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const scaleFactor = bodyTarget / CURRENT_BODY_PX
  const overrideCSS = useMemo(() => buildOverrideCSS(scaleFactor), [scaleFactor])
  const sliderPercent = ((bodyTarget - 12) / 12) * 100

  // Prevent page scroll while dragging slider
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const prevent = (e: TouchEvent) => e.preventDefault()
    el.addEventListener('touchmove', prevent, { passive: false })
    return () => el.removeEventListener('touchmove', prevent)
  }, [open])

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBodyTarget(parseFloat(e.target.value))
  }, [])

  const handleCopy = useCallback(() => {
    const css = generateCSSExport(scaleFactor)
    navigator.clipboard.writeText(css)
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1500)
  }, [scaleFactor])

  const activePage = NAV_PAGES.find((p) => p.href === pathname)?.label ?? 'List'

  return (
    <>
      {open && <style dangerouslySetInnerHTML={{ __html: overrideCSS }} />}

      {/* Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          position: 'fixed',
          zIndex: 300,
          bottom: open ? '140px' : '16px',
          right: '16px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
          background: open ? 'var(--accent)' : 'var(--card)',
          border: `1px solid ${open ? 'var(--accent)' : 'var(--border)'}`,
          color: open ? '#fff' : 'var(--muted)',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'bottom 0.25s ease, background 0.15s ease',
        }}
      >
        Aa
      </button>

      {/* Compact bottom bar */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 250,
            overflow: 'hidden',
            background: 'rgba(17, 17, 17, 0.97)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            animation: 'typoSlideUp 0.25s ease',
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes typoSlideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
          `}} />

          {/* Row 1: Page tabs */}
          <div style={{
            display: 'flex',
            gap: '4px',
            padding: '8px 16px 6px',
          }}>
            {NAV_PAGES.map((page) => {
              const isActive = activePage === page.label
              return (
                <button
                  key={page.label}
                  onClick={() => router.push(page.href)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {page.label}
                </button>
              )
            })}
          </div>

          {/* Row 2: Body size + slider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '6px 16px',
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.4)',
              flexShrink: 0,
            }}>
              Body
            </span>
            <span style={{
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'monospace',
              color: bodyTarget === CURRENT_BODY_PX ? 'var(--muted)' : 'var(--accent-light)',
              width: '52px',
              flexShrink: 0,
            }}>
              {bodyTarget.toFixed(1)}
            </span>
            <input
              ref={sliderRef}
              type="range"
              min={12}
              max={24}
              step={0.5}
              value={bodyTarget}
              onChange={handleSliderChange}
              style={{
                flex: 1,
                height: '20px',
                appearance: 'none',
                WebkitAppearance: 'none',
                cursor: 'pointer',
                touchAction: 'none',
                background: 'transparent',
              }}
            />
            <span style={{
              fontSize: '10px',
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.25)',
              flexShrink: 0,
            }}>
              {scaleFactor.toFixed(2)}x
            </span>
          </div>

          {/* Row 3: Actions */}
          <div style={{
            display: 'flex',
            gap: '6px',
            padding: '6px 16px 12px',
          }}>
            <button
              onClick={handleCopy}
              style={{
                flex: 1,
                padding: '6px 0',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                background: copied ? 'var(--success)' : 'var(--accent)',
                color: '#fff',
              }}
            >
              {copied ? 'Copied' : 'Copy CSS'}
            </button>
            <button
              onClick={() => setBodyTarget(DEFAULT_TARGET_BODY)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 500,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
              }}
            >
              17
            </button>
            <button
              onClick={() => setBodyTarget(CURRENT_BODY_PX)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 500,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
              }}
            >
              15
            </button>
          </div>

          {/* Slider track style */}
          <style dangerouslySetInnerHTML={{ __html: `
            input[type="range"]::-webkit-slider-runnable-track {
              height: 4px;
              border-radius: 2px;
              background: linear-gradient(to right, var(--accent) 0%, var(--accent) ${sliderPercent}%, rgba(255,255,255,0.12) ${sliderPercent}%, rgba(255,255,255,0.12) 100%);
            }
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #fff;
              border: 2px solid var(--accent);
              margin-top: -8px;
              cursor: pointer;
            }
            input[type="range"]::-moz-range-track {
              height: 4px;
              border-radius: 2px;
              background: linear-gradient(to right, var(--accent) 0%, var(--accent) ${sliderPercent}%, rgba(255,255,255,0.12) ${sliderPercent}%, rgba(255,255,255,0.12) 100%);
            }
            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #fff;
              border: 2px solid var(--accent);
              cursor: pointer;
            }
          `}} />
        </div>
      )}
    </>
  )
}
