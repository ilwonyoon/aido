'use client';

import { useState } from 'react';
import type { CompanyFunding } from './types';

interface FundingTimelineProps {
  readonly company: CompanyFunding;
}

export function FundingTimeline({ company }: FundingTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { rounds, color } = company;

  const maxMonths = rounds[rounds.length - 1].monthsFromSeed;
  const paddingLeft = 60;
  const paddingRight = 60;
  const svgWidth = 800;
  const usableWidth = svgWidth - paddingLeft - paddingRight;

  const getX = (months: number) =>
    paddingLeft + (maxMonths > 0 ? (months / maxMonths) * usableWidth : 0);

  const nodeRadius = 6;
  const lineY = 70;

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.25rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.125rem' }}>{company.emoji}</span>
        <span
          style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--foreground)',
          }}
        >
          {company.name}
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
          {company.seedToSeriesBMonths}mo Seed to Series B
        </span>
      </div>

      {/* SVG Timeline */}
      <svg
        viewBox={`0 0 ${svgWidth} 140`}
        width="100%"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Connecting line */}
        <line
          x1={getX(0)}
          y1={lineY}
          x2={getX(maxMonths)}
          y2={lineY}
          stroke="var(--border)"
          strokeWidth={2}
        />

        {/* Duration segments */}
        {rounds.slice(1).map((round, i) => {
          const prevRound = rounds[i];
          const x1 = getX(prevRound.monthsFromSeed);
          const x2 = getX(round.monthsFromSeed);
          const midX = (x1 + x2) / 2;
          const gap = round.monthsFromSeed - prevRound.monthsFromSeed;

          return (
            <g key={`seg-${round.name}`}>
              {/* Colored segment */}
              <line
                x1={x1}
                y1={lineY}
                x2={x2}
                y2={lineY}
                stroke={color}
                strokeWidth={2}
                opacity={hoveredIndex !== null && hoveredIndex !== i && hoveredIndex !== i + 1 ? 0.3 : 0.6}
                style={{ transition: 'opacity 0.15s ease' }}
              />
              {/* Duration label */}
              <text
                x={midX}
                y={lineY + 24}
                textAnchor="middle"
                fill="var(--muted)"
                fontSize="11"
                fontFamily="var(--font-mono, monospace)"
              >
                {gap}mo
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {rounds.map((round, i) => {
          const cx = getX(round.monthsFromSeed);
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && !isHovered;

          return (
            <g
              key={round.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Hover ring */}
              <circle
                cx={cx}
                cy={lineY}
                r={nodeRadius + 6}
                fill="transparent"
              />
              {/* Outer ring */}
              <circle
                cx={cx}
                cy={lineY}
                r={isHovered ? nodeRadius + 3 : nodeRadius}
                fill={isHovered ? color : 'var(--card)'}
                stroke={color}
                strokeWidth={2}
                opacity={isDimmed ? 0.4 : 1}
                style={{ transition: 'all 0.15s ease' }}
              />
              {/* Inner dot */}
              <circle
                cx={cx}
                cy={lineY}
                r={3}
                fill={color}
                opacity={isDimmed ? 0.4 : 1}
                style={{ transition: 'opacity 0.15s ease' }}
              />

              {/* Round name */}
              <text
                x={cx}
                y={lineY - 28}
                textAnchor="middle"
                fill={isDimmed ? 'var(--muted-dim)' : 'var(--foreground)'}
                fontSize="11"
                fontWeight={600}
                style={{ transition: 'fill 0.15s ease' }}
              >
                {round.name}
              </text>

              {/* Amount */}
              <text
                x={cx}
                y={lineY - 14}
                textAnchor="middle"
                fill={isDimmed ? 'var(--muted-dim)' : color}
                fontSize="12"
                fontWeight={700}
                fontFamily="var(--font-mono, monospace)"
                style={{ transition: 'fill 0.15s ease' }}
              >
                {round.amount}
              </text>

              {/* Date */}
              <text
                x={cx}
                y={lineY + 42}
                textAnchor="middle"
                fill={isDimmed ? 'var(--muted-dim)' : 'var(--muted)'}
                fontSize="10"
                style={{ transition: 'fill 0.15s ease' }}
              >
                {round.date}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Footer stats */}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          fontSize: '0.75rem',
          color: 'var(--muted)',
          fontFamily: 'var(--font-mono, monospace)',
        }}
      >
        <span>Total: {company.totalFunding}</span>
        <span>Valuation: {company.currentValuation}</span>
      </div>
    </div>
  );
}
