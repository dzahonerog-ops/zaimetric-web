import Link from "next/link";
import { Mail, Globe, Linkedin, Twitter } from "lucide-react";

const services = [
  { label: "Páginas web que convierten", href: "/servicios/paginas-web" },
  { label: "Automatización con IA", href: "/servicios/automatizacion-ia" },
  { label: "Sistemas comerciales", href: "/servicios/sistemas-comerciales" },
  { label: "SEO local", href: "/servicios/seo-local" },
];

const company = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const legal = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* CTA band */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white font-grotesk font-bold text-2xl mb-1">
              ¿Listo para escalar tu empresa?
            </h2>
            <p className="text-blue-100 text-sm">
              Diagnóstico gratuito · Sin compromiso · Respuesta en 24h
            </p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg font-grotesk"
          >
            Solicita tu diagnóstico
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoFooter />
              <span className="font-grotesk font-bold text-lg tracking-wider text-white">
                ZAIMETRIC
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Construimos sistemas de crecimiento con IA y datos para empresas que quieren escalar.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:hello@zaimetric.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors text-slate-400 hover:text-white"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://linkedin.com/company/zaimetric"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/zaimetric"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors text-slate-400 hover:text-white"
                aria-label="Twitter / X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-grotesk font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-grotesk font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-grotesk font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:hello@zaimetric.com"
                  className="hover:text-white transition-colors"
                >
                  hello@zaimetric.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-blue-400 shrink-0" />
                <a
                  href="https://zaimetric.com"
                  className="hover:text-white transition-colors"
                >
                  zaimetric.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-xs text-slate-500 mb-1">AI Growth Systems</p>
              <p className="text-sm text-white font-medium">
                Diagnóstico gratuito sin compromiso
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} ZAIMETRIC. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoFooter() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="fb1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="fb4" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      <rect x="1" y="21" width="6" height="9" rx="1.5" fill="url(#fb1)" />
      <rect x="9" y="15" width="6" height="15" rx="1.5" fill="url(#fb1)" />
      <rect x="17" y="9" width="6" height="21" rx="1.5" fill="url(#fb1)" />
      <rect x="25" y="2" width="6" height="28" rx="1.5" fill="url(#fb4)" />
    </svg>
  );
}
