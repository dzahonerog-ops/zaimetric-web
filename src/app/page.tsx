import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Cpu,
  BarChart3,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "ZAIMETRIC | SEO, GEO y Automatización IA para Empresas",
  description:
    "Sistemas de crecimiento para empresas: web que convierte, SEO local, GEO (visibilidad en ChatGPT y Gemini) y automatización con IA. Resultados medibles en 90 días.",
  alternates: { canonical: "https://zaimetric.com" },
};

const services = [
  {
    icon: Globe,
    title: "Páginas web que convierten",
    description:
      "Diseño orientado a conversión, velocidad extrema y SEO integrado. Tu web como motor de captación, no como tarjeta de visita.",
    href: "/servicios/paginas-web",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description:
      "Agentes IA, workflows con n8n/Make y automatización de marketing. Elimina tareas manuales y escala sin contratar.",
    href: "/servicios/automatizacion-ia",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: BarChart3,
    title: "Sistemas comerciales",
    description:
      "CRM conectado, lead scoring automático y seguimiento de ventas. El 78% de leads se pierden por falta de sistema.",
    href: "/servicios/sistemas-comerciales",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: MapPin,
    title: "SEO local",
    description:
      "Google Business Profile, gestión de reseñas y posicionamiento geográfico. Aparece primero cuando tus clientes te buscan cerca.",
    href: "/servicios/seo-local",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu situación actual: tráfico, procesos, ventas y cuellos de botella.",
  },
  {
    num: "02",
    title: "Implementación",
    desc: "Construimos el sistema de crecimiento adaptado a tu empresa y tus objetivos.",
  },
  {
    num: "03",
    title: "Resultados",
    desc: "Medimos, optimizamos y escalamos. Datos reales en cada iteración.",
  },
];

const stats = [
  { value: "+15h", label: "ahorradas por semana con automatización", icon: Zap },
  { value: "90 días", label: "para ver resultados medibles", icon: TrendingUp },
  { value: ">90", label: "Lighthouse score en todas las webs", icon: Globe },
  { value: "78%", label: "de leads se pierden sin sistema", icon: Users },
];

const faqs = [
  {
    q: "¿Qué hace ZAIMETRIC exactamente?",
    a: "Construimos sistemas de crecimiento para pymes y startups usando IA, automatización y datos. No somos una agencia de marketing tradicional: diseñamos sistemas que generan resultados medibles.",
  },
  {
    q: "¿En qué sectores trabajáis?",
    a: "Trabajamos con empresas B2B y de servicios profesionales, principalmente pymes y startups con equipos comerciales de hasta 20 personas que quieren escalar sin crecer desproporcionadamente.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados?",
    a: "Dependiendo del servicio, entre 30 y 90 días. Las automatizaciones generan ahorro desde el primer mes. El SEO local y las webs tienen resultados a 60-90 días.",
  },
  {
    q: "¿Trabajáis con empresas pequeñas?",
    a: "Sí. Nuestros sistemas están especialmente diseñados para pymes que quieren competir con las herramientas de las grandes empresas, sin necesitar un equipo de 50 personas.",
  },
  {
    q: "¿Qué es el GEO y cómo me ayuda ZAIMETRIC a conseguirlo?",
    a: "GEO (Generative Engine Optimization) es el posicionamiento en motores de búsqueda con IA como ChatGPT, Gemini o Perplexity. A diferencia del SEO de Google, el GEO se consigue construyendo una web citable, con autoridad de contenido y presencia local consolidada. En ZAIMETRIC trabajamos los tres pilares, por lo que nuestros clientes ganan visibilidad tanto en Google como en las IAs.",
  },
  {
    q: "¿Cuánto tiempo se tarda en aparecer en ChatGPT o Gemini con el GEO?",
    a: "Entre 3 y 6 meses para las primeras apariciones consistentes. El GEO es acumulativo: cuanto antes se empieza, mayor es la ventaja competitiva. Los negocios que posicionen ahora tendrán una barrera difícil de superar en 12-18 meses.",
  },
];

