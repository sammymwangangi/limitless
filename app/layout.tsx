import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://limitlesssolutions.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Limitless Software Solutions — Custom Software & AI Development in Kenya",
    template: "%s | Limitless Software Solutions",
  },
  description:
    "Leading software development company in Kenya. We build custom software, mobile apps, e-commerce platforms, AI automation, M-Pesa integrations, ISP billing, POS systems, and digital growth solutions.",
  keywords: [
    "software development company Kenya",
    "website development Kenya",
    "AI automation Kenya",
    "custom software development Nairobi",
    "mobile app development Kenya",
    "M-Pesa integration",
    "POS systems Kenya",
    "ISP billing software",
    "e-commerce development Kenya",
    "payment integration Kenya",
    "business systems Kenya",
    "call center software Kenya",
    "real-time dashboards",
    "social media marketing Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Limitless Software Solutions",
    title: "Limitless Software Solutions — Custom Software & AI Development in Kenya",
    description:
      "Custom software development, AI automation, mobile apps, e-commerce, M-Pesa integrations and digital growth solutions in Kenya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Limitless Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless Software Solutions — Custom Software & AI Development in Kenya",
    description:
      "Custom software, AI automation, mobile apps, M-Pesa integrations & digital growth solutions in Kenya.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Limitless Software Solutions",
  url: siteUrl,
  email: "info@limitlesssolutions.co.ke",
  telephone: "+254000000000",
  areaServed: ["KE", "worldwide"],
  serviceType: [
    "Custom Software Development",
    "Website Design & Development",
    "Mobile App Development",
    "AI Integration & Automation",
    "M-Pesa Integration",
    "E-commerce Development",
    "ISP Billing Systems",
    "POS Systems",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
