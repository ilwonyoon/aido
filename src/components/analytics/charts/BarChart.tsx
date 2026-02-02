'use client';

import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  styleAxis,
  createTooltip,
  showTooltip,
  hideTooltip,
  formatNumber,
  getChartColor,
  DEFAULT_MARGIN,
} from './d3-utils';

export interface BarDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  readonly data: readonly BarDataPoint[];
  readonly height?: number;
  readonly horizontal?: boolean;
  readonly maxBars?: number;
  readonly barColor?: string;
}

export function BarChart({
  data,
  height = 240,
  horizontal = true,
  maxBars = 10,
  barColor,
}: BarChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || data.length === 0) return;

    const sortedData = [...data]
      .sort((a, b) => b.value - a.value)
      .slice(0, maxBars);

    const width = container.clientWidth;
    const margin = horizontal
      ? { ...DEFAULT_MARGIN, left: 120 }
      : DEFAULT_MARGIN;
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const tooltip = createTooltip(container);

    if (horizontal) {
      // Horizontal bars
      const x = d3
        .scaleLinear()
        .domain([0, d3.max(sortedData, (d) => d.value) ?? 0])
        .nice()
        .range([0, innerW]);

      const y = d3
        .scaleBand<string>()
        .domain(sortedData.map((d) => d.label))
        .range([0, innerH])
        .padding(0.3);

      // Bars
      g.selectAll('.bar')
        .data(sortedData)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', 0)
        .attr('y', (d) => y(d.label)!)
        .attr('width', (d) => x(d.value))
        .attr('height', y.bandwidth())
        .attr('fill', (d, i) => d.color || barColor || getChartColor(i))
        .attr('rx', 3)
        .attr('opacity', 0.85)
        .style('cursor', 'pointer')
        .on('mouseenter', function (event, d) {
          d3.select(this).attr('opacity', 1);
          showTooltip(
            tooltip,
            `<strong>${d.label}</strong>: ${formatNumber(d.value)}`,
            event
          );
        })
        .on('mouseleave', function () {
          d3.select(this).attr('opacity', 0.85);
          hideTooltip(tooltip);
        });

      // Value labels on bars
      g.selectAll('.bar-label')
        .data(sortedData)
        .join('text')
        .attr('class', 'bar-label')
        .attr('x', (d) => x(d.value) + 6)
        .attr('y', (d) => y(d.label)! + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('fill', 'var(--muted)')
        .attr('font-size', '10px')
        .attr('font-family', 'var(--font-mono, monospace)')
        .text((d) => formatNumber(d.value));

      // Y-axis (labels)
      const yAxis = g.append('g').call(d3.axisLeft(y).tickSize(0));
      styleAxis(yAxis, { hideDomain: true });
      yAxis.selectAll('.tick text').attr('font-size', '11px');
    } else {
      // Vertical bars
      const x = d3
        .scaleBand<string>()
        .domain(sortedData.map((d) => d.label))
        .range([0, innerW])
        .padding(0.3);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(sortedData, (d) => d.value) ?? 0])
        .nice()
        .range([innerH, 0]);

      // Grid
      const gridTicks = y.ticks(5);
      g.selectAll('.grid-line')
        .data(gridTicks)
        .join('line')
        .attr('x1', 0)
        .attr('x2', innerW)
        .attr('y1', (d) => y(d))
        .attr('y2', (d) => y(d))
        .attr('stroke', 'var(--border)')
        .attr('stroke-dasharray', '2,4')
        .attr('stroke-opacity', 0.5);

      // Bars
      g.selectAll('.bar')
        .data(sortedData)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.label)!)
        .attr('y', (d) => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', (d) => innerH - y(d.value))
        .attr('fill', (d, i) => d.color || barColor || getChartColor(i))
        .attr('rx', 3)
        .attr('opacity', 0.85)
        .style('cursor', 'pointer')
        .on('mouseenter', function (event, d) {
          d3.select(this).attr('opacity', 1);
          showTooltip(
            tooltip,
            `<strong>${d.label}</strong>: ${formatNumber(d.value)}`,
            event
          );
        })
        .on('mouseleave', function () {
          d3.select(this).attr('opacity', 0.85);
          hideTooltip(tooltip);
        });

      // Axes
      const xAxis = g
        .append('g')
        .attr('transform', `translate(0,${innerH})`)
        .call(d3.axisBottom(x).tickSize(0));
      styleAxis(xAxis, { hideDomain: true });

      const yAxis = g.append('g').call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickFormat((d) => formatNumber(d as number))
      );
      styleAxis(yAxis, { hideDomain: true });
    }

    return () => {
      tooltip.remove();
    };
  }, [data, height, horizontal, maxBars, barColor]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} width="100%" style={{ display: 'block' }} />
    </div>
  );
}
