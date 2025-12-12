import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

// 1. Definimos los componentes personalizados para MDX
// Esto soluciona el error "Expected component Callout to be defined"
const components = {
  // Si en el Markdown aparece <Callout>, usamos este diseño:
  Callout: (props: any) => (
    <div className="my-6 p-4 bg-indigo-900/30 border-l-4 border-indigo-500 rounded-r-lg text-slate-200">
      {props.children}
    </div>
  ),
  // Personalizamos las imágenes para que usen Next/Image y sean responsivas
  img: (props: any) => (
    <div className="my-8 relative w-full h-auto rounded-xl overflow-hidden shadow-lg border border-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        {...props} 
        className="w-full h-auto object-cover" 
        loading="lazy"
      />
    </div>
  ),
  // Personalizamos los enlaces para que se vean mejor
  a: (props: any) => (
    <a {...props} className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors" />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = decodeURIComponent(params.slug);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Volver al blog
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex gap-2 mb-4 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {post.title}
          </h1>
          <time className="text-slate-500 font-mono text-sm block">
            {formatDate(post.date)}
          </time>
        </header>

        {/* Pasamos los 'components' al renderizador MDX */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </article>
  );
}