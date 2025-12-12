'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaCode, FaDatabase, FaShieldAlt, FaUser, FaCalendar } from 'react-icons/fa';
import { useEffect } from 'react';

export default function ManticsCaseStudy() {
  useEffect(() => {
    // Add meta tags dynamically for social sharing
    const baseUrl = 'https://n30-website.vercel.app';
    const metaTags = [
      { property: 'og:title', content: 'Building the Butibam Mantics Rugby Team Website - N30 Digital Solutions' },
      { property: 'og:description', content: 'How modern web development transformed a local Lae rugby club with a complete digital upgrade, integrated database, and admin management tools.' },
      { property: 'og:image', content: `${baseUrl}/mantics-hero.png` },
      { property: 'og:url', content: `${baseUrl}/blog/butibam-mantics-case-study` },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'N30 Digital Solutions' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Building the Butibam Mantics Rugby Team Website' },
      { name: 'twitter:description', content: 'Professional digital transformation for a local rugby club' },
      { name: 'twitter:image', content: `${baseUrl}/mantics-hero.png` },
      { name: 'description', content: 'Explore how N30 Digital Solutions built a professional website for Butibam Mantics Rugby Team with database integration and admin dashboard.' },
    ];

    metaTags.forEach(tag => {
      const element = document.createElement('meta');
      if (tag.property) {
        element.setAttribute('property', tag.property);
      } else if (tag.name) {
        element.setAttribute('name', tag.name);
      }
      element.setAttribute('content', tag.content);
      document.head.appendChild(element);
    });

    return () => {
      // Cleanup: remove meta tags when component unmounts
      metaTags.forEach(tag => {
        const element = document.querySelector(
          tag.property 
            ? `meta[property="${tag.property}"]`
            : `meta[name="${tag.name}"]`
        );
        if (element) {
          element.remove();
        }
      });
    };
  }, []);

  const features = [
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Attractive, mobile-friendly site reflecting the team\'s identity'
    },
    {
      icon: '📝',
      title: 'Smart Forms',
      description: 'Team registration, membership, and contact forms'
    },
    {
      icon: '🔐',
      title: 'Admin Dashboard',
      description: 'Secure access for managing submissions and data'
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      description: 'Strong metadata and social sharing for visibility'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Fast, secure, and CDN-optimized hosting'
    },
    {
      icon: '📈',
      title: 'Scalable',
      description: 'Ready for future competitions and events'
    },
  ];

  const techStack = [
    { category: 'Front-end', tech: 'Next.js / React' },
    { category: 'Database', tech: 'PostgreSQL' },
    { category: 'Backend', tech: 'API Routes' },
    { category: 'Admin Panel', tech: 'Integrated Dashboard' },
    { category: 'Hosting', tech: 'Netlify CDN' },
  ];

  const shareUrl = 'https://n30-website.vercel.app/blog/butibam-mantics-case-study';

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Image Background */}
      <section className="relative pt-20 pb-0 px-4 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb & Badge */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors font-semibold">
              <FaArrowLeft size={14} /> Back to Blog
            </Link>
            
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                📱 Case Study
              </span>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Building the Butibam Mantics
              <br />
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Rugby Team Website</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              How modern web development transformed a local Lae rugby club with a complete digital upgrade, integrated database, and admin management tools.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600 text-base font-semibold">
              <div className="flex items-center gap-2">
                <FaUser size={16} />
                <span>N30 Digital Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar size={16} />
                <span>December 9, 2025</span>
              </div>
              <span className="text-gray-500">10 min read</span>
            </div>
          </div>

          {/* Featured Image Hero */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-0">
            <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-gray-200">
              <Image
                src="/mantics-hero.png"
                alt="Butibam Mantics Rugby Team Website"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-linear-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto max-w-5xl">
          
          {/* Introduction */}
          <div className="mb-20">
            <p className="text-2xl text-gray-800 leading-relaxed font-light mb-8">
              Community sports deserve professional digital experiences — and that's exactly what we set out to deliver with the new Butibam Mantics Rugby Team website, now live at <a href="https://mantics.netlify.app" className="text-blue-600 hover:text-blue-700 font-bold underline">mantics.netlify.app</a>.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              This project showcases how modern web development, smart database integration, and an intuitive admin dashboard can transform how local clubs manage operations and engage with supporters.
            </p>
          </div>

          {/* Project Overview */}
          <div className="mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-12">Strategic Project Overview</h2>
            <div className="bg-linear-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-12 md:p-16 border-2 border-blue-200 shadow-xl">
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                N30 Digital Solutions partnered with the Butibam Mantics Rugby Team to design and develop a full-featured modern website. The main goals were:
              </p>
              <ul className="space-y-5 mb-8">
                <li className="flex gap-4 text-lg">
                  <span className="text-blue-600 font-bold text-2xl shrink-0">✓</span>
                  <span className="text-gray-700 pt-1">Create an attractive, mobile-friendly site reflecting the team's identity</span>
                </li>
                <li className="flex gap-4 text-lg">
                  <span className="text-blue-600 font-bold text-2xl shrink-0">✓</span>
                  <span className="text-gray-700 pt-1">Centralize team registration, contact, and membership forms</span>
                </li>
                <li className="flex gap-4 text-lg">
                  <span className="text-blue-600 font-bold text-2xl shrink-0">✓</span>
                  <span className="text-gray-700 pt-1">Provide secure admin access for data review and management</span>
                </li>
                <li className="flex gap-4 text-lg">
                  <span className="text-blue-600 font-bold text-2xl shrink-0">✓</span>
                  <span className="text-gray-700 pt-1">Improve the team's visibility with strong SEO and metadata</span>
                </li>
                <li className="flex gap-4 text-lg">
                  <span className="text-blue-600 font-bold text-2xl shrink-0">✓</span>
                  <span className="text-gray-700 pt-1">Ensure the system is scalable for future competitions and events</span>
                </li>
              </ul>
              <p className="text-gray-700 pt-8 border-t-2 border-blue-200 italic text-lg leading-relaxed">
                "The result is a smooth, high-performance online platform that reflects the club's identity and ambitions."
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-12">Enterprise-Grade Technology Stack</h2>
            <p className="text-gray-700 mb-12 leading-relaxed text-lg">
              The build uses a modern and efficient stack designed for performance, reliability, and scalability:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon/Badge */}
                  <div className="relative mb-6 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl text-white text-2xl font-bold shadow-lg">
                    {idx === 0 && '⚛️'}
                    {idx === 1 && '🗄️'}
                    {idx === 2 && '🔧'}
                    {idx === 3 && '📊'}
                    {idx === 4 && '🚀'}
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">{item.category}</p>
                    <p className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{item.tech}</p>
                    
                    {/* Descriptive text */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {idx === 0 && 'Modern React framework with Next.js for server-side rendering and optimal performance'}
                      {idx === 1 && 'Enterprise-grade relational database for reliable data persistence and complex queries'}
                      {idx === 2 && 'Serverless API routes for secure backend operations and scalability'}
                      {idx === 3 && 'Centralized dashboard for real-time data visualization and management'}
                      {idx === 4 && 'Global CDN with optimized caching for lightning-fast content delivery'}
                    </p>
                  </div>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Powerful Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group relative bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Intelligent Data Management System</h2>
            <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white mb-8">
              <p className="text-lg mb-6 leading-relaxed">
                All front-end forms (Team Registration, Membership, Contact, Raffle, Sponsorship) now write directly into a PostgreSQL table.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
                <p className="font-bold mb-4">The Admin Dashboard receives:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span>Real-time submissions with timestamps</span>
                  </li>
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span>Clean, structured data batches</span>
                  </li>
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span>Easy filtering and export capabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span>Automated data validation</span>
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-blue-100">
                This removes manual paperwork and gives the club accurate data they can rely on for planning, communication, and reporting.
              </p>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Centralized Command Center: Admin Dashboard</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              One of the key features of the project is a centralized Admin Dashboard, accessible only to the team's authorized staff.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Provides:</h3>
                <ul className="space-y-4">
                  {['Clean, organized tables', 'Pagination & search', 'Submission timestamps', 'Form-specific filtering', 'Mobile-friendly layout', 'Data export tools'].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl p-10 text-white flex flex-col justify-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl font-bold mb-4">Digital Control Center</p>
                <p className="text-blue-100 leading-relaxed">
                  Turns the website into a comprehensive management platform for the Butibam Mantics, giving staff real-time access to all submissions and operations data.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Search Engine Excellence & Digital Visibility</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              To help promote the team and bring in new supporters, the website includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Custom metadata for each page', 'Social sharing preview cards (OG Tags)', 'Google-friendly SEO structure', 'Optimized performance scores', 'Clean URLs and accessibility markup'].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              These elements increase visibility across search engines and social networks, helping the Butibam Mantics reach new supporters and strengthen their online presence.
            </p>
          </div>

          {/* Impact */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Measurable Business Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Professional Presence', desc: 'A strong public-facing home that represents the team\'s caliber' },
                { title: 'Community Engagement', desc: 'Better ways to connect with supporters and build loyalty' },
                { title: 'Data-Driven Management', desc: 'Real-time insights for decision-making and planning' },
                { title: 'Modern Identity', desc: 'A digital presence matching their competitive spirit' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-4xl mb-4">
                    {idx === 0 && '🎯'}
                    {idx === 1 && '👥'}
                    {idx === 2 && '📈'}
                    {idx === 3 && '⭐'}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-8 p-8 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              It positions Butibam Mantics as a leading club in Lae with a strong digital foundation for future growth and community engagement.
            </p>
          </div>

          {/* Conclusion & CTA */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Key Takeaways & Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">💡 Key Success Factors</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">Modern, responsive design increases user engagement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">Integrated database eliminates manual data handling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">Admin dashboard provides real-time operational insights</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">SEO optimization drives organic traffic growth</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🎯 Recommendations for Your Organization</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-700">Invest in professional web presence for competitive edge</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-700">Automate operations to save time and reduce errors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-700">Prioritize mobile-first design for accessibility</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-700">Focus on data-driven decision making with analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion & CTA */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Conclusion: The Future of Digital Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              N30 Digital Solutions is proud to support community sports through technology. The Butibam Mantics website is more than a web build — it's a step forward in how local teams can use digital tools to grow, communicate, and succeed.
            </p>
            <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Digital Upgrade?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                If your organization or sports club needs a modern website with database integration and admin management tools, we're ready to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us Today <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-gray-600 font-semibold mb-6">Share this case study:</p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                💼 Share on LinkedIn
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                f Share on Facebook
              </a>
              <a 
                href={`https://wa.me/?text=Check%20out%20this%20case%20study%20on%20the%20Butibam%20Mantics%20Rugby%20Team%20Website%20-%20${encodeURIComponent(shareUrl)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                💬 Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center border-t border-gray-200 pt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors">
              <FaArrowLeft /> Back to Blog
            </Link>
            <span className="text-gray-600">Posted on December 9, 2025</span>
          </div>
        </div>
      </section>
    </div>
  );
}
