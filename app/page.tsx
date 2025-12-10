'use client';

import Link from 'next/link';
import { FaCode, FaShoppingCart, FaDesktop, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Beautiful, modern website designs that captivate your audience and convert visitors into customers.',
      icon: FaDesktop,
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Robust, scalable web applications built with the latest technologies and best practices.',
      icon: FaCode,
    },
    {
      id: 3,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment integration, inventory management, and analytics.',
      icon: FaShoppingCart,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Startup Inc',
      quote: 'N30 Digital transformed our online presence. Our website traffic increased by 300% in just 3 months!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'E-Commerce Pro',
      quote: 'Outstanding service and support. The team went above and beyond to deliver our project on time.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Brown',
      company: 'Digital Marketing Agency',
      quote: 'Best decision we made for our business. Highly recommend N30 Digital to anyone.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We create beautiful, powerful digital solutions that help your business grow and thrive in the modern marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About N30 Digital Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a team of passionate digital experts dedicated to transforming businesses through innovative technology solutions. With over 10 years of combined experience, we've helped hundreds of companies achieve their digital goals.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                <strong>Our Mission:</strong> To empower businesses of all sizes with cutting-edge digital solutions that drive growth, improve efficiency, and create meaningful customer experiences.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <div className="text-6xl font-bold mb-4">10+</div>
                <p className="text-xl mb-8">Years of Experience</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle /> 300+ Projects Completed
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle /> 250+ Happy Clients
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle /> 98% Client Satisfaction Rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={20} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Schedule a free consultation with our experts today and discover how we can help you achieve your digital goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
