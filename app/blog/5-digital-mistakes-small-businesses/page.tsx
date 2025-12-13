'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowLeft, FaTimes, FaCheckCircle } from 'react-icons/fa';

export default function FiveDigitalMistakes() {

  const mistakes = [
    {
      number: '1',
      title: 'No Website or Outdated Website',
      problem: 'Many small businesses either don\'t have a website or have one that looks like it\'s from 2010. This makes you look unprofessional and costs you customers.',
      solution: 'Invest in a modern, mobile-friendly website that clearly presents your services and makes it easy for customers to contact you.',
      cost: 'Affordable',
      impact: 'Very High',
    },
    {
      number: '2',
      title: 'Poor Mobile Experience',
      problem: 'Over 70% of internet traffic comes from mobile devices. If your website doesn\'t work well on phones, you\'re losing most of your potential customers.',
      solution: 'Ensure your website is fully optimized for mobile devices. Test it on phones before launching.',
      cost: 'Low-Medium',
      impact: 'Very High',
    },
    {
      number: '3',
      title: 'Ignoring SEO Completely',
      problem: 'Without SEO, your website is invisible. Customers searching for your services won\'t find you because you\'re not ranking in search results.',
      solution: 'Implement basic SEO practices: use relevant keywords, optimize page titles and descriptions, create quality content.',
      cost: 'Low',
      impact: 'Very High',
    },
    {
      number: '4',
      title: 'No Clear Call-to-Action',
      problem: 'Visitors come to your site but don\'t know what to do next. You\'re not converting traffic into leads or sales.',
      solution: 'Make it crystal clear what you want visitors to do: "Call Us", "Request a Quote", "Book an Appointment", "Contact Now".',
      cost: 'Free',
      impact: 'High',
    },
    {
      number: '5',
      title: 'Slow or Unreliable Website',
      problem: 'If your website is slow or goes down frequently, customers leave and go to competitors. Search engines also penalize slow sites.',
      solution: 'Use reliable hosting, optimize images and code, regularly maintain your website. Test speed regularly.',
      cost: 'Low-Medium',
      impact: 'High',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <section className="relative pt-24 pb-12 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 mb-6 transition-colors">
            <FaArrowLeft size={14} /> Back to Blog
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            5 Digital Mistakes <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Small Businesses Make</span>
          </h1>

          <div className="flex flex-wrap gap-6 text-blue-100 text-sm font-medium">
            <span className="flex items-center gap-2">
              <FaCalendar size={14} /> December 2025
            </span>
            <span className="flex items-center gap-2">
              <FaUser size={14} /> N30 Digital Team
            </span>
            <span className="bg-blue-500/30 px-3 py-1 rounded-full">Digital Strategy</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Running a small business is challenging. Adding digital transformation on top of everything else can feel overwhelming. But here's the thing: making small, smart digital decisions now can save you thousands in lost revenue later.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              We've worked with local businesses in Lae and noticed some common patterns—digital mistakes that are easy to make but expensive to ignore. Let's break down the 5 most costly mistakes and how to fix them.
            </p>
          </div>

          {/* Mistakes */}
          {mistakes.map((mistake, idx) => (
            <div key={idx} className="mb-12 pb-12 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start gap-6">
                <div className="text-5xl font-black text-blue-600 shrink-0">{mistake.number}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{mistake.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FaTimes className="text-red-600" size={18} /> The Problem
                      </h4>
                      <p className="text-lg text-gray-700">{mistake.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" size={18} /> The Solution
                      </h4>
                      <p className="text-lg text-gray-700">{mistake.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                      <div>
                        <p className="text-sm font-bold text-gray-600 uppercase">Fix Cost</p>
                        <p className="text-lg font-bold text-blue-600">{mistake.cost}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600 uppercase">Business Impact</p>
                        <p className="text-lg font-bold text-green-600">{mistake.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Key Takeaway */}
          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-10 border-2 border-blue-200 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Digital success doesn't require perfection. Start with the basics: a mobile-friendly website, clear messaging, and basic SEO. Fix these five mistakes, and you'll immediately improve your online visibility and customer experience.
            </p>
          </div>

          {/* How We Help */}
          <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Can Help</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At N30 Digital Solutions, we've helped local Lae businesses fix these exact mistakes. Whether you need a new website, SEO optimization, or a complete digital refresh, we have affordable solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-900 mb-2">Website Design</h4>
                <p className="text-gray-600">Modern, mobile-friendly websites that convert</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-bold text-gray-900 mb-2">SEO Services</h4>
                <p className="text-gray-600">Get found by customers searching for your services</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-bold text-gray-900 mb-2">Performance</h4>
                <p className="text-gray-600">Fast, secure, reliable websites that work</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Don't Let These Mistakes Cost You</h3>
            <p className="text-xl text-blue-100 mb-8">
              Get a free audit of your current digital presence. We'll identify problems and give you actionable recommendations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Schedule Your Free Audit
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-20 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/why-local-businesses-need-digital" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">PREVIOUS</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Why Local Businesses Need Digital Presence</h4>
                  <p className="text-gray-600 mt-2">Understand the business case for digital transformation.</p>
                </div>
              </Link>
              
              <Link href="/blog/butibam-mantics-case-study" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">CASE STUDY</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Butibam Mantics Success Story</h4>
                  <p className="text-gray-600 mt-2">See how we transformed a local rugby team's digital presence.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
