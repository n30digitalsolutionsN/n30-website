'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setSubscribeMessage('Please enter a valid email address');
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');
    
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '983b2ead-1282-4b3f-b7fe-7e43cf73e7a9';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email,
          subject: 'New Newsletter Subscription',
          message: `New subscriber: ${email}`,
          to_email: 'subscribe@n30digital.com',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to subscribe');
      }

      setSubscribeStatus('success');
      setSubscribeMessage('✓ Successfully subscribed! Check your email for confirmation.');
      setEmail('');
      
      // Reset message after 5 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 5000);
    } catch (error) {
      setSubscribeStatus('error');
      setSubscribeMessage('Failed to subscribe. Please try again later.');
      console.error('Newsletter subscription error:', error);
    }
  };

  const blogPosts = [
    {
      id: 0,
      title: 'How to Choose the Right Digital Agency in Lae',
      summary: 'A practical guide to spotting red flags and finding an agency that actually cares about your success. Includes what to look for, questions to ask, and why N30 Digital is different.',
      author: 'N30 Digital Solutions',
      date: 'Dec 13, 2025',
      category: 'Business Guide',
      slug: 'choosing-right-agency-lae',
      image: undefined,
      readTime: '12 min read',
    },
    {
      id: 1,
      title: 'Building the Butibam Mantics Rugby Team Website – A Complete Digital Upgrade',
      summary: 'How modern web development, database integration, and an admin dashboard transformed a local Lae rugby club\'s digital presence.',
      author: 'N30 Digital Solutions',
      date: 'Dec 9, 2025',
      category: 'Case Study',
      slug: 'butibam-mantics-case-study',
      image: '/mantics-hero.png',
      readTime: '8 min read',
    },
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="relative pt-28 pb-28 px-4 bg-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Insights and practical guides for digital transformation
          </p>
        </div>
      </section>

      {/* Search Section - Professional */}
      <section className="py-16 px-4 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching "<span className="font-medium">{searchTerm}</span>"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group flex gap-6 md:gap-8 pb-8 border-b border-gray-200 hover:no-underline transition-all last:border-b-0 cursor-pointer">
                    {/* Image */}
                    <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 mx-auto bg-gray-300 rounded-sm mb-2"></div>
                            <div className="text-xs text-gray-400">No Image</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 text-base leading-relaxed">
                          {post.summary}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                        <div className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          Read Article →
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">No articles match your search for "<span className="font-medium">{searchTerm}</span>"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Clear search
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white border-t">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg text-slate-300 mb-8">
            Subscribe to our newsletter for insights on digital transformation
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={subscribeStatus === 'loading'}
              className="flex-1 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-gray-900"
            />
            <button
              type="submit"
              disabled={subscribeStatus === 'loading'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscribeMessage && (
            <p className={`mt-4 text-sm ${
              subscribeStatus === 'success' ? 'text-green-300' : 'text-red-300'
            }`}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
