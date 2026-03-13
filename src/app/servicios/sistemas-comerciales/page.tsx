import type { Metadata } from "next";
import { BarChart3, ArrowRight, CheckCircle2, Users, TrendingUp, Zap, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Sistemas comerciales para empresas | CRM y ventas automatizadas",
  description:
    "Optimiza tu proceso de ventas con sistemas comerciales inteligentes. CRM, lead scoring, embudos de venta automatizados y seguimiento de clientes. Solicita demo.",
  alternates: { canonical: "https://zaimetric.com/servicios/sistemas-comerciales" },
};

const components = [
  { icon: Users, title: "CRM conectado e inteligente", desc: "Un único lugar para gestionar todos tus clientes y oportunidades. Conectado con todas tus herramientas." },
  { icon: Filter, title: "Lead scoring automático", desc: "La IA puntúa automáticamente cada lead según su probabilidad de conversión. Prioriza tu tiempo donde importa." },
  { icon: TrendingUp, title: "Pipeline de ventas visual", desc: "Visualiza todo tu proceso comercial en un tablero. Sabe en qué fase está cada oportunidad." },
  { icon: Zap, title: "Seguimiento automático", desc: "Secuencias de seguimiento que se disparan automáticamente. Nunca más perder un lead por olvido." },
];

const faqs = [
  { q: "¿Con qué CRM trabajáis?", a: "Principalmente con HubSpot, Pipedrive y Notion. También trabajamos con CRMs existentes del cliente si ya tienen uno. En el diagnóstico gratuito evaluamos cuál es el mejor para su caso." },
  { q: "¿Puedo usar mi CRM actual?", a: "Sí, siempre que sea posible. Optimizamos y automatizamos el CRM que ya tienes. Si el CRM actual tiene limitaciones importantes, te explicamos las opciones disponibles." },
  { q: "¿Qué es el lead scoring?", a: "Es un sistema que puntúa automáticamente a cada lead según criterios como sector, tamaño de empresa, comportamiento en la web, interacciones anteriores, etc. Así sabes en qué leads merece la pena invertir tiempo." },
  { q: "¿Cuánto mejoran las ventas con un sistema comercial?", a: "Depende del punto de partida. Empresas sin sistema previo suelen ver un aumento del 30-50% en la tasa de cierre en los primeros 6 meses. El mayor impacto viene de dejar de perder leads por falta de seguimiento." },
];

export default function SistemasComencialesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sistemas comerciales con IA",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description: "CRM conectado, lead scoring automático y sistemas de ventas inteligentes para empresas.",
    url: "https://zaimetric.com/servicios/sistemas-comerciales",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-300">Sistemas comerciales</span>
          </nav>
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4">Sistemas comerciales</Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              Sistemas comerciales que multiplican tus ventas con IA y datos
            </h1>
            <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-xl px-5 py-3 mb-6">
              <p className="text-orange-300 font-semibold">
                El 78% de los leads se pierden por falta de seguimiento.
              </p>
            </div>
            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              Construimos el sistema comercial que tu empresa necesita: CRM inteligente, lead scoring y seguimiento automático.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" size="lg">
                Solicita demo del sistema comercial <ArrowRight size={18} />
              </Button>
              <Button href="/servicios/automatizacion-ia" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                Ver automatización con IA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-6">
                El caos comercial cuesta dinero real
              </h2>
              <div className="space-y-4">
                {[
                  "Leads que caen en el olvido porque nadie hace seguimiento",
                  "Comerciales que no saben en qué oportunidades centrar su tiempo",
                  "Sin visibilidad de qué fase del proceso está cada cliente",
                  "Decisiones de ventas basadas en intuición, no en datos",
                  "Reporting manual que consume horas cada semana",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </span>
                    <span className="text-slate-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-blue-600 text-white">
              <BarChart3 size={40} className="mb-6 opacity-60" />
              <h3 className="font-grotesk font-bold text-2xl mb-4">Con un sistema comercial de ZAIMETRIC</h3>
              <div className="space-y-3">
                {[
                  "0 leads perdidos por falta de seguimiento",
                  "Priorización automática de oportunidades",
                  "Pipeline visual en tiempo real",
                  "Decisiones basadas en datos, no en intuición",
                  "Reporting automático cada semana",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-200 shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Componentes del sistema comercial ZAIMETRIC
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((c) => (
              <div key={c.title} className="p-8 bg-white rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <c.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              ¿Para qué tipo de empresa es ideal?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Empresas B2B", desc: "Con ciclos de venta largos donde el seguimiento es crítico y las relaciones con el cliente determinan el éxito." },
              { title: "Servicios profesionales", desc: "Consultoras, agencias, despachos y empresas de servicios donde gestionar las oportunidades es clave." },
              { title: "Startups en crecimiento", desc: "Que necesitan un sistema comercial escalable sin contratar 5 comerciales desde el primer día." },
              { title: "Equipos de 1 a 20 personas", desc: "Pequeños equipos comerciales que necesitan multiplicar su capacidad sin contratar más recursos." },
            ].map((t) => (
              <div key={t.title} className="p-6 rounded-xl border-2 border-blue-100 bg-blue-50">
                <h3 className="font-grotesk font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
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
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
            Diseña tu sistema comercial
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Demo gratuita. Te mostramos cómo funcionaría el sistema adaptado a tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" size="lg">
              Solicita demo del sistema comercial <ArrowRight size={18} />
            </Button>
            <Button href="/contacto" size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-slate-900">
              ¿Ya tienes CRM? Optimizamos el tuyo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
