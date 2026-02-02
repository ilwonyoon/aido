'use client';

import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  createTooltip,
  showTooltip,
  hideTooltip,
  formatNumber,
  formatPercent,
  getChartColor,
} from './d3-utils';

export interface FunnelStep {
  label: string;
  value: number;
}

interface FunnelChartProps {
  readonly steps: readonly FunnelStep[];
  readonly height?: number;
}

export function FunnelChart({ steps, height = 240 }: FunnelChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || steps.length === 0) return;

    const width = container.clientWidth;
    const margin = { top: 8, right: 80, bottom: 8, left: 8 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const maxValue = steps[0]?.value ?? 1;
    const stepHeight = innerH / steps.length;
    const barPadding = 4;

    const tooltip = createTooltip(container);

    steps.forEach((step, i) => {
      const barWidth = maxValue > 0 ? (step.value / maxValue) * innerW : 0;
      const y = i * stepHeight;
      const color = getChartColor(i);
      const conversionRate =
        i > 0 && steps[i - 1].value > 0
          ? (step.value / steps[i - 1].value) * 100
          : 100;

      // Bar
      g.append('rect')
        .attr('x', (innerW - barWidth) / 2)
        .attr('y', y + barPadding)
        .attr('width', barWidth)
        .attr('height', stepHeight - barPadding * 2)
        .attr('fill', color)
        .attr('opacity', 0.75)
        .attr('rx', 4)
        .style('cursor', 'pointer')
        .on('mouseenter', function (event) {
          d3.select(this).attr('opacity', 1);
          let html = `<strong>${step.label}</strong>: ${formatNumber(step.value)}`;
          if (i > 0) {
            html += `<br/><span style="color:var(--muted)">Conv: ${formatPercent(conversionRate)}</span>`;
          }
          showTooltip(tooltip, html, event);
        })
        .on('mouseleave', function () {
          d3.select(this).attr('opacity', 0.75);
          hideTooltip(tooltip);
        });

      // Label
      g.append('text')
        .attr('x', innerW / 2)
        .attr('y', y + stepHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', 'var(--foreground)')
        .attr('font-size', '11px')
        .attr('font-weight', 600)
        .text(step.label);

      // Right side: value + conversion
      g.append('text')
        .attr('x', innerW + 8)
        .attr('y', y + stepHeight / 2)
        .attr('dy', i > 0 ? '-0.3em' : '0.35em')
        .attr('fill', 'var(--foreground)')
        .attr('font-size', '12px')
        .attr('font-weight', 600)
        .attr('font-family', 'var(--font-mono, monospace)')
        .text(formatNumber(step.value));

      if (i > 0) {
        g.append('text')
          .attr('x', innerW + 8)
          .attr('y', y + stepHeight / 2)
          .attr('dy', '1em')
          .attr('fill', conversionRate >= 50 ? 'var(--success)' : 'var(--warning)')
          .attr('font-size', '10px')
          .attr('font-family', 'var(--font-mono, monospace)')
          .text(`${formatPercent(conversionRate)} conv`);
      }
    });

    return () => {
      tooltip.remove();
    };
  }, [steps, height]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} width="100%" style={{ display: 'block' }} />
    </div>
  );
}
