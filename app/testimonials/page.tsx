'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - N30 Digital Solutions',
  description: 'Read what our clients say about working with N30 Digital Solutions. Success stories from Lae businesses and organizations.',
  keywords: ['testimonials', 'client reviews', 'success stories', 'case studies', 'feedback'],
  openGraph: {
    title: 'Client Testimonials - N30 Digital Solutions',
    description: 'See what our happy clients have to say about our web design and development services.',
    url: 'https://n30-website.vercel.app/testimonials',
    siteName: 'N30 Digital Solutions',
    images: [
      {
        url: 'https://n30-website.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Testimonials',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials',
    description: 'Read success stories from our happy clients',
    images: ['https://n30-website.vercel.app/logo.png'],
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alofa Gware',
      role: 'Team Manager',
      company: 'Butibam Mantics Rugby Club',
      image: '/alofa.jpg',
      content: 'N30 Digital transformed our team\'s online presence completely. They understood what we needed and delivered a professional website that our players and sponsors love. The team was responsive, professional, and genuinely cared about our success. Highly recommend!',
      rating: 5,
      highlight: true,
    },
    {
      id: 2,
      name: 'Local Business Owner',
      role: 'Owner',
      company: 'Lae Local Enterprise',
      image: '/testimonial-default.jpg',
      content: 'Finally found a digital agency that understands local Lae businesses! Affordable, professional, and they actually deliver on their promises. N30 Digital is changing the game for small businesses in our community.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Community Partner',
      role: 'Manager',
      company: 'Local Community Initiative',
      image: '/testimonial-default.jpg',
      content: 'Working with N30 Digital was seamless. They listened to our needs and provided solutions that made sense for our budget. Their support continues even after launch, which is rare and appreciated.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction' },
    { number: '1st', label: 'Major Success Story' },
    { number: '∞', label: 'Growth Potential' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            What Our Clients <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Say</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Real feedback from businesses we've helped transform. See why local Lae companies trust N30 Digital Solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {testimonials.length > 0 && testimonials[0].highlight && (
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 border-2 border-blue-200 relative overflow-hidden">
              {/* Decorative quote icon */}
              <div className="absolute -top-4 -right-4 text-blue-100 opacity-30">
                <FaQuoteLeft size={120} />
              </div>

              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={24} />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[0].content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[0].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">{testimonials[0].name}</p>
                    <p className="text-gray-600">{testimonials[0].role} at {testimonials[0].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Client Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-linear-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Join successful Lae businesses that are thriving with N30 Digital Solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Schedule Your Free Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/blog/butibam-mantics-case-study"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
