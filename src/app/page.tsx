import { companies } from '@/data/companies';
import { CompanyFilters } from '@/components/CompanyFilters';

export default function Home() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Companies</h1>
        <p className="text-[var(--muted)] mb-3">
          AI-native companies worth watching for product design opportunities
        </p>
        <p className="text-xs text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2 inline-block">
          ⚠️ Data collected via AI — may contain inaccuracies. Always verify before making decisions.
        </p>
      </div>

      <CompanyFilters companies={companies} />
    </div>
  );
}
