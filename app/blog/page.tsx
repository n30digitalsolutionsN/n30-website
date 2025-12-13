'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

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
      {/* Hero Section - Modern Gradient */}
      <section className="relative pt-32 pb-32 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">Our <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog</span></h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and thoughts on digital transformation
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          {searchTerm && (
            <p className="mt-4 text-gray-600">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-56 md:h-64 overflow-hidden bg-gray-200">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white text-6xl">📝</span>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col grow">
                      {/* Title */}
                      <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-gray-600 text-base mb-6 grow line-clamp-3">
                        {post.summary}
                      </p>

                      {/* Meta Information */}
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <FaCalendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaUser size={14} />
                            <span>{post.author}</span>
                          </div>
                          {post.readTime && (
                            <span className="text-gray-500">{post.readTime}</span>
                          )}
                        </div>

                        {/* Read More Button */}
                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          Read More
                          <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-7xl mb-6">🔍</div>
              <p className="text-2xl font-bold text-gray-900 mb-3">No articles found</p>
              <p className="text-lg text-gray-600 mb-6">No articles match your search for "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-50">
            Subscribe to our newsletter for the latest insights and tips
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={subscribeStatus === 'loading'}
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={subscribeStatus === 'loading'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscribeMessage && (
            <p className={`mt-4 text-sm ${
              subscribeStatus === 'success' ? 'text-green-100' : 'text-red-100'
            }`}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
