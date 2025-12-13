import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog | Nativiza",
  description: "Artículos sobre desarrollo móvil, Flutter y estrategia digital.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comparto conocimientos sobre tecnología móvil, desarrollo de MVPs y cómo escalar productos digitales.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              // CORRECCIÓN 1: Padding reducido en móvil (p-5) y normal en PC (md:p-8)
              className="group block p-5 md:p-8 rounded-3xl bg-surface/50 border border-white/10 hover:border-primary/50 transition-all duration-300 w-full"
            >
              <article className="w-full">
                {/* CORRECCIÓN 2: flex-wrap para que los tags no ensanchen la tarjeta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <time className="shrink-0">{formatDate(post.date)}</time>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-white/5 text-xs font-medium text-primary border border-white/5 whitespace-nowrap">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CORRECCIÓN 3: break-words para evitar cortes de texto */}
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors break-words hyphens-auto">
                  {post.title}
                </h2>
                <p className="text-slate-400 leading-relaxed break-words">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}