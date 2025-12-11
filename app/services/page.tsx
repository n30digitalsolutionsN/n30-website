'use client';

import Link from 'next/link';
import {
  FaCode,
  FaDesktop,
  FaShoppingCart,
  FaPalette,
  FaMobileAlt,
  FaChartLine,
  FaSearch,
  FaServer,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Beautiful, modern website designs that captivate your audience and convert visitors into customers.',
      icon: FaDesktop,
      features: ['Responsive Design', 'User-Friendly Interface', 'Brand Consistency', 'Fast Loading'],
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Robust, scalable web applications built with the latest technologies and best practices.',
      icon: FaCode,
      features: ['Custom Solutions', 'API Integration', 'Database Design', 'Performance Optimization'],
    },
    {
      id: 3,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment integration, inventory management, and analytics.',
      icon: FaShoppingCart,
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design approach that creates intuitive and engaging digital experiences.',
      icon: FaPalette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: FaMobileAlt,
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Deployment'],
    },
    {
      id: 6,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategy consulting to help you navigate the digital landscape.',
      icon: FaChartLine,
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Technology Roadmap'],
    },
    {
      id: 7,
      title: 'SEO & Digital Marketing',
      description: 'Drive organic traffic and improve your online visibility with our marketing solutions.',
      icon: FaSearch,
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
    },
    {
      id: 8,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting solutions with ongoing maintenance and support for your digital assets.',
      icon: FaServer,
      features: ['Cloud Hosting', 'SSL Certificates', 'Regular Backups', '24/7 Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <FaStar className="text-yellow-300" /> Trusted by 500+ Clients
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Premium Digital
            <br />
            <span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Elevate your business with cutting-edge solutions that drive growth, maximize ROI, and create lasting customer relationships.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">⚡ Fast Delivery</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">🎯 Results Driven</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-100 text-sm font-medium">💎 Premium Quality</span>
          </div>
        </div>
      </section>
      <section className="py-32 px-4 bg-white relative">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eight Powerful <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is crafted to deliver exceptional results and transform your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Premium gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <IconComponent size={40} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-bold text-gray-900">Key Features:</h4>
                        <FaCheckCircle className="text-green-500" size={18} />
                      </div>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                            <span className="w-3 h-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full shrink-0"></span>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group-hover:gap-3">
                      Explore Service <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Process Section */}
      <section className="py-32 px-4 bg-linear-to-b from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Proven Process</span></h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A strategic methodology designed to deliver exceptional results and exceed expectations
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: '01', title: 'Discovery', description: 'Deep-dive into your business goals, challenges, and vision for success' },
                { step: '02', title: 'Strategy', description: 'Create comprehensive roadmaps and technical architecture for your project' },
                { step: '03', title: 'Execution', description: 'Build premium solutions with cutting-edge technologies and best practices' },
                { step: '04', title: 'Growth', description: 'Ongoing optimization, support, and scaling for sustained success' },
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <div className="text-6xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                </div>
              ))}
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
          <div className="inline-block mb-8 px-6 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
            <span className="text-white font-semibold">🚀 Limited Time Offer</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-10">
            Join 500+ businesses that have already seen remarkable growth. Let's discuss how our premium services can drive your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group bg-white text-blue-600 hover:text-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Free Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
              View Case Studies
            </button>
          </div>

          <p className="text-blue-100 font-medium">
            ✓ No commitment needed • ✓ Free strategy session • ✓ Fast response
          </p>
        </div>
      </section>
    </div>
  );
}
