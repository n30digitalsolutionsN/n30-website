'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-36">
          {/* Logo - Larger */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png" 
              alt="N30 Digital Solutions" 
              width={500}
              height={400}
              priority
              className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-medium text-sm transition-colors duration-300 relative group ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button and Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            {/* WhatsApp Contact Link */}
            <a
              href="https://wa.me/67579689919?text=Hi%20N30%20Digital%20Solutions%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20web%20design%20and%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 font-semibold text-sm transition-colors duration-300 flex items-center gap-1"
              title="WhatsApp us"
            >
              💬 WhatsApp
            </a>
            
            {/* Get Started Button */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 px-3 rounded-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Mobile WhatsApp Contact Link */}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <a
                href="https://wa.me/67579689919?text=Hi%20N30%20Digital%20Solutions%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20web%20design%20and%20development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors flex items-center gap-2"
              >
                💬 WhatsApp
              </a>
            </div>
            
            <Link
              href="/contact"
              className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
