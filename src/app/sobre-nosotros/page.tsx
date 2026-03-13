import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Sobre ZAIMETRIC | Empresa de IA y crecimiento digital",
  description:
    "Somos ZAIMETRIC, una empresa tecnológica que crea sistemas de crecimiento con IA y datos. Conoce nuestra misión, visión y el equipo detrás de cada proyecto.",
  alternates: { canonical: "https://zaimetric.com/sobre-nosotros" },
};

const values = [
  { icon: Target, title: "Orientados a resultados", desc: "No hacemos trabajo por hacer. Cada acción tiene un objetivo medible. Si no se puede medir, no se hace." },
  { icon: Eye, title: "Transparencia total", desc: "Sin letra pequeña, sin promesas vacías. Te decimos exactamente qué vamos a hacer, cuánto cuesta y qué resultado esperas." },
  { icon: CheckCircle2, title: "Tecnología aplicada", desc: "La IA es nuestro motor, no nuestra cortada. La usamos donde aporta valor real, no como decoración en la presentación." },
  { icon: Heart, title: "Partner, no proveedor", desc: "Tu éxito es nuestro éxito. Trabajamos como una extensión de tu equipo, no como un servicio externo desconectado." },
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              Sobre nosotros
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
              ZAIMETRIC: construimos sistemas de crecimiento, no campañas
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Somos una empresa tecnológica especializada en IA y datos, no una
              agencia de marketing. Construimos sistemas que generan resultados
              medibles para pymes y startups.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge variant="blue" className="mb-4">Nuestra historia</Badge>
              <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-6">
                El nombre lo dice todo
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Z</strong> de Zahonero — el apellido del fundador,
                  una empresa con identidad personal y compromiso directo. No una
                  corporación anónima.
                </p>
                <p>
                  <strong className="text-slate-900">AI</strong> de Artificial Intelligence —
                  la inteligencia artificial como motor de crecimiento, no como
                  buzzword en una presentación.
                </p>
                <p>
                  <strong className="text-slate-900">METRIC</strong> de Métricas y Analítica —
                  decisiones basadas en datos, crecimiento medible y optimización
                  continua.
                </p>
                <p className="mt-6 text-lg">
                  El concepto central:{" "}
                  <strong className="text-blue-600">IA + Métricas = Crecimiento empresarial medible.</strong>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: "Empresa tecnológica", yes: true },
                { label: "Expertos en crecimiento basado en datos", yes: true },
                { label: "Especialistas en automatización con IA", yes: true },
                { label: "Partner de sistemas comerciales", yes: true },
                { label: "Agencia de marketing tradicional", yes: false },
                { label: "Empresa creativa genérica", yes: false },
                { label: "Freelance de diseño web", yes: false },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-3 p-3 rounded-lg ${item.yes ? "bg-blue-50" : "bg-slate-50"}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${item.yes ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-500"}`}>
                    {item.yes ? "✓" : "✕"}
                  </span>
                  <span className={`text-sm ${item.yes ? "text-slate-800 font-medium" : "text-slate-400 line-through"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-blue-600 text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">Misión</div>
              <h2 className="text-2xl font-grotesk font-bold mb-4">
                Hacer que las pymes compitan con las herramientas de las grandes
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Construimos sistemas de crecimiento con IA y datos para empresas
                que no tienen 50 personas en marketing pero quieren resultados de
                empresa grande.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-700">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Visión</div>
              <h2 className="text-2xl font-grotesk font-bold mb-4">
                Ser el partner de crecimiento de referencia para pymes en España
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Un futuro donde cada pyme y startup tiene acceso a los mismos
                sistemas de crecimiento que las grandes corporaciones, sin
                necesitar su presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Badge variant="blue" className="mb-4">Valores</Badge>
            <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
              Cómo trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-grotesk font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
              Nuestro método: diferente a una agencia
            </h2>
            <p className="text-slate-400">
              No vendemos horas. Construimos sistemas. La diferencia es fundamental.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Diagnóstico profundo", desc: "Empezamos entendiendo tu negocio, no presentando soluciones genéricas. Diagnóstico de sistemas de crecimiento." },
              { title: "Sistemas, no servicios", desc: "Cada entrega es un sistema que funciona de forma autónoma, no una campaña que caduca en 30 días." },
              { title: "Optimización continua", desc: "No entregamos y desaparecemos. Medimos, analizamos y optimizamos en base a datos reales." },
            ].map((m) => (
              <div key={m.title} className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                <h3 className="font-grotesk font-bold text-white text-lg mb-3">{m.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-grotesk font-bold text-white mb-4">
            ¿Listo para conocer tu sistema de crecimiento?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Diagnóstico gratuito. 30 minutos. Te decimos exactamente qué sistema necesita tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" size="lg" variant="secondary">
              Solicita diagnóstico gratuito <ArrowRight size={18} />
            </Button>
            <Button href="/servicios" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-blue-600">
              Ver nuestros servicios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
