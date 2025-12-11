'use client';

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in digital transformation. Passionate about helping businesses succeed.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer specializing in UX/UI design. Creates stunning digital experiences.',
      image: '👩‍🎨',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies. Builds scalable solutions.',
      image: '👨‍💻',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Strategy Manager',
      bio: 'Digital strategist focused on business growth. Drives innovation and client success.',
      image: '👩‍💼',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">N30 Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We transform businesses through innovative digital solutions, strategic thinking, and exceptional execution.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Building Digital Futures Since 2014</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by visionary entrepreneurs, N30 Digital Solutions has grown into a leading digital innovation company. We partner with ambitious organizations to unlock their digital potential.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach combines strategic thinking, creative excellence, and technical precision to deliver solutions that drive real business value and sustainable growth.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Client-Focused</h4>
                    <p className="text-gray-600">Your success is our mission</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation-Driven</h4>
                    <p className="text-gray-600">Always adopting latest technologies</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Results-Oriented</h4>
                    <p className="text-gray-600">Measurable outcomes guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl">
              <div className="space-y-12">
                <div className="border-b border-white/20 pb-8">
                  <div className="text-6xl font-bold mb-3">500+</div>
                  <p className="text-xl text-blue-100">Successful Projects</p>
                </div>
                <div className="border-b border-white/20 pb-8">
                  <div className="text-6xl font-bold mb-3">99.9%</div>
                  <p className="text-xl text-blue-100">Uptime & Reliability</p>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-3">4.9★</div>
                  <p className="text-xl text-blue-100">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower businesses of all sizes with cutting-edge digital solutions that drive sustainable growth, improve operational efficiency, and create meaningful customer experiences. We are committed to delivering excellence, innovation, and value in every project we undertake.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading digital solutions partner in our region, recognized for our innovation, expertise, and unwavering commitment to client success. We envision a future where every business, regardless of size, has access to world-class digital capabilities.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Excellence', description: 'We strive for excellence in everything we do' },
                { title: 'Innovation', description: 'We embrace new ideas and technologies' },
                { title: 'Integrity', description: 'We operate with honesty and transparency' },
                { title: 'Collaboration', description: 'We work together to achieve great things' },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A talented group of professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-bold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="flex gap-4 justify-center mt-6">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss your digital transformation goals
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
