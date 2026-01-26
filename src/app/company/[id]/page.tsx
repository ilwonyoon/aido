import { notFound } from 'next/navigation';
import { companies, getCompanyById } from '@/data/companies';
import { CompanyDetail } from '@/components/CompanyDetail';

export function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
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
