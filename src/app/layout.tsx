import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zaimetric.com"),
  title: {
    default: "ZAIMETRIC | Sistemas de crecimiento con IA para empresas",
    template: "%s | ZAIMETRIC",
  },
  description:
    "Diseñamos sistemas de crecimiento para pymes y startups con inteligencia artificial, automatización y datos. Páginas web, IA, SEO y sistemas comerciales.",
  keywords: [
    "sistemas de crecimiento IA",
    "automatización empresas",
    "agencia IA pymes",
    "SEO local",
    "páginas web que convierten",
    "CRM automatizado",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://zaimetric.com",
    siteName: "ZAIMETRIC",
    title: "ZAIMETRIC | Sistemas de crecimiento con IA para empresas",
    description:
      "Construimos sistemas de crecimiento con IA y datos para tu empresa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZAIMETRIC — AI Growth Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zaimetric",
    creator: "@zaimetric",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zaimetric.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/brand/zaimetric-favicon.svg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZAIMETRIC",
              description:
                "AI Growth Systems Company. Construimos sistemas de crecimiento con IA y datos.",
              url: "https://zaimetric.com",
              email: "hello@zaimetric.com",
              sameAs: [
                "https://linkedin.com/company/zaimetric",
                "https://twitter.com/zaimetric",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
