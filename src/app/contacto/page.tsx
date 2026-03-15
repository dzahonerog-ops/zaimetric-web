"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const services = [
  "Páginas web que convierten",
  "Automatización con IA",
  "Sistemas comerciales",
  "SEO local",
  "No lo sé aún",
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const servicios = data.getAll("servicio") as string[];

    const payload = {
      nombre: data.get("nombre"),
      email: data.get("email"),
      empresa: data.get("empresa"),
      servicios,
      reto: data.get("reto"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error en el servidor");
      setSent(true);
    } catch {
      setError("Ha ocurrido un error al enviar. Inténtalo de nuevo o escríbenos a info@zaimetric.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="dark" className="mb-4 inline-flex">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
            Diagnóstico gratuito
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
            Cuéntanos tu reto. Te diseñamos el sistema de crecimiento.
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Sin compromiso, sin spam. Analizamos tu situación y te presentamos
            una propuesta concreta. Respuesta garantizada en 24 horas.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} className="text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-grotesk font-bold text-slate-900 mb-4">
                    ¡Mensaje recibido!
                  </h2>
                  <p className="text-slate-500 text-lg max-w-md">
                    Te contactaremos en menos de 24 horas con un análisis de tu situación y una propuesta adaptada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="nombre">
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 text-sm"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 text-sm"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="empresa">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 text-sm"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Servicio de interés
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <label
                          key={s}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="servicio"
                            value={s}
                            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                          />
                          <span className="text-sm text-slate-700">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="reto">
                      Cuéntanos tu reto *
                    </label>
                    <textarea
                      id="reto"
                      name="reto"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 text-sm resize-none"
                      placeholder="¿Qué problema quieres resolver? ¿Qué objetivo tienes? Cuanta más info, mejor propuesta podremos hacerte."
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/25 disabled:opacity-60 disabled:cursor-not-allowed font-grotesk"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400">
                    Al enviar este formulario aceptas nuestra{" "}
                    <a href="/privacidad" className="underline hover:text-slate-600">
                      política de privacidad
                    </a>
                    . Sin spam, solo lo que pediste.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* What happens next */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-grotesk font-bold text-slate-900 mb-4">
                  ¿Qué ocurre después?
                </h3>
                <div className="space-y-4">
                  {[
                    { num: "01", title: "Revisamos tu mensaje", desc: "Analizamos tu situación en detalle antes de contactarte." },
                    { num: "02", title: "Diagnóstico personalizado", desc: "Preparamos un análisis de tu caso con propuestas concretas." },
                    { num: "03", title: "Llamada estratégica", desc: "30 min para presentarte el sistema que necesita tu empresa." },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 shrink-0 mt-0.5">
                        {s.num.replace("0", "")}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{s.title}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="p-6 rounded-2xl bg-blue-600 text-white">
                <h3 className="font-grotesk font-bold mb-4">Garantías</h3>
                <div className="space-y-3">
                  {[
                    { icon: Clock, text: "Respuesta en menos de 24h" },
                    { icon: Shield, text: "Sin compromiso ni presión" },
                    { icon: Zap, text: "Diagnóstico personalizado gratuito" },
                    { icon: Mail, text: "Sin spam, nunca" },
                  ].map((t) => (
                    <div key={t.text} className="flex items-center gap-2.5">
                      <t.icon size={16} className="text-blue-200 shrink-0" />
                      <span className="text-blue-100 text-sm">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-2xl border border-slate-200">
                <h3 className="font-grotesk font-bold text-slate-900 mb-4">Contacto directo</h3>
                <a
                  href="mailto:info@zaimetric.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <Mail size={16} />
                  info@zaimetric.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
