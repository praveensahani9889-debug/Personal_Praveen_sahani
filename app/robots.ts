import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Twitterbot', 'facebookexternalhit', 'WhatsApp', 'TelegramBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://praveensahani.netlify.app/sitemap.xml',
    host: 'https://praveensahani.netlify.app',
  };
}
