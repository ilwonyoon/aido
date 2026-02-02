'use client';

import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  getChartColor,
  createTooltip,
  showTooltip,
  hideTooltip,
  formatNumber,
  formatPercent,
} from './d3-utils';

export interface DonutDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface DonutChartProps {
  readonly data: readonly DonutDataPoint[];
  readonly size?: number;
  readonly innerRadiusRatio?: number;
  readonly centerLabel?: string;
  readonly centerValue?: string | number;
}

export function DonutChart({
  data,
  size = 220,
  innerRadiusRatio = 0.6,
  centerLabel,
  centerValue,
}: DonutChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || data.length === 0) return;

    const total = data.reduce((sum, d) => sum + d.value, 0);
    if (total === 0) return;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${size} ${size}`);

    const radius = size / 2;
    const innerRadius = radius * innerRadiusRatio;

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${radius},${radius})`);

    const pie = d3
      .pie<DonutDataPoint>()
      .value((d) => d.value)
      .sort(null)
      .padAngle(0.02);

    const arc = d3
      .arc<d3.PieArcDatum<DonutDataPoint>>()
      .innerRadius(innerRadius)
      .outerRadius(radius - 4)
      .cornerRadius(3);

    const hoverArc = d3
      .arc<d3.PieArcDatum<DonutDataPoint>>()
      .innerRadius(innerRadius)
      .outerRadius(radius - 1)
      .cornerRadius(3);

    const tooltip = createTooltip(container);

    g.selectAll('.arc')
      .data(pie([...data]))
      .join('path')
      .attr('class', 'arc')
      .attr('d', (d) => arc(d) || '')
      .attr('fill', (_, i) => data[i].color || getChartColor(i))
      .attr('opacity', 0.85)
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.15s ease')
      .on('mouseenter', function (event, d) {
        d3.select(this).attr('d', hoverArc(d) || '').attr('opacity', 1);
        const pct = formatPercent((d.data.value / total) * 100);
        showTooltip(
          tooltip,
          `<strong>${d.data.label}</strong><br/>${formatNumber(d.data.value)} (${pct})`,
          event
        );
      })
      .on('mouseleave', function (_, d) {
        d3.select(this).attr('d', arc(d) || '').attr('opacity', 0.85);
        hideTooltip(tooltip);
      });

    // Center text
    if (centerValue !== undefined) {
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', centerLabel ? '-0.2em' : '0.35em')
        .attr('fill', 'var(--foreground)')
        .attr('font-size', '20px')
        .attr('font-weight', '700')
        .attr('font-family', 'var(--font-mono, monospace)')
        .text(String(centerValue));

      if (centerLabel) {
        g.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '1.2em')
          .attr('fill', 'var(--muted)')
          .attr('font-size', '10px')
          .text(centerLabel);
      }
    }

    return () => {
      tooltip.remove();
    };
  }, [data, size, innerRadiusRatio, centerLabel, centerValue]);

  // Legend
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <svg ref={svgRef} width={size} height={size} style={{ flexShrink: 0 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '100px' }}>
        {data.map((d, i) => (
          <div
            key={d.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: d.color || getChartColor(i),
                flexShrink: 0,
              }}
            />
            <span style={{ color: 'var(--muted)', flex: 1 }}>{d.label}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                color: 'var(--foreground)',
              }}
            >
              {total > 0 ? formatPercent((d.value / total) * 100) : '0%'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
