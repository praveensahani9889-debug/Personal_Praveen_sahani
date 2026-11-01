import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://praveensahani.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://praveensahani.netlify.app/images/profile-photo.jpg',
        'https://praveensahani.netlify.app/images/og-image.jpg',
      ],
    },
  ];
}
