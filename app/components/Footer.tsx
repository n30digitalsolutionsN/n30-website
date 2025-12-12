'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
    ],
    resources: [
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section - Premium */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image 
                src="/logo.png" 
                alt="N30 Digital Solutions" 
                width={400}
                height={320}
                className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions and strategic technology partnerships.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-gray-400 transition-all duration-300 hover:scale-125 ${social.color}`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-gray-400 font-medium mb-2">Address</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Room 1, Butibam Resource Centre<br />
                  Butibam, Lae<br />
                  Morobe Province, PNG
                </p>
              </li>
              <li>
                <a
                  href="https://wa.me/6757968919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-medium block mb-1"
                >
                  💬 +675 7968 9919 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:n30digitalsolutions.proton.me"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium text-xs break-all"
                >
                  ✉️ n30digitalsolutions.proton.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-10 border border-blue-500/30 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white mb-2 text-lg">🚀 Ready to Launch?</h4>
              <p className="text-gray-300 text-sm">Get your business online with an affordable, professional website.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 text-lg">💬 Questions?</h4>
              <p className="text-gray-300 text-sm">Reach out anytime. We're here to help your business succeed.</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Get Started Today →
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} N30 Digital Solutions. All rights reserved. | Crafted with ❤️ for your success
          </p>

          {/* Newsletter Signup */}
          <form className="w-full md:w-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full md:w-64 font-medium text-sm"
            />
            <button
              type="submit"
              className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
