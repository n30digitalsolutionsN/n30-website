'use client';

/**
 * JSON-LD Structured Data for SEO
 * Add this to your layout or pages for rich snippets
 */

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "N30 Digital Solutions",
  "url": "https://n30digital.netlify.app",
  "logo": "https://n30digital.netlify.app/logo.png",
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
    "telephone": "+675-47-25-5555",
    "email": "hello@n30digital.com"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "N30 Digital Solutions",
  "image": "https://n30digital.netlify.app/og-image.jpg",
  "description": "Digital agency providing web design, web development, and digital strategy services in Lae, Papua New Guinea",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lae",
    "addressLocality": "Lae",
    "addressRegion": "Morobe",
    "postalCode": "411",
    "addressCountry": "PG"
  },
  "telephone": "+675-47-25-5555",
  "priceRange": "$$",
  "url": "https://n30digital.netlify.app",
  "areaServed": ["PNG", "Papua New Guinea", "Lae"],
  "serviceType": "Web Design, Web Development, Digital Strategy"
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
