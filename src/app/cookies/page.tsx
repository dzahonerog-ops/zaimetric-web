import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-grotesk font-bold text-slate-900 mb-8">Política de cookies</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia de
            navegación y analizar el tráfico.
          </p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando visitas una web. No contienen información personal.
          </p>
          <h2 className="text-xl font-grotesk font-bold text-slate-900">Cookies que usamos</h2>
          <ul>
            <li><strong>Técnicas:</strong> Necesarias para el funcionamiento del sitio.</li>
            <li><strong>Analíticas:</strong> Google Analytics para medir el tráfico (anonimizadas).</li>
          </ul>
          <p>
            Puedes desactivar las cookies desde la configuración de tu navegador.
          </p>
        </div>
      </div>
    </div>
  );
}
