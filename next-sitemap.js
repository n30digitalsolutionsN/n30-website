// This file generates a sitemap.xml for SEO
// In next.js 14+, this is typically handled by route handlers

const routes = [
  { url: '/', priority: '1.0' },
  { url: '/services', priority: '0.9' },
  { url: '/blog', priority: '0.8' },
  { url: '/contact', priority: '0.9' },
  { url: '/about', priority: '0.7' },
  { url: '/blog/butibam-mantics-case-study', priority: '0.8' },
];

module.exports = routes;
