import type { Metadata } from "next";
import { Globe, CheckCircle2, ArrowRight, Zap, Search, BarChart3, Code } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Diseño web que convierte | Páginas web profesionales",
  description:
    "Creamos páginas web diseñadas para convertir visitas en clientes. Diseño profesional, velocidad, SEO y optimización de conversión. Solicita presupuesto.",
  alternates: { canonical: "https://zaimetric.com/servicios/paginas-web" },
};

const features = [
  { icon: Zap, title: "Velocidad extrema", desc: ">90 Lighthouse. Core Web Vitals perfectos. Carga en menos de 2 segundos." },
  { icon: Search, title: "SEO integrado", desc: "Arquitectura técnica optimizada desde el primer día. No como un parche posterior." },
  { icon: BarChart3, title: "Orientada a conversión", desc: "Cada elemento diseñado con un objetivo: convertir visitas en leads y clientes." },
  { icon: Code, title: "Integración con tus herramientas", desc: "CRM, analytics, chat, email marketing. Todo conectado y funcionando." },
];

const projectTypes = [
  { title: "Webs corporativas", desc: "Sitios completos que reflejan tu propuesta de valor y generan confianza desde el primer clic." },
  { title: "Landing pages", desc: "Páginas de aterrizaje optimizadas para una sola acción: convertir. Sin distracciones, máxima conversión." },
  { title: "Funnels de venta", desc: "Secuencias de páginas diseñadas para guiar al usuario hasta la compra o solicitud de contacto." },
];

const faqs = [
  { q: "¿Cuánto cuesta una página web profesional?", a: "El precio depende de la complejidad y los objetivos. Trabajamos con presupuestos desde 1.500€ para landings hasta 6.000€+ para webs corporativas completas. Solicita tu diagnóstico gratuito para obtener una propuesta personalizada." },
  { q: "¿Cuánto tiempo tarda en desarrollarse?", a: "Una landing page puede estar lista en 2-3 semanas. Una web corporativa completa suele tardar 4-8 semanas, dependiendo del alcance y los contenidos." },
  { q: "¿Incluye mantenimiento?", a: "Sí, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones, copias de seguridad, monitorización de rendimiento y soporte técnico." },
  { q: "¿Diseñáis también landings?", a: "Sí, es uno de nuestros servicios más demandados. Diseñamos landings orientadas a conversión con tests A/B incluidos." },
  { q: "¿La web estará optimizada para SEO?", a: "Sí, siempre. El SEO técnico está integrado en el proceso de desarrollo, no añadido a posteriori. Incluye estructura de URLs, schema markup, velocidad y mobile-first." },
];

export default function PaginasWebPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Páginas web que convierten",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description: "Diseño y desarrollo de páginas web orientadas a conversión con SEO integrado y rendimiento extremo.",
    url: "https://zaimetric.com/servicios/paginas-web",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-300">Páginas web</span>
          </nav>
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4">Diseño web</Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              Páginas web que convierten visitas en clientes
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              No hacemos webs bonitas. Hacemos webs que venden. Diseño orientado
              a conversión, velocidad extrema y SEO desde el primer día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg">
                Solicita tu presupuesto web <ArrowRight size={18} />
              </Button>
              <Button href="/servicios/seo-local" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                ¿Necesitas también SEO?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              ¿Por qué tu web actual no convierte?
            </h2>
            <p className="text-slate-500 text-lg">
              El 95% de las webs fallan en los mismos puntos. Los errores más
              comunes que hacen que pierdas clientes cada día.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Demasiado lenta", desc: "Cada segundo de carga extra reduce las conversiones un 7%. Google también te penaliza." },
              { title: "Sin propuesta de valor clara", desc: "El usuario llega y no sabe qué haces ni por qué debería elegirte. Se va en 3 segundos." },
              { title: "No está orientada a la acción", desc: "No hay CTAs claros, el formulario está escondido, no hay urgencia ni motivación para actuar." },
              { title: "Sin SEO técnico", desc: "Google no puede indexarla correctamente. Invisible para quien busca tus servicios." },
              { title: "No es mobile-first", desc: "El 70% del tráfico es móvil. Si tu web no funciona en móvil, pierdes a la mayoría." },
              { title: "Sin datos ni analítica", desc: "No sabes qué funciona ni qué no. Imposible optimizar sin medir." },
            ].map((p) => (
              <div key={p.title} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center mb-3">
                  <span className="text-red-500 text-xs font-bold">✕</span>
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="blue" className="mb-4">Lo que incluye</Badge>
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              ¿Qué incluye una web de alto rendimiento?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Tipos de proyectos web
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectTypes.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl border-2 border-blue-100 bg-blue-50">
                <Globe size={28} className="text-blue-600 mb-4" />
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-3">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
              Proceso de creación web en ZAIMETRIC
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Análisis y estrategia", desc: "Estudiamos tu negocio, competencia y objetivos. Definimos la arquitectura y el copy." },
              { num: "02", title: "Diseño UX/UI", desc: "Wireframes y diseño visual orientado a conversión. Mobile-first, siempre." },
              { num: "03", title: "Desarrollo", desc: "Next.js/React con Tailwind. Velocidad extrema y código limpio." },
              { num: "04", title: "Lanzamiento y optimización", desc: "Lanzamos, medimos y optimizamos. Google Analytics, Search Console y Hotjar integrados." },
            ].map((s) => (
              <div key={s.num} className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-3xl font-grotesk font-bold text-blue-600/40 mb-3">{s.num}</div>
                <h3 className="font-grotesk font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-grotesk font-bold text-slate-900 text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 rounded-xl bg-white border border-slate-200">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-grotesk font-semibold text-slate-900 pr-4 text-sm">{faq.q}</span>
                  <span className="text-slate-400 shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
            Solicita tu propuesta web
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Sin compromiso. Analizamos tu proyecto y te enviamos una propuesta detallada en 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" size="lg" variant="secondary">
              Solicita tu presupuesto web <ArrowRight size={18} />
            </Button>
            <Button href="/sobre-nosotros#portfolio" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-blue-600">
              Ver ejemplos de proyectos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
