'use client';

import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  styleAxis,
  drawHorizontalGrid,
  createTooltip,
  showTooltip,
  hideTooltip,
  formatNumber,
  DEFAULT_MARGIN,
} from './d3-utils';

export interface TrendDataPoint {
  date: string; // YYYY-MM-DD
  value: number;
}

interface TrendLineChartProps {
  readonly data: readonly TrendDataPoint[];
  readonly secondaryData?: readonly TrendDataPoint[];
  readonly label?: string;
  readonly secondaryLabel?: string;
  readonly color?: string;
  readonly secondaryColor?: string;
  readonly height?: number;
  readonly showArea?: boolean;
}

export function TrendLineChart({
  data,
  secondaryData,
  label = 'Value',
  secondaryLabel = 'Secondary',
  color = 'var(--accent)',
  secondaryColor = 'var(--success)',
  height = 240,
  showArea = true,
}: TrendLineChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || data.length === 0) return;

    const width = container.clientWidth;
    const margin = DEFAULT_MARGIN;
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Parse dates
    const parseDate = d3.timeParse('%Y-%m-%d');
    const parsed = data
      .map((d) => ({ date: parseDate(d.date)!, value: d.value }))
      .filter((d) => d.date != null)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const parsedSecondary = secondaryData
      ?.map((d) => ({ date: parseDate(d.date)!, value: d.value }))
      .filter((d) => d.date != null)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    // Scales
    const allDates = parsed.map((d) => d.date);
    const allValues = [
      ...parsed.map((d) => d.value),
      ...(parsedSecondary?.map((d) => d.value) || []),
    ];

    const x = d3
      .scaleTime()
      .domain(d3.extent(allDates) as [Date, Date])
      .range([0, innerW]);

    const y = d3
      .scaleLinear()
      .domain([0, (d3.max(allValues) ?? 0) * 1.1])
      .nice()
      .range([innerH, 0]);

    // Grid
    drawHorizontalGrid(g, y, innerW);

    // Axes
    const xAxis = g
      .append('g')
      .attr('transform', `translate(0,${innerH})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(Math.min(data.length, 7))
          .tickFormat((d) => d3.timeFormat('%m/%d')(d as Date))
      );
    styleAxis(xAxis, { hideDomain: true });

    const yAxis = g.append('g').call(
      d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat((d) => formatNumber(d as number))
    );
    styleAxis(yAxis, { hideDomain: true });

    // Line + Area generators
    const line = d3
      .line<{ date: Date; value: number }>()
      .x((d) => x(d.date))
      .y((d) => y(d.value))
      .curve(d3.curveMonotoneX);

    const area = d3
      .area<{ date: Date; value: number }>()
      .x((d) => x(d.date))
      .y0(innerH)
      .y1((d) => y(d.value))
      .curve(d3.curveMonotoneX);

    // Draw area fill
    if (showArea) {
      g.append('path')
        .datum(parsed)
        .attr('d', area)
        .attr('fill', color)
        .attr('fill-opacity', 0.08);
    }

    // Draw primary line
    g.append('path')
      .datum(parsed)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', 2);

    // Draw secondary line
    if (parsedSecondary && parsedSecondary.length > 0) {
      if (showArea) {
        g.append('path')
          .datum(parsedSecondary)
          .attr('d', area)
          .attr('fill', secondaryColor)
          .attr('fill-opacity', 0.05);
      }

      g.append('path')
        .datum(parsedSecondary)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', secondaryColor)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '4,3');
    }

    // Dots + Tooltip
    const tooltip = createTooltip(container);

    g.selectAll('.dot-primary')
      .data(parsed)
      .join('circle')
      .attr('class', 'dot-primary')
      .attr('cx', (d) => x(d.date))
      .attr('cy', (d) => y(d.value))
      .attr('r', 3)
      .attr('fill', color)
      .attr('stroke', 'var(--background)')
      .attr('stroke-width', 1.5)
      .style('cursor', 'pointer')
      .on('mouseenter', (event, d) => {
        const dateStr = d3.timeFormat('%b %d')(d.date);
        let html = `<div style="color:var(--muted);font-size:10px">${dateStr}</div>`;
        html += `<div style="color:${color};font-weight:600">${label}: ${formatNumber(d.value)}</div>`;

        if (parsedSecondary) {
          const match = parsedSecondary.find(
            (s) => s.date.getTime() === d.date.getTime()
          );
          if (match) {
            html += `<div style="color:${secondaryColor}">${secondaryLabel}: ${formatNumber(match.value)}</div>`;
          }
        }

        showTooltip(tooltip, html, event);
      })
      .on('mouseleave', () => hideTooltip(tooltip));

    return () => {
      tooltip.remove();
    };
  }, [data, secondaryData, label, secondaryLabel, color, secondaryColor, height, showArea]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} width="100%" style={{ display: 'block' }} />
    </div>
  );
}
