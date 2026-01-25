import React from 'react';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