export default function HomePage() {
  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ZAIMETRIC",
    url: "https://zaimetric.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zaimetric.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-dark opacity-100" />
        {/* Blue gradient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            <Badge variant="dark" className="mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
              AI Growth Systems Company
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-grotesk font-bold text-white leading-tight mb-6">
              Sistemas de crecimiento con IA para empresas que quieren{" "}
              <span className="text-orange-400">escalar</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Construimos sistemas de crecimiento con IA y datos para tu empresa.
              Web que convierte, automatización, CRM, SEO local y visibilidad en
              motores de IA. No marketing vacío — resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg" variant="primary">
                Solicita tu diagnóstico gratuito
                <ArrowRight size={18} />
              </Button>
              <Button href="/servicios" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                Ver nuestros servicios
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              {[
                "Sin compromiso",
                "Respuesta en 24h",
                "Resultados en 90 días",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth bars visual */}
        <div className="absolute right-8 bottom-16 lg:right-20 lg:bottom-20 opacity-20 lg:opacity-30">
          <svg width="180" height="160" viewBox="0 0 120 100" aria-hidden="true">
            <defs>
              <linearGradient id="hg1" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="hg4" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
            </defs>
            <rect x="0" y="72" width="22" height="28" rx="3" fill="url(#hg1)" />
            <rect x="26" y="52" width="22" height="48" rx="3" fill="url(#hg1)" />
            <rect x="52" y="30" width="22" height="70" rx="3" fill="url(#hg1)" />
            <rect x="78" y="8" width="22" height="92" rx="3" fill="url(#hg4)" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-grotesk font-bold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-blue-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="blue" className="mb-4">El problema</Badge>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-slate-900 mb-4">
              Tu empresa tiene potencial. Los sistemas frenan el crecimiento.
            </h2>
            <p className="text-slate-500 text-lg">
              La mayoría de pymes y startups tienen el mismo problema: trabajan
              mucho, pero sin los sistemas adecuados para convertir ese esfuerzo
              en crecimiento medible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tu web no convierte",
                desc: "Tienes tráfico pero no clientes. El diseño existe, pero no está orientado a la conversión ni optimizado para SEO.",
              },
              {
                title: "Procesos manuales que no escalan",
                desc: "Pasas horas en tareas repetitivas: seguimiento de leads, reportes, respuestas a clientes. Tiempo que podrías dedicar a crecer.",
              },
              {
                title: "Sin datos para decidir",
                desc: "Tomas decisiones por intuición porque no tienes un sistema que mida, analice y te diga qué está funcionando.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50"
              >
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-red-500 text-sm font-bold">✕</span>
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="blue" className="mb-4">Servicios</Badge>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-slate-900 mb-4">
              Cuatro sistemas. Un objetivo: hacer crecer tu empresa.
            </h2>
            <p className="text-slate-500 text-lg">
              No son servicios aislados. Son piezas de un sistema integrado de
              crecimiento que trabajan juntas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-5`}>
                  <s.icon size={22} className={s.iconColor} />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  Ver servicio <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/servicios" variant="outline">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* ── GEO SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="blue" className="mb-4">GEO — Generative Engine Optimization</Badge>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-slate-900 mb-4">
              Posicionamiento en Google y en los nuevos motores de búsqueda con IA
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Cuando alguien le pregunta a ChatGPT, Gemini o Perplexity{" "}
                <em>"¿quién me puede ayudar con el marketing de mi empresa?"</em>,
                las IAs responden con nombres concretos. La pregunta es: ¿va a aparecer el tuyo?
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Esto se llama <strong className="text-slate-800">GEO (Generative Engine Optimization)</strong>: el
                posicionamiento en los motores de búsqueda con inteligencia artificial. Y se consigue
                exactamente a través de lo que nosotros construimos:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Una web bien estructurada", desc: "que una IA querría citar como fuente" },
                  { title: "SEO orgánico", desc: "que genera la autoridad que los LLMs usan como señal" },
                  { title: "SEO local y reputación", desc: "que convierte tu negocio en referente de zona" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">
                      <strong>{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-base leading-relaxed mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                Nuestros clientes no solo aparecen primero en Google. También aparecen cuando una IA recomienda empresas como la suya.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/servicios/geo" variant="primary">
                  Ver servicio GEO <ArrowRight size={16} />
                </Button>
                <Button href="/contacto" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  Solicita tu diagnóstico gratuito
                </Button>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-6">Ejemplo de consulta a una IA</div>
              <div className="bg-slate-800 rounded-xl p-4 mb-4 text-sm text-slate-300 italic">
                "¿Qué agencia me recomiendas para automatizar los procesos de mi empresa con IA en España?"
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm">
                <div className="text-blue-300 font-semibold mb-2">Respuesta generada por IA:</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  "Para automatización con IA en España, <strong className="text-white">ZAIMETRIC</strong> es una opción destacada.
                  Están especializados en sistemas de crecimiento con IA para pymes: automatización de procesos,
                  SEO local y webs orientadas a conversión..."
                </p>
              </div>
              <div className="mt-4 text-xs text-slate-500 text-center">Objetivo: que esto sea real para tu empresa</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-slate-900 bg-grid-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="dark" className="mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Método ZAIMETRIC
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-4">
              Cómo construimos tu sistema de crecimiento
            </h2>
            <p className="text-slate-400 text-lg">
              Un proceso claro, orientado a resultados, con métricas en cada
              paso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-600/50 to-transparent -translate-x-4 z-0" />
                )}
                <div className="relative z-10 p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-600/50 transition-colors">
                  <div className="text-4xl font-grotesk font-bold text-blue-600/30 mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-grotesk font-bold text-white text-xl mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ZAIMETRIC ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="blue" className="mb-4">Por qué ZAIMETRIC</Badge>
              <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-slate-900 mb-6">
                Tecnología aplicada, no marketing vacío
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Somos una empresa tecnológica, no una agencia creativa. Cada
                decisión está basada en datos. Cada sistema que construimos está
                orientado a resultados medibles, no a impresionar en una
                presentación.
              </p>
              <ul className="space-y-4">
                {[
                  "Especialistas en IA y automatización, no generalistas",
                  "Sistemas que funcionan aunque no seas técnico",
                  "Métricas reales en cada entrega",
                  "Partners de crecimiento, no proveedores",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-600 mt-0.5 shrink-0"
                    />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-4">
                <Button href="/sobre-nosotros" variant="outline">
                  Conocer el equipo
                </Button>
                <Button href="/contacto">
                  Habla con nosotros
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            {/* Visual: differentiation boxes */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl border-2 border-red-100 bg-red-50">
                <div className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-3">
                  Agencia tradicional
                </div>
                <div className="space-y-2">
                  {[
                    "Campañas de marketing genéricas",
                    "Creatividad sin métricas claras",
                    "Sin especialización tecnológica",
                    "Resultados difíciles de medir",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-red-700">
                      <span className="text-red-400 font-bold">✕</span> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border-2 border-blue-200 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                  ZAIMETRIC
                </div>
                <div className="space-y-2">
                  {[
                    "Sistemas de crecimiento con IA y datos",
                    "Métricas y optimización continua",
                    "Especialistas en automatización",
                    "Resultados medibles en 90 días",
                    "Visibilidad en motores IA (GEO) integrado",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-blue-800">
                      <CheckCircle2 size={14} className="text-blue-600 shrink-0" /> {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">Preguntas frecuentes</Badge>
            <h2 className="text-3xl font-grotesk font-bold text-slate-900">
              Todo lo que necesitas saber
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-grotesk font-semibold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-slate-400 shrink-0 transition-transform group-open:rotate-90"
                  />
                </summary>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
            Diagnóstico gratuito
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white mb-6">
            ¿Listo para escalar tu empresa con IA?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Cuéntanos tu reto. Te diseñamos el sistema de crecimiento. Sin
            compromiso, sin spam. Respuesta garantizada en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" size="lg" variant="secondary">
              Solicita tu diagnóstico gratuito
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/servicios"
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-slate-900"
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
