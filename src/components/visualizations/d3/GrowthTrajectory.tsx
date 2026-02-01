'use client';

import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import type { CompanyNumeric } from '@/data/articles/visualizations/fastest-seed-numeric';

interface Props {
  readonly companies: readonly CompanyNumeric[];
}

export function GrowthTrajectory({ companies }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeCompanies, setActiveCompanies] = useState<Set<string>>(
    new Set(companies.map((c) => c.id))
  );

  const toggleCompany = (id: string) => {
    setActiveCompanies((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = 700;
    const height = 380;
    const margin = { top: 20, right: 90, bottom: 40, left: 70 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Get max values across active companies
    const activeData = companies.filter((c) => activeCompanies.has(c.id));
    const maxMonths = d3.max(activeData, (c) =>
      d3.max(c.rounds, (r) => r.monthsFromSeed)
    ) ?? 36;
    const maxCumulative = d3.max(activeData, (c) =>
      d3.max(c.rounds, (r) => r.cumulativeM)
    ) ?? 1000;

    // Scales
    const x = d3.scaleLinear().domain([0, maxMonths + 2]).range([0, innerW]);
    const y = d3
      .scaleLog()
      .domain([1, maxCumulative * 1.3])
      .range([innerH, 0])
      .clamp(true);

    // Grid
    const yTicks = [1, 10, 100, 1000, 10000, 50000].filter(
      (v) => v <= maxCumulative * 1.5
    );
    g.selectAll('.grid-h')
      .data(yTicks)
      .join('line')
      .attr('class', 'grid-h')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', (d) => y(d))
      .attr('y2', (d) => y(d))
      .attr('stroke', 'var(--border)')
      .attr('stroke-dasharray', '2,4');

    // X-axis
    g.append('g')
      .attr('transform', `translate(0,${innerH})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(6)
          .tickFormat((d) => `${d}mo`)
      )
      .call((sel) => {
        sel.select('.domain').attr('stroke', 'var(--border)');
        sel.selectAll('.tick line').attr('stroke', 'var(--border)');
        sel
          .selectAll('.tick text')
          .attr('fill', 'var(--muted)')
          .attr('font-size', '10px')
          .attr('font-family', 'var(--font-mono, monospace)');
      });

    // Y-axis
    g.append('g')
      .call(
        d3
          .axisLeft(y)
          .tickValues(yTicks)
          .tickFormat((d) => {
            const val = d as number;
            if (val >= 1000) return `$${(val / 1000).toFixed(0)}B`;
            return `$${val}M`;
          })
      )
      .call((sel) => {
        sel.select('.domain').attr('stroke', 'var(--border)');
        sel.selectAll('.tick line').attr('stroke', 'var(--border)');
        sel
          .selectAll('.tick text')
          .attr('fill', 'var(--muted)')
          .attr('font-size', '10px')
          .attr('font-family', 'var(--font-mono, monospace)');
      });

    // Y-axis label
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerH / 2)
      .attr('y', -55)
      .attr('text-anchor', 'middle')
      .attr('fill', 'var(--muted)')
      .attr('font-size', '10px')
      .text('Cumulative Funding (log)');

    // Line generator
    const line = d3
      .line<{ monthsFromSeed: number; cumulativeM: number }>()
      .x((d) => x(d.monthsFromSeed))
      .y((d) => y(Math.max(1, d.cumulativeM)))
      .curve(d3.curveMonotoneX);

    // Draw lines + dots
    companies.forEach((company) => {
      const isActive = activeCompanies.has(company.id);
      const opacity = isActive ? 1 : 0.1;

      // Line
      g.append('path')
        .datum(company.rounds.filter((r) => r.cumulativeM > 0))
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', company.color)
        .attr('stroke-width', isActive ? 2.5 : 1)
        .attr('stroke-opacity', opacity)
        .style('transition', 'all 0.3s ease');

      // Dots
      g.selectAll(`.dot-${company.id}`)
        .data(company.rounds.filter((r) => r.cumulativeM > 0))
        .join('circle')
        .attr('cx', (d) => x(d.monthsFromSeed))
        .attr('cy', (d) => y(Math.max(1, d.cumulativeM)))
        .attr('r', isActive ? 4 : 2)
        .attr('fill', company.color)
        .attr('fill-opacity', opacity)
        .style('transition', 'all 0.3s ease');

      // End label
      const lastRound = company.rounds[company.rounds.length - 1];
      if (lastRound.cumulativeM > 0) {
        g.append('text')
          .attr('x', x(lastRound.monthsFromSeed) + 8)
          .attr('y', y(Math.max(1, lastRound.cumulativeM)))
          .attr('dy', '0.35em')
          .attr('fill', company.color)
          .attr('fill-opacity', opacity)
          .attr('font-size', '10px')
          .attr('font-weight', 600)
          .text(company.name)
          .style('transition', 'all 0.3s ease');
      }
    });
  }, [companies, activeCompanies]);

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <div>
          <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--foreground)' }}>
            Cumulative Funding Over Time
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.75rem' }}>
            Log scale | Click to toggle
          </span>
        </div>
      </div>

      {/* Legend toggles */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {companies.map((c) => (
          <button
            key={c.id}
            onClick={() => toggleCompany(c.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: activeCompanies.has(c.id) ? 'var(--card-hover)' : 'transparent',
              opacity: activeCompanies.has(c.id) ? 1 : 0.4,
              cursor: 'pointer',
              fontSize: '0.75rem',
              color: c.color,
              fontWeight: 500,
              transition: 'all 0.15s ease',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: c.color,
                display: 'inline-block',
              }}
            />
            {c.name}
          </button>
        ))}
      </div>

      <svg ref={svgRef} width="100%" style={{ display: 'block' }} />
    </div>
  );
}
