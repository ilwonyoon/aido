import React from 'react';
import { getAiLevelConfig, components, type AiLevel } from '@/design/tokens';

export type BadgeVariant = keyof typeof components.badge.variants;

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantClass = components.badge.variants[variant];
  return (
    <span className={`${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

export interface AiLevelBadgeProps {
  level: AiLevel;
}

export function AiLevelBadge({ level }: AiLevelBadgeProps) {
  const config = getAiLevelConfig(level);
  return (
    <span className={`badge ${config.badgeClass}`}>
      Level {level}: {config.label}
    </span>
  );
}

export interface LevelBadgeProps {
  level: 'high' | 'medium' | 'low';
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const variants: Record<'high' | 'medium' | 'low', BadgeVariant> = {
    high: 'success',
    medium: 'accent',
    low: 'default',
  };
  const labels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  
  return <Badge variant={variants[level]}>{labels[level]}</Badge>;
}
