'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function WhyLocalBusinessesNeedDigital() {

  const reasons = [
    {
      title: 'Customer Expectations Are Changing',
      description: 'In 2025, 80% of customers search online before making a purchase. If your business isn\'t online, they won\'t find you. A simple website puts you in front of potential customers searching for your services.',
    },
    {
      title: 'Credibility & Trust',
      description: 'A professional website signals that your business is legitimate and established. Local customers trust businesses with an online presence more than those without one.',
    },
    {
      title: 'Compete With Larger Businesses',
      description: 'You don\'t need a huge budget to compete. A well-designed website levels the playing field, allowing small local businesses to reach customers just like larger competitors.',
    },
    {
      title: 'Stay Connected With Customers',
      description: 'A website gives you a channel to communicate updates, news, and special offers directly to your customers. It\'s your digital storefront that\'s open 24/7.',
    },
    {
      title: 'Cost-Effective Marketing',
      description: 'Digital presence is significantly cheaper than traditional advertising. You reach more people for less money and can track what works.',
    },
    {
      title: 'Local SEO & Visibility',
      description: 'With proper optimization, when someone in Lae searches for your service, your business appears. This brings in customers actively looking for what you offer.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Get a Professional Website',
      description: 'Start with a simple, mobile-friendly website that clearly presents what you offer.',
    },
    {
      number: '2',
      title: 'Make It Findable Online',
      description: 'Optimize for search engines so customers can find you when they search for your services.',
    },
    {
      number: '3',
      title: 'Keep Customers Engaged',
      description: 'Share updates, testimonials, and news to build community and maintain customer relationships.',
    },
    {
      number: '4',
      title: 'Measure & Improve',
      description: 'Track what\'s working and continuously improve your digital presence based on customer behavior.',
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
            Why Local Lae Businesses <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Need Digital Presence</span> in 2025
          </h1>

          <div className="flex flex-wrap gap-6 text-blue-100 text-sm font-medium">
            <span className="flex items-center gap-2">
              <FaCalendar size={14} /> December 2025
            </span>
            <span className="flex items-center gap-2">
              <FaUser size={14} /> N30 Digital Team
            </span>
            <span className="bg-blue-500/30 px-3 py-1 rounded-full">Startup Guide</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              If you run a local business in Lae, you've probably wondered: "Do I really need a website?" The short answer is yes—and it's more important now than ever before. Let's explore why.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Why Digital Presence Matters</h2>

            {reasons.map((reason, idx) => (
              <div key={idx} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" size={24} />
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            ))}

            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">How to Get Started</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Don't feel overwhelmed. Getting started with a digital presence doesn't require a massive budget or technical knowledge. Here are simple steps:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-3">{step.number}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Real Example: Butibam Mantics</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We recently helped Butibam Mantics Rugby Club, a local Lae sports organization, build their digital presence. The impact was immediate:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-gray-700"><strong>More Visibility:</strong> Members and supporters can easily find information about the team</span>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-gray-700"><strong>Better Organization:</strong> Online registration forms and management tools streamlined operations</span>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-lg text-gray-700"><strong>Professional Image:</strong> A modern website elevated the organization's credibility</span>
              </li>
            </ul>

            <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-10 border-2 border-blue-200 my-12">
              <p className="text-lg text-gray-900 leading-relaxed">
                <strong>The bottom line:</strong> In 2025, a digital presence isn't a luxury—it's a necessity. Whether you're a sports team, retail business, service provider, or organization, being online helps you reach more customers and operate more efficiently.
              </p>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-8">Next Steps</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ready to get your local business online? We're here to help. As a startup agency focused on Lae businesses, we understand your needs and budget. We can help you build an affordable, professional digital presence that actually drives results.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you build an effective digital presence for your local business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Get Your Free Consultation
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-20 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/5-digital-mistakes-small-businesses" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">NEXT ARTICLE</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">5 Digital Mistakes Small Businesses Make</h4>
                  <p className="text-gray-600 mt-2">Avoid common pitfalls and learn what actually works.</p>
                </div>
              </Link>
              
              <Link href="/blog/butibam-mantics-case-study" className="group">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50">
                  <p className="text-sm text-blue-600 font-bold mb-2">CASE STUDY</p>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Butibam Mantics Success Story</h4>
                  <p className="text-gray-600 mt-2">See how we transformed a local rugby team's presence.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
