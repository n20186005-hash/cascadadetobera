import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cascada de Tobera — Visitor Guide & Location',
    short_name: 'Cascada de Tobera',
    description:
      'Independent non-profit visitor guide to Cascada de Tobera, the travertine natural monument in Tobera, Burgos, Castilla y León, Spain.',
    id: '/',
    start_url: '/es',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#faf8f4',
    theme_color: '#234830',
    lang: 'es',
    categories: ['travel', 'education', 'tourism'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
