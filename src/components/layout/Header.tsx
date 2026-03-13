"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Páginas web", href: "/servicios/paginas-web" },
  { label: "Automatización IA", href: "/servicios/automatizacion-ia" },
  { label: "Sistemas comerciales", href: "/servicios/sistemas-comerciales" },
  { label: "SEO local", href: "/servicios/seo-local" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoIcon />
            <span
              className={cn(
                "font-grotesk font-bold text-xl tracking-wider transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              ZAIMETRIC
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 font-medium text-sm transition-colors",
                  scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                )}
              >
                Servicios
                <ChevronDown
                  size={14}
                  className={cn("transition-transform", servicesOpen && "rotate-180")}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                  <Link
                    href="/servicios"
                    className="block px-3 py-2 text-xs font-semibold text-blue-600 uppercase tracking-wide border-b border-slate-100 mb-1"
                  >
                    Ver todos los servicios
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/sobre-nosotros"
              className={cn(
                "font-medium text-sm transition-colors",
                scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
              )}
            >
              Sobre nosotros
            </Link>
            <Link
              href="/blog"
              className={cn(
                "font-medium text-sm transition-colors",
                scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
              )}
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
            >
              Diagnóstico gratuito
            </Link>
          </nav>

          {/* Mobile menu btn */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <div className="py-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Servicios
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-3 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <Link
              href="/sobre-nosotros"
              className="px-3 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Sobre nosotros
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2">
              <Link
                href="/contacto"
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                Diagnóstico gratuito
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="hb1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="hb2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="hb3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="hb4" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      <rect x="1" y="21" width="6" height="9" rx="1.5" fill="url(#hb1)" />
      <rect x="9" y="15" width="6" height="15" rx="1.5" fill="url(#hb2)" />
      <rect x="17" y="9" width="6" height="21" rx="1.5" fill="url(#hb3)" />
      <rect x="25" y="2" width="6" height="28" rx="1.5" fill="url(#hb4)" />
    </svg>
  );
}
