'use client';

import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {
  getChartColor,
  createTooltip,
  showTooltip,
  hideTooltip,
} from './d3-utils';

export interface SankeyNode {
  id: string;
  label: string;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

interface SankeyFlowProps {
  readonly nodes: readonly SankeyNode[];
  readonly links: readonly SankeyLink[];
  readonly height?: number;
}

// Simple Sankey layout (no d3-sankey dependency — manual positioning)
interface LayoutNode {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  color: string;
}

interface LayoutLink {
  source: LayoutNode;
  target: LayoutNode;
  value: number;
  sy: number;
  ty: number;
  thickness: number;
}

function computeLayout(
  nodes: readonly SankeyNode[],
  links: readonly SankeyLink[],
  width: number,
  height: number
): { layoutNodes: LayoutNode[]; layoutLinks: LayoutLink[] } {
  // Group nodes by column (level) using BFS from root nodes
  const outgoing = new Map<string, string[]>();
  const incoming = new Map<string, string[]>();

  for (const link of links) {
    outgoing.set(link.source, [...(outgoing.get(link.source) || []), link.target]);
    incoming.set(link.target, [...(incoming.get(link.target) || []), link.source]);
  }

  // Find root nodes (no incoming)
  const roots = nodes.filter((n) => !(incoming.get(n.id)?.length));
  const levels = new Map<string, number>();

  const queue = roots.map((n) => ({ id: n.id, level: 0 }));
  while (queue.length > 0) {
    const { id, level } = queue.shift()!;
    if (levels.has(id)) continue;
    levels.set(id, level);
    for (const target of outgoing.get(id) || []) {
      queue.push({ id: target, level: level + 1 });
    }
  }

  // Assign levels to any orphans
  for (const node of nodes) {
    if (!levels.has(node.id)) levels.set(node.id, 0);
  }

  const maxLevel = Math.max(...levels.values(), 0);
  const columnWidth = 16;
  const columnGap = maxLevel > 0 ? (width - columnWidth) / maxLevel : 0;
  const nodePadding = 8;

  // Compute node values (sum of incoming or outgoing, whichever is larger)
  const nodeValueMap = new Map<string, number>();
  for (const node of nodes) {
    const outVal = links
      .filter((l) => l.source === node.id)
      .reduce((s, l) => s + l.value, 0);
    const inVal = links
      .filter((l) => l.target === node.id)
      .reduce((s, l) => s + l.value, 0);
    nodeValueMap.set(node.id, Math.max(outVal, inVal, 1));
  }

  // Group by level
  const byLevel = new Map<number, SankeyNode[]>();
  for (const node of nodes) {
    const lvl = levels.get(node.id) ?? 0;
    byLevel.set(lvl, [...(byLevel.get(lvl) || []), node]);
  }

  // Position nodes
  const layoutNodes: LayoutNode[] = [];
  const nodeMap = new Map<string, LayoutNode>();

  for (const [level, levelNodes] of byLevel.entries()) {
    const totalValue = levelNodes.reduce(
      (s, n) => s + (nodeValueMap.get(n.id) ?? 1),
      0
    );
    const availableHeight = height - (levelNodes.length - 1) * nodePadding;
    let currentY = 0;

    for (let i = 0; i < levelNodes.length; i++) {
      const node = levelNodes[i];
      const value = nodeValueMap.get(node.id) ?? 1;
      const nodeHeight = Math.max(
        (value / totalValue) * availableHeight,
        12
      );

      const layoutNode: LayoutNode = {
        id: node.id,
        label: node.label,
        x: level * columnGap,
        y: currentY,
        width: columnWidth,
        height: nodeHeight,
        value,
        color: getChartColor(i + level * 3),
      };

      layoutNodes.push(layoutNode);
      nodeMap.set(node.id, layoutNode);
      currentY += nodeHeight + nodePadding;
    }
  }

  // Position links
  const sourceOffsets = new Map<string, number>();
  const targetOffsets = new Map<string, number>();

  const layoutLinks: LayoutLink[] = links
    .filter((l) => nodeMap.has(l.source) && nodeMap.has(l.target))
    .map((link) => {
      const source = nodeMap.get(link.source)!;
      const target = nodeMap.get(link.target)!;

      const sOffset = sourceOffsets.get(link.source) || 0;
      const tOffset = targetOffsets.get(link.target) || 0;

      const thickness = Math.max(
        (link.value / source.value) * source.height,
        2
      );

      const result: LayoutLink = {
        source,
        target,
        value: link.value,
        sy: source.y + sOffset + thickness / 2,
        ty: target.y + tOffset + thickness / 2,
        thickness,
      };

      sourceOffsets.set(link.source, sOffset + thickness);
      targetOffsets.set(link.target, tOffset + thickness);

      return result;
    });

  return { layoutNodes, layoutLinks };
}

export function SankeyFlow({ nodes, links, height = 300 }: SankeyFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || nodes.length === 0) return;

    const width = container.clientWidth;
    const margin = { top: 8, right: 100, bottom: 8, left: 8 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const svgSel = d3.select(svg);
    svgSel.selectAll('*').remove();
    svgSel.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svgSel
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const { layoutNodes, layoutLinks } = computeLayout(
      nodes,
      links,
      innerW,
      innerH
    );

    const tooltip = createTooltip(container);

    // Draw links
    g.selectAll('.sankey-link')
      .data(layoutLinks)
      .join('path')
      .attr('class', 'sankey-link')
      .attr('d', (d) => {
        const sx = d.source.x + d.source.width;
        const tx = d.target.x;
        const midX = (sx + tx) / 2;
        return `M${sx},${d.sy} C${midX},${d.sy} ${midX},${d.ty} ${tx},${d.ty}`;
      })
      .attr('fill', 'none')
      .attr('stroke', (d) => d.source.color)
      .attr('stroke-width', (d) => d.thickness)
      .attr('stroke-opacity', 0.25)
      .style('cursor', 'pointer')
      .on('mouseenter', function (event, d) {
        d3.select(this).attr('stroke-opacity', 0.5);
        showTooltip(
          tooltip,
          `${d.source.label} → ${d.target.label}: <strong>${d.value}</strong>`,
          event
        );
      })
      .on('mouseleave', function () {
        d3.select(this).attr('stroke-opacity', 0.25);
        hideTooltip(tooltip);
      });

    // Draw nodes
    g.selectAll('.sankey-node')
      .data(layoutNodes)
      .join('rect')
      .attr('class', 'sankey-node')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('width', (d) => d.width)
      .attr('height', (d) => d.height)
      .attr('fill', (d) => d.color)
      .attr('rx', 3)
      .attr('opacity', 0.85);

    // Node labels
    g.selectAll('.sankey-label')
      .data(layoutNodes)
      .join('text')
      .attr('class', 'sankey-label')
      .attr('x', (d) => d.x + d.width + 6)
      .attr('y', (d) => d.y + d.height / 2)
      .attr('dy', '0.35em')
      .attr('fill', 'var(--foreground)')
      .attr('font-size', '10px')
      .text((d) => `${d.label} (${d.value})`);

    return () => {
      tooltip.remove();
    };
  }, [nodes, links, height]);

  if (nodes.length === 0 || links.length === 0) {
    return (
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '13px',
        }}
      >
        Not enough journey data yet
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} width="100%" style={{ display: 'block' }} />
    </div>
  );
}
