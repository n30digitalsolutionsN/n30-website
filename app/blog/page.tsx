'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendar, FaUser } from 'react-icons/fa';
import { client } from '@/lib/sanity.client';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  _updatedAt: string;
  content?: any[];
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          *[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            publishedAt,
            content
          }
        `;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white">
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Loading blog posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                {posts.length === 0 ? 'No blog posts yet. Check back soon!' : 'No posts match your search.'}
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <FaCalendar />
                        <span>{new Date(post.publishedAt || post._updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="text-gray-700 line-clamp-2">
                      {post.content ? 'Read more...' : 'No preview available'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
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
