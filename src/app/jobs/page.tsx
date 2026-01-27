import { Metadata } from 'next';
import Link from 'next/link';
import { companies } from '@/data/companies';
import { Company } from '@/data/types';

export const metadata: Metadata = {
  title: 'Product Designer Jobs at AI Companies | AIDO',
  description: `Browse ${companies.reduce((sum, c) => sum + c.openRoles.length, 0)} product design jobs at ${companies.length} AI companies. Filter by AI-native level, compensation, location. Updated daily.`,
  keywords: ['AI product designer jobs', 'AI design jobs', 'product designer AI companies', 'AI startup designer jobs', 'Level A AI company jobs'],
  openGraph: {
    title: 'Product Designer Jobs at AI Companies | AIDO',
    description: `${companies.reduce((sum, c) => sum + c.openRoles.length, 0)} curated product design roles at AI-native companies`,
    url: 'https://aido-d2cc0.web.app/jobs',
    siteName: 'AIDO',
    type: 'website',
  },
};

interface JobWithCompany {
  company: Company;
  role: Company['openRoles'][0];
}

export default function JobsPage() {
  // Collect all jobs with company context
  const allJobs: JobWithCompany[] = companies.flatMap((company) =>
    company.openRoles.map((role) => ({ company, role }))
  );

  // Sort by most recent (use company lastUpdated as proxy)
  const sortedJobs = allJobs.sort((a, b) => {
    const dateA = new Date(a.company.lastUpdated || 0);
    const dateB = new Date(b.company.lastUpdated || 0);
    return dateB.getTime() - dateA.getTime();
  });

  const totalJobs = allJobs.length;
  const companiesWithJobs = companies.filter(c => c.openRoles.length > 0).length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          ← Back to companies
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Product Designer Jobs at AI Companies</h1>
        <p className="text-lg text-[var(--muted)]">
          {totalJobs} open product design roles at {companiesWithJobs} AI-native companies. Updated daily.
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {sortedJobs.map(({ company, role }, idx) => (
          <Link
            key={`${company.id}-${idx}`}
            href={`/company/${company.id}`}
            className="card p-6 block hover:border-[var(--accent)] transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--foreground)]">{company.name}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                  {role.compensation && (
                    <>
                      <span>•</span>
                      <span className="text-[var(--success)]">{role.compensation}</span>
                    </>
                  )}
                </div>
              </div>

              {/* AI Level Badge */}
              <div className="flex-shrink-0">
                <span
                  className={`badge ${
                    company.aiNativeLevel === 'A'
                      ? 'badge-success'
                      : company.aiNativeLevel === 'B'
                      ? 'badge-accent'
                      : 'badge-default'
                  }`}
                >
                  Level {company.aiNativeLevel}
                </span>
              </div>
            </div>

            {/* About Role */}
            {role.aboutRole && (
              <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
                {role.aboutRole}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-[var(--card-hover)] text-[var(--muted)]">
                {role.type === 'full-time' ? 'Full-time' : role.type === 'contract' ? 'Contract' : 'Intern'}
              </span>
              {role.level && (
                <span className="text-xs px-2 py-1 rounded bg-[var(--card-hover)] text-[var(--muted)]">
                  {role.level}
                </span>
              )}
              {company.remote && (
                <span className="text-xs px-2 py-1 rounded bg-[var(--card-hover)] text-[var(--muted)]">
                  {company.remote}
                </span>
              )}
            </div>

            {/* JobPosting Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'JobPosting',
                  title: role.title,
                  description: role.aboutRole || company.description,
                  datePosted: company.lastUpdated,
                  validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
                  employmentType: role.type === 'full-time' ? 'FULL_TIME' : role.type === 'contract' ? 'CONTRACTOR' : 'INTERN',
                  hiringOrganization: {
                    '@type': 'Organization',
                    name: company.name,
                    sameAs: company.website,
                  },
                  jobLocation: {
                    '@type': 'Place',
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: role.location.split(',')[0],
                      addressCountry: 'US',
                    },
                  },
                  baseSalary: role.compensation
                    ? {
                        '@type': 'MonetaryAmount',
                        currency: 'USD',
                        value: {
                          '@type': 'QuantitativeValue',
                          minValue: parseInt(role.compensation.match(/\$(\d+)/)?.[1] || '0') * 1000,
                          maxValue: parseInt(role.compensation.match(/\$\d+[Kk]?-?\$?(\d+)/)?.[1] || '0') * 1000,
                          unitText: 'YEAR',
                        },
                      }
                    : undefined,
                  applicationContact: {
                    '@type': 'ContactPoint',
                    contactType: 'recruitment',
                    url: role.url,
                  },
                }),
              }}
            />
          </Link>
        ))}

        {totalJobs === 0 && (
          <div className="card p-12 text-center">
            <p className="text-[var(--muted)]">No open product design roles at the moment.</p>
          </div>
        )}
      </div>

      {/* SEO Content */}
      <section className="mt-16 prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">About AI Product Designer Jobs</h2>
        <p className="text-[var(--muted)] mb-6">
          AIDO curates product design opportunities at AI-native companies. We focus on Level A and B companies
          where AI is the core product or primary differentiator, offering unique design challenges in areas like
          AI behavior design, evaluation frameworks, and conversational interfaces.
        </p>

        <h3 className="text-xl font-semibold mb-3">Why Join an AI-Native Company as a Product Designer?</h3>
        <ul className="text-[var(--muted)] space-y-2 mb-6">
          <li>Work on unprecedented design challenges (character training, trust design, AI UX patterns)</li>
          <li>Shape the future of human-AI interaction</li>
          <li>Join hypergrowth companies with strong funding and technical teams</li>
          <li>High compensation ($150K-$440K based on level and company)</li>
          <li>Be part of defining new design disciplines</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">What Makes a Good AI Product Designer?</h3>
        <p className="text-[var(--muted)] mb-4">
          AI product designers need traditional product design skills plus:
        </p>
        <ul className="text-[var(--muted)] space-y-2">
          <li>Understanding of AI capabilities and limitations</li>
          <li>Ability to design for uncertainty and probabilistic outputs</li>
          <li>Experience with conversation design and natural language interfaces</li>
          <li>Strong systems thinking for designing AI behavior and evaluation frameworks</li>
          <li>Comfort with rapid iteration and experimentation</li>
        </ul>
      </section>
    </div>
  );
}
