import type { Metadata } from "next";
import { MapPin, ArrowRight, Star, Search, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "SEO local para empresas | Posicionamiento Google cerca de ti",
  description:
    "Posiciona tu empresa en los primeros resultados de Google en tu zona. SEO local, Google Business Profile, reseñas y estrategia geográfica. Consulta gratuita.",
  alternates: { canonical: "https://zaimetric.com/servicios/seo-local" },
};

const includes = [
  { icon: Globe, title: "Optimización Google Business Profile", desc: "Configuración completa y optimización continua de tu ficha de Google. El punto de entrada más importante para el SEO local." },
  { icon: Star, title: "Gestión de reseñas y reputación", desc: "Estrategia de captación de reseñas positivas y gestión de las negativas. Las reseñas son el factor #1 en el posicionamiento local." },
  { icon: Search, title: "SEO on-page local", desc: "Optimización de tu web para keywords locales: barrio, ciudad, provincia. Landing pages locales si es necesario." },
  { icon: TrendingUp, title: "Seguimiento y reporting mensual", desc: "Informe mensual con rankings, posición en el mapa, visibilidad y leads generados desde Google." },
];

const faqs = [
  { q: "¿Cuánto tarda el SEO local en funcionar?", a: "Los primeros resultados se ven en 30-60 días. Resultados consolidados en 3-6 meses. El SEO local es más rápido que el SEO general porque la competencia es local, no global." },
  { q: "¿Necesito tener página web para el SEO local?", a: "No es imprescindible, pero sí recomendable. Con solo el Google Business Profile se pueden conseguir buenos resultados en búsquedas locales. Con una web optimizada, los resultados son significativamente mejores." },
  { q: "¿Cómo mejoramos las reseñas de Google?", a: "Implementamos un sistema de captación de reseñas: mensajes automáticos post-servicio, QR en el establecimiento, follow-up por email. También gestionamos las respuestas a todas las reseñas (positivas y negativas)." },
  { q: "¿Qué es el Google Business Profile?", a: "Es la ficha de tu negocio que aparece en Google Maps y en el panel lateral cuando alguien busca tu empresa o servicios similares en tu zona. Es el activo más importante para el SEO local." },
  { q: "¿Funcionáis con negocios de cualquier sector?", a: "Sí. Trabajamos con restaurantes, clínicas, tiendas, despachos profesionales, academias, talleres y cualquier negocio con presencia física o que atienda a clientes en una zona geográfica específica." },
];

export default function SeoLocalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO local",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description: "Posicionamiento local en Google: Google Business Profile, reseñas y SEO geográfico.",
    url: "https://zaimetric.com/servicios/seo-local",
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
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/servicios" className="hover:text-orange-400 transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-300">SEO local</span>
          </nav>
          <div className="max-w-3xl">
            <Badge variant="orange" className="mb-4">SEO local</Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              SEO local: aparece primero en Google cuando tus clientes te buscan cerca
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              El 46% de las búsquedas en Google tienen intención local. Posiciona
              tu empresa en el mapa 3-pack y consigue clientes de tu zona cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg" variant="secondary">
                Solicita auditoría SEO local gratuita <ArrowRight size={18} />
              </Button>
              <Button href="/servicios/paginas-web" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                ¿Tienes web? Optimizamos el SEO técnico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is local SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-6">
                ¿Qué es el SEO local y por qué importa?
              </h2>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                El SEO local es la optimización de tu presencia en Google para
                búsquedas geográficas. Cuando alguien busca "fontanero en Madrid"
                o "clínica dental cerca de mí", el SEO local determina si apareces
                o no.
              </p>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                El objetivo es entrar en el <strong className="text-slate-700">mapa 3-pack</strong>:
                los 3 resultados con mapa que aparecen en la parte superior de
                Google. Quien aparece ahí recibe el 70% de los clics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "46%", label: "búsquedas con intención local" },
                  { value: "70%", label: "de clics van al mapa 3-pack" },
                  { value: "88%", label: "visitan el negocio en 24h" },
                  { value: "28%", label: "de búsquedas locales convierten" },
                ].map((s) => (
                  <div key={s.value} className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                    <div className="text-2xl font-grotesk font-bold text-orange-500 mb-1">{s.value}</div>
                    <div className="text-slate-600 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Search size={18} className="text-slate-400" />
                <div className="flex-1 bg-slate-800 rounded-lg px-4 py-2 text-slate-300 text-sm">
                  fontanero Madrid urgente
                </div>
              </div>
              {/* Mock 3-pack */}
              <div className="bg-white rounded-xl p-4 space-y-3">
                {[
                  { name: "Tu Empresa (con ZAIMETRIC)", stars: "4.9", reviews: "127", highlight: true },
                  { name: "Competidor A", stars: "4.2", reviews: "43", highlight: false },
                  { name: "Competidor B", stars: "3.8", reviews: "18", highlight: false },
                ].map((r) => (
                  <div
                    key={r.name}
                    className={`flex items-center gap-3 p-3 rounded-lg ${r.highlight ? "bg-blue-50 border-2 border-blue-200" : "bg-slate-50"}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${r.highlight ? "bg-blue-600 text-white" : "bg-slate-300 text-slate-600"}`}>
                      {r.highlight ? "★" : "·"}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-semibold ${r.highlight ? "text-blue-700" : "text-slate-700"}`}>{r.name}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-slate-500 text-xs">{r.stars} ({r.reviews} reseñas)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Qué incluye el servicio de SEO local
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includes.map((i) => (
              <div key={i.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <i.icon size={22} className="text-orange-500" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{i.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{i.desc}</p>
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
              Proceso de posicionamiento local
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Auditoría local", desc: "Analizamos tu situación actual: posición en Google, estado del Google Business Profile, reseñas, competencia local." },
              { num: "02", title: "Optimización y publicación", desc: "Optimizamos el perfil, la web y creamos contenido local. Implementamos la estrategia de captación de reseñas." },
              { num: "03", title: "Seguimiento mensual", desc: "Informe mensual con evolución de rankings, visibilidad, reseñas y leads generados. Ajustes continuos." },
            ].map((s) => (
              <div key={s.num} className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-3xl font-grotesk font-bold text-orange-500/40 mb-3">{s.num}</div>
                <h3 className="font-grotesk font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
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
      <section className="py-20 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
            Empieza a aparecer en Google hoy
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Auditoría SEO local gratuita. Analizamos tu posición actual y te decimos exactamente qué hacer.
          </p>
          <Button href="/contacto" size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
            Solicita auditoría SEO local gratuita <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
