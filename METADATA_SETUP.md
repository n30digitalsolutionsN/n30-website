# N30 Digital Solutions - Next.js 13 Metadata & Social Sharing Setup

## Overview

This document explains the complete metadata setup for dynamic Open Graph (OG), Twitter Card, LinkedIn, and WhatsApp preview images across all pages.

---

## Architecture

### 1. Root Layout Metadata (`app/layout.tsx`)
- **Purpose**: Provide default metadata and fallback images for all pages
- **Fallback Image**: `logo.png` (generic brand image)
- **Includes**: Structured data (Organization + LocalBusiness schemas)
- **Features**: Google Analytics, site verification, theme configuration

### 2. Page-Level Metadata (e.g., `app/blog/butibam-mantics-case-study/page.tsx`)
- **Purpose**: Override root layout with page-specific metadata
- **Custom Image**: Page-specific hero image (e.g., `mantics-hero.png`)
- **Overrides**: Title, description, OG images, Twitter images
- **Inheritance**: Inherits structured data, robots, icons from root layout

---

## How It Works

### Metadata Merging Process

When Next.js renders a page, metadata is merged like this:

```
ROOT LAYOUT (Default/Fallback)
├─ metadataBase: "https://n30-website.vercel.app"
├─ title: "N30 Digital Solutions - Web Design..."
├─ openGraph.images: [logo.png]
├─ twitter.images: [logo.png]
├─ Structured data: Organization, LocalBusiness
└─ Robots, icons, manifest

PAGE METADATA (Overrides)
├─ title: "Building the Butibam Mantics..." ✅ OVERRIDES
├─ description: "How modern web development..." ✅ OVERRIDES
├─ openGraph.images: [mantics-hero.png] ✅ OVERRIDES
├─ twitter.images: [mantics-hero.png] ✅ OVERRIDES
└─ Inherits: structured data, robots, icons, manifest
```

### Result: What Social Platforms See

**Facebook/WhatsApp/LinkedIn:**
```
Title: Building the Butibam Mantics Rugby Team Website
Description: How modern web development transformed...
Image: mantics-hero.png (1200x630px) ✅
URL: https://n30-website.vercel.app/blog/butibam-mantics-case-study
```

**Twitter/X:**
```
Title: Building the Butibam Mantics Rugby Team Website
Description: Professional digital transformation for a local rugby club
Image: mantics-hero.png (1200x630px) ✅
Creator: @n30digital
```

**LinkedIn (Article):**
```
Title: Building the Butibam Mantics Rugby Team Website
Description: How modern web development transformed...
Image: mantics-hero.png (1200x630px) ✅
Published: 2025-12-09
```

---

## Complete Implementation

### 1. Root Layout (`app/layout.tsx`) ✅ CORRECT

```typescript
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

/**
 * Root Layout Metadata
 * - metadataBase: Required for proper image URL resolution
 * - Default OG/Twitter images as fallback
 * - Structured data for SEO (Organization + LocalBusiness)
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://n30-website.vercel.app"),
  
  // Page-level metadata
  title: "N30 Digital Solutions - Web Design & Development in Lae, Papua New Guinea",
  description: "Premier digital agency in Lae, PNG. We deliver affordable, high-impact web design, development, and digital solutions for local businesses.",
  keywords: "web design, web development, digital solutions, Lae, Papua New Guinea, business website, e-commerce, SEO, digital agency",
  authors: [{ name: "N30 Digital Solutions" }],
  creator: "N30 Digital Solutions",
  publisher: "N30 Digital Solutions",
  
  // Format detection
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://n30-website.vercel.app",
    siteName: "N30 Digital Solutions",
    title: "N30 Digital Solutions - Digital Agency in Lae, PNG",
    description: "Affordable web design, development, and digital solutions for Lae businesses.",
    images: [
      {
        url: "https://n30-website.vercel.app/logo.png", // FALLBACK
        width: 1200,
        height: 630,
        alt: "N30 Digital Solutions - Digital Agency Lae PNG",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "N30 Digital Solutions - Lae's Premier Digital Agency",
    description: "Transform your business with affordable, professional digital solutions.",
    images: ["https://n30-website.vercel.app/logo.png"], // FALLBACK
    creator: "@n30digital",
  },
  
  // Robots & crawlers
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
  
  // Canonical URL
  alternates: {
    canonical: "https://n30-website.vercel.app",
  },
  
  // Icons
  icons: {
    apple: "/favicon_io/apple-touch-icon.png",
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  
  manifest: "/favicon_io/site.webmanifest",
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
              gtag('event', 'page_view', {
                'page_title': document.title,
                'page_path': window.location.pathname
              });
              window.trackConversion = function(event_name) {
                gtag('event', event_name, {
                  'event_category': 'engagement',
                  'timestamp': new Date().toISOString()
                });
              };
            `,
          }}
        />

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
              "description": "Premier digital agency in Lae, Papua New Guinea providing web design, development, and digital solutions.",
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
                "email": "n30digitalsolutions@proton.me"
              }
            })
          }}
        />
        
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "N30 Digital Solutions",
              "description": "Digital agency specializing in web design, web development, mobile apps, and digital solutions.",
              "url": "https://n30-website.vercel.app",
              "logo": "https://n30-website.vercel.app/logo.png",
              "image": "https://n30-website.vercel.app/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Butibam Resource Centre",
                "addressLocality": "Lae",
                "addressRegion": "Morobe Province",
                "postalCode": "411",
                "addressCountry": "PG"
              },
              "telephone": "+675 7968 9919",
              "email": "n30digitalsolutions@proton.me",
              "sameAs": [
                "https://facebook.com/n30digital",
                "https://twitter.com/n30digital",
                "https://linkedin.com/company/n30digital"
              ],
              "priceRange": "PGK",
              "areaServed": {"@type": "City", "name": "Lae"},
              "serviceType": ["Web Design", "Web Development", "Mobile App Development", "Digital Solutions"],
              "openingHours": "Mo-Fr 08:00-17:00"
            })
          }}
        />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="Bv0hIJRzMwNY3Sd4ITvRrMFyNjgQRK0TKGMvm7BwqMY" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0066ff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### 2. Case Study Page (`app/blog/butibam-mantics-case-study/page.tsx`) ✅ CORRECT

