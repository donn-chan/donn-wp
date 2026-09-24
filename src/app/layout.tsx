import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import {
  AUTHOR_NAME,
  AUTHOR_TITLE,
  SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Headless WordPress & Next.js Developer | Donn Regalado",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  openGraph: {
    title: "Headless WordPress & Next.js Developer | Donn Regalado",
    description:
      "Decoupling WordPress from a fast, modern React/Next.js frontend, without disrupting your editors' workflow.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_TITLE,
      url: SITE_URL,
      knowsAbout: ["Headless WordPress", "Next.js", "React", "WPGraphQL", "TypeScript"],
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${AUTHOR_NAME} — Headless WordPress + Next.js Development`,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      founder: { "@id": `${SITE_URL}/#person` },
      address: { "@type": "PostalAddress", addressCountry: "TH" },
      areaServed: ["Southeast Asia", "Worldwide"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd data={siteJsonLd} />
        {children}
      </body>
    </html>
  );
}
