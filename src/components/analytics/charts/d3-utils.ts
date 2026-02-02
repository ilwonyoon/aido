/**
 * Shared D3 utilities for analytics charts.
 * Theme-aware colors, axis styling, tooltips.
 */

import * as d3 from 'd3';

// ── Theme Colors ───────────────────────────────────────────────────────────

export const CHART_COLORS = [
  'var(--accent)',
  'var(--success)',
  'var(--warning)',
  'var(--accent-light)',
  '#a78bfa', // purple
  '#f472b6', // pink
  '#34d399', // emerald
  '#fbbf24', // amber
  '#60a5fa', // blue
  '#c084fc', // violet
] as const;

export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length];
}

// ── Axis Styling ───────────────────────────────────────────────────────────

export function styleAxis(
  selection: d3.Selection<SVGGElement, unknown, null, undefined>,
  options?: { hideDomain?: boolean }
): void {
  if (options?.hideDomain) {
    selection.select('.domain').remove();
  } else {
    selection.select('.domain').attr('stroke', 'var(--border)');
  }

  selection.selectAll('.tick line').attr('stroke', 'var(--border)');
  selection
    .selectAll('.tick text')
    .attr('fill', 'var(--muted)')
    .attr('font-size', '10px')
    .attr('font-family', 'var(--font-mono, monospace)');
}

// ── Grid Lines ─────────────────────────────────────────────────────────────

export function drawHorizontalGrid(
  g: d3.Selection<SVGGElement, unknown, null, undefined>,
  yScale: d3.ScaleLinear<number, number>,
  width: number,
  ticks: number = 5
): void {
  const tickValues = yScale.ticks(ticks);

  g.selectAll('.grid-line')
    .data(tickValues)
    .join('line')
    .attr('class', 'grid-line')
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', (d) => yScale(d))
    .attr('y2', (d) => yScale(d))
    .attr('stroke', 'var(--border)')
    .attr('stroke-dasharray', '2,4')
    .attr('stroke-opacity', 0.5);
}

// ── Tooltip ────────────────────────────────────────────────────────────────

export function createTooltip(
  container: HTMLElement
): d3.Selection<HTMLDivElement, unknown, null, undefined> {
  // Remove existing tooltip if any
  d3.select(container).select('.d3-tooltip').remove();

  return d3
    .select(container)
    .append('div')
    .attr('class', 'd3-tooltip')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .style('opacity', '0')
    .style('background', 'var(--card)')
    .style('border', '1px solid var(--border)')
    .style('border-radius', '6px')
    .style('padding', '8px 12px')
    .style('font-size', '12px')
    .style('font-family', 'var(--font-mono, monospace)')
    .style('color', 'var(--foreground)')
    .style('z-index', '50')
    .style('white-space', 'nowrap')
    .style('box-shadow', '0 4px 12px rgba(0,0,0,0.3)')
    .style('transition', 'opacity 0.15s ease');
}

export function showTooltip(
  tooltip: d3.Selection<HTMLDivElement, unknown, null, undefined>,
  html: string,
  event: MouseEvent
): void {
  tooltip
    .html(html)
    .style('opacity', '1')
    .style('left', `${event.offsetX + 12}px`)
    .style('top', `${event.offsetY - 12}px`);
}

export function hideTooltip(
  tooltip: d3.Selection<HTMLDivElement, unknown, null, undefined>
): void {
  tooltip.style('opacity', '0');
}

// ── Number Formatting ──────────────────────────────────────────────────────

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export function formatPercent(n: number): string {
  return `${Math.round(n)}%`;
}

// ── Standard Margins ───────────────────────────────────────────────────────

export const DEFAULT_MARGIN = { top: 16, right: 16, bottom: 32, left: 48 };
export const COMPACT_MARGIN = { top: 8, right: 8, bottom: 24, left: 40 };
