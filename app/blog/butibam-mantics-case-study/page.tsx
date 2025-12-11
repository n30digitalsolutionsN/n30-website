'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

export default function ManticsCaseStudy() {
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

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-8 transition-colors">
            <FaArrowLeft /> Back to Blog
          </Link>
          
          <div className="mb-8 inline-block">
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
              📱 Case Study
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Building the Butibam Mantics
            <br />
            <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Rugby Team Website</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
            How modern web development transformed a local Lae rugby club with a complete digital upgrade, integrated database, and admin management tools.
          </p>

          <div className="flex flex-wrap gap-4 text-blue-200 text-sm font-semibold">
            <span>N30 Digital Solutions</span>
            <span>•</span>
            <span>December 9, 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Community sports deserve professional digital experiences — and that's exactly what we set out to deliver with the new Butibam Mantics Rugby Team website, now live at <a href="https://mantics.netlify.app" className="text-blue-600 hover:text-blue-700 font-semibold">mantics.netlify.app</a>.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              This project showcases how modern web development, smart database integration, and an intuitive admin dashboard can transform how local clubs manage operations and engage with supporters.
            </p>
          </div>

          {/* Project Overview */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Project Overview</h2>
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 border border-blue-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                N30 Digital Solutions partnered with the Butibam Mantics Rugby Team to design and develop a full-featured modern website. The main goals were:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Create an attractive, mobile-friendly site</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Centralize team registration, contact, and membership forms</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Provide secure admin access for data review and management</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Improve the team's visibility with strong SEO and metadata</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Ensure the system is scalable for future competitions and events</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 pt-6 border-t border-blue-200 italic">
                The result is a smooth, high-performance online platform that reflects the club's identity and ambitions.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Web Technologies Used</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              The build uses a modern and efficient stack designed for performance, reliability, and scalability:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <p className="text-sm text-blue-600 font-bold mb-2">{item.category}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Key Features</h2>
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Forms Connected to Live PostgreSQL Database</h2>
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
<section className="py-24 px-4 bg-gray-50">
  <div className="container mx-auto max-w-6xl mb-16">
    
    <h2 className="text-4xl font-black text-gray-900 mb-6">Admin Dashboard for Club Management</h2>
    <p className="text-gray-700 mb-10 leading-relaxed">
      One of the most important features of this project is a centralized Admin Dashboard, accessible only to authorized staff of the team.
      It helps manage submissions, monitor activities, and make data-driven decisions quickly and efficiently.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Dashboard Features */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Provides:</h3>
        <ul className="space-y-4">
          {[
            'Clean, organized tables',
            'Pagination & search',
            'Submission timestamps',
            'Form-specific filtering',
            'Mobile-friendly layout',
            'Data export tools'
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Highlight */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-10 text-white flex flex-col justify-center">
        <div className="text-6xl mb-4">📊</div>
        <p className="text-xl font-bold mb-4">Digital Control Center</p>
        <p className="text-blue-100 leading-relaxed">
          Transforms the website into a complete management platform for the Butibam Mantics, giving staff real-time access to all submissions and operational data in one place.
        </p>
      </div>

    </div>
  </div>
</section>

          {/* SEO Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-8">SEO & Meta Tag Optimization</h2>
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Impact for the Butibam Mantics Rugby Team</h2>
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
            <h2 className="text-4xl font-black text-gray-900 mb-8">Conclusion</h2>
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
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                📱 Share on LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-semibold">
                𝕏 Share on Twitter
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
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
