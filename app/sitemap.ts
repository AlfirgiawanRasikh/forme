import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const routes = [
  '',
  '/work',
  '/work/serein',
  '/work/vela',
  '/work/nomae',
  '/work/atelier-27',
  '/studio',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
