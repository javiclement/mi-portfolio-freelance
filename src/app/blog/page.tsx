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
            Blog &amp; <span className="text-primary">Insights</span>
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
              className="group block p-8 rounded-3xl bg-surface/50 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <article>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <time>{formatDate(post.date)}</time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-white/5 text-xs font-medium text-primary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 leading-relaxed">
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