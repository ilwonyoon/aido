'use client';

import { useState } from 'react';
import type { CompanyFunding } from './types';

interface ComparisonChartProps {
  readonly companies: readonly CompanyFunding[];
  readonly industryAverage: { readonly min: number; readonly max: number };
}

export function ComparisonChart({ companies, industryAverage }: ComparisonChartProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sorted = [...companies].sort(
    (a, b) => a.seedToSeriesBMonths - b.seedToSeriesBMonths
  );

  const maxMonths = 55;
  const barHeight = 28;
  const barGap = 14;
  const leftMargin = 110;
  const rightMargin = 100;
  const topPadding = 30;
  const svgWidth = 800;
  const usableWidth = svgWidth - leftMargin - rightMargin;
  const svgHeight = topPadding + sorted.length * (barHeight + barGap) + 50;

  const getBarWidth = (months: number) => (months / maxMonths) * usableWidth;
  const getX = (months: number) => leftMargin + getBarWidth(months);

  const avgMonths =
    sorted.reduce((sum, c) => sum + c.seedToSeriesBMonths, 0) / sorted.length;

  const gridLines = [12, 24, 36, 48];

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.25rem',
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '0.75rem' }}>
        <span
          style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            color: 'var(--foreground)',
            letterSpacing: '-0.01em',
          }}
        >
          Seed to Series B: The Speed Champions
        </span>
      </div>

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width="100%"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Grid lines */}
        {gridLines.map((months) => (
          <g key={`grid-${months}`}>
            <line
              x1={getX(months)}
              y1={topPadding - 10}
              x2={getX(months)}
              y2={svgHeight - 40}
              stroke="var(--border)"
              strokeWidth={1}
              strokeDasharray="3,3"
            />
            <text
              x={getX(months)}
              y={topPadding - 14}
              textAnchor="middle"
              fill="var(--muted)"
              fontSize="9"
              fontFamily="var(--font-mono, monospace)"
            >
              {months}mo
            </text>
          </g>
        ))}

        {/* Industry average zone */}
        <rect
          x={getX(industryAverage.min)}
          y={topPadding - 10}
          width={getBarWidth(industryAverage.max - industryAverage.min)}
          height={svgHeight - 40 - (topPadding - 10)}
          fill="var(--warning)"
          opacity={0.06}
          rx={4}
        />
        <text
          x={getX((industryAverage.min + industryAverage.max) / 2)}
          y={svgHeight - 32}
          textAnchor="middle"
          fill="var(--warning)"
          fontSize="9"
          opacity={0.7}
          fontFamily="var(--font-mono, monospace)"
        >
          Industry avg {industryAverage.min}-{industryAverage.max}mo
        </text>

        {/* Average line */}
        <line
          x1={getX(avgMonths)}
          y1={topPadding - 10}
          x2={getX(avgMonths)}
          y2={svgHeight - 40}
          stroke="var(--accent)"
          strokeWidth={1.5}
          strokeDasharray="4,4"
        />
        <text
          x={getX(avgMonths)}
          y={svgHeight - 44}
          textAnchor="middle"
          fill="var(--accent)"
          fontSize="9"
          fontWeight={600}
          fontFamily="var(--font-mono, monospace)"
        >
          avg {avgMonths.toFixed(1)}mo
        </text>

        {/* Bars */}
        {sorted.map((company, i) => {
          const y = topPadding + i * (barHeight + barGap);
          const width = getBarWidth(company.seedToSeriesBMonths);
          const isHovered = hoveredId === company.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
            <g
              key={company.id}
              onMouseEnter={() => setHoveredId(company.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Hover area */}
              <rect
                x={0}
                y={y - 2}
                width={svgWidth}
                height={barHeight + 4}
                fill="transparent"
              />

              {/* Company name */}
              <text
                x={leftMargin - 8}
                y={y + barHeight / 2 + 1}
                textAnchor="end"
                dominantBaseline="middle"
                fill={isDimmed ? 'var(--muted-dim)' : 'var(--foreground)'}
                fontSize="12"
                fontWeight={isHovered ? 700 : 500}
                style={{ transition: 'all 0.15s ease' }}
              >
                {company.emoji} {company.name}
              </text>

              {/* Bar background */}
              <rect
                x={leftMargin}
                y={y}
                width={usableWidth}
                height={barHeight}
                rx={4}
                fill="var(--background)"
                stroke="var(--border)"
                strokeWidth={0.5}
              />

              {/* Bar fill */}
              <rect
                x={leftMargin}
                y={y}
                width={width}
                height={barHeight}
                rx={4}
                fill={company.color}
                opacity={isDimmed ? 0.2 : isHovered ? 0.5 : 0.35}
                style={{ transition: 'opacity 0.15s ease' }}
              />

              {/* Month count inside bar */}
              <text
                x={leftMargin + width - 6}
                y={y + barHeight / 2 + 1}
                textAnchor="end"
                dominantBaseline="middle"
                fill={isDimmed ? 'var(--muted-dim)' : 'var(--foreground)'}
                fontSize="11"
                fontWeight={700}
                fontFamily="var(--font-mono, monospace)"
                style={{ transition: 'fill 0.15s ease' }}
              >
                {company.seedToSeriesBMonths}mo
              </text>

              {/* Valuation */}
              <text
                x={leftMargin + width + 8}
                y={y + barHeight / 2 + 1}
                textAnchor="start"
                dominantBaseline="middle"
                fill={isDimmed ? 'var(--muted-dim)' : company.color}
                fontSize="11"
                fontWeight={600}
                fontFamily="var(--font-mono, monospace)"
                style={{ transition: 'fill 0.15s ease' }}
              >
                {company.currentValuation}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Footer stats */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '0.5rem',
          fontSize: '0.75rem',
          color: 'var(--muted)',
          fontFamily: 'var(--font-mono, monospace)',
        }}
      >
        <span>
          Average: <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{avgMonths.toFixed(1)}mo</span>
        </span>
        <span>
          Industry: {industryAverage.min}-{industryAverage.max}mo
        </span>
        <span>
          Speedup: <span style={{ color: 'var(--success)', fontWeight: 600 }}>2.6-3.5x faster</span>
        </span>
      </div>
    </div>
  );
}
