import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next"; // IMPORTANTE: Importamos el tipo Metadata

// 1. Componentes MDX (Sin cambios, tu estilo estaba bien)
const components = {
  Callout: (props: any) => (
    <div className="my-6 p-4 bg-indigo-900/30 border-l-4 border-indigo-500 rounded-r-lg text-slate-200">
      {props.children}
    </div>
  ),
  img: (props: any) => (
    <div className="my-8 relative w-full h-auto rounded-xl overflow-hidden shadow-lg border border-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        {...props} 
        className="w-full h-auto object-cover" 
        loading="lazy"
        alt={props.alt || "Imagen del artículo"} // Mejora de accesibilidad/SEO
      />
    </div>
  ),
  a: (props: any) => (
    <a {...props} className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors" />
  ),
};

// 2. Generación de rutas estáticas (SSG) - Esto estaba bien
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. NUEVO: Generación de Metadatos para SEO (La pieza que faltaba)
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const slug = decodeURIComponent(params.slug);
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: post.title, // El título exacto del post
    description: post.description, // La descripción del post para Google
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Nativiza"], // Opcional
    },
    alternates: {
      canonical: `/blog/${slug}`, // URL Canónica para evitar duplicados
    },
  };
}

// 4. Página Principal (Renderizado)
export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = decodeURIComponent(params.slug);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema.org estructurado para artículos (Boost extra de SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "Nativiza"
    }
  };

  return (
    <article className="min-h-screen pt-32 pb-20 px-4">
      {/* Inyectamos datos estructurados invisibles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </article>
  );
}