```typescript
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaUser,
  FaCalendar,
} from 'react-icons/fa';

/**
 * Page-Level Metadata for Butibam Mantics Case Study
 * - Overrides root layout title, description, and images
 * - Uses page-specific hero image (mantics-hero.png)
 * - Proper Open Graph, Twitter, and LinkedIn support
 */
export const metadata: Metadata = {
  // Page-specific title and description
  title: 'Building the Butibam Mantics Rugby Team Website - N30 Digital Solutions',
  description: 'How modern web development transformed a local Lae rugby club with a complete digital upgrade, integrated database, and admin management tools.',
  keywords: ['rugby', 'web development', 'case study', 'Lae', 'digital solutions', 'butibam mantics'],
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Building the Butibam Mantics Rugby Team Website',
    description: 'Professional digital transformation for a local rugby club in Lae, PNG.',
    url: 'https://n30-website.vercel.app/blog/butibam-mantics-case-study',
    siteName: 'N30 Digital Solutions',
    type: 'article',
    publishedTime: '2025-12-09T00:00:00Z',
    authors: ['N30 Digital Solutions'],
    // Page-specific image OVERRIDES root layout
    images: [
      {
        url: 'https://n30-website.vercel.app/mantics-hero.png',
        width: 1200,
        height: 630,
        alt: 'Butibam Mantics Rugby Team Website',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Building the Butibam Mantics Rugby Team Website',
    description: 'Professional digital transformation for a local rugby club',
    // Page-specific image OVERRIDES root layout
    images: ['https://n30-website.vercel.app/mantics-hero.png'],
    creator: '@n30digital',
  },
};

export default function ManticsCaseStudy() {
  // Component code...
  return (
    <div className="min-h-screen bg-white">
      {/* Page content */}
    </div>
  );
}
```

---

## Social Media Preview Results

### When Sharing on Facebook
```
[MANTICS-HERO.PNG IMAGE]
Building the Butibam Mantics Rugby Team Website
Professional digital transformation for a local rugby club in Lae, PNG.
n30-website.vercel.app
```

### When Sharing on Twitter/X
```
[MANTICS-HERO.PNG IMAGE]
Building the Butibam Mantics Rugby Team Website
Professional digital transformation for a local rugby club
via @n30digital
```

### When Sharing on LinkedIn
```
[MANTICS-HERO.PNG IMAGE]
Building the Butibam Mantics Rugby Team Website
How modern web development transformed a local Lae rugby club...
Published Dec 9, 2025
N30 Digital Solutions
```

### When Sharing on WhatsApp
```
[MANTICS-HERO.PNG IMAGE]
Building the Butibam Mantics Rugby Team Website
Professional digital transformation for a local rugby club in Lae, PNG.
```

---

## TypeScript Safety ✅

Both `layout.tsx` and page files use the `Metadata` type from `'next'`:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // Full type checking & autocomplete
  openGraph: {
    images: [{
      url: 'string',      // ✅ Type-checked
      width: 1200,        // ✅ Must be number
      height: 630,        // ✅ Must be number
      alt: 'string',      // ✅ Type-checked
    }],
  },
};
```

---

## Best Practices

### ✅ DO:
- Use absolute URLs for all OG/Twitter images
- Set `metadataBase` in root layout
- Override only what you need on pages
- Use 1200x630px for OG images
- Include `alt` text for accessibility
- Keep root layout as fallback
- Export `metadata` as TypeScript-safe constant

### ❌ DON'T:
- Use relative paths for social images
- Duplicate canonical links
- Remove root layout metadata
- Mix `'use client'` with `Metadata` export (server-only)
- Forget `width` and `height` on OG images
- Use `logo.png` for page-specific content

---

## Image Dimensions Reference

| Platform | Optimal Size | Min Size | Aspect Ratio |
|----------|-------------|----------|--------------|
| Facebook | 1200x630px | 600x315px | 1.9:1 |
| Twitter | 1200x630px | 506x506px | 1.91:1 |
| LinkedIn | 1200x627px | 1200x627px | 1.91:1 |
| WhatsApp | 1200x630px | 600x315px | Any |

---

## Testing Social Previews

### Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/sharing/
2. Enter: `https://n30-website.vercel.app/blog/butibam-mantics-case-study`
3. Verify: Image, title, and description display correctly

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://n30-website.vercel.app/blog/butibam-mantics-case-study`
3. Verify: Preview shows `mantics-hero.png`

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/inspect/
2. Enter: `https://n30-website.vercel.app/blog/butibam-mantics-case-study`
3. Verify: Published date, image, and title correct

---

## Summary

Your Next.js 13 metadata setup is **fully optimized** for:
- ✅ Dynamic OG images per page
- ✅ Twitter Card preview images
- ✅ LinkedIn article metadata
- ✅ WhatsApp image previews
- ✅ Facebook sharing with custom images
- ✅ TypeScript type safety
- ✅ Proper metadata merging
- ✅ SEO structured data
- ✅ Google Analytics integration
- ✅ Responsive & accessible

**Current Status: PRODUCTION READY** 🚀
