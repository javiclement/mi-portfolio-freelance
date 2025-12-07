import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

// Esta función le dice a Next.js qué páginas existen para pre-generarlas
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  // CORRECCIÓN: En Next.js moderno, params es una Promesa. Debemos esperar a que se resuelva.
  const params = await props.params;
  
  // Decodificamos el slug para manejar caracteres especiales correctamente
  const slug = decodeURIComponent(params.slug);

  // 1. Buscamos el post usando el slug obtenido
  const post = getPostBySlug(slug);

  // 2. Si no existe (por ejemplo, URL mal escrita), mostramos la página 404
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Botón Volver */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Link>

        {/* Cabecera del Artículo */}
        <header className="mb-12">
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <time className="text-slate-500">{formatDate(post.date)}</time>
        </header>

        {/* Contenido MDX Renderizado */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:no-underline prose-img:rounded-xl">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}