import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'N30 Digital Solutions - Web Design & Development in Lae, Papua New Guinea',
  description: 'Premier digital agency in Lae, PNG. We deliver affordable, high-impact web design, development, and digital solutions for local businesses. Transform your online presence today.',
  keywords: ['web design', 'web development', 'digital solutions', 'Lae', 'Papua New Guinea', 'business website', 'e-commerce', 'SEO'],
  openGraph: {
    title: 'N30 Digital Solutions - Web Design & Development in Lae',
    description: 'Affordable, high-impact web design and development for Lae businesses. Transform your digital presence today.',
    url: 'https://n30-website.vercel.app',
    siteName: 'N30 Digital Solutions',
    images: [
      {
        url: 'https://n30-website.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'N30 Digital Solutions',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N30 Digital Solutions - Lae Web Design & Development',
    description: 'Transform your business with affordable digital solutions',
    images: ['https://n30-website.vercel.app/logo.png'],
  },
};

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Beautiful, conversion-optimized websites that reflect your brand and engage your audience.',
      icon: '🎨',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Lightning-fast, scalable applications built with modern architecture and best practices.',
      icon: '⚙️',
    },
    {
      id: 3,
      title: 'Digital Strategy',
      description: 'Data-driven strategies that align technology with your business goals and market demands.',
      icon: '📊',
    },
  ];

  const stats = [
    { number: '1', label: 'Startup Agency', trend: 'Founded Nov 2025' },
    { number: '100%', label: 'Client Success', trend: 'Satisfaction Rate' },
    { number: '∞', label: 'Growth Potential', trend: 'Scalable Solutions' },
    { number: '24/7', label: 'Dedicated Support', trend: 'Always Available' },
  ];

  const features = [
    { title: 'Mobile-First Design', desc: 'Optimized for all devices with responsive excellence', icon: '📱' },
    { title: 'Security First', desc: 'Enterprise-grade security and compliance standards', icon: '🔒' },
    { title: '24/7 Support', desc: 'Dedicated team always available for your success', icon: '💬' },
    { title: 'Proven Results', desc: 'Track record of delivering measurable business impact', icon: '📈' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Alofa Gware',
      company: 'Team Manager-Butibam Mantics',
      quote: 'N30 Digital transformed our online presence. Their expertise and dedication are unmatched.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Premium Experience */}
      <section className="relative pt-40 pb-40 px-4 text-white overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/home/home-hero-bg.png)' }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Premium animated background overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Digital Solutions
            <br />
            <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Built for Lae Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            We're a local PNG startup empowering Lae businesses with affordable, high-impact digital solutions. Your growth is our mission.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 mt-8">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium"></span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium"></span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium"></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="group bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Explore Our Work <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:border-cyan-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium */}
      <section className="py-32 px-4 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="group text-center">
                <div className="text-6xl md:text-7xl font-black mb-3 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-blue-100 font-semibold text-lg mb-2">{stat.label}</p>
                <span className="text-sm text-cyan-300 font-medium">{stat.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Redesign */}
      <section className="py-32 px-4 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-40 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">N<span className="font-bebas-neue text-7xl md:text-8xl font-black italic" style={{letterSpacing: '-3px', fontVariationSettings: '"wght" 700'}}>30</span> Digital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with strategic thinking to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-600 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-transparent bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Premium Redesign */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Comprehensive Digital <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine strategy, design, and technology to create solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-4"
              >
                {/* Premium gradient card */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-600 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="relative p-10">
                  {/* Service number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.id}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text"
                  >
                    Discover More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Lae's Growing Digital <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Innovation Hub</span></h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Born from a passion to support local Lae businesses, we're a startup committed to making professional digital solutions accessible and affordable for PNG entrepreneurs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand the unique challenges of doing business in Papua New Guinea. Our team is deeply rooted in Lae, working with local enterprises to build digital presence that drives real results in our community.
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Every project is a partnership with our Lae community. We're invested in your success because your growth strengthens our entire city.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn Our Story <FaArrowRight />
              </Link>
            </div>
            <div className="relative bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-40 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 space-y-10">
                <div className="border-b border-blue-400 pb-8">
                  <div className="text-7xl font-black mb-4">25+</div>
                  <p className="text-xl text-blue-100 font-semibold">Lae Businesses Transformed</p>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-1">✓</span>
                    <span className="text-lg font-semibold leading-relaxed">End-to-end digital solutions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-1">✓</span>
                    <span className="text-lg font-semibold leading-relaxed">Proven track record of success</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-3xl mt-1">✓</span>
                    <span className="text-lg font-semibold leading-relaxed">Dedicated support team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Premium */}
      <section className="py-32 px-4 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Supporting <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Lae's Business Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with local Lae businesses and organizations committed to growth, innovation, and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Butibam Mantic's Partner Card */}
            <div className="group relative bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <Image 
                    src="/mantics-logo.jpg" 
                    alt="Butibam Mantic's Logo" 
                    width={120}
                    height={120}
                    className="h-28 w-28 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Butibam Mantic's</h3>
                <p className="text-gray-600 text-lg font-semibold mb-2 text-center">Rugby Union Team</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">Based in Lae, Papua New Guinea. A dynamic rugby union team committed to athletic excellence and community development.</p>
                
                <div className="border-t border-gray-200 pt-6 text-center">
                  <p className="text-sm text-blue-600 font-bold">Partnership Focus</p>
                  <p className="text-gray-700 mt-2">Digital presence & brand development</p>
                </div>
              </div>
            </div>

            {/* Add More Partners Placeholder Cards */}
            <div className="group relative bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border-2 border-dashed border-gray-300 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 opacity-50">+</div>
              <p className="text-gray-600 font-semibold text-center">Your Partnership Opportunity</p>
              <p className="text-gray-500 text-sm mt-2 text-center">Let's collaborate and grow together</p>
            </div>

            <div className="group relative bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border-2 border-dashed border-gray-300 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 opacity-50">+</div>
              <p className="text-gray-600 font-semibold text-center">Your Partnership Opportunity</p>
              <p className="text-gray-500 text-sm mt-2 text-center">Let's collaborate and grow together</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-8">
              Interested in becoming a partner? We'd love to hear from you!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium */}
      <section className="py-32 px-4 bg-linear-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">What Our Clients <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Say</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join satisfied businesses that have transformed with our premium solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-8">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section - Premium */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaStar className="text-yellow-400" size={14} /> Success Story
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Real Results, Real <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how we transformed a local Lae business with digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Case Study Content */}
            <div>
              <div className="mb-8">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold mb-6">
                  FEATURED CASE STUDY
                </span>
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Butibam Mantics Rugby Team Website
                </h3>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Butibam Mantics needed a professional online platform to manage team registrations, memberships, competitions, and engage with supporters across Lae.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We built a modern, mobile-friendly website with integrated forms, admin dashboard, database management, SEO optimization, and secure hosting on Netlify CDN.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">The Results</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Professional digital presence, streamlined team management, increased member engagement, and a scalable platform ready for future growth and events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600 font-semibold">Digital Ready</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">Live</div>
                  <p className="text-sm text-gray-600 font-semibold">On Netlify</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">Full</div>
                  <p className="text-sm text-gray-600 font-semibold">Admin Panel</p>
                </div>
              </div>

              <Link
                href="/blog/butibam-mantics-case-study"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Read Full Case Study <FaArrowRight />
              </Link>
            </div>

            {/* Case Study Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl transform -rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-12 shadow-2xl">
                <div className="space-y-8">
                  <div className="text-center py-8 border-b border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">BEFORE</p>
                    <p className="text-3xl font-black text-gray-400">No Digital Presence</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                      ↓
                    </div>
                  </div>

                  <div className="text-center py-8 border-t border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">AFTER</p>
                    <p className="text-3xl font-black text-blue-600">Professional Rugby Team Website</p>
                    <p className="text-gray-600 mt-3">Complete digital platform with admin tools</p>
                  </div>

                  <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 font-semibold mb-3">Key Features</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Mobile-friendly design
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Team registration forms
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Admin dashboard
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Database integration
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> SEO optimized
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">Visit the live site at:</p>
                    <a href="https://mantics.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                      mantics.netlify.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Advantage Section */}
      <section className="py-32 px-4 bg-linear-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Fresh & Hungry
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Why Partner With A <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Startup Agency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              New startups bring energy, innovation, and commitment to growth. We're not just building websites—we're building partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">We offer competitive rates without compromising quality. Perfect for growing businesses.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Modern Technology</h3>
              <p className="text-gray-600">We use the latest tools and frameworks to build fast, secure, scalable solutions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Attention</h3>
              <p className="text-gray-600">You're not just a ticket number. We treat every client as a partner in success.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Results Focused</h3>
              <p className="text-gray-600">We measure success by your business growth, not just completed deliverables.</p>
            </div>
          </div>

          <div className="mt-16 bg-linear-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-10 border border-blue-200">
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              <span className="font-bold text-blue-600">Limited Slots Available:</span> As a new agency, we're taking on a limited number of clients to ensure exceptional quality and personal attention. Be part of our founding client success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-40 px-4 bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 text-white overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-10">
            Let's discuss your project and create a digital solution that drives real business results.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Get Started Today <FaArrowRight />
          </Link>

          <p className="text-blue-100 font-medium mt-8">
            ✓ Free consultation • ✓ No commitment • ✓ Fast turnaround
          </p>
        </div>
      </section>
    </div>
  );
}
