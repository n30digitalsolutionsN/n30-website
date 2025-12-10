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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-50">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure your project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your goals and requirements' },
              { step: '02', title: 'Planning', description: 'Create a comprehensive project roadmap' },
              { step: '03', title: 'Execution', description: 'Build and deliver your solution' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss how we can help transform your business
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
