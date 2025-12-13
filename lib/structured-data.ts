'use client';

/**
 * JSON-LD Structured Data for SEO
 * Add this to your layout or pages for rich snippets
 */

export const organizationStructuredData = {
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
    "telephone": "+675 7968 9919",
    "email": "n30digitalsolutions@proton.me"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "N30 Digital Solutions",
  "image": "https://n30-website.vercel.app/logo.png",
  "description": "Digital agency providing web design, web development, and digital strategy services in Lae, Papua New Guinea",
  "url": "https://n30-website.vercel.app",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Room 1, Butibam Resource Centre",
    "addressLocality": "Lae",
    "addressRegion": "Morobe Province",
    "postalCode": "411",
    "addressCountry": "PG"
  },
  "telephone": "+675 7968 9919",
  "email": "n30digitalsolutions@proton.me",
  "priceRange": "PGK",
  "areaServed": ["PNG", "Papua New Guinea", "Lae"],
  "serviceType": "Web Design, Web Development, Digital Strategy",
  "sameAs": [
    "https://facebook.com/n30digital",
    "https://twitter.com/n30digital",
    "https://linkedin.com/company/n30digital"
  ]
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "N30 Digital Solutions"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Lae, Papua New Guinea"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design",
          "description": "Professional web design tailored to your brand"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "High-performance web applications built with modern technology"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Strategy",
          "description": "Data-driven strategies for online growth"
        }
      }
    ]
  }
};
