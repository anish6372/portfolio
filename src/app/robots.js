import { SITE_CONFIG } from '@/data/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
