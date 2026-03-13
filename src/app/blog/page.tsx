import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Recursos sobre IA, Automatización y Crecimiento",
  description:
    "Artículos prácticos sobre automatización con IA, diseño web, sistemas comerciales y SEO local para empresas que quieren crecer.",
  alternates: { canonical: "https://zaimetric.com/blog" },
};

interface Props {
  searchParams: Promise<{ cluster?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { cluster } = await searchParams;
  const filteredPosts =
    !cluster || cluster === "Todos"
      ? posts
      : posts.filter((p) => p.cluster === cluster);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Blog ZAIMETRIC
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              Recursos y casos de uso de IA para empresas
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Artículos prácticos sobre automatización, diseño web, sistemas
              comerciales y SEO local. Sin relleno — solo lo que funciona.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clusters filter */}
          <Suspense
            fallback={
              <div className="flex flex-wrap gap-2 mb-12">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white">
                  Todos
                </span>
              </div>
            }
          >
            <BlogFilter />
          </Suspense>

          {/* Grid */}
          {filteredPosts.length === 0 ? (
            <p className="text-slate-500 text-center py-16">
              No hay artículos en esta categoría todavía.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 overflow-hidden"
                >
                  {/* Color band */}
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={12} className="text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {post.cluster}
                      </span>
                    </div>
                    <h2 className="font-grotesk font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                      <span className="text-slate-400 text-xs">
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
            Recibe artículos prácticos en tu email
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Sin spam. Solo contenido útil sobre IA, automatización y crecimiento empresarial.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
