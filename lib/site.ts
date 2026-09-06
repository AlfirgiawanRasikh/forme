export const PRODUCTION_SITE_URL = 'https://forme-drab.vercel.app';

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredUrl) {
    return process.env.NODE_ENV === 'production'
      ? PRODUCTION_SITE_URL
      : 'http://localhost:3000';
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return process.env.NODE_ENV === 'production'
      ? PRODUCTION_SITE_URL
      : 'http://localhost:3000';
  }
}
