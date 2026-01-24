import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IMagic Creatives',
    short_name: 'IMagic',
    description: 'Integrated design studio shaping brand experiences',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8CC63F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
