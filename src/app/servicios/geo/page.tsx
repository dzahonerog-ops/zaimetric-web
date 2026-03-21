import type { Metadata } from "next";
import { Bot, ArrowRight, FileText, Globe, MapPin, BarChart3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "GEO — Posicionamiento en ChatGPT, Gemini y Perplexity | ZAIMETRIC",
  description:
    "Haz que las IAs recomienden tu empresa. GEO (Generative Engine Optimization): posicionamiento en ChatGPT, Gemini, Perplexity y Copilot. Resultados en 3-6 meses.",
  alternates: { canonical: "https://zaimetric.com/servicios/geo" },
};

const includes = [
  {
    icon: Bot,
    title: "Auditoría GEO de punto de partida",
    desc: "Analizamos cómo aparece tu empresa ahora mismo en ChatGPT, Gemini, Perplexity y Copilot. Identificamos en qué consultas deberías aparecer y no apareces, y dónde está el mayor potencial.",
  },
  {
    icon: FileText,
    title: "Arquitectura de contenido citable",
    desc: "Creamos o mejoramos el contenido de tu web para que una IA lo quiera usar como fuente: artículos estructurados, FAQs estratégicas, páginas de servicio con datos verificables.",
  },
  {
    icon: Globe,
    title: "Optimización de señales externas",
    desc: "Los LLMs sintetizan múltiples fuentes. Trabajamos tu presencia en los directorios, plataformas y medios que los motores de IA consultan: Google Business Profile, directorios sectoriales, menciones en medios.",
  },
  {
    icon: MapPin,
    title: "SEO local integrado",
    desc: "El SEO local bien ejecutado es la base del GEO. Un Google Business Profile optimizado, reseñas consistentes y autoridad local son exactamente las señales que los LLMs usan para recomendar negocios.",
  },
  {
    icon: BarChart3,
    title: "Medición y seguimiento mensual",
    desc: "Test mensual de visibilidad en los principales motores de IA con un set de 15 consultas relevantes para tu sector. Informe de evolución, comparativa con competidores y plan de acción del siguiente mes.",
  },
];

const faqs = [
  {
    q: "¿Qué es el GEO exactamente?",
    a: "GEO (Generative Engine Optimization) es la optimización de tu presencia digital para que los motores de búsqueda con IA — ChatGPT, Gemini, Perplexity, Copilot — mencionen y recomienden tu empresa cuando los usuarios hacen preguntas relevantes. Es el equivalente al SEO, pero para la era de la búsqueda generativa.",
  },
  {
    q: "¿Cuánto tiempo tarda el GEO en dar resultados?",
    a: "Entre 3 y 6 meses para las primeras apariciones consistentes en motores de IA. El GEO es acumulativo: las señales de autoridad se construyen con el tiempo y son difíciles de revertir por la competencia una vez establecidas.",
  },
  {
    q: "¿El GEO reemplaza al SEO?",
    a: "No. El GEO se construye encima del SEO. Un buen posicionamiento en Google es una de las señales más importantes para los LLMs. En ZAIMETRIC los trabajamos juntos: el resultado es visibilidad en Google y en las IAs al mismo tiempo.",
  },
  {
    q: "¿Cómo sé si mi empresa aparece ya en ChatGPT o Gemini?",
    a: "La forma más directa es preguntar manualmente a ChatGPT, Gemini y Perplexity con las consultas que haría tu cliente ideal. Si no apareces, ahí está el punto de partida. En ZAIMETRIC hacemos esta auditoría de visibilidad GEO de forma gratuita.",
  },
  {
    q: "¿Para qué tipo de empresas funciona mejor el GEO?",
    a: "Para cualquier empresa cuyos clientes usen IAs para buscar proveedores o servicios. Es especialmente relevante para negocios locales (restaurantes, clínicas, gimnasios, hoteles), agencias y consultoras B2B, y empresas de servicios profesionales.",
  },
  {
    q: "¿Qué diferencia al GEO de ZAIMETRIC del de otras agencias?",
    a: "En ZAIMETRIC el GEO no es un servicio aislado: es el resultado de los sistemas que ya construimos. Web bien estructurada + SEO local consolidado + contenido de autoridad = visibilidad en Google y en las IAs. No necesitas dos proveedores: lo cubrimos todo desde un solo punto.",
  },
];

