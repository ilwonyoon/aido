import { MetadataRoute } from 'next';
import { companies } from '@/data/companies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aido-d2cc0.web.app';

  const companyPages = companies.map((company) => ({
    url: `${baseUrl}/company/${company.id}`,
    lastModified: new Date(company.lastUpdated),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-levels`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/macro`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    ...companyPages,
  ];
}
