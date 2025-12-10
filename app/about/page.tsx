'use client';

import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in digital transformation.',
      emoji: '👨‍💼',
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer specializing in UX/UI design.',
      emoji: '👩‍🎨',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies.',
      emoji: '👨‍💻',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Strategy Manager',
      bio: 'Digital strategist focused on business growth.',
      emoji: '👩‍💼',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">About Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Building Digital Futures</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since 2014, we've been helping businesses transform and succeed through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                N30 Digital Solutions was founded in 2014 with a simple belief: every business deserves access to world-class digital solutions. What started as a small team of three visionaries has grown into a company of over 50 talented professionals.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, client success stories, and an unwavering commitment to excellence. We've partnered with startups, SMEs, and enterprises across diverse industries, consistently delivering solutions that drive real business impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be a trusted partner for digital transformation, helping businesses adapt, grow, and thrive in an increasingly digital world.
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-12 text-white">
              <div className="space-y-10">
                <div>
                  <div className="text-5xl md:text-6xl font-black mb-2">10+</div>
                  <p className="text-lg text-blue-100">Years in Business</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-black mb-2">300+</div>
                  <p className="text-lg text-blue-100">Projects Completed</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-black mb-2">250+</div>
                  <p className="text-lg text-blue-100">Satisfied Clients</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-black mb-2">98%</div>
                  <p className="text-lg text-blue-100">Client Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital solutions that drive sustainable growth, improve operational efficiency, and create meaningful customer experiences. We are committed to delivering excellence, innovation, and value in every project we undertake.
              </p>
            </div>
            <div className="bg-white rounded-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading digital solutions partner, recognized for our innovation, expertise, and unwavering commitment to client success. We envision a future where every business, regardless of size, has access to world-class digital capabilities that drive growth and transformation.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl p-12 border border-gray-200">
            <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Excellence', desc: 'We maintain the highest standards in all we do' },
                { title: 'Innovation', desc: 'We embrace new ideas and cutting-edge technology' },
                { title: 'Integrity', desc: 'We operate with honesty and transparency always' },
                { title: 'Collaboration', desc: 'We work together to achieve extraordinary results' },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-4">{['🎯', '💡', '✓', '🤝'][idx]}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-6">{member.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Partnership', desc: 'We are true partners invested in your long-term success' },
              { title: 'Proven Expertise', desc: 'Decades of combined experience across industries' },
              { title: 'Custom Solutions', desc: 'Tailored approaches designed for your unique needs' },
              { title: 'On-Time Delivery', desc: 'Efficient project management and reliable timelines' },
              { title: 'Quality Assurance', desc: 'Rigorous testing and continuous optimization' },
              { title: 'Ongoing Support', desc: '24/7 support team dedicated to your success' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-blue-50 mb-10">
            Let's discuss your digital transformation goals and how we can help your business succeed.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
