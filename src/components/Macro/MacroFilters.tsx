'use client';

import React from 'react';
import { DropdownFilter } from '@/components/ui/Dropdown';
import { Button } from '@/components/ui/Button';

export type MacroTypeFilter = 'all' | 'funding' | 'product_launch' | 'leadership' | 'acquisition' | 'layoff' | 'partnership';
export type ImpactFilter = 'all' | '1' | '2' | '3';

interface MacroFiltersProps {
  typeFilter: MacroTypeFilter;
  onTypeChange: (value: MacroTypeFilter) => void;
  impactFilter: ImpactFilter;
  onImpactChange: (value: ImpactFilter) => void;
  onClear: () => void;
}

export function MacroFilters({
  typeFilter,
  onTypeChange,
  impactFilter,
  onImpactChange,
  onClear,
}: MacroFiltersProps) {
  const hasActiveFilters = typeFilter !== 'all' || impactFilter !== 'all';

  return (
    <div className="flex items-center gap-3 mb-6">
      <DropdownFilter
        label="Event Type"
        value={typeFilter === 'all' ? '' : typeFilter}
        options={[
          { value: 'funding', label: 'Funding' },
          { value: 'product_launch', label: 'Product Launch' },
          { value: 'leadership', label: 'Leadership' },
          { value: 'acquisition', label: 'Acquisition' },
          { value: 'layoff', label: 'Layoff' },
          { value: 'partnership', label: 'Partnership' },
        ]}
        onChange={(val) => onTypeChange((val || 'all') as MacroTypeFilter)}
      />

      <DropdownFilter
        label="Impact Level"
        value={impactFilter === 'all' ? '' : impactFilter}
        options={[
          { value: '3', label: 'High Impact' },
          { value: '2', label: 'Medium Impact' },
          { value: '1', label: 'Low Impact' },
        ]}
        onChange={(val) => onImpactChange((val || 'all') as ImpactFilter)}
      />

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onClear}>
          Clear
        </Button>
      )}
    </div>
  );
}
