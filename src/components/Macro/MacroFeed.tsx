import React from 'react';
import { MacroCard, MacroEvent } from './MacroCard';

interface MacroFeedProps {
  events: MacroEvent[];
}

export function MacroFeed({ events }: MacroFeedProps) {
  // Group events by date
  const groupedEvents = events.reduce((groups, event) => {
    const date = event.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {} as Record<string, MacroEvent[]>);

  // Sort dates descending
  const sortedDates = Object.keys(groupedEvents).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-8">
      {sortedDates.map((date) => (
        <div key={date}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-sm font-mono text-[var(--muted)] font-bold">
              {new Date(date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <div className="space-y-4">
            {groupedEvents[date].map((event) => (
              <MacroCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
      
      {events.length === 0 && (
        <div className="text-center py-12 text-[var(--muted)]">
          No macro events found for the selected filters.
        </div>
      )}
    </div>
  );
}
