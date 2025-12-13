'use client';

import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Plans - N30 Digital Solutions',
  description: 'Affordable web design and development packages for businesses in Lae, PNG. Flexible pricing to fit your budget and needs.',
  keywords: ['pricing', 'plans', 'web design pricing', 'development packages', 'affordable', 'Lae'],
  openGraph: {
    title: 'Pricing Plans - N30 Digital Solutions',
    description: 'Transparent, affordable pricing for web design, development, and digital solutions.',
    url: 'https://n30-website.vercel.app/pricing',
    siteName: 'N30 Digital Solutions',
    images: [
      {
        url: 'https://n30-website.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'N30 Pricing Plans',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Pricing Plans',
    description: 'Flexible packages to fit your business needs and budget',
    images: ['https://n30-website.vercel.app/logo.png'],
  },
};

export default function Pricing() {
  const packages = [
    {
      id: 1,
      name: 'Startup Presence',
      price: 'PGK 299-499',
      period: 'one-time',
      description: 'Perfect for new businesses just getting online',
      features: [
        'Professional single-page or 3-page website',
        'Mobile-responsive design',
        'Contact form & email integration',
        'Basic SEO optimization',
        'Social media links',
        'Free 1-month support',
        'Hosting for 1 year',
      ],
      notIncluded: [
        'Content creation',
        'Logo design',
        'Database integration',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Professional Web',
      price: 'PGK 599-899',
      period: 'one-time',
      description: 'Our most popular choice - full-featured website',
      features: [
        'Multi-page professional website (5-8 pages)',
        'Modern, fully responsive design',
        'Advanced contact forms',
        'Blog section included',
        'SEO optimization & keyword research',
        'Google analytics setup',
        'Mobile app-like experience',
        '3 months of free support',
        'Hosting for 1 year',
        'Free maintenance updates',
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom integrations',
      ],
      cta: 'Get Your Site',
      highlighted: true,
    },
    {
      id: 3,
      name: 'Enterprise Solution',
      price: 'PGK 1,299+',
      period: 'custom',
      description: 'Complete digital transformation with all features',
      features: [
        'Everything in Professional Web +',
        'Custom database integration',
        'Admin dashboard for content management',
        'E-commerce functionality',
        'Advanced integrations (CRM, booking systems)',
        'Custom API development',
        'Team registration & membership systems',
        'SEO-optimized blog strategy',
        '6 months of dedicated support',
        'Monthly performance optimization',
      ],
      notIncluded: [],
      cta: 'Discuss Custom Plan',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'What\'s included in the price?',
      answer: 'Each package includes design, development, hosting for the first year, basic support, and SEO optimization. Check the features list for specific details.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment options. You can pay 50% upfront and 50% on delivery, or set up monthly installments. Contact us to discuss.',
    },
    {
      question: 'What happens after the first year of hosting?',
      answer: 'After the first year, you can renew hosting with us (typically K100-200/month) or transfer your website to another host.',
    },
    {
      question: 'Can I upgrade my package later?',
      answer: 'Absolutely. Many clients start with Startup Presence and upgrade to Professional Web as their business grows.',
    },
    {
      question: 'What if I need something custom?',
      answer: 'We love custom projects! Contact us with your requirements and we\'ll create a tailored solution and price quote.',
    },
    {
      question: 'How long does a website take to build?',
      answer: 'Startup Presence: 2-3 weeks. Professional Web: 4-6 weeks. Enterprise: 6-12 weeks depending on complexity.',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transparent <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Affordable packages designed for Lae businesses at every stage. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  pkg.highlighted
                    ? 'md:scale-105 border-2 border-blue-600 shadow-2xl'
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {pkg.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-linear-to-r from-blue-600 to-cyan-600 text-white py-2 text-center font-bold text-sm">
                    🌟 MOST POPULAR
                  </div>
                )}

                {/* Card Content */}
                <div className={`p-10 h-full flex flex-col ${pkg.highlighted ? 'bg-linear-to-br from-blue-50 to-white pt-16' : 'bg-white'}`}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="mb-2">
                      <span className="text-4xl font-black text-blue-600">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">({pkg.period})</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    <p className="font-bold text-gray-900 text-sm uppercase mb-4">Includes</p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}

                    {pkg.notIncluded.length > 0 && (
                      <>
                        <p className="font-bold text-gray-900 text-sm uppercase mt-6 mb-4">Not Included</p>
                        {pkg.notIncluded.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 opacity-60">
                            <span className="text-gray-400 mt-1">✕</span>
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.highlighted
                        ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {pkg.cta} <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-10 border border-blue-200 text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Something Custom?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Every business is unique. We create custom solutions tailored to your specific needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300"
            >
              Let's Discuss Your Project
            </Link>
          </div>

          {/* Why Choose Our Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">No Hidden Fees</h4>
              <p className="text-gray-600">What you see is what you pay. No surprise charges.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Clear Value</h4>
              <p className="text-gray-600">Every feature serves your business growth.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Options</h4>
              <p className="text-gray-600">Payment plans and custom packages available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Common <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-gray-400 group-open:rotate-180 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's Build Your Digital Presence
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Ready to get started? Schedule a free consultation to discuss your project and find the perfect package.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
