import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | ZAIMETRIC",
  description: "Política de cookies de ZAIMETRIC (DZHG Consulting SLU). Información sobre las cookies utilizadas en zaimetric.com y cómo gestionarlas.",
  robots: { index: false },
  alternates: { canonical: "https://zaimetric.com/cookies" },
};

const cookieTable = [
  { name: "_ga", provider: "Google Analytics", purpose: "Distinguir usuarios únicos", duration: "2 años" },
  { name: "_ga_*", provider: "Google Analytics", purpose: "Mantener el estado de sesión", duration: "2 años" },
  { name: "_gid", provider: "Google Analytics", purpose: "Distinguir usuarios en un mismo día", duration: "24 horas" },
  { name: "_gcl_au", provider: "Google Ads", purpose: "Medir conversiones de campañas", duration: "3 meses" },
  { name: "cookieconsent_status", provider: "Propia", purpose: "Almacenar preferencias de cookies del usuario", duration: "1 año" },
];

const browsers = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
  { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
];

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-2">Política de Cookies</h1>
        <p className="text-slate-400 text-sm mb-12">Última actualización: marzo 2026</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario (ordenador, tablet, smartphone) cuando visita un sitio web. Permiten que el sitio web recuerde información sobre la visita, como el idioma preferido y otras opciones, lo que facilita la siguiente visita y hace que el sitio resulte más útil.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">2. Responsable</h2>
            <p>
              El responsable del uso de cookies en este sitio web es <strong className="text-slate-700">DZHG Consulting SLU</strong>, con NIF B55375174, domiciliada en Calle Isla de la Toja, 8, esc dcha, bajo C, 28400 Collado Villalba, Madrid. Contacto:{" "}
              <a href="mailto:info@zaimetric.com" className="text-blue-600 hover:underline">info@zaimetric.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">3. Tipos de cookies utilizadas</h2>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-3">3.1 Según su titularidad</h3>
            <ul className="list-disc ml-5 space-y-1 mb-6">
              <li><span className="font-semibold text-slate-700">Cookies propias:</span> generadas y gestionadas por DZHG Consulting SLU.</li>
              <li><span className="font-semibold text-slate-700">Cookies de terceros:</span> instaladas por entidades externas cuyos servicios se han integrado en el Sitio Web (p. ej., Google Analytics, Google Ads).</li>
            </ul>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-3">3.2 Según su finalidad</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Tipo</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Descripción</th>
                    <th className="text-left p-3 font-semibold text-slate-700 rounded-tr-lg">¿Requiere consentimiento?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tipo: "Técnicas / estrictamente necesarias", desc: "Imprescindibles para el correcto funcionamiento del sitio web.", consent: "No" },
                    { tipo: "Analíticas", desc: "Recogen información sobre el comportamiento de los usuarios para medir y mejorar el rendimiento del sitio.", consent: "Sí" },
                    { tipo: "Publicitarias / de marketing", desc: "Permiten gestionar espacios publicitarios y medir la eficacia de campañas.", consent: "Sí" },
                    { tipo: "Preferencias / personalización", desc: "Recuerdan las opciones elegidas por el usuario (idioma, región, etc.).", consent: "Sí" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="p-3 font-medium text-slate-700">{row.tipo}</td>
                      <td className="p-3">{row.desc}</td>
                      <td className="p-3">{row.consent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-3">3.3 Cookies concretas utilizadas en este sitio web</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700 rounded-tl-lg">Cookie</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Proveedor</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Finalidad</th>
                    <th className="text-left p-3 font-semibold text-slate-700 rounded-tr-lg">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row) => (
                    <tr key={row.name} className="border-t border-slate-100">
                      <td className="p-3 font-mono text-slate-700">{row.name}</td>
                      <td className="p-3">{row.provider}</td>
                      <td className="p-3">{row.purpose}</td>
                      <td className="p-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-400 mt-2 italic">Esta tabla se actualiza periódicamente conforme se añaden o eliminan servicios del sitio web.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">4. Base legal del tratamiento</h2>
            <p className="mb-3">
              El uso de cookies analíticas, publicitarias y de preferencias se basa en el <strong className="text-slate-700">consentimiento del usuario</strong> (art. 6.1.a RGPD y art. 22 LSSICE), otorgado mediante el banner de cookies que aparece en la primera visita al Sitio Web.
            </p>
            <p>
              Las cookies estrictamente necesarias se instalan en virtud del <strong className="text-slate-700">interés legítimo</strong> del responsable y no requieren consentimiento, ya que son imprescindibles para el funcionamiento del servicio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">5. Cómo gestionar o retirar el consentimiento</h2>
            <p className="mb-4">El usuario puede gestionar sus preferencias en cualquier momento a través de:</p>
            <ul className="list-disc ml-5 space-y-2 mb-4">
              <li><strong className="text-slate-700">El panel de preferencias de cookies</strong> del Sitio Web (accesible mediante el enlace "Gestionar cookies" en el pie de página).</li>
              <li>
                <strong className="text-slate-700">La configuración del navegador.</strong> A continuación se indican los enlaces a las instrucciones de los navegadores más comunes:
                <ul className="mt-2 space-y-1 ml-4">
                  {browsers.map((b) => (
                    <li key={b.name}>
                      <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{b.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <p className="mb-2">La retirada del consentimiento no afecta a la licitud del tratamiento previo basado en el mismo.</p>
            <p>Ten en cuenta que bloquear determinadas cookies puede afectar al correcto funcionamiento de algunas partes del sitio web.</p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">6. Transferencias internacionales</h2>
            <p>
              Algunas cookies instaladas por terceros (como Google) implican transferencias de datos a Estados Unidos. Dichas transferencias se amparan en las garantías adecuadas previstas por el RGPD, incluyendo las cláusulas contractuales tipo y el marco de privacidad UE-EE. UU. (EU-US Data Privacy Framework).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">7. Más información</h2>
            <p className="mb-3">
              Para cualquier consulta relacionada con el uso de cookies en este sitio web, puedes contactar con nosotros en{" "}
              <a href="mailto:info@zaimetric.com" className="text-blue-600 hover:underline">info@zaimetric.com</a>.
            </p>
            <p>
              También puedes obtener más información sobre las cookies y cómo gestionarlas en el sitio web de la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Agencia Española de Protección de Datos (AEPD)</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
