import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | ZAIMETRIC",
  description: "Aviso legal de ZAIMETRIC (DZHG Consulting SLU). Información sobre el titular del sitio web, propiedad intelectual y condiciones de uso.",
  robots: { index: false },
  alternates: { canonical: "https://zaimetric.com/aviso-legal" },
};

const sections = [
  {
    title: "1. Identificación del titular del sitio web",
    content: `En cumplimiento con lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el presente sitio web zaimetric.com es titularidad de:`,
    list: [
      { label: "Razón social", value: "DZHG Consulting SLU" },
      { label: "NIF", value: "B55375174" },
      { label: "Domicilio social", value: "Calle Isla de la Toja, 8, esc dcha, bajo C, 28400 Collado Villalba, Madrid, España" },
      { label: "Correo electrónico", value: "info@zaimetric.com" },
      { label: "Sitio web", value: "https://zaimetric.com" },
    ],
  },
  {
    title: "2. Objeto y ámbito de aplicación",
    content: `El presente Aviso Legal regula el acceso y uso del sitio web zaimetric.com (en adelante, "el Sitio Web"), así como los servicios y contenidos puestos a disposición de los usuarios a través del mismo.

El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de todas las condiciones incluidas en el presente Aviso Legal, sin perjuicio de las condiciones particulares que pudieran aplicarse a determinados servicios específicos.

DZHG Consulting SLU se reserva el derecho a modificar el presente Aviso Legal en cualquier momento, siendo responsabilidad del usuario consultarlo periódicamente.`,
  },
  {
    title: "3. Propiedad intelectual e industrial",
    content: `Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, vídeos, logotipos, iconos, software y cualquier otro material— son propiedad de DZHG Consulting SLU o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.

Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de dichos contenidos sin el previo consentimiento escrito de DZHG Consulting SLU.`,
  },
  {
    title: "4. Condiciones de uso",
    content: `El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos en el Sitio Web y a no emplearlos con fines ilícitos o contrarios al orden público, la moral, las buenas costumbres o que puedan lesionar los derechos de terceros.

Queda prohibido el uso del Sitio Web para:`,
    bullets: [
      "La transmisión de contenidos ilícitos, dañinos, amenazantes, difamatorios o de cualquier otra índole que infrinjan derechos de terceros.",
      "La introducción de virus, malware u otros programas informáticos dañinos.",
      "Cualquier acción que pueda causar daños a los sistemas informáticos de DZHG Consulting SLU o de terceros.",
    ],
  },
  {
    title: "5. Exclusión de responsabilidad",
    content: `DZHG Consulting SLU no garantiza la disponibilidad ininterrumpida del Sitio Web ni la ausencia de errores en los contenidos. La empresa no será responsable de los daños o perjuicios que pudieran derivarse del acceso o uso del Sitio Web, incluyendo los ocasionados por virus informáticos o por contenidos de terceros a los que se pueda acceder mediante enlaces externos.

Los enlaces a sitios web de terceros tienen carácter meramente informativo. DZHG Consulting SLU no asume responsabilidad alguna sobre el contenido, veracidad o legalidad de dichos sitios.`,
  },
  {
    title: "6. Legislación aplicable y jurisdicción",
    content: `El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del uso del Sitio Web, las partes se someten a la jurisdicción de los juzgados y tribunales de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.`,
  },
];

export default function AvisoLegalPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-2">Aviso Legal</h1>
        <p className="text-slate-400 text-sm mb-12">Última actualización: marzo 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-grotesk font-bold text-slate-900 mb-4">{s.title}</h2>
              {s.list && (
                <ul className="mb-4 space-y-1">
                  {s.list.map((item) => (
                    <li key={item.label} className="text-slate-600 text-sm">
                      <span className="font-semibold text-slate-700">{item.label}:</span> {item.value}
                    </li>
                  ))}
                </ul>
              )}
              {s.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed mb-3">{para}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-slate-600 text-sm leading-relaxed">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
