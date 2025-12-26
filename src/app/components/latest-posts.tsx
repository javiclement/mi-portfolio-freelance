import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3); // Solo los 3 últimos

  return (
    <section className="py-24 px-4 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Últimas Novedades</h2>
          <Link href="/blog" className="text-primary hover:text-white transition-colors text-sm font-medium">
            Ver todo el blog →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <article>
                <time className="text-xs text-slate-500 mb-2 block">{formatDate(post.date)}</time>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}