import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aido-d2cc0.web.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/analytics', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
