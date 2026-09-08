import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import AccessibilityProvider from "@/components/AccessibilityProvider";
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
    default: "Limitless Softwares — AI Automation, M-PESA & Custom Software in Kenya",
    template: "%s | Limitless Softwares",
  },
  description:
    "Limitless Softwares builds websites, AI automation, M-PESA integrations and custom software that help African businesses win customers, remove manual work and operate better.",
  keywords: [
    "software development company Kenya",
    "AI automation Kenya",
    "business automation Kenya",
    "M-Pesa integration Kenya",
    "custom software development Nairobi",
    "website development Kenya",
    "e-commerce development Kenya",
    "AI chatbot Kenya",
    "WhatsApp automation Kenya",
    "mobile app development Kenya",
    "business dashboards Kenya",
    "API integration Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Limitless Softwares",
    title: "Limitless Softwares — Systems That Grow Your Business",
    description:
      "Websites, AI automation, M-PESA integrations and custom software for ambitious businesses in Africa and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Limitless Softwares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless Softwares — Systems That Grow Your Business",
    description:
      "Websites, AI automation, M-PESA integrations and custom software for ambitious businesses.",
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
  name: "Limitless Softwares",
  legalName: "Limitless Software Solutions",
  url: siteUrl,
  logo: `${siteUrl}/brand/limitless-logo.webp`,
  email: "info@limitlesssolutions.co.ke",
  telephone: "+254798489573",
  areaServed: ["KE", "Africa", "worldwide"],
  serviceType: [
    "Business Website Development",
    "E-commerce Development",
    "AI Automation",
    "AI Receptionist",
    "AI Sales Agent",
    "M-Pesa Integration",
    "API Integration",
    "Custom Software Development",
    "Mobile App Development",
    "Technology Support",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
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
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AccessibilityProvider>{children}</AccessibilityProvider>
      </body>
    </html>
  );
}
