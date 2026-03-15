import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-8">Aviso legal</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y Comercio Electrónico, se informa:
          </p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">Datos identificativos</h2>
          <p>
            <strong>Nombre:</strong> ZAIMETRIC<br />
            <strong>Web:</strong> zaimetric.com<br />
            <strong>Email:</strong> info@zaimetric.com
          </p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, imágenes y
            código, son propiedad de ZAIMETRIC o se encuentran debidamente
            licenciados.
          </p>
        </div>
      </div>
    </div>
  );
}
