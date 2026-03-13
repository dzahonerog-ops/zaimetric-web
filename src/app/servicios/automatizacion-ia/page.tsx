import type { Metadata } from "next";
import { Cpu, ArrowRight, CheckCircle2, Zap, MessageSquare, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Automatización con IA para empresas | Agentes y workflows",
  description:
    "Automatiza los procesos de tu empresa con inteligencia artificial. Agentes IA, workflows automáticos y marketing automatizado. Implementación en 30 días.",
  alternates: { canonical: "https://zaimetric.com/servicios/automatizacion-ia" },
};

const useCases = [
  { icon: MessageSquare, title: "Atención al cliente", desc: "Agentes IA que responden consultas 24/7. Escalada a humano cuando es necesario." },
  { icon: TrendingUp, title: "Generación de leads", desc: "Workflows que capturan, califican y nutren leads automáticamente sin intervención manual." },
  { icon: Zap, title: "Seguimiento de ventas", desc: "Secuencias de follow-up automáticas. Nunca pierdas un lead por falta de seguimiento." },
  { icon: FileText, title: "Reporting automático", desc: "Informes semanales generados y enviados automáticamente. Datos listos cada lunes." },
];

const tools = ["n8n", "Make (Integromat)", "Zapier", "OpenAI / GPT-4", "Claude AI", "Slack", "HubSpot", "Notion", "Google Workspace", "WhatsApp API"];

const faqs = [
  { q: "¿Qué procesos se pueden automatizar con IA?", a: "Prácticamente cualquier proceso repetitivo: generación de leads, seguimiento de ventas, atención al cliente, reporting, gestión de contenidos, onboarding de clientes, facturación y más. En el diagnóstico gratuito identificamos los procesos con mayor impacto para tu empresa." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros diseñamos, implementamos y mantenemos los sistemas. Solo necesitas conocer tu negocio. Te formamos en el uso básico para que puedas gestionar el día a día." },
  { q: "¿Cuánto cuesta implementar automatizaciones?", a: "El precio depende de la complejidad. Proyectos de automatización simples desde 800€. Sistemas complejos con múltiples agentes IA desde 3.000€. Hay que añadir las licencias mensuales de las herramientas (~50-200€/mes)." },
  { q: "¿Cuánto tiempo lleva la implementación?", a: "Las automatizaciones básicas están funcionando en 2 semanas. Los sistemas más complejos con agentes IA llevan 4-6 semanas. Implementamos en fases para que veas resultados desde el primer mes." },
  { q: "¿Funciona con mis herramientas actuales?", a: "Sí. Trabajamos con más de 300 herramientas. Si ya tienes CRM, email marketing o herramientas de gestión, las integramos en el sistema. Si no tienes, te recomendamos el stack óptimo para tu empresa." },
];

export default function AutomatizacionIAPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatización con IA para empresas",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description: "Agentes IA, workflows con n8n/Make y automatización de marketing e procesos empresariales.",
    url: "https://zaimetric.com/servicios/automatizacion-ia",
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
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/servicios" className="hover:text-orange-400 transition-colors">Servicios</a>
            <span>/</span>
            <span className="text-slate-300">Automatización IA</span>
          </nav>
          <div className="max-w-3xl">
            <Badge variant="orange" className="mb-4">Automatización con IA</Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              Automatización con IA: elimina tareas manuales y escala tu empresa
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-4">
              Ahorra <strong className="text-orange-400">+15 horas semanales</strong> desde el primer mes.
              Implementación en 30 días. Sin necesidad de conocimientos técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/contacto" size="lg" variant="secondary">
                Solicita auditoría gratuita de procesos <ArrowRight size={18} />
              </Button>
              <Button href="/servicios/sistemas-comerciales" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                Ver sistemas comerciales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="orange" className="mb-4">Casos de uso</Badge>
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              ¿Qué procesos puedes automatizar con IA?
            </h2>
            <p className="text-slate-500">
              Cualquier proceso repetitivo puede automatizarse. Estos son los más habituales en pymes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="p-8 rounded-2xl bg-orange-50 border border-orange-100">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-4">
                  <u.icon size={22} className="text-white" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{u.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Stack tecnológico que usamos
            </h2>
            <p className="text-slate-500">
              Las mejores herramientas del mercado, configuradas para tu empresa.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <span key={t} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                {t}
              </span>
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
              ¿Cómo implementamos la automatización?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Auditoría de procesos", desc: "Mapeamos todos tus procesos actuales e identificamos los que más tiempo consumen y mayor impacto tienen al automatizarse." },
              { num: "02", title: "Diseño del sistema", desc: "Diseñamos el flujo de automatización: qué herramientas, qué triggers, qué condiciones y qué acciones." },
              { num: "03", title: "Implementación y formación", desc: "Construimos el sistema, lo probamos exhaustivamente y te formamos para que puedas gestionarlo." },
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

      {/* ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Resultados de la automatización con IA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "+15h", label: "ahorradas por semana en media", sub: "en los primeros 30 días" },
              { value: "3x", label: "más leads gestionados", sub: "sin aumentar el equipo" },
              { value: "0%", label: "leads perdidos por olvido", sub: "seguimiento 100% automático" },
            ].map((r) => (
              <div key={r.value} className="p-8 rounded-2xl bg-slate-900 text-center">
                <div className="text-4xl font-grotesk font-bold text-orange-400 mb-2">{r.value}</div>
                <div className="text-white font-medium mb-1">{r.label}</div>
                <div className="text-slate-500 text-sm">{r.sub}</div>
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
            Empieza a automatizar tu empresa hoy
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Auditoría gratuita de procesos. Identificamos qué puedes automatizar y cuánto tiempo ahorrarías.
          </p>
          <Button href="/contacto" size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
            Solicita auditoría de procesos gratuita <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
