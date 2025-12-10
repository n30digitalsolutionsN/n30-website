'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

interface BlogPost {
  title: string;
  slug: { current: string };
  content: any[];
  publishedAt: string;
  _id: string;
}

// Calculate reading time
const calculateReadingTime = (content: any[]): number => {
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
  return Math.ceil(wordCount / 200); // Average reading speed is 200 words per minute
};

// Initialize Sanity image builder
const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

const portableTextComponents = {
  types: {
    block: ({ value }: any) => {
      const style = value.style || 'normal';

      if (style === 'h1') {
        return <h1 className="text-5xl font-bold my-8 text-gray-900 leading-tight">{value.children.map((child: any) => child.text).join('')}</h1>;
      }
      if (style === 'h2') {
        return <h2 className="text-4xl font-bold my-7 mt-10 text-gray-900 leading-tight border-l-4 border-blue-600 pl-6">{value.children.map((child: any) => child.text).join('')}</h2>;
      }
      if (style === 'h3') {
        return <h3 className="text-2xl font-bold my-6 text-gray-800">{value.children.map((child: any) => child.text).join('')}</h3>;
      }
      if (style === 'blockquote') {
        return <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 my-6 italic text-gray-700 text-lg">{value.children.map((child: any) => child.text).join('')}</blockquote>;
      }
      return (
        <p className="text-gray-700 leading-8 my-6 text-lg">
          {value.children.map((child: any, idx: number) => (
            <span key={idx}>
              {child.marks?.includes('strong') ? <strong className="font-semibold text-gray-900">{child.text}</strong> : child.text}
              {child.marks?.includes('em') ? <em className="italic">{child.text}</em> : null}
            </span>
          ))}
        </p>
      );
    },
    image: ({ value }: any) => (
      <figure className="my-8">
        <img 
          src={urlFor(value.asset).width(800).url()} 
          alt={value.alt || 'Article image'} 
          className="w-full rounded-lg shadow-lg"
        />
        {value.caption && <figcaption className="text-center text-gray-600 mt-4 text-sm italic">{value.caption}</figcaption>}
      </figure>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  list: ({ children }: any) => <ul className="list-disc list-inside my-6 space-y-2 text-gray-700 text-lg">{children}</ul>,
  listItem: ({ children }: any) => <li className="ml-4">{children}</li>,
};

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `
          *[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            content,
            publishedAt
          }
        `;
        const data = await client.fetch(query, { slug });

        if (!data) {
          setNotFound(true);
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 pt-20 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-6"></div>
          </div>
          <p className="text-xl text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 pt-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Back Button */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-16 pb-12 px-4 bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Blog Article</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 text-gray-600 pb-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Published</p>
              <p className="font-semibold text-gray-900">{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            {readingTime > 0 && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Reading Time</p>
                <p className="font-semibold text-gray-900">{readingTime} min read</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-2">
              {post.content ? (
                <div className="text-gray-700">
                  <PortableText value={post.content} components={portableTextComponents} />
                </div>
              ) : (
                <p className="text-gray-500 italic">No content available</p>
              )}
            </div>
          </article>

          {/* Divider */}
          <div className="my-12 border-t-2 border-gray-200"></div>

          {/* Share Section */}
          <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Share This Article</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-blue-50 mb-8">
                Let's discuss how we can help transform your business with our digital solutions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
