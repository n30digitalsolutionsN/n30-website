'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaCalendar, FaUser, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  // Sample blog posts data
  const blogPosts: { [key: string]: any } = {
    'web-design-trends-2024': {
      title: '10 Web Design Trends in 2024',
      author: 'Emily Rodriguez',
      date: 'December 5, 2024',
      category: 'Design',
      image: '🎨',
      content: `
        Web design is constantly evolving, and 2024 is bringing some exciting new trends. In this article, we'll explore the top 10 web design trends that are shaping the digital landscape.

        ## 1. Dark Mode Everything
        Dark mode has become more than just a trend—it's now an expectation. Users appreciate the reduced eye strain and extended battery life on mobile devices.

        ## 2. Minimalist Design
        Less is more. Clean, minimalist designs are continuing to dominate the web, focusing on whitespace and essential elements.

        ## 3. Micro-interactions
        Small animations and interactions are enhancing user experience without being overwhelming. These micro-interactions guide users and provide feedback.

        ## 4. 3D Elements
        With improved browser support, 3D graphics and animations are becoming more common in web design, creating immersive experiences.

        ## 5. Sustainable Web Design
        Companies are increasingly conscious of their digital carbon footprint, leading to more sustainable and efficient web design practices.

        ## Conclusion
        These trends reflect a broader movement toward more user-centric, efficient, and engaging web design. Keep these in mind as you plan your next digital project!
      `,
    },
    'optimize-website-speed': {
      title: 'How to Optimize Your Website for Speed',
      author: 'David Chen',
      date: 'December 1, 2024',
      category: 'Development',
      image: '⚡',
      content: `
        Website speed is crucial for user experience and SEO rankings. In this guide, we'll cover proven strategies to improve your website's performance.

        ## Why Speed Matters
        Studies show that users abandon websites that take more than 3 seconds to load. A faster website leads to better engagement, conversion rates, and search rankings.

        ## Image Optimization
        Images are often the largest assets on a website. Optimize them by:
        - Using modern formats like WebP
        - Compressing without losing quality
        - Implementing lazy loading
        - Using responsive image sizes

        ## Caching Strategies
        Implement both browser caching and server-side caching to reduce load times for returning visitors.

        ## Content Delivery Network (CDN)
        A CDN distributes your content across multiple servers globally, ensuring users download from the closest server to them.

        ## Minification
        Minify CSS, JavaScript, and HTML to reduce file sizes. Remove unnecessary characters without changing functionality.

        ## Conclusion
        Website optimization is an ongoing process. Regularly monitor your performance and implement these strategies to keep your site fast and responsive.
      `,
    },
    'future-ecommerce': {
      title: 'The Future of E-Commerce',
      author: 'Sarah Williams',
      date: 'November 28, 2024',
      category: 'Strategy',
      image: '🛒',
      content: `
        The e-commerce landscape is rapidly changing with new technologies and consumer expectations. Let's explore what the future holds.

        ## AI and Personalization
        Artificial intelligence is enabling unprecedented levels of personalization. From product recommendations to personalized shopping experiences, AI is revolutionizing how customers interact with online stores.

        ## Voice Commerce
        With the rise of smart speakers and voice assistants, voice-activated shopping is becoming increasingly common.

        ## Augmented Reality (AR)
        Customers want to see products in their environment before buying. AR technology is enabling virtual try-ons and product previews.

        ## Sustainability
        Consumers are increasingly concerned about environmental impact. E-commerce businesses that prioritize sustainable practices will have a competitive advantage.

        ## Direct-to-Consumer (D2C)
        Brands are increasingly bypassing traditional retailers to sell directly to consumers, improving margins and customer relationships.

        ## Conclusion
        The future of e-commerce will be shaped by technology, personalization, and sustainability. Businesses that adapt to these changes will thrive.
      `,
    },
  };

  const post = blogPosts[slug as string];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pt-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Article Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="text-blue-100 hover:text-white transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-col sm:flex-row gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser />
              <span>{post.author}</span>
            </div>
            <span className="bg-blue-400 bg-opacity-30 px-4 py-1 rounded-full">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-8xl">{post.image}</div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
              {post.content}
            </div>
          </article>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaShare /> Share This Article
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
              >
                <FaFacebook /> Share on Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
              >
                <FaTwitter /> Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
              >
                <FaLinkedin /> Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
