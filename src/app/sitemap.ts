import type {MetadataRoute} from 'next';
import {getAbsoluteUrl, services} from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getAbsoluteUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...services.map((service) => ({
      url: getAbsoluteUrl(service.href),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: service.href === '/kontakt' ? 0.7 : 0.9,
    })),
  ];
}
