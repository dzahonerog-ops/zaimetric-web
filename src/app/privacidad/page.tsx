import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | ZAIMETRIC",
  description: "Política de privacidad de ZAIMETRIC (DZHG Consulting SLU). Tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  robots: { index: false },
  alternates: { canonical: "https://zaimetric.com/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-2">Política de Privacidad</h1>
        <p className="text-slate-400 text-sm mb-12">Última actualización: marzo 2026</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">1. Responsable del tratamiento</h2>
            <p className="mb-4">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa que el responsable del tratamiento de los datos personales recabados a través de este sitio web es:
            </p>
            <ul className="space-y-1">
              {[
                { label: "Razón social", value: "DZHG Consulting SLU" },
                { label: "NIF", value: "B55375174" },
                { label: "Domicilio", value: "Calle Isla de la Toja, 8, esc dcha, bajo C, 28400 Collado Villalba, Madrid, España" },
                { label: "Correo electrónico", value: "info@zaimetric.com" },
              ].map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-slate-700">{item.label}:</span> {item.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">2. Datos que recopilamos y finalidades del tratamiento</h2>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-2">2.1 Formulario de contacto</h3>
            <p className="mb-3">Cuando el usuario cumplimenta el formulario de contacto del sitio web, se recaban los siguientes datos:</p>
            <ul className="list-disc ml-5 space-y-1 mb-4">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Teléfono (opcional)</li>
              <li>Mensaje</li>
            </ul>
            <div className="bg-slate-50 rounded-xl p-4 space-y-1 mb-6">
              <p><span className="font-semibold text-slate-700">Finalidad:</span> gestionar y responder las consultas planteadas por el usuario.</p>
              <p><span className="font-semibold text-slate-700">Base legitimadora:</span> consentimiento del interesado (art. 6.1.a RGPD).</p>
              <p><span className="font-semibold text-slate-700">Conservación:</span> los datos se conservan durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legales aplicables.</p>
            </div>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-2">2.2 Datos de navegación</h3>
            <p className="mb-6">
              Durante la navegación por el Sitio Web se pueden recopilar datos de forma automática a través de cookies y tecnologías similares. Consulta nuestra{" "}
              <Link href="/cookies" className="text-blue-600 hover:underline">Política de Cookies</Link>{" "}
              para más información.
            </p>

            <h3 className="font-grotesk font-semibold text-slate-800 mb-2">2.3 Contratación de servicios</h3>
            <p className="mb-3">Cuando el usuario contrata alguno de los servicios de Zaimetric, se tratan los datos necesarios para la gestión del contrato y la prestación del servicio.</p>
            <div className="bg-slate-50 rounded-xl p-4 space-y-1">
              <p><span className="font-semibold text-slate-700">Base legitimadora:</span> ejecución de un contrato en el que el interesado es parte (art. 6.1.b RGPD).</p>
              <p><span className="font-semibold text-slate-700">Conservación:</span> durante la vigencia de la relación contractual y, una vez finalizada, durante los plazos legales de prescripción aplicables.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">3. Destinatarios de los datos</h2>
            <p className="mb-3">Los datos personales no serán cedidos a terceros, salvo:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Cuando exista obligación legal de comunicarlos a organismos públicos o autoridades competentes.</li>
              <li>A encargados del tratamiento (proveedores de servicios tecnológicos, plataformas de email, CRM, etc.) con los que DZHG Consulting SLU ha suscrito los correspondientes contratos de encargo de tratamiento, quienes únicamente tratarán los datos según las instrucciones del responsable.</li>
            </ul>
            <p className="mt-3">Algunos de estos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En tal caso, las transferencias internacionales se amparan en las garantías adecuadas previstas en el RGPD (cláusulas contractuales tipo, decisiones de adecuación, etc.).</p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">4. Derechos del interesado</h2>
            <p className="mb-3">El usuario puede ejercer en cualquier momento los siguientes derechos respecto a sus datos personales:</p>
            <ul className="list-disc ml-5 space-y-2">
              {[
                { label: "Acceso", desc: "conocer qué datos trata DZHG Consulting SLU." },
                { label: "Rectificación", desc: "solicitar la corrección de datos inexactos o incompletos." },
                { label: "Supresión", desc: "solicitar la eliminación de los datos cuando ya no sean necesarios." },
                { label: "Limitación del tratamiento", desc: "solicitar que se restrinja el tratamiento de sus datos." },
                { label: "Portabilidad", desc: "recibir los datos en formato estructurado y de uso común." },
                { label: "Oposición", desc: "oponerse al tratamiento de sus datos en los casos previstos por la normativa." },
                { label: "Retirada del consentimiento", desc: "en cualquier momento, sin que ello afecte a la licitud del tratamiento previo." },
              ].map((r) => (
                <li key={r.label}><span className="font-semibold text-slate-700">{r.label}:</span> {r.desc}</li>
              ))}
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, el usuario puede enviar una solicitud por escrito a{" "}
              <a href="mailto:info@zaimetric.com" className="text-blue-600 hover:underline">info@zaimetric.com</a>,
              indicando su nombre, apellidos y una copia de su documento de identidad.
            </p>
            <p className="mt-3">
              Asimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la{" "}
              <strong className="text-slate-700">Agencia Española de Protección de Datos (AEPD)</strong>, a través de su sitio web{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aepd.es</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">5. Seguridad de los datos</h2>
            <p>
              DZHG Consulting SLU ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">6. Menores de edad</h2>
            <p>
              El Sitio Web no está dirigido a menores de 14 años. DZHG Consulting SLU no recaba conscientemente datos personales de menores de dicha edad. Si se detecta que se han recabado datos de un menor sin el consentimiento verificable de sus tutores legales, se procederá a su eliminación.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">7. Cambios en la política de privacidad</h2>
            <p>
              DZHG Consulting SLU se reserva el derecho a actualizar la presente Política de Privacidad para adaptarla a cambios normativos o modificaciones en los tratamientos realizados. Se recomienda al usuario consultarla periódicamente.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
