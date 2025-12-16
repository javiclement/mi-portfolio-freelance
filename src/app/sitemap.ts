import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

// Usamos tu dominio actual de Vercel
const BASE_URL = 'https://nativiza.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postsUrls = posts.map((post) => {
    // Protección: Si la fecha falla, usa la fecha actual
    let postDate = new Date(post.date);
    if (isNaN(postDate.getTime())) {
      postDate = new Date();
    }

    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  // Rutas estáticas clave
  // Si alguna de estas NO existe como página individual, bórrala de la lista
  const routes = [
    '',           // Home
    '/blog',      // Blog Index
    // Solo descomenta estas líneas si tienes src/app/portfolio/page.tsx, etc.
    // '/portfolio', 
    // '/contacto',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...postsUrls];
}