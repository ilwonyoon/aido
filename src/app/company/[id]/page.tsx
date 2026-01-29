import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { companies, getCompanyById } from '@/data/companies';
import { CompanyDetail } from '@/components/CompanyDetail';
import { aiLevels } from '@/design/tokens';

export function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const company = getCompanyById(id);

  if (!company) {
    return {
      title: 'Company Not Found',
      description: 'The requested company could not be found.',
    };
  }

  const jobCount = company.openRoles.length;
  const levelConfig = aiLevels[company.aiNativeLevel];

  return {
    title: `${company.name} Product Designer Jobs`,
    description: `${jobCount} open product design role${jobCount === 1 ? '' : 's'} at ${company.name}. ${company.description} Level ${company.aiNativeLevel} ${levelConfig.label} company.`,
    keywords: [
      `${company.name} product designer`,
      `${company.name} design jobs`,
      `${company.name} careers`,
      'AI product designer',
      `Level ${company.aiNativeLevel} AI company`,
    ],
    openGraph: {
      title: `${company.name} Product Designer Jobs | AIDO`,
      description: company.description,
      url: `https://aido-d2cc0.web.app/company/${company.id}`,
      siteName: 'AIDO',
      type: 'website',
    },
    alternates: {
      canonical: `https://aido-d2cc0.web.app/company/${company.id}`,
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = getCompanyById(id);

  if (!company) {
    notFound();
  }

  return <CompanyDetail company={company} />;
}
