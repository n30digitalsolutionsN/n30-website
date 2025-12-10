'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaCalendar, FaUser } from 'react-icons/fa';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: '10 Web Design Trends in 2024',
      summary: 'Explore the latest web design trends that are shaping the digital landscape this year.',
      author: 'Emily Rodriguez',
      date: 'Dec 5, 2024',
      category: 'Design',
      slug: 'web-design-trends-2024',
    },
    {
      id: 2,
      title: 'How to Optimize Your Website for Speed',
      summary: 'Learn proven strategies to improve your website performance and user experience.',
      author: 'David Chen',
      date: 'Dec 1, 2024',
      category: 'Development',
      slug: 'optimize-website-speed',
    },
    {
      id: 3,
      title: 'The Future of E-Commerce',
      summary: 'Understanding AI, personalization, and the next generation of online shopping.',
      author: 'Sarah Williams',
      date: 'Nov 28, 2024',
      category: 'Strategy',
      slug: 'future-ecommerce',
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why It Matters',
      summary: 'Discover why mobile-first approach is crucial for your digital strategy.',
      author: 'Emily Rodriguez',
      date: 'Nov 25, 2024',
      category: 'Design',
      slug: 'mobile-first-design',
    },
    {
      id: 5,
      title: 'SEO Best Practices Guide',
      summary: 'A comprehensive guide to improving your search engine rankings organically.',
      author: 'Alex Johnson',
      date: 'Nov 20, 2024',
      category: 'Marketing',
      slug: 'seo-best-practices',
    },
    {
      id: 6,
      title: 'Building Secure Web Applications',
      summary: 'Essential security practices every web developer should know.',
      author: 'David Chen',
      date: 'Nov 15, 2024',
      category: 'Development',
      slug: 'secure-web-apps',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl text-blue-50">
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-semibold text-sm whitespace-nowrap">
                      {post.category}
                    </span>
                  </div>

                  <p className="text-gray-700 text-lg mb-6">{post.summary}</p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex flex-col sm:flex-row gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUser size={16} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No articles found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-50">
            Subscribe to our newsletter for the latest insights and tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
