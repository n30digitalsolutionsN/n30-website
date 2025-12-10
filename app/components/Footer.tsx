'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Blog', href: '/blog' },
    ],
    resources: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">N30</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">N30 Digital</span>
                <span className="text-xs text-gray-500">Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Delivering comprehensive digital solutions that drive business growth and transform enterprises.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Company</h3>
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
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Resources</h3>
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
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-gray-400 font-medium text-xs uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <p className="text-gray-400 font-medium text-xs uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:info@n30digital.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  info@n30digital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} N30 Digital Solutions. All rights reserved.
          </p>

          {/* Newsletter Signup */}
          <form className="w-full md:w-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full md:w-56 font-medium text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
