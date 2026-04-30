export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://www.sattvaquiropraxia.site/',
      lastModified: new Date('2025-01-30'),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://www.sattvaquiropraxia.site/blog',
      lastModified: new Date('2025-01-30'),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];
}
