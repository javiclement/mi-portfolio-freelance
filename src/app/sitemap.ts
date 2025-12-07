import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

// Pon aquí tu dominio real cuando lo compres
const URL = 'https://nativiza.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postsUrls = posts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));

  return [...routes, ...postsUrls];
}