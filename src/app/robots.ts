import { MetadataRoute } from 'next';

const URL = 'https://nativiza.netlify.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Si tuvieras carpetas privadas
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}