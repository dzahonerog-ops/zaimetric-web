import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Cpu, BarChart3, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Servicios de IA, Automatización, SEO y Webs que convierten",
  description:
    "Descubre los servicios de ZAIMETRIC: páginas web de alto rendimiento, automatización con IA, sistemas comerciales y SEO local para hacer crecer tu empresa.",
  alternates: { canonical: "https://zaimetric.com/servicios" },
};

const services = [
  {
    icon: Globe,
    title: "Páginas web que generan clientes",
    slug: "paginas-web",
    tagline: "Diseño orientado a conversión",
    description:
      "Webs corporativas, landings y funnels diseñados para convertir visitas en clientes. Velocidad extrema, SEO integrado y tests A/B como base.",
    features: ["Diseño UX orientado a conversión", "Core Web Vitals > 90", "SEO técnico integrado", "Integración con CRM y analytics"],
    color: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-600",
    badge: "blue" as const,
  },
  {
    icon: Cpu,
    title: "Automatización con inteligencia artificial",
    slug: "automatizacion-ia",
    tagline: "Elimina tareas manuales y escala",
    description:
      "Agentes IA, workflows con n8n/Make/Zapier y automatización de marketing. Implementación en 30 días. Ahorra +15h semanales desde el primer mes.",
    features: ["Agentes de inteligencia artificial", "Workflows n8n / Make / Zapier", "Automatización de marketing", "Reporting automático"],
    color: "border-orange-200 bg-orange-50",
    iconBg: "bg-orange-500",
    badge: "orange" as const,
  },
  {
    icon: BarChart3,
    title: "Sistemas comerciales y ventas",
    slug: "sistemas-comerciales",
    tagline: "Multiplica tus ventas con datos",
    description:
      "CRM conectado, lead scoring automático y seguimiento de clientes. El 78% de leads se pierden por falta de seguimiento. Nosotros cerramos esa fuga.",
    features: ["CRM conectado e inteligente", "Lead scoring automático", "Pipeline de ventas visual", "Reporting en tiempo real"],
    color: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-600",
    badge: "blue" as const,
  },
  {
    icon: MapPin,
    title: "SEO local y posicionamiento Google",
    slug: "seo-local",
    tagline: "Aparece primero en tu zona",
    description:
      "Google Business Profile, gestión de reseñas y estrategia geográfica. Posiciona tu empresa en el mapa 3-pack de Google cuando tus clientes te buscan.",
    features: ["Google Business Profile optimizado", "Gestión de reseñas y reputación", "SEO on-page local", "Seguimiento mensual"],
    color: "border-orange-200 bg-orange-50",
    iconBg: "bg-orange-500",
    badge: "orange" as const,
  },
];

export default function ServiciosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servicios ZAIMETRIC",
    provider: { "@type": "Organization", name: "ZAIMETRIC" },
    description:
      "Servicios de crecimiento basados en IA y datos: páginas web, automatización, sistemas comerciales y SEO local.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Nuestros servicios
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              Servicios de crecimiento basados en IA y datos
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              No son servicios aislados. Son piezas de un sistema integrado que
              trabajan juntas para hacer crecer tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex p-3 rounded-xl ${s.iconBg} mb-5`}>
                  <s.icon size={24} className="text-white" />
                </div>
                <Badge variant={s.badge} className="mb-3">{s.tagline}</Badge>
                <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
                  {s.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button href={`/servicios/${s.slug}`}>
                    Ver servicio completo <ArrowRight size={16} />
                  </Button>
                  <Button href="/contacto" variant="outline">
                    Solicitar info
                  </Button>
                </div>
              </div>
              <div className={`${s.color} rounded-2xl p-10 border-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-center">
                  <s.icon size={64} className={s.badge === "blue" ? "text-blue-600 mx-auto mb-4 opacity-20" : "text-orange-500 mx-auto mb-4 opacity-20"} />
                  <div className="grid grid-cols-2 gap-4">
                    {s.features.map((f) => (
                      <div key={f} className="p-3 bg-white/80 rounded-xl text-xs text-slate-600 font-medium text-center">
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why together */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-6">
            No somos una agencia. Somos un sistema de crecimiento.
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Cada servicio potencia al siguiente. Una web que convierte necesita
            SEO para ser encontrada, automatización para gestionar los leads y un
            sistema comercial para cerrar ventas. Eso es lo que construimos.
          </p>
          <Button href="/contacto" size="lg" variant="secondary">
            ¿Cuál es el servicio adecuado para ti?
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
