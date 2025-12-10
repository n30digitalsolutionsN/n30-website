'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
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

  const calculateReadingTime = (content: any[] | undefined): number => {
    if (!content) return 0;
    const text = content
      .map((block: any) => {
        if (block._type === 'block') {
          return block.children?.map((child: any) => child.text).join(' ') || '';
        }
        return '';
      })
      .join(' ');
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">Blog</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Insights & Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest articles on digital transformation, technology trends, and business insights
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
              <p className="text-lg text-gray-600 mt-6">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <p className="text-lg text-gray-600 mb-2">
                {posts.length === 0 ? 'No articles yet' : 'No articles match your search'}
              </p>
              {posts.length === 0 && (
                <p className="text-gray-500">Check back soon for new content</p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => {
                const readingTime = calculateReadingTime(post.content);
                const publishDate = new Date(post.publishedAt || post._updatedAt);
                
                return (
                  <Link key={post._id} href={`/blog/${post.slug.current}`}>
                    <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 p-8 cursor-pointer group">
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                          {post.title}
                        </h2>
                        <span className="text-blue-600 font-semibold text-sm whitespace-nowrap mt-1">Read →</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">📅</span>
                          <span>{publishDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        {readingTime > 0 && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium">⏱</span>
                            <span>{readingTime} min read</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 leading-relaxed line-clamp-2">
                        {post.content 
                          ? post.content
                              .filter((block: any) => block._type === 'block')
                              .slice(0, 1)
                              .map((block: any) => block.children?.map((child: any) => child.text).join('') || '')
                              .join('')
                          : 'Read the full article...'}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Stay Updated</h2>
          <p className="text-lg text-blue-50 mb-10">
            Subscribe to our newsletter for the latest insights and industry updates
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
