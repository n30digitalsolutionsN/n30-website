'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';

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
    { number: '500+', label: 'Successful Projects', trend: '+45%' },
    { number: '99.9%', label: 'Uptime Guarantee', trend: 'Industry Leading' },
    { number: '48h', label: 'Avg Response Time', trend: '-20%' },
    { number: '4.9/5', label: 'Client Rating', trend: '★★★★★' },
  ];

  const features = [
    { title: 'AI-Powered Solutions', desc: 'Leverage cutting-edge AI for automation and insights' },
    { title: 'Mobile-First Design', desc: 'Optimized for all devices with responsive excellence' },
    { title: 'Security First', desc: 'Enterprise-grade security and compliance standards' },
    { title: '24/7 Support', desc: 'Dedicated team always available for your success' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc',
      quote: 'N30 Digital transformed our vision into reality. Results exceeded expectations by 150%.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'E-Commerce Pro',
      quote: 'Professional, reliable, and innovative. Our ROI improved dramatically within months.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Digital Agency',
      quote: 'Outstanding execution and strategic thinking. A true partner for growth.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Premium Experience */}
      <section className="relative pt-40 pb-40 px-4 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
        {/* Premium animated background */}
        <div className="absolute inset-0 opacity-30">
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
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
              <FaStar className="text-yellow-300" /> Lae-Based Digital Agency
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Digital Solutions
            <br />
            <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Built for Lae Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            We're a local PNG startup empowering Lae businesses with affordable, high-impact digital solutions. Your growth is our mission.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 mt-8">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">⚡ Fast Results</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">🎯 Results Driven</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">💎 Premium Quality</span>
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

      {/* Features Section - Premium */}
      <section className="py-32 px-4 bg-white relative">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">N30 Digital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with strategic thinking to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-10 border-2 border-blue-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Premium */}
      <section className="py-32 px-4 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaStar className="text-yellow-400" /> Our Services
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Comprehensive Digital <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Solutions</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine strategy, design, and technology to create solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-10 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-all group-hover:gap-3"
                  >
                    Discover More <FaArrowRight />
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
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaStar className="text-yellow-400" size={14} /> About Us
              </span>
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
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaStar className="text-yellow-400" size={14} /> Strategic Partners
            </span>
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
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ Testimonials
            </span>
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
                  Local Business Doubles Online Revenue
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
                      A Lae-based retail business struggled with minimal online presence and lost sales to competitors with better digital visibility.
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
                      We built a modern e-commerce website, optimized for local search, integrated payment processing, and launched targeted social media campaigns.
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
                      Within 6 months, online sales increased by 120%, customer engagement tripled, and they expanded to 2 additional locations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">120%</div>
                  <p className="text-sm text-gray-600 font-semibold">Revenue Growth</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">3x</div>
                  <p className="text-sm text-gray-600 font-semibold">Engagement Up</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">6mo</div>
                  <p className="text-sm text-gray-600 font-semibold">Timeline</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Success Story <FaArrowRight />
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
                    <p className="text-3xl font-black text-blue-600">Modern E-Commerce Platform</p>
                    <p className="text-gray-600 mt-3">Professional website, online sales, customer growth</p>
                  </div>

                  <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 font-semibold mb-3">Key Metrics</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Mobile-optimized design
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Fast page load times
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> SEO optimized
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span> Secure payments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
