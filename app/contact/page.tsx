'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Gradient */}
      <section className="relative pt-32 pb-32 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">Get In <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span></h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Let's discuss your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-lg">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded-lg">
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-700 text-lg font-semibold mb-2">
                        Room 1, Butibam Resource Centre<br />
                        Butibam, Lae<br />
                        Morobe Province, Papua New Guinea
                      </p>
                      <p className="text-blue-600 font-mono text-sm bg-blue-50 px-3 py-2 rounded">
                        📍 What3Words: 72G8+95G
                      </p>
                      <a href="https://maps.app.goo.gl/your-google-maps-link" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <FaPhone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Phone</h3>
                      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 text-lg font-bold">
                        +675 7968 9919
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <FaEnvelope size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:info@n30digital.com" className="text-blue-600 hover:text-blue-700 text-lg font-bold">
                        n30digitalsolutions.proton.me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on the Map</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '8px' }}
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.4823896505816!2d146.98516!3d-6.72138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x681e8f5e5f5e5e5f%3A0x0!2sButibam%2C%20Lae%2C%20Morobe!5e0!3m2!1sen!2spg!4v1670000000000"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  What3Words: <span className="font-mono font-bold text-blue-600">72G8+95G</span> • Butibam, Lae, Morobe Province
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on scope and complexity. Most projects take 4-12 weeks. We\'ll provide a detailed timeline during the initial consultation.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive maintenance and support packages to keep your digital assets running smoothly.',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern, industry-leading technologies including React, Next.js, Node.js, and cloud platforms like AWS and Google Cloud.',
              },
              {
                question: 'How much does a project cost?',
                answer: 'Project costs depend on requirements and scope. We provide custom quotes after understanding your needs during consultation.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition"
              >
                <summary className="font-bold text-gray-900 text-lg">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
