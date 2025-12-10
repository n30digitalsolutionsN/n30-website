'use client';

import { useState } from 'react';

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
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Let's Work Together</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your digital transformation? Get in touch with our team to explore how we can help your business succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-300 text-green-800 px-4 py-4 rounded-lg">
                  <p className="font-semibold">Success!</p>
                  <p className="text-sm">Thank you for your message. We'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border border-red-300 text-red-800 px-4 py-4 rounded-lg">
                  <p className="font-semibold">Error</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Phone</h3>
                  <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                    +1 (234) 567-890
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Email</h3>
                  <a href="mailto:info@n30digital.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                    info@n30digital.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    123 Digital Street<br />
                    Tech City, TC 12345<br />
                    Country
                  </p>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600">
              Answers to frequently asked questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on scope and complexity. Most projects take 4-12 weeks. We provide a detailed timeline during the initial consultation.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive maintenance and support packages to keep your digital assets running smoothly and secure.',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern, industry-leading technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Google Cloud.',
              },
              {
                question: 'How much does a project cost?',
                answer: 'Project costs depend on requirements and scope. We provide custom quotes after understanding your needs during a consultation call.',
              },
              {
                question: 'Do you sign NDAs?',
                answer: 'Yes, we are happy to sign Non-Disclosure Agreements to protect your sensitive information and intellectual property.',
              },
              {
                question: 'Can you work with existing code?',
                answer: 'Absolutely. We can integrate with, improve, or refactor existing codebases as needed for your project.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-blue-300 transition"
              >
                <summary className="font-bold text-gray-900 text-lg flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 font-black ml-2">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-50 mb-8">
            Schedule a free consultation with our team to discuss your project and goals.
          </p>
        </div>
      </section>
    </div>
  );
}
