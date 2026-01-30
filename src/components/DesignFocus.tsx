import { Company } from '@/data/types';

export function DesignFocus({ dwt }: { dwt: Company['designWorkType'] }) {
  const indicator = (label: string, level: 'high' | 'medium' | 'low') => {
    const dots = level === 'high' ? '\u25CF\u25CF\u25CF' : level === 'medium' ? '\u25CF\u25CF\u25CB' : '\u25CF\u25CB\u25CB';
    const color = level === 'high'
      ? 'text-[var(--success)]'
      : level === 'medium'
        ? 'text-[var(--accent-light)]'
        : 'text-[var(--muted-dim)]';
    return (
      <span className="flex items-center gap-1.5">
        <span className="text-[var(--muted)]">{label}</span>
        <span className={`${color} tracking-tight text-[10px]`}>{dots}</span>
      </span>
    );
  };

  return (
    <div className="flex gap-4 text-xs">
      {indicator('Logic', dwt.logicBehavior.level)}
      {indicator('Eval', dwt.evaluation.level)}
      {indicator('UI', dwt.interface.level)}
    </div>
  );
}
