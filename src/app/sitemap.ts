import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zaimetric.com";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/servicios/paginas-web`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicios/automatizacion-ia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicios/sistemas-comerciales`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicios/seo-local`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