export default function GeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GEO — Generative Engine Optimization",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description:
      "Posicionamiento en motores de búsqueda con IA: ChatGPT, Gemini, Perplexity y Copilot. Construimos la presencia digital que hace que las IAs recomienden tu empresa.",
    url: "https://zaimetric.com/servicios/geo",
    serviceType: "Generative Engine Optimization",
    areaServed: { "@type": "Country", name: "España" },
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
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-300">GEO</span>
          </nav>
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4">GEO — Generative Engine Optimization</Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              GEO — Generative Engine Optimization
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              Haz que ChatGPT, Gemini y Perplexity recomienden tu empresa cuando tus clientes buscan
              lo que ofreces. El posicionamiento en IAs ya no es opcional — es la próxima ventaja competitiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg" variant="secondary">
                Solicita auditoría GEO gratuita <ArrowRight size={18} />
              </Button>
              <Button
                href="/blog/que-es-geo-generative-engine-optimization"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900"
              >
                ¿Qué es el GEO? Leer el artículo →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "1.000M+", label: "consultas mensuales a motores de IA generativa" },
              { value: "3-6 meses", label: "para primeras apariciones consolidadas" },
              { value: "12-18 meses", label: "ventana de oportunidad antes de que se cierre" },
              { value: "0€", label: "coste por visita orgánica desde una recomendación IA" },
            ].map((s) => (
              <div key={s.value}>
                <div className="text-3xl font-grotesk font-bold text-white mb-1">{s.value}</div>
                <div className="text-blue-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-6">
                ¿Qué es el GEO y por qué tu empresa necesita posicionarse en las IAs?
              </h2>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                Cuando alguien le pregunta a ChatGPT{" "}
                <em>"¿qué agencia de marketing me recomiendas en Madrid?"</em> o a Gemini{" "}
                <em>"¿cuál es el mejor restaurante italiano cerca de mí?"</em>, la IA responde
                con nombres concretos. Esos nombres no aparecen por casualidad.
              </p>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                El <strong className="text-slate-700">GEO (Generative Engine Optimization)</strong> es la
                disciplina que optimiza tu presencia digital para que los motores de IA te mencionen,
                recomienden y citen cuando tus clientes potenciales hacen preguntas relevantes.
              </p>
              <p className="text-slate-600 text-base leading-relaxed p-4 bg-blue-50 rounded-xl border border-blue-100">
                La ventana de oportunidad está abierta ahora. Los negocios que construyan su
                posicionamiento en IAs en los próximos 12-18 meses tendrán una ventaja competitiva
                difícil de revertir. Los que esperen, partirán desde cero.
              </p>
            </div>
            {/* AI chat mock */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-6">
                Ejemplo de consulta a una IA
              </div>
              <div className="bg-slate-800 rounded-xl p-4 mb-4 text-sm text-slate-300 italic">
                "¿Qué empresa me recomiendas para automatizar los procesos de mi empresa con IA en España?"
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm">
                <div className="text-blue-300 font-semibold mb-2">Respuesta generada por IA:</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  "Para automatización con IA en España,{" "}
                  <strong className="text-white">ZAIMETRIC</strong> es una opción destacada.
                  Están especializados en sistemas de crecimiento con IA para pymes: automatización
                  de procesos, SEO local y webs orientadas a conversión..."
                </p>
              </div>
              <div className="mt-4 text-xs text-slate-500 text-center font-medium">
                Objetivo: que esto sea real para tu empresa.
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
              Qué incluye el servicio GEO de ZAIMETRIC
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Cómo construimos tu posicionamiento en las IAs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Autoridad de contenido",
                desc: "Contenido largo, estructurado y con datos que una IA querría citar como fuente. Artículos de fondo, guías completas, análisis con cifras reales. Cuanto más citable es tu contenido, más probabilidad de ser recomendado.",
              },
              {
                num: "02",
                title: "Respuesta directa",
                desc: "FAQs estratégicas diseñadas para responder exactamente lo que un usuario preguntaría a una IA. Listas, comparativas y definiciones concisas. Formato que los LLMs extraen directamente.",
              },
              {
                num: "03",
                title: "Señales externas",
                desc: "Presencia consolidada en las fuentes que los LLMs consultan: Google Business Profile, Tripadvisor, directorios sectoriales, medios digitales con autoridad. Los LLMs sintetizan múltiples fuentes — cuantas más te mencionen, más visible eres.",
              },
            ].map((p) => (
              <div key={p.num} className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-4xl font-grotesk font-bold text-blue-600/30 mb-4">{p.num}</div>
                <h3 className="font-grotesk font-bold text-slate-900 text-xl mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZAIMETRIC GEO */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
              GEO integrado, no un servicio aislado
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              La mayoría de agencias que ofrecen GEO lo tratan como un servicio independiente.
              El problema: el GEO no funciona sin una base sólida de web, SEO y presencia local.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-2 bg-slate-800 px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                <span>Lo que construimos</span>
                <span>Lo que aporta al GEO</span>
              </div>
              {[
                { built: "Web bien estructurada", geo: "Contenido citable que los LLMs usan como fuente" },
                { built: "SEO local y Google Business Profile", geo: "Señal de relevancia local que los LLMs priorizan" },
                { built: "Contenido de autoridad (blog)", geo: "Autoridad temática que posiciona la marca como referente" },
                { built: "Reseñas y reputación", geo: "Señal de confianza que los LLMs valoran para recomendar" },
              ].map((row, i) => (
                <div
                  key={row.built}
                  className={`grid grid-cols-2 px-6 py-4 gap-4 text-sm ${i % 2 === 0 ? "bg-slate-800/50" : "bg-slate-800/30"}`}
                >
                  <span className="text-white font-medium flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" /> {row.built}
                  </span>
                  <span className="text-slate-400">{row.geo}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm">
              No necesitas dos proveedores. Con ZAIMETRIC cubres Google y las IAs desde un solo sistema.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Cómo funciona el proceso GEO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Auditoría GEO",
                desc: "Analizamos tu visibilidad actual en las IAs, identificamos las consultas donde deberías aparecer y evaluamos el estado de las señales GEO: web, contenido, presencia local, señales externas.",
              },
              {
                num: "02",
                title: "Implementación",
                desc: "Construimos la base: contenido citable, FAQs estratégicas, optimización de señales externas. Paralelamente, reforzamos el SEO local que alimenta el GEO.",
              },
              {
                num: "03",
                title: "Seguimiento y optimización",
                desc: "Test mensual de visibilidad en ChatGPT, Gemini, Perplexity y Copilot. Informe de evolución y plan de acción continuo para seguir ganando presencia.",
              },
            ].map((s) => (
              <div key={s.num} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-grotesk font-bold text-blue-600/40 mb-3">{s.num}</div>
                <h3 className="font-grotesk font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-grotesk font-bold text-slate-900 text-center mb-10">
            Preguntas frecuentes sobre GEO
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
            ¿Aparece tu empresa cuando una IA recomienda negocios como el tuyo?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Auditoría GEO gratuita. Analizamos tu visibilidad actual en ChatGPT, Gemini y Perplexity
            y te decimos exactamente desde dónde partes.
          </p>
          <Button href="/contacto" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
            Solicita auditoría GEO gratuita <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
