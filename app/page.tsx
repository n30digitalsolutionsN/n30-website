'use client';

import Link from 'next/link';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Professional website designs that capture your brand identity and convert visitors into customers.',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'High-performance web applications built with cutting-edge technology and industry best practices.',
    },
    {
      id: 3,
      title: 'E-Commerce Solutions',
      description: 'Complete online store solutions with secure payments, inventory management, and analytics.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years in Business' },
    { number: '300+', label: 'Projects Completed' },
    { number: '250+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Retention' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc',
      quote: 'N30 Digital transformed our online presence. Our website traffic increased by 300% in just 3 months.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'E-Commerce Pro',
      quote: 'Outstanding service and support. The team delivered our project on time and exceeded expectations.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Digital Marketing Agency',
      quote: 'Best decision we made for our business. Highly recommend N30 Digital to any organization.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">Digital Solutions</span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
            Transform Your Business with <span className="text-blue-600">Digital Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive digital solutions that drive business growth, enhance customer experiences, and position your organization for long-term success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <div className="text-3xl text-blue-600">
                    {service.id === 1 && '✦'}
                    {service.id === 2 && '⚡'}
                    {service.id === 3 && '💼'}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Your Trusted Digital Partner</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                N30 Digital Solutions is a team of experienced professionals dedicated to delivering exceptional digital solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We combine strategic thinking, creative design, and technical expertise to transform your digital vision into reality. Our collaborative approach ensures that every solution is perfectly aligned with your business goals.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Learn Our Story
              </Link>
            </div>
            <div className="bg-blue-600 rounded-xl p-12 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-black mb-2">250+</div>
                  <p className="text-lg">Satisfied Clients Worldwide</p>
                </div>
                <div className="border-t border-blue-400 pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-1">✓</span>
                      <span className="font-medium">End-to-end digital solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-1">✓</span>
                      <span className="font-medium">Proven track record of success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-1">✓</span>
                      <span className="font-medium">Dedicated support team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and create a digital solution that drives real business results.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
