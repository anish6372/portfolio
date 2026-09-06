import { SITE_CONFIG } from '@/data/constants';

export default function sitemap() {
  return [
    {
      url: SITE_CONFIG.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
