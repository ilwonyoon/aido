import { companies } from '@/data/companies';
import { CompanyFilters } from '@/components/CompanyFilters';

export default function Home() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Companies</h1>
        <p className="text-[var(--muted)]">
          AI-native companies worth watching for product design opportunities
        </p>
      </div>

      <CompanyFilters companies={companies} />
    </div>
  );
}
