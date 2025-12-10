'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Professional, responsive website designs that capture your brand identity and drive conversions.',
      features: ['Responsive Design', 'Brand Consistency', 'User-Friendly Interface', 'SEO Optimized'],
      icon: '✦',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'High-performance web applications built with modern technologies and scalable architecture.',
      features: ['Custom Solutions', 'API Integration', 'Database Design', 'Performance Optimization'],
      icon: '⚡',
    },
    {
      id: 3,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with secure payments, inventory management, and analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
      icon: '💼',
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging, and accessible digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      icon: '🎨',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications optimized for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Deployment'],
      icon: '📱',
    },
    {
      id: 6,
      title: 'Digital Strategy',
      description: 'Strategic consulting to help you navigate the digital landscape and achieve business goals.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Technology Roadmap'],
      icon: '📊',
    },
    {
      id: 7,
      title: 'SEO & Marketing',
      description: 'Drive organic traffic and increase your online visibility with proven digital marketing strategies.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
      icon: '🔍',
    },
    {
      id: 8,
      title: 'Hosting & Support',
      description: 'Reliable hosting solutions with ongoing maintenance, security, and technical support.',
      features: ['Cloud Hosting', 'Security', 'Regular Backups', '24/7 Support'],
      icon: '🛡️',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understand your business, goals, and requirements' },
    { step: '02', title: 'Planning', description: 'Create a detailed project roadmap and strategy' },
    { step: '03', title: 'Execution', description: 'Build and deliver your solution with excellence' },
    { step: '04', title: 'Support', description: 'Ongoing optimization and technical support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Comprehensive Digital Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy and design to development and support, we provide end-to-end solutions to drive your digital success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Get started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your project succeeds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="text-5xl font-black text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: 'Experienced professionals with deep expertise in digital solutions' },
              { title: 'Custom Solutions', desc: 'Tailored approaches designed specifically for your business needs' },
              { title: 'Quality Focus', desc: 'Rigorous testing and quality assurance on every project' },
              { title: 'On-Time Delivery', desc: 'Efficient project management with on-schedule delivery' },
              { title: '24/7 Support', desc: 'Dedicated support team available whenever you need us' },
              { title: 'Scalable Solutions', desc: 'Solutions that grow with your business and scale seamlessly' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives and drive digital growth.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
