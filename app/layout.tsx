import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "N30 Digital Solutions - Web Design & Development in Lae, Papua New Guinea",
  description: "Premier digital agency in Lae, PNG. We deliver affordable, high-impact web design, development, and digital solutions for local businesses. Transform your online presence today.",
  keywords: "web design, web development, digital solutions, Lae, Papua New Guinea, business website, e-commerce, SEO, digital agency",
  authors: [{ name: "N30 Digital Solutions" }],
  creator: "N30 Digital Solutions",
  publisher: "N30 Digital Solutions",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://n30-website.vercel.app",
    siteName: "N30 Digital Solutions",
    title: "N30 Digital Solutions - Digital Agency in Lae, PNG",
    description: "Affordable web design, development, and digital solutions for Lae businesses. We transform local companies with modern digital presence.",
    images: [
      {
        url: "https://n30-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N30 Digital Solutions - Digital Agency Lae PNG",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N30 Digital Solutions - Lae's Premier Digital Agency",
    description: "Transform your business with affordable, professional digital solutions. Web design, development & more.",
    images: ["https://n30-website.vercel.app/og-image.jpg"],
    creator: "@n30digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://n30-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HJMXXMF7TY"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HJMXXMF7TY');
            `,
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://n30-website.vercel.app" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "N30 Digital Solutions",
              "url": "https://n30-website.vercel.app",
              "logo": "https://n30-website.vercel.app/logo.png",
              "description": "Premier digital agency in Lae, Papua New Guinea providing web design, development, and digital solutions for businesses.",
              "sameAs": [
                "https://facebook.com/n30digital",
                "https://twitter.com/n30digital",
                "https://linkedin.com/company/n30digital"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lae",
                "addressRegion": "Morobe Province",
                "addressCountry": "PG"
              },
              "contact": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "hello@n30digital.com"
              }
            })
          }}
        />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="your-verification-code-here" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0066ff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
