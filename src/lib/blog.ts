export interface PostMeta {
  title: string;
  description: string;
  date: string;
  cluster: string;
  keyword: string;
  slug: string;
  readTime: string;
}

// Static blog posts for demo — in production, replace with MDX/CMS
export const posts: PostMeta[] = [
  {
    slug: "que-es-geo-generative-engine-optimization",
    title: "Qué es el GEO (Generative Engine Optimization) y cómo posicionar tu empresa en ChatGPT, Gemini y Perplexity",
    description: "GEO o Generative Engine Optimization es el posicionamiento en motores de IA. Aprende qué es, cómo funciona y qué necesita tu empresa para aparecer en ChatGPT y Gemini.",
    date: "2026-03-21",
    cluster: "GEO y posicionamiento en IAs",
    keyword: "GEO Generative Engine Optimization",
    readTime: "8 min",
  },
  {
    slug: "que-es-automatizacion-ia-empresas",
    title: "¿Qué es la automatización con IA para empresas?",
    description: "Guía completa sobre automatización empresarial con inteligencia artificial: qué es, cómo funciona y por qué tu empresa necesita implementarla.",
    date: "2026-03-10",
    cluster: "Automatización con IA",
    keyword: "automatización IA empresas",
    readTime: "8 min",
  },
  {
    slug: "10-procesos-automatizar-ia",
    title: "10 procesos que puedes automatizar con IA hoy",
    description: "Lista práctica de los 10 procesos empresariales que más tiempo consumen y que puedes automatizar con inteligencia artificial en menos de 30 días.",
    date: "2026-03-05",
    cluster: "Automatización con IA",
    keyword: "10 procesos automatizar IA",
    readTime: "6 min",
  },
  {
    slug: "web-no-convierte-errores",
    title: "¿Por qué tu web no convierte? 7 errores comunes",
    description: "Analizamos los 7 errores más frecuentes que hacen que tu página web no genere clientes, y cómo solucionarlos.",
    date: "2026-02-28",
    cluster: "Diseño web y conversión",
    keyword: "web no convierte errores",
    readTime: "7 min",
  },
  {
    slug: "que-es-seo-local-negocio",
    title: "Qué es el SEO local y por qué es clave para tu negocio",
    description: "Todo lo que necesitas saber sobre SEO local: qué es, cómo funciona el mapa 3-pack de Google y cómo posicionar tu negocio en búsquedas locales.",
    date: "2026-02-20",
    cluster: "SEO local",
    keyword: "SEO local que es negocio",
    readTime: "5 min",
  },
  {
    slug: "que-es-sistema-comercial-empresa",
    title: "¿Qué es un sistema comercial y por qué necesitas uno?",
    description: "Descubre qué diferencia a una empresa con sistema comercial de una sin él, y por qué el 78% de los leads se pierden sin el proceso adecuado.",
    date: "2026-02-15",
    cluster: "Sistemas comerciales y CRM",
    keyword: "sistema comercial empresa qué es",
    readTime: "6 min",
  },
  {
    slug: "optimizar-google-business-profile",
    title: "Cómo optimizar tu Google Business Profile paso a paso",
    description: "Guía completa para optimizar tu ficha de Google Business Profile y aparecer en el mapa 3-pack de búsquedas locales.",
    date: "2026-02-08",
    cluster: "SEO local",
    keyword: "optimizar google business profile",
    readTime: "9 min",
  },
];

export function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
}
