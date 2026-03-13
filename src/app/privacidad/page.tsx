import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-8">
          Política de privacidad
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            En ZAIMETRIC tratamos los datos personales que nos facilitas a
            través del formulario de contacto con la finalidad de atender tu
            consulta y enviarte información comercial relacionada con nuestros
            servicios, siempre que nos hayas dado tu consentimiento.
          </p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">Responsable del tratamiento</h2>
          <p>ZAIMETRIC · hello@zaimetric.com</p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición y portabilidad enviando un email a hello@zaimetric.com.
          </p>
        </div>
      </div>
    </div>
  );
}